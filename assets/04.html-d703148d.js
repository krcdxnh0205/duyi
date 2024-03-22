import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as s,e as a}from"./app-1ca76096.js";const i={},c=a(`<h2 id="一-位置" tabindex="-1"><a class="header-anchor" href="#一-位置" aria-hidden="true">#</a> （一）位置</h2><ul><li><code>/usr/local/nginx/conf/nginx.conf</code></li><li>由三部分组成</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/nginx/
<span class="token function">ls</span>
<span class="token builtin class-name">cd</span> /conf
<span class="token function">vim</span> nginx.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二-第一部分-全局块" tabindex="-1"><a class="header-anchor" href="#二-第一部分-全局块" aria-hidden="true">#</a> （二）第一部分：全局块</h2><ul><li>从配置文件开始到 <code>events</code> 块之间的内容</li><li>主要会设置一些 <strong>影响 Nginx 服务器整体运行</strong> 的配置指令</li></ul><h3 id="_1-主要包括" tabindex="-1"><a class="header-anchor" href="#_1-主要包括" aria-hidden="true">#</a> 1.主要包括</h3><ul><li>配置运行 <code>Nginx</code> 服务器的用户（组）</li><li>允许生成的 <code>worker express</code> 数</li><li>进程 <code>PID</code> 存放路径</li><li>日志存放路径和类型</li><li>配置文件的引入等</li></ul><h3 id="_2-示例" tabindex="-1"><a class="header-anchor" href="#_2-示例" aria-hidden="true">#</a> 2.示例</h3><ul><li>这是 <code>Nginx</code> 服务器并发处理服务的关键配置</li><li><code>worker_processes</code> 值越大，可以支持的并发处理量也越多，但是会受到硬件、软件等设备的制约</li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">worker_processes</span> <span class="token number">1</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="三-第二部分-events-块" tabindex="-1"><a class="header-anchor" href="#三-第二部分-events-块" aria-hidden="true">#</a> （三）第二部分：events 块</h2><ul><li><code>events</code> 块涉及的指令主要 <strong>影响 Nginx 服务器与用户的网络连接</strong></li></ul><h3 id="_1-常用的设置" tabindex="-1"><a class="header-anchor" href="#_1-常用的设置" aria-hidden="true">#</a> 1.常用的设置</h3><ul><li>是否开启对多 <code>work process</code> 下的网络连接进行序列化</li><li>是否允许同时接收多个网络连接</li><li>选取哪种事件驱动模型来处理连接请求</li><li>每个 <code>work process</code> 可以同时支持的最大连接数等</li></ul><h3 id="_2-示例-1" tabindex="-1"><a class="header-anchor" href="#_2-示例-1" aria-hidden="true">#</a> 2.示例</h3><ul><li>这表示每个 <code>work process</code> 支持的最大连接数是 1024</li><li>这部分的配置对 <code>Nginx</code> 的性能影响较大，在实际中应该灵活配置</li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">worker_connections</span> <span class="token number">1024</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四-第三部分-http-块" tabindex="-1"><a class="header-anchor" href="#四-第三部分-http-块" aria-hidden="true">#</a> （四）第三部分：http 块</h2><ul><li>这是 <code>Nginx</code> 服务器配置中最频繁的部分</li><li><strong>代理、缓存和日志定义等绝大多数功能和第三方模块的配置</strong> 都在这里</li><li>需要注意的是： <code>http</code> 块也可以包括 <strong>http 全局块</strong> 和 <strong>server 块</strong></li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">include</span>			mime.types</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">default_type</span>	application/octet-stream</span><span class="token punctuation">;</span>

  <span class="token directive"><span class="token keyword">sendfile</span>		<span class="token boolean">on</span></span><span class="token punctuation">;</span>

  <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
      <span class="token directive"><span class="token keyword">listen</span>		<span class="token number">80</span></span><span class="token punctuation">;</span>
      <span class="token directive"><span class="token keyword">server_name</span>	localhost</span><span class="token punctuation">;</span>

      <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">root</span>	html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">index</span>	index.html index.htm</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token directive"><span class="token keyword">error_page</span>	<span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> /50x.html</span><span class="token punctuation">;</span>
      <span class="token directive"><span class="token keyword">location</span> = /50x.html</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">root</span>	html</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-http-全局块" tabindex="-1"><a class="header-anchor" href="#_1-http-全局块" aria-hidden="true">#</a> 1.http 全局块</h3><ul><li><code>http</code> 全局块配置的指令包括 <ul><li>文件引入</li><li><code>MIME-TYPE</code> 定义</li><li>日志自定义</li><li>连接超时时间</li><li>单连接请求数上限等</li></ul></li></ul><h3 id="_2-server-块" tabindex="-1"><a class="header-anchor" href="#_2-server-块" aria-hidden="true">#</a> 2.server 块</h3><ul><li>这和虚拟主机有密切关系，虚拟主机从用户角度看，和一台独立的硬件主机是完全一样的，该技术的产生是为了节省互联网服务器硬件成本</li><li>每个 <code>http</code> 块可以包括多个 <code>server</code> 块，而 <strong>每个 server 块就相当于一个虚拟主机</strong></li><li>每个 <code>server</code> 块也分为全局 <code>server</code> 块，以及可以同时包含多个 <code>location</code> 块</li></ul><h4 id="_1-全局-server-块" tabindex="-1"><a class="header-anchor" href="#_1-全局-server-块" aria-hidden="true">#</a> 1）全局 <code>server</code> 块</h4><ul><li>最常见的配置 <ul><li>本虚拟主机的 <strong>监听配置</strong></li><li>本虚拟主机的 <strong>名称或 IP 配置</strong></li></ul></li></ul><h4 id="_2-location-块" tabindex="-1"><a class="header-anchor" href="#_2-location-块" aria-hidden="true">#</a> 2）<code>location</code> 块</h4><ul><li>一个 <code>server</code> 块可以配置多个 <code>location</code> 块</li><li>这块的主要作用是基于 <code>Nginx</code> 服务器接收到的请求字符串（例如 <code>server_name/uri-string</code> ），对虚拟主机名称（也可以是 <code>IP</code> 别名）之外的字符串（例如 <code>/uri-string</code> ）进行匹配，对特定的请求进行处理</li><li>地址定向、数据缓存和应答控制等功能，还有许多第三方模块的配置也在这里进行</li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> [ = | ~ | ~* | ^~] uri</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>模式字符串</th><th>含义</th></tr></thead><tbody><tr><td><code>=</code></td><td>用于不含正则表达式的 <code>uri</code> 前<br>要求请求字符串与 <code>uri</code> 严格匹配<br>如果匹配成功，就停止继续向下搜索并立即处理该请求</td></tr><tr><td><code>~</code></td><td>用于表示 <code>uri</code> 包含正则表达式<br>区分大小写</td></tr><tr><td><code>~*</code></td><td>用于表示 <code>uri</code> 包含正则表达式<br>不区分大小写</td></tr><tr><td><code>^~</code></td><td>用于不含正则表达式的 <code>uri</code> 前<br>要求 <code>Nginx</code> 服务器找到标识 <code>uri</code> 和请求字符串匹配度最高的 <code>location</code> 后，立即使用此 <code>location</code> 处理请求<br>不再使用 <code>location</code> 块中的正则 <code>uri</code> 和请求字符串做匹配</td></tr></tbody></table><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果 <code>uri</code> 包含正则表达式，则必须要有 <code>~</code> 或者 <code>~*</code> 标识</p></div>`,31),d=[c];function l(t,o){return e(),s("div",null,d)}const u=n(i,[["render",l],["__file","04.html.vue"]]);export{u as default};
