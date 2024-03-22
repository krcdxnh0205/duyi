import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as i,a as n,b as s,d as t,e}from"./app-1240ea23.js";const l="/assets/cover05-58f3cdc4.png",u="/assets/引入依赖注入01-cebea331.png",r="/assets/引入依赖注入02-ccf2eb53.png",d={},k=n("p",null,[n("img",{src:l,alt:""})],-1),v=n("h2",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),s(" 前言")],-1),m=n("p",null,"学习 Vite 和 Vue3 并搭建项目 Demo，主要目的是搭项目，对于新手直接跟着操作就可以把项目搭起来，借这个机会自己尝试写写博客，希望对大家有帮助。",-1),g={href:"https://gitee.com/yuziikuko/vite2-vue3-element-plus.git",target:"_blank",rel:"noopener noreferrer"},h={href:"https://yuziikuko.gitee.io/",target:"_blank",rel:"noopener noreferrer"},b=n("h2",{id:"参考链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参考链接","aria-hidden":"true"},"#"),s(" 参考链接")],-1),f={href:"https://www.cnblogs.com/qingheshiguang/p/14605999.html",target:"_blank",rel:"noopener noreferrer"},_={href:"https://blog.csdn.net/qq_41619796/article/details/111641608",target:"_blank",rel:"noopener noreferrer"},w={href:"https://v3.cn.vuejs.org/guide/composition-api-provide-inject.html#%E8%AE%BE%E6%83%B3%E5%9C%BA%E6%99%AF",target:"_blank",rel:"noopener noreferrer"},q=e(`<h2 id="一-准备祖孙-父子组件" tabindex="-1"><a class="header-anchor" href="#一-准备祖孙-父子组件" aria-hidden="true">#</a> （一）准备祖孙/父子组件</h2><p>使用 Element Plus 的抽屉组件，实现父组件按钮控制子组件抽屉打开的功能。</p><h3 id="_1-祖-父组件-src-components-helloworld-vue" tabindex="-1"><a class="header-anchor" href="#_1-祖-父组件-src-components-helloworld-vue" aria-hidden="true">#</a> 1.祖/父组件 src/components/HelloWorld.vue</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 打开抽屉 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span>
    <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>success<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleOpenChildrenDrawer<span class="token punctuation">&quot;</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token property">margin</span><span class="token punctuation">:</span> 20px auto</span><span class="token punctuation">&quot;</span></span></span>
  <span class="token punctuation">&gt;</span></span>
    {{ t(&quot;button.openDrawer&quot;) }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 自定义组件
   */</span>
  <span class="token keyword">const</span> isDrawerOpen <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleOpenChildrenDrawer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    isDrawerOpen<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+`" alt=""></p><h3 id="_2-孙-子组件-src-components-sidedrawer-vue" tabindex="-1"><a class="header-anchor" href="#_2-孙-子组件-src-components-sidedrawer-vue" aria-hidden="true">#</a> 2.孙/子组件 src/components/SideDrawer.vue</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-drawer</span>
    <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>drawer<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>I am the title<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rtl<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">:before-close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>handleClose<span class="token punctuation">&quot;</span></span>
  <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Hi, there!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-drawer</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> drawer <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">handleClose</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">done</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">ElMessage</span><span class="token punctuation">(</span><span class="token string">&quot;Drawer closed.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">done</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+r+`" alt=""></p><h2 id="二-祖-父组件中引入孙-子组件" tabindex="-1"><a class="header-anchor" href="#二-祖-父组件中引入孙-子组件" aria-hidden="true">#</a> （二）祖/父组件中引入孙/子组件</h2><h3 id="_1-普通-script-写法" tabindex="-1"><a class="header-anchor" href="#_1-普通-script-写法" aria-hidden="true">#</a> 1.普通 <code>&lt;script&gt;</code> 写法</h3><h4 id="_1-引入组件" tabindex="-1"><a class="header-anchor" href="#_1-引入组件" aria-hidden="true">#</a> 1）引入组件</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> SideDrawer <span class="token keyword">from</span> <span class="token string">&quot;./SideDrawer.vue&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-挂载组件" tabindex="-1"><a class="header-anchor" href="#_2-挂载组件" aria-hidden="true">#</a> 2）挂载组件</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    SideDrawer<span class="token punctuation">,</span>
    <span class="token string-property property">&quot;v-sidedrawer&quot;</span><span class="token operator">:</span> SideDrawer<span class="token punctuation">,</span>
    <span class="token string-property property">&quot;side-drawer&quot;</span><span class="token operator">:</span> SideDrawer<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有三种写法：</p><ul><li>直接挂载：<code>SideDrawer</code></li><li>使用别名：<code>&quot;v-sidedrawer&quot;: SideDrawer</code></li><li>横杠连接：<code>&quot;side-drawer&quot;: SideDrawer</code></li></ul><h4 id="_3-展示组件" tabindex="-1"><a class="header-anchor" href="#_3-展示组件" aria-hidden="true">#</a> 3）展示组件</h4><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SideDrawer</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SideDrawer</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-sidedrawer</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-sidedrawer</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>side-drawer</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>side-drawer</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有三种写法，分别对应三种挂载的不同写法：</p><ul><li>直接挂载：<code>&lt;SideDrawer&gt;&lt;/SideDrawer&gt;</code></li><li>使用别名：<code>&lt;v-sidedrawer&gt;&lt;/v-sidedrawer&gt;</code></li><li>横杠连接：<code>&lt;side-drawer&gt;&lt;/side-drawer&gt;</code></li></ul><h3 id="_2-使用-script-setup-语法糖" tabindex="-1"><a class="header-anchor" href="#_2-使用-script-setup-语法糖" aria-hidden="true">#</a> 2.使用 <code>&lt;script setup&gt;</code> 语法糖</h3><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SideDrawer</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>SideDrawer</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> SideDrawer <span class="token keyword">from</span> <span class="token string">&quot;./SideDrawer.vue&quot;</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>直接 <code>import</code> 引入即可在模板中使用，无需挂载。</p><h2 id="三-祖孙-父子组件响应式传参" tabindex="-1"><a class="header-anchor" href="#三-祖孙-父子组件响应式传参" aria-hidden="true">#</a> （三）祖孙/父子组件响应式传参</h2><h3 id="_1-使用-provide-传递参数" tabindex="-1"><a class="header-anchor" href="#_1-使用-provide-传递参数" aria-hidden="true">#</a> 1.使用 <code>provide</code> 传递参数</h3><ul><li>通常父子组件间传参直接使用 <code>prop</code> 最简便，也可使用 <code>provide/inject</code> 。</li><li>祖孙组件间使用 <code>provide/inject</code> 传参。</li><li><code>provide/inject</code> 本身传递数据是不具有响应性的。 <ul><li>当 <code>provide</code> 传递的数据是 <code>ref</code> 或 <code>reactive</code> 对象时，子组件 <code>inject</code> 的数据才具有响应性。</li><li>即当祖/父组件修改该数据时，孙/子组件才会接收到修改后的数据。</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> provide <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 提供响应式的值</span>
<span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&quot;isDrawerOpen&quot;</span><span class="token punctuation">,</span> isDrawerOpen<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-使用-inject-接收参数" tabindex="-1"><a class="header-anchor" href="#_2-使用-inject-接收参数" aria-hidden="true">#</a> 2.使用 <code>inject</code> 接收参数</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// 注入一个值，若为空则使用提供的默认值</span>
<span class="token keyword">const</span> drawer <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&quot;isDrawerOpen&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四-相关知识点总结" tabindex="-1"><a class="header-anchor" href="#四-相关知识点总结" aria-hidden="true">#</a> （四）相关知识点总结</h2>`,30),j={href:"https://cn.vuejs.org/guide/components/provide-inject.html",target:"_blank",rel:"noopener noreferrer"},y=e(`<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f49fe8ef51144fd6bacf3f346062bcbc~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p><div class="hint-container danger"><p class="hint-container-title">注意</p><p>provide/inject 只能在 setup() 中使用，使用前需要从 vue 中 import 进来。</p></div><ul><li>provide 函数有两个参数： <ul><li>name ( 类型)</li><li>value</li></ul></li><li>inject 函数有两个参数： <ul><li>要 inject 的 property 的 name</li><li>默认值 (可选)</li></ul></li></ul><h3 id="_1-调用-provide-函数-将值传给自定义组件-子组件" tabindex="-1"><a class="header-anchor" href="#_1-调用-provide-函数-将值传给自定义组件-子组件" aria-hidden="true">#</a> 1.调用 provide 函数，将值传给自定义组件（子组件）</h3><p><code>provide(&#39;数据名称&#39;, 要传递的数据)</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&quot;location&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;North Pole&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&quot;geolocation&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">longitude</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
  <span class="token literal-property property">latitude</span><span class="token operator">:</span> <span class="token number">135</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-调用-inject-函数-通过指定的数据名称获取到父组件共享的数据" tabindex="-1"><a class="header-anchor" href="#_2-调用-inject-函数-通过指定的数据名称获取到父组件共享的数据" aria-hidden="true">#</a> 2.调用 inject 函数，通过指定的数据名称获取到父组件共享的数据</h3><p><code>const customVal = inject(&quot;customVal&quot;)</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> userLocation <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&quot;location&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;The Universe&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> userGeolocation <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&quot;geolocation&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">return</span> <span class="token punctuation">{</span>
  userLocation<span class="token punctuation">,</span>
  userGeolocation<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-使传递的数据响应式更新" tabindex="-1"><a class="header-anchor" href="#_3-使传递的数据响应式更新" aria-hidden="true">#</a> 3.使传递的数据响应式更新</h3><p>为了增加 provide 值和 inject 值之间的响应性，我们可以在 provide 值时使用 ref 或 reactive。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> location <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&quot;North Pole&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> geolocation <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">longitude</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
  <span class="token literal-property property">latitude</span><span class="token operator">:</span> <span class="token number">135</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&quot;location&quot;</span><span class="token punctuation">,</span> location<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&quot;geolocation&quot;</span><span class="token punctuation">,</span> geolocation<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-同组件中-数据-a-的值挂靠在数据-b-的更新上" tabindex="-1"><a class="header-anchor" href="#_4-同组件中-数据-a-的值挂靠在数据-b-的更新上" aria-hidden="true">#</a> 4.同组件中，数据 A 的值挂靠在数据 B 的更新上</h3><p>使用 vue 提供的计算属性 <code>computed</code> ，Vue 知道数据 B 依赖于数据 A，所以当数据 A 更新时，数据 B 也会更新。</p>`,14),x={href:"https://www.cnblogs.com/rockyjs/p/13977280.html",target:"_blank",rel:"noopener noreferrer"};function D(S,E){const a=o("ExternalLinkIcon");return c(),i("div",null,[k,v,m,n("ul",null,[n("li",null,[n("a",g,[s("项目码云（Gitee）仓库地址"),t(a)])]),n("li",null,[n("a",h,[s("个人主页"),t(a)])])]),b,n("ul",null,[n("li",null,[s("自定义组件："),n("a",f,[s("vue3.x 中的自定义组件及使用 - 清和时光 - 博客园"),t(a)])]),n("li",null,[s("父子组件传参："),n("a",_,[s("vue3.0 笔记二：vue3.0 中 props 父子传值的改动_浩星-CSDN 博客"),t(a)])]),n("li",null,[s("官方文档："),n("a",w,[s("Provide / Inject | Vue.js"),t(a)])])]),q,n("ul",null,[n("li",null,[s("官方文档："),n("a",j,[s("依赖注入"),t(a)])])]),y,n("p",null,[s("参考文档："),n("a",x,[s("vue3 动态的改变样式 - 一封未寄出的信 - 博客园"),t(a)])])])}const C=p(d,[["render",D],["__file","05.html.vue"]]);export{C as default};
