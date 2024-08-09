import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "城市租房宝典",
  description: "城市租房宝典",
  base:'/findhome/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '宝典', link: 'book/section1' },
    ],

    sidebar: [
      {
        text: '宝典',
        items: [
          { text: '第一章', link: 'book/section1' },
          { text: '第二章', link: 'book/section2' }
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
