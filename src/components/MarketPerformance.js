import React from 'react';

const MarketPerformance = () => {
    return (
        <div>
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
    );

};

export default MarketPerformance;