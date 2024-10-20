import { DefaultTheme } from 'vitepress'

const sidebar: DefaultTheme.Sidebar = {
  '/css/': [
    {
      text: 'CSS核心概念',
      items: [
        { text: '什么是 BFC?BFC 有什么作用？', link: '/css/bfc' },
        { text: '什么是 IFC 及理解？', link: '/css/ifc' },
        { text: '什么是弹性布局?', link: '/css/flex' },
        { text: '什么是Grid布局?', link: '/css/grid' }
      ]
    },
    {
      text: 'CSS常见面试题',
      items: [
        {
          text: 'CSS元素居中问题',
          link: '/css/middle'
        },
        {
          text: '盒模型宽度和高度的计算',
          link: '/css/box-model'
        },
        {
          text: '如何实现三列布局',
          link: '/css/three-column'
        },
        {
          text: 'Meta标签中的viewport属性及含义',
          link: '/css/meta'
        },
        {
          text: '移动端适配方案有哪些',
          link: '/css/mobile-adapter'
        }
      ]
    }
  ],
  '/vue/': [
    {
      text: 'Vue核心概念',
      items: [
        { text: '谈谈你对vue的理解', link: '/vue/01' },
        { text: '谈谈你对SPA的理解', link: '/vue/02' },
        { text: 'Vue为什么需要虚拟DOM', link: '/vue/03' },
        { text: '对Vue组件化的理解', link: '/vue/04' },
        { text: '对响应式数据的理解', link: '/vue/05' },
        { text: '如何检测数组的变化', link: '/vue/06' },
        { text: '如何将template转换成render函数', link: '/vue/07' },
        { text: 'Vue中如何进行依赖收集?', link: '/vue/08' },
        { text: 'Vue中Diff算法原理', link: '/vue/09' },
        { text: 'key的作用和原理', link: '/vue/10' },
        { text: 'Vue3中模板编译做了哪些优化', link: '/vue/11' },
        { text: 'Vue3有哪些新特性', link: '/vue/12' },
        { text: 'Vue3对比Vue2的变化', link: '/vue/13' },
        { text: '如何看待Composition API 与 Options API', link: '/vue/14' }
      ]
    },
    {
      text: 'API面试题',
      items: [
        { text: 'v-show 和 v-if 的区别', link: '/vue/101' },
        { text: 'v-if 和 v-for 哪个优先级更高', link: '/vue/102' },
        { text: 'v-once 的使用场景有哪些', link: '/vue/103' },
        { text: 'vue 生命周期都有哪些，都发生了什么', link: '/vue/104' },
        { text: 'vue.mixin 的原理跟使用场景', link: '/vue/105' },
        { text: 'vue.use的作用', link: '/vue/106' },
        { text: '双向绑定的实现原理', link: '/vue/107' },
        { text: 'Vue.extend 方法的作用', link: '/vue/108' },
        { text: 'Vue项目中的错误处理', link: '/vue/109' },
        { text: 'Vue3响应式方法ref、reactive', link: '/vue/110' },
        { text: 'watch 和 watchEffect 的区别', link: '/vue/111' },
        { text: 'computed 和 watch 的区别', link: '/vue/112' },
        { text: '对 nextTick 的理解', link: '/vue/113' },
        { text: 'Vue中 slot 是如何实现的', link: '/vue/114' },
        { text: 'Vue中如何进行组件通信', link: '/vue/115' },
        { text: 'Vue中异步组件的作用及原理', link: '/vue/116' }
      ]
    },
    {
      text: '其他',
      items: [
        { text: '自定义指令的应用场景', link: '/vue/201' },
        { text: 'Vue 中的性能优化有哪些', link: '/vue/202' },
        { text: '项目中如何解决跨域问题', link: '/vue/203' },
        { text: '项目中如何做权限管理', link: '/vue/204' },
        { text: 'SPA加载优化', link: '/vue/205' }
      ]
    }
  ],
  '/net/': [
    {
      text: '网络相关面试题',
      items: [
        { text: 'OSI七层模型', link: '/net/01' },
        { text: '如何理解 TCP/IP 协议', link: '/net/02' },
        { text: '如何理解 UDP 和 TCP', link: '/net/03' },
        { text: 'TCP 的三次握手和四次挥手', link: '/net/04' },
        { text: 'DNS 协议及完整的查询过程', link: '/net/05' },
        { text: 'GET 和 POST 的区别及使用场景', link: '/net/06' },
        { text: '如何理解CDN', link: '/net/07' },
        { text: 'HTTP常见的请求头有哪些', link: '/net/08' },
        { text: 'HTTP的发展1.1/2/3', link: '/net/09' },
        { text: 'WebSocket的理解', link: '/net/10' },
        { text: '地址栏输入URL后发生了什么', link: '/net/11' },
        { text: '浏览器渲染流程,回流与重绘', link: '/net/12' },
        { text: 'Performance中DCL,L,FP,FCP,FMP,LCP的含义', link: '/net/13' },
        { text: '静态文件优化方案有哪些?', link: '/net/14' },
        { text: '前端中常用的优化策略有哪些?', link: '/net/15' }
      ]
    }
  ],
  '/demo/': [
    {
      text: '常用功能',
      items: [
        {
          text: '滚动条样式',
          link: '/demo/scrollbar'
        },
        {
          text: '卡片悬浮发光效果',
          link: '/demo/hoverLight/'
        },
        {
          text: '输入光标跟随效果',
          link: '/demo/cursorFollowing/'
        }
      ]
    },
    {
      text: '实践总结',
      items: [
        {
          text: 'vitepress MD模版扩展方法',
          link: '/demo/md-extend'
        }
      ]
    }
  ],
  '/document/common/': [
    { text: '封装组件透传子组件属性方法', link: '/document/common/01/' },
    { text: '编码习惯', link: '/document/common/02/' },
    { text: '用CSS实现丝滑的标题动画', link: '/document/common/titleAnimation/' }
  ],
  '/document/ts/': [
    { text: 'infer关键字的应用', link: '/document/ts/infer/' },
    { text: '前置不定量参数的类型标注', link: '/document/ts/preQuantitativeParameters/' }
  ]
}

export default sidebar
