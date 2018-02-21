import React from 'react';

class MarketPerformance extends React.Component{

    constructor(props){

        super(props);
        
        this.state = {
            marketPerformanceTotal: "7,143.62",
            marketPerformanceChange: "130.10",
            marketPerformanceChangePercentage: "1.86",
            marketPerformanceOpen: "6979.24",
            marketPerformanceHigh: "7152.05",
            marketPerformanceLow: "6977.07",
        }
    }

    render(){
        return (
            <div>
                <h6 className="card-subtitle mb-2 text-muted">MARKET PERFORMANCE</h6>
                <h2 className="primary-text-color">{this.state.marketPerformanceTotal}</h2>
                <h5><img src="./images/icons/chevron-small-up.svg" width="35" /> {this.state.marketPerformanceChange} ({this.state.marketPerformanceChangePercentage}%)</h5>
                <hr className="small" />
                <div className="row">
                    <div className="col-xs-4 mr-3"><small><strong>OPEN</strong>&nbsp;<span className="text-muted"> {this.state.marketPerformanceOpen}</span></small></div>
                    <div className="col-xs-4 mr-3"><small><strong>HIGH</strong>&nbsp;<span className="text-muted"> {this.state.marketPerformanceHigh}</span></small></div>
                    <div className="col-xs-4"><small><strong>LOW</strong>&nbsp;<span className="text-muted"> {this.state.marketPerformanceLow}</span></small></div>
                </div>
            </div>
        );
    }

};

export default MarketPerformance;