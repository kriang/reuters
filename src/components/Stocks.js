import React from 'react';


class Stocks extends React.Component{

    //Creating component constructor
    constructor(props){
        super(props);

        this.state = {
            positions: []
        };

    }

    //perform actions on component mount
    componentDidMount(){

        //fetch positions from provided json file
        fetch('https://s3-ap-southeast-1.amazonaws.com/advisory-data/positions.json')
        .then(results => {
            return results.json();
        }).then(data => {

            //assign fetched positions to local state
            let positions = data.positions;
            this.setState(() => {
                return {
                    positions: positions
                }
            });
        })
    }

    render() {

        return (
            <div>
                <div className="table-responsive">
                    <table className="table table-hover table-borderless">
                        {/* Stocks Listing Table Title */}
                        <thead>   
                            <tr>
                                <th>SYMBOL</th>
                                <th>VOLUME</th>
                                <th>PRICE</th>
                                <th>EPS</th>
                                <th>P/E</th>
                                <th className="text-right">CHANGE</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Stocks Item - Individual Position */}
                            {
                                this.state.positions.map((position, index) => {

                                    let positionStatus           = Math.random() * 2;
                                    let positionChange           = (positionStatus > 1) ? (position.price * Math.random()).toFixed(2) : (-position.price * Math.random()).toFixed(2);
                                    let positionChangePercentage = Math.abs(positionChange/10).toFixed(2);
                                    let positionText             =  '';

                                    if(positionChange > 0){
                                        positionText = <span className="text-green">{ positionChange } ({positionChangePercentage}%)</span>;
                                    }else{
                                        positionText = <span className="text-red">{ positionChange } ({positionChangePercentage}%)</span>;
                                    }

                                    return(
                                        <tr key={index}>
                                            <td>{position.symbol}</td>
                                            <td>{position.volume}</td>
                                            <td>{position.price}</td>
                                            <td>{position.date}</td>
                                            <td>26.93</td>
                                            <td className="text-right">
                                            {
                                                positionText
                                            }
                                            </td>
                                        </tr>
                                    );
                                })
                            }{/* End of Stocks Item Loop */}

                            
                        </tbody>
    
                    </table>
                </div>
            </div>
        );
    }

}



export default Stocks;