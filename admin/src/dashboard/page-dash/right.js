import React from 'react';
import SalesAnalytics from '../composant-dash/analyse';
import TopBar from '../composant-dash/top';
import RecentUpdates from '../composant-dash/updates';
import '../css/styles.css';

const Right = () => {
    return (
        <div className='right'>
            <TopBar />
            <RecentUpdates />
            <SalesAnalytics />
        </div>
    );
};

export default Right;