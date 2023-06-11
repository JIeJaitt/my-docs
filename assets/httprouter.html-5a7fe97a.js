import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as p}from"./app-80a6dbc6.js";const t={},e=p(`<p>httprouter 是一个快速、灵活的 HTTP 路由器，它使用 Trie 树来实现高效的路由匹配。如果你想深入了解 httprouter 的实现原理，可以阅读其源代码。</p><p>在阅读源代码之前，需要先了解 httprouter 中的一些重要概念：</p><ul><li>Route：表示一个路由规则，包括 HTTP 方法、路径模式和处理器函数。</li><li>Node：表示 Trie 树中的一个节点，包括路径片段和路由规则。</li><li>Params：表示从 URL 中提取的参数，包括名称和值。</li></ul><p>httprouter 的核心在于 Router 类型，它是一个 Trie 树的根节点，包含多个子节点，每个子节点都代表一条路由规则。Router 类型实现了 http.Handler 接口，因此可以将其作为参数传递给 http.ListenAndServe 函数，从而处理传入的 HTTP 请求。</p><p>下面是 Router 类型的部分源代码：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> Router <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// 子节点</span>
    roots <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">*</span>node
    <span class="token comment">// 路由规则</span>
    handlers <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>HandlerFunc
    <span class="token comment">// 404 处理器</span>
    NotFoundHandler HandlerFunc
    <span class="token comment">// 405 处理器</span>
    MethodNotAllowedHandler HandlerFunc
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>Router <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>Router<span class="token punctuation">{</span>
        roots<span class="token punctuation">:</span>    <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">*</span>node<span class="token punctuation">)</span><span class="token punctuation">,</span>
        handlers<span class="token punctuation">:</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>HandlerFunc<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>Router<span class="token punctuation">)</span> <span class="token function">ServeHTTP</span><span class="token punctuation">(</span>w http<span class="token punctuation">.</span>ResponseWriter<span class="token punctuation">,</span> req <span class="token operator">*</span>http<span class="token punctuation">.</span>Request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 根据请求方法和路径查找匹配的路由规则</span>
    path <span class="token operator">:=</span> req<span class="token punctuation">.</span>URL<span class="token punctuation">.</span>Path
    <span class="token keyword">if</span> root <span class="token operator">:=</span> r<span class="token punctuation">.</span>roots<span class="token punctuation">[</span>req<span class="token punctuation">.</span>Method<span class="token punctuation">]</span><span class="token punctuation">;</span> root <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> handler<span class="token punctuation">,</span> ps<span class="token punctuation">,</span> <span class="token boolean">_</span> <span class="token operator">:=</span> root<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span> handler <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token function">handler</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> req<span class="token punctuation">,</span> ps<span class="token punctuation">)</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 处理 404 错误</span>
    <span class="token keyword">if</span> r<span class="token punctuation">.</span>NotFoundHandler <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        r<span class="token punctuation">.</span><span class="token function">NotFoundHandler</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> req<span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        http<span class="token punctuation">.</span><span class="token function">NotFound</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> req<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 ServeHTTP 方法中，Router 类型首先根据请求方法和路径查找匹配的路由规则。如果找到了匹配的规则，就执行相应的处理器函数。否则，如果设置了 NotFoundHandler 处理器，就执行该处理器；否则，就返回 HTTP 404 错误。</p><p>Router 类型中的 roots 字段是一个 map，用于存储每个 HTTP 方法的根节点。每个根节点都是一个 node 类型，代表 Trie 树的一个分支。handlers 字段是一个 map，用于存储路由规则和对应的处理器函数。</p><p>node 类型是 Trie 树中的一个节点，它包含一个路径片段和多个子节点。路径片段可以是一个静态字符串，也可以是一个参数，如 :name。每个子节点也是一个 node 类型，代表 Trie 树的下一层。</p><p>下面是 node 类型的部分源代码：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">type</span> node <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    <span class="token comment">// 路径片段</span>
    path      <span class="token builtin">string</span>
    <span class="token comment">// 子节点</span>
    children  <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">*</span>node
    <span class="token comment">// 路由规则</span>
    handlers  <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>HandlerFunc
    <span class="token comment">// 参数节点</span>
    wildcard <span class="token operator">*</span>node
    <span class="token comment">// 是否精确匹配</span>
    isLeaf    <span class="token builtin">bool</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>n <span class="token operator">*</span>node<span class="token punctuation">)</span> <span class="token function">insert</span><span class="token punctuation">(</span>path <span class="token builtin">string</span><span class="token punctuation">,</span> handlers <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>HandlerFunc<span class="token punctuation">,</span> height <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        n<span class="token punctuation">.</span>handlers <span class="token operator">=</span> handlers
        n<span class="token punctuation">.</span>isLeaf <span class="token operator">=</span> <span class="token boolean">true</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 查找路径片段是否已存在</span>
    pathSeg <span class="token operator">:=</span> <span class="token function">getPathSegment</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
    child <span class="token operator">:=</span> n<span class="token punctuation">.</span><span class="token function">matchChild</span><span class="token punctuation">(</span>pathSeg<span class="token punctuation">)</span>
    <span class="token keyword">if</span> child <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
        <span class="token comment">// 路径片段已存在，继续递归插入</span>
        child<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>path<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>pathSeg<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">,</span> handlers<span class="token punctuation">,</span> height<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 路径片段不存在，创建新的子节点</span>
    child <span class="token operator">=</span> <span class="token operator">&amp;</span>node<span class="token punctuation">{</span>path<span class="token punctuation">:</span> pathSeg<span class="token punctuation">}</span>
    child<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>path<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>pathSeg<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">,</span> handlers<span class="token punctuation">,</span> height<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>
    n<span class="token punctuation">.</span>children <span class="token operator">=</span> <span class="token function">insertChild</span><span class="token punctuation">(</span>n<span class="token punctuation">.</span>children<span class="token punctuation">,</span> child<span class="token punctuation">)</span>

    <span class="token comment">// 处理参数节点</span>
    <span class="token keyword">if</span> pathSeg<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;:&#39;</span> <span class="token operator">||</span> pathSeg<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">&#39;*&#39;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> n<span class="token punctuation">.</span>wildcard <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            n<span class="token punctuation">.</span>wildcard <span class="token operator">=</span> child
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">panic</span><span class="token punctuation">(</span>fmt<span class="token punctuation">.</span><span class="token function">Sprintf</span><span class="token punctuation">(</span><span class="token string">&quot;a parameter with name %s already exists&quot;</span><span class="token punctuation">,</span> pathSeg<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 insert 方法中，node 类型首先判断路径片段是否为空。如果为空，说明已经到达了叶子节点，将路由规则和处理器函数存储在该节点中。否则，就查找路径片段是否已存在。如果已存在，就继续递归插入；否则，就创建新的子节点，并将其插入到子节点列表中。</p><p>如果路径片段是一个参数，如 :name 或 *path，则将该节点保存为参数节点。在执行匹配时，如果当前节点没有匹配成功，就可以尝试从参数节点中查找匹配的子节点。</p><p>httprouter 的路由匹配算法主要是在 Trie 树中查找匹配的节点。对于每个请求，httprouter 首先从根节点开始遍历 Trie 树，按照路径片段依次查找匹配的节点。如果找到了匹配的节点，就将该节点对应的处理器函数执行，并将从 URL 中提取的参数传递给处理器函数。</p><p>下面是 node 类型中的 getValue 方法的部分源代码：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>n <span class="token operator">*</span>node<span class="token punctuation">)</span> <span class="token function">getValue</span><span class="token punctuation">(</span>path <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>HandlerFunc<span class="token punctuation">,</span> Params<span class="token punctuation">,</span> <span class="token builtin">bool</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 记录路径参数</span>
    <span class="token keyword">var</span> params Params

    <span class="token comment">// 从根节点开始遍历 Trie 树</span>
    node <span class="token operator">:=</span> n
    <span class="token keyword">for</span> <span class="token function">len</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token punctuation">{</span>
        <span class="token comment">// 查找路径片段是否已存在</span>
        pathSeg <span class="token operator">:=</span> <span class="token function">getPathSegment</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
        child <span class="token operator">:=</span> node<span class="token punctuation">.</span><span class="token function">matchChild</span><span class="token punctuation">(</span>pathSeg<span class="token punctuation">)</span>
        <span class="token keyword">if</span> child <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
            <span class="token comment">// 没有找到匹配的节点</span>
            <span class="token keyword">if</span> node<span class="token punctuation">.</span>wildcard <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
                <span class="token comment">// 尝试从参数节点中查找匹配的子节点</span>
                node <span class="token operator">=</span> node<span class="token punctuation">.</span>wildcard
                params <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> Param<span class="token punctuation">{</span>Key<span class="token punctuation">:</span> node<span class="token punctuation">.</span>path<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">,</span> Value<span class="token punctuation">:</span> path<span class="token punctuation">}</span><span class="token punctuation">)</span>
                path <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">false</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 找到了匹配的节点</span>
            node <span class="token operator">=</span> child
            path <span class="token operator">=</span> path<span class="token punctuation">[</span><span class="token function">len</span><span class="token punctuation">(</span>pathSeg<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
            <span class="token keyword">if</span> node<span class="token punctuation">.</span>isLeaf <span class="token punctuation">{</span>
                <span class="token comment">// 匹配成功，返回处理器函数和路径参数</span>
                <span class="token keyword">return</span> node<span class="token punctuation">.</span>handlers<span class="token punctuation">[</span>pathSeg<span class="token punctuation">]</span><span class="token punctuation">,</span> params<span class="token punctuation">,</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 没有找到匹配的节点</span>
    <span class="token keyword">return</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">,</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 getValue 方法中，node 类型首先记录路径参数，然后从根节点开始遍历 Trie 树。对于每个路径片段，都尝试从子节点列表中查找匹配的节点。如果找到了匹配的节点，就继续向下遍历；否则，就尝试从参数节点中查找匹配的子节点。如果最终找到了叶子节点，就返回该节点对应的处理器函数和路径参数。</p><p>总之，httprouter 的实现原理并不复杂，它主要是通过 Trie 树来实现快速的路由匹配。如果你想深入了解 httprouter 的实现细节，可以阅读其源代码，特别是 Router 和 node 类型的相关代码。</p>`,18),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","httprouter.html.vue"]]);export{k as default};
