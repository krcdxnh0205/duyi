import{_ as t,a as p,b as c,c as o,d as i}from"./JSES621-1f40ef69.js";import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as u,o as r,c as d,a as n,b as s,d as k,e as a}from"./app-1240ea23.js";const m="/assets/Promise相关面试题01-8e0c1d63.png",v={},h=a('<p><img src="'+m+'" alt=""></p><h2 id="一-promise-基础" tabindex="-1"><a class="header-anchor" href="#一-promise-基础" aria-hidden="true">#</a> （一）Promise 基础</h2><h3 id="_1-promise-规范" tabindex="-1"><a class="header-anchor" href="#_1-promise-规范" aria-hidden="true">#</a> 1.Promise 规范</h3>',3),b=n("li",null,"Promise 是一套专门处理异步场景的规范",-1),f=n("li",null,"能有效的避免回调地狱的产生，使异步代码更加清晰、简洁、统一",-1),_={href:"https://promisesaplus.com/",target:"_blank",rel:"noopener noreferrer"},y=a('<h3 id="_2-promise-a-规定" tabindex="-1"><a class="header-anchor" href="#_2-promise-a-规定" aria-hidden="true">#</a> 2.Promise A+ 规定</h3><h4 id="_1-所有的异步场景-都可以看作是一个异步任务" tabindex="-1"><a class="header-anchor" href="#_1-所有的异步场景-都可以看作是一个异步任务" aria-hidden="true">#</a> 1）所有的异步场景，都可以看作是一个异步任务</h4><ul><li>每个异步任务，在 JS 中应该表现为一个 <mark>对象</mark></li><li>该对象称为 <mark>Promise 对象</mark> ，也叫做任务对象</li></ul><p><img src="'+t+'" alt=""></p><h4 id="_2-每个任务对象-都应该有两个阶段、三个状态" tabindex="-1"><a class="header-anchor" href="#_2-每个任务对象-都应该有两个阶段、三个状态" aria-hidden="true">#</a> 2）每个任务对象，都应该有两个阶段、三个状态</h4><ul><li>任务总是从未决阶段变到已决阶段，无法逆行</li><li>任务总是从挂起状态变到完成或失败状态，无法逆行</li><li>任务一旦完成或失败，状态就固定下来，永远无法改变</li></ul><p><img src="'+p+'" alt=""></p><h4 id="_3-挂起-完成-称为-resolve-挂起-失败-称为-reject" tabindex="-1"><a class="header-anchor" href="#_3-挂起-完成-称为-resolve-挂起-失败-称为-reject" aria-hidden="true">#</a> 3）<code>挂起-&gt;完成</code> 称为 <code>resolve</code>；<code>挂起-&gt;失败</code> 称为 <code>reject</code></h4><ul><li>任务完成时，可能有一个相关数据</li><li>任务失败时，可能有一个失败原因</li></ul><p><img src="'+c+'" alt=""></p><h4 id="_4-可以针对任务进行后续处理" tabindex="-1"><a class="header-anchor" href="#_4-可以针对任务进行后续处理" aria-hidden="true">#</a> 4）可以针对任务进行后续处理</h4><ul><li>针对完成状态的后续处理称之为 onFulfilled</li><li>针对失败的后续处理称之为 onRejected</li></ul><p><img src="'+o+`" alt=""></p><h3 id="_3-promise-api" tabindex="-1"><a class="header-anchor" href="#_3-promise-api" aria-hidden="true">#</a> 3.Promise API</h3><ul><li>ES6 提供了一套 API，实现了 Promise A+规范</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 创建一个任务对象，该任务立即进入 pending 状态</span>
<span class="token keyword">const</span> pro <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// 任务的具体执行流程，该函数会立即被执行</span>
  <span class="token comment">// 调用 resolve(data)，可将任务变为 fulfilled 状态， data 为需要传递的相关数据</span>
  <span class="token comment">// 调用 reject(reason)，可将任务变为 rejected 状态，reason 为需要传递的失败原因</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

pro<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// onFulfilled 函数，当任务完成后，会自动运行该函数，data为任务完成的相关数据</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// onRejected 函数，当任务失败后，会自动运行该函数，reason为任务失败的相关原因</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二-promise-的链式调用" tabindex="-1"><a class="header-anchor" href="#二-promise-的链式调用" aria-hidden="true">#</a> （二）Promise 的链式调用</h2><h3 id="_1-catch-方法" tabindex="-1"><a class="header-anchor" href="#_1-catch-方法" aria-hidden="true">#</a> 1.catch 方法</h3><ul><li><code>.catch(onRejected)</code> = <code>.then(null, onRejected)</code></li></ul><h3 id="_2-链式调用" tabindex="-1"><a class="header-anchor" href="#_2-链式调用" aria-hidden="true">#</a> 2.链式调用</h3><p><img src="`+i+`" alt=""></p><h4 id="_1-then-方法必定会返回一个新的-promise" tabindex="-1"><a class="header-anchor" href="#_1-then-方法必定会返回一个新的-promise" aria-hidden="true">#</a> 1）then 方法必定会返回一个新的 Promise</h4><ul><li>可理解为 <code>后续处理也是一个任务</code></li></ul><h4 id="_2-新任务的状态取决于后续处理" tabindex="-1"><a class="header-anchor" href="#_2-新任务的状态取决于后续处理" aria-hidden="true">#</a> 2）新任务的状态取决于后续处理</h4><ul><li>若没有相关的后续处理，新任务的状态和前任务一致，数据为前任务的数据</li><li>若有后续处理但还未执行，新任务挂起</li><li>若后续处理执行了，则根据后续处理的情况确定新任务的状态 <ul><li>后续处理执行无错，新任务的状态为完成，数据为后续处理的返回值</li><li>后续处理执行有错，新任务的状态为失败，数据为异常对象</li><li>后续执行后返回的是一个任务对象，新任务的状态和数据与该任务对象一致</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 常见任务处理代码</span>

<span class="token comment">/*
 * 任务成功后，执行处理1，失败则执行处理2
 */</span>
pro<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>处理<span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>处理<span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*
 * 任务成功后，依次执行处理1、处理2
 */</span>
pro<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>处理<span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>处理<span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*
 * 任务成功后，依次执行处理1、处理2，若任务失败或前面的处理有错，执行处理3
 */</span>
pro<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>处理<span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>处理<span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>处理<span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-promise-的静态方法" tabindex="-1"><a class="header-anchor" href="#三-promise-的静态方法" aria-hidden="true">#</a> （三）Promise 的静态方法</h2><table><thead><tr><th>方法名</th><th>含义</th></tr></thead><tbody><tr><td>Promise.resolve(data)</td><td>直接返回一个完成状态的任务</td></tr><tr><td>Promise.reject(reason)</td><td>直接返回一个拒绝状态的任务</td></tr><tr><td>Promise.all(任务数组)</td><td>返回一个任务<br>任务数组全部成功则成功<br>任何一个失败则失败</td></tr><tr><td>Promise.any(任务数组)</td><td>返回一个任务<br>任务数组任一成功则成功<br>任务全部失败则失败</td></tr><tr><td>Promise.allSettled(任务数组)</td><td>返回一个任务<br>任务数组全部已决则成功<br>该任务不会失败</td></tr><tr><td>Promise.race(任务数组)</td><td>返回一个任务<br>任务数组任一已决则已决，状态和其一致</td></tr></tbody></table><h2 id="四-async-await" tabindex="-1"><a class="header-anchor" href="#四-async-await" aria-hidden="true">#</a> （四）async &amp; await</h2><h3 id="_1-消除回调" tabindex="-1"><a class="header-anchor" href="#_1-消除回调" aria-hidden="true">#</a> 1.消除回调</h3><ul><li>有了 Promise，异步任务就有了一种统一的处理方式</li><li>有了统一的处理方式，ES 官方就可以对其进一步优化</li><li>ES7 推出了两个关键字 <code>async</code> 和 <code>await</code></li><li>用于更加优雅的表达 Promise</li></ul><h3 id="_2-async" tabindex="-1"><a class="header-anchor" href="#_2-async" aria-hidden="true">#</a> 2.async</h3><ul><li>用于修饰函数</li><li>被修饰的函数一定返回 Promise</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 该函数的返回值是Promise完成后的数据</span>
<span class="token punctuation">}</span>

<span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Promise { 1 }</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 若返回的是Promise，则method得到的Promise状态和其一致</span>
<span class="token punctuation">}</span>

<span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Promise { 1 }</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 若执行过程报错，则任务是rejected</span>
<span class="token punctuation">}</span>

<span class="token function">method3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Promise { &lt;rejected&gt; Error(1) }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-await" tabindex="-1"><a class="header-anchor" href="#_3-await" aria-hidden="true">#</a> 3.await</h3><ul><li>表示等待某个 Promise 完成</li><li>==必须用于 <code>async</code> 函数中</li><li>后面一定跟着异步代码</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
<span class="token punctuation">}</span>

<span class="token comment">// 上面的函数等同于</span>
<span class="token keyword">function</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>也可以等待其他数据</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 等同于 await Promise.resolve(1)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>如果需要针对失败的任务进行处理，可以使用 <code>try-catch</code> 语法</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这句代码将抛出异常</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;成功&quot;</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;失败&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出： 失败 123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41);function g(w,P){const e=u("ExternalLinkIcon");return r(),d("div",null,[h,n("ul",null,[b,f,n("li",null,[s("这套规范最早诞生于前端社区，规范名称为 "),n("a",_,[s("Promise A+"),k(e)])])]),y])}const S=l(v,[["render",g],["__file","07.html.vue"]]);export{S as default};
