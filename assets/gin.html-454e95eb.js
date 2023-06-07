const n=JSON.parse('{"key":"v-03459830","path":"/source/gin.html","title":"理解 Gin 使用与源码分析","lang":"zh-CN","frontmatter":{"title":"理解 Gin 使用与源码分析","icon":"article","date":"2023-06-07T14:26:13.000Z","category":["开源精选"],"tag":["gin"],"description":"在gin框架项目中，用户代码user.go增加用户的代码逻辑一般是什么？怎么编写 在Gin框架项目中，用户代码user.go增加用户的代码逻辑一般包括以下几个步骤： 定义用户结构体 首先，需要定义一个用户结构体，包含用户的各个属性，例如用户名、密码、邮箱等。例如： type User struct { ID uint `gorm:\\"primary_key\\" json:\\"id\\"` Username string `gorm:\\"not null;unique\\" json:\\"username\\"` Password string `gorm:\\"not null\\" json:\\"-\\"` Email string `gorm:\\"not null;unique\\" json:\\"email\\"` }","head":[["meta",{"property":"og:url","content":"https://jiejaitt.tech/source/gin.html"}],["meta",{"property":"og:title","content":"理解 Gin 使用与源码分析"}],["meta",{"property":"og:description","content":"在gin框架项目中，用户代码user.go增加用户的代码逻辑一般是什么？怎么编写 在Gin框架项目中，用户代码user.go增加用户的代码逻辑一般包括以下几个步骤： 定义用户结构体 首先，需要定义一个用户结构体，包含用户的各个属性，例如用户名、密码、邮箱等。例如： type User struct { ID uint `gorm:\\"primary_key\\" json:\\"id\\"` Username string `gorm:\\"not null;unique\\" json:\\"username\\"` Password string `gorm:\\"not null\\" json:\\"-\\"` Email string `gorm:\\"not null;unique\\" json:\\"email\\"` }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-07T07:18:19.000Z"}],["meta",{"property":"article:author","content":"JIeJaitt"}],["meta",{"property":"article:tag","content":"gin"}],["meta",{"property":"article:published_time","content":"2023-06-07T14:26:13.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-07T07:18:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"理解 Gin 使用与源码分析\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-07T14:26:13.000Z\\",\\"dateModified\\":\\"2023-06-07T07:18:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"JIeJaitt\\",\\"url\\":\\"https://jiejaitt.tech\\"}]}"]]},"headers":[{"level":2,"title":"在gin框架项目中，用户代码user.go增加用户的代码逻辑一般是什么？怎么编写","slug":"在gin框架项目中-用户代码user-go增加用户的代码逻辑一般是什么-怎么编写","link":"#在gin框架项目中-用户代码user-go增加用户的代码逻辑一般是什么-怎么编写","children":[]},{"level":2,"title":"Gin+Gorm开发Golang API快速开发脚手架是什么意思？","slug":"gin-gorm开发golang-api快速开发脚手架是什么意思","link":"#gin-gorm开发golang-api快速开发脚手架是什么意思","children":[]}],"git":{"createdTime":1686122299000,"updatedTime":1686122299000,"contributors":[{"name":"JIeJaitt","email":"498938874@qq.com","commits":1}]},"readingTime":{"minutes":4.1,"words":1230},"filePathRelative":"source/gin.md","localizedDate":"2023年6月7日","excerpt":"<h2> 在gin框架项目中，用户代码user.go增加用户的代码逻辑一般是什么？怎么编写</h2>\\n<p>在Gin框架项目中，用户代码user.go增加用户的代码逻辑一般包括以下几个步骤：</p>\\n<ol>\\n<li>定义用户结构体\\n首先，需要定义一个用户结构体，包含用户的各个属性，例如用户名、密码、邮箱等。例如：</li>\\n</ol>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">type</span> User <span class=\\"token keyword\\">struct</span> <span class=\\"token punctuation\\">{</span>\\n    ID       <span class=\\"token builtin\\">uint</span>   <span class=\\"token string\\">`gorm:\\"primary_key\\" json:\\"id\\"`</span>\\n    Username <span class=\\"token builtin\\">string</span> <span class=\\"token string\\">`gorm:\\"not null;unique\\" json:\\"username\\"`</span>\\n    Password <span class=\\"token builtin\\">string</span> <span class=\\"token string\\">`gorm:\\"not null\\" json:\\"-\\"`</span>\\n    Email    <span class=\\"token builtin\\">string</span> <span class=\\"token string\\">`gorm:\\"not null;unique\\" json:\\"email\\"`</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
