module.exports = {
  base: "/norm/",
  title: "前端组",
  decription: "代码文档",
  plugins: {
    "@vuepress/back-to-top": true,
    // "@vuepress/pwa": {
    //   serviceWorker: true,
    //   updatePopup: {
    //     message: "新内容可用",
    //     buttonText: "Refresh",
    //   },
    // },
  },
  themeConfig: {
    search: true,
    searchMaxSuggestions: 10,
    smoothScroll: true,
    lastUpdated: "最后更新时间",
    activeHeaderLinks: true,
    displayAllHeaders: true,
    nav: [
      { text: "代码规范", link: "../web/" },
      { text: "TypeScript", link: "../typescript/" },
      { text: "CSS", link: "../css/" },
    ],
    sidebar: {
      "/web/": [
        {
          title: "JavaScript", // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: ["../web/", "../web/js", "../web/annotation"],
        },
        {
          title: "Vue",
          collapsable: false,
          sidebarDepth: 2,
          children: ["../web/vue", "../web/css"],
        },
      ],
      "/typescript/": [
        {
          title: "入门文档",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            "../typescript/",
            "../typescript/introduction",
            "../typescript/start",
          ],
        },
      ],
      "/css/": [
        {
          title: "CSS",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            "../css/",
            "../css/animation",
          ],
        },
      ],
    },
  },
  extraWatchFiles: [], // 监听文件时时更新
};
