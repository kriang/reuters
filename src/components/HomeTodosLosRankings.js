import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';


class HomeTodosLosRankings extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
    
        return (
            <div>
                <div className="wrap">
                    
                    <Navigation />

                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                
                                    <div className="row">
                
                                        <div className="col-lg-7 col-md-8 col-sm-7 col-xs-10">
                                            <h1 className="m-b-md m-t-lg"><span className="hidden-xs">Todos los</span> Rankings</h1>
                                        </div>
                                        <div className="col-lg-5 col-md-4 col-sm-4 col-xs-2">
                                            <label for="show" className="pull-right">
                                                <span>
                                                    <div className="btn-todos-ranking">
                                                        <a className="pull-right"><i className="fa fa-filter" aria-hidden="true"></i></a>
                                                    </div>
                                                </span>
                                            </label>
                                        </div>	
                                        <div className="clearfix"></div>
                
                                        <input type="radio" id="show" name="group" />
                                        <input type="radio" id="hide" name="group" />
                
                                        <div id="filtros">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                Contenido a mostrar
                                                <label for="hide">
                                                    <span>[Ocultar]</span>
                                                </label>								
                                            </div>
                                        </div>
                
                                        <div className="clearfix"></div>
                
                                        <div className="clearfix"></div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    
                                            <div className="elemento_ranking">
                                                <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12 text-center">
                                                    <img className="img-responsive" src="img/foto_producto.jpg" alt="" />
                                                </div>
                                                <div className="col-lg-8 col-md-8 col-sm-9 col-xs-12">
                                                    <h5>ACGUAEMM</h5>
                                                    <p className="descripcion">GUANTE LATEX EXAMINACION CON POLVO TALLA M CAJA 100 UNIDADES</p>
                                                    <p className="fecha">Fecha de creación: 02/03/2017</p>
                                                </div>
                                                <div className="col-lg-2 col-md-2 hidden-sm hidden-xs">
                                                    <a href="#" className="pull-right"><i className="fa fa-chevron-circle-right fa-2x"></i></a>
                                                </div>		
                                            </div>
                
                                            <div className="elemento_ranking">
                                                <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12 text-center">
                                                    <img className="img-responsive" src="img/foto_producto.jpg" alt="" />
                                                </div>
                                                <div className="col-lg-8 col-md-8 col-sm-9 col-xs-12">
                                                    <h5>ACGUAEMM</h5>
                                                    <p className="descripcion">GUANTE LATEX EXAMINACION CON POLVO TALLA M CAJA 100 UNIDADES</p>
                                                    <p className="fecha">Fecha de creación: 02/03/2017</p>
                                                </div>
                                                <div className="col-lg-2 col-md-2 hidden-sm hidden-xs">
                                                    <a href="#" className="pull-right"><i className="fa fa-chevron-circle-right fa-2x"></i></a>
                                                </div>		
                                            </div>
                
                                            <div className="elemento_ranking">
                                                <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12 text-center">
                                                    <img className="img-responsive" src="img/foto_producto.jpg" alt="" />
                                                </div>
                                                <div className="col-lg-8 col-md-8 col-sm-9 col-xs-12">
                                                    <h5>ACGUAEMM</h5>
                                                    <p className="descripcion">GUANTE LATEX EXAMINACION CON POLVO TALLA M CAJA 100 UNIDADES</p>
                                                    <p className="fecha">Fecha de creación: 02/03/2017</p>
                                                </div>
                                                <div className="col-lg-2 col-md-2 hidden-sm hidden-xs">
                                                    <a href="#" className="pull-right"><i className="fa fa-chevron-circle-right fa-2x"></i></a>
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

export default HomeTodosLosRankings;