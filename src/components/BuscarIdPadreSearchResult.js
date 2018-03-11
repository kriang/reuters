import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';


class BuscarIdPadreSearchResult extends React.Component {

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
                                                <div id="search-form" className="col-lg-6 col-lg-push-3 col-md-6 col-md-push-3 col-sm-12 col-xs-12"></div>
                                            </div>
                                        </div>
                                    </div>
            
            
                                    
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="desaparece div_exito">Hemos encontrado 02 productos para el resultado de tu búsqueda.</div>
                                    </div>
            
            
                                    
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <a  type="button" data-toggle="modal" data-target="#regla_comparacion">
                                            <div className="resultado_busqueda">
                                                <div className="col-lg-4 col-md-4 col-sm-3 col-xs-12 text-center">
                                                    <img className="img-responsive" src="img/foto_producto.jpg" alt="" />
                                                </div>
                                                <div className="col-lg-8 col-md-8 col-sm-9 col-xs-12">
                                                    <p className="id">ID: 1299704</p>
                                                    <h5 className="descripcion">GUANTE LATEX TOP GLOVE NO ESTERIL TALLA M 100 UNIDADES</h5>
                                                    <p className="tipo"><strong>Tipo:</strong> Guantes</p>
                                                    <p className="precio"><strong>Precio:</strong> $1.772</p>
                                                    <p className="proveedor"><strong>Proveedor:</strong> MEDLA</p>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                                    <button type="button" className="btn btn-primary m-t-sm">SELECCIONAR COMO ID MAESTRO</button>					
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <a  type="button" data-toggle="modal" data-target="#regla_comparacion">
                                            <div className="resultado_busqueda">
                                                <div className="col-lg-4 col-md-4 col-sm-3 col-xs-12 text-center">
                                                    <img className="img-responsive" src="img/foto_producto.jpg" alt="" />
                                                </div>
                                                <div className="col-lg-8 col-md-8 col-sm-9 col-xs-12">
                                                    <p className="id">ID: 1299704</p>
                                                    <h5 className="descripcion">GUANTE LATEX TOP GLOVE NO ESTERIL TALLA M 100 UNIDADES</h5>
                                                    <p className="tipo"><strong>Tipo:</strong> Guantes</p>
                                                    <p className="precio"><strong>Precio:</strong> $1.772</p>
                                                    <p className="proveedor"><strong>Proveedor:</strong> MEDLA</p>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                                    <button type="button" className="btn btn-primary m-t-sm">SELECCIONAR COMO ID MAESTRO</button>					
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <a  type="button" data-toggle="modal" data-target="#regla_comparacion">
                                            <div className="resultado_busqueda">
                                                <div className="col-lg-4 col-md-4 col-sm-3 col-xs-12 text-center">
                                                    <img className="img-responsive" src="img/foto_producto.jpg" alt="" />
                                                </div>
                                                <div className="col-lg-8 col-md-8 col-sm-9 col-xs-12">
                                                    <p className="id">ID: 1299704</p>
                                                    <h5 className="descripcion">GUANTE LATEX TOP GLOVE NO ESTERIL TALLA M 100 UNIDADES</h5>
                                                    <p className="tipo"><strong>Tipo:</strong> Guantes</p>
                                                    <p className="precio"><strong>Precio:</strong> $1.772</p>
                                                    <p className="proveedor"><strong>Proveedor:</strong> MEDLA</p>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                                    <button type="button" className="btn btn-primary m-t-sm">SELECCIONAR COMO ID MAESTRO</button>					
                                                </div>
                                            </div>
                                        </a>
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

export default BuscarIdPadreSearchResult;