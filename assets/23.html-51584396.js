import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,e as t}from"./app-1ca76096.js";const e={},c=t(`<h2 id="一-作用" tabindex="-1"><a class="header-anchor" href="#一-作用" aria-hidden="true">#</a> （一）作用</h2><ul><li>被用来给元素或子组件注册引用信息（id 的替代者）</li></ul><h2 id="二-值" tabindex="-1"><a class="header-anchor" href="#二-值" aria-hidden="true">#</a> （二）值</h2><ul><li>应用在 html 标签上获取的是真实 DOM 元素</li><li>应用在组件标签上是组件实例对象（vc）</li></ul><h2 id="三-使用方式" tabindex="-1"><a class="header-anchor" href="#三-使用方式" aria-hidden="true">#</a> （三）使用方式</h2><h3 id="_1-打标识" tabindex="-1"><a class="header-anchor" href="#_1-打标识" aria-hidden="true">#</a> 1.打标识</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xxx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- 或者 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>School</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xxx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>School</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-获取" tabindex="-1"><a class="header-anchor" href="#_2-获取" aria-hidden="true">#</a> 2.获取</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>xxx<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),l=[c];function p(o,i){return n(),s("div",null,l)}const d=a(e,[["render",p],["__file","23.html.vue"]]);export{d as default};
