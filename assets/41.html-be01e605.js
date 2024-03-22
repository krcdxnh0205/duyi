const l=JSON.parse('{"key":"v-1877b840","path":"/notes/Vue2/41.html","title":"四十一、Vue-Router使用","lang":"zh-CN","frontmatter":{"title":"四十一、Vue-Router使用","copyright":false,"date":"2022-09-07T00:00:00.000Z","category":["笔记","Vue2"],"tag":["尚硅谷","张天禹","VueRouter"]},"headers":[{"level":2,"title":"（一）基本路由","slug":"一-基本路由","link":"#一-基本路由","children":[{"level":3,"title":"1.安装 Vue-Router","slug":"_1-安装-vue-router","link":"#_1-安装-vue-router","children":[]},{"level":3,"title":"2.应用插件","slug":"_2-应用插件","link":"#_2-应用插件","children":[]},{"level":3,"title":"3.编写 router 配置项","slug":"_3-编写-router-配置项","link":"#_3-编写-router-配置项","children":[]},{"level":3,"title":"4.实现切换","slug":"_4-实现切换","link":"#_4-实现切换","children":[]},{"level":3,"title":"5.指定展示位置","slug":"_5-指定展示位置","link":"#_5-指定展示位置","children":[]}]},{"level":2,"title":"（二）多级路由/嵌套路由","slug":"二-多级路由-嵌套路由","link":"#二-多级路由-嵌套路由","children":[{"level":3,"title":"1.配置路由规则","slug":"_1-配置路由规则","link":"#_1-配置路由规则","children":[]},{"level":3,"title":"2.跳转","slug":"_2-跳转","link":"#_2-跳转","children":[]}]},{"level":2,"title":"（三）命名路由","slug":"三-命名路由","link":"#三-命名路由","children":[{"level":3,"title":"1.作用","slug":"_1-作用","link":"#_1-作用","children":[]},{"level":3,"title":"2.使用","slug":"_2-使用","link":"#_2-使用","children":[]}]},{"level":2,"title":"（四）路由的 query 参数","slug":"四-路由的-query-参数","link":"#四-路由的-query-参数","children":[{"level":3,"title":"1.传递参数","slug":"_1-传递参数","link":"#_1-传递参数","children":[]},{"level":3,"title":"2.接收参数","slug":"_2-接收参数","link":"#_2-接收参数","children":[]}]},{"level":2,"title":"（五）路由的 params 参数","slug":"五-路由的-params-参数","link":"#五-路由的-params-参数","children":[{"level":3,"title":"1.配置路由，声明接收 params 参数","slug":"_1-配置路由-声明接收-params-参数","link":"#_1-配置路由-声明接收-params-参数","children":[]},{"level":3,"title":"2.传递参数","slug":"_2-传递参数","link":"#_2-传递参数","children":[]},{"level":3,"title":"3.接收参数","slug":"_3-接收参数","link":"#_3-接收参数","children":[]}]},{"level":2,"title":"（六）路由的 props 配置","slug":"六-路由的-props-配置","link":"#六-路由的-props-配置","children":[]},{"level":2,"title":"（七）<router-link> 的 replace 属性","slug":"七-router-link-的-replace-属性","link":"#七-router-link-的-replace-属性","children":[{"level":3,"title":"1.作用","slug":"_1-作用-1","link":"#_1-作用-1","children":[]},{"level":3,"title":"2.浏览器的历史记录有两种写入方式","slug":"_2-浏览器的历史记录有两种写入方式","link":"#_2-浏览器的历史记录有两种写入方式","children":[]},{"level":3,"title":"3.开启 replace 模式","slug":"_3-开启-replace-模式","link":"#_3-开启-replace-模式","children":[]}]},{"level":2,"title":"（八）编程式路由导航","slug":"八-编程式路由导航","link":"#八-编程式路由导航","children":[{"level":3,"title":"1.作用","slug":"_1-作用-2","link":"#_1-作用-2","children":[]},{"level":3,"title":"2.具体编码","slug":"_2-具体编码","link":"#_2-具体编码","children":[]}]},{"level":2,"title":"（九）缓存路由组件","slug":"九-缓存路由组件","link":"#九-缓存路由组件","children":[{"level":3,"title":"1.作用","slug":"_1-作用-3","link":"#_1-作用-3","children":[]},{"level":3,"title":"2.具体编码","slug":"_2-具体编码-1","link":"#_2-具体编码-1","children":[]}]},{"level":2,"title":"（十）两个新的生命周期钩子","slug":"十-两个新的生命周期钩子","link":"#十-两个新的生命周期钩子","children":[{"level":3,"title":"1.作用","slug":"_1-作用-4","link":"#_1-作用-4","children":[]},{"level":3,"title":"2.具体名字","slug":"_2-具体名字","link":"#_2-具体名字","children":[]}]},{"level":2,"title":"（十一）路由守卫","slug":"十一-路由守卫","link":"#十一-路由守卫","children":[{"level":3,"title":"1.理解","slug":"_1-理解","link":"#_1-理解","children":[]},{"level":3,"title":"2.作用","slug":"_2-作用","link":"#_2-作用","children":[]},{"level":3,"title":"3.分类","slug":"_3-分类","link":"#_3-分类","children":[]},{"level":3,"title":"4.全局守卫","slug":"_4-全局守卫","link":"#_4-全局守卫","children":[]},{"level":3,"title":"5.独享守卫","slug":"_5-独享守卫","link":"#_5-独享守卫","children":[]},{"level":3,"title":"6.组件内守卫","slug":"_6-组件内守卫","link":"#_6-组件内守卫","children":[]}]},{"level":2,"title":"（十二）路由器的两种工作模式","slug":"十二-路由器的两种工作模式","link":"#十二-路由器的两种工作模式","children":[{"level":3,"title":"1.哈希值","slug":"_1-哈希值","link":"#_1-哈希值","children":[]},{"level":3,"title":"2.分类","slug":"_2-分类","link":"#_2-分类","children":[]},{"level":3,"title":"3.切换工作模式","slug":"_3-切换工作模式","link":"#_3-切换工作模式","children":[]},{"level":3,"title":"4.hash 模式","slug":"_4-hash-模式","link":"#_4-hash-模式","children":[]},{"level":3,"title":"5.history 模式","slug":"_5-history-模式","link":"#_5-history-模式","children":[]}]}],"git":{"createdTime":1662541545000,"updatedTime":1689506602000,"contributors":[{"name":"郁子IKUKO","email":"1147998314@qq.com","commits":2}]},"readingTime":{"minutes":6.11,"words":1833},"filePathRelative":"notes/Vue2/41.md","localizedDate":"2022年9月7日","excerpt":"<h2> （一）基本路由</h2>\\n<h3> 1.安装 Vue-Router</h3>\\n<ul>\\n<li>在 2022 年 02 月 07 日，Vue3 成为了默认版本\\n<ul>\\n<li>即 <code>npm i vue</code> 直接安装的是 Vue3</li>\\n</ul>\\n</li>\\n<li>同时 vue-router 也更新到了 v4\\n<ul>\\n<li>即 <code>npm i vue-router</code> 安装的是 VueRouter4</li>\\n</ul>\\n</li>\\n<li>vue-router4 只能在 Vue3 中使用</li>\\n<li>Vue2 项目需要安装 vue-router3</li>\\n</ul>"}');export{l as data};
