import type { Page } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";

import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

const hostname =
  process.env.HOSTNAME ?? "https://docs.jiejaitt.top";

export default hopeTheme(
  {
    hostname,

    author: {
      name: "JIeJaitt",
      url: "https://docs.jiejaitt.top",
    },

    logo: "https://theme-hope-assets.vuejs.press/logo.svg",

    repo: "jiejaitt/my-docs",

    docsDir: "demo/theme-blog/src",

    hotReload: true,

    blog: {
      medias: {
        Baidu: "https://baidu.com",
        BiliBili: "https://space.bilibili.com/601622742",
        Bitbucket: "https://example.com",
        Dingding: "https://example.com",
        Discord: "https://example.com",
        Dribbble: "https://example.com",
        Email: "mailto:jiejaitt@foxmail.com",
        Evernote: "https://example.com",
        Facebook: "https://example.com",
        Flipboard: "https://example.com",
        Gitee: "https://gitee.com/jiejaitt",
        GitHub: "https://github.com/jiejaitt",
        Gitlab: "https://gitlab.com/JIeJaitt",
        Gmail: "mailto:jiejaitt@gmail.com",
        Instagram: "https://example.com",
        Lark: "https://example.com",
        Lines: "https://example.com",
        Linkedin: "https://example.com",
        Pinterest: "https://example.com",
        Pocket: "https://example.com",
        QQ: "http://wpa.qq.com/msgrd?v=3&uin=498938874&site=qq&menu=yes",
        Qzone: "https://498938874.qzone.qq.com/",
        Reddit: "https://example.com",
        Rss: "https://example.com",
        Steam: "https://example.com",
        Twitter: "https://twitter.com/JIeJaitt",
        Telegram: "https://web.tel.onl",
        Wechat: "https://example.com",
        Weibo: "https://example.com",
        Whatsapp: "https://example.com",
        Youtube: "https://www.youtube.com/@jiejaitt",
        Zhihu: "https://www.zhihu.com/people/jiejaitt",
        VuePressThemeHope: {
          icon: "https://theme-hope-assets.vuejs.press/logo.svg",
          link: "https://theme-hope.vuejs.press",
        },
      },
    },

    locales: {
      "/": {
        navbar: zhNavbar,
        sidebar: zhSidebar,
        footer: "默认页脚",
        displayFooter: true,
        blog: {
          name: "JIeJaitt",
          avatar: "https://pic.imgdb.cn/item/6476f9c6f024cca173b042c0.jpg",
          description: "a student",
          intro: "/intro.html",
        },
        blogLocales: {
          tutorial: "教程",
        },
        metaLocales: {
          editLink: "在 GitHub 上编辑此页",
        },
      },
    },

    encrypt: {
      config: {
        "/demo/encrypt.html": {
          hint: "Password: 1234",
          password: "1234",
        },
        "/zh/demo/encrypt.html": {
          hint: "Password: 1234",
          password: "1234",
        },
      },
    },

    markdown: {
      align: true,
      attrs: true,
      codeTabs: true,
      component: true,
      demo: true,
      figure: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      math: true,
      plantuml: true,
      revealjs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em") {
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
            }
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

      chartjs: true,
      echarts: true,
      flowchart: true,
      kotlinPlayground: true,
      markmap: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue", "unocss"],
      },
      sandpack: true,
      vuePlayground: true,
    },

    plugins: {
      blog: {
        type: [
          {
            key: "tutorial",
            filter: (page: Page): boolean =>
              Boolean(page.filePathRelative?.includes("demo/")),
            sorter: (pageA: Page, pageB: Page): number => {
              const a = String(pageA.frontmatter.date ?? "");
              const b = String(pageB.frontmatter.date ?? "");
              if (a === b) return 0;
              return a < b ? 1 : -1;
            },
            layout: "BlogType",
          },
        ],
      },

      comment: {
        provider: "Waline",
        serverURL: "https://waline-comment.vuejs.press",
      },

      components: {
        components: ["Badge", "VPCard"],
      },

      icon: {
        prefix: "fa6-solid:",
      },

      pwa: {
        favicon: "/favicon.ico",
        cacheHTML: true,
        cacheImage: true,
        appendBase: true,
        apple: {
          icon: "/assets/icon/apple-icon-152.png",
          statusBarColor: "black",
        },
        msTile: {
          image: "/assets/icon/ms-icon-144.png",
          color: "#ffffff",
        },
        manifest: {
          icons: [
            {
              src: "/assets/icon/chrome-mask-512.png",
              sizes: "512x512",
              purpose: "maskable",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-mask-192.png",
              sizes: "192x192",
              purpose: "maskable",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-192.png",
              sizes: "192x192",
              type: "image/png",
            },
          ],
          shortcuts: [
            {
              name: "Demo",
              // eslint-disable-next-line @typescript-eslint/naming-convention
              short_name: "Demo",
              url: "/demo/",
              icons: [
                {
                  src: "/assets/icon/guide-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
              ],
            },
          ],
        },
      },

      seo:
        hostname === "https://docs.jiejaitt.top"
          ? {}
          : { canonical: "https://docs.jiejaitt.top" },
    },
  },
  { custom: true },
);
