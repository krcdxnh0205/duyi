import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,e}from"./app-1240ea23.js";const t={},l=e(`<h2 id="一-toref" tabindex="-1"><a class="header-anchor" href="#一-toref" aria-hidden="true">#</a> （一）toRef</h2><h3 id="_1-作用" tabindex="-1"><a class="header-anchor" href="#_1-作用" aria-hidden="true">#</a> 1.作用</h3><ul><li>创建一个 ref 对象</li><li>其 value 值指向另一个对象中的某个属性</li></ul><h3 id="_2-语法" tabindex="-1"><a class="header-anchor" href="#_2-语法" aria-hidden="true">#</a> 2.语法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> name <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-应用" tabindex="-1"><a class="header-anchor" href="#_3-应用" aria-hidden="true">#</a> 3.应用</h3><ul><li>要将响应式对象中的某个属性单独提供给外部使用时，且不丢失响应式</li></ul><h3 id="_4-扩展" tabindex="-1"><a class="header-anchor" href="#_4-扩展" aria-hidden="true">#</a> 4.扩展</h3><ul><li><code>toRefs</code> 与 <code>toRef</code> 功能一致，但可以批量创建多个 ref 对象</li></ul><h4 id="_1-语法" tabindex="-1"><a class="header-anchor" href="#_1-语法" aria-hidden="true">#</a> 1）语法</h4><ul><li><code>toRefs(person)</code></li></ul><h4 id="_2-应用" tabindex="-1"><a class="header-anchor" href="#_2-应用" aria-hidden="true">#</a> 2）应用</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span><span class="token function">toRefs</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="二-shallowreactive-与-shallowref" tabindex="-1"><a class="header-anchor" href="#二-shallowreactive-与-shallowref" aria-hidden="true">#</a> （二）shallowReactive 与 shallowRef</h2><h3 id="_1-shallowreactive" tabindex="-1"><a class="header-anchor" href="#_1-shallowreactive" aria-hidden="true">#</a> 1.shallowReactive</h3><ul><li>只处理对象最外层属性的响应式（ <strong>浅响应式</strong> ）</li></ul><h3 id="_2-shallowref" tabindex="-1"><a class="header-anchor" href="#_2-shallowref" aria-hidden="true">#</a> 2.shallowRef</h3><ul><li>只处理基本数据类型的响应式，不进行对象的响应式处理</li></ul><h3 id="_3-使用" tabindex="-1"><a class="header-anchor" href="#_3-使用" aria-hidden="true">#</a> 3.使用</h3><ul><li>如果有一个对象数据，结构比较深，但变化时只是外层属性变化 <ul><li>使用 <code>shallowReactive</code></li></ul></li><li>如果有一个对象数据，后续功能不会修改该对象中的属性，而是生成新的对象来替换 <ul><li>使用 <code>shallowRef</code></li></ul></li></ul><h2 id="三-readonly-与-shallowreadonly" tabindex="-1"><a class="header-anchor" href="#三-readonly-与-shallowreadonly" aria-hidden="true">#</a> （三）readonly 与 shallowReadonly</h2><h3 id="_1-readonly" tabindex="-1"><a class="header-anchor" href="#_1-readonly" aria-hidden="true">#</a> 1.readonly</h3><ul><li>让一个响应式数据变为只读的（深只读）</li></ul><h3 id="_2-shallowreadonly" tabindex="-1"><a class="header-anchor" href="#_2-shallowreadonly" aria-hidden="true">#</a> 2.shallowReadonly</h3><ul><li>让一个响应式数据变为只读的（浅只读）</li></ul><h3 id="_3-使用-1" tabindex="-1"><a class="header-anchor" href="#_3-使用-1" aria-hidden="true">#</a> 3.使用</h3><ul><li>不希望数据被修改时</li><li>如：引入外部文件暴露的数据，只想做展示不希望被修改时</li></ul><h2 id="四-toraw-与-markraw" tabindex="-1"><a class="header-anchor" href="#四-toraw-与-markraw" aria-hidden="true">#</a> （四）toRaw 与 markRaw</h2><h3 id="_1-toraw" tabindex="-1"><a class="header-anchor" href="#_1-toraw" aria-hidden="true">#</a> 1.toRaw</h3><h4 id="_1-作用-1" tabindex="-1"><a class="header-anchor" href="#_1-作用-1" aria-hidden="true">#</a> 1）作用</h4><ul><li>将一个由 <code>reactive</code> 生成的 <strong>响应式对象</strong> 转为 <strong>普通对象</strong></li><li><code>ref</code> 无效</li></ul><h4 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用" aria-hidden="true">#</a> 2）使用</h4><ul><li>用于读取响应式对象对应的普通对象</li><li>对这个普通对象的所有操作不会引起页面更新</li></ul><h3 id="_2-markraw" tabindex="-1"><a class="header-anchor" href="#_2-markraw" aria-hidden="true">#</a> 2.markRaw</h3><h4 id="_1-作用-2" tabindex="-1"><a class="header-anchor" href="#_1-作用-2" aria-hidden="true">#</a> 1）作用</h4><ul><li>标记一个对象，使其永远不会再成为响应式对象</li></ul><h4 id="_2-使用-1" tabindex="-1"><a class="header-anchor" href="#_2-使用-1" aria-hidden="true">#</a> 2）使用</h4><ul><li>有些值不应被设置为响应式的，例如复杂的第三方类库等 <ul><li>如：日期转换库、生成随机数</li></ul></li><li>当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能</li></ul><h2 id="五-customref" tabindex="-1"><a class="header-anchor" href="#五-customref" aria-hidden="true">#</a> （五）customRef</h2><h3 id="_1-作用-3" tabindex="-1"><a class="header-anchor" href="#_1-作用-3" aria-hidden="true">#</a> 1.作用</h3><ul><li>创建一个自定义的 ref，并对其依赖项跟踪和更新触发进行显示控制</li></ul><h3 id="_2-应用-1" tabindex="-1"><a class="header-anchor" href="#_2-应用-1" aria-hidden="true">#</a> 2.应用</h3><ul><li>实现防抖效果</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>keyWord<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>{{ keyWord }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> customRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">;</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;App&quot;</span><span class="token punctuation">,</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 使用Vue提供的ref</span>
      <span class="token comment">// let keyWord = ref(&quot;Hello&quot;);</span>

      <span class="token comment">// 自定义一个ref——myRef</span>
      <span class="token keyword">function</span> <span class="token function">myRef</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> timer<span class="token punctuation">;</span>
        <span class="token comment">// 通过customRef实现自定义</span>
        <span class="token keyword">return</span> <span class="token function">customRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">track<span class="token punctuation">,</span> trigger</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token comment">// 通知Vue追踪数据（return的数据）的变化</span>
              <span class="token function">track</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token keyword">return</span> value<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token comment">// 防抖效果</span>
              <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
              timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                value <span class="token operator">=</span> newValue<span class="token punctuation">;</span>
                <span class="token comment">// 通知Vue更新界面</span>
                <span class="token function">trigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
              <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// 使用自定义的ref</span>
      <span class="token keyword">let</span> keyWord <span class="token operator">=</span> <span class="token function">myRef</span><span class="token punctuation">(</span><span class="token string">&quot;Hello&quot;</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        keyWord<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六-响应式数据的判断" tabindex="-1"><a class="header-anchor" href="#六-响应式数据的判断" aria-hidden="true">#</a> （六）响应式数据的判断</h2><h3 id="_1-isref" tabindex="-1"><a class="header-anchor" href="#_1-isref" aria-hidden="true">#</a> 1.isRef</h3><ul><li>检查一个值是否为一个 <code>ref</code> 对象</li></ul><h3 id="_2-isreactive" tabindex="-1"><a class="header-anchor" href="#_2-isreactive" aria-hidden="true">#</a> 2.isReactive</h3><ul><li>检查一个对象是否是由 <code>reactive</code> 创建的响应式代理</li></ul><h3 id="_3-isreadonly" tabindex="-1"><a class="header-anchor" href="#_3-isreadonly" aria-hidden="true">#</a> 3.isReadonly</h3><ul><li>检查一个对象是否是由 <code>readonly</code> 创建的只读代理</li></ul><h3 id="_4-isproxy" tabindex="-1"><a class="header-anchor" href="#_4-isproxy" aria-hidden="true">#</a> 4.isProxy</h3><ul><li>检查一个对象是否是由 <code>reactive</code> 或者 <code>readonly</code> 方法创建的代理</li></ul>`,53),i=[l];function o(c,p){return n(),s("div",null,i)}const d=a(t,[["render",o],["__file","11.html.vue"]]);export{d as default};
