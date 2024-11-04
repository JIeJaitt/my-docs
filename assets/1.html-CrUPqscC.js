import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as s,o as a}from"./app-XeMNkQ71.js";const l={};function n(r,i){return a(),t("div",null,i[0]||(i[0]=[s(`<p>学习 Go Web 开发需要了解一些计算机网络的知识，本文将介绍一些基本的网络概念和协议，以帮助你更好地理解和开发 Web 应用程序。</p><ol><li>IP 地址和端口号<br> 在网络中，每个计算机都有一个唯一的 IP 地址，用于标识该计算机在网络中的位置。IP 地址是由四个用点分隔的数字组成，如 192.168.0.1。在 Web 开发中，我们通常将 IP 地址简化为域名，如 <a href="http://google.com" target="_blank" rel="noopener noreferrer">google.com</a>、<a href="http://baidu.com" target="_blank" rel="noopener noreferrer">baidu.com</a> 等等。</li></ol><p>除了 IP 地址之外，网络中还有一个重要的概念是端口号。端口号用于标识一个应用程序在计算机中的位置。每个应用程序都可以占用一个或多个端口号，用于与其他应用程序进行通信。常用的端口号包括 80（HTTP）、443（HTTPS）、3306（MySQL）等等。</p><ol start="2"><li>HTTP 协议<br> HTTP（Hypertext Transfer Protocol）是 Web 开发中最常用的协议之一。它是一种用于传输超文本的应用层协议，基于 TCP/IP 协议栈，通常使用 80 端口。HTTP 协议定义了客户端和服务器之间的通信格式和规则。</li></ol><p>HTTP 请求由客户端发送，包括请求方法、请求 URL、请求头和请求体等信息。常用的请求方法包括 GET、POST、PUT、DELETE 等等。服务器接收到请求后，会返回一个 HTTP 响应，包括响应状态码、响应头和响应体等信息。</p><ol start="3"><li>HTTPS 协议<br> HTTPS（Hypertext Transfer Protocol Secure）是一种基于 TLS/SSL 协议的加密通信协议。与 HTTP 相比，HTTPS 在传输数据时使用了 SSL/TLS 加密和解密技术，可以保证通信过程中的数据安全性。HTTPS 协议通常使用 443 端口。</li></ol><p>在 Go Web 开发中，可以使用 net/http 包提供的 ListenAndServeTLS 函数来启动 HTTPS 服务器，也可以使用第三方库如 <a href="http://golang.org/x/crypto/acme/autocert" target="_blank" rel="noopener noreferrer">golang.org/x/crypto/acme/autocert</a> 来自动获取和管理 SSL/TLS 证书。</p><ol start="4"><li>TCP/IP 协议栈<br> TCP/IP 协议栈是计算机网络中最常用的协议栈之一，包括了多个协议层，如物理层、数据链路层、网络层、传输层和应用层等。其中，应用层包含了 HTTP、HTTPS、FTP 等协议，传输层包含了 TCP 和 UDP 协议。</li></ol><p>TCP（Transmission Control Protocol）是一种面向连接的、可靠的传输协议，提供了可靠的数据传输和流量控制功能，常用于 HTTP 和 HTTPS 协议中。UDP（User Datagram Protocol）是一种无连接的、不可靠的传输协议，常用于音视频等实时数据传输场景。</p><p>在 Go Web 开发中，可以使用 net 包提供的 TCPConn 和 UDPConn 类型来创建 TCP 和 UDP 连接，进行数据的传输和接收。</p><ol start="5"><li>DNS 解析<br> DNS（Domain Name System）是一种用于将域名映射到 IP 地址的分布式数据库系统。在网络中，当客户端需要访问一个域名时，会向 DNS 服务器发送一个 DNS 查询请求，以获取该域名对应的 IP 地址。</li></ol><p>在 Go Web 开发中，可以使用 net 包提供的 LookupXXX 函数来进行 DNS 查询，获取域名对应的 IP 地址。</p><ol start="6"><li>Web 安全<br> Web 安全是 Web 开发中非常重要的一个方面，涉及到数据的加密、身份认证、授权等多个方面。在 Go Web 开发中，可以使用第三方库如 crypto、jwt-go、bcrypt 等来实现加密和身份认证等功能。</li></ol><p>此外，还需要注意一些常见的 Web 安全问题，如 XSS（跨站脚本攻击）、CSRF（跨站请求伪造）、SQL 注入等，以及如何进行防御和处理。</p><p>总之，在学习 Go Web 开发之前，需要对计算机网络有一定的了解，掌握基本的网络概念和协议。同时，需要注意 Web 安全问题，采取相应的防御和处理措施，保证 Web 应用程序的安全性和可靠性。</p><h2 id="具体说说服务器接收到请求后-会返回一个-http-响应-包括响应状态码、响应头和响应体等信息" tabindex="-1"><a class="header-anchor" href="#具体说说服务器接收到请求后-会返回一个-http-响应-包括响应状态码、响应头和响应体等信息"><span>具体说说服务器接收到请求后，会返回一个 HTTP 响应，包括响应状态码、响应头和响应体等信息？</span></a></h2><p>当服务器接收到客户端的 HTTP 请求后，会根据请求的内容和服务器的处理逻辑生成一个 HTTP 响应，响应包括响应状态码、响应头和响应体等信息。下面是对这些信息的具体解释：</p><ol><li>响应状态码（Response Status Code）：响应状态码是一个三位数，用于表示服务器对请求的处理结果。常见的状态码有：</li></ol><ul><li>2xx：表示请求成功处理，如 200 OK 表示请求成功，201 Created 表示资源创建成功等等。</li><li>3xx：表示重定向，如 301 Moved Permanently 表示资源已经被永久移动到新的位置，302 Found 表示资源已经被暂时移动到新的位置等等。</li><li>4xx：表示客户端错误，如 400 Bad Request 表示请求格式有误，404 Not Found 表示请求的资源不存在，401 Unauthorized 表示请求未经授权等等。</li><li>5xx：表示服务器错误，如 500 Internal Server Error 表示服务器内部错误，503 Service Unavailable 表示服务器暂时无法处理请求等等。</li></ul><ol><li>响应头（Response Headers）：响应头包含了一些关于响应的元数据，如响应的 MIME 类型、响应的字符集、响应的过期时间等等。常见的响应头有：</li></ol><ul><li>Content-Type：指定响应的 MIME 类型，如 text/html 表示 HTML 文本，application/json 表示 JSON 数据等等。</li><li>Content-Length：指定响应体的长度，以字节为单位。</li><li>Cache-Control：指定响应的缓存策略，如 max-age 表示缓存的最大时间，no-cache 表示不缓存等等。</li></ul><ol><li>响应体（Response Body）：响应体包含了服务器返回的实际内容，如 HTML 文本、JSON 数据等等。响应体的格式和内容取决于服务器的处理逻辑和客户端的请求。</li></ol><p>在 Go Web 开发中，可以使用 <code>http.ResponseWriter</code> 接口来向客户端发送 HTTP 响应。通过设置响应状态码、响应头和响应体，可以向客户端返回合适的响应结果。例如：</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">func</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> handler</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">w</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> http</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">ResponseWriter</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">r</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;"> *</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">http</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">Request</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 设置响应状态码</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    w</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">WriteHeader</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">http</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">StatusOK</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 设置响应头</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    w</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Header</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Set</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Content-Type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;text/plain&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 设置响应体</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    fmt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Fprintf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">w</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Hello, world!&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，WriteHeader 方法设置了响应状态码为 200 OK，Header().Set 方法设置了响应头的 Content-Type 为 text/plain，Fprintf 方法设置了响应体的内容为 &quot;Hello, world!&quot;。最终，服务器会将这些信息打包成一个 HTTP 响应发送给客户端。</p>`,25)]))}const h=e(l,[["render",n],["__file","1.html.vue"]]),k=JSON.parse('{"path":"/network/1.html","title":"学习Go web前需要了解的计算机网络相关的知识","lang":"zh-CN","frontmatter":{"title":"学习Go web前需要了解的计算机网络相关的知识","icon":"article","date":"2022-01-05T00:00:00.000Z","category":["go"],"tag":["web"],"description":"学习 Go Web 开发需要了解一些计算机网络的知识，本文将介绍一些基本的网络概念和协议，以帮助你更好地理解和开发 Web 应用程序。 IP 地址和端口号 在网络中，每个计算机都有一个唯一的 IP 地址，用于标识该计算机在网络中的位置。IP 地址是由四个用点分隔的数字组成，如 192.168.0.1。在 Web 开发中，我们通常将 IP 地址简化为域名...","head":[["meta",{"property":"og:url","content":"https://jiejaitt.tech/network/1.html"}],["meta",{"property":"og:title","content":"学习Go web前需要了解的计算机网络相关的知识"}],["meta",{"property":"og:description","content":"学习 Go Web 开发需要了解一些计算机网络的知识，本文将介绍一些基本的网络概念和协议，以帮助你更好地理解和开发 Web 应用程序。 IP 地址和端口号 在网络中，每个计算机都有一个唯一的 IP 地址，用于标识该计算机在网络中的位置。IP 地址是由四个用点分隔的数字组成，如 192.168.0.1。在 Web 开发中，我们通常将 IP 地址简化为域名..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-07T07:18:19.000Z"}],["meta",{"property":"article:tag","content":"web"}],["meta",{"property":"article:published_time","content":"2022-01-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-07T07:18:19.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"学习Go web前需要了解的计算机网络相关的知识\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-01-05T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-07T07:18:19.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"JIeJaitt\\",\\"url\\":\\"https://jiejaitt.tech\\"}]}"]]},"headers":[{"level":2,"title":"具体说说服务器接收到请求后，会返回一个 HTTP 响应，包括响应状态码、响应头和响应体等信息？","slug":"具体说说服务器接收到请求后-会返回一个-http-响应-包括响应状态码、响应头和响应体等信息","link":"#具体说说服务器接收到请求后-会返回一个-http-响应-包括响应状态码、响应头和响应体等信息","children":[]}],"git":{"createdTime":1686064636000,"updatedTime":1686122299000,"contributors":[{"name":"JIeJaitt","email":"498938874@qq.com","commits":1}]},"readingTime":{"minutes":5.64,"words":1692},"filePathRelative":"network/1.md","localizedDate":"2022年1月5日","excerpt":"<p>学习 Go Web 开发需要了解一些计算机网络的知识，本文将介绍一些基本的网络概念和协议，以帮助你更好地理解和开发 Web 应用程序。</p>\\n<ol>\\n<li>IP 地址和端口号<br>\\n在网络中，每个计算机都有一个唯一的 IP 地址，用于标识该计算机在网络中的位置。IP 地址是由四个用点分隔的数字组成，如 192.168.0.1。在 Web 开发中，我们通常将 IP 地址简化为域名，如 <a href=\\"http://google.com\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">google.com</a>、<a href=\\"http://baidu.com\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">baidu.com</a> 等等。</li>\\n</ol>","autoDesc":true}');export{h as comp,k as data};