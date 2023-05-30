---
icon: edit
date: 2023-05-30 10:53:43
category:
  - 博客搭建
tag:
  - blog
  - vuepress
  - vuepress-hope
---

## 升级你的 vuepress-hope
我在升级vuepress的时候，出现了报错，最终发现还是源的设置问题，通过查看 GitHub issue，我通过修改源解决了问题，成功升级
```bash
# 重新设置源
pnpm config set registry https://registry.npmmirror.com

# 需要重新加载node_modules
pnpm install 

# 升级vuepress
pnpm dlx vp-update  
```