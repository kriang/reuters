import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import FavouriteStock from './FavouriteStocks';


class FavouritesPage extends React.Component{


    constructor(props){
        super(props);

        console.log(this.props.favs);
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