const e=JSON.parse('{"key":"v-ffb1a20a","path":"/notes/DuYi/04Interview/16.html","title":"十六、Vue相关面试题汇总","lang":"zh-CN","frontmatter":{"title":"十六、Vue相关面试题汇总","copyright":false,"date":"2023-11-24T00:00:00.000Z","category":["笔记","渡一教育","笔面试题甄选"],"tag":["谢杰"]},"headers":[{"level":2,"title":"（一）谈一谈对 MVVM 的理解？","slug":"一-谈一谈对-mvvm-的理解","link":"#一-谈一谈对-mvvm-的理解","children":[]},{"level":2,"title":"（二）说一下 Vue 的优点","slug":"二-说一下-vue-的优点","link":"#二-说一下-vue-的优点","children":[]},{"level":2,"title":"（三）解释一下对 Vue 生命周期的理解","slug":"三-解释一下对-vue-生命周期的理解","link":"#三-解释一下对-vue-生命周期的理解","children":[]},{"level":2,"title":"（四）Vue 实现双向数据绑定原理是什么？","slug":"四-vue-实现双向数据绑定原理是什么","link":"#四-vue-实现双向数据绑定原理是什么","children":[]},{"level":2,"title":"（五）说一下对 Vue2.x 响应式原理的理解","slug":"五-说一下对-vue2-x-响应式原理的理解","link":"#五-说一下对-vue2-x-响应式原理的理解","children":[]},{"level":2,"title":"（六）说一下在 Vue2.x 中如何检测数组的变化？","slug":"六-说一下在-vue2-x-中如何检测数组的变化","link":"#六-说一下在-vue2-x-中如何检测数组的变化","children":[]},{"level":2,"title":"（七）Vue3.x 响应式数据","slug":"七-vue3-x-响应式数据","link":"#七-vue3-x-响应式数据","children":[]},{"level":2,"title":"（八）v-model 双向绑定的原理是什么？","slug":"八-v-model-双向绑定的原理是什么","link":"#八-v-model-双向绑定的原理是什么","children":[]},{"level":2,"title":"（九）vue2.x 和 vuex3.x 渲染器的 diff 算法分别说一下？","slug":"九-vue2-x-和-vuex3-x-渲染器的-diff-算法分别说一下","link":"#九-vue2-x-和-vuex3-x-渲染器的-diff-算法分别说一下","children":[]},{"level":2,"title":"（十）vue 组件的参数传递","slug":"十-vue-组件的参数传递","link":"#十-vue-组件的参数传递","children":[]},{"level":2,"title":"（十一）Vue 的路由实现","slug":"十一-vue-的路由实现","link":"#十一-vue-的路由实现","children":[]},{"level":2,"title":"（十二）vuex 是什么？怎么使用它？什么场景下我们会使用到 vuex","slug":"十二-vuex-是什么-怎么使用它-什么场景下我们会使用到-vuex","link":"#十二-vuex-是什么-怎么使用它-什么场景下我们会使用到-vuex","children":[]},{"level":2,"title":"（十三）说一下 v-for 与 v-show 的区别","slug":"十三-说一下-v-for-与-v-show-的区别","link":"#十三-说一下-v-for-与-v-show-的区别","children":[]},{"level":2,"title":"（十四）如何让 CSS 值在当前的组件中起作用","slug":"十四-如何让-css-值在当前的组件中起作用","link":"#十四-如何让-css-值在当前的组件中起作用","children":[]},{"level":2,"title":"（十五）keep-alive 相关","slug":"十五-keep-alive-相关","link":"#十五-keep-alive-相关","children":[]},{"level":2,"title":"（十六）Vue 中如何进行组件的使用？Vue 如何实现全局组件的注册？","slug":"十六-vue-中如何进行组件的使用-vue-如何实现全局组件的注册","link":"#十六-vue-中如何进行组件的使用-vue-如何实现全局组件的注册","children":[]},{"level":2,"title":"（十七）vue-cli 工程相关","slug":"十七-vue-cli-工程相关","link":"#十七-vue-cli-工程相关","children":[]},{"level":2,"title":"（十八）nextTick 的作用是什么？他的实现原理是什么？","slug":"十八-nexttick-的作用是什么-他的实现原理是什么","link":"#十八-nexttick-的作用是什么-他的实现原理是什么","children":[]},{"level":2,"title":"（十九）说一下 Vue SSR 的实现原理","slug":"十九-说一下-vue-ssr-的实现原理","link":"#十九-说一下-vue-ssr-的实现原理","children":[]},{"level":2,"title":"（二十）Vue 组件的 data 为什么必须是函数","slug":"二十-vue-组件的-data-为什么必须是函数","link":"#二十-vue-组件的-data-为什么必须是函数","children":[]},{"level":2,"title":"（二十一）说一下 Vue 的 computed 的实现原理","slug":"二十一-说一下-vue-的-computed-的实现原理","link":"#二十一-说一下-vue-的-computed-的实现原理","children":[]},{"level":2,"title":"（二十二）说一下 Vue complier 的实现原理是什么样的？","slug":"二十二-说一下-vue-complier-的实现原理是什么样的","link":"#二十二-说一下-vue-complier-的实现原理是什么样的","children":[]},{"level":2,"title":"（二十三）vue 如何快速定位那个组件出现性能问题的","slug":"二十三-vue-如何快速定位那个组件出现性能问题的","link":"#二十三-vue-如何快速定位那个组件出现性能问题的","children":[]},{"level":2,"title":"（二十四）Proxy 相比 defineProperty 的优势在哪里","slug":"二十四-proxy-相比-defineproperty-的优势在哪里","link":"#二十四-proxy-相比-defineproperty-的优势在哪里","children":[]},{"level":2,"title":"（二十五）Vue 与 Angular 以及 React 的区别是什么？","slug":"二十五-vue-与-angular-以及-react-的区别是什么","link":"#二十五-vue-与-angular-以及-react-的区别是什么","children":[]},{"level":2,"title":"（二十六）说一下 watch 与 computed 的区别是什么？以及他们的使用场景分别是什么？","slug":"二十六-说一下-watch-与-computed-的区别是什么-以及他们的使用场景分别是什么","link":"#二十六-说一下-watch-与-computed-的区别是什么-以及他们的使用场景分别是什么","children":[]},{"level":2,"title":"（二十七）scoped 是如何实现样式穿透的？","slug":"二十七-scoped-是如何实现样式穿透的","link":"#二十七-scoped-是如何实现样式穿透的","children":[]},{"level":2,"title":"（二十八）说一下 ref 的作用是什么？","slug":"二十八-说一下-ref-的作用是什么","link":"#二十八-说一下-ref-的作用是什么","children":[]},{"level":2,"title":"（二十九）说一下你知道的 vue 修饰符都有哪些？","slug":"二十九-说一下你知道的-vue-修饰符都有哪些","link":"#二十九-说一下你知道的-vue-修饰符都有哪些","children":[]},{"level":2,"title":"（三十）如何实现 vue 项目中的性能优化？","slug":"三十-如何实现-vue-项目中的性能优化","link":"#三十-如何实现-vue-项目中的性能优化","children":[]},{"level":2,"title":"（三十一）Vue.extend 和 Vue.component 的区别是什么？","slug":"三十一-vue-extend-和-vue-component-的区别是什么","link":"#三十一-vue-extend-和-vue-component-的区别是什么","children":[]},{"level":2,"title":"（三十二）vue 中的 spa 应用如何优化首屏加载速度?","slug":"三十二-vue-中的-spa-应用如何优化首屏加载速度","link":"#三十二-vue-中的-spa-应用如何优化首屏加载速度","children":[]},{"level":2,"title":"（三十三）移动端如何实现一个比较友好的 header 组件","slug":"三十三-移动端如何实现一个比较友好的-header-组件","link":"#三十三-移动端如何实现一个比较友好的-header-组件","children":[]},{"level":2,"title":"（三十四）既然 Vue 通过数据劫持可以精准探测数据变化，为什么还需要虚拟 DOM 进行 diff 监测差异 ？","slug":"三十四-既然-vue-通过数据劫持可以精准探测数据变化-为什么还需要虚拟-dom-进行-diff-监测差异","link":"#三十四-既然-vue-通过数据劫持可以精准探测数据变化-为什么还需要虚拟-dom-进行-diff-监测差异","children":[]},{"level":2,"title":"（三十五）Vue 为什么没有类似于 React 中 shouldComponentUpdate 的生命周期？","slug":"三十五-vue-为什么没有类似于-react-中-shouldcomponentupdate-的生命周期","link":"#三十五-vue-为什么没有类似于-react-中-shouldcomponentupdate-的生命周期","children":[]},{"level":2,"title":"（三十六）Vue 中的 Key 的作用是什么？","slug":"三十六-vue-中的-key-的作用是什么","link":"#三十六-vue-中的-key-的作用是什么","children":[]},{"level":2,"title":"（三十七）你的接口请求一般放在哪个生命周期中？为什么要这样做？","slug":"三十七-你的接口请求一般放在哪个生命周期中-为什么要这样做","link":"#三十七-你的接口请求一般放在哪个生命周期中-为什么要这样做","children":[]},{"level":2,"title":"（三十八）说一下你对 vue 事件绑定原理的理解？","slug":"三十八-说一下你对-vue-事件绑定原理的理解","link":"#三十八-说一下你对-vue-事件绑定原理的理解","children":[]},{"level":2,"title":"（三十九）说一下 vue 模版编译的原理是什么","slug":"三十九-说一下-vue-模版编译的原理是什么","link":"#三十九-说一下-vue-模版编译的原理是什么","children":[]},{"level":2,"title":"（四十）delete 和 Vue.delete 删除数组的区别是什么？","slug":"四十-delete-和-vue-delete-删除数组的区别是什么","link":"#四十-delete-和-vue-delete-删除数组的区别是什么","children":[]},{"level":2,"title":"（四十一）v-on 可以实现监听多个方法么？","slug":"四十一-v-on-可以实现监听多个方法么","link":"#四十一-v-on-可以实现监听多个方法么","children":[]},{"level":2,"title":"（四十二）vue 的数据为什么频繁变化但只会更新一次？","slug":"四十二-vue-的数据为什么频繁变化但只会更新一次","link":"#四十二-vue-的数据为什么频繁变化但只会更新一次","children":[]},{"level":2,"title":"（四十三）说一下 vue 中 computed 和 methods 的区别是什么？","slug":"四十三-说一下-vue-中-computed-和-methods-的区别是什么","link":"#四十三-说一下-vue-中-computed-和-methods-的区别是什么","children":[]},{"level":2,"title":"（四十四）在 Vue 中要获取当前时间你会放到 computed 还是 methods 里？(抖音直播)","slug":"四十四-在-vue-中要获取当前时间你会放到-computed-还是-methods-里-抖音直播","link":"#四十四-在-vue-中要获取当前时间你会放到-computed-还是-methods-里-抖音直播","children":[]},{"level":2,"title":"（四十五）在给 vue 中的元素设置 key 值时可以使用 Math 的 random 方法么？","slug":"四十五-在给-vue-中的元素设置-key-值时可以使用-math-的-random-方法么","link":"#四十五-在给-vue-中的元素设置-key-值时可以使用-math-的-random-方法么","children":[]},{"level":2,"title":"（四十六）插槽与作用域插槽的区别是什么？","slug":"四十六-插槽与作用域插槽的区别是什么","link":"#四十六-插槽与作用域插槽的区别是什么","children":[]},{"level":2,"title":"（四十七）vue 中相同逻辑如何进行抽离？","slug":"四十七-vue-中相同逻辑如何进行抽离","link":"#四十七-vue-中相同逻辑如何进行抽离","children":[]},{"level":2,"title":"（四十八）如何监听 pushstate 和 replacestate 的变化呢？","slug":"四十八-如何监听-pushstate-和-replacestate-的变化呢","link":"#四十八-如何监听-pushstate-和-replacestate-的变化呢","children":[]},{"level":2,"title":"（四十九）说一下 vue3.0 是如何变得更快的？","slug":"四十九-说一下-vue3-0-是如何变得更快的","link":"#四十九-说一下-vue3-0-是如何变得更快的","children":[]},{"level":2,"title":"（五十）说一说自定义指令有哪些生命周期？","slug":"五十-说一说自定义指令有哪些生命周期","link":"#五十-说一说自定义指令有哪些生命周期","children":[]},{"level":2,"title":"（五十一）说一说相比 vue3.x 对比 vue2.x 变化","slug":"五十一-说一说相比-vue3-x-对比-vue2-x-变化","link":"#五十一-说一说相比-vue3-x-对比-vue2-x-变化","children":[]},{"level":2,"title":"（五十二）vue 为什么采用异步渲染","slug":"五十二-vue-为什么采用异步渲染","link":"#五十二-vue-为什么采用异步渲染","children":[]},{"level":2,"title":"（五十三）组件中写 name 选项有哪些好处","slug":"五十三-组件中写-name-选项有哪些好处","link":"#五十三-组件中写-name-选项有哪些好处","children":[]}],"git":{"createdTime":1700799372000,"updatedTime":1700799372000,"contributors":[{"name":"郁子IKUKO","email":"1147998314@qq.com","commits":1}]},"readingTime":{"minutes":57.46,"words":17237},"filePathRelative":"notes/DuYi/04Interview/16.md","localizedDate":"2023年11月24日","excerpt":"<h2> （一）谈一谈对 MVVM 的理解？</h2>\\n<p>MVVM 是 Model-View-ViewModel 的缩写。MVVM 是一种设计思想。</p>\\n<ul>\\n<li>Model 层代表数据模型，也可以在 Model 中定义数据修改和操作的业务逻辑;</li>\\n<li>View 代表 UI 组件，它负责将数据模型转化成 UI 展现出来，View 是一个同步 View 和 Model 的对象</li>\\n</ul>\\n<p>在 MVVM 架构下，View 和 Model 之间并没有直接的联系，而是通过 ViewModel 进行交互， Model 和 ViewModel 之间的交互是双向的， 因此 View 数据的变化会同步到 Model 中，而 Model 数据的变化也会立即反应到 View 上。</p>"}');export{e as data};
