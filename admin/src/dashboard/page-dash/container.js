import React from 'react';
import '../css/styles.css';
//import SalesAnalytics from '../composant-dash/analyse';
//import TopBar from '../composant-dash/top';
//import RecentUpdates from '../composant-dash/updates';
import Dashboard from '../composant-dash/main';
import Sidebar from '../composant-dash/aside';
import Right from './right';

const Container = () => {
    return (
        <div className='container'>
            <Sidebar />
            <Dashboard />
            <Right />
        </div>
    );
};

export default Container;