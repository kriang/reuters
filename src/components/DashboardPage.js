import React from 'react';
import Navigation from './Navigation';
import Stocks from './Stocks';
import MarketPerformance from './MarketPerformance';
import MyPortfolio from './MyPortfolio';

const DashboardPage = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <Navigation />
            <Stocks />
            <MarketPerformance />
            <MyPortfolio />
        </div>
    );

};

export default DashboardPage;