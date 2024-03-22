import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as i,c as o,a as n,b as c,d as l,e as s}from"./app-1ca76096.js";const p="/assets/vuex3-804b3f17.png",u={},r=s('<h2 id="一-理解-vuex" tabindex="-1"><a class="header-anchor" href="#一-理解-vuex" aria-hidden="true">#</a> （一）理解 Vuex</h2><h3 id="_1-vuex-是什么" tabindex="-1"><a class="header-anchor" href="#_1-vuex-是什么" aria-hidden="true">#</a> 1.Vuex 是什么</h3><ul><li>专门在 Vue 中实现 <strong>集中式状态（数据）管理</strong> 的一个 Vue 插件 <ul><li>集中式：类似于一名老师给一个班级的学生上课，老师只讲一遍，但是有一群学生的思维在接收</li><li>分布式：与集中式相对</li></ul></li><li>对 Vue 应用中多个组件的 <strong>共享状态</strong> 进行集中式的管理（读/写）</li><li>也是一种组件间通信的方式，且适用于任意组件间通信</li></ul><h3 id="_2-github-地址" tabindex="-1"><a class="header-anchor" href="#_2-github-地址" aria-hidden="true">#</a> 2.GitHub 地址</h3>',4),d={href:"https://github.com/vuejs/vuex",target:"_blank",rel:"noopener noreferrer"},v=s('<h3 id="_3-什么时候使用-vuex" tabindex="-1"><a class="header-anchor" href="#_3-什么时候使用-vuex" aria-hidden="true">#</a> 3.什么时候使用 Vuex</h3><ul><li>多个组件需要共享数据时使用</li><li>多个组件依赖于同一状态</li><li>来自不同组件的行为需要变更同一状态</li></ul><h2 id="二-vuex-工作原理" tabindex="-1"><a class="header-anchor" href="#二-vuex-工作原理" aria-hidden="true">#</a> （二）Vuex 工作原理</h2><ul><li>API 由 Store 统一管理</li></ul><p><img src="'+p+`" alt=""></p><h2 id="三-搭建-vuex-环境" tabindex="-1"><a class="header-anchor" href="#三-搭建-vuex-环境" aria-hidden="true">#</a> （三）搭建 Vuex 环境</h2><h3 id="_1-安装" tabindex="-1"><a class="header-anchor" href="#_1-安装" aria-hidden="true">#</a> 1.安装</h3><ul><li>在 2022 年 02 月 07 日，Vue3 成为了默认版本 <ul><li>即 <code>npm i vue</code> 直接安装的是 Vue3</li></ul></li><li>同时 Vuex 也更新到了 v4 <ul><li>即 <code>npm i vuex</code> 安装的是 Vuex4</li></ul></li><li>Vuex4 只能在 Vue3 中使用</li><li>Vue2 项目需要安装 Vuex3</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i vuex@3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-创建配置文件" tabindex="-1"><a class="header-anchor" href="#_2-创建配置文件" aria-hidden="true">#</a> 2.创建配置文件</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// src/store/index.js</span>
<span class="token comment">// 引入Vue核心库</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 引入Vuex</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 使用Vuex插件</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 准备Actions对象——用于响应组件中用户的动作</span>
<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 准备Mutations对象——用于操作state中的数据</span>
<span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 准备State对象——用于存储具体的数据</span>
<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 创建并暴露Store</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  actions<span class="token punctuation">,</span>
  mutations<span class="token punctuation">,</span>
  state<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-创建-vm-时传入-store-配置项" tabindex="-1"><a class="header-anchor" href="#_3-创建-vm-时传入-store-配置项" aria-hidden="true">#</a> 3.创建 vm 时传入 store 配置项</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// main.js</span>
<span class="token operator">...</span><span class="token operator">...</span>
<span class="token comment">// 引入Store</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span><span class="token punctuation">;</span>
<span class="token operator">...</span><span class="token operator">...</span>

<span class="token comment">// 创建Vue实例对象---vm</span>
<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">,</span>
  store
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function k(m,h){const a=t("ExternalLinkIcon");return i(),o("div",null,[r,n("ul",null,[n("li",null,[n("a",d,[c("https://github.com/vuejs/vuex"),l(a)])])]),v])}const _=e(u,[["render",k],["__file","38.html.vue"]]);export{_ as default};
