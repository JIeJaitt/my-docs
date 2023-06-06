import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

const MR_HOPE_AVATAR =
  '<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient gradientTransform="matrix(.2478 .78133 -2.54797 .63622 910.35 281.58)" gradientUnits="userSpaceOnUse" id="a" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".75" stop-color="#e33939"/><stop offset=".998" stop-color="#fff"/></linearGradient><linearGradient gradientTransform="matrix(.13814 .80797 2.55599 -.6032 34.087 494.369)" gradientUnits="userSpaceOnUse" id="b" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".815" stop-color="#e33939"/><stop offset="1" stop-color="#fff"/></linearGradient></defs><path d="M135.637 588.067c-48.891-201.334 74.605-404.162 275.837-453.028 201.233-48.866 403.998 74.734 452.889 276.068 48.892 201.335-74.606 404.162-275.838 453.029-201.233 48.866-403.997-74.734-452.888-276.069Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M596.076 197.044c-3.342-56.09 56.897-77.831 89.017-51.361m-410.65 128.819c-22.753-51.377-86.256-43.07-102.659-4.816" fill="none" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M833.568 288.02c.05 18.046-12.584 30.699-21.346 32.211-8.762 1.512-17.031-1.099-18.584-1.341 0 0-61.363-6.103-105.627 6.921-44.265 13.026-87.04 47.387-94.637 51.892-6.627 3.928-29.112 7.697-44.462-12.938-15.351-20.636.024-41.526.024-41.526s12.685-18.279 40.771-35.123c28.088-16.844 24.624-13.226 52.326-25.696 15.247-6.865 43.319-14.186 67.429-17.069 25.193-3.011 46.348-1.384 57.673.769 22.165 4.212 28.632 5.93 39.169 9.229 12.451 3.898 27.214 14.516 27.264 32.671Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M558.351 345.632c-3.458-14.237 5.214-28.566 19.367-32.003 14.154-3.437 28.43 5.32 31.887 19.557 3.458 14.238-5.212 28.567-19.367 32.004-14.152 3.437-28.43-5.319-31.887-19.558Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M220.249 483.416c46.81-11.689 91.323-.467 99.42 25.064 8.098 25.532-23.286 55.706-70.097 67.393-46.811 11.689-91.323.467-99.42-25.064-8.097-25.532 23.286-55.706 70.097-67.393Z" fill="url(#a)" fill-rule="evenodd" opacity=".261"/><path d="M739.9 357.226c-46.959 11.082-81.367 41.469-76.853 67.871 4.514 26.402 46.241 38.821 93.198 27.738 46.958-11.081 81.366-41.467 76.853-67.869-4.514-26.403-46.241-38.821-93.198-27.74Z" fill="url(#b)" fill-rule="evenodd" opacity=".261"/><path d="M400.934 398.917c-.599 18.034-13.681 30.218-22.494 31.409-8.812 1.192-16.982-1.716-18.526-2.014 0 0-61.109-8.334-105.819 3.07-44.709 11.404-88.696 44.181-96.452 48.406-6.763 3.683-29.372 6.632-43.972-14.546-14.6-21.18 1.519-41.494 1.519-41.494s13.335-17.803 42.013-33.612c28.677-15.809 25.085-12.319 53.222-23.772 15.484-6.304 43.803-12.598 68.005-14.6 25.288-2.093 46.373.305 57.616 2.867 22 5.016 28.401 6.968 38.813 10.649 12.304 4.348 26.677 15.496 26.075 33.637Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M129.05 445.546c-3.458-14.239 5.213-28.566 19.367-32.003 14.153-3.437 28.429 5.318 31.887 19.557 3.458 14.238-5.213 28.566-19.367 32.003-14.153 3.437-28.43-5.318-31.887-19.557Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M424.381 696.386s64.427 13.646 101.996 5.757C640.653 678.146 690.8 521.894 690.8 521.894" fill="none" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M796.04 666.774s-10.734-44.165-41.405-11.348c-9.681 10.359-10.438 40.604-28.217 81.89-15.942 37.02-39.564 60.728-42.938 76.063-3.374 15.335.451 35.992 26.352 41.537 25.902 5.545 41.967-23.381 41.967-23.381l44.241-164.761Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M793.337 664.734c-37.075 160.045-51.73 163.145-40.343 184.845 11.387 21.701 51.417 33.716 71.876-7.313 6.734-13.505-1.31-43.317-1.511-78.077-.307-53.06 16.865-86.111 10.403-98.1-15.332-28.452-39.377-5.875-40.425-1.355Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/></svg>';
