const SITE_METADATA = {
  title: 'Brian Blog - Software Engineer & Technical Lead',
  author: 'Bien (Brian) Pham',
  headerTitle: 'Brian Blog',
  description: 'A blog about software development, AI/ML integration, and game development by Bien (Brian) Pham',
  language: 'en-us',
  theme: 'system',
  siteUrl: 'https://brian-blog.vercel.app',
  siteRepo: 'https://github.com/bienpx224/brian-blog',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'bienpx224@gmail.com',
  github: 'https://github.com/bienpx224',
  linkedin: 'https://www.linkedin.com/in/brian-it',
  twitter: 'https://x.com/brian_pham224',
  locale: 'en-US',
  stickyNav: true,
  analytics: {
    plausibleDataDomain: '',
    simpleAnalytics: false,
    umamiWebsiteId: '',
    googleAnalyticsId: '',
  },
  newsletter: {
    provider: '',
  },
  comments: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: 'search.json',
    },
  },
  support: {
    buyMeACoffee: 'https://www.buymeacoffee.com/bienpx224',
    kofi: 'https://ko-fi.com/bienpx224',
    paypal: 'https://paypal.me/bienpx224',
  },
} as const

export { SITE_METADATA }
