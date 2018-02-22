import React from 'react';
import {Line} from 'react-chartjs-2';


class MyPortfolio extends React.Component{

    constructor(props){

        super(props);

        this.state = {
            myPortfolioTotal: "239,123.31",
            myPortfolioChange: 5342.30,
            myPortfolioChangePercentage: "4.91",
            lineChartData: {
                labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                datasets: [
                    {
                        data: [47.45, 38.32, 32.79, 57.79, 78.82, 84.11, 90.13],
                        backgroundColor: [
                            'rgba(54, 162, 235, 0.2)'
                        ],
                        borderColor: [
                            'rgba(54, 162, 235, 1)'
                        ],
                        borderWidth: 1
                    }
                ] 
            }
        }
    }

    render(){

        return (
            <div>
                <h6 className="card-subtitle mb-2 text-muted">MY PORTFOLIO</h6>
                <h2 className="primary-text-color">$ { this.state.myPortfolioTotal }</h2>
                <h5><img src="./images/icons/chevron-small-up.svg" width="35" /> { (this.state.myPortfolioChange > 0) ? <span className="text-green">{ this.state.myPortfolioChange } ({ this.state.myPortfolioChangePercentage }%) </span> : <span className="text-red">{ this.state.myPortfolioChange } ({ this.state.myPortfolioChangePercentage }%) </span> }</h5>
                <hr className="small" />
                <div className="row wrapper-chart">
                    <Line 
                        data={this.state.lineChartData}
                        options={{
                            legend: false
                        }}
                    />
                </div>
            </div>
        );
    }

};

export default MyPortfolio;