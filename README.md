### react-create-fast

一个让你快速搭建`react`开发环境的脚手架

##### 安装及使用：

1. `npm install react-create-fast -g`
2. `react-create-fast [projectName]`

##### 启动项目：

1. `cd [projectName]`
2. `yarn` 或 `npm install`
3. `npm run dll`
4. `npm start`

在浏览器地址栏中输入：`localhost:3000`即可访问

项目打包，运行`npm run build`即可，项目将打包至`dist`文件夹内

##### 默认使用技术栈：

1. `react`
2. `typescript`
3. `antd`
4. `styled-components`
5. `react-router-dom`
6. `immutable`

你可以根据喜好来`install`或`uninstall`它们。

---

##### 建议：

项目公共样式（包括`antd`、框架、装饰页）使用`less`，页面级样式采
用`styled-components`，以防止样式污染。

---

##### DLL ：

在`webpack.dll.config.babel.js`中，默认打包的公共包包括：

```
entry: {
    vendor: ['react', 'react-dom', 'antd', 'react-router-dom', 'immutable']
  }
```

你可以根据自己的喜好做删减
