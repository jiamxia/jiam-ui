# 备用镜像源
- https://registry.npmjs.org/ 
- http://mirrors.cloud.tencent.com/npm/
- http://registry.npm.taobao.org/
# script 说明
1. npm run build:dev 生成到 dist [非压缩版]
2. npm run build:prod 生成 dist [压缩版本]
3. npm run build:es 生成lib [将src文件夹下assets和styles拷贝到lib]
4. npm run build:tsc 生成lib [将src下其他ts文件转成js]
5. npm run build 会生成两种规范的脚本目录[dist umd; lib es module]

# little tips
1. https://segmentfault.com/a/1190000039852833
2. use sence【保持中立，不限定于某一种使用方式】
    - es module
    - Common JS
    - <script> in HTML 
    - AMD（require.js）、CMD（sea.js）
   - [ ] webpack 支持多种打包方式输出。
3. npm script 中涉及到的文件系统操作包括文件和目录的创建、删除、移动、复制等操作，而社区为这些基本操作也提供了跨平台兼容的包，列举如下：

- rimraf 或 del-cli，用来删除文件和目录，实现类似于 rm -rf 的功能；
- cpr，用于拷贝、复制文件和目录，实现类似于 cp -r 的功能；
- make-dir-cli，用于创建目录，实现类似于 mkdir -p 的功能；

# 项目工程化
项目的工程化是一件很有意思的事情，通过自动化的工具，可以有效提升项目可维护性和质量，并且避免很多不确定因素。如果你工作中发现了这些问题，而不想继续通过人肉的方法解决这些问题的话，那就赶紧试试
## git commit需要遵循一定格式，比如：

- feat:     A new feature
- fix:      A bug fix
- docs:     Documentation only changes
- style:    Changes that do not affect the meaning of the code (white-space, formatting, missing semi-co
lons, etc)
- refactor: A code change that neither fixes a bug nor adds a feature
- perf:     A code change that improves performance

## commit 规范配置文件
学到了一个好方法，一键生成配置文件
```
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```
# husky正确使用姿势：
1. npm：https://www.npmjs.com/package/husky
2. 博客：https://juejin.cn/post/6986584081630756877 【前端工程化项目基础配置】
3. husky 新旧版本差异 https://zhuanlan.zhihu.com/p/366786798

## 自动生成changelog.md
1. [git commit 、CHANGELOG 和版本发布的标准自动化](https://www.cnblogs.com/zivxiaowei/p/10089201.html)
2. [使用conventional-changelog和Strapdown.js为git仓库自动生成changelog html页面](https://itxx00.github.io/blog/2021/01/15/auto-create-changelog-html/)
3. 推荐[standard-version](https://github.com/conventional-changelog/standard-version)【不仅可以打tag，还可以自动changelog】

##  版本管理
1. [npm 发包者必读](https://juejin.cn/post/6844903870678695943)

npm的发包需要遵循语义化版本，一个版本号包含三个部分：MAJOR.MINOR.PATCH，

- MAJOR 表示主版本号，当你做了不兼容的API修改；
- MINOR 表示次版本号，当你做了向下兼容的功能性新增；
- PATCH 表示修订号,当你做了向下兼容的问题修正;

我们可以使用npm version 命令来自动修改版本号，比如：
```
// version = v1.0.0
npm version patch
// v1.0.1
npm version prepatch
// v1.0.2-0
npm version minor
// v1.1.0
npm version major
// v2.0.0
```
一般来说还有先行版本，测试版本等，他们这样命名
```
3.1.0-beta.0
3.1.0-alpha.0
```
如果我们发布先行版本，`npm version prepatch` 命令得出的版本号好像就不够规范了，我们只能使用 `npm version 1.0.0-alpha.1` 指定版本号，不过还好，在 npm 6.4.0 之后，我们可以使用 --preid 参数：
`npm version prerelease --preid=alpha`

# 不小心发错包

```
>npm dist-tag add jiam-ui@0.0.3 beta
+beta: jiam-ui@0.0.3
>npm dist-tag add jiam-ui@0.0.2 latest
+latest: jiam-ui@0.0.2
>npm dist-tag ls jiam-ui
beta: 0.0.3
latest: 0.0.2
```
# nrm 切换npm镜像源
- 查看全局镜像 `npm config get registry`
- 全局设置镜像 `npm config set r_url`
- 安装 `npm i nrm -g`
- 查看 `nrm ls`
- 切换到 `nrm use taobao`
- 添加镜像源 `nrm add r_name r_url`, like `nrm add tx http://mirrors.cloud.tencent.com/npm/`
- 删除镜像源 `nrm del r_name`
- 测速镜像源 `nrm test r_name`
# docz
- 安装依赖 `npm install --save-dev docz docz-theme-default docz-plugin-css @emotion/core`
- docz ：docz核心部分，必须
- docz-theme-default ：docz默认主题，必须
- docz-plugin-css ： docz中使用CSS时的额外插件，如果不需要css则非必须
- @emotion/core ： 文档依赖，必须

- [ ]BUG: TypeError: Cannot read property 'get' of undefined