
// postcss - pxtorem 是一款 PostCSS 插件，用于将 px 单位转化为 rem 单位
// lib - flexible 用于设置 rem 基准值 如果部分设计样式不想转换为rem，可以将 px 改为 PX
//如果设计稿的尺寸是 375
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
      selectorBlackList: [] // 不进行px转换的选择器
    },
  },
};
