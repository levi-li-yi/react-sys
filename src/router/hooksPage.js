import {lazy} from 'react';

let hooksPage = [
    {
        name: 'Hook页面',
        path: '/hooksPage',
        exact: true,
        components: lazy(() => import('../page/hooksPage/prevPage/HooksPage')),
        routes: [],
        rootDir: 'hooksPage'
    },
    {
        name: '性能优化',
        path: '/nextPage',
        exact: true,
        components: lazy(() => import('../page/hooksPage/nextPage/NextPage')),
        routes: [],
        rootDir: 'hooksPage'
    },
];

export default hooksPage;