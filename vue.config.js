

module.exports = {
  /**
  configureWebpack: {
    optimization: {
      minimize: true
    }
    module: {
      rules: [
        {
          test: /\.(le|c)ss$/, // 针对 .less 或者 .css 后缀的文件设置 loader
          use: [
            'css-loader',
            'postcss-loader', // 使用 postcss 为 css 加上浏览器前缀
            'less-loader' // 使用 less-loader 将 less 转为 css
          ]
        }
      ]
    }
    **/
  },
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