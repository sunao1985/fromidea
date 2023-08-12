export const navbar = [
    // NavbarItem
    {
        text: '首页',
        link: '/',
    },
    // NavbarGroup
    {
        text: '语言',
        children: [{
            'text': '手册',
            'children': [
                { text: 'HTML', link: 'https://wangdoc.com/html/' },
                { text: 'CSS', link: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS' },
                { text: 'JavaScript', link: 'https://wangdoc.com/javascript/' },
                { text: 'ES6', link: 'https://wangdoc.com/es6/' },
                { text: 'TypeScript', link: 'https://wangdoc.com/typescript/' },
                { text: 'PHP', link: 'https://doc.houdunren.com/%E7%B3%BB%E7%BB%9F%E8%AF%BE%E7%A8%8B/php/1%20%E5%89%8D%E8%A8%80.html' },
                { text: 'MySQL', link: 'https://doc.houdunren.com/%E7%B3%BB%E7%BB%9F%E8%AF%BE%E7%A8%8B/mysql/1%20%E5%AD%A6%E5%89%8D%E5%87%86%E5%A4%87.html' },
            ]
        },
        {
            'text': '其它',
            'children': [
                { text: '正则表达式', link: '/program/regexp/' },
                { text: 'JavaScript学习笔记', link: '/program/javascript/' },
                { text: 'vue3学习笔记', link: '/program/vue/' }
            ]
        }

        ],
    },
    {
        text: '设计',
        children: [
            { text: '灵感来源', link: '/design/idea' },
            { text: 'icon图标', link: '/design/icon' },
            { text: '开源商用字体', link: '/design/font' },
            { text: 'UI模版', link: '/design/theme.html' }
        ],
    },
    {
        text: '工具',
        children: [
            {
                'text': '软件',
                children: [
                    { text: 'server', link: '/tool/soft/server' },
                    { text: 'vscode', link: '/tool/soft/vscode' },
                    { text: 'git', link: '/tool/soft/git/' },
                    { text: 'chrome', link: '/tool/soft/chrome/' },
                    { text: 'github', link: '/tool/soft/github/' },
                ],
            },
            {
                'text': '硬件',
                children: [
                    { text: 'MacBook Air M1', link: '/tool/hardware/macbook' }
                ]
            }
        ],
    },
    {
        text: '系统',
        children: [
            { text: 'MacOS', link: '/system/macos/' }
        ],
    },
    {
        text: '地理',
        children: [
            { 'text': '城市', 'link': '/geo/city/', }
        ]
    },
    {
        text: '博客',
        link: '/blog/'
    },
    {
        text: '优质资源',
        link: '/resource/'
    },
]