import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{o as l,c as e,e as i}from"./app-1240ea23.js";const t={},c=i('<ol><li>想让 Vue 工作，就必须创建一个 Vue 实例，且要传入一个 <strong>配置对象</strong></li><li>root 容器里的代码依然符合 html 规范，只不过混入了一些特殊的 Vue 语法：<strong>插值语法</strong><code>{{ XXX }}</code>、<strong>指令语法</strong></li><li>root 容器里的代码被称为【Vue 模板】</li><li>Vue 实例和容器是 <strong>一一对应</strong> 的</li><li>真实开发中只有一个 Vue 实例，并且会配合组件一起使用</li><li><code>{{xxx}}</code>中的 xxx 要写 <strong>JS 表达式</strong> ，且 xxx 可以自动读取到 data 中的所有属性</li><li>一旦 data 中的数据发生改变，那么模板（页面）中用到该数据的地方也会自动更新</li></ol><div class="hint-container danger"><p class="hint-container-title">注意区分：JS 表达式 和 JS 代码（语句）</p><ol><li>表达式</li></ol><p>一个表达式会产生一个值，可以放在任何一个需要值的地方</p><ul><li><code>a</code></li><li><code>a+b</code></li><li><code>demo(1)</code></li><li><code>x === y ? &#39;a&#39; : &#39;b&#39;</code></li></ul><ol start="2"><li>JS 语句</li></ol><p>不生成值，但是控制代码的走向</p><ul><li><code>if(){}</code></li><li><code>for(){}</code></li></ul></div>',2),r=[c];function n(d,s){return l(),e("div",null,r)}const u=o(t,[["render",n],["__file","02.html.vue"]]);export{u as default};
