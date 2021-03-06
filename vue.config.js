module.exports = {
  productionSourceMap: false,
  css: {
    extract: false
  },
  // baseUrl: process.env.NODE_ENV === 'production'
  //   ? '/vue-markdown-docs/' // for github/docs
  //   : '/',
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
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use('i18n')
      .loader('@kazupon/vue-i18n-loader')
  }
}
