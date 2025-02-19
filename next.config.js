// 最终正确配置
module.exports = {
  output: 'export',
  basePath: '/3guys.github.io', // 必须与仓库名一致
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // 新增 assetPrefix 配置
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? '/3guys.github.io/' 
    : ''
}