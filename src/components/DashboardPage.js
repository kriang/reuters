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

                                                    <table className="table table-hover table-borderless">
                                                        {/* Stocks Listing Table Title */}
                                                        <thead>   
                                                            <tr>
                                                                <th>SYMBOL</th>
                                                                <th>VOLUME</th>
                                                                <th>PRICE</th>
                                                                <th>EPS</th>
                                                                <th>P/E</th>
                                                                <th className="text-right">CHANGE</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {/* Stocks Item - Individual Stocks */}
                                                            <tr>
                                                                <td>MSFT</td>
                                                                <td>15000</td>
                                                                <td>72.81</td>
                                                                <td>0.98</td>
                                                                <td>26.93</td>
                                                                <td className="text-right">+140.23(7.81%)</td>
                                                            </tr>
                                                            <tr>
                                                                <td>FB</td>
                                                                <td>7200</td>
                                                                <td>144.50</td>
                                                                <td>2.2</td>
                                                                <td>28.11</td>
                                                                <td className="text-right">+41.94(2.31%)</td>
                                                            </tr>
                                                            <tr>
                                                                <td>MSFT</td>
                                                                <td>15000</td>
                                                                <td>72.81</td>
                                                                <td>0.98</td>
                                                                <td>26.93</td>
                                                                <td className="text-right">+140.23(7.81%)</td>
                                                            </tr>
                                                            <tr>
                                                                <td>FB</td>
                                                                <td>7200</td>
                                                                <td>144.50</td>
                                                                <td>2.2</td>
                                                                <td>28.11</td>
                                                                <td className="text-right">+41.94(2.31%)</td>
                                                            </tr>
                                                            <tr>
                                                                <td>MSFT</td>
                                                                <td>15000</td>
                                                                <td>72.81</td>
                                                                <td>0.98</td>
                                                                <td>26.93</td>
                                                                <td className="text-right">+140.23(7.81%)</td>
                                                            </tr>
                                                            <tr>
                                                                <td>FB</td>
                                                                <td>7200</td>
                                                                <td>144.50</td>
                                                                <td>2.2</td>
                                                                <td>28.11</td>
                                                                <td className="text-right">+41.94(2.31%)</td>
                                                            </tr>
                                                            <tr>
                                                                <td>MSFT</td>
                                                                <td>15000</td>
                                                                <td>72.81</td>
                                                                <td>0.98</td>
                                                                <td>26.93</td>
                                                                <td class="text-right">+140.23(7.81%)</td>
                                                            </tr>
                                                            <tr>
                                                                <td>FB</td>
                                                                <td>7200</td>
                                                                <td>144.50</td>
                                                                <td>2.2</td>
                                                                <td>28.11</td>
                                                                <td className="text-right">+41.94(2.31%)</td>
                                                            </tr>
                                                            <tr>
                                                                <td>FB</td>
                                                                <td>7200</td>
                                                                <td>144.50</td>
                                                                <td>2.2</td>
                                                                <td>28.11</td>
                                                                <td className="text-right">+41.94(2.31%)</td>
                                                            </tr>
                                                            <tr>
                                                                <td>MSFT</td>
                                                                <td>15000</td>
                                                                <td>72.81</td>
                                                                <td>0.98</td>
                                                                <td>26.93</td>
                                                                <td className="text-right">+140.23(7.81%)</td>
                                                            </tr>
                                                        </tbody>

                                                    </table>

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