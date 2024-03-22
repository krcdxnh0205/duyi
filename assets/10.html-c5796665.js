import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as c,c as p,a as n,b as s,d as e,e as t}from"./app-1240ea23.js";const l="/assets/Vuepress渲染数学公式01-7e07fc1a.png",d="/assets/Vuepress渲染数学公式02-0818a110.png",r="/assets/Vuepress渲染数学公式03-ecfea2d3.png",u={},k=n("h2",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),s(" 前言")],-1),m=n("code",null,"VuePress",-1),v={href:"https://yuziikuko.gitee.io/",target:"_blank",rel:"noopener noreferrer"},b=t('<p><code>VuePress</code> 是一个以 <code>Markdown</code> 为中心的静态网站生成器，但是无法渲染 <code>LaTeX</code> 语法的数学公式。</p><p>经过和 <code>New Bing</code> 的一番交流后成功渲染，解决方案是使用 <code>VuePress</code> 支持的 <code>Markdown</code> 插件扩展搭配 <code>markdown-it-katex</code> 插件，在此记录一下。</p><p><img src="'+l+'" alt=""></p><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>',4),h={href:"https://www.bilibili.com/read/cv12474593",target:"_blank",rel:"noopener noreferrer"},f=t(`<h2 id="一-安装-markdown-it-katex" tabindex="-1"><a class="header-anchor" href="#一-安装-markdown-it-katex" aria-hidden="true">#</a> （一）安装 <code>markdown-it-katex</code></h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># npm</span>
<span class="token function">npm</span> i markdown-it-katex

<span class="token comment"># yarn</span>
<span class="token function">yarn</span> <span class="token function">add</span> markdown-it-katex
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二-引入样式" tabindex="-1"><a class="header-anchor" href="#二-引入样式" aria-hidden="true">#</a> （二）引入样式</h2><p>在 <code>.vuepress/styles</code> 目录下新建文件 <code>index.scss</code> ：</p><div class="language-scss line-numbers-mode" data-ext="scss"><pre class="language-scss"><code><span class="token keyword">@import</span> <span class="token string">&quot;https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">@import</span> <span class="token string">&quot;https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-修改配置文件-vuepress-config-js" tabindex="-1"><a class="header-anchor" href="#三-修改配置文件-vuepress-config-js" aria-hidden="true">#</a> （三）修改配置文件 <code>.vuepress/config.js</code></h2><p>这里有个小坑，按照参考链接的写法会报错 <code>Error: Dynamic require of &quot;markdown-it-katex&quot; is not supported</code> ：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token generic-function"><span class="token function">defineUserConfig</span><span class="token generic class-name"><span class="token operator">&lt;</span>DefaultThemeOptions<span class="token punctuation">,</span> ViteBundlerOptions<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ,,,</span>
  <span class="token comment">// other configs</span>

  <span class="token function-variable function">extendsMarkdown</span><span class="token operator">:</span> <span class="token punctuation">(</span>md<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    md<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">&quot;markdown-it-katex&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    md<span class="token punctuation">.</span>linkify<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">{</span> fuzzyEmail<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// other configs</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候再次请出我们的 <code>New Bing</code> 🤓</p><p><img src="`+d+`" alt=""></p><p>最终配置文件如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>
<span class="token keyword">import</span> MarkdownItKatex <span class="token keyword">from</span> <span class="token string">&quot;markdown-it-katex&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token function-variable function">extendsMarkdown</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">md</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    md<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>MarkdownItKatex<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四-markdown-文件中使用" tabindex="-1"><a class="header-anchor" href="#四-markdown-文件中使用" aria-hidden="true">#</a> （四）Markdown 文件中使用</h2><p>完成上述步骤就可以在 <code>Markdown</code> 文件中，使用 <code>LaTeX</code> 语法编写数学公式啦~</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">##</span> 公式</span>

『$\\left ( -1 \\right )^{S}\\times 1.M\\times 2^{P-x}$』

<span class="token list punctuation">-</span> S 为数的符号位，0 表示正数，1 表示负数
<span class="token list punctuation">-</span> M 为尾数，IEEE 754 标准规定尾数最高有效位为 1【即：应为“1.XXX...XX”的格式】
<span class="token list punctuation">-</span> P 为阶码
<span class="token list punctuation">-</span> x 为偏移值，单精度时为 127，双精度时为 1023
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启项目，渲染成功！🎉</p><p><img src="`+r+'" alt=""></p>',17);function g(w,x){const a=i("ExternalLinkIcon");return c(),p("div",null,[k,n("p",null,[s("最近在使用 "),m,s(" 搭建 "),n("a",v,[s("个人主页"),e(a)]),s("，遇到数学公式无法渲染的问题。")]),b,n("ul",null,[n("li",null,[n("a",h,[s("bilibili：账号已注销"),e(a)])])]),f])}const q=o(u,[["render",g],["__file","10.html.vue"]]);export{q as default};
