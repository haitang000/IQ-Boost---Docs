import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IQ Boost 脱离电子文盲文档",
  description: "一个致力于帮助电子文盲掌握相关电脑知识的文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '早教班',
        items: [
          { text: '👋 欢迎使用本文档', link: '/start' },
          { text: '💻 认识计算机', link: '/learn-computer' },
          { text: '🔷 软件', link: '/software' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
