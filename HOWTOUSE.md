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
