import antfu from '@antfu/eslint-config'

export default antfu({
  formatters: true,
  react: true,
}, {
  ignores: [
    './packages/web/public/mockServiceWorker.js',
  ],
})
