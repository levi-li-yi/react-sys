import {lazy} from 'react';

let hocPage = [
    {
        name: '高阶组件',
        path: '/hocPage',
        exact: true,
        components: lazy(() => import('../page/hocPage/hocPage/HocPage')),
        routes: [],
        rootDir: 'hocPage'
    }
];

export default hocPage;