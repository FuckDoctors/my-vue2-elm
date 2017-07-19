# my-vue2-elm

> My Vue2 Elem Project

# 说明
基于 vue2 + vuex 构建一个具有 45 个页面的大型单页面应用.

原项目地址：[https://github.com/bailicangdu/vue2-elm](https://github.com/bailicangdu/vue2-elm).

# 改动点
1. 原SCSS改成PostCSS（初次使用，纯练习）
2. 使用AirBnb的ESLint规则，修改了一些代码
3. 简单使用axios（初次使用，纯练习）

# 笔记
作为Vue学习的过程，简单记录一写内容。

## 开发环境
macOS Sierra 10.12.5 + VS Code。（使用Hackintosh，黑苹果，穷屌丝。。。）

### 主要的VS Code插件
- ESLint
- EditorConfig
- Vetur
- Vue 2 Snippets
- stylelint
- Path Intellisense
- One Dark Pro

### VS Code设置
处于以下目的修改了VS Code的默认配置：

- 使用stylelint代替VS Code自带的CSS检查
- 让Emmet支持.vue文件
- 让ESLint支持Vue检查

``` json
{
    // Enable the linter in the VS Code settings,
    // while disabling the built-in CSS and SCSS linter:
    "stylelint.enable": true,
    "css.validate": false,
    "scss.validate": false,

    // vscode中的vue文件中emmet进行tab键不起作用
    // http://www.cnblogs.com/dfyg-xiaoxiao/p/6897147.html
    "emmet.syntaxProfiles": {
        "vue-html": "html",
        "vue": "html"
    },

    // An array of language ids which should be validated by ESLint
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "html",
        "vue"
    ],

    "workbench.colorTheme": "One Dark Pro",
    "editor.renderWhitespace": "all",
    "editor.renderControlCharacters": true
}
```

# 感谢
感谢原作者分享这么好的资源！版权归[原作者](https://github.com/bailicangdu)所有。

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
