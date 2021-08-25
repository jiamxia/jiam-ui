1. 文档展示 docz =》 dumi
2. 测试用例完善 Jest
3. 基础组件规划编写
背景：
bvchub项目发版更新日志组件，灾难性的扩大，几千行代码。
改善：观察结构数据特征，设计数据结构，编写template模版，基于原来的dom进行遍历整理数据成json，并进行导入组件中，进行渲染。
结果：解决单个组件重复代码过多，大量冗余，进行视图和数据的真正剥离。
进行总结，涉及很多小的知识点
5. 关于优化 timeline 数据展示，有个点子，写成规范格式的 md 就可以生成 json 数据
- [ ] json2md md2json
6. git action 自动部署包
- [x] commit 规范
- [x] change log 自动生成
- [ ] 前端脚手架

值得学习的优秀工具：
- [ ] [conventional-changelog / standard-version](https://github.com/conventional-changelog/standard-version)
- [ ] [conventional-changelog / commitlint](https://github.com/conventional-changelog/commitlint)
- [ ] [lerna/lerna](https://github.com/lerna/lerna)

好东西：
- [ ] [Bash Shell命令行参数的使用](https://blog.csdn.net/geoffreychan/article/details/77823505)

- 呜呜呜太难了，终于使用dumi进行了组件文档描述了，字体文件的loader处理配置。 参考https://blog.csdn.net/qq_39953537/article/details/107507724 umi 项目增加支持放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录，就比如 vue-cli 的 assetDir
还有一个dumi好像内部集成了怎么处理less样式，但是好像没有说怎么处理sass文件？odoki
