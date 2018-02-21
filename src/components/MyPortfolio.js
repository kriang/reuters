import React from 'react';
import { Line } from 'react-chartjs-2';

const MyPortfolio = () => {

    this.setState({
        data: [47.45, 38.32, 32.79, 57.79, 78.82, 84.11, 90.13]
    })

    return (
        <div>
            <h6 className="card-subtitle mb-2 text-muted">MY PORTFOLIO</h6>
            <h2 className="primary-text-color">$239,123.31</h2>
            <h5><img src="./images/icons/chevron-small-up.svg" width="35" /> 5,342.30 (4.91%)</h5>
            <hr className="small" />
            <div className="row wrapper-chart">
                <canvas id="myChart" width="400" height="250"></canvas>
                <Line 
                    data={this.state.data}
                />
            </div>
        </div>
    );

};

export default MyPortfolio;