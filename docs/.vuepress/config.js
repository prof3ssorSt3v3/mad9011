module.exports = {
  title: "MAD9011",
  description: "Mobile Design Fundamentals",
  base: "/f2023/", //used as the root location of the site (repo name)
  // then we can <img :src="$withBase('/foo.png')" alt="foo">
  markdown: {
    lineNumbers: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@alias": "path/to/some/dir",
        "@root": "/f2023",
        //![Image from alias](~@alias/image.png)
        // ![Image alt text](~@root/modules/week3/myimg.jpg)
        // images inside /docs/.vuepress/public will be copied to repo root
      },
    },
  },
  // themeEntry or theme?: '@vuepress/theme-default',
  plugins: [
    "@vuepress/back-to-top",
    [
      "@vuepress/search",
      {
        searchMaxSuggestions: 10,
      },
    ],
    "@vuepress/last-updated",
  ],
  themeConfig: {
    lastUpdated: "Last Updated",
    //displayAllHeaders: true,
    nextLinks: true,
    prevLinks: true,
    serviceWorker: {
      updatePopup: {
        message: "New content is available.",
        buttonText: "Refresh",
      },
    },
    nav: [
      {
        text: "Overview",
        link: "/overview/",
      },
      {
        text: "Deliverables",
        link: "/deliverables/",
      },
      {
        text: "Modules",
        link: "/modules/gettingstarted/",
      },
    ],
    sidebar: [
      {
        title: "Content Modules",
        collapsable: true,
        sidebarDepth: 2,
        children: [
          "/modules/gettingstarted/",
          "/modules/week1/",
          "/modules/week2/",
          "/modules/week3/",
          "/modules/week4/",
          "/modules/week5/",
          "/modules/week6/",
          "/modules/week7/",
          "/modules/week8/",
        ],
      },
      {
        title: "Deliverables",
        collapsable: true,
        sidebarDepth: 2,
        children: ["/deliverables/"],
      },
    ],
  },
};
