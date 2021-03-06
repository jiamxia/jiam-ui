import { join } from 'path';
const assetDir = 'dist'
console.log(__dirname)
export default {
  base: '/jiam-ui',
  publicPath: '/jiam-ui/',
  chainWebpack(memo) {
    memo.plugins.delete('copy');
    // 修改fonts输出目录
    memo.module
      .rule("fonts")
      .test(/\.(eot|woff|woff2|ttf|otf)(\?.*)?$/)
      .use("file-loader")
      .loader(require.resolve("file-loader"))
      .tap((options) => ({
        ...options,
        name: assetDir + "/fonts/[name].[hash:8].[ext]",
        fallback: {
          ...options.fallback,
          options: {
            name: assetDir + "/fonts/[name].[hash:8].[ext]",
            esModule: false,
          },
        },
      }));
  },
  alias: {
    'jiam-ui': join(
      __dirname,
      '..',
      '..',
      'src'
    ),
  },
  sass: {},
  // favicon: 'play.png',
  // links: [{ rel: 'icon', href: 'play.png' }],
  logo: 'https://avatars.githubusercontent.com/u/89196704?s=200&v=4',
  // mode: 'site',
};