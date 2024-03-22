import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as r,e as i}from"./app-1240ea23.js";const l={},d=i('<p><img src="https://v2.cn.vuejs.org/images/lifecycle.png" alt="生命周期图示"></p><h2 id="一-含义" tabindex="-1"><a class="header-anchor" href="#一-含义" aria-hidden="true">#</a> （一）含义</h2><ul><li>又名：生命周期回调函数、生命周期函数、生命周期钩子</li><li>是什么：Vue 在关键时刻帮我们调用的一些特殊名称的函数</li><li>生命周期函数的名字不可更改，但函数的具体内容是程序员根据需求编写的</li><li>生命周期函数中的 this 指向是 <strong>vm</strong> 或 <strong>组件实例对象</strong></li></ul><h2 id="二-类比理解" tabindex="-1"><a class="header-anchor" href="#二-类比理解" aria-hidden="true">#</a> （二）类比理解</h2><table><thead><tr><th>张三的一生（张三的生命周期）</th><th>vm 的一生（vm 的生命周期）</th></tr></thead><tbody><tr><td>将要出生</td><td>将要创建 ===&gt; 调用 beforeCreate 函数</td></tr><tr><td>/</td><td>创建完毕 ===&gt; 调用 created 函数</td></tr><tr><td>/</td><td>将要挂载 ===&gt; 调用 beforeMount 函数</td></tr><tr><td><strong>呱呱坠地 ===&gt; 检查身体各项指标</strong></td><td><strong>挂载完毕 ===&gt; 调用 mounted 函数（重要的钩子）</strong></td></tr><tr><td>学会说话</td><td>将要更新 ===&gt; 调用 beforeUpdate 函数</td></tr><tr><td>学会走路</td><td>更新完毕 ===&gt; 调用 updated 函数</td></tr><tr><td>......</td><td>......</td></tr><tr><td>......</td><td>......</td></tr><tr><td><strong>将要永别 ===&gt; 交代后事</strong></td><td><strong>将要销毁 ===&gt; 调用 beforeDestroy 函数（重要的钩子）</strong></td></tr><tr><td>已经永别</td><td>销毁完毕 ===&gt; 调用 destroyed 函数</td></tr></tbody></table><h2 id="三-常用的生命周期钩子" tabindex="-1"><a class="header-anchor" href="#三-常用的生命周期钩子" aria-hidden="true">#</a> （三）常用的生命周期钩子</h2><h3 id="_1-mounted" tabindex="-1"><a class="header-anchor" href="#_1-mounted" aria-hidden="true">#</a> 1.mounted</h3><ul><li>发送 Ajax 请求、启动定时器、绑定自定义事件、订阅消息等 <strong>初始化操作</strong></li></ul><h3 id="_2-beforedestroy" tabindex="-1"><a class="header-anchor" href="#_2-beforedestroy" aria-hidden="true">#</a> 2.beforeDestroy</h3><ul><li>清除定时器、解绑自定义事件、取消订阅消息等 <strong>收尾工作</strong></li></ul><h2 id="四-关于销毁-vue-实例" tabindex="-1"><a class="header-anchor" href="#四-关于销毁-vue-实例" aria-hidden="true">#</a> （四）关于销毁 Vue 实例</h2><ul><li>销毁后借助 Vue 开发者工具看不到任何信息</li><li>销毁后自定义事件会失效，但原生 DOM 事件依然有效</li><li>一般不会在 beforeDestroy 操作数据，因为即使操作数据也不会触发更新流程了</li></ul><h2 id="五-生命周期图示" tabindex="-1"><a class="header-anchor" href="#五-生命周期图示" aria-hidden="true">#</a> （五）生命周期图示</h2><h3 id="_1-挂载流程" tabindex="-1"><a class="header-anchor" href="#_1-挂载流程" aria-hidden="true">#</a> 1.挂载流程</h3><ul><li>new Vue({})</li><li>Init Events &amp; Lifecycle：初始化生命周期、事件，但数据代理还未开始</li><li>【beforeCreate】：<strong>无法</strong> 通过 vm 访问到 data 中的数据和 methods 中的方法</li><li>Init injections &amp; reactivity：初始化数据监测、数据代理</li><li>【created】：<strong>可以</strong> 通过 vm 访问到 data 中的数据和 methods 中的方法</li><li>Has &quot;el&quot; option? =&gt; <ul><li>No =&gt; when vm.$mount(el) is called =&gt;</li><li>Yes =&gt;</li><li>Has &quot;template&quot; option? <ul><li>Yes =&gt; Compile template into render function</li><li>No =&gt; Compile el&#39;s outerHTML as template</li></ul></li><li>上述阶段 Vue 开始解析模板，生成虚拟 DOM（内存中），<strong>页面还不能显示解析好的内容</strong></li></ul></li><li>【beforeMount】： <ul><li>页面呈现的是 <strong>未经 Vue 编译</strong> 的 DOM 结构</li><li>所有对 DOM 的操作，最终都不奏效</li></ul></li><li>Create vm.$el and replace &quot;el&quot; with it：将内存中的虚拟 DOM 转为真实 DOM 插入页面</li><li>【mounted】： <ul><li>页面呈现的是 <strong>经过 Vue 编译</strong> 的 DOM</li><li>对 DOM 的操作均有效（尽可能避免）</li></ul></li><li>至此初始化过程结束，一般在此进行：开启定时器、发送网络请求、订阅消息、绑定自定义事件等 <strong>初始化操作</strong></li></ul><h3 id="_2-更新流程" tabindex="-1"><a class="header-anchor" href="#_2-更新流程" aria-hidden="true">#</a> 2.更新流程</h3><ul><li>Mounted：When data changes =&gt; <ul><li>【beforeUpdate】：此时数据是最新的，但页面是旧的，即：<strong>页面尚未和数据保持同步</strong></li><li>Virtual DOM re-render and patch：根据新数据，生成新的虚拟 DOM，随后与旧的虚拟 DOM 进行比较，最终完成页面更新，即：完成了 Model → View 的更新</li><li>【updated】：此时数据是最新的，页面也是新的，即：<strong>页面和数据保持同步</strong></li></ul></li><li>When vm.$destroy() is called：由更新流程进入销毁流程</li></ul><h3 id="_3-销毁流程" tabindex="-1"><a class="header-anchor" href="#_3-销毁流程" aria-hidden="true">#</a> 3.销毁流程</h3><ul><li>【beforeDestroy】：此时，vm 中所有的 data、methods、指令等等，都处于可用状态，马上要执行销毁过程，一般在此阶段进行关闭定时器、取消订阅消息、解绑自定义事件等 <strong>收尾操作</strong></li><li>Teardown watchers, child components and event listeners</li><li>Destroyed： <ul><li>【destroyed】</li></ul></li></ul>',19),a=[d];function o(n,s){return e(),r("div",null,a)}const c=t(l,[["render",o],["__file","19.html.vue"]]);export{c as default};
