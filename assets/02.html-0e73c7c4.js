import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as e,o as l,c as p,a as n,b as a,d as c,e as i}from"./app-1ca76096.js";const o={},u=n("h2",{id:"一-高度塌陷和-bfc",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#一-高度塌陷和-bfc","aria-hidden":"true"},"#"),a(" （一）高度塌陷和 BFC")],-1),r=n("h3",{id:"_1-成因",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-成因","aria-hidden":"true"},"#"),a(" 1. 成因")],-1),d=n("li",null,"在浮动布局中，父元素高度默认由子元素高度撑开",-1),k=n("li",null,"当子元素设置浮动脱离文档流后，父元素高度丢失，导致页面结构上移",-1),v={href:"https://www.bilibili.com/video/BV1XJ411X7Ud?p=64",target:"_blank",rel:"noopener noreferrer"},h=i(`<h3 id="_2-解决" tabindex="-1"><a class="header-anchor" href="#_2-解决" aria-hidden="true">#</a> 2. 解决</h3><ul><li>块级格式化环境 Block Formatting Context(BFC)，是一个隐含的属性</li><li>通过设置某些已有样式为元素开启 BFC，使元素形成独立的布局区域</li></ul><h3 id="_3-元素开启-bfc-后具备的特点" tabindex="-1"><a class="header-anchor" href="#_3-元素开启-bfc-后具备的特点" aria-hidden="true">#</a> 3. 元素开启 BFC 后具备的特点</h3><ul><li>开启 BFC 的元素不会被浮动元素所覆盖</li><li>开启 BFC 的元素子元素和父元素外边距不会重叠</li><li>开启 BFC 的元素可以包含浮动的子元素</li></ul><h3 id="_4-开启-bfc-的方法" tabindex="-1"><a class="header-anchor" href="#_4-开启-bfc-的方法" aria-hidden="true">#</a> 4. 开启 BFC 的方法</h3><ul><li>设置元素浮动：<code>display: float;</code><ul><li>不推荐，宽度会丢失</li></ul></li><li>将元素设置为行内块元素：<code>display: inline-block;</code><ul><li>不推荐，不适合外部元素，且宽度丢失</li></ul></li><li>将元素的 overflow 设置为一个非 visible 的值：<code>overflow: hidden/auto;</code><ul><li>常用，但是也有代价，不是最佳解决方案</li></ul></li></ul><h2 id="二-清除浮动" tabindex="-1"><a class="header-anchor" href="#二-清除浮动" aria-hidden="true">#</a> （二）清除浮动</h2><ul><li>如果不希望某个元素因为其他元素浮动的影响而改变位置</li><li>可以通过 <code>clear</code> 属性来清除浮动元素对当前元素所产生的影响</li></ul><h3 id="_1-clear-属性" tabindex="-1"><a class="header-anchor" href="#_1-clear-属性" aria-hidden="true">#</a> 1. clear 属性</h3><ul><li><code>clear: left;</code><ul><li>清除浮动向左的元素产生的影响</li></ul></li><li><code>clear: right;</code><ul><li>清除浮动向右的元素产生的影响</li></ul></li><li><code>clear: both;</code><ul><li>常用</li><li>清除左右浮动的元素中影响较大的一方产生的影响（上移高度较大者）</li></ul></li></ul><h3 id="_2-clear-属性解决高度塌陷" tabindex="-1"><a class="header-anchor" href="#_2-clear-属性解决高度塌陷" aria-hidden="true">#</a> 2. clear 属性解决高度塌陷</h3><ul><li>可以解决，但是不推荐</li><li>CSS 产生的问题应该由 CSS 来解决</li><li>凭空增加占用 div 会使 HTML 结构混乱</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 通过增加HTML结构解决CSS样式产生的高度塌陷问题 --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-after-伪类解决高度塌陷" tabindex="-1"><a class="header-anchor" href="#_3-after-伪类解决高度塌陷" aria-hidden="true">#</a> 3. ::after 伪类解决高度塌陷</h3><ul><li>最完美最常用的解决方案</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box1::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
  <span class="token comment">/* ::after伪类元素默认是行内元素，不会独占一行，设置为块元素才可以撑开父元素 */</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-外边距重叠" tabindex="-1"><a class="header-anchor" href="#三-外边距重叠" aria-hidden="true">#</a> （三）外边距重叠</h2><h3 id="_1-成因-1" tabindex="-1"><a class="header-anchor" href="#_1-成因-1" aria-hidden="true">#</a> 1. 成因</h3><ul><li>相邻元素在垂直方向上的边距会折叠</li><li>不等时取较大者</li></ul><h3 id="_2-before-伪类解决外边距重叠" tabindex="-1"><a class="header-anchor" href="#_2-before-伪类解决外边距重叠" aria-hidden="true">#</a> 2. ::before 伪类解决外边距重叠</h3><ul><li>思路：让两个元素样式上不相邻</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.box1</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #bfa<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box1::before</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token comment">/* table布局无内容时不占空间，同时结构上可以将两个元素隔开 */</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.box2</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四-clearfix-同时解决高度塌陷和外边距重叠" tabindex="-1"><a class="header-anchor" href="#四-clearfix-同时解决高度塌陷和外边距重叠" aria-hidden="true">#</a> （四）clearfix 同时解决高度塌陷和外边距重叠</h2><ul><li>为需要清除浮动影响的元素添加 <code>clearfix</code> 类即可</li><li>常用方法，推荐</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.clearfix::before,
.clearfix::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27);function b(m,g){const s=e("ExternalLinkIcon");return l(),p("div",null,[u,r,n("ul",null,[d,k,n("li",null,[n("a",v,[a("https://www.bilibili.com/video/BV1XJ411X7Ud?p=64"),c(s)])])]),h])}const _=t(o,[["render",b],["__file","02.html.vue"]]);export{_ as default};
