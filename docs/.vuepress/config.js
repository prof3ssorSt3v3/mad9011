module.exports = {
  title: 'MAD9011',
  description: 'Mobile Design Fundamentals',
  base: '/F2021/', //used as the root location of the site (repo name)
  // then we can <img :src="$withBase('/foo.png')" alt="foo">
  markdown: {
    lineNumbers: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir',
        '@root': '/F2020',
        //![Image from alias](~@alias/image.png)
        // ![Image alt text](~@root/modules/week3/myimg.jpg)
        // images inside /docs/.vuepress/public will be copied to repo root
      },
    },
  },
  theme: '@vuepress/theme-default',
  plugins: [
    '@vuepress/back-to-top',
    [
      '@vuepress/search',
      {
        searchMaxSuggestions: 10,
      },
    ],
    '@vuepress/last-updated',
  ],
  themeConfig: {
    lastUpdated: 'Last Updated',
    //displayAllHeaders: true,
    nextLinks: true,
    prevLinks: true,
    serviceWorker: {
      updatePopup: {
        message: 'New content is available.',
        buttonText: 'Refresh',
      },
    },
    nav: [
      {
        text: 'Overview',
        link: '/overview/',
      },
      {
        text: 'Deliverables',
        link: '/assignments/',
      },
      {
        text: 'Modules',
        link: '/modules/week1/',
      },
      {
        text: 'Resources',
        link: '/resources/',
      },
    ],
    sidebar: [
      {
        title: 'Content Modules',
        collapsable: true,
        sidebarDepth: 2,
        children: [
          '/modules/week1/',
          '/modules/week2/',
          '/modules/week3/',
          '/modules/week4/',
          '/modules/week5/',
          '/modules/week6/',
          '/modules/week7/',
          '/modules/week8/',
          '/modules/week9/',
          '/modules/week10/',
          '/modules/week11/',
          '/modules/week12/',
          '/modules/week13/',
          '/modules/week14/',
          '/modules/week15/',
        ],
      },
      {
        title: 'Deliverables',
        collapsable: true,
        sidebarDepth: 2,
        children: ['/assignments/'],
      },
    ],
  },
};
