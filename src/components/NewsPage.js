import React from 'react';
import Navigation from './Navigation';
import Header from './Header';

class NewsPage extends React.Component {

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
                                
                                <hr className="small border-fix" />
                                
                                {/* Page Title */}
                                <div className="mt-4 mb-4"><h1 className="page-title primary-text-color">News</h1></div>

                                <div className="row">

                                    <div className="col-xs-12 col-md-12">
                                        
                                        <div className="row">
                                            
                                            <div className="card">
                                                
                                                <div className="card-body padding-top-fix">

                                                    { /* News Widget */}
                                                    <p>News Content Goes Here</p>

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

export default NewsPage;