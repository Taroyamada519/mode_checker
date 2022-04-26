const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/mode_checker',  // for github.io
  outputDir: 'docs',
  filenameHashing: false,
  productionSourceMap: false,
})
