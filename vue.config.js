module.exports = {
  publicPath: "./",
  outputDir: "build",
  productionSourceMap: false,
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://ugclandpage.pae.baidu.com',
        changeOrigin: true
      }
    }
  }
}
