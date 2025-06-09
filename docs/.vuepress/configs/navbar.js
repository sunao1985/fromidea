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
                { text: 'JavaScript', link: 'https://zh.javascript.info/' },
                { text: 'TypeScript', link: 'https://wangdoc.com/typescript/' },
                { text: 'Node.js', link: 'https://dev.nodejs.cn/learn' },
            ]
        },
        {
            'text': '其它',
            'children': [
                { text: '程序员速查表', link: 'https://quickref.cn/' },
                { text: '正则表达式', link: '/program/regexp/' },
                { text: 'JavaScript学习笔记', link: '/program/javascript/' },
                { text: 'web开发常见问题', link: '/program/questions/' }
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
                    { text: 'server', link: '/tool/soft/server/' },
                    { text: 'vscode', link: '/tool/soft/vscode/' },
                    { text: 'git', link: '/tool/soft/git/' },
                    { text: 'chrome', link: '/tool/soft/chrome/' },
                    { text: 'github', link: '/tool/soft/github/' },
                    { text: 'npm', link: '/tool/soft/npm/' },
                ],
            },
            {
                text: '系统',
                children: [
                    { text: 'MacOS', link: '/system/macos/' },
                    { text: 'iPadOS', link: '/system/ipados/' }
                ],
            },
        ],
    },
    {
        text: '业余',
        children: [
            { 'text': '读书', 'link': '/read/'},
            { 'text': '城市', 'link': '/geo/city/'},
            { 'text': '摄影', 'link': '/shoot/'},
            { 'text': '健康', 'link': '/health/'},
            { 'text': 'HIFI', 'link': '/hifi/'},
        ]
    },
    {
        text: '博客',
        link: '/blog/'
    },
    {
        text: '优选',
        link: '/resource/'
    },
    {
        text: '关于',
        link: '/about'
    },
    {
        text: '编程音乐',
        link: 'https://musicforprogramming.net/'
    },
]