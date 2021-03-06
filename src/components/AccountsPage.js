import React from 'react';
import Navigation from './Navigation';
import Header from './Header';

const AccountsPage = () => (
    
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
                                <div className="mt-4 mb-4"><h1 className="page-title primary-text-color">Accounts</h1></div>

                                <div className="row">

                                    <div className="col-xs-12 col-md-12 no-padding-mobile">
                                        
                                        <div className="row">
                                            
                                            <div className="card">
                                                
                                                <div className="card-body padding-top-fix">

                                                    { /* Accounts Widget */}
                                                    <p>User Settings Content Goes Here</p>

                                                </div>

                                            </div>{ /* End of Accounts Widget Wrapper */}

                                        </div>

                                    </div>

                                </div>


                            </div>

                        </div>

                    </div>

                </main>

            </div>
);


export default AccountsPage;