import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { defaultTheme } from '@vuepress/theme-default'


export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]], //增加一个自定义的 favicon
  plugins: [
    searchPlugin({
      // 配置项
    }),
  ],
  theme: defaultTheme({
    repo: 'https://gitee.com/pintecher/exam-enroll',
    navbar: [
      // NavbarItem
      {
        text: 'Foo',
        link: '/foo/',
      },
      // NavbarGroup
      {
        text: 'Group',
        children: ['/group/foo.md', '/group/bar.md'],
      },
      // 字符串 - 页面文件路径
      '/bar/README.md',
    ],
  }),
})