const  MR_SAKURA =
  '<svg t="1685926608821" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="901" id="mx_n_1685926608823" width="200" height="200"><path d="M511.647 516.821m-450 0a450 450 0 1 0 900 0 450 450 0 1 0-900 0Z" fill="#FFBDBD" p-id="902"></path><path d="M725.997 542.34c68.496-22.256 103.965-61.99 121.268-105.916-22.534-10.632-38.477-23.387-38.477-23.387s5.739-20.921 18.508-43.561c-39.623-24.914-93.883-41.807-163.682-19.128-37.446 12.167-66.625 39.783-87.982 67.998 19.952-28.873 36.831-64.805 36.831-103.756 0-74.261-28.522-120.873-66.684-150.822-17.099 18.19-34.203 29.442-34.203 29.442s-16.155-10.629-32.76-27.925c-35.725 29.999-68.225 76.287-68.225 149.305 0 39.373 17.248 75.658 37.482 104.689-21.295-27.898-50.251-55.054-87.297-67.091-71.514-23.236-125.102-9.898-165.557 17.842 10.626 20.353 15.445 37.914 15.445 37.914s-14.153 11.321-34.636 21.523c17.039 44.342 50.944 91.506 122.366 114.712 37.426 12.16 77.241 6.981 111.091-3.28-33.096 11.634-67.845 30.78-90.727 62.275-43.228 59.499-47.883 113.5-35.079 159.859 21.414-3.33 38.222-2.549 38.222-2.549s6.93 18.387 10.166 42.419c48.112-1.893 104.903-18.989 150.008-81.072 23.143-31.854 30.516-71.346 31.211-106.725 0.83 35.086 8.294 74.076 31.189 105.588 42.066 57.899 90.469 79.453 137.316 82.55 3.372-22.643 9.769-39.613 9.769-39.613s21.878-1.015 47.512 4.216c12.563-46.056 13.208-104.578-31.28-165.811-23.108-31.806-58.321-51.02-91.709-62.619 33.596 10.025 72.923 14.942 109.914 2.923zM571.72 460.537c4.801-2.772 10.94-1.127 13.711 3.674 2.772 4.801 1.127 10.94-3.674 13.711-4.562 2.634-10.327 1.273-13.268-2.988l-49.783 28.742-0.813-1.408 49.782-28.742c-2.222-4.677-0.519-10.354 4.045-12.989z m-31.125-23.712c2.772-4.801 8.911-6.446 13.711-3.674s6.446 8.911 3.674 13.711c-2.634 4.562-8.306 6.266-12.984 4.046l-28.535 49.424-1.408-0.813 28.535-49.423c-4.265-2.939-5.628-8.707-2.993-13.271zM511.76 421.88c5.543 0 10.037 4.494 10.037 10.037 0 5.268-4.061 9.58-9.221 9.996v57.031h-1.626v-57.031c-5.164-0.413-9.228-4.726-9.228-9.997 0.001-5.542 4.495-10.036 10.038-10.036z m-42.401 11.361c4.801-2.772 10.94-1.127 13.711 3.674 2.634 4.562 1.273 10.327-2.988 13.268l28.528 49.413-1.408 0.813-28.528-49.413c-4.679 2.224-10.355 0.521-12.99-4.043-2.77-4.802-1.125-10.94 3.675-13.712z m-31.06 31.125c2.772-4.801 8.911-6.446 13.711-3.674 4.562 2.634 6.266 8.306 4.046 12.984l49.763 28.731-0.803 1.392v0.022l-49.773-28.736c-2.94 4.265-8.707 5.628-13.271 2.993-4.799-2.772-6.444-8.911-3.673-13.712z m-11.335 42.486c0-5.544 4.494-10.037 10.037-10.037 5.268 0 9.58 4.06 9.996 9.221h58.02v1.451l0.101 0.175h-58.121c-0.413 5.164-4.726 9.228-9.997 9.228-5.543-0.001-10.036-4.495-10.036-10.038z m25.136 46.135c-4.801 2.772-10.94 1.127-13.711-3.674-2.772-4.801-1.127-10.94 3.674-13.711 4.562-2.634 10.327-1.273 13.268 2.988l50.733-29.291 0.797 1.381 0.031 0.018-50.748 29.3c2.224 4.678 0.521 10.354-4.044 12.989z m31.126 23.712c-2.772 4.801-8.911 6.446-13.711 3.674-4.801-2.772-6.446-8.911-3.674-13.711 2.634-4.562 8.306-6.266 12.984-4.046l29.498-51.092 1.408 0.813-29.498 51.092c4.265 2.939 5.628 8.706 2.993 13.27zM512 591.709c-5.543 0-10.037-4.494-10.037-10.037 0-5.268 4.061-9.58 9.221-9.996v-59.152h1.626v59.152c5.164 0.413 9.228 4.726 9.228 9.997-0.001 5.542-4.495 10.036-10.038 10.036z m42.461-11.425c-4.801 2.772-10.94 1.127-13.711-3.674-2.634-4.562-1.273-10.327 2.988-13.268l-29.504-51.103 1.408-0.813 29.504 51.103c4.679-2.224 10.355-0.521 12.99 4.043 2.771 4.801 1.126 10.94-3.675 13.712z m31.06-31.126c-2.772 4.801-8.911 6.446-13.711 3.674-4.562-2.634-6.266-8.306-4.046-12.984l-50.752-29.302 0.813-1.408 50.752 29.302c2.94-4.265 8.707-5.628 13.271-2.993 4.8 2.771 6.445 8.91 3.673 13.711z m1.299-32.448c-5.268 0-9.58-4.061-9.996-9.221h-58.047l0.002-0.003v-1.623h58.045c0.413-5.164 4.726-9.228 9.997-9.228 5.544 0 10.037 4.494 10.037 10.037-0.001 5.544-4.495 10.038-10.038 10.038z" fill="#BA0505" p-id="903"></path></svg>';

