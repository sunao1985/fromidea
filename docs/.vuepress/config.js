import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { defaultTheme } from '@vuepress/theme-default'
import { containerPlugin } from '@vuepress/plugin-container'

import {
  ua, navbar, sidebar
} from './configs/index'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Fromidea',
  description: '技术日志，html5/css3/javascript/vue3/php/mac/os/mysql...',
  head: [
    ['link', { rel: 'icon', href: '/images/fromidea.png' }],
    ['meta', { name: 'baidu-site-verification', content: 'code-xzTgMvorot' }],
    [...ua]
  ], //增加一个自定义的 favicon
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索文档',
        },
      },
    }),
    containerPlugin({
      type: 'center',
    })
  ],
  markdown: {
    headers: {
      level: [2, 3, 4, 5],
    },
  },
  theme: defaultTheme({
    logo: null,
    backToHome: '回到 Fromidea 首页',
    notFound: ['迷路了？不要紧。'],
    navbar: navbar,
    sidebar: sidebar,
    sidebarDepth: 5,
    repo: 'https://github.com/sunao1985/fromidea',
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '最后更新',
    contributorsText: '贡献者',
    contributors: true
  }),
})