import React from 'react';
import Navigation from './Navigation';
import Header from './Header';


class SettingsPage extends React.Component{

    constructor(props){
        super(props);

        this.handleColumnsChange  = this.handleColumnsChange.bind(this);

        this.state = {
            columns: []
        };
    }


    handleColumnsChange(e){
        console.log(e.target.value);
        console.log(e.target.checked);

        const column = e.target.value;
        const status = e.target.checked;

        if(this.state.columns.indexOf(column) > -1){
            return 'This already exists';
        }

        if(status == true){
            this.setState((prevState) => {
                return {
                    columns: prevState.columns.concat([column])
                }
            });
        }else if(status == false){
            this.setState((prevState) => {
                return {
                    columns: prevState.columns.filter((col) => column !== col)
                }
            });
        }

    }


    render(){
        
        return(

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

                                    <div className="col-xs-12 col-md-12 no-padding-mobile">
                                        
                                        <div className="row">
                                            
                                            <div className="card">
                                                
                                                <div className="card-body padding-top-fix">

                                                    { /* Settings Widget */}
                                                    { this.state.columns }
                                                    <div className="row">
                                                        <div className="col-xs-12 col-md-6">
                                                            <h6 className="text-muted">TABLE COLUMNS</h6>

                                                            <div className="form-check">
                                                                <input id="symbol" type="checkbox" name="columns" value="SYMBOL" disabled className="form-check-input" checked="true" />
                                                                <label className="form-check-label" htmlFor="symbol">
                                                                    Symbol (Stock Abbreviation)
                                                                </label>
                                                            </div>

                                                            <div className="form-check">
                                                                <input id="open" type="checkbox" name="columns" value="OPEN" className="form-check-input" onChange={this.handleColumnsChange} />
                                                                <label className="form-check-label" htmlFor="open">
                                                                    Open (Today's Stock Open)
                                                                </label>
                                                            </div>

                                                            <div className="form-check">
                                                                <input id="high" type="checkbox" name="columns" value="HIGH" className="form-check-input" onChange={this.handleColumnsChange} />
                                                                <label className="form-check-label" htmlFor="high">
                                                                    High (Today's Stock High)
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input id="low" type="checkbox" name="columns" value="LOW" className="form-check-input" onChange={this.handleColumnsChange}  />
                                                                <label className="form-check-label" htmlFor="low">
                                                                    Low (Today's Stock Low)
                                                                </label>
                                                            </div>


                                                            <div className="form-check">
                                                                <input id="volume" type="checkbox" name="columns" value="VOLUME" className="form-check-input" onChange={this.handleColumnsChange} />
                                                                <label className="form-check-label" htmlFor="volume">
                                                                    Volume (Sales Volume)
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input id="price" type="checkbox" name="columns" value="PRICE" className="form-check-input" onChange={this.handleColumnsChange} />
                                                                <label className="form-check-label" htmlFor="price">
                                                                    Price (Stock Price)
                                                                </label>
                                                            </div>

                                                            <div className="form-check">
                                                                <input id="eps" type="checkbox" name="columns" value="EPS" className="form-check-input" onChange={this.handleColumnsChange} />
                                                                <label className="form-check-label" htmlFor="eps">
                                                                    EPS (Earnings Per Share)
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input id="P/E" type="checkbox" name="columns" value="P/E" className="form-check-input" onChange={this.handleColumnsChange} />
                                                                <label className="form-check-label" htmlFor="P/E">
                                                                    P/E (Price-to-earnings ratio)
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input id="change" type="checkbox" name="columns" value="CHANGE" className="form-check-input" onChange={this.handleColumnsChange} />
                                                                <label className="form-check-label" htmlFor="change">
                                                                    Change (Change compared to the most recent price update)
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
    }
};


export default SettingsPage;