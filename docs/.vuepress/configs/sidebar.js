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
                    'text': 'server', link: '/tool/soft/server/',
                    children: [
                        '/tool/soft/server/宝塔面板www目录从系统盘切换到数据盘',
                        '/tool/soft/server/阿里云跨账号内网组建',
                        '/tool/soft/server/阿里云ECS服务器如何跨账号迁移',
                    ]
                }, {
                    'text': 'vscode', link: '/tool/soft/vscode/',
                    children: [
                        '/tool/soft/vscode/vscode如何自定义配置“代码格式化”',
                        '/tool/soft/vscode/intelephense插件配置说明',
                        '/tool/soft/vscode/vscode如何预览markdown文件',
                        '/tool/soft/vscode/解决vscode-live-server无法热更新的问题',
                    ]
                }, {
                    'text': 'git',
                    link: '/tool/soft/git/'

                }, {
                    'text': 'chrome', link: '/tool/soft/chrome/',
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
                'link': '/system/macos/',
                children: [
                    '/system/macos/env:node:No_such_file_or_directory',
                    '/system/macos/App启动时提示文件已损坏',
                    '/system/macos/macos外接移动硬盘无法装载',
                    '/system/macos/macos如何开启或关闭系统SIP',
                    '/system/macos/macos清除本地DNS缓存',
                    '/system/macos/hdmi_audio',
                ]
            }]
        }
    ],
    '/geo/': [
        {
            text: '地理',
            children: [{
                'text': '城市',
                'link': '/geo/city/',
                children: [
                    '/geo/city/calgary',
                ]
            }]
        }
    ],
    '/blog/': [{
        text: '博客',
        children: [
            { text: '引言', link: '/blog/' },
            '/blog/2023',
            '/blog/2022',
        ],
    }],
    '/resource/': [{
        text: '优质资源',
        link: '/resource/'
    }]
}