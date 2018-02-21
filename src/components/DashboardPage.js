import React from 'react';
import Navigation from './Navigation';
import Stocks from './Stocks';
import MarketPerformance from './MarketPerformance';
import MyPortfolio from './MyPortfolio';

const DashboardPage = () => {
    return (
        <div>
            <main>
                <div className="container">
                    <div className="row">
                        <Navigation />
                    </div>
                </div>
            </main>
        </div>
    );

};

export default DashboardPage;