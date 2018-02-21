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


                                <div className="col-xs-12 col-md-4">
                                    <div className="row">
                                        <div className="card w-100 mb-3">
                                            
                                            <div className="card-body">
                                                <h6 className="card-subtitle mb-2 text-muted">MARKET PERFORMANCE</h6>
                                                <h2 className="primary-text-color">7,143.62</h2>
                                                <h5><img src="./images/icons/chevron-small-up.svg" width="35" /> 130.10 (1.86%)</h5>
                                                <hr className="small" />
                                                <div className="row">
                                                    <div className="col-xs-4 mr-3"><small><strong>OPEN</strong>&nbsp;<span className="text-muted">6979.24</span></small></div>
                                                    <div className="col-xs-4 mr-3"><small><strong>HIGH</strong>&nbsp;<span className="text-muted">7152.05</span></small></div>
                                                    <div className="col-xs-4"><small><strong>LOW</strong>&nbsp;<span className="text-muted">6977.07</span></small></div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="card w-100">
                                            
                                            <div className="card-body">
                                                <h6 className="card-subtitle mb-2 text-muted">MY PORTFOLIO</h6>
                                                <h2 className="primary-text-color">$239,123.31</h2>
                                                <h5><img src="./images/icons/chevron-small-up.svg" width="35" /> 5,342.30 (4.91%)</h5>
                                                <hr className="small" />
                                                <div className="row wrapper-chart">
                                                    <canvas id="myChart" width="400" height="250"></canvas>
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