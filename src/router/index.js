import {lazy} from 'react';
import teachingData from './teachingData'
import messageData from './messageData'
import hooksPage from './hooksPage'
import hocPage from './hocPage'

let router = [
    {
        path: '/',
        exact: false,
        Components: lazy(() => import('../page/layout/Layout')),
        routes: [
            ...teachingData,
            ...messageData,
            ...hooksPage,
            ...hocPage
        ]
    }
];

export default router;