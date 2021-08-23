const path = require('path')
const { name } = require('./package.json')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const isProd = process.env.NODE_ENV === 'production'


module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',  //从根路径反问打包好的文件资源
  lintOnSave: process.env.NODE_ENV === 'development',  //是否开启 eslint-loader ，校验代码格式
  outputDir: name,
  productionSourceMap: false,
  chainWebpack (config) {
    if (isProd) {
      config.plugin('webpack-bundle-analyzer').use(BundleAnalyzerPlugin)   //包大小可视化分析工具
      config
        .optimization
        .minimize(true) // js文件最小化处理
        .splitChunks({ chunks: 'all' }) // 分割代码
      config.optimization.minimizer('terser').tap(options => {
        options[0].terserOptions.compress.drop_console = true
        return options
      })
    }
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
    config.resolve.alias.set('@', path.resolve('src'))
    config.plugin('html').tap((args) => {
      args[0].title = name
      return args
    })
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
