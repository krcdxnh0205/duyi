import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,e}from"./app-1ca76096.js";const t={},p=e(`<h2 id="一-global-styles" tabindex="-1"><a class="header-anchor" href="#一-global-styles" aria-hidden="true">#</a> （一）Global Styles</h2><h3 id="_1-styles-globals-css" tabindex="-1"><a class="header-anchor" href="#_1-styles-globals-css" aria-hidden="true">#</a> 1.<code>styles/globals.css</code></h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">html,
body</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">a</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> inherit<span class="token punctuation">;</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">*</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">h2</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-pages-app-js" tabindex="-1"><a class="header-anchor" href="#_2-pages-app-js" aria-hidden="true">#</a> 2.<code>pages/_app.js</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&quot;../styles/globals.css&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> Component<span class="token punctuation">,</span> pageProps <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>pageProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> MyApp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-pages-about-js" tabindex="-1"><a class="header-anchor" href="#_3-pages-about-js" aria-hidden="true">#</a> 3.<code>pages/about.js</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">About</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>About Page<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> About<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-pages-contact-js" tabindex="-1"><a class="header-anchor" href="#_4-pages-contact-js" aria-hidden="true">#</a> 4.<code>pages/contact.js</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Contact</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>h2<span class="token operator">&gt;</span>Contact Page<span class="token operator">&lt;</span><span class="token operator">/</span>h2<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Contact<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二-component-level-styles" tabindex="-1"><a class="header-anchor" href="#二-component-level-styles" aria-hidden="true">#</a> （二）Component Level Styles</h2><h3 id="_1-styles-about-module-css" tabindex="-1"><a class="header-anchor" href="#_1-styles-about-module-css" aria-hidden="true">#</a> 1.<code>styles/About.module.css</code></h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.highlight</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-styles-contact-module-css" tabindex="-1"><a class="header-anchor" href="#_2-styles-contact-module-css" aria-hidden="true">#</a> 2.<code>styles/Contact.module.css</code></h3><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">.highlight</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-pages-about-js-1" tabindex="-1"><a class="header-anchor" href="#_3-pages-about-js-1" aria-hidden="true">#</a> 3.<code>pages/about.js</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">&quot;../styles/About.module.css&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">About</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>highlight<span class="token punctuation">}</span><span class="token operator">&gt;</span>About Page<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> About<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-pages-contact-js-1" tabindex="-1"><a class="header-anchor" href="#_4-pages-contact-js-1" aria-hidden="true">#</a> 4.<code>pages/contact.js</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">&quot;../styles/Contact.module.css&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Contact</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>highlight<span class="token punctuation">}</span><span class="token operator">&gt;</span>Contact Page<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Contact<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-sass-support" tabindex="-1"><a class="header-anchor" href="#三-sass-support" aria-hidden="true">#</a> （三）Sass Support</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> sass
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-styles-colors-scss" tabindex="-1"><a class="header-anchor" href="#_1-styles-colors-scss" aria-hidden="true">#</a> 1.<code>styles/_colors.scss</code></h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token property"><span class="token variable">$orange</span></span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
<span class="token property"><span class="token variable">$purple</span></span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-styles-about-module-scss" tabindex="-1"><a class="header-anchor" href="#_2-styles-about-module-scss" aria-hidden="true">#</a> 2.<code>styles/About.module.scss</code></h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">&quot;colors&quot;</span><span class="token punctuation">;</span>

<span class="token selector">.highlightscss </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$orange</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-styles-contact-module-scss" tabindex="-1"><a class="header-anchor" href="#_3-styles-contact-module-scss" aria-hidden="true">#</a> 3.<code>styles/Contact.module.scss</code></h3><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">&quot;colors&quot;</span><span class="token punctuation">;</span>

<span class="token selector">.highlightscss </span><span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token variable">$purple</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-pages-about-js" tabindex="-1"><a class="header-anchor" href="#_4-pages-about-js" aria-hidden="true">#</a> 4.<code>pages/about.js</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">&quot;../styles/About.module.scss&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">About</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>highlightscss<span class="token punctuation">}</span><span class="token operator">&gt;</span>About Page<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> About<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-pages-contact-js" tabindex="-1"><a class="header-anchor" href="#_5-pages-contact-js" aria-hidden="true">#</a> 5.<code>pages/contact.js</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">&quot;../styles/Contact.module.scss&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Contact</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>highlightscss<span class="token punctuation">}</span><span class="token operator">&gt;</span>Contact Page<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> Contact<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四-css-in-js" tabindex="-1"><a class="header-anchor" href="#四-css-in-js" aria-hidden="true">#</a> （四）CSS in JS</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> styled-components
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-pages-css-in-js-js" tabindex="-1"><a class="header-anchor" href="#_1-pages-css-in-js-js" aria-hidden="true">#</a> 1.<code>pages/css-in-js.js</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">&quot;styled-components&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> Title <span class="token operator">=</span> styled<span class="token punctuation">.</span>h1<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
  font-size: 50px;
  color: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> theme <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> theme<span class="token punctuation">.</span>colors<span class="token punctuation">.</span>primary<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;
</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token constant">CSSJS</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// return &lt;h2 style={{ color: &quot;red&quot; }}&gt;Hello World&lt;/h2&gt;;</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>Title<span class="token operator">&gt;</span>Styled Component<span class="token operator">&lt;</span><span class="token operator">/</span>Title<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token constant">CSSJS</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-pages-app-js-1" tabindex="-1"><a class="header-anchor" href="#_2-pages-app-js-1" aria-hidden="true">#</a> 2.<code>pages/_app.js</code></h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token string">&quot;../styles/globals.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ThemeProvider <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;styled-components&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> theme <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">colors</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">primary</span><span class="token operator">:</span> <span class="token string">&quot;#D8152A&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">MyApp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> Component<span class="token punctuation">,</span> pageProps <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>ThemeProvider theme<span class="token operator">=</span><span class="token punctuation">{</span>theme<span class="token punctuation">}</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Component <span class="token punctuation">{</span><span class="token operator">...</span>pageProps<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ThemeProvider<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> MyApp<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五-summary" tabindex="-1"><a class="header-anchor" href="#五-summary" aria-hidden="true">#</a> （五）Summary</h2><ul><li>Global：全局样式 <ul><li>在项目中，需要在 <code>pages/_app.js</code> 中导入全局样式文件</li></ul></li><li>Component Level：组件样式 <ul><li><code>NextJS</code> 支持使用 <code>[name].module.css</code> 命名的 CSS 模块</li></ul></li><li>SASS Support：SASS 样式 <ul><li>需要安装 <code>sass</code> 包</li></ul></li><li>CSS-in-JS Solutions：解决方案 <ul><li>使用内联样式和样式化组件，需要安装 <code>styled-components</code> 包</li></ul></li></ul>`,38),o=[p];function c(l,i){return n(),a("div",null,o)}const d=s(t,[["render",c],["__file","05.html.vue"]]);export{d as default};
