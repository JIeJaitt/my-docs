const t=JSON.parse('{"key":"v-38d4b0d7","path":"/posts/go/4.html","title":"如何使用func (r *Router) Handler(method, path string, handler http.Handler)","lang":"zh-CN","frontmatter":{"title":"如何使用func (r *Router) Handler(method, path string, handler http.Handler)","icon":"article","date":"2023-06-06T00:13:46.000Z","category":["Go 语言"],"tag":["golang"],"description":"如何使用gorilla/mux 的 Handler方法 func (r *Router) Handler(method, path string, handler http.Handler) 是 Router 结构体的一个方法，用于将一个 http.Handler 添加到路由中。 具体来说，它接受三个参数： method 是一个字符串，表示 HTTP 方法，比如 \\"GET\\"、\\"POST\\"、\\"PUT\\" 等等。如果要匹配所有方法，可以使用 \\"*\\"。 path 是一个字符串，表示要匹配的 URL 路径。可以包含参数，比如 \\"/users/:id\\"。 handler 是一个 http.Handler，表示要执行的处理器函数。","head":[["meta",{"property":"og:url","content":"https://jiejaitt.tech/posts/go/4.html"}],["meta",{"property":"og:title","content":"如何使用func (r *Router) Handler(method, path string, handler http.Handler)"}],["meta",{"property":"og:description","content":"如何使用gorilla/mux 的 Handler方法 func (r *Router) Handler(method, path string, handler http.Handler) 是 Router 结构体的一个方法，用于将一个 http.Handler 添加到路由中。 具体来说，它接受三个参数： method 是一个字符串，表示 HTTP 方法，比如 \\"GET\\"、\\"POST\\"、\\"PUT\\" 等等。如果要匹配所有方法，可以使用 \\"*\\"。 path 是一个字符串，表示要匹配的 URL 路径。可以包含参数，比如 \\"/users/:id\\"。 handler 是一个 http.Handler，表示要执行的处理器函数。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-06T15:17:16.000Z"}],["meta",{"property":"article:author","content":"JIeJaitt"}],["meta",{"property":"article:tag","content":"golang"}],["meta",{"property":"article:published_time","content":"2023-06-06T00:13:46.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-06T15:17:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何使用func (r *Router) Handler(method, path string, handler http.Handler)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-06T00:13:46.000Z\\",\\"dateModified\\":\\"2023-06-06T15:17:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"JIeJaitt\\",\\"url\\":\\"https://jiejaitt.tech\\"}]}"]]},"headers":[{"level":2,"title":"如何使用gorilla/mux 的 Handler方法","slug":"如何使用gorilla-mux-的-handler方法","link":"#如何使用gorilla-mux-的-handler方法","children":[]},{"level":2,"title":"如何使用httprouter包的 Handler 方法","slug":"如何使用httprouter包的-handler-方法","link":"#如何使用httprouter包的-handler-方法","children":[]},{"level":2,"title":"r := httprouter.New()之后为什么就能使用 r.GET函数和r.Handler函数了？","slug":"r-httprouter-new-之后为什么就能使用-r-get函数和r-handler函数了","link":"#r-httprouter-new-之后为什么就能使用-r-get函数和r-handler函数了","children":[]}],"git":{"createdTime":1686064636000,"updatedTime":1686064636000,"contributors":[{"name":"JIeJaitt","email":"498938874@qq.com","commits":1}]},"readingTime":{"minutes":3.81,"words":1144},"filePathRelative":"posts/go/4.md","localizedDate":"2023年6月6日","excerpt":"<h2> 如何使用gorilla/mux 的 Handler方法</h2>\\n<p>func (r *Router) Handler(method, path string, handler http.Handler) 是 Router 结构体的一个方法，用于将一个 http.Handler 添加到路由中。</p>\\n<p>具体来说，它接受三个参数：</p>\\n<ul>\\n<li>method 是一个字符串，表示 HTTP 方法，比如 \\"GET\\"、\\"POST\\"、\\"PUT\\" 等等。如果要匹配所有方法，可以使用 \\"*\\"。</li>\\n<li>path 是一个字符串，表示要匹配的 URL 路径。可以包含参数，比如 \\"/users/:id\\"。</li>\\n<li>handler 是一个 http.Handler，表示要执行的处理器函数。</li>\\n</ul>","autoDesc":true}');export{t as data};