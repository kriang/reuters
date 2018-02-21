import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            <h6 className="card-subtitle mb-2 text-muted">MY PORTFOLIO</h6>
            <h2 className="primary-text-color">$239,123.31</h2>
            <h5><img src="./images/icons/chevron-small-up.svg" width="35" /> 5,342.30 (4.91%)</h5>
            <hr className="small" />
            <div className="row wrapper-chart">
                <canvas id="myChart" width="400" height="250"></canvas>
            </div>
        </div>
    );

};

export default MyPortfolio;