export const sidebar = {
    '/program/': [
        {
            text: '语言',
            children: [{
                'text': 'HTML',
                'children': [
                    '/program/html/',
                    '/program/html/experience'
                ]
            },
                '/program/javascript/',
                '/program/php/',
                '/program/mysql/'
            ]
        }
    ],
    '/design/': [
        {
            text: '设计',
            link: '/design/'
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
                }]
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