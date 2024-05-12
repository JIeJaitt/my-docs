import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",

  // locales: {
  //   "/": {
  //     lang: "en-US",
  //     title: "Blog Demo",
  //     description: "A blog demo for vuepress-theme-hope",
  //   },
  //   "/zh/": {
  //     lang: "zh-CN",
  //     title: "博客演示",
  //     description: "vuepress-theme-hope 的博客演示",
  //   },
  // },

  theme,

  // Enable it with pwa
  shouldPrefetch: false,

  // https://v2.vuepress.vuejs.org/reference/bundler/vite.html
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),

});


