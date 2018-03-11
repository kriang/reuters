import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';


class BuscarIdPadre extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
    
        return (
            <div>
                <div className="wrap">
                    
                    <Navigation />

                    <div className="clearfix"></div>

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="fondo">

                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="text-center">
                                            <h1>Buscar por ID</h1>
                                            <p>Este ID será el código padre de tu nuevo Ranking</p>
                                            <div className="text-center m-t-lg">
                                                <div id="search-form" className="col-lg-6 col-lg-push-3 col-md-6 col-md-push-3 col-sm-12 col-xs-12">
                                                
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer />

                </div>

            </div>
        );

    }

};

export default BuscarIdPadre;