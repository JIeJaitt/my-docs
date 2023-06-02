---
title: simpread-TCP和Udp的区别是什么？
icon: edit
date: 2022-01-01
category:
  - 网络编程
tag:
  - TCP
  - UDP
---

# simpread-TCP和Udp的区别是什么？

一张图看懂TCP与UDP的区别，秒懂！

![][img-0]

哈哈，上面的图，大家看个乐就好，接下来，我从 7 个方面说说 **TCP 和 UDP 区别。**

_1. 连接_

*   TCP 是面向连接的传输层协议，传输数据前先要建立连接。
*   UDP 是不需要连接，即刻传输数据。

_2. 服务对象_

*   TCP 是一对一的两点服务，即一条连接只有两个端点。
*   UDP 支持一对一、一对多、多对多的交互通信

_3. 可靠性_

*   TCP 是可靠交付数据的，数据可以无差错、不丢失、不重复、按需到达。
*   UDP 是尽最大努力交付，不保证可靠交付数据。

_4. 拥塞控制、流量控制_

*   TCP 有拥塞控制和[流量控制机制](https://www.zhihu.com/search?q=%E6%B5%81%E9%87%8F%E6%8E%A7%E5%88%B6%E6%9C%BA%E5%88%B6&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2619299969%7D)，保证数据传输的安全性。
*   UDP 则没有，即使网络非常拥堵了，也不会影响 UDP 的发送速率。

_5. 首部开销_

*   TCP 首部长度较长，会有一定的开销，首部在没有使用「选项」字段时是 `20` 个字节，如果使用了「选项」字段则会变长的。
*   UDP 首部只有 8 个字节，并且是固定不变的，开销较小。

_6. 传输方式_

*   TCP 是[流式传输](https://www.zhihu.com/search?q=%E6%B5%81%E5%BC%8F%E4%BC%A0%E8%BE%93&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2619299969%7D)，没有边界，但保证顺序和可靠。
*   UDP 是一个包一个包的发送，是有边界的，但可能会丢包和乱序。

_7. 分片不同_

*   TCP 的数据大小如果大于 MSS 大小，则会在传输层进行分片，目标主机收到后，也同样在传输层组装 TCP 数据包，如果中途丢失了一个分片，只需要传输丢失的这个分片。
*   UDP 的数据大小如果大于 MTU 大小，则会在 IP 层进行分片，目标主机收到后，在 IP 层组装完数据，接着再传给传输层。

**TCP 和 UDP 应用场景：**

由于 TCP 是[面向连接](https://www.zhihu.com/search?q=%E9%9D%A2%E5%90%91%E8%BF%9E%E6%8E%A5&search_source=Entity&hybrid_search_source=Entity&hybrid_search_extra=%7B%22sourceType%22%3A%22answer%22%2C%22sourceId%22%3A2619299969%7D)，能保证数据的可靠性交付，因此经常用于：

*   `FTP` 文件传输；
*   HTTP / HTTPS；

由于 UDP 面向无连接，它可以随时发送数据，再加上UDP本身的处理既简单又高效，因此经常用于：

*   包总量较少的通信，如 `DNS` 、`SNMP` 等；
*   视频、音频等多媒体通信；
*   广播通信；

更多图解网络文章
--------

![][img-1]

*   **网络基础篇**

*   [TCP/IP 网络模型有哪几层？](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/1_base/tcp_ip_model.html)
*   [键入网址到网页显示，期间发生了什么？](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/1_base/what_happen_url.html)
*   [Linux 系统是如何收发网络包的？](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/1_base/how_os_deal_network_package.html)

*   **HTTP 篇**

*   [HTTP 常见面试题](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/2_http/http_interview.html)
*   [HTTP/1.1如何优化？](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/2_http/http_optimize.html)
*   [HTTPS RSA 握手解析](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/2_http/https_rsa.html)
*   [HTTPS ECDHE 握手解析](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/2_http/https_ecdhe.html)
*   [HTTPS 如何优化？](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/2_http/https_optimize.html)
*   [HTTP/2 牛逼在哪？](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/2_http/http2.html)
*   [HTTP/3 强势来袭](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/2_http/http3.html)
*   [既然有 HTTP 协议，为什么还要有 RPC？](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/2_http/http_rpc.html)

*   **TCP 篇**

*   [TCP 三次握手与四次挥手面试题](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/3_tcp/tcp_interview.html)
*   [TCP 重传、滑动窗口、流量控制、拥塞控制](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/3_tcp/tcp_feature.html)
*   [TCP 实战抓包分析](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/3_tcp/tcp_tcpdump.html)
*   [TCP 半连接队列和全连接队列](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/3_tcp/tcp_queue.html)
*   [如何优化 TCP?](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/3_tcp/tcp_optimize.html)
*   [如何理解是 TCP 面向字节流协议？](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/3_tcp/tcp_stream.html)
*   [为什么 TCP 每次建立连接时，初始化序列号都要不一样呢？](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/3_tcp/isn_deff.html)
*   [SYN 报文什么时候情况下会被丢弃？](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/3_tcp/syn_drop.html)
*   [四次挥手中收到乱序的 FIN 包会如何处理？](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/3_tcp/out_of_order_fin.html)
*   [在 TIME_WAIT 状态的 TCP 连接，收到 SYN 后会发生什么？](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/3_tcp/time_wait_recv_syn.html)
*   [TCP 连接，一端断电和进程崩溃有什么区别？](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/3_tcp/tcp_down_and_crash.html)
*   [拔掉网线后， 原本的 TCP 连接还存在吗？](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/3_tcp/tcp_unplug_the_network_cable.html)
*   [tcp_tw_reuse 为什么默认是关闭的？](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/3_tcp/tcp_tw_reuse_close.html)
*   [HTTPS 中 TLS 和 TCP 能同时握手吗？](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/3_tcp/tcp_tls.html)
*   [TCP Keepalive 和 HTTP Keep-Alive 是一个东西吗？](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/3_tcp/tcp_http_keepalive.html)
*   [TCP 有什么缺陷？](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/3_tcp/tcp_problem.html)
*   [如何基于 UDP 协议实现可靠传输？](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/3_tcp/quic.html)
*   [TCP 和 UDP 可以使用同一个端口吗？](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/3_tcp/port.html)
*   [服务端没有 listen，客户端发起连接建立，会发生什么？](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/3_tcp/tcp_no_listen.html)
*   [没有 accpet，可以建立 TCP 连接吗？](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/3_tcp/tcp_no_accpet.html)
*   [用了 TCP 协议，数据一定不会丢吗？](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/3_tcp/tcp_drop.html)

*   **IP 篇**

*   [IP 基础知识全家桶](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/4_ip/ip_base.html)
*   [ping 的工作原理](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/4_ip/ping.html)

*   **学习心得**

*   [计算机网络怎么学？](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/5_learn/learn_network.html)
*   [画图经验分享](https://link.zhihu.com/?target=https%3A//xiaolincoding.com/network/5_learn/draw.html)