export default hopeTheme({
  hostname: "https://jiejaitt.tech",

  author: {
    name: "JIeJaitt",
    url: "https://jiejaitt.tech",
  },
  // 设置图标资源
  // https://theme-hope.vuejs.press/zh/guide/interface/icon.html#%E8%AE%BE%E7%BD%AE%E5%9B%BE%E6%A0%87%E8%B5%84%E6%BA%90
  iconAssets: "iconfont", 

  logo: "/logo.svg",

  repo: "jiejaitt/jiejaitt.github.io",

  repoDisplay: true,

  docsDir: "docs",

  blog: {
    medias: {
      // Baidu: "https://example.com",
      BiliBili: "https://space.bilibili.com/601622742",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      Email: "mailto:jiejaitt@foxmail.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      Gitee: "https://gitee.com/jiejaitt",
      GitHub: "https://github.com/jiejaitt",
      Gitlab: "https://example.com",
      Gmail: "mailto:jiejaitt@gmail.com",
      Instagram: "https://example.com",
      Lark: "https://example.com",
      Lines: "https://example.com",
      Linkedin: "https://example.com",
      Pinterest: "https://example.com",
      Pocket: "https://example.com",
      QQ: "https://example.com",
      Qzone: "https://example.com",
      Reddit: "https://example.com",
      Rss: "https://example.com",
      Steam: "https://example.com",
      Twitter: "https://example.com",
      Wechat: "https://example.com",
      Weibo: "https://example.com",
      Whatsapp: "https://example.com",
      Youtube: "https://www.youtube.com/@jiejaitt",
      Zhihu: "https://example.com",
      MrHope: ["https://mrhope.site", MR_HOPE_AVATAR],
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "默认页脚",

      displayFooter: true,

      blog: {
        name: "JIeJaitt",
        avatar: "https://pic.imgdb.cn/item/6476f9c6f024cca173b042c0.jpg",
        description: "a student",
        intro: "/intro.html",
        roundAvatar: true,
      },

      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: true,

    comment: {
      // @ts-expect-error: You should generate and use your own comment service
      provider: "Giscus",
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a PWA
    // 桌面 web 应用
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
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
  },
});
