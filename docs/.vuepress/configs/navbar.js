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
                { text: 'JavaScript', link: 'https://wangdoc.com/javascript/' },
                { text: 'ES6', link: 'https://wangdoc.com/es6/' },
                { text: 'Web API', link: 'https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs' },
                { text: 'PHP', link: 'https://doc.houdunren.com/php/1%20%E5%89%8D%E8%A8%80.html' },
                { text: 'MySQL', link: 'https://doc.houdunren.com/mysql/1%20%E5%AD%A6%E5%89%8D%E5%87%86%E5%A4%87.html' },
            ]
        },
        ],
    },
    {
        text: '设计',
        children: [
            { text: '设计之路', link: '/design/' }
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
                    { text: 'git', link: '/tool/soft/git' },
                ],
            },
            {
                'text': '硬件',
                children: [
                    { text: 'MacBook Air M1', link: '/tool/hardware/macbook' }
                ]
            },
        ],
    },
    {
        text: '系统',
        children: [
            { text: 'MacOS', link: '/system/macos/' }
        ],
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