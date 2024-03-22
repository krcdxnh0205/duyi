import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-1ca76096.js";const e={},c=t(`<h2 id="一-简介" tabindex="-1"><a class="header-anchor" href="#一-简介" aria-hidden="true">#</a> （一）简介</h2><ul><li><code>ES6</code> 提供了 <code>Map</code> 数据结构 <ul><li>类似于对象，也是键值对的集合</li><li>但是键的范围不局限于字符串，各种类型的值（包括对象）都可以作为键</li></ul></li><li>实现了 <code>iterator</code> 接口 <ul><li>所以可以使用扩展运算符 <code>...</code> 和 <code>for...of</code> 遍历</li></ul></li></ul><h3 id="_1-属性和方法" tabindex="-1"><a class="header-anchor" href="#_1-属性和方法" aria-hidden="true">#</a> 1.属性和方法</h3><table><thead><tr><th>属性/方法</th><th>说明</th></tr></thead><tbody><tr><td><code>size</code></td><td>返回 <code>Map</code> 的元素个数</td></tr><tr><td><code>set</code></td><td>增加一个新元素，返回当前 <code>Map</code></td></tr><tr><td><code>get</code></td><td>返回键名对象的键值</td></tr><tr><td><code>has</code></td><td>检测 <code>Map</code> 中是否包含某个元素，返回 <code>boolean</code> 值</td></tr><tr><td><code>clear</code></td><td>清空映射，返回 <code>undefined</code></td></tr></tbody></table><h3 id="_2-声明一个-map" tabindex="-1"><a class="header-anchor" href="#_2-声明一个-map" aria-hidden="true">#</a> 2.声明一个 Map</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Map(0) {size: 0}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-元素个数" tabindex="-1"><a class="header-anchor" href="#_3-元素个数" aria-hidden="true">#</a> 3.元素个数</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-添加新的元素" tabindex="-1"><a class="header-anchor" href="#_4-添加新的元素" aria-hidden="true">#</a> 4.添加新的元素</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>m<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ikuko&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Map(1) {&#39;name&#39; =&gt; &#39;ikuko&#39;}</span>

m<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;change&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;AAA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Map(2) {&#39;name&#39; =&gt; &#39;ikuko&#39;, &#39;change&#39; =&gt; ƒ}</span>

<span class="token keyword">let</span> key <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">yg</span><span class="token operator">:</span> <span class="token string">&quot;IKUKO&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
m<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;北京&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;深圳&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;上海&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Map(3) {&#39;name&#39; =&gt; &#39;ikuko&#39;, &#39;change&#39; =&gt; ƒ, {…} =&gt; Array(3)}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-删除" tabindex="-1"><a class="header-anchor" href="#_5-删除" aria-hidden="true">#</a> 5.删除</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>m<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Map(2) {&#39;change&#39; =&gt; ƒ, {…} =&gt; &#39;北京&#39;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-获取" tabindex="-1"><a class="header-anchor" href="#_6-获取" aria-hidden="true">#</a> 6.获取</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;change&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ƒ () {</span>
<span class="token comment">//     console.log(&quot;AAA&quot;);</span>
<span class="token comment">// }</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// (3) [&#39;北京&#39;, &#39;深圳&#39;, &#39;上海&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-遍历" tabindex="-1"><a class="header-anchor" href="#_7-遍历" aria-hidden="true">#</a> 7.遍历</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> v <span class="token keyword">of</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// (2) [&#39;change&#39;, ƒ]</span>
<span class="token comment">// (2) [{…}, Array(3)]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-清空" tabindex="-1"><a class="header-anchor" href="#_8-清空" aria-hidden="true">#</a> 8.清空</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>m<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Map(0) {size: 0}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),p=[c];function o(i,l){return s(),a("div",null,p)}const r=n(e,[["render",o],["__file","15.html.vue"]]);export{r as default};
