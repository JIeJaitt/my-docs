import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-361d9adb.js";const p={},e=t(`<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> dbops

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;database/sql&quot;</span>
    <span class="token boolean">_</span> <span class="token string">&quot;github.com/go-sql-driver/mysql&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">openConn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>sql<span class="token punctuation">.</span>DB <span class="token punctuation">{</span>
    dbConn<span class="token punctuation">,</span> err <span class="token operator">:=</span> sql<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;mysql&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root:12345678@tcp(localhost:3306)/stmsrv?charset=utf8&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果数据库都没连接起来, 那么服务端跑起来也没什么意义</span>
    <span class="token comment">// 在项目中, 不要轻易使用 panic</span>
    <span class="token comment">// panic 会中断整个项目, 并且抛出这个 panic</span>
    <span class="token comment">// 只有在确实无法正常完成业务逻辑的时候, 才使用 panic</span>
        <span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dbConn
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">AddUserCredential</span><span class="token punctuation">(</span>loginName <span class="token builtin">string</span><span class="token punctuation">,</span> pwd <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
    <span class="token comment">// openConn 的时候实际上并不会连接数据库</span>
    <span class="token comment">// 只有在 Prepare 的时候才会真正连接数据库</span>
    db <span class="token operator">:=</span> <span class="token function">openConn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">GetUserCredential</span><span class="token punctuation">(</span>loginName <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    db <span class="token operator">:=</span> <span class="token function">openConn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，每次执行数据库操作时都需要调用openConn()，这是因为每个数据库操作都需要一个数据库连接。当然，在某些情况下，这种方法可能会导致性能问题，特别是在高并发的场景下，因为频繁地打开和关闭数据库连接会产生额外的开销。</p><p>一种解决方案是使用数据库连接池。数据库连接池可以管理一组数据库连接，以便在需要时重用它们，而不是为每个请求创建新的连接。在Go的database/sql包中，连接池的管理是自动的。当您执行数据库操作时，sql.DB实例会自动从连接池中获取一个连接，并在操作完成后将其归还给连接池。</p><p>为了利用连接池，您可以在程序初始化时创建一个sql.DB实例，然后在整个程序中重用它，而不是在每个函数中调用openConn()。以下是修改后的示例：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> dbops

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;database/sql&quot;</span>
	<span class="token boolean">_</span> <span class="token string">&quot;github.com/go-sql-driver/mysql&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> db <span class="token operator">*</span>sql<span class="token punctuation">.</span>DB

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> err <span class="token builtin">error</span>
	db<span class="token punctuation">,</span> err <span class="token operator">=</span> sql<span class="token punctuation">.</span><span class="token function">Open</span><span class="token punctuation">(</span><span class="token string">&quot;mysql&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root:12345678@tcp(localhost:3306)/stmsrv?charset=utf8&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">AddUserCredential</span><span class="token punctuation">(</span>loginName <span class="token builtin">string</span><span class="token punctuation">,</span> pwd <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token comment">// 使用已经打开的数据库连接 db</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">GetUserCredential</span><span class="token punctuation">(</span>loginName <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 使用已经打开的数据库连接 db</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，数据库连接池将由sql.DB实例管理，您无需在每个函数中打开和关闭连接。在高并发场景下，这将提高性能。注意，这里我将openConn()函数的内容移动到了init()函数中，该函数在包导入时自动执行，这样可以确保在程序启动时创建数据库连接。</p>`,6),o=[e];function i(c,l){return s(),a("div",null,o)}const d=n(p,[["render",i],["__file","db__openConn()_.html.vue"]]);export{d as default};
