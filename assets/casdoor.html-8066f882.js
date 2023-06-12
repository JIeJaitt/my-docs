import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as a,c as l,a as n,b as e,d as s,f as d}from"./app-ec4ee638.js";const t={},c=n("p",null,"Casdoor：支持 OAuth 2.0、OIDC 和 SAML 的 UI 优先集中式身份验证/单点登录 (SSO) 平台，与 Casbin RBAC 和 ABAC 权限管理集成",-1),u={href:"https://casdoor.org/zh/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/casdoor/casdoor/tree/master",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2#authorization-grant",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/casdoor/casdoor/tree/master/",target:"_blank",rel:"noopener noreferrer"},g=d(`<ul><li>casdoor是一个基于Go语言和React的集中式身份认证/授权平台，支持OAuth 2.0、LDAP、CAS、SAML、OIDC等协议。</li><li>casdoor的项目目录大致如下：</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>casdoor
├── .github // GitHub相关的目录，存放工作流和贡献指南等
├── ai // AI相关的目录，存放OpenAI ChatGPT的接口和配置等
├── authz // 授权相关的目录，存放授权逻辑和Casbin的封装和配置等
├── captcha // 验证码相关的目录，存放验证码生成和验证的逻辑等
├── conf // 配置文件目录，存放应用配置文件和配置文件解析和加载等
├── controllers // 控制器目录，处理HTTP请求和响应
│   ├── account.go // 账户相关的控制器
│   ├── application.go // 应用相关的控制器
│   ├── base.go // 基础控制器，定义公共方法和属性
│   ├── github.go // GitHub OAuth <span class="token number">2.0</span>相关的控制器
│   ├── google.go // Google OAuth <span class="token number">2.0</span>相关的控制器
│   ├── index.go // 首页控制器
│   ├── ldap.go // LDAP相关的控制器
│   ├── oidc.go // OIDC相关的控制器
│   ├── organization.go // 组织相关的控制器
│   ├── provider.go // 提供者相关的控制器，封装不同协议的登录逻辑
│   ├── role.go // 角色相关的控制器
│   ├── user.go // 用户相关的控制器
│   └── wechat.go // 微信 OAuth <span class="token number">2.0</span>相关的控制器
├── models // 模型目录，定义数据结构和数据库操作
│   ├── account.go // 账户模型
│   ├── adapter.go // Casbin适配器和初始化函数等
│   ├── application.go // 应用模型
│   ├── organization.go // 组织模型
│   ├── role.go // 角色模型
│   ├── user.go // 用户模型
│   └── util.go // 工具函数
├── object // 对象目录，定义对象结构和方法
│   ├── object.go // 对象基类，定义公共方法和属性
│   └── provider.go // 提供者对象，封装不同协议的配置和方法
├── pp // Pretty Print相关的目录，存放格式化输出的工具函数等
├── routers // 路由目录，定义URL映射和过滤器等
│   └── router.go 
├── <span class="token function">service</span> // 服务目录，定义业务逻辑和第三方服务接口等
│   ├── email.go // 邮件服务接口
│   ├── phone.go // 手机服务接口
│   └── storage.go // 存储服务接口
├── static // 静态资源目录，存放前端文件和图片等（被忽略在GitHub上）
├── tests // 测试目录，存放单元测试和集成测试等（被忽略在GitHub上）
├── util // 工具目录，存放通用的工具函数和包等
├── views // 视图目录，存放模板文件等（被忽略在GitHub上）
├── go.mod // Go模块文件，定义项目依赖的第三方包等
├── go.sum // Go模块校验文件，记录项目依赖包的版本和哈希值等
└── main.go // 程序入口文件，初始化应用并启动服务等
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="controller层的user-go" tabindex="-1"><a class="header-anchor" href="#controller层的user-go" aria-hidden="true">#</a> controller层的user.go</h2>`,3);function h(p,_){const i=r("ExternalLinkIcon");return a(),l("div",null,[c,n("ul",null,[n("li",null,[n("a",u,[e("Casdoor docs"),s(i)])]),n("li",null,[n("a",v,[e("Casdoor GitHub"),s(i)])]),n("li",null,[n("a",b,[e("An Introduction to OAuth 2"),s(i)])])]),n("p",null,[e("我给你casdoor的GitHub仓库，请你根据这个仓库帮我总结casdoor的项目目录，不需要参考其他链接以形成误导："),n("a",m,[e("https://github.com/casdoor/casdoor/tree/master/"),s(i)])]),g])}const C=o(t,[["render",h],["__file","casdoor.html.vue"]]);export{C as default};
