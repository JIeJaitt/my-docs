import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as e,o as n}from"./app-BLqSvVJY.js";const t={};function l(h,i){return n(),a("div",null,i[0]||(i[0]=[e(`<blockquote><p>本文由 <a href="http://ksria.com/simpread/" target="_blank" rel="noopener noreferrer">简悦 SimpRead</a> 转码， 原文地址 <a href="http://c.biancheng.net/view/vip_7348.html" target="_blank" rel="noopener noreferrer">c.biancheng.net</a></p></blockquote><p>多路复用是通信和网络中的一个专业术语。多路复用通常表示在一个信道上传输多路信号或数据流的过程和技术。</p><h4 id="提示" tabindex="-1"><a class="header-anchor" href="#提示"><span>提示</span></a></h4><p>报话机同一时刻只能有一边进行收或者发的单边通信，报话机需要遵守的通信流程如下：</p><ul><li>说话方在完成时需要补上一句 “完毕”，随后放开通话按钮，从发送切换到接收状态，收听对方说话。</li><li>收听方在听到对方说 “完毕” 时，按下通话按钮，从接收切换到发送状态，开始说话。</li></ul><p>电话可以在说话的同时听到对方说话，所以电话是一种多路复用的设备，一条通信线路上可以同时接收或者发送数据。同样的，网线、光纤也都是基于多路复用模式来设计的，网线、光纤不仅可支持同时收发数据，还支持多个人同时收发数据。</p><p>在使用通道时，想同时接收多个通道的数据是一件困难的事情。通道在接收数据时，如果没有数据可以接收将会发生阻塞。虽然可以使用如下模式进行遍历，但运行性能会非常差。</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 尝试接收ch1通道</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ok</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ch1</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 尝试接收ch2通道</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    data</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ok</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ch2</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // 接收后续通道</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    …</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Go 语言中提供了 select 关键字，可以同时响应多个通道的操作。select 的用法与 switch 语句非常类似，由 select 开始一个新的选择块，每个选择条件由 case 语句来描述。</p><p>与 switch 语句可以选择任何可使用相等比较的条件相比，select 有比较多的限制，其中最大的一条限制就是每个 case 语句里必须是一个 IO 操作，大致结构如下：</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{  </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    case</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> 操作</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:  </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        响应操作</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    case</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> 操作</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:  </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        响应操作</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    …  </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    default</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:  </span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        没有操作情况</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>操作 1、操作 2：包含通道收发语句，请参考下表。</p><table><caption>select 多路复用中可以接收的样式</caption><tbody><tr><th>操   作</th><th>语句示例</th></tr><tr><td>接收任意数据</td><td>case &lt;- ch;</td></tr><tr><td>接收变量</td><td>case d :=  &lt;- ch;</td></tr><tr><td>发送数据</td><td>case ch &lt;- 100;</td></tr></tbody></table></li><li><p>响应操作 1、响应操作 2：当操作发生时，会执行对应 case 的响应操作。</p></li><li><p>default：当没有任何操作时，默认执行 default 中的语句。</p></li></ul><p>可以看出，select 不像 switch，后面并不带判断条件，而是直接去查看 case 语句。每个 case 语句都必须是一个面向 channel 的操作。</p><p>基于此功能，我们可以实现一个有趣的程序：</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ch</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> make</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">chan</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        case</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> ch</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        case</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> ch</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    i</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> &lt;-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ch</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    fmt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">Println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Value received:&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>能看明白这段代码的含义吗？其实很简单，这个程序实现了一个随机向 ch 中写入一个 0 或者 1 的过程。当然，这是个死循环。关于 select 的详细使用方法，请参考下节的示例。</p>`,16)]))}const r=s(t,[["render",l],["__file","1.html.vue"]]),d=JSON.parse('{"path":"/posts/go/1.html","title":"Go语言通道的多路复用——同时处理接收和发送多个通道的数据","lang":"zh-CN","frontmatter":{"title":"Go语言通道的多路复用——同时处理接收和发送多个通道的数据","icon":"edit","date":"2023-06-06T00:13:42.000Z","category":["Go 语言"],"tag":["golang"],"description":"本文由 简悦 SimpRead 转码， 原文地址 c.biancheng.net 多路复用是通信和网络中的一个专业术语。多路复用通常表示在一个信道上传输多路信号或数据流的过程和技术。 提示 报话机同一时刻只能有一边进行收或者发的单边通信，报话机需要遵守的通信流程如下： 说话方在完成时需要补上一句 “完毕”，随后放开通话按钮，从发送切换到接收状态，收听对...","head":[["meta",{"property":"og:url","content":"https://jiejaitt.tech/posts/go/1.html"}],["meta",{"property":"og:title","content":"Go语言通道的多路复用——同时处理接收和发送多个通道的数据"}],["meta",{"property":"og:description","content":"本文由 简悦 SimpRead 转码， 原文地址 c.biancheng.net 多路复用是通信和网络中的一个专业术语。多路复用通常表示在一个信道上传输多路信号或数据流的过程和技术。 提示 报话机同一时刻只能有一边进行收或者发的单边通信，报话机需要遵守的通信流程如下： 说话方在完成时需要补上一句 “完毕”，随后放开通话按钮，从发送切换到接收状态，收听对..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-14T02:11:56.000Z"}],["meta",{"property":"article:tag","content":"golang"}],["meta",{"property":"article:published_time","content":"2023-06-06T00:13:42.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-14T02:11:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Go语言通道的多路复用——同时处理接收和发送多个通道的数据\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-06-06T00:13:42.000Z\\",\\"dateModified\\":\\"2023-06-14T02:11:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"JIeJaitt\\",\\"url\\":\\"https://jiejaitt.tech\\"}]}"]]},"headers":[],"git":{"createdTime":1685982478000,"updatedTime":1686708716000,"contributors":[{"name":"JIeJaitt","email":"498938874@qq.com","commits":4}]},"readingTime":{"minutes":2.86,"words":858},"filePathRelative":"posts/go/1.md","localizedDate":"2023年6月6日","excerpt":"<blockquote>\\n<p>本文由 <a href=\\"http://ksria.com/simpread/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">简悦 SimpRead</a> 转码， 原文地址 <a href=\\"http://c.biancheng.net/view/vip_7348.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">c.biancheng.net</a></p>\\n</blockquote>\\n<p>多路复用是通信和网络中的一个专业术语。多路复用通常表示在一个信道上传输多路信号或数据流的过程和技术。</p>","autoDesc":true}');export{r as comp,d as data};
