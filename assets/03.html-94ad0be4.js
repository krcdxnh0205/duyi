import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,e as i}from"./app-1ca76096.js";const s={},d=i(`<h2 id="一-使用-nginx-操作命令的前提条件" tabindex="-1"><a class="header-anchor" href="#一-使用-nginx-操作命令的前提条件" aria-hidden="true">#</a> （一）使用 Nginx 操作命令的前提条件</h2><ul><li>必须进入 <code>Nginx</code> 的目录： <code>/usr/local/nginx/sbin</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/nginx/sbin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="二-查看-nginx-版本号" tabindex="-1"><a class="header-anchor" href="#二-查看-nginx-版本号" aria-hidden="true">#</a> （二）查看 Nginx 版本号</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./nginx <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="三-启动-nginx" tabindex="-1"><a class="header-anchor" href="#三-启动-nginx" aria-hidden="true">#</a> （三）启动 Nginx</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="四-关闭-nginx" tabindex="-1"><a class="header-anchor" href="#四-关闭-nginx" aria-hidden="true">#</a> （四）关闭 Nginx</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./nginx <span class="token parameter variable">-s</span> stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="五-重新加载-nginx" tabindex="-1"><a class="header-anchor" href="#五-重新加载-nginx" aria-hidden="true">#</a> （五）重新加载 Nginx</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./nginx <span class="token parameter variable">-s</span> reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11),r=[d];function l(c,h){return a(),n("div",null,r)}const u=e(s,[["render",l],["__file","03.html.vue"]]);export{u as default};
