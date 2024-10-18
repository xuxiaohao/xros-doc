import { defineConfig } from 'vitepress'
import sidebar from './sidebar.mts'
import viteConfig from './vite.config.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '学习小站',
  description: '个人的学习网站',
  markdown: {
    image: {
      lazyLoading: true // 启用图片懒加载
    }
  },
  lastUpdated: true,
  vite: viteConfig,
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '前端面试题',
        items: [
          { text: 'CSS', link: '/css/bfc' },
          { text: 'Vue', link: '/vue/01' },
          { text: '网络相关', link: '/net/01' }
        ]
      },
      {
        text: '文档',
        items: [
          {
            text: '通用',
            link: '/document/common/01/'
          },
          {
            text: 'TypeScript',
            link: '/document/ts/infer/'
          }
        ]
      },
      {
        text: '插件',
        items: [
          {
            text: '动画库-GSAP',
            link: 'plugins/gsap'
          }
        ]
      },
      {
        text: '实践',
        items: [
          {
            text: '常用功能集合',
            link: '/demo/scrollbar/'
          },
          {
            text: '仿鸣潮官网',
            target: '_blank',
            link: 'http://learn.x-xros.top/mc/#main'
          }
        ]
      }
    ],

    sidebar,

    socialLinks: [{ icon: 'github', link: 'https://github.com/xuxiaohao' }]
  }
})
