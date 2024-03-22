import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,e as t}from"./app-1240ea23.js";const e={},l=t(`<h2 id="一-css-权重" tabindex="-1"><a class="header-anchor" href="#一-css-权重" aria-hidden="true">#</a> （一）CSS 权重</h2><table><thead><tr><th style="text-align:center;">CSS</th><th style="text-align:center;">权重</th></tr></thead><tbody><tr><td style="text-align:center;">!important</td><td style="text-align:center;">Infinity</td></tr><tr><td style="text-align:center;">行间样式</td><td style="text-align:center;">1000</td></tr><tr><td style="text-align:center;">id</td><td style="text-align:center;">100</td></tr><tr><td style="text-align:center;">class、属性、伪类</td><td style="text-align:center;">10</td></tr><tr><td style="text-align:center;">标签、伪元素</td><td style="text-align:center;">1</td></tr><tr><td style="text-align:center;">通配符 *</td><td style="text-align:center;">0</td></tr></tbody></table><ul><li>权重进制：256 进制</li><li>使用场景： <ul><li>多样式时计算权重</li><li>写在样式表同一行的，权重相加取大值</li></ul></li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>classDiv<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>idDiv<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>classP<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>idP<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 100 1 */</span>
<span class="token selector">#idDiv p</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> <span class="token comment">/* 展示 */</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 10 10 */</span>
<span class="token selector">.classDiv .classP</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二-块级格式化上下文-bfc-block-formatting-context" tabindex="-1"><a class="header-anchor" href="#二-块级格式化上下文-bfc-block-formatting-context" aria-hidden="true">#</a> （二）块级格式化上下文 BFC（Block Formatting Context）</h2><ul><li>作用：通过特定手段改变某个盒子内部的渲染规则</li></ul><h4 id="_1-两个-bug" tabindex="-1"><a class="header-anchor" href="#_1-两个-bug" aria-hidden="true">#</a> 1）两个 Bug</h4><ul><li>margin 塌陷【解决只需要添加 css】 <ul><li>正常：子元素调整 margin，父元素也随之移动</li><li>父元素开启 BFC 后：子元素调整 margin，父元素不移动</li></ul></li><li>magrin 合并【解决需添加 html 和 css =&gt; 一般不解决 =&gt; 修改 margin 值解决】 <ul><li>正常：相邻元素，水平方向区域不可共用，垂直方向 margin 重叠</li><li>任一/两者开启 BFC 后：两元素 margin 都会撑开</li></ul></li></ul><h4 id="_2-触发-bfc" tabindex="-1"><a class="header-anchor" href="#_2-触发-bfc" aria-hidden="true">#</a> 2）触发 BFC</h4><ul><li><code>position: absolute;</code></li><li><code>display: inline-block;</code></li><li><code>float: left/right;</code></li><li><code>overflow: hidden;</code></li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.clearfix::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-浮动-float" tabindex="-1"><a class="header-anchor" href="#三-浮动-float" aria-hidden="true">#</a> （三）浮动 float</h2><h3 id="_1-浮动元素产生了浮动流" tabindex="-1"><a class="header-anchor" href="#_1-浮动元素产生了浮动流" aria-hidden="true">#</a> 1.浮动元素产生了浮动流</h3><ul><li>所有产生了浮动流的元素，块级元素看不到他们 <ul><li>所以相邻块级元素会覆盖他们，形成层叠关系</li></ul></li><li>产生了 BFC 的元素、文本类属性（带 inline 属性）的元素、文本都能看到浮动元素 <ul><li>相邻元素不会覆盖，没有层叠关系</li></ul></li></ul><h3 id="_2-不定高度父元素包裹浮动元素" tabindex="-1"><a class="header-anchor" href="#_2-不定高度父元素包裹浮动元素" aria-hidden="true">#</a> 2.不定高度父元素包裹浮动元素</h3><ul><li>浮动元素只影响在其之后出生的元素，所以只需要在父元素最后一个浮动元素之后添加一个无样式占位元素，并使用 <code>clear: both;</code> 清除浮动效果，则父元素会被该元素撑开，实现包裹效果</li><li><code>clear: both;</code> 必须在块级元素中才会生效</li><li>一般写在父元素的伪元素中：<code>::after</code></li><li>设置了 <code>position: absolute;</code> 和 <code>float: left/right;</code> 的元素会从内部转变为行级块元素<code>inline-block</code>，其宽高由当前包裹着的子元素整体宽高决定</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>wrapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- 无端增加无用的占位元素，不符合语义化，应该用伪元素 --&gt;</span>
  <span class="token comment">&lt;!-- &lt;p&gt;&lt;/p&gt; --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.wrapper</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.content</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
  <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">p</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 0px solid black<span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.wrapper:after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四-文本溢出——打点展示" tabindex="-1"><a class="header-anchor" href="#四-文本溢出——打点展示" aria-hidden="true">#</a> （四）文本溢出——打点展示</h2><h3 id="_1-单行文本" tabindex="-1"><a class="header-anchor" href="#_1-单行文本" aria-hidden="true">#</a> 1.单行文本</h3><ul><li>使文本失去换行功能：<code>white-space: nowrap;</code></li><li>隐藏容器溢出部分：<code>overflow: hidden;</code></li><li>文本溢出打点展示：<code>text-overflow: ellipsis;</code></li></ul><h3 id="_2-多行文本" tabindex="-1"><a class="header-anchor" href="#_2-多行文本" aria-hidden="true">#</a> 2.多行文本</h3><ul><li>CSS3</li></ul><h2 id="五-图片链接优化展示" tabindex="-1"><a class="header-anchor" href="#五-图片链接优化展示" aria-hidden="true">#</a> （五）图片链接优化展示</h2><h3 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景" aria-hidden="true">#</a> 1.背景</h3><ul><li>浏览器在客户端带宽低于某个值时，会自动禁用网站的 CSS、JS，此时网站仅有 HTML。</li><li>对于类似于网站 logo 功能，既需要在正常情况下展示带链接的 logo 图片，又需要在 CSS、JS 禁用时正常展示文本链接。</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>www.taobao.com<span class="token punctuation">&quot;</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_blank<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>淘宝网<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-解决方案一-text-indent" tabindex="-1"><a class="header-anchor" href="#_2-解决方案一-text-indent" aria-hidden="true">#</a> 2.解决方案一：<code>text-indent</code></h3><ul><li>a 标签内部正常写链接文本，logo 图片作为背景引入。</li><li>使用 text-indent 让文本溢出 a 标签容器，禁用换行，并隐藏容器溢出。</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">a</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span> no-repeat<span class="token punctuation">;</span>
  <span class="token property">text-indent</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-解决方案二-padding-top" tabindex="-1"><a class="header-anchor" href="#_3-解决方案二-padding-top" aria-hidden="true">#</a> 3.解决方案二：<code>padding-top</code></h3><ul><li>padding 区域可以渲染背景颜色和背景图片。</li><li>通过加大 padding（容器高度置 0）将文本挤出 a 标签容器，再隐藏容器溢出。</li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">a</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding-top</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span> no-repeat<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六-元素嵌套" tabindex="-1"><a class="header-anchor" href="#六-元素嵌套" aria-hidden="true">#</a> （六）元素嵌套</h2><ul><li>行级元素只能嵌套行级元素</li><li>块级元素可以嵌套任意元素</li></ul><div class="hint-container danger"><p class="hint-container-title">警告</p><p>p 标签不能嵌套 div 元素，否则 p 标签会被 div 标签截断，渲染为 p-div-p</p><p>a 标签不能嵌套 a 标签</p></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- 渲染为 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七-img-标签间隙" tabindex="-1"><a class="header-anchor" href="#七-img-标签间隙" aria-hidden="true">#</a> （七）img 标签间隙</h2><ul><li>img 标签是文本类元素（inline-block），具有文本的一切属性</li><li>html 的裸文本中如果字符间有空格/换行符，则渲染后文本字符间默认保留一个字符距离</li><li>当 img 标签前后有空格/换行符时，渲染后的图片前后会默认保留一个字符的空白距离 <ul><li>解决：img 标签不换行</li></ul></li></ul><h2 id="八-文本对齐" tabindex="-1"><a class="header-anchor" href="#八-文本对齐" aria-hidden="true">#</a> （八）文本对齐</h2><ul><li>inline-block 元素（无内容的 span 和 img 标签），如果其后方有文本，则两者底部对齐</li><li>如果 span 内部有文本，其后方也有文本，则外部文本相对于 span 内部文本底部对齐</li><li>调整一行中文本的对齐线：<code>vertical-align</code></li></ul><h2 id="九-样式重置" tabindex="-1"><a class="header-anchor" href="#九-样式重置" aria-hidden="true">#</a> （九）样式重置</h2><h3 id="_1-字体行高" tabindex="-1"><a class="header-anchor" href="#_1-字体行高" aria-hidden="true">#</a> 1.字体行高</h3><ul><li>微软雅黑行高约为 1.32</li><li>宋体行高约为 1.41</li><li><code>line-height: normal;</code> 的行高实际值与浏览器以及当前元素字体大小有关 <ul><li><code>渲染后的行高 = 设置的行高值 * 字体大小</code></li></ul></li><li>父元素的行高可被继承，如果是数值就直接继承，否则继承父元素计算后的行高（<code>设置的行高值 * 字体大小</code>）</li><li>如果父元素行高设置为 em，则先计算父元素的行高值，再由子元素继承 <ul><li>如果父元素行高设置为数值，则子元素先继承，再根据子元素字体大小计算行高值</li></ul></li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">h3</span> <span class="token punctuation">{</span>
	<span class="token property">line-height</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>
	<span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>
	<span class="token property">line-height</span><span class="token punctuation">:</span> 200%<span class="token punctuation">;</span>
	<span class="token property">line-height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
	<span class="token property">line-height</span><span class="token punctuation">:</span> 5em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 渲染后的行高 = 设置的行高值 * 字体大小 */</span>
5em =&gt; 5 * 16 = 80
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-父级清除浮动" tabindex="-1"><a class="header-anchor" href="#_2-父级清除浮动" aria-hidden="true">#</a> 2.父级清除浮动</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.clearfix::after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-模块化引入样式表" tabindex="-1"><a class="header-anchor" href="#_3-模块化引入样式表" aria-hidden="true">#</a> 3.模块化引入样式表</h3><ul><li>@规则（at-rule）/ @语句 / CSS 指令 / CSS 规则 <ul><li>@charset：设置样式表的编码，必须写在 css 文件的第一行</li><li>@import：导入其他样式文件</li><li>@media：媒体查询</li><li>@font-face：自定义字体</li></ul></li></ul><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@charset</span> <span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">;</span></span>
<span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;reset.css&quot;</span><span class="token punctuation">;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十-base-标签" tabindex="-1"><a class="header-anchor" href="#十-base-标签" aria-hidden="true">#</a> （十）base 标签</h2><ul><li>定义文档中所有相对于该目录的链接根目录</li><li>页面中只能有一个 base 标签</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.baidu.com/1<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>base</span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>_blank<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>123.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>度娘<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十一-盒模型" tabindex="-1"><a class="header-anchor" href="#十一-盒模型" aria-hidden="true">#</a> （十一）盒模型</h2><h3 id="_1-标准盒模型" tabindex="-1"><a class="header-anchor" href="#_1-标准盒模型" aria-hidden="true">#</a> 1.标准盒模型</h3><ul><li>总宽度 = border（左右） + width + padding（左右）</li><li>总高度 = border（上下） + height + padding（上下）</li></ul><h3 id="_2-ie-盒模型-怪异盒模型" tabindex="-1"><a class="header-anchor" href="#_2-ie-盒模型-怪异盒模型" aria-hidden="true">#</a> 2.IE 盒模型（怪异盒模型）</h3><ul><li>总宽度 = width</li><li>总高度 = height</li></ul><h3 id="_3-触发-ie-盒模型" tabindex="-1"><a class="header-anchor" href="#_3-触发-ie-盒模型" aria-hidden="true">#</a> 3.触发 IE 盒模型</h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="十二-伪元素和伪类" tabindex="-1"><a class="header-anchor" href="#十二-伪元素和伪类" aria-hidden="true">#</a> （十二）伪元素和伪类</h2><h3 id="_1-伪元素" tabindex="-1"><a class="header-anchor" href="#_1-伪元素" aria-hidden="true">#</a> 1.伪元素</h3><ul><li><code>::after</code>、<code>::before</code><ul><li>CSS3 标准</li><li>不兼容 IE8</li></ul></li></ul><h3 id="_2-伪类" tabindex="-1"><a class="header-anchor" href="#_2-伪类" aria-hidden="true">#</a> 2.伪类</h3><ul><li><code>:after</code>、<code>:before</code><ul><li>兼容 IE8</li></ul></li></ul><h3 id="_3-伪类选择器" tabindex="-1"><a class="header-anchor" href="#_3-伪类选择器" aria-hidden="true">#</a> 3.伪类选择器</h3><ul><li><code>:hover</code>、<code>:active</code>、<code>:focus</code></li><li>选中某些元素的某种状态</li><li>a 元素四种伪类选择器 <ul><li><code>:link</code> ：超链接未访问时的状态</li><li><code>:visited</code> ：超链接访问过后的状态</li><li><code>:hover</code> ：鼠标悬停状态</li><li><code>:active</code> ：激活状态，鼠标按下的状态</li></ul></li><li>优先级按顺序 =&gt; 爱恨法则：love hate （l v h a）</li></ul><h3 id="_4-伪元素选择器" tabindex="-1"><a class="header-anchor" href="#_4-伪元素选择器" aria-hidden="true">#</a> 4.伪元素选择器</h3><ul><li><code>::after</code>、<code>::before</code></li></ul>`,70),p=[l];function i(c,o){return a(),s("div",null,p)}const r=n(e,[["render",i],["__file","02.html.vue"]]);export{r as default};
