import React from 'react';


class FavouriteStocks extends React.Component{

    //Creating component constructor
    constructor(props){
        super(props);

        this.handleRemoveFavourite      = this.handleRemoveFavourite.bind(this);

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
                                //this.props.favs.map((fav, index) => {

                                    /*let positionStatus           = Math.random() * 2;
                                    let positionChange           = (positionStatus > 1) ? (position.price * Math.random()).toFixed(2) : (-position.price * Math.random()).toFixed(2);
                                    let positionChangePercentage = Math.abs(positionChange/10).toFixed(2);
                                    let positionText             =  '';

                                    if(positionChange > 0){
                                        positionText = <span className="text-green">{ positionChange } ({positionChangePercentage}%)</span>;
                                    }else{
                                        positionText = <span className="text-red">{ positionChange } ({positionChangePercentage}%)</span>;
                                    }*/

                                    //return(
                                        <tr>
                                            <td>SYMBOL</td>
                                            <td>OPEN</td>
                                            <td>HIGH</td>
                                            <td>LOW</td>
                                            <td>VOLUME</td>
                                            <td>PRICE</td>
                                            <td>DATE</td>
                                            <td>26.93</td>
                                            <td className="text-right">
                                                CHANGE
                                            </td>
                                            <td>
                                                <button className="btn btn-light btn-sm" onClick={ this.handleRemoveFavourite } id="FB">
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    //);
                                //})
                            }{/* End of Stocks Item Loop */}

                            
                        </tbody>
    
                    </table>
                </div>
            </div>
        );
    }

}



export default FavouriteStocks;