const n=JSON.parse('{"key":"v-371fd838","path":"/posts/go/3.html","title":"如何使用func (*Cookie) String","lang":"zh-CN","frontmatter":{"title":"如何使用func (*Cookie) String","icon":"article","date":"2023-06-06T15:21:54.000Z","category":["Go 语言"],"tag":["golang"],"description":"在Go语言中，func (*Cookie) String 方法用于将http.Cookie类型的对象转换为字符串形式。 具体来说，它返回一个字符串，该字符串是按照HTTP cookie格式构造的。例如： package main import ( \\"fmt\\" \\"net/http\\" ) func main() { cookie := &amp;http.Cookie{ Name: \\"mycookie\\", Value: \\"12345\\", } cookieString := cookie.String() fmt.Println(cookieString) }","head":[["meta",{"property":"og:url","content":"https://jiejaitt.tech/posts/go/3.html"}],["meta",{"property":"og:title","content":"如何使用func (*Cookie) String"}],["meta",{"property":"og:description","content":"在Go语言中，func (*Cookie) String 方法用于将http.Cookie类型的对象转换为字符串形式。 具体来说，它返回一个字符串，该字符串是按照HTTP cookie格式构造的。例如： package main import ( \\"fmt\\" \\"net/http\\" ) func main() { cookie := &amp;http.Cookie{ Name: \\"mycookie\\", Value: \\"12345\\", } cookieString := cookie.String() fmt.Println(cookieString) }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-06T15:17:16.000Z"}],["meta",{"property":"article:author","content":"JIeJaitt"}],["meta",{"property":"article:tag","content":"golang"}],["meta",{"property":"article:published_time","content":"2023-06-06T15:21:54.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-06T15:17:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何使用func (*Cookie) String\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-06T15:21:54.000Z\\",\\"dateModified\\":\\"2023-06-06T15:17:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"JIeJaitt\\",\\"url\\":\\"https://jiejaitt.tech\\"}]}"]]},"headers":[],"git":{"createdTime":1686064636000,"updatedTime":1686064636000,"contributors":[{"name":"JIeJaitt","email":"498938874@qq.com","commits":1}]},"readingTime":{"minutes":0.67,"words":200},"filePathRelative":"posts/go/3.md","localizedDate":"2023年6月6日","excerpt":"<p>在Go语言中，func (*Cookie) String 方法用于将http.Cookie类型的对象转换为字符串形式。</p>\\n<p>具体来说，它返回一个字符串，该字符串是按照HTTP cookie格式构造的。例如：</p>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">package</span> main\\n\\n<span class=\\"token keyword\\">import</span> <span class=\\"token punctuation\\">(</span>\\n    <span class=\\"token string\\">\\"fmt\\"</span>\\n    <span class=\\"token string\\">\\"net/http\\"</span>\\n<span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token keyword\\">func</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    cookie <span class=\\"token operator\\">:=</span> <span class=\\"token operator\\">&amp;</span>http<span class=\\"token punctuation\\">.</span>Cookie<span class=\\"token punctuation\\">{</span>\\n        Name<span class=\\"token punctuation\\">:</span>  <span class=\\"token string\\">\\"mycookie\\"</span><span class=\\"token punctuation\\">,</span>\\n        Value<span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">\\"12345\\"</span><span class=\\"token punctuation\\">,</span>\\n    <span class=\\"token punctuation\\">}</span>\\n\\n    cookieString <span class=\\"token operator\\">:=</span> cookie<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">String</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n    fmt<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">Println</span><span class=\\"token punctuation\\">(</span>cookieString<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};