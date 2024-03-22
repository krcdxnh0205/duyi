const e=JSON.parse('{"key":"v-7d2eb7bb","path":"/notes/Vue2/13.html","title":"十三、列表渲染-key的原理","lang":"zh-CN","frontmatter":{"title":"十三、列表渲染-key的原理","copyright":false,"date":"2022-09-06T00:00:00.000Z","category":["笔记","Vue2"],"tag":["尚硅谷","张天禹"]},"headers":[{"level":2,"title":"（一）虚拟 DOM 中 key 的作用","slug":"一-虚拟-dom-中-key-的作用","link":"#一-虚拟-dom-中-key-的作用","children":[]},{"level":2,"title":"（二）对比规则","slug":"二-对比规则","link":"#二-对比规则","children":[{"level":3,"title":"1.旧虚拟 DOM 中找到了与新虚拟 DOM 相同的 key","slug":"_1-旧虚拟-dom-中找到了与新虚拟-dom-相同的-key","link":"#_1-旧虚拟-dom-中找到了与新虚拟-dom-相同的-key","children":[]},{"level":3,"title":"2.旧虚拟 DOM 中未找到与新虚拟 DOM 相同的 key","slug":"_2-旧虚拟-dom-中未找到与新虚拟-dom-相同的-key","link":"#_2-旧虚拟-dom-中未找到与新虚拟-dom-相同的-key","children":[]}]},{"level":2,"title":"（三）用 index 作为 key 可能会引发的问题","slug":"三-用-index-作为-key-可能会引发的问题","link":"#三-用-index-作为-key-可能会引发的问题","children":[{"level":3,"title":"1.若对数据进行逆序添加、逆序删除等破坏顺序的操作","slug":"_1-若对数据进行逆序添加、逆序删除等破坏顺序的操作","link":"#_1-若对数据进行逆序添加、逆序删除等破坏顺序的操作","children":[]},{"level":3,"title":"2.如果结构中还包含输入类的 DOM","slug":"_2-如果结构中还包含输入类的-dom","link":"#_2-如果结构中还包含输入类的-dom","children":[]}]},{"level":2,"title":"（四）开发中如何选择 key","slug":"四-开发中如何选择-key","link":"#四-开发中如何选择-key","children":[]}],"git":{"createdTime":1662456995000,"updatedTime":1689506602000,"contributors":[{"name":"郁子IKUKO","email":"1147998314@qq.com","commits":3}]},"readingTime":{"minutes":1.25,"words":375},"filePathRelative":"notes/Vue2/13.md","localizedDate":"2022年9月6日","excerpt":"<h2> （一）虚拟 DOM 中 key 的作用</h2>\\n<ul>\\n<li>key 是虚拟 DOM 对象的标识</li>\\n<li>当数据发生变化时，Vue 会根据【新数据】生成【新的虚拟 DOM】</li>\\n<li>随后 Vue 进行【新虚拟 DOM】与【旧虚拟 DOM】的差异比较</li>\\n</ul>\\n<h2> （二）对比规则</h2>\\n<h3> 1.旧虚拟 DOM 中找到了与新虚拟 DOM 相同的 key</h3>\\n<ul>\\n<li>若虚拟 DOM 中内容没变，直接使用之前的真实 DOM</li>\\n<li>若虚拟 DOM 中内容改变，则生成新的真实 DOM，随后替换掉页面中之前的真实 DOM</li>\\n</ul>"}');export{e as data};