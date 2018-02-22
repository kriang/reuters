import React from 'react';


class FavouriteStocks extends React.Component{

    //Creating component constructor
    constructor(props){
        
        super(props);

        this.handleRemoveFavourite      = this.handleRemoveFavourite.bind(this);
        console.log('Props:' + this.props.favs);

        this.state = {
            positions: [],
            favs: this.props.favs
        }

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

            this.setState({
                positions: positions
            })
                
        })

    }


    handleRemoveFavourite(e){ 
        console.log(e.target.id);
        let symbolToRemove = e.target.id;
        //this.props.handleRemoveFavourite(symbolToRemove);
        this.props.handleRemoveFavourite(symbolToRemove);
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
                                <th>OPEN</th>
                                <th>HIGH</th>
                                <th>LOW</th>
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
                                            <td>OPEN</td>
                                            <td>HIGH</td>
                                            <td>LOW</td>
                                            <td>{position.volume}</td>
                                            <td>{position.price}</td>
                                            <td>{position.date}</td>
                                            <td>26.93</td>
                                            <td className="text-right">
                                                CHANGE
                                            </td>
                                            <td>
                                                <a className="btn btn-light btn-sm" onClick={ this.handleRemoveFavourite } id={position.symbol}>
                                                    Remove
                                                </a>
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



export default FavouriteStocks;