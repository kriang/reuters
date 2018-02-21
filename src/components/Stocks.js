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
                            </tr>
                        </thead>
                        <tbody>
                            {/* Stocks Item - Individual Position */}
                            {
                                this.state.positions.map((position, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{position.symbol}</td>
                                            <td>{position.volume}</td>
                                            <td>{position.price}</td>
                                            <td>{position.date}</td>
                                            <td>26.93</td>
                                            <td className="text-right">+140.23(7.81%)</td>
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