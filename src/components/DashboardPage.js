import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
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

                        { /* Page Content */}
                        <div className="col-xs-12 col-md-10 padding-lg">
                            <Header />
                            <hr className="small border-fix" />
                            
                            {/* Page Title */}
                            <div className="mt-4 mb-4"><h1 className="page-title primary-text-color">Dashboard</h1></div>

                            <div className="row">

                                <div className="col-xs-12 col-md-8">
                                    
                                    <div className="row">
                                        
                                        <div className="card">
                                            
                                            <div className="card-body padding-top-fix">

                                                { /* Stocks Listing Widget & making it responsive */}
                                                <div className="table-responsive">
                                                    
                                                    <Stocks />

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>


                        </div>

                    </div>

                </div>

            </main>

        </div>
    );

};

export default DashboardPage;