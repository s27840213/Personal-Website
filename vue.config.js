module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Personal-Website/'
    : '/',
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/assets/scss/main.scss";`
      }
    }
  }
}