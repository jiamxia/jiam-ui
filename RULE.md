# 规范篇

## CSS 书写规范

- [ ] [Mozilla 推荐的 CSS 属性书写顺序规范](https://www.phpvar.com/archives/1989.html)
- [ ] [腾讯云 CSS 代码的书写规范、顺序](https://cloud.tencent.com/developer/article/1025155)
- CSS 代码检查工具 stylelint [StyleLint 使用指南](https://www.cnblogs.com/jiaoshou/p/11284204.html)

ps. stylelint-order 是 CSS 属性排序插件(先写定位，再写盒模型，再写内容区样式，最后写 CSS3 相关属性)

感兴趣有时间可以去细究一下相关使用配置细节。在此由于我之前用了 umi 框架开发过项目，发现其中的代码风格质量检查不错，看了一下，决定引入他们的一个包 @umijs/fabric【一个包含 prettier，eslint，stylelint 的配置文件合集】

### 属性顺序

> CSS 属性编写顺序（一般遵循布局属性 -> 自身属性 -> 文本属性 -> 其他属性的书写格式） 【位置 盒子 文本 动画】

1. 布局定位属性：display / position / float / clear / visibility / overflow（建议 display 第一个写，毕竟关系到模式）
2. 自身属性（跟盒子相关的）：width / height / margin / padding / border / background
3. 字体文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word
4. 其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient …

如果使用 CSS3 的属性，如果有必要加入浏览器前缀，则按照 - webkit-/-moz-/-ms-/-o-/std 的顺序进行添加，标准属性写在最后链接的样式请严格按照如下顺序添加：a:link -> a:visited -> a:hover -> a:active
