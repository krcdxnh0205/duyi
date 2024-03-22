import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-1240ea23.js";const p={},e=t(`<h2 id="一-对象方法扩展-——-object-fromentries" tabindex="-1"><a class="header-anchor" href="#一-对象方法扩展-——-object-fromentries" aria-hidden="true">#</a> （一）对象方法扩展 —— Object.fromEntries()</h2><ul><li>创建一个对象，方法参数可以是一个二维数组，也可以是一个 <code>Map</code> 对象</li></ul><h3 id="_1-二维数组" tabindex="-1"><a class="header-anchor" href="#_1-二维数组" aria-hidden="true">#</a> 1.二维数组</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> res1 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">fromEntries</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ikuko&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token string">&quot;skill&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;前端, PHP&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// {name: &#39;ikuko&#39;, skill: &#39;前端, PHP&#39;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-map-对象" tabindex="-1"><a class="header-anchor" href="#_2-map-对象" aria-hidden="true">#</a> 2.Map 对象</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
m<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ikuko&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 数组转为对象</span>
<span class="token keyword">const</span> res2 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">fromEntries</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// {}</span>
<span class="token comment">// {name: &#39;ikuko&#39;}</span>

<span class="token comment">// 对象转为数组(ES8)</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;ikuko&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [Array(2)]</span>
<span class="token comment">// 0: (2) [&#39;name&#39;, &#39;ikuko&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二-字符串方法扩展" tabindex="-1"><a class="header-anchor" href="#二-字符串方法扩展" aria-hidden="true">#</a> （二）字符串方法扩展</h2><ul><li>ES5： <code>trim()</code></li></ul><h3 id="_1-trimstart" tabindex="-1"><a class="header-anchor" href="#_1-trimstart" aria-hidden="true">#</a> 1.trimStart()</h3><ul><li>清除字符串左侧空白。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;    iLoveU   &quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">trimStart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//     iLoveU</span>
<span class="token comment">// iLoveU</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-trimend" tabindex="-1"><a class="header-anchor" href="#_2-trimend" aria-hidden="true">#</a> 2.trimEnd()</h3><ul><li>清除字符串右侧空白</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;    iLoveU   &quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">trimEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//     iLoveU   //</span>
<span class="token comment">//     iLoveU//</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-数组方法扩展" tabindex="-1"><a class="header-anchor" href="#三-数组方法扩展" aria-hidden="true">#</a> （三）数组方法扩展</h2><h3 id="_1-flat" tabindex="-1"><a class="header-anchor" href="#_1-flat" aria-hidden="true">#</a> 1.flat()</h3><ul><li>降低多维数组的维度 <ul><li>参数为数字，表示深度</li><li>默认参数为 1</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// (6) [1, 2, 3, 4, 5, 6]</span>

<span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// (7) [1, 2, 3, 4, 5, 6, Array(3)]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr2<span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-flatmap" tabindex="-1"><a class="header-anchor" href="#_2-flatmap" aria-hidden="true">#</a> 2.flatMap()</h3><ul><li>降低多维 <code>Map</code> 的维度</li><li>相当于两个操作 <code>flat()</code> + <code>map()</code></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> arr3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> res3 <span class="token operator">=</span> arr3<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// (4) [10, 20, 30, 40]</span>

<span class="token keyword">const</span> res4 <span class="token operator">=</span> arr3<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>item <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res4<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// (4) [Array(1), Array(1), Array(1), Array(1)]</span>

<span class="token keyword">const</span> res5 <span class="token operator">=</span> arr3<span class="token punctuation">.</span><span class="token function">flatMap</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>item <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res5<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// (4) [10, 20, 30, 40]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四-symbol-属性扩展-——-symbol-prototype-description" tabindex="-1"><a class="header-anchor" href="#四-symbol-属性扩展-——-symbol-prototype-description" aria-hidden="true">#</a> （四）Symbol 属性扩展 —— Symbol.prototype.description</h2><ul><li>获取 <code>Symbol</code> 的描述字符串</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建Symbol</span>
<span class="token keyword">let</span> s <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&quot;ikuko&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>description<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ikuko</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","23.html.vue"]]);export{k as default};
