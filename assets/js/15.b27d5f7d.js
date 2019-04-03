(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{189:function(s,a,e){"use strict";e.r(a);var n=e(0),t=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("div",{staticClass:"content"},[e("h2",{attrs:{id:"基础"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础","aria-hidden":"true"}},[s._v("#")]),s._v(" 基础")]),s._v(" "),e("h3",{attrs:{id:"router-link和router-view组件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#router-link和router-view组件","aria-hidden":"true"}},[s._v("#")]),s._v(" router-link和router-view组件")]),s._v(" "),e("h4",{attrs:{id:"router-link"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#router-link","aria-hidden":"true"}},[s._v("#")]),s._v(" router-link")]),s._v(" "),e("p",[s._v("封装了一个a标签，用于页面跳转")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("<router-link to='/'>首页</router-link>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("to：跳转的页面地址")]),s._v(" "),e("h4",{attrs:{id:"router-view"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#router-view","aria-hidden":"true"}},[s._v("#")]),s._v(" router-view")]),s._v(" "),e("p",[s._v("视图渲染组件，通过router-link加载的页面在该组件内渲染")]),s._v(" "),e("h3",{attrs:{id:"路由对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路由对象","aria-hidden":"true"}},[s._v("#")]),s._v(" 路由对象")]),s._v(" "),e("ul",[e("li",[s._v("path：路径[基础]")]),s._v(" "),e("li",[s._v("component：对应渲染的组件[基础]")]),s._v(" "),e("li",[s._v("懒加载：按需加载"),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("component: () => import('@/加载组件地址')\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])]),s._v(" "),e("h3",{attrs:{id:"路由配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路由配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 路由配置")]),s._v(" "),e("ul",[e("li",[s._v("动态路由"),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("{\n    path: '/argu/:name',\n    component: () => import('@/加载组件地址')\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),s._v("页面内获取动态参数："),e("code",[s._v("$route.params.name")]),s._v("\njs中获取动态参数："),e("code",[s._v("this.$route.params.name")]),s._v(" "),e("ul",[e("li",[s._v("$route：当前加载页面的路由值对象")]),s._v(" "),e("li",[s._v("params：参数对象")]),s._v(" "),e("li",[s._v("name：参数")])])]),s._v(" "),e("li",[s._v("嵌套路由"),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("{\n    path: '/parent',\n    component: () => import('@/加载组件地址'),\n    children: [\n        {\n            path: 'child',\n            component: () => import('@/加载组件地址')\n        }\n    ]\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("blockquote",[e("p",[s._v("parent 页面需要有 "),e("code",[s._v("<router-view />")])])])]),s._v(" "),e("li",[s._v("命名路由\n路由对象需要添加name属性")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("<router-link :to=\" {name:'name属性值'} \"></router-link>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("命名视图\n"),e("ul",[e("li",[s._v("页面调用")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('<router-view name="email"/>\n<router-view name="tel"/>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("配置")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("{\n    path: '/named_view',\n    components: {\n        default: () => import('@/加载组件地址'),\n        email: () => import('@/加载组件地址'),\n        tel: () => import('@/加载组件地址')\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),s._v("default：命名视图未指定name时，默认使用default组件")])]),s._v(" "),e("h3",{attrs:{id:"重定向和别名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重定向和别名","aria-hidden":"true"}},[s._v("#")]),s._v(" 重定向和别名")]),s._v(" "),e("h4",{attrs:{id:"重定向"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重定向","aria-hidden":"true"}},[s._v("#")]),s._v(" 重定向")]),s._v(" "),e("ul",[e("li",[s._v("方法一：基础"),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("{\n    path: '/main',\n    redirect: '/'\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])]),s._v(" "),e("li",[s._v("方法二：命名路由"),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("{\n    path: '/main',\n    redirect: {\n        name: 'home'\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])])]),s._v(" "),e("li",[s._v("方法三：使用方法函数"),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("{\n    path: '/main',\n    redirect: to => {\n        // 1、返回路由名\n        return {\n            name: 'home'\n        }\n        // 2、直接返回路径\n        return '/'\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),s._v("函数如果直接return值，ES6中可简写："),e("code",[s._v("redirect: to => '/'")])])]),s._v(" "),e("h4",{attrs:{id:"别名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#别名","aria-hidden":"true"}},[s._v("#")]),s._v(" 别名")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("{\n    path: '/',\n    alias: '/home_page',\n    name: 'home',\n    component: Home\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h3",{attrs:{id:"js操作路由-编程式导航"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js操作路由-编程式导航","aria-hidden":"true"}},[s._v("#")]),s._v(" JS操作路由(编程式导航)")]),s._v(" "),e("h4",{attrs:{id:"返回上一页"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#返回上一页","aria-hidden":"true"}},[s._v("#")]),s._v(" 返回上一页")]),s._v(" "),e("ul",[e("li",[s._v("方法一："),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("this.$router.go(-1)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[s._v("方法二："),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("this.$router.back()\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])]),s._v(" "),e("h4",{attrs:{id:"前进一页"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前进一页","aria-hidden":"true"}},[s._v("#")]),s._v(" 前进一页")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("this.$router.go(1)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"跳转到某一页"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#跳转到某一页","aria-hidden":"true"}},[s._v("#")]),s._v(" 跳转到某一页")]),s._v(" "),e("ul",[e("li",[s._v("方法一："),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("this.$router.push('/')\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[s._v("方法二："),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("this.$router.push({\n    name: 'home',\n    // params参数:/home/Ella\n    params: {\n        name: 'Ella'\n    }\n    // query参数:/home?name='Ella'\n    qurey: {\n        name: 'Ella'\n    }\n})\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])])]),s._v(" "),e("li",[s._v("方法三：模板语言"),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("const name = 'Ella'\nthis.$router.push({\n    path: `/argu/${name}`\n})\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])])]),s._v(" "),e("blockquote",[e("p",[s._v("push：会在浏览历史中加入一条记录，回退时能回退到跳转之前的地方")])]),s._v(" "),e("blockquote",[e("p",[s._v("使用path不能使用params，是无效的")])]),s._v(" "),e("h4",{attrs:{id:"替换到某一页"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#替换到某一页","aria-hidden":"true"}},[s._v("#")]),s._v(" 替换到某一页")]),s._v(" "),e("ul",[e("li",[s._v("方法一："),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("this.$router.replace('/')\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[s._v("方法二："),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("this.$router.replace({\n    name: 'home'\n})\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])])]),s._v(" "),e("blockquote",[e("p",[s._v("replace：把当前的浏览历史替换成home页，回退操作会回退到home")])]),s._v(" "),e("h2",{attrs:{id:"进阶"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进阶","aria-hidden":"true"}},[s._v("#")]),s._v(" 进阶")]),s._v(" "),e("h3",{attrs:{id:"路由组件传参"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路由组件传参","aria-hidden":"true"}},[s._v("#")]),s._v(" 路由组件传参")]),s._v(" "),e("p",[s._v("根据路由获得参数，使用$router实例获取相关参数，会使得页面组件跟路由进行过高的耦合。为了解耦，组件得到更高的复用，可以使用路由组件传参。")]),s._v(" "),e("h4",{attrs:{id:"三种形式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三种形式","aria-hidden":"true"}},[s._v("#")]),s._v(" 三种形式")]),s._v(" "),e("ul",[e("li",[s._v("布尔模式：适用于在动态路由匹配中，有动态路由参数的路由配置中\n"),e("ul",[e("li",[s._v("路由配置文件")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("props: true\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("组件页面属性")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("props: {\n    name: {\n        // type: [String, Number]\n        type: String,\n        // 默认值\n        default: 'Ella'\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])])]),s._v(" "),e("li",[s._v("对象模式\n"),e("ul",[e("li",[s._v("路由配置文件")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("props: {\n  food: 'banana'\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ul",[e("li",[s._v("组件页面属性")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("props: {\n    food: {\n        type: String,\n        default: 'apple' // 对象food未传值时显示\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])])]),s._v(" "),e("li",[s._v("函数模式：在传入的属性中，根据当前的路由做一些处理逻辑\n"),e("ul",[e("li",[s._v("路由配置文件")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("props: route => ({\n  food: route.query.food\n})\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ul",[e("li",[s._v("组件页面属性")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("props: {\n    food: {\n        type: String,\n        default: 'apple'\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])])])]),s._v(" "),e("h3",{attrs:{id:"html5-history模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#html5-history模式","aria-hidden":"true"}},[s._v("#")]),s._v(" HTML5 History模式")]),s._v(" "),e("ul",[e("li",[s._v("默认模式：hash\n"),e("ul",[e("li",[s._v("在url地址#后做路由变化，页面不会刷新，地址中会有#号")])])]),s._v(" "),e("li",[s._v("history模式：history\n"),e("ul",[e("li",[s._v("使用H5的一些api来做无刷新页面的页面操作")]),s._v(" "),e("li",[s._v("所有匹配不到页面静态资源的url都会指向index.html")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("{\n    // 匹配任何路径，定义在最末尾，优先级低\n    path: '*',\n    component: () => import('@/views/Error_404.vue')\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])])]),s._v(" "),e("h3",{attrs:{id:"导航守卫"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#导航守卫","aria-hidden":"true"}},[s._v("#")]),s._v(" 导航守卫")]),s._v(" "),e("p",[s._v("路由发生跳转到导航结束时间内进行相应的逻辑处理，如：判断用户是否登录、权限控制")]),s._v(" "),e("h4",{attrs:{id:"全局守卫-index-js中创建全局守卫"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#全局守卫-index-js中创建全局守卫","aria-hidden":"true"}},[s._v("#")]),s._v(" 全局守卫 index.js中创建全局守卫")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 路由守卫-全局守卫\nconst router = new Router({\nroutes\n})\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("ul",[e("li",[s._v("全局前置守卫")])]),s._v(" "),e("p",[s._v("to 即将跳转页面的路由对象")]),s._v(" "),e("p",[s._v("from 当前将要离开的页面的路由对象")]),s._v(" "),e("p",[s._v("next 函数")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 登录状态，一般为后台获取\nconst HAS_LOGINED = true\n\nrouter.beforeEach((to, from, next) => {\n    // 如果跳转的页面不是登录页\n    if (to.name !== 'login') {\n        // 如果已经登录，直接跳转\n        if (HAS_LOGINED) next()\n        else next({ name: 'login' })\n    } else {\n        if (HAS_LOGINED) next({ name: 'home' })\n        else next()\n    }\n})\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("ul",[e("li",[s._v("后置钩子")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("router.afterEach( (to, from) => {\n    \x3c!-- 路由加载状态 --\x3e\n    // loading = false\n})\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("ul",[e("li",[s._v("全局守卫")])]),s._v(" "),e("p",[s._v("在导航被确认之前，所有组件内守卫和异步路由组件被解析之后，被调用")]),s._v(" "),e("p",[s._v("被确认的状态：所有导航钩子都结束")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("router.beforeResolve((to, from, next) => {\n    //\n})\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h4",{attrs:{id:"路由独享守卫-某页面独享router-js"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路由独享守卫-某页面独享router-js","aria-hidden":"true"}},[s._v("#")]),s._v(" 路由独享守卫 某页面独享router.js")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("{\n    path: '/',\n    name: 'home',\n    component: Home,\n    beforeEnter: (to, from, next) => {\n      // 一定要调用next()，不然不会跳转\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h4",{attrs:{id:"组件内守卫"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组件内守卫","aria-hidden":"true"}},[s._v("#")]),s._v(" 组件内守卫")]),s._v(" "),e("ul",[e("li",[s._v("路由即将进入")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("beforeRouteEnter (to, from, next) {\n    // 页面还未渲染，无法获取this\n    // 使用回调函数获取组件实例\n    next(vm => {\n        // vm为组件实例\n    })\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("ul",[e("li",[s._v("路由即将离开")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("beforeRouteLeave (to, from, next) {\n    // 当被调用时，页面已经被渲染了，可以使用this\n    // 提醒用户是否真的要离开\n    const leave = confirm('您真的要离开吗？')\n    if (leave) next()\n    else next(false)\n    // next(false) 则页面不会跳转\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("ul",[e("li",[s._v("路由url发生变化，组件被复用时调用")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("beforeRouterUpdate (to, from, next) {\n    // 当被调用时，页面已经被渲染了，可以使用this\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h4",{attrs:{id:"完整的导航解析流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#完整的导航解析流程","aria-hidden":"true"}},[s._v("#")]),s._v(" 完整的导航解析流程")]),s._v(" "),e("ol",[e("li",[s._v("导航被触发")]),s._v(" "),e("li",[s._v("在失活的组件（即将离开的页面组件）里调用离开守卫 beforeRouterLeave")]),s._v(" "),e("li",[s._v("调用全局的前置守卫 beforeEach")]),s._v(" "),e("li",[s._v("在重用的组件里调用 beforeRouteUpdate")]),s._v(" "),e("li",[s._v("调用路由独享的守卫 beforeEnter")]),s._v(" "),e("li",[s._v("解析异步路由组件")]),s._v(" "),e("li",[s._v("在被激活的组件（即将进入页面的组件）里调用 beforeRouteEnter")]),s._v(" "),e("li",[s._v("调用全局解析守卫 beforeResolve")]),s._v(" "),e("li",[s._v("导航被确认")]),s._v(" "),e("li",[s._v("调用全局的后置守卫 afterEach")]),s._v(" "),e("li",[s._v("触发DOM更新")]),s._v(" "),e("li",[s._v("用创建好的实例调用 beforeRouterEnter 守卫里传给 next 的回调函数")])]),s._v(" "),e("h3",{attrs:{id:"路由元信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#路由元信息","aria-hidden":"true"}},[s._v("#")]),s._v(" 路由元信息")]),s._v(" "),e("ul",[e("li",[s._v("配置文件")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("{\n    path: '/about',\n    name: 'about',\n    component: () => import('@/views/About.vue'),\n    // 路由元信息\n    meta: {\n      title: '关于'\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("ul",[e("li",[s._v("调用")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("router.beforeEach((to, from, next) => {\n  // 如果to.meta是真，则会执行setTitle(to.meta.title)\n  to.meta && setTitle(to.meta.title)\n})\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h3",{attrs:{id:"过渡效果"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#过渡效果","aria-hidden":"true"}},[s._v("#")]),s._v(" 过渡效果")]),s._v(" "),e("ul",[e("li",[s._v("单个组件过渡 "),e("code",[s._v("<transition></transition>")])]),s._v(" "),e("li",[s._v("多个组件过渡 "),e("code",[s._v("<transition-group></transition-group>")])])]),s._v(" "),e("h4",{attrs:{id:"步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#步骤","aria-hidden":"true"}},[s._v("#")]),s._v(" 步骤")]),s._v(" "),e("ol",[e("li",[s._v("为每个组件设置key值")]),s._v(" "),e("li",[s._v("为"),e("code",[s._v("transition-group")]),s._v("设置name值")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('\x3c!-- 过渡效果 --\x3e\n<transition-group :name="routerTransition">\n    <router-view key="default"/>\n    \x3c!-- 命名视图 --\x3e\n    <router-view key="email" name="email"></router-view>\n    <router-view key="tel" name="tel"></router-view>\n</transition-group>\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("\x3c!-- 动态设置name值 --\x3e\ndata () {\n    return {\n        routerTransition: ''\n    }\n},\nwatch : {\n    '$router' (to) {\n        to.query && to.query.transitionName && (this.routerTransition = to.query.transitionName)\n    }\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("使用css修改动画效果[类名]")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 页面进入\n// 页面即将加载的状态\n.router-enter{\n    opacity: 0;\n}\n// 页面从没有到有的过程的动态效果\n.router-enter-active{\n    transition: opacity 1s ease;\n}\n// 页面完全显示之后的状态\n.router-enter-to{\n    opacity: 1;\n}\n// 页面注销\n// 页面即将跳转的状态\n.router-leave{\n    opacity: 1;\n}\n// 页面从有到没有的过程的动态效果\n.router-leave-active{\n    transition: opacity 1s ease;\n}\n// 页面完全跳转之后的状态\n.router-leave-to{\n    opacity: 0;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br")])])])}],!1,null,null,null);t.options.__file="README.md";a.default=t.exports}}]);