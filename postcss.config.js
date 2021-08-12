
// postcss - pxtorem 是一款 PostCSS 插件，用于将 px 单位转化为 rem 单位
// lib - flexible 用于设置 rem 基准值
//如果设计稿的尺寸是 375
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
    },
  },
};
