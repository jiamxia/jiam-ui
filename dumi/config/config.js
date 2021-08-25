import {join} from 'path';

console.log(__dirname)
export default {
    chainWebpack(memo) {
      memo.plugins.delete('copy');
    },
    // lessLoader: {
    //   modifyVars: {
    //     hack: 'true; @import "~@/styles/index.less";',
    //   },
    // },
    alias: {
      'jiam-ui': join(
        __dirname,
        '..',
        '..',
        'src'
      ),
    },
  };