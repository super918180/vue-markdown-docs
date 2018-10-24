module.exports = {
  productionSourceMap: false,
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('@chiaweilee/vue-markdown-loader')
      .loader('@chiaweilee/vue-markdown-loader')
      .options(require('./src/core/loader-option'))
  }
}