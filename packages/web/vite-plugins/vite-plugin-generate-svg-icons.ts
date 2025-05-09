import type { Plugin, ResolvedConfig } from 'vite'
import { Buffer } from 'node:buffer'
import fs from 'node:fs'
import path from 'node:path'

interface SvgIconsOptions {
  /** SVG 图标源目录，相对于项目根目录 */
  sourceDir?: string
  /** 输出文件路径，相对于项目根目录 */
  outputPath?: string
  /** 图标组件名前缀，默认为 'Icon' */
  prefix?: string
  /** 图标导入路径前缀，默认为 '~icons/base' */
  importPrefix?: string
}

function toPascalCase(str: string) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
}

export function vitePluginGenerateSvgIcons(options: SvgIconsOptions = {}): Plugin {
  let config: ResolvedConfig
  let sourcePath: string
  let outputPath: string
  let componentPrefix: string
  let iconImportPrefix: string

  return {
    name: 'vite-plugin-generate-svg-icons',

    configResolved(resolvedConfig) {
      config = resolvedConfig

      // 初始化配置
      sourcePath = path.resolve(
        config.root,
        options.sourceDir || 'src/assets/icons',
      )

      outputPath = path.resolve(
        config.root,
        options.outputPath || 'src/components/icons/svg.ts',
      )

      componentPrefix = options.prefix || 'Icon'
      iconImportPrefix = options.importPrefix || '~icons/base'
    },

    async buildStart() {
      // 生成图标导入文件
      async function generateIconsFile() {
        try {
          // 确保源目录存在
          if (!fs.existsSync(sourcePath)) {
            throw new Error(`Icons directory not found: ${sourcePath}`)
          }

          // 读取并过滤 SVG 文件
          const icons = fs.readdirSync(sourcePath)
            .filter(file => file.endsWith('.svg'))
            .sort()

          // 生成导入语句
          const imports = icons.map((file) => {
            const iconName = file.replace('.svg', '')
            const componentName = toPascalCase(iconName)

            // 读取 SVG 文件内容并生成 Base64 数据 URL
            const svgContent = fs.readFileSync(path.join(sourcePath, file), 'utf-8')
            const base64Data = Buffer.from(svgContent).toString('base64')
            const dataUrl = `data:image/svg+xml;base64,${base64Data}`

            return `export {\n/** ![${iconName}](${dataUrl}) */\n  default as ${componentPrefix}${componentName},\n} from '${iconImportPrefix}/${iconName}'`
          }).sort()

          // 生成文件内容
          const content = [
            '// This file is auto-generated by vite-plugin-generate-svg-icons',
            '// Do not edit this file manually',
            '',
            imports.join('\n\n'),
            '',
          ].join('\n')

          // 确保输出目录存在
          const outputDir = path.dirname(outputPath)
          if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true })
          }

          // 写入文件
          fs.writeFileSync(outputPath, content)

          if (config.command === 'serve') {
            config.logger.info(
              `Generated ${icons.length} SVG icon imports`,
              { timestamp: true },
            )
          }
        }
        catch (error) {
          config.logger.error(
            `Failed to generate SVG icons file:${
              error instanceof Error ? error.message : String(error)}`,
          )
        }
      }

      // 首次生成
      await generateIconsFile()

      // 开发模式下启用监听
      if (config.command === 'serve') {
        fs.watch(sourcePath, { recursive: true }, async (eventType, filename) => {
          if (filename?.endsWith('.svg')) {
            config.logger.info(`SVG file ${filename} changed, regenerating imports...`, { timestamp: true })
            await generateIconsFile()
          }
        })
      }
    },
  }
}
