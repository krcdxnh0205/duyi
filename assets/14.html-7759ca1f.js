import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as a,e as l}from"./app-1ca76096.js";const t={},r=l('<p>Vue 会监测 data 中 <strong>所有层次</strong> 的数据</p><h2 id="一-监测对象中的数据" tabindex="-1"><a class="header-anchor" href="#一-监测对象中的数据" aria-hidden="true">#</a> （一）监测对象中的数据</h2><ul><li>通过 setter 实现监视，且要在 new Vue 时就传入要监测的数据</li><li>对象中后追加的属性，Vue 默认不做响应式处理</li><li>如需给后添加的属性做响应式，请使用如下 API： <ul><li><code>Vue.set(target, propertyName / index, value)</code></li><li><code>vm.$set(target, propertyName / index, value)</code></li></ul></li></ul><h2 id="二-监测数组中的数据" tabindex="-1"><a class="header-anchor" href="#二-监测数组中的数据" aria-hidden="true">#</a> （二）监测数组中的数据</h2><ul><li>通过包裹数组更新元素的方法实现，本质就是做了两件事： <ul><li>调用原生对应的方法对数组进行更新</li><li>重新解析模板，进而更新页面</li></ul></li></ul><h2 id="三-特别注意" tabindex="-1"><a class="header-anchor" href="#三-特别注意" aria-hidden="true">#</a> （三）特别注意</h2><ul><li>在 Vue 修改数组中的某个元素一定要用如下方法：</li></ul><h3 id="_1-使用这些-api" tabindex="-1"><a class="header-anchor" href="#_1-使用这些-api" aria-hidden="true">#</a> 1.使用这些 API</h3><ul><li>push()</li><li>pop()</li><li>shift()</li><li>unshift()</li><li>splice()</li><li>sort()</li><li>reverse()</li></ul><h3 id="_2-对于不能修改原数组的-api" tabindex="-1"><a class="header-anchor" href="#_2-对于不能修改原数组的-api" aria-hidden="true">#</a> 2.对于不能修改原数组的 API</h3><ul><li>如：filter()</li><li>Vue 监测不到数组数据的更改</li><li>这类 API 则直接替换原数组即可</li></ul><div class="hint-container danger"><p class="hint-container-title">重要</p><p><code>Vue.set()</code> 或 <code>vm.$set()</code> 不能给 <strong>vm</strong> 或 <strong>vm 的根数据对象</strong> 添加属性</p></div><h2 id="四-数据劫持" tabindex="-1"><a class="header-anchor" href="#四-数据劫持" aria-hidden="true">#</a> （四）数据劫持</h2><ul><li>Vue 中把 data 数据处理成 <code>vm._data</code> 的过程</li><li>数据劫持和数据代理都离不开 <code>Object.defineProperty()</code></li></ul><div class="hint-container danger"><p class="hint-container-title">重要</p><p><strong>数据劫持才是响应式的根基</strong></p></div>',15),d=[r];function n(o,s){return i(),a("div",null,d)}const u=e(t,[["render",n],["__file","14.html.vue"]]);export{u as default};
