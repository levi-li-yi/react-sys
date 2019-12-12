import {lazy} from 'react';
import teachingData from './teachingData'
import messageData from './messageData'

let router = [
    {
        path: '/',
        exact: false,
        Components: lazy(() => import('../page/layout/Layout')),
        routes: [
            ...teachingData,
            ...messageData
        ]
    }
];

export default router;