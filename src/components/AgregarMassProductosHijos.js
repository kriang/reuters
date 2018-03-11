import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';


class AgregarMassProductosHijos extends React.Component {

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
                                        <div className="desaparece div_exito"> 1 producto agregado con éxito.</div>
                                    </div>
            
                                    <div className="text-center">
                                        <h1>Agregar Productos hijos</h1>
                                    </div>
            
                                    
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-t-lg">
                                        <div className="producto_padre m-t-sm">
                                            <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12 text-center">
                                                <img className="img-responsive" src="img/foto_producto.jpg" alt="" />
                                            </div>
                                            <div className="col-lg-10 col-md-10 col-sm-9 col-xs-12">
                                                <p className="id">ID:1266812</p>
                                                <h5 className="descripcion">GUANTE LATEX EXAMINACION CON POLVO TALLA M CAJA 100 UNIDADES</h5>
                                                <p className="valor_asociado">100 Unidades</p>
                                            </div>
                                        </div>
                                    </div>
            
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="desaparece div_nota"><i className="fa fa-exclamation-circle"></i>  Si terminaste de agregar productos presiona listo para ir a paso siguiente.</div>
                                    </div>
            
                                    
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="text-center">
                                            <h1>Buscar producto</h1>
                                            <div className="text-center m-t-lg">
                                                <div id="search-form" className="col-lg-6 col-lg-push-3 col-md-6 col-md-push-3 col-sm-12 col-xs-12"></div>
                                            </div>
                                        </div>
                                    </div>
            
                                    
                                    <div className="col-lg-4 col-lg-push-4 col-md-4 col-sm-6 col-xs-12 text-center">
                                        <button type="button" className="text-center btn btn-primary m-t-md col-lg-12 col-md-12 col-sm-12 col-xs-12">¡LISTO!</button>
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

export default AgregarMassProductosHijos;