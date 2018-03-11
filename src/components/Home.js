import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';


class Home extends React.Component {

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
                                        <div className="primer_ranking">
                                            <i className="fa fa-list-ul fa-4x icono m-t-xxxl m-b-xl"></i>
                                            <h1 className="m-b-xs">Crear tu primer ranking de productos</h1>
                                            <p className="m-b-lg f_lg">Sólo te tomará un par de minutos</p>
                                            <a href="crear-ranking-01.html"><i className="fa fa-plus-circle fa-2x m-b-xl"></i></a>
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

export default Home;