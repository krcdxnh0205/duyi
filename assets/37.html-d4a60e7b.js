const n=JSON.parse('{"key":"v-2462de8e","path":"/notes/Vue2/37.html","title":"三十七、slot插槽","lang":"zh-CN","frontmatter":{"title":"三十七、slot插槽","copyright":false,"date":"2022-09-07T00:00:00.000Z","category":["笔记","Vue2"],"tag":["尚硅谷","张天禹"]},"headers":[{"level":2,"title":"（一）作用","slug":"一-作用","link":"#一-作用","children":[]},{"level":2,"title":"（二）分类","slug":"二-分类","link":"#二-分类","children":[]},{"level":2,"title":"（三）使用方式","slug":"三-使用方式","link":"#三-使用方式","children":[{"level":3,"title":"1.默认插槽","slug":"_1-默认插槽","link":"#_1-默认插槽","children":[]},{"level":3,"title":"2.具名插槽","slug":"_2-具名插槽","link":"#_2-具名插槽","children":[]},{"level":3,"title":"3.作用域插槽","slug":"_3-作用域插槽","link":"#_3-作用域插槽","children":[]}]}],"git":{"createdTime":1662541545000,"updatedTime":1689506602000,"contributors":[{"name":"郁子IKUKO","email":"1147998314@qq.com","commits":2}]},"readingTime":{"minutes":1.22,"words":367},"filePathRelative":"notes/Vue2/37.md","localizedDate":"2022年9月7日","excerpt":"<h2> （一）作用</h2>\\n<ul>\\n<li>让父组件可以向子组件指定位置插入 html 结构</li>\\n<li>也是一种组件间通信的方式</li>\\n<li>适用于 <strong>父组件 ===&gt; 子组件</strong></li>\\n</ul>\\n<h2> （二）分类</h2>\\n<ul>\\n<li>默认插槽</li>\\n<li>具名插槽</li>\\n<li>作用域插槽</li>\\n</ul>\\n<h2> （三）使用方式</h2>\\n<h3> 1.默认插槽</h3>\\n<h4> 1）父组件</h4>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>Category</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>html结构1<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>Category</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};
