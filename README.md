# react-router-scaffold 更新日志

这个项目主要是研究react-router以及按需加载，主要是学习react-router

## 2017年9月25日

### 项目基础配置

- es6
- 热加载
- react
- redux

## 2017年9月26日

### react-router

-按需加载的方案require.ensure,

-对于大型应用来说，一个首当其冲的问题是所需加载的javascript的大小。程序应该只加载当前渲染页所需的javascript，有些开发者将这种方式称为代码
拆分 code splitting

### 2017年9月28日

几天的煎熬，工程终于能够跑起来了，最终问题是因为我安装的react-router的版本不对，这个以后一定要注意，版本不一样，写法也不一样，默认会安装4，

- react-router应用场景思考: 首尾都一样的后台。
- 实现界面的无跳转刷新，优化用户体验。
- 实时感受了下，react-router，界面没有任何抖动的界面刷新跳转，做的确实不错。
- router的路径配置部分无法热替换，这是一个问题。

### 2017年9月29日

- 路径配置无法热替换解决方案，首先针对每个入口文件，设置一个container，入口文件去加载container，container去加载对应的路由配置，这样每次
修改组件的时候的时候，就可以热替换，但是配置理由的修改依旧无法热替换。

- react-router设计思想，网站界面无非分为三大类，第一类，详情界面，detail，展示具体信息; 第二类界面: 列表类界面，list，用来展示列表类
数据，第三类，表单页面，用来提交或者展示表单数据。

- 设计思路： 每一类界面对应一个单独的入口文件和一个container文件，同时每一类界面对应一类单独的路由设置，container去加载每类界面对应的路由
配置，入口文件去加载container，

- 入口文件氛围三大类list.js, formRoute.js, index.js,分别对应的container为，ListContainer.js， FormContainer,js, DetailContainer.js
三大类，对应的路由设置分别为listRoutes.js, forRoutes.js, detailRoutes.js

- 但是设计有个很大的问题，就是关于请求部分放在哪里，这个待完善。先规划项目整体

- 为了方便设计和展示，引入antd

- 设置了一个ClassifyRouterComponent组件，用来存放顶部导航栏，或者底部导航栏，总之公共部分都可以用来放置在这个部分

-----------------------------------------------阶段分割线----------------------------------------------------------------

### bug 记录

- 组件内容的热替换和路径的热替换无发同时实现


### 2017年10月7日

react-router适合于单页面应用，针对不同的场景设置不同的container，所以修改工程如下：

- 入口文件只有一个index.js, 入口文件去加载一个BaseContainer，

- BaseContainer去加载所有业务场景的路径配置，

- 每个业务的路由配置按需加载该业务场景下对应的container

- 目前的工程目录结构暂定成这样

### 问题

container的按需加载已经实现，那么组件的按需加载如何实现。


### 2017年10月10日

- 发现了react-router2和react-hot-loader的热替换不兼容，按需加载的路由设置必须要import该组件，热替换才生效，为什么;

### 2017年10月11号

- 要注意按需加载时，不要直接 import UserList from '../containers/UserList'， 否则模块会直接被 webpack 打包，而不会打包成单独的异步
加载的模块文件。

- 关于昨天的哪个BUG，路由设置里面不能加import，即使用不到,因为如果加上，按需加载的配置就不会单独打包成异步加载的模块，直接生成。

- 引入react-router以后，reducer的热替换会生效，但是修改reducer以后上次的行为不会结果不会刷新，不引入react-router就会，比如初始值，0，
我点击按钮，reducer里面加100，结果显示成100，修改reducer成+200，会立马变成200，引入react-router以后，不会改变，但是下次点击会变成300

### 2017年10月17号
- 输入一个组件，输出一个新的组件

- 高阶组件的封装两种方式： 属性代理，反向集成

### 2017年10月18号
 
- 封装高阶组件实现按需加载

### 2017年12月14日

脚手架应用与工程实践，作出相应修改

- 修改了webpack的publicPath配置

- 修改封装的fetch函数，解决了beta环境请求下的BUG

- 修改了requestPath函数

### 2017年12月18日

- 修改封装的fetch函数，解决了post环境请求下的BUG

### 2018年5月12日

- less-loader 4.0以上版本 

```javascript
options: {
    javascriptEnabled: true,
},
```

- less-loader && css-loader 分开配置！！！！！！！！
