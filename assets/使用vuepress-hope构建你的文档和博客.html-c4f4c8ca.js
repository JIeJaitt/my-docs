import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,f as a}from"./app-177b86f0.js";const i={},c=a(`<h2 id="升级你的-vuepress-hope" tabindex="-1"><a class="header-anchor" href="#升级你的-vuepress-hope" aria-hidden="true">#</a> 升级你的 vuepress-hope</h2><p>我在升级vuepress的时候，出现了报错，最终发现还是源的设置问题，通过查看 GitHub issue，我通过修改源解决了问题，成功升级</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 重新设置源</span>
<span class="token function">pnpm</span> config <span class="token builtin class-name">set</span> registry https://registry.npmmirror.com

<span class="token comment"># 需要重新加载node_modules</span>
<span class="token function">pnpm</span> <span class="token function">install</span> 

<span class="token comment"># 升级vuepress</span>
<span class="token function">pnpm</span> dlx vp-update  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),t=[c];function l(o,p){return e(),n("div",null,t)}const u=s(i,[["render",l],["__file","使用vuepress-hope构建你的文档和博客.html.vue"]]);export{u as default};
