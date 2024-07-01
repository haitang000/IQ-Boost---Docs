import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IQ Boost 脱离电子文盲文档",
  description: "一个致力于帮助电子文盲掌握相关电脑知识的文档",
  head: [
    // 添加一个网站图标
    ['link', { rel: 'icon', href: 'logo.png' }],],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
  search: {
        provider: 'local'
      }
    nav: [
      { text: '主页', link: '/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: [
      {
        text: '早教班',
        items: [
          { text: '👋 欢迎使用本文档', link: '/start' },
          { text: '💻 认识计算机', link: '/learn-computer' },
          { text: '🔷 操作系统', link: '/system' },
          { text: '❓ 正确提问', link: '/zhenquetiwen' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/haitang000/IQ-Boost---Docs' }
    ]
  }
})
