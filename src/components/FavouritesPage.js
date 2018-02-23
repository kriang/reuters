import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import FavouriteStock from './FavouriteStocks';


class FavouritesPage extends React.Component{


    constructor(props){
        super(props);
        this.setState({
            positions: []
        })

        console.log(this.props.favs);
    }

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

    

    render(){
        return (
            <div>
                <main>
                    <div className="container">
                        
                        <div className="row">
                            
                            <Navigation />

                            { /* Page Content */}
                            <div className="col-xs-12 col-md-10 padding-lg">
                                
                                <Header />
                                
                                <hr className="small border-fix hidden-sm" />
                                
                                {/* Page Title */}
                                <div className="mt-4 mb-4 hidden-sm"><h1 className="page-title primary-text-color">Favourites</h1></div>

                                <div className="row">

                                    <div className="col-xs-12 col-md-12 no-padding-mobile">
                                        
                                        <div className="row">
                                            
                                            <div className="card">
                                                
                                                <div className="card-body padding-top-fix">

                                                    { /* Favourites Widget */}
                                                    
                                                    <FavouriteStock favs={this.props.favs} handleRemoveFavourite={this.props.handleRemoveFavourite} />

                                                </div>

                                            </div>

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

export default FavouritesPage;