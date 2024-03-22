const n=JSON.parse(`{"key":"v-35d5b2d4","path":"/notes/Vue3/08.html","title":"八、计算属性与监视","lang":"zh-CN","frontmatter":{"title":"八、计算属性与监视","copyright":false,"date":"2022-09-08T00:00:00.000Z","category":["笔记","Vue3"],"tag":["尚硅谷","张天禹"]},"headers":[{"level":2,"title":"（一）computed 函数","slug":"一-computed-函数","link":"#一-computed-函数","children":[]},{"level":2,"title":"（二）watch 函数","slug":"二-watch-函数","link":"#二-watch-函数","children":[{"level":3,"title":"1.两个小“坑”","slug":"_1-两个小-坑","link":"#_1-两个小-坑","children":[]},{"level":3,"title":"2.情况一：监视 ref 定义的响应式数据","slug":"_2-情况一-监视-ref-定义的响应式数据","link":"#_2-情况一-监视-ref-定义的响应式数据","children":[]},{"level":3,"title":"3.情况二：监视多个 ref 定义的响应式数据","slug":"_3-情况二-监视多个-ref-定义的响应式数据","link":"#_3-情况二-监视多个-ref-定义的响应式数据","children":[]},{"level":3,"title":"4.情况三：监视 reactive 定义的响应式数据","slug":"_4-情况三-监视-reactive-定义的响应式数据","link":"#_4-情况三-监视-reactive-定义的响应式数据","children":[]},{"level":3,"title":"5.情况四：监视 reactive 定义的响应式数据中的某个属性","slug":"_5-情况四-监视-reactive-定义的响应式数据中的某个属性","link":"#_5-情况四-监视-reactive-定义的响应式数据中的某个属性","children":[]},{"level":3,"title":"6.情况五：监视 reactive 定义的响应式数据中的某些属性","slug":"_6-情况五-监视-reactive-定义的响应式数据中的某些属性","link":"#_6-情况五-监视-reactive-定义的响应式数据中的某些属性","children":[]}]},{"level":2,"title":"（三）watchEffect 函数","slug":"三-watcheffect-函数","link":"#三-watcheffect-函数","children":[{"level":3,"title":"1.watch","slug":"_1-watch","link":"#_1-watch","children":[]},{"level":3,"title":"2.watchEffect","slug":"_2-watcheffect","link":"#_2-watcheffect","children":[]},{"level":3,"title":"3.watchEffect 有点类似 computed","slug":"_3-watcheffect-有点类似-computed","link":"#_3-watcheffect-有点类似-computed","children":[]}]}],"git":{"createdTime":1662620297000,"updatedTime":1689506602000,"contributors":[{"name":"郁子IKUKO","email":"1147998314@qq.com","commits":2}]},"readingTime":{"minutes":1.95,"words":584},"filePathRelative":"notes/Vue3/08.md","localizedDate":"2022年9月8日","excerpt":"<h2> （一）computed 函数</h2>\\n<ul>\\n<li>与 Vue2.x 中 computed 配置功能一致</li>\\n</ul>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">{</span> computed <span class=\\"token punctuation\\">}</span> <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">'vue'</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token function\\">setup</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n  <span class=\\"token operator\\">...</span>\\n\\n  <span class=\\"token comment\\">// 计算属性——简写【没有考虑计算属性被修改的情况】</span>\\n  person<span class=\\"token punctuation\\">.</span>fullName <span class=\\"token operator\\">=</span> <span class=\\"token function\\">computed</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=&gt;</span> <span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">return</span> person<span class=\\"token punctuation\\">.</span>firstName <span class=\\"token operator\\">+</span> <span class=\\"token string\\">\\"-\\"</span> <span class=\\"token operator\\">+</span> person<span class=\\"token punctuation\\">.</span>lastName<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token comment\\">// 计算属性——完整写法【考虑计算属性读和写的情况】</span>\\n  person<span class=\\"token punctuation\\">.</span>fullName <span class=\\"token operator\\">=</span> <span class=\\"token function\\">computed</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token function\\">get</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">return</span> person<span class=\\"token punctuation\\">.</span>firstName <span class=\\"token operator\\">+</span> <span class=\\"token string\\">\\"-\\"</span> <span class=\\"token operator\\">+</span> person<span class=\\"token punctuation\\">.</span>lastName<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token function\\">set</span><span class=\\"token punctuation\\">(</span>val<span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n      <span class=\\"token keyword\\">const</span> nameArr <span class=\\"token operator\\">=</span> val<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">split</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"-\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n      person<span class=\\"token punctuation\\">.</span>firstName <span class=\\"token operator\\">=</span> nameArr<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n      person<span class=\\"token punctuation\\">.</span>lastName <span class=\\"token operator\\">=</span> nameArr<span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n  <span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}`);export{n as data};
