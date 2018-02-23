import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Stocks from './Stocks';
import MarketPerformance from './MarketPerformance';
import MyPortfolio from './MyPortfolio';

class DashboardPage extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
    
        return (
            <div>
                <main>
                    <div className="container">
                        
                        <div className="row">
                            
                            <Navigation />

                            { /* Page Content */}
                            <div className="col-xs-12 col-md-10 padding-lg">
                                
                                <Header />
                                
                                <hr className="small border-fix hidden-sm" />
                                
                                {/* Page Title */}
                                <div className="mt-4 mb-4 hidden-sm"><h1 className="page-title primary-text-color">Dashboard</h1></div>

                                <div className="row">

                                    


                                    <div className="col-xs-12 col-md-4 pull-right no-padding-mobile">
                                        
                                        <div className="row">
                                            <div className="card w-100 mb-4">
                                                
                                                <div className="card-body">

                                                    { /* MyPortfolio Widget */}
                                                    <MyPortfolio />

                                                </div>
                                            </div>
                                        </div>{ /* End of MyPortfolio Widget Wrapper */}
                                    
                                        <div className="row">
                                            <div className="card w-100 mb-3">
                                                
                                                <div className="card-body">
                                                    
                                                    { /* MarketPerformance Widget */}
                                                    <MarketPerformance />

                                                </div>

                                            </div>{ /* End of MarketPerformance Widget Wrapper */}
                                        </div>
                                        
                                        
                                        
                                    </div>

                                    <div className="col-xs-12 col-md-8 pull-left no-padding-mobile">
                                        
                                        <div className="row">
                                            
                                            <div className="card">
                                                
                                                <div className="card-body padding-top-fix">

                                                    { /* Stocks Listing Widget */}
                                                    <Stocks handleAddFavourite={this.props.handleAddFavourite} />

                                                </div>

                                            </div>{ /* End of StockListing Widget Wrapper */}

                                        </div>

                                    </div>


                                </div>


                            </div>

                        </div>

                    </div>

                </main>

            </div>
        );

    }

};

export default DashboardPage;