import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as p,c,d as a,a as n,b as l,f as e}from"./app-ecbfe019.js";const r={},u=e(`<h2 id="搭建项目框架" tabindex="-1"><a class="header-anchor" href="#搭建项目框架" aria-hidden="true">#</a> 搭建项目框架</h2><p>本项目使用 Go语言：一种编译型、并发型、垃圾回收型、面向对象的编程语言，具有简洁、高效、可靠等特点。主要使用的技术栈有：</p><ul><li>gin框架：一种基于Go语言的轻量级、高性能、支持中间件的Web框架，具有快速、灵活、易用等特点。</li><li>http包：Go语言标准库中的一个包，提供了创建和处理HTTP协议的客户端和服务器端的功能。</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>authset
├── api
│   └── v1
│       ├── api.go
│       └── user.go
├── config
│   ├── config.go
│   ├── http.go
│   ├── mysql.go
│   └── redis.go
├── config.yaml
├── data
│   ├── base.go
│   ├── data.go
│   └── user.go
├── go.mod
├── go.sum
├── main.go
├── middlewares
│   ├── cors.go
│   └── timeout.go
├── request
│   └── user.go
├── router
│   ├── router.go
│   └── user.go
├── server
│   ├── http.go
│   └── server.go
├── services
│   ├── services.go
│   └── user.go
├── wire.go
└── wire_gen.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我会尽力根据目录树说明该程序的执行调用顺序。一般来说，程序的执行调用顺序是这样的：程序会执行<code>main.go</code>文件中的main函数，这是程序的入口点。然后，main函数会调用config目录中的config.go文件中的InitConfig函数，加载配置文件并初始化配置结构体。接着，main函数会调用data目录中的base.go文件中的InitDB和InitRedis函数，初始化数据库和缓存连接池，并赋值给data目录中的data.go文件中的全局数据层实例变量Data。然后，main函数会调用services目录中的services.go文件中的NewService函数，创建一个服务层实例，并赋值给server目录中的server.go文件中的全局服务实例变量Server。接着，main函数会调用router目录中的router.go文件中的NewRouter函数，创建一个路由引擎，并注册中间件、路由组、路由规则等。然后，main函数会调用server目录中的http.go文件中的NewHTTPServer函数，创建一个HTTP服务实例，并传入路由引擎和配置信息。接着，main函数会调用HTTP服务实例的Start方法，启动HTTP服务，并监听端口和处理请求。</p>`,5),d=e(`<p>然后，当客户端发送请求到服务器时，请求会经过以下几个步骤：首先，请求会被跨域资源共享（CORS）中间件处理，检查请求是否符合跨域访问规则，如果不符合则返回错误响应，如果符合则继续下一步。然后，请求会被超时中间件处理，设置请求处理的最大时间，如果超过则返回错误响应，如果没有超过则继续下一步。接着，请求会被路由引擎匹配到对应的路由规则和处理器函数，比如用户相关路由规则和处理器函数在router目录中的user.go文件中定义。然后，处理器函数会从请求中获取参数，并调用request目录中对应参数结构体的验证方法，验证参数是否合法，如果不合法则返回错误响应，如果合法则继续下一步。接着，处理器函数会调用服务层实例的对应业务逻辑方法，比如用户相关业务逻辑方法在services目录中的user.go文件中定义。然后，业务逻辑方法会调用数据层实例的对应数据操作方法，比如用户相关数据操作方法在data目录中的user.go文件中定义。接着，数据操作方法会使用数据库或缓存连接池执行相应的SQL语句或缓存命令，并返回结果或错误。然后，业务逻辑方法会根据数据操作方法返回的结果或错误进行相应的处理，并返回结果或错误。接着，处理器函数会根据业务逻辑方法返回的结果或错误进行相应的处理，并返回响应给客户端。</p><ul><li><strong>api</strong> 目录是用来定义API接口的，包含了v1版本的API文件。 <ul><li><strong>api.go</strong>文件是用来定义通用的API响应结构和错误码的。</li><li><strong>user.go</strong>文件是用来定义用户相关的API接口和参数验证的，比如注册、登录、登出等。</li></ul></li><li><strong>config</strong> 目录是用来存放配置信息的，包含了config.go文件和各种配置项的文件。 <ul><li><strong>config.go</strong>文件是用来加载配置文件和初始化配置结构体的。</li><li><strong>http.go</strong>文件是用来定义HTTP服务的配置项的，比如端口、超时时间等。</li><li><strong>mysql.go</strong>文件是用来定义MySQL数据库的配置项的，比如地址、用户名、密码等。</li><li><strong>redis.go</strong>文件是用来定义Redis缓存的配置项的，比如地址、密码、数据库等。</li></ul></li><li><strong>config.yaml</strong>文件是用来存放具体的配置值的，比如开发环境和生产环境的不同配置。</li><li><strong>data</strong> 目录是用来操作数据库和缓存的，包含了base.go文件和各种数据模型的文件。 <ul><li><strong>base.go</strong>文件是用来初始化数据库和缓存连接池的，以及提供一些通用的数据操作方法的。</li><li><strong>data.go</strong>文件是用来定义数据层接口和错误类型的，以及提供一个全局的数据层实例的。</li><li><strong>user.go</strong>文件是用来实现用户数据模型和数据层接口的，比如创建用户、查询用户、更新用户等。</li></ul></li><li><strong>go.mod</strong>和<strong>go.sum</strong>文件是用来管理项目依赖包的，记录了项目使用了哪些第三方库和版本号。</li><li><strong>main.go</strong> 文件是项目的入口文件，负责初始化配置、数据层、服务层、中间件、路由等，并启动HTTP服务。</li><li><strong>middlewares</strong> 目录是用来定义中间件的，包含了cors.go文件和timeout.go文件。 <ul><li><strong>cors.go</strong>文件是用来定义跨域资源共享（CORS）中间件的，允许客户端跨域访问API接口。</li><li><strong>timeout.go</strong>文件是用来定义超时中间件的，设置每个请求处理的最大时间，超过则返回错误响应。</li></ul></li><li><strong>request</strong> 目录是用来定义请求参数结构体的，包含了user.go文件。 <ul><li><strong>user.go</strong>文件是用来定义用户相关请求参数结构体的，比如注册参数、登录参数等，并实现参数验证方法。</li></ul></li><li><strong>router</strong>目录是用来定义路由规则和处理器函数的，包含了router.go文件和各种路由模块文件。 <ul><li><strong>router.go</strong>文件是用来初始化路由引擎和注册中间件、路由组、路由规则等的。</li><li><strong>user.go</strong>文件是用来定义用户相关路由规则和处理器函数的，比如注册路由、登录路由等，并调用服务层方法处理业务逻辑。</li></ul></li><li><strong>server</strong>目录是用来封装HTTP服务相关逻辑的，包含了http.go文件和server.go文件。 <ul><li><strong>http.go</strong>文件是用来定义HTTP服务结构体和方法的，比如创建HTTP服务、启动HTTP服务、关闭HTTP服务等，并实现优雅地关闭HTTP服务功能。</li><li><strong>server.go</strong>文件是用来定义服务接口和错误类型的，并提供一个全局服务实例变量。</li></ul></li><li><strong>services</strong>目录是用来实现业务逻辑层的，包含了services.go文件和各种业务模块文件。 <ul><li><strong>services.go</strong>文件是用来实现服务接口和提供一些通用服务方法的，比如生成JWT令牌、验证JWT令牌等。</li><li><strong>user.go</strong>文件是用来实现用户相关业务逻辑层方法的，比如注册用户、登录用户、登出用户等，并调用数据层方法操作数据库或缓存。</li></ul></li><li><strong>wire.go</strong>和<strong>wire_gen.go</strong>文件是使用wire库生成依赖注入代码的源码和输出码。wire库可以帮助我们自动地将各个组件连接起来，避免手动地写初始化代码。</li></ul><p>这段代码定义了一个名为newApp的函数，该函数接受两个参数：engine和conf。engine是一个gin.Engine类型的指针，它是一个用于创建HTTP路由和中间件的框架。conf是一个config.Server类型的指针，它是一个用于存储服务器配置的结构体。</p><p>函数的返回值是一个*http.Server类型的指针，它是一个用于创建HTTP服务器的结构体。函数的主要作用是根据给定的engine和conf创建一个HTTP服务器，并返回它。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// newApp 函数，用于创建一个HTTP服务器</span>
<span class="token keyword">func</span> <span class="token function">newApp</span><span class="token punctuation">(</span>engine <span class="token operator">*</span>gin<span class="token punctuation">.</span>Engine<span class="token punctuation">,</span> conf <span class="token operator">*</span>config<span class="token punctuation">.</span>Server<span class="token punctuation">)</span> <span class="token operator">*</span>http<span class="token punctuation">.</span>Server <span class="token punctuation">{</span>
	<span class="token comment">// 创建一个*http.Server类型的指针，命名为srv</span>
	srv <span class="token operator">:=</span> <span class="token operator">&amp;</span>http<span class="token punctuation">.</span>Server<span class="token punctuation">{</span>
		<span class="token comment">// 设置srv的Addr字段为conf中的HTTP端口</span>
		Addr<span class="token punctuation">:</span> conf<span class="token punctuation">.</span>HTTP<span class="token punctuation">.</span>Port<span class="token punctuation">,</span>
		<span class="token comment">// 设置srv的Handler字段为engine，即使用gin框架处理HTTP请求</span>
		Handler<span class="token punctuation">:</span> engine<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 返回srv</span>
	<span class="token keyword">return</span> srv
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码对整体项目的影响主要有：</p><ul><li>它提供了一个统一的入口函数，方便在其他地方调用和创建HTTP服务器。</li><li>它实现了对gin框架和服务器配置的封装，简化了HTTP服务器的创建过程。</li><li>它增加了项目的可读性和可维护性，因为它使用了清晰的命名和注释。</li></ul><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;flag&quot;</span>
	<span class="token string">&quot;log&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>

	<span class="token string">&quot;authset/config&quot;</span>
	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
	<span class="token string">&quot;github.com/spf13/viper&quot;</span>
	<span class="token string">&quot;go.uber.org/zap&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// newApp 函数，用于创建一个HTTP服务器</span>
<span class="token keyword">func</span> <span class="token function">newApp</span><span class="token punctuation">(</span>engine <span class="token operator">*</span>gin<span class="token punctuation">.</span>Engine<span class="token punctuation">,</span> conf <span class="token operator">*</span>config<span class="token punctuation">.</span>Server<span class="token punctuation">)</span> <span class="token operator">*</span>http<span class="token punctuation">.</span>Server <span class="token punctuation">{</span>
	<span class="token comment">// 创建一个*http.Server类型的指针，命名为srv</span>
	srv <span class="token operator">:=</span> <span class="token operator">&amp;</span>http<span class="token punctuation">.</span>Server<span class="token punctuation">{</span>
		<span class="token comment">// 设置srv的Addr字段为conf中的HTTP端口</span>
		Addr<span class="token punctuation">:</span> conf<span class="token punctuation">.</span>HTTP<span class="token punctuation">.</span>Port<span class="token punctuation">,</span>
		<span class="token comment">// 设置srv的Handler字段为engine，即使用gin框架处理HTTP请求</span>
		Handler<span class="token punctuation">:</span> engine<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 返回srv</span>
	<span class="token keyword">return</span> srv
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 读取 yaml 配置文件</span>
	<span class="token comment">// 定义一个字符串变量path，用于存储配置文件的路径</span>
	<span class="token keyword">var</span> path <span class="token builtin">string</span>
	<span class="token comment">// 使用flag包提供的函数，从命令行参数中获取配置文件的路径，并赋值给path变量</span>
	<span class="token comment">// 如果没有指定-c选项，则使用默认值&quot;./config.yaml&quot;</span>
	flag<span class="token punctuation">.</span><span class="token function">StringVar</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>path<span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;./config.yaml&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;choose config file&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">// 解析命令行参数</span>
	flag<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token comment">// 解析配置文件</span>
	<span class="token comment">// 定义一个config.Config类型的变量conf，用于存储配置信息</span>
	<span class="token keyword">var</span> conf config<span class="token punctuation">.</span>Config
	<span class="token comment">// 使用viper包提供的函数，创建一个新的viper实例，命名为v</span>
	v <span class="token operator">:=</span> viper<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment">// 设置v的配置文件为path指定的路径</span>
	v<span class="token punctuation">.</span><span class="token function">SetConfigFile</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
	<span class="token comment">// 使用v的ReadInConfig方法，读取配置文件内容</span>
	<span class="token keyword">if</span> err <span class="token operator">:=</span> v<span class="token punctuation">.</span><span class="token function">ReadInConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token comment">// 如果读取失败，抛出异常</span>
		<span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 使用v的Unmarshal方法，将配置文件内容解析为conf结构体</span>
	<span class="token comment">// type Config struct {</span>
	<span class="token comment">//	 Data   *Data   \`mapstructure:&quot;data&quot; json:&quot;http&quot; yaml:&quot;data&quot;\`</span>
	<span class="token comment">//	 Server *Server \`mapstructure:&quot;server&quot; json:&quot;server&quot; yaml:&quot;server&quot;\`</span>
	<span class="token comment">// }</span>
	<span class="token keyword">if</span> err <span class="token operator">:=</span> v<span class="token punctuation">.</span><span class="token function">Unmarshal</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>conf<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 初始化log，线上环境使用 NewProduction</span>
	<span class="token comment">// 定义一个*zap.Logger类型的变量logger，用于记录日志信息</span>
	<span class="token comment">// 使用zap包提供的NewDevelopment函数，创建一个新的开发环境日志记录器，并赋值给logger变量</span>
	logger<span class="token punctuation">,</span> err <span class="token operator">:=</span> zap<span class="token punctuation">.</span><span class="token function">NewDevelopment</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 定义一个*http.Server类型的变量srv，用于存储HTTP服务器实例</span>
	<span class="token comment">// 调用之前定义的initApp函数，传入conf.Server, conf.Data和logger作为参数，初始化应用程序，并返回一个HTTP服务器实例，并赋值给srv变量</span>
	srv<span class="token punctuation">,</span> err <span class="token operator">:=</span> <span class="token function">initApp</span><span class="token punctuation">(</span>conf<span class="token punctuation">.</span>Server<span class="token punctuation">,</span> conf<span class="token punctuation">.</span>Data<span class="token punctuation">,</span> logger<span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token function">panic</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 使用srv的ListenAndServe方法，监听并处理HTTP请求</span>
	<span class="token comment">// 如果监听或处理失败，并且错误不是由于服务器关闭导致的，则使用log包提供的Fatal函数，记录错误信息并终止程序</span>
	<span class="token keyword">if</span> err <span class="token operator">:=</span> srv<span class="token punctuation">.</span><span class="token function">ListenAndServe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token operator">&amp;&amp;</span> err <span class="token operator">!=</span> http<span class="token punctuation">.</span>ErrServerClosed <span class="token punctuation">{</span>
		log<span class="token punctuation">.</span><span class="token function">Fatal</span><span class="token punctuation">(</span><span class="token string">&quot;cannot server&quot;</span><span class="token punctuation">,</span> zap<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api-层" tabindex="-1"><a class="header-anchor" href="#api-层" aria-hidden="true">#</a> API 层</h2><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// api/v1/api.go</span>
<span class="token keyword">package</span> v1

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;authset/services&quot;</span>
	<span class="token string">&quot;github.com/google/wire&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">var</span> ProviderSet <span class="token operator">=</span> wire<span class="token punctuation">.</span><span class="token function">NewSet</span><span class="token punctuation">(</span>NewHandle<span class="token punctuation">)</span>

<span class="token keyword">type</span> Handle <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	usercase <span class="token operator">*</span>services<span class="token punctuation">.</span>Usercase
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewHandle</span><span class="token punctuation">(</span>usercase <span class="token operator">*</span>services<span class="token punctuation">.</span>Usercase<span class="token punctuation">)</span> <span class="token operator">*</span>Handle <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>Handle<span class="token punctuation">{</span>
		usercase<span class="token punctuation">:</span> usercase<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码定义了一个名为 <code>Handle</code> 的结构体，它包含一个指向 <code>services.Usercase</code> 结构体的指针。<code>Usercase</code> 是一个服务层结构体，用于处理业务逻辑。</p><p><code>NewHandle</code> 函数是一个构造函数，它接受一个 <code>services.Usercase</code> 结构体指针作为参数，并返回一个 <code>Handle</code> 结构体指针。在函数内部，使用传入的 <code>usercase</code> 参数创建一个新的 <code>Handle</code> 结构体，并将其返回。</p><p><code>ProviderSet</code> 是一个 <code>wire.Set</code>，它使用 <code>NewHandle</code> 函数创建一个新的 <code>Handle</code> 结构体。这个 <code>ProviderSet</code> 可以在依赖注入中使用，用于提供 <code>Handle</code> 结构体的实例。</p><p>总的来说，这段代码定义了一个 <code>Handle</code> 结构体和一个 <code>NewHandle</code> 函数，用于创建 <code>Handle</code> 结构体的实例。这个结构体包含一个指向 <code>services.Usercase</code> 结构体的指针，用于处理业务逻辑。<code>ProviderSet</code> 是一个依赖注入的集合，用于提供 <code>Handle</code> 结构体的实例。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">// api/v1/user.go</span>
<span class="token keyword">package</span> v1

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;authset/request&quot;</span>
	<span class="token string">&quot;github.com/gin-gonic/gin&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>
<span class="token punctuation">)</span>

<span class="token comment">// Login</span>


<span class="token comment">// Login 处理用户登录请求的函数</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>h <span class="token operator">*</span>Handle<span class="token punctuation">)</span> <span class="token function">Login</span><span class="token punctuation">(</span>c <span class="token operator">*</span>gin<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 解析请求体中的 JSON 数据到 request.Login 结构体中</span>
	<span class="token keyword">var</span> req request<span class="token punctuation">.</span>Login
	<span class="token keyword">if</span> err <span class="token operator">:=</span> c<span class="token punctuation">.</span><span class="token function">ShouldBindJSON</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>req<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 调用 usercase.Login 函数进行登录验证</span>
	<span class="token keyword">if</span> err <span class="token operator">:=</span> h<span class="token punctuation">.</span>usercase<span class="token punctuation">.</span><span class="token function">Login</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 返回 HTTP 状态码 200 表示登录成功</span>
	c<span class="token punctuation">.</span><span class="token function">Status</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>`,16),v={href:"https://github.com/opsets/authset",target:"_blank",rel:"noopener noreferrer"},k=n("li",null,"[]",-1);function m(g,b){const t=s("Mermaid"),o=s("ExternalLinkIcon");return p(),c("div",null,[u,a(t,{id:"mermaid-22",code:"eJxVkEsOgzAMRPecggvQ3qAnoIvSpdVFCC5kwadJqFQh7t54EkBsxpN5juK4tWrq8rLKemUGErm04ysviluux+FtWopF0ixawFo5JhEAMYgb5RWJIBaD2LH9Gs2ONgO8HfYWtmhgu2O2gHacfYCxAEYL2Hk/kQiAmDS+dWF4G98Sg9ibnsNdShUwefA5PEsiIGLiBPyZ2XlK9bp3pOD0zfPPZAvHKpp6uf+ej3I9Iq10x0vFjXFr9gcmy4q1"}),d,n("ul",null,[n("li",null,[n("a",v,[l("Github 仓库"),a(o)])]),k])])}const T=i(r,[["render",m],["__file","authset.html.vue"]]);export{T as default};
