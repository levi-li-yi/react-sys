import {lazy} from 'react';

let hooksPage = [
    {
        name: 'Hook页面',
        path: '/hooksPage',
        exact: true,
        components: lazy(() => import('../page/hooksPage/HooksPage')),
        routes: [],
        rootDir: 'hooksPage'
    },
];

export default hooksPage;