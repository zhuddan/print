import path from 'node:path'
import React from '@vitejs/plugin-react'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import Icons from 'unplugin-icons/vite'
import { defineConfig, loadEnv } from 'vite'

import { vitePluginGenerateSvgIcons } from './vite-plugins/vite-plugin-generate-svg-icons'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, './')
  return {
    plugins: [
      React(),
      Icons({
        compiler: 'jsx',
        jsx: 'react',
        customCollections: {
          base: FileSystemIconLoader(
            './src/assets/icons',
            (svg) => {
              const w = svg.match(/(<svg [^>]*width=['"])(\d+)px(['"][^>]*>)/i)?.[2]
              if (w) {
                svg = svg.replace(/(<svg [^>]*width=['"])\d+px(['"][^>]*>)/gi, `$11em$2`)
              }
              const h = svg.match(/(<svg [^>]*height=['"])(\d+)px(['"][^>]*>)/i)?.[2]
              if (h) {
                svg = svg.replace(/(<svg [^>]*height=['"])\d+px(['"][^>]*>)/gi, `$11em$2`)
              }
              return svg.replace(/^<svg /, '<svg fill="currentColor" ')
            },
          ),
        },
      }),
      vitePluginGenerateSvgIcons({
        sourceDir: 'src/assets/icons',
        outputPath: 'src/components/icons/svg.ts',
        prefix: 'Icon',
        importPrefix: '~icons/base',
      }),
    ],
    server: {
      port: Number(env.VITE_APP_PORT),
      host: true,
    },
    define: {
      'process.env': {},
    },
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    // build: {
    //   rollupOptions: {
    //     external: ['/mocks/*'], // 排除 mocks 目录下的所有文件
    //   },
    // },
  }
})
