import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as e,e as a}from"./app-DDnEt001.js";const t={},n=a(`<h2 id="git-拉取gitee仓库报错-fatal-unable-to-access-failed-to-connect-to-127-0-0-1-port-1080-connection-refused" tabindex="-1"><a class="header-anchor" href="#git-拉取gitee仓库报错-fatal-unable-to-access-failed-to-connect-to-127-0-0-1-port-1080-connection-refused"><span>Git 拉取Gitee仓库报错：“fatal: unable to access &#39;&#39;&quot;: Failed to connect to 127.0.0.1 port 1080: Connection refused”</span></a></h2><div class="language-zsh line-numbers-mode" data-highlighter="shiki" data-ext="zsh" data-title="zsh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">➜</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  my-docs</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> git:</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">✗</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> brew</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> update</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">fatal:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> unable</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> access</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;https://gitee.com/cunkai/homebrew-services.git/&#39;:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Unsupported</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> proxy</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> syntax</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;&lt;127.0.0.1&gt;:&lt;7890&gt;&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Error:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> Fetching</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /opt/homebrew/Library/Taps/homebrew/homebrew-services</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> failed!</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决办法</p><div class="language-zsh line-numbers-mode" data-highlighter="shiki" data-ext="zsh" data-title="zsh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 本地查看是否 Git 使用了代理</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> http.proxy</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 如果有代理，取消代理</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --global</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --unset</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> http.proxy</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><div class="language-zsh line-numbers-mode" data-highlighter="shiki" data-ext="zsh" data-title="zsh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">➜</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">  my-docs</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> git:</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">✗</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> brew</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> update</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Already</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> up-to-date.</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="把mac的终端改为oh-my-zsh之后输入brew命令输出zsh-command-not-found-brew。" tabindex="-1"><a class="header-anchor" href="#把mac的终端改为oh-my-zsh之后输入brew命令输出zsh-command-not-found-brew。"><span>把mac的终端改为oh-my-zsh之后输入brew命令输出zsh: command not found: brew。</span></a></h2><p>确认 Homebrew 安装：请确保已经正确安装了 Homebrew。你可以尝试在终端中运行 <code>brew</code> 命令来验证。如果没有正确安装，你可以按照 Homebrew 的官方文档进行安装步骤。</p><p>检查环境变量：Oh My Zsh 可能没有正确加载你的环境变量。你可以检查 <code>~/.zshrc</code> 文件，确保以下几行代码存在：</p><div class="language-zsh line-numbers-mode" data-highlighter="shiki" data-ext="zsh" data-title="zsh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;/opt/homebrew/bin:</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">$PATH</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;/opt/homebrew/sbin:</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">$PATH</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 修改了 ~/.zshrc 文件之后，需要刷新终端</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 也可以关闭终端窗口并重新打开</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ~/.zshrc</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我的brew安装目录是/opt/homebrew</p>`,11),h=[n];function l(r,k){return e(),s("div",null,h)}const o=i(t,[["render",l],["__file","GitCloneGiteeError.html.vue"]]),c=JSON.parse(`{"path":"/logbook/GitCloneGiteeError.html","title":"包管理工具 Mac Homebrew 使用经验","lang":"zh-CN","frontmatter":{"title":"包管理工具 Mac Homebrew 使用经验","icon":"article","date":"2023-05-30T10:53:46.000Z","category":["日志"],"tag":["日志"],"description":"Git 拉取Gitee仓库报错：“fatal: unable to access ''\\": Failed to connect to 127.0.0.1 port 1080: Connection refused” 解决办法 结果 把mac的终端改为oh-my-zsh之后输入brew命令输出zsh: command not found: brew。 确...","head":[["meta",{"property":"og:url","content":"https://jiejaitt.tech/logbook/GitCloneGiteeError.html"}],["meta",{"property":"og:title","content":"包管理工具 Mac Homebrew 使用经验"}],["meta",{"property":"og:description","content":"Git 拉取Gitee仓库报错：“fatal: unable to access ''\\": Failed to connect to 127.0.0.1 port 1080: Connection refused” 解决办法 结果 把mac的终端改为oh-my-zsh之后输入brew命令输出zsh: command not found: brew。 确..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-15T14:03:24.000Z"}],["meta",{"property":"article:author","content":"JIeJaitt"}],["meta",{"property":"article:tag","content":"日志"}],["meta",{"property":"article:published_time","content":"2023-05-30T10:53:46.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-15T14:03:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"包管理工具 Mac Homebrew 使用经验\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-30T10:53:46.000Z\\",\\"dateModified\\":\\"2023-06-15T14:03:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"JIeJaitt\\",\\"url\\":\\"https://jiejaitt.tech\\"}]}"]]},"headers":[{"level":2,"title":"Git 拉取Gitee仓库报错：“fatal: unable to access ''\\": Failed to connect to 127.0.0.1 port 1080: Connection refused”","slug":"git-拉取gitee仓库报错-fatal-unable-to-access-failed-to-connect-to-127-0-0-1-port-1080-connection-refused","link":"#git-拉取gitee仓库报错-fatal-unable-to-access-failed-to-connect-to-127-0-0-1-port-1080-connection-refused","children":[]},{"level":2,"title":"把mac的终端改为oh-my-zsh之后输入brew命令输出zsh: command not found: brew。","slug":"把mac的终端改为oh-my-zsh之后输入brew命令输出zsh-command-not-found-brew。","link":"#把mac的终端改为oh-my-zsh之后输入brew命令输出zsh-command-not-found-brew。","children":[]}],"git":{"createdTime":1686837804000,"updatedTime":1686837804000,"contributors":[{"name":"JIeJaitt","email":"498938874@qq.com","commits":1}]},"readingTime":{"minutes":0.97,"words":292},"filePathRelative":"logbook/GitCloneGiteeError.md","localizedDate":"2023年5月30日","excerpt":"<h2>Git 拉取Gitee仓库报错：“fatal: unable to access ''\\": Failed to connect to 127.0.0.1 port 1080: Connection refused”</h2>\\n<div class=\\"language-zsh line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"zsh\\" data-title=\\"zsh\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">➜</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">  my-docs</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> git:</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">main</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">) </span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">✗</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> brew</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> update</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">fatal:</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> unable</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> to</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> access</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> 'https://gitee.com/cunkai/homebrew-services.git/':</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> Unsupported</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> proxy</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> syntax</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> in</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> '&lt;127.0.0.1&gt;:&lt;7890&gt;'</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">Error:</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> Fetching</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> /opt/homebrew/Library/Taps/homebrew/homebrew-services</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> failed!</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{o as comp,c as data};
