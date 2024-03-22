import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,e as s}from"./app-1ca76096.js";const i="/assets/配置实例1解析-8a1bc67b.png",c="/assets/host文件位置-b440f06c.png",d="/assets/未配置高可用集群可能出现的问题-77124b0a.png",l="/assets/高可用-52a0f9c8.png",t="/assets/Nginx原理-7c094cac.png",o="/assets/worker工作机制-1de5b237.png",r="/assets/连接数占用-e6f0fba4.png",p={},u=s(`<h2 id="一-反向代理实例一" tabindex="-1"><a class="header-anchor" href="#一-反向代理实例一" aria-hidden="true">#</a> （一）反向代理实例一</h2><h3 id="_1-实现效果" tabindex="-1"><a class="header-anchor" href="#_1-实现效果" aria-hidden="true">#</a> 1. 实现效果</h3><ul><li>打开浏览器，输入地址 <code>www.123.com</code></li><li>跳转到 <code>Linux</code> 系统的 <code>Tomcat</code> 主页面</li></ul><h3 id="_2-准备工作" tabindex="-1"><a class="header-anchor" href="#_2-准备工作" aria-hidden="true">#</a> 2. 准备工作</h3><ul><li>在 <code>Linux</code> 系统安装 <code>Tomcat</code> ，使用默认端口 <code>8080</code><ul><li>将 <code>Tomcat</code> 安装文件放到 <code>Linux</code> 系统中，解压</li><li>进入 <code>Tomcat</code> 的 <code>bin</code> 目录中， <code>./startup.sh</code> 启动 <code>Tomcat</code> 服务器</li></ul></li><li>对外开放访问的端口</li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>firewall-cmd --add-port=8080/tcp --permanent
firewall-cmd --reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查看已开放的端口号</li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code>firewall-cmd --list-all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>在 <code>Windows</code> 系统中通过浏览器访问 <code>Tomcat</code> 服务器</li></ul><h3 id="_3-访问过程的解析" tabindex="-1"><a class="header-anchor" href="#_3-访问过程的解析" aria-hidden="true">#</a> 3. 访问过程的解析</h3><p><img src="`+i+'" alt=""></p><h3 id="_4-具体配置" tabindex="-1"><a class="header-anchor" href="#_4-具体配置" aria-hidden="true">#</a> 4. 具体配置</h3><h4 id="_1-在-windows-系统的-hosts-文件中进行域名和-ip-对应关系的配置-【ip-地址-域名】" tabindex="-1"><a class="header-anchor" href="#_1-在-windows-系统的-hosts-文件中进行域名和-ip-对应关系的配置-【ip-地址-域名】" aria-hidden="true">#</a> 1）在 windows 系统的 hosts 文件中进行域名和 ip 对应关系的配置：【ip 地址 域名】</h4><p><img src="'+c+`" alt=""></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>192.168.17.129	www.123.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>配置完可以通过 <code>http://www.123.com:8080/</code> 访问到 <code>Tomcat</code> 首页</li></ul><h4 id="_2-在-nginx-配置文件中进行请求转发的配置-反向代理" tabindex="-1"><a class="header-anchor" href="#_2-在-nginx-配置文件中进行请求转发的配置-反向代理" aria-hidden="true">#</a> 2）在 Nginx 配置文件中进行请求转发的配置（反向代理）</h4><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">cd</span> /usr/local/nginx/
vi nginx.conf
i
server</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>		<span class="token number">80</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span>	192.168.17.129</span><span class="token punctuation">;</span> <span class="token comment">#修改此行</span>

  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span>		html</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span>	http://127.0.0.1:8080</span><span class="token punctuation">;</span> <span class="token comment">#增加此行</span>
    <span class="token directive"><span class="token keyword">index</span>		index.html index.htm</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
:wq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-最终测试" tabindex="-1"><a class="header-anchor" href="#_5-最终测试" aria-hidden="true">#</a> 5.最终测试</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /usr/local/nginx/
./nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置完可以通过 <code>http://www.123.com/</code> 访问到 <code>Tomcat</code> 首页</li></ul><h2 id="二-反向代理实例二" tabindex="-1"><a class="header-anchor" href="#二-反向代理实例二" aria-hidden="true">#</a> （二）反向代理实例二</h2><h3 id="_1-实现效果-1" tabindex="-1"><a class="header-anchor" href="#_1-实现效果-1" aria-hidden="true">#</a> 1.实现效果</h3><ul><li>使用 <code>Nginx</code> 反向代理，根据访问的路径跳转到不同端口的服务中 <ul><li><code>Nginx</code> 监听端口为 <code>9001</code></li><li>访问 <code>http://127.0.0.1:9001/edu/</code> 直接跳转到 <code>12.0.0.1:8080</code></li><li>访问 <code>http://127.0.0.1:9001/vod/</code> 直接跳转到 <code>12.0.0.1:8081</code></li></ul></li></ul><h3 id="_2-准备工作-1" tabindex="-1"><a class="header-anchor" href="#_2-准备工作-1" aria-hidden="true">#</a> 2.准备工作</h3><ul><li>准备两台 <code>Tomcat</code> 服务器，一台 <code>8080</code> ，一台 <code>8081</code></li><li>创建文件夹和两个测试页面，一个 <code>/edu/a.html</code> ，一个 <code>/vod/a.html</code></li></ul><h3 id="_3-具体配置" tabindex="-1"><a class="header-anchor" href="#_3-具体配置" aria-hidden="true">#</a> 3.具体配置</h3><ul><li>找到 <code>Nginx</code> 配置文件</li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">listen</span>		<span class="token number">9001</span></span><span class="token punctuation">;</span>
	<span class="token directive"><span class="token keyword">server_name</span>	192.168.17.129</span><span class="token punctuation">;</span>

    <span class="token comment"># ~表示开启路径正则表达式匹配形式</span>
    <span class="token directive"><span class="token keyword">location</span> ~ /edu/</span> <span class="token punctuation">{</span>
      <span class="token directive"><span class="token keyword">proxy_pass</span>	http://127.0.0.1:8080</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token directive"><span class="token keyword">location</span> ~ /vod/</span> <span class="token punctuation">{</span>
      <span class="token directive"><span class="token keyword">proxy_pass</span>	http://127.0.0.1:8081</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>开放对外访问的端口号： <code>9001</code> 、 <code>8080</code> 、 <code>8081</code></li></ul><h3 id="_4-最终测试" tabindex="-1"><a class="header-anchor" href="#_4-最终测试" aria-hidden="true">#</a> 4.最终测试</h3><ul><li>访问 <code>http://127.0.0.1:9001/edu/a.html</code> 显示页面内容</li><li>访问 <code>http://127.0.0.1:9001/vod/a.html</code> 显示页面内容</li></ul><h2 id="三-负载均衡" tabindex="-1"><a class="header-anchor" href="#三-负载均衡" aria-hidden="true">#</a> （三）负载均衡</h2><h3 id="_1-实现效果-2" tabindex="-1"><a class="header-anchor" href="#_1-实现效果-2" aria-hidden="true">#</a> 1.实现效果</h3><ul><li>浏览器地址栏输入地址： <code>http://192.168.17.129/edu/a.html</code> ，实现负载均衡效果，将多次请求平均到 <code>8080</code> 和 <code>8081</code> 端口中</li></ul><h3 id="_2-准备工作-2" tabindex="-1"><a class="header-anchor" href="#_2-准备工作-2" aria-hidden="true">#</a> 2.准备工作</h3><ul><li>准备两台 <code>Tomcat</code> 服务器，一台 <code>8080</code> ，一台 <code>8081</code></li><li>在两台 <code>Tomcat</code> 的 <code>webapps</code> 目录中，创建 <code>edu</code> 文件夹，在 <code>edu</code> 文件中创建页面 <code>a.html</code> ，用于测试</li></ul><h3 id="_3-具体配置-1" tabindex="-1"><a class="header-anchor" href="#_3-具体配置-1" aria-hidden="true">#</a> 3.具体配置</h3><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> myserver</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">server</span>	192.168.17.129:8080</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server</span>	192.168.17.129:8081</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token comment">#</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">listen</span>		<span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span>	 192.168.17.129</span><span class="token punctuation">;</span> <span class="token comment">#</span>

    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
      <span class="token directive"><span class="token keyword">proxy_pass</span>	http://myserver</span><span class="token punctuation">;</span> <span class="token comment">#</span>
      <span class="token directive"><span class="token keyword">root</span>	html</span><span class="token punctuation">;</span>
      <span class="token directive"><span class="token keyword">index</span>	index.html index.htm</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-最终测试-1" tabindex="-1"><a class="header-anchor" href="#_4-最终测试-1" aria-hidden="true">#</a> 4.最终测试</h3><ul><li>访问 <code>http://192.168.17.129/edu/a.html</code> ，每次刷新都随机返回 <code>8080/8081</code> 的页面内容</li></ul><h2 id="四-动静分离" tabindex="-1"><a class="header-anchor" href="#四-动静分离" aria-hidden="true">#</a> （四）动静分离</h2><h3 id="_1-实现效果-3" tabindex="-1"><a class="header-anchor" href="#_1-实现效果-3" aria-hidden="true">#</a> 1.实现效果</h3><ul><li>访问 <code>http://192.168.17.129/image/01.jpg</code> 、 <code>http://192.168.17.129/www/a.html</code> 可以请求到相应的静态资源</li></ul><h3 id="_2-准备工作-3" tabindex="-1"><a class="header-anchor" href="#_2-准备工作-3" aria-hidden="true">#</a> 2.准备工作</h3><ul><li>在 <code>Linux</code> 系统中准备静态资源，用于进行访问： <code>/data/image/01.jpg</code> 、 <code>/data/www/a.html</code></li></ul><h3 id="_3-具体配置-2" tabindex="-1"><a class="header-anchor" href="#_3-具体配置-2" aria-hidden="true">#</a> 3.具体配置</h3><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span>		<span class="token number">80</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span>	192.168.17.129</span><span class="token punctuation">;</span>

  <span class="token directive"><span class="token keyword">location</span> /www/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span>	/data/</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">index</span>	index.html index.htm</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token directive"><span class="token keyword">location</span> /image/</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span>		/data/</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">autoindex</span>	<span class="token boolean">on</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-最终测试-2" tabindex="-1"><a class="header-anchor" href="#_4-最终测试-2" aria-hidden="true">#</a> 4.最终测试</h3><ul><li>浏览器中输入地址 <code>http://192.168.17.129/image/01.jpg</code> ，因为配置了 <code>autoindex on</code> ，所以访问后会显示当前目录，点击图片后可以看到图片</li><li>浏览器中输入地址 <code>http://192.168.17.129/www/a.html</code> ，可以看到页面内容</li></ul><h2 id="五-高可用集群" tabindex="-1"><a class="header-anchor" href="#五-高可用集群" aria-hidden="true">#</a> （五）高可用集群</h2><h3 id="_1-高可用" tabindex="-1"><a class="header-anchor" href="#_1-高可用" aria-hidden="true">#</a> 1.高可用</h3><ul><li>问题： <code>Nginx</code> 服务器可能宕机</li></ul><p><img src="`+d+'" alt=""></p><ul><li>解决：再增加一台备份的 <code>Nginx</code> 服务器</li></ul><p><img src="'+l+`" alt=""></p><ul><li>需要两台 <code>Nginx</code> 服务器</li><li>需要 <code>keepalived</code> 插件库</li><li>需要虚拟 <code>IP</code> 地址</li></ul><h3 id="_2-准备工作-4" tabindex="-1"><a class="header-anchor" href="#_2-准备工作-4" aria-hidden="true">#</a> 2.准备工作</h3><ul><li>需要两台服务器： <code>192.168.17.129</code> 、 <code>192.168.17.131</code></li><li>在两台服务器中安装 <code>Nginx</code></li><li>在两台服务器中安装 <code>keepalived</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装</span>
yum <span class="token function">install</span> keepalived <span class="token parameter variable">-y</span>
<span class="token comment"># 查看</span>
<span class="token function">rpm</span> <span class="token parameter variable">-q</span> <span class="token parameter variable">-a</span> keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>安装后在 <code>etc</code> 里面生成目录 <code>keepalived</code> ，有文件 <code>keepalived.conf</code></li></ul><h3 id="_3-完成高可用配置-主从配置" tabindex="-1"><a class="header-anchor" href="#_3-完成高可用配置-主从配置" aria-hidden="true">#</a> 3.完成高可用配置（主从配置）</h3><h4 id="_1-修改-etc-keepalived-keepalived-conf-配置文件" tabindex="-1"><a class="header-anchor" href="#_1-修改-etc-keepalived-keepalived-conf-配置文件" aria-hidden="true">#</a> 1）修改 /etc/keepalived/keepalived.conf 配置文件</h4><ul><li>主服务器和备份服务器不同</li></ul><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">vrrp_instance</span> VI_1</span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">state</span> MASTER <span class="token comment"># 主服务器</span>
	instance ens33	<span class="token comment"># 网卡</span>
	virtual_router_id <span class="token number">51</span> <span class="token comment"># 主、备机的virtual_router_id必须相同</span>
	priority <span class="token number">100</span> <span class="token comment"># 主、备机取不同的优先级，主机值较大，备份机值较小</span>
	advert_int <span class="token number">1</span>
	authentication</span> <span class="token punctuation">{</span>
		auth_type PASS
		auth_pass 1111
	<span class="token punctuation">}</span>
	<span class="token directive"><span class="token keyword">virtual_ipaddress</span></span> <span class="token punctuation">{</span>
		192.168.17.50 <span class="token comment"># VRRP H虚拟地址</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">vrrp_instance</span> VI_1</span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">state</span> BACKUP <span class="token comment"># 备份服务器</span>
	instance ens33	<span class="token comment"># 网卡</span>
	virtual_router_id <span class="token number">51</span> <span class="token comment"># 主、备机的virtual_router_id必须相同</span>
	priority <span class="token number">90</span> <span class="token comment"># 主、备机取不同的优先级，主机值较大，备份机值较小</span>
	advert_int <span class="token number">1</span>
	authentication</span> <span class="token punctuation">{</span>
		auth_type PASS
		auth_pass 1111
	<span class="token punctuation">}</span>
	<span class="token directive"><span class="token keyword">virtual_ipaddress</span></span> <span class="token punctuation">{</span>
		192.168.17.50 <span class="token comment"># VRRP H虚拟地址</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-keepalived-检测-nginx-是否宕机的脚本" tabindex="-1"><a class="header-anchor" href="#_2-keepalived-检测-nginx-是否宕机的脚本" aria-hidden="true">#</a> 2）keepalived 检测 Nginx 是否宕机的脚本</h4><ul><li>本地创建 <code>nginx_check.sh</code></li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">A</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> <span class="token parameter variable">-C</span> nginx -no-header <span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">\`</span></span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$A</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    /usr/local/nginx/sbin/nginx
	<span class="token function">sleep</span> <span class="token number">2</span>
	<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> <span class="token parameter variable">-C</span> nginx --no-header <span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">\`</span></span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
		<span class="token function">killall</span> keepalived
	<span class="token keyword">fi</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>放到服务器 <code>/usr/local/src/</code> 目录下</li></ul><h4 id="_3-查找网卡" tabindex="-1"><a class="header-anchor" href="#_3-查找网卡" aria-hidden="true">#</a> 3）查找网卡</h4><ul><li><code>usr</code> 目录下输入 <code>ifconfig</code> ，第一个冒号前的就是</li></ul><h4 id="_4-启动服务器-nginx、129-服务器、131-服务器" tabindex="-1"><a class="header-anchor" href="#_4-启动服务器-nginx、129-服务器、131-服务器" aria-hidden="true">#</a> 4）启动服务器：Nginx、129 服务器、131 服务器</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 启动Nginx</span>
./nginx
<span class="token comment"># 启动keepalived</span>
systemctl start keepalived.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-最终测试-3" tabindex="-1"><a class="header-anchor" href="#_4-最终测试-3" aria-hidden="true">#</a> 4.最终测试</h3><ul><li>地址栏输入虚拟 IP： <code>192.168.17.50</code> ，可以看到 <code>Nginx</code> 启动页面，且在 <code>129</code> 服务器输入 <code>ip a</code> 可以看到 <code>ens33</code> 的进程</li><li>把主服务器 <code>Nginx</code> 和 <code>keepalived</code> 停止，再访问 <code>192.168.17.50</code> ，可以看到 <code>Nginx</code> 启动页面，且在 <code>131</code> 服务器输入 <code>ip a</code> 可以看到 <code>ens33</code> 的进程</li></ul><h2 id="六-高可用配置文件详解" tabindex="-1"><a class="header-anchor" href="#六-高可用配置文件详解" aria-hidden="true">#</a> （六）高可用配置文件详解</h2><h3 id="_1-global-defs-全局配置" tabindex="-1"><a class="header-anchor" href="#_1-global-defs-全局配置" aria-hidden="true">#</a> 1.global_defs：全局配置</h3><ul><li><code>​router_id LVS_DEVELBACK</code> ：配置访问到哪一台主机</li><li>在主机服务器中查看</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /etc/hosts
<span class="token number">127.0</span>.0.1	LVS_DEVEL <span class="token comment"># 新增</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-vrrp-script-chk-http-port-脚本配置" tabindex="-1"><a class="header-anchor" href="#_2-vrrp-script-chk-http-port-脚本配置" aria-hidden="true">#</a> 2.vrrp_script chk_http_port：脚本配置</h3><ul><li><code>interval 1</code> ：配置脚本执行的间隔</li><li><code>weight -20</code> ：配置当前服务器的权重</li></ul><h3 id="_3-vrrp-instance-vi-1-虚拟-ip-配置" tabindex="-1"><a class="header-anchor" href="#_3-vrrp-instance-vi-1-虚拟-ip-配置" aria-hidden="true">#</a> 3.vrrp_instance VI_1 ：虚拟 IP 配置</h3><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">vrrp_instance</span> VI_1</span> <span class="token punctuation">{</span>
	<span class="token directive"><span class="token keyword">state</span> BACKUP <span class="token comment"># 备份服务器</span>
	instance ens33	<span class="token comment"># 网卡</span>
	virtual_router_id <span class="token number">51</span> <span class="token comment"># 主、备机的virtual_router_id必须相同</span>
	priority <span class="token number">90</span> <span class="token comment"># 主、备机取不同的优先级，主机值较大，备份机值较小</span>
	advert_int <span class="token number">1</span>
	authentication</span> <span class="token punctuation">{</span>
		auth_type PASS
		auth_pass 1111
	<span class="token punctuation">}</span>
	<span class="token directive"><span class="token keyword">virtual_ipaddress</span></span> <span class="token punctuation">{</span>
		192.168.17.50 <span class="token comment"># VRRP H虚拟地址</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="七-nginx-原理" tabindex="-1"><a class="header-anchor" href="#七-nginx-原理" aria-hidden="true">#</a> （七）Nginx 原理</h2><p><img src="`+t+'" alt=""></p><h3 id="_1-争抢机制" tabindex="-1"><a class="header-anchor" href="#_1-争抢机制" aria-hidden="true">#</a> 1. 争抢机制</h3><p><img src="'+o+'" alt=""></p><h3 id="_2-一个-master-和多个-worker-的好处" tabindex="-1"><a class="header-anchor" href="#_2-一个-master-和多个-worker-的好处" aria-hidden="true">#</a> 2. 一个 master 和多个 worker 的好处</h3><ul><li>可以使用 <code>nginx -s reload</code> 热部署，利用 <code>Nginx</code> 进行热部署操作</li><li>每个 <code>worker</code> 是独立的进程，如果有其中一个 <code>worker</code> 出现问题，由于其他 <code>worker</code> 是独立的，所以可以继续进行争抢，实现请求过程，不会造成服务中断</li></ul><h3 id="_3-设置多少个-worker-合适" tabindex="-1"><a class="header-anchor" href="#_3-设置多少个-worker-合适" aria-hidden="true">#</a> 3. 设置多少个 worker 合适</h3><ul><li><code>Nginx</code> 同 <code>Redis</code> 类似，都采用了 <code>I/O</code> 多路复用机制， <code>Windows</code> 中不采用此机制，所以一般部署到 <code>Linux</code> 中能把性能发挥到最大</li><li><code>worker</code> 数和服务器的 <code>cpu</code> 数量相等是最合适的</li></ul><h3 id="_4-worker-connection-连接数" tabindex="-1"><a class="header-anchor" href="#_4-worker-connection-连接数" aria-hidden="true">#</a> 4. worker_connection 连接数</h3><h4 id="_1-发送一个请求-占用了-worker-的几个连接数" tabindex="-1"><a class="header-anchor" href="#_1-发送一个请求-占用了-worker-的几个连接数" aria-hidden="true">#</a> 1）发送一个请求，占用了 worker 的几个连接数？</h4><ul><li>2 个或 4 个</li><li>访问静态资源时占用 2 个，如果需要使用 <code>Tomcat</code> 访问服务器资源则需要 4 个</li></ul><p><img src="'+r+'" alt=""></p><h4 id="_2-nginx-有一个-master-有四个-worker-processes-worker-每个-work-支持最大的连接数-worker-connections-是-1024-支持的最大并发数是多少" tabindex="-1"><a class="header-anchor" href="#_2-nginx-有一个-master-有四个-worker-processes-worker-每个-work-支持最大的连接数-worker-connections-是-1024-支持的最大并发数是多少" aria-hidden="true">#</a> 2）Nginx 有一个 master，有四个（worker_processes）worker，每个 work 支持最大的连接数（worker_connections）是 1024，支持的最大并发数是多少？</h4><blockquote><p>worker 最大支持的连接数：4*1024</p><p>(4*1024)/2</p><p>(4*1024)/4</p></blockquote><ul><li>普通的静态访问最大并发数是： <code>worker_connections * worker_processes / 2</code></li><li><code>HTTP</code> 作为反向代理的最大并发数是： <code>worker_connections * worker_processes / 4</code></li></ul>',98),v=[u];function h(k,m){return a(),e("div",null,v)}const g=n(p,[["render",h],["__file","05.html.vue"]]);export{g as default};
