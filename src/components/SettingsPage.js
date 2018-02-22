import React from 'react';
import Navigation from './Navigation';
import Header from './Header';

const SettingsPage = () => (
    
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
                                <div className="mt-4 mb-4"><h1 className="page-title primary-text-color">Settings</h1></div>

                                <div className="row">

                                    <div className="col-xs-12 col-md-12">
                                        
                                        <div className="row">
                                            
                                            <div className="card">
                                                
                                                <div className="card-body padding-top-fix">

                                                    { /* Settings Widget */}
                                                    <div className="row">
                                                        <div className="col-xs-12 col-md-6">
                                                            <h6 className="text-muted">TABLE COLUMNS</h6>

                                                            <div className="form-check">
                                                                <input id="symbol" type="checkbox" name="columns" value="SYMBOL" disabled className="form-check-input" />
                                                                <label className="form-check-label" for="symbol">
                                                                    Symbol
                                                                </label>
                                                            </div>

                                                            <div className="form-check">
                                                                <input id="open" type="checkbox" name="columns" value="OPEN" className="form-check-input" />
                                                                <label class="form-check-label" for="open">
                                                                    Open
                                                                </label>
                                                            </div>

                                                            <div className="form-check">
                                                                <input id="high" type="checkbox" name="columns" value="HIGH" className="form-check-input" />
                                                                <label className="form-check-label" for="high">
                                                                    High
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input id="low" type="checkbox" name="columns" value="LOW" className="form-check-input" />
                                                                <label className="form-check-label" for="low">
                                                                    Low
                                                                </label>
                                                            </div>


                                                            <div className="form-check">
                                                                <input id="volume" type="checkbox" name="columns" value="VOLUME" className="form-check-input" />
                                                                <label className="form-check-label" for="volume">
                                                                    Volume
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input id="price" type="checkbox" name="columns" value="PRICE" className="form-check-input" />
                                                                <label className="form-check-label" for="price">
                                                                    Price
                                                                </label>
                                                            </div>

                                                            <div className="form-check">
                                                                <input id="eps" type="checkbox" name="columns" value="EPS" className="form-check-input" />
                                                                <label className="form-check-label" for="eps">
                                                                    EPS
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input id="P/E" type="checkbox" name="columns" value="P/E" className="form-check-input" />
                                                                <label className="form-check-label" for="P/E">
                                                                    P/E
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input id="change" type="checkbox" name="columns" value="CHANGE" className="form-check-input" />
                                                                <label className="form-check-label" for="change">
                                                                    Change
                                                                </label>
                                                            </div>
                                                            
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>{ /* End of Settings Widget Wrapper */}

                                        </div>

                                    </div>

                                </div>


                            </div>

                        </div>

                    </div>

                </main>

            </div>
);


export default SettingsPage;