import React from 'react';

const PageLayout = () => {
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

export default PageLayout;