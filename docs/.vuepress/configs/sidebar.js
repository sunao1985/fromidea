export const sidebar = {
    '/program/': [
        {
            'text': '手册',
            'children': [
                { text: 'HTML', link: 'https://developer.mozilla.org/zh-CN/docs/Web/HTML' },
                { text: 'CSS', link: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS' },
                { text: 'JavaScript', link: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript' },
                { text: 'PHP', link: 'https://doc.houdunren.com/%E7%B3%BB%E7%BB%9F%E8%AF%BE%E7%A8%8B/php/1%20%E5%89%8D%E8%A8%80.html' },
                { text: 'MySQL', link: 'https://doc.houdunren.com/%E7%B3%BB%E7%BB%9F%E8%AF%BE%E7%A8%8B/mysql/1%20%E5%AD%A6%E5%89%8D%E5%87%86%E5%A4%87.html' },
            ]
        },
        {
            'text': '其它',
            'children': [
                { text: '正则表达式', link: '/program/regexp/' },
                { text: 'JavaScript开发者应懂的33个概念', link: '/program/javascript/JavaScript开发者应懂的33个概念.html' },
                { text: 'JavaScript学习笔记', link: '/program/javascript/' },
                { text: 'vue3学习笔记', link: '/program/vue/' }
            ]
        }
    ],
    '/design/': [
        {
            text: '设计',
            children: [
                { text: '灵感来源', link: '/design/idea.html' },
                { text: 'icon图标', link: '/design/icon.html' },
                { text: '免费商用字体', link: '/design/font.html' },
                { text: 'UI模版', link: '/design/theme.html' }

            ]
        }
    ],
    '/tool/': [
        {
            text: '工具',
            children: [{
                'text': '软件',
                'children': [{
                    'text': 'server',
                    children: [
                        '/tool/soft/server/宝塔面板www目录从系统盘切换到数据盘',
                        '/tool/soft/server/阿里云跨账号内网组建',
                    ]
                }, {
                    'text': 'vscode',
                    children: [
                        '/tool/soft/vscode/vscode如何自定义配置“代码格式化”',
                        '/tool/soft/vscode/intelephense插件配置说明',
                        '/tool/soft/vscode/vscode如何预览markdown文件',
                    ]
                }, {
                    'text': 'git',
                    link: '/tool/soft/git/'

                }, {
                    'text': 'chrome',
                    children: [
                        '/tool/soft/chrome/chrome内置强大网页截图工具',
                    ]
                }
                ]
            },
            {
                'text': '硬件',
                'children': [{
                    'text': 'MacBook Air M1',
                    children: [
                    ]
                }],
            }]
        }
    ],
    '/system/': [
        {
            text: '系统',
            children: [{
                'text': 'MacOS',
                'link': '/system/macos/'
            }]
        }
    ],
    '/blog/': [{
        text: '博客',
        children: [
            { text: '引言', link: '/blog/' },
            '/blog/2022',
        ],
    }],
    '/resource/': [{
        text: '优质资源',
        link: '/resource/'
    }]
}