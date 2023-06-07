import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "如何使用",
      icon: "note",
      prefix: "demo/",
      link: "demo/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "文章",
      icon: "note",
      prefix: "posts/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "算法",
      icon: "note",
      prefix: "algorithm/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "开源",
      icon: "note",
      prefix: "source/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "项目",
      icon: "note",
      prefix: "project/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "网络",
      icon: "note",
      prefix: "network/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "文档",
      icon: "note",
      prefix: "build/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "日志",
      icon: "note",
      prefix: "logbook/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "期末",
      icon: "note",
      prefix: "ai/",
      collapsible: true,
      children: "structure",
    },
    "intro",
    "slides",
  ],
});
