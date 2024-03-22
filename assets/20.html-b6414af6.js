const s=JSON.parse('{"key":"v-afea512a","path":"/notes/React18/20.html","title":"二十、@reduxjs/toolkit","lang":"zh-CN","frontmatter":{"title":"二十、@reduxjs/toolkit","copyright":false,"date":"2022-12-17T00:00:00.000Z","category":["笔记","React18"],"tag":["Redux","RTK","李立超"]},"headers":[{"level":2,"title":"（一） 使用 RTK 创建 store","slug":"一-使用-rtk-创建-store","link":"#一-使用-rtk-创建-store","children":[{"level":3,"title":"1. src/index.js","slug":"_1-src-index-js","link":"#_1-src-index-js","children":[]},{"level":3,"title":"2. src/App.jsx","slug":"_2-src-app-jsx","link":"#_2-src-app-jsx","children":[]},{"level":3,"title":"3. src/store/index.js","slug":"_3-src-store-index-js","link":"#_3-src-store-index-js","children":[]}]},{"level":2,"title":"（二） 完成 RTK 代码","slug":"二-完成-rtk-代码","link":"#二-完成-rtk-代码","children":[{"level":3,"title":"1. src/index.js","slug":"_1-src-index-js-1","link":"#_1-src-index-js-1","children":[]},{"level":3,"title":"2. src/App.jsx","slug":"_2-src-app-jsx-1","link":"#_2-src-app-jsx-1","children":[]},{"level":3,"title":"3. src/store/index.js","slug":"_3-src-store-index-js-1","link":"#_3-src-store-index-js-1","children":[]}]},{"level":2,"title":"（三） 拆分 RTK 代码","slug":"三-拆分-rtk-代码","link":"#三-拆分-rtk-代码","children":[{"level":3,"title":"1. src/App.jsx","slug":"_1-src-app-jsx","link":"#_1-src-app-jsx","children":[]},{"level":3,"title":"2. src/store/index.js","slug":"_2-src-store-index-js","link":"#_2-src-store-index-js","children":[]},{"level":3,"title":"3. src/store/schoolSlice.js","slug":"_3-src-store-schoolslice-js","link":"#_3-src-store-schoolslice-js","children":[]},{"level":3,"title":"4. src/store/studentSlice.js","slug":"_4-src-store-studentslice-js","link":"#_4-src-store-studentslice-js","children":[]}]}],"git":{"createdTime":1671288564000,"updatedTime":1689575865000,"contributors":[{"name":"郁子IKUKO","email":"1147998314@qq.com","commits":2}]},"readingTime":{"minutes":2.8,"words":840},"filePathRelative":"notes/React18/20.md","localizedDate":"2022年12月17日","excerpt":"<h2> （一） 使用 RTK 创建 store</h2>\\n<h3> 1. <code>src/index.js</code></h3>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token keyword\\">import</span> ReactDOM <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"react-dom/client\\"</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token keyword\\">import</span> App <span class=\\"token keyword\\">from</span> <span class=\\"token string\\">\\"./App\\"</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">const</span> root <span class=\\"token operator\\">=</span> ReactDOM<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">createRoot</span><span class=\\"token punctuation\\">(</span>document<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">getElementById</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"root\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\nroot<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">render</span><span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">&lt;</span>App <span class=\\"token operator\\">/</span><span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{s as data};
