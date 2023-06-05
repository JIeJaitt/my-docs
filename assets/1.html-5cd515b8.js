import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as d,c as t,a as e,b as n,d as l,f as c}from"./app-9264c787.js";const r={},v={href:"http://ksria.com/simpread/",target:"_blank",rel:"noopener noreferrer"},u={href:"http://c.biancheng.net/view/vip_7348.html",target:"_blank",rel:"noopener noreferrer"},o=c(`<blockquote><p>多路复用是通信和网络中的一个专业术语。多路复用通常表示在一个信道上传输多路信号或数据流的过程和技术。 提示 报话机同一时刻只能有一边进行收或者发的单边通信，报话机需要</p></blockquote><p>多路复用是通信和网络中的一个专业术语。多路复用通常表示在一个信道上传输多路信号或数据流的过程和技术。</p><h4 id="提示" tabindex="-1"><a class="header-anchor" href="#提示" aria-hidden="true">#</a> 提示</h4><p>报话机同一时刻只能有一边进行收或者发的单边通信，报话机需要遵守的通信流程如下：</p><ul><li>说话方在完成时需要补上一句 “完毕”，随后放开通话按钮，从发送切换到接收状态，收听对方说话。</li><li>收听方在听到对方说 “完毕” 时，按下通话按钮，从接收切换到发送状态，开始说话。</li></ul><p>电话可以在说话的同时听到对方说话，所以电话是一种多路复用的设备，一条通信线路上可以同时接收或者发送数据。同样的，网线、光纤也都是基于多路复用模式来设计的，网线、光纤不仅可支持同时收发数据，还支持多个人同时收发数据。</p><p>在使用通道时，想同时接收多个通道的数据是一件困难的事情。通道在接收数据时，如果没有数据可以接收将会发生阻塞。虽然可以使用如下模式进行遍历，但运行性能会非常差。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for{
    // 尝试接收ch1通道
    data, ok := &lt;-ch1
    // 尝试接收ch2通道
    data, ok := &lt;-ch2
    // 接收后续通道
    …
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ch := make(chan int, 1)
for {
    select {
        case ch &lt;- 0:
        case ch &lt;- 1:
    }
    i := &lt;-ch
    fmt.Println(&quot;Value received:&quot;, i)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>for{
    // 尝试接收ch1通道
    data, ok := &lt;-ch1
    // 尝试接收ch2通道
    data, ok := &lt;-ch2
    // 接收后续通道
    …
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Go 语言中提供了 select 关键字，可以同时响应多个通道的操作。select 的用法与 switch 语句非常类似，由 select 开始一个新的选择块，每个选择条件由 case 语句来描述。</p><p>与 switch 语句可以选择任何可使用相等比较的条件相比，select 有比较多的限制，其中最大的一条限制就是每个 case 语句里必须是一个 IO 操作，大致结构如下：</p><p>select{<br>     case 操作 1:<br>         响应操作 1<br>     case 操作 2:<br>         响应操作 2<br>     …<br>     default:<br>         没有操作情况<br> }</p><ul><li><p>操作 1、操作 2：包含通道收发语句，请参考下表。</p><table><caption>select 多路复用中可以接收的样式</caption><tbody><tr><th>操   作</th><th>语句示例</th></tr><tr><td>接收任意数据</td><td>case &lt;- ch;</td></tr><tr><td>接收变量</td><td>case d :=  &lt;- ch;</td></tr><tr><td>发送数据</td><td>case ch &lt;- 100;</td></tr></tbody></table></li><li><p>响应操作 1、响应操作 2：当操作发生时，会执行对应 case 的响应操作。</p></li><li><p>default：当没有任何操作时，默认执行 default 中的语句。</p></li></ul><p>可以看出，select 不像 switch，后面并不带判断条件，而是直接去查看 case 语句。每个 case 语句都必须是一个面向 channel 的操作。</p><p>基于此功能，我们可以实现一个有趣的程序：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>复制纯文本复制

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ch := make(chan int, 1)for {    select {        case ch &lt;- 0:        case ch &lt;- 1:    }    i := &lt;-ch    fmt.Println(&quot;Value received:&quot;, i)}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ch := make(chan int, 1)
for {
    select {
        case ch &lt;- 0:
        case ch &lt;- 1:
    }
    i := &lt;-ch
    fmt.Println(&quot;Value received:&quot;, i)
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>能看明白这段代码的含义吗？其实很简单，这个程序实现了一个随机向 ch 中写入一个 0 或者 1 的过程。当然，这是个死循环。关于 select 的详细使用方法，请参考下节的示例。</p>`,20);function m(b,h){const i=s("ExternalLinkIcon");return d(),t("div",null,[e("blockquote",null,[e("p",null,[n("本文由 "),e("a",v,[n("简悦 SimpRead"),l(i)]),n(" 转码， 原文地址 "),e("a",u,[n("c.biancheng.net"),l(i)])])]),o])}const g=a(r,[["render",m],["__file","1.html.vue"]]);export{g as default};
