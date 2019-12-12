let menuTree = [
    {
        name: '基础数据',
        href: 'teachingData',
        children: [
            {
                name: '系统管理',
                href: 'systemManage',
            },
            {
                name: '文档管理',
                href: 'documentManage',
            },
        ]
    },
    {
        name: '信息管理',
        href: 'messageData',
        children: [
            {
                name: '基本信息',
                href: 'baseMessage',
            },
        ]
    },
    {
        name: '提示管理',
        href: 'alarmData',
        children: []
    }
]

export default menuTree;