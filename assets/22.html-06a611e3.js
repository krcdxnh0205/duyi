import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e}from"./app-1ca76096.js";const t={},p=e(`<h2 id="一-对象展开" tabindex="-1"><a class="header-anchor" href="#一-对象展开" aria-hidden="true">#</a> （一）对象展开</h2><ul><li><code>rest</code> 参数与 <code>spread</code> 扩展运算符在 <code>ES6</code> 中已经引入，但是只针对数组</li><li><code>ES9</code> 中为对象提供了像数组一样的 <code>rest</code> 参数和扩展运算符</li></ul><h3 id="_1-rest-参数" tabindex="-1"><a class="header-anchor" href="#_1-rest-参数" aria-hidden="true">#</a> 1.rest 参数</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// function connect({ host, port, username, password }) {</span>
<span class="token comment">//   console.log(host);</span>
<span class="token comment">//   console.log(port);</span>
<span class="token comment">//   console.log(username);</span>
<span class="token comment">//   console.log(password);</span>
<span class="token comment">// }</span>
<span class="token comment">// 127.0.0.1</span>
<span class="token comment">// 3306</span>
<span class="token comment">// root</span>
<span class="token comment">// root</span>

<span class="token keyword">function</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> host<span class="token punctuation">,</span> port<span class="token punctuation">,</span> <span class="token operator">...</span>user <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>host<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>port<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 127.0.0.1</span>
<span class="token comment">// 3306</span>
<span class="token comment">// {username: &#39;root&#39;, password: &#39;root&#39;}</span>
<span class="token comment">// {username: &#39;root&#39;, password: &#39;root&#39;, type: &#39;master&#39;}</span>

<span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3306</span><span class="token punctuation">,</span>
  <span class="token literal-property property">username</span><span class="token operator">:</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;master&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-扩展运算符" tabindex="-1"><a class="header-anchor" href="#_2-扩展运算符" aria-hidden="true">#</a> 2.扩展运算符</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> skillOne <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">q</span><span class="token operator">:</span> <span class="token string">&quot;天音波&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// ...skillOne =&gt; q: &#39;天音波&#39;, w: &#39;金钟罩&#39;</span>

<span class="token keyword">const</span> skillTwo <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">w</span><span class="token operator">:</span> <span class="token string">&quot;金钟罩&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> skillThree <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">e</span><span class="token operator">:</span> <span class="token string">&quot;天雷破&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> skillFour <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token string">&quot;猛龙摆尾&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> mangseng <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>skillOne<span class="token punctuation">,</span> <span class="token operator">...</span>skillTwo<span class="token punctuation">,</span> <span class="token operator">...</span>skillThree<span class="token punctuation">,</span> <span class="token operator">...</span>skillFour <span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>mangseng<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// {q: &#39;天音波&#39;, w: &#39;金钟罩&#39;, e: &#39;天雷破&#39;, r: &#39;猛龙摆尾&#39;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二-正则表达式扩展" tabindex="-1"><a class="header-anchor" href="#二-正则表达式扩展" aria-hidden="true">#</a> （二）正则表达式扩展</h2><h3 id="_1-命名捕获分组" tabindex="-1"><a class="header-anchor" href="#_1-命名捕获分组" aria-hidden="true">#</a> 1.命名捕获分组</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 声明一个字符串</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;&lt;a href=&quot;https://www.baidu.com&quot;&gt;百度&lt;/a&gt;&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>需求：提取 url、标签文本</p><p>两种方式区别在于 <code>groups</code> 字段</p></blockquote><h4 id="_1-方式一-通过下标获取" tabindex="-1"><a class="header-anchor" href="#_1-方式一-通过下标获取" aria-hidden="true">#</a> 1）方式一：通过下标获取</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> reg1 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;a href=&quot;(.*)&quot;&gt;(.*)&lt;\\/a&gt;</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> res1 <span class="token operator">=</span> reg1<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// (3) [&#39;&lt;a href=&quot;https://www.baidu.com&quot;&gt;百度&lt;/a&gt;&#39;, &#39;https://www.baidu.com&#39;, &#39;百度&#39;, index: 0, input: &#39;&lt;a href=&quot;https://www.baidu.com&quot;&gt;百度&lt;/a&gt;&#39;, groups: undefined]</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res1<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> res1<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// https://www.baidu.com 百度</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-方式二-通过正则分组获取" tabindex="-1"><a class="header-anchor" href="#_2-方式二-通过正则分组获取" aria-hidden="true">#</a> 2）方式二：通过正则分组获取</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> reg2 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;a href=&quot;(?&lt;url&gt;.*)&quot;&gt;(?&lt;text&gt;.*)&lt;\\/a&gt;</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> res2 <span class="token operator">=</span> reg2<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// (3) [&#39;&lt;a href=&quot;https://www.baidu.com&quot;&gt;百度&lt;/a&gt;&#39;, &#39;https://www.baidu.com&#39;, &#39;百度&#39;, index: 0, input: &#39;&lt;a href=&quot;https://www.baidu.com&quot;&gt;百度&lt;/a&gt;&#39;, groups: {…}]</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res2<span class="token punctuation">.</span>groups<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// https://www.baidu.com</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res2<span class="token punctuation">.</span>groups<span class="token punctuation">.</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 百度</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-反向断言" tabindex="-1"><a class="header-anchor" href="#_2-反向断言" aria-hidden="true">#</a> 2.反向断言</h3><ul><li>断言：判断本次匹配结果正确与否</li><li>正向断言：根据所需字符串 <strong>后面</strong> 跟着的内容进行判断</li><li>反向断言：根据所需字符串 <strong>前面</strong> 跟着的内容进行判断</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 声明一个字符串</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&quot;JS5211314你知道么555啦啦啦&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>需求：提取第二段数字</p></blockquote><h4 id="_1-方式一-正向断言" tabindex="-1"><a class="header-anchor" href="#_1-方式一-正向断言" aria-hidden="true">#</a> 1）方式一：正向断言(?=)</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> reg1 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\d+(?=啦)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> res1 <span class="token operator">=</span> reg1<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [&#39;555&#39;, index: 13, input: &#39;JS5211314你知道么555啦啦啦&#39;, groups: undefined]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-方式二-反向断言" tabindex="-1"><a class="header-anchor" href="#_2-方式二-反向断言" aria-hidden="true">#</a> 2）方式二：反向断言(?&lt;=)</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> reg2 <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?&lt;=么)\\d+</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> res2 <span class="token operator">=</span> reg2<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [&#39;555&#39;, index: 13, input: &#39;JS5211314你知道么555啦啦啦&#39;, groups: undefined]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-dotall-模式" tabindex="-1"><a class="header-anchor" href="#_3-dotall-模式" aria-hidden="true">#</a> 3.dotAll 模式</h3><ul><li>dot: <code>.</code><ul><li>在正则中表示元字符，代表除换行符外的任意单字符</li></ul></li><li>dotAll: <code>.</code> 代表任意字符 <ul><li>在 <code>html</code> 代码字符串中查找有重要意义</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 声明一个字符串</span>
<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  &lt;ul&gt;
    &lt;li&gt;
      &lt;a&gt;肖生克的救赎&lt;/a&gt;
      &lt;p&gt;上映日期: 1994-09-10&lt;/p&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;a&gt;阿甘正传&lt;/a&gt;
      &lt;p&gt;上映日期: 1994-07-06&lt;/p&gt;
    &lt;/li&gt;
  &lt;/ul&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>需求：提取电影名称和上映时间，存到对象中</p></blockquote><h4 id="_1-方式一-需要添加多个-s" tabindex="-1"><a class="header-anchor" href="#_1-方式一-需要添加多个-s" aria-hidden="true">#</a> 1）方式一：需要添加多个<code>\\s</code></h4><ul><li><p>贪婪：表示最大匹配。</p></li><li><p><code>(.*?)</code> : <code>?</code> 表示禁止贪婪。</p></li><li><p><code>\\s</code> : 单个的空白字符，包括换行符。</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;li&gt;\\s+&lt;a&gt;(.*?)&lt;\\/a&gt;\\s+&lt;p&gt;(.*?)&lt;\\/p&gt;</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-方式二-dotall-模式" tabindex="-1"><a class="header-anchor" href="#_2-方式二-dotall-模式" aria-hidden="true">#</a> 2）方式二：dotAll 模式</h4><ul><li><code>s</code> : 模式修正符 <ul><li>使 <code>.</code> 可以匹配任意字符</li></ul></li><li><code>g</code> : 模式修正符 <ul><li>全局匹配</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;li&gt;.*?&lt;a&gt;(.*?)&lt;\\/a&gt;.*?&lt;p&gt;(.*?)&lt;\\/p&gt;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">gs</span></span><span class="token punctuation">;</span>
<span class="token keyword">let</span> res<span class="token punctuation">;</span>
<span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>res <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// console.log(res);</span>
  data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> res<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">time</span><span class="token operator">:</span> res<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 0: {title: &#39;肖生克的救赎&#39;, time: &#39;上映日期: 1994-09-10&#39;}</span>
<span class="token comment">// 1: {title: &#39;阿甘正传&#39;, time: &#39;上映日期: 1994-07-06&#39;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32),o=[p];function l(c,i){return s(),a("div",null,o)}const d=n(t,[["render",l],["__file","22.html.vue"]]);export{d as default};
