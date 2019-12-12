import {lazy} from 'react';

let teachingData = [
    {
        name: '系统管理',
        path: '/systemManage',
        exact: true,
        components: lazy(() => import('../page/teachingData/systemManage/SystemManage')),
        routes: [],
        rootDir: 'teachingData'
    },
    {
        name: '文档管理',
        path: '/documentManage',
        exact: true,
        components: lazy(() => import('../page/teachingData/documentManage/DocumentManage')),
        routes: [],
        rootDir: 'teachingData'
    },
];

export default teachingData;
