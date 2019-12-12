import {lazy} from 'react';

let messageData = [
    {
        name: '基本信息',
        path: '/baseMessage',
        exact: true,
        components: lazy(() => import('../page/messageData/baseMessage/BaseMessage')),
        routes: [],
        rootDir: 'messageData'
    },
];

export default messageData;