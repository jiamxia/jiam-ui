# 发包流程测试 - check 为啥 jiam-ui button 失效
npm run build:prod【node 12.13】
提交
npm run version【打tag】
git push --follow-tags origin【推送tag】
npm login
npm publish 

error: cannot be republished until 24 hours have passed.[24小时内不准发布同名包]

我吐了

有没有什么办法可以让三方组件库在本地开发和调试时就像内嵌在项目中一样流畅呢？
- 前端组件库本地开发调试的自动化流程实现 https://zhuanlan.zhihu.com/p/142554961

1. yalc 更适普的前端link工具 https://segmentfault.com/a/1190000039658156