module.exports = {
  configureWebpack: config => {},
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.douban.com/v2',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}