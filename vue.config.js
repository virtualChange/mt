// vue.config.js
module.exports = {
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // 要公用的scss的路径
          resources: './src/assets/css/reset/index.scss'
        })
        .end()
    })
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://open.duyiedu.com',
        changeOrigin: true
      },
      '/location': {
        target: 'http://api.map.baidu.com',
        changeOrigin: true
      },
      '/cityjson': {
        target: 'http://pv.sohu.com',
        changeOrigin: true
      }
    }
  },
  publicPath: '/',
  assetsDir: 'static',
  outputDir: 'mt'
}
