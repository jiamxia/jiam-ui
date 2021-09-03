### 发包流程测试 - check 为啥 jiam-ui button 失效

npm run build:prod【node 12.13】提交 npm run version【打 tag】 git push --follow-tags origin【推送 tag】 npm login npm publish 【版本只与 package.json 中 version 有关; 配置了 publishConfig.registry 就可以不用频繁切换】

error: cannot be republished until 24 hours have passed.[24 小时内不准发布同名包]

我吐了 各种 400 403

- [x] https://blog.csdn.net/I_recluse/article/details/106110383

有没有什么办法可以让三方组件库在本地开发和调试时就像内嵌在项目中一样流畅呢？

- 前端组件库本地开发调试的自动化流程实现 https://zhuanlan.zhihu.com/p/142554961

1. yalc 更适普的前端 link 工具 https://segmentfault.com/a/1190000039658156
