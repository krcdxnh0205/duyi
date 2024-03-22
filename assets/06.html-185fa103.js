const s=JSON.parse('{"key":"v-487b74a3","path":"/notes/React18/06.html","title":"六、内联样式和样式表","lang":"zh-CN","frontmatter":{"title":"六、内联样式和样式表","copyright":false,"date":"2022-12-11T00:00:00.000Z","category":["笔记","React18"],"tag":["李立超"]},"headers":[{"level":2,"title":"（一） src/index.js","slug":"一-src-index-js","link":"#一-src-index-js","children":[]},{"level":2,"title":"（二） src/index.css","slug":"二-src-index-css","link":"#二-src-index-css","children":[]},{"level":2,"title":"（三） src/App.js","slug":"三-src-app-js","link":"#三-src-app-js","children":[]},{"level":2,"title":"（四） src/App.css","slug":"四-src-app-css","link":"#四-src-app-css","children":[]}],"git":{"createdTime":1671288564000,"updatedTime":1689575865000,"contributors":[{"name":"郁子IKUKO","email":"1147998314@qq.com","commits":2}]},"readingTime":{"minutes":0.64,"words":191},"filePathRelative":"notes/React18/06.md","localizedDate":"2022年12月11日","excerpt":"<h2> （一） <code>src/index.js</code></h2>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">import</span> React <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"react\\"</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> ReactDOM <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"react-dom/client\\"</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> App <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"./App\\"</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token comment\\">// 类重名有可能样式冲突</span>\\n<span class=\\"token keyword\\">import</span> <span class=\\"token string\\">\\"./index.css\\"</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">const</span> root <span class=\\"token operator\\">=</span> ReactDOM<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">createRoot</span><span class=\\"token punctuation\\">(</span>document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getElementById</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"root\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\nroot<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">render</span><span class=\\"token punctuation\\">(</span>\\n  <span class=\\"token operator\\">&lt;</span>React<span class=\\"token punctuation\\">.</span>StrictMode<span class=\\"token operator\\">&gt;</span>\\n    <span class=\\"token operator\\">&lt;</span>App <span class=\\"token operator\\">/</span><span class=\\"token operator\\">&gt;</span>\\n  <span class=\\"token operator\\">&lt;</span><span class=\\"token operator\\">/</span>React<span class=\\"token punctuation\\">.</span>StrictMode<span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{s as data};
