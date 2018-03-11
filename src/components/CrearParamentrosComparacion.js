import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';


class CrearParamentrosComparacion extends React.Component {

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
                                        <h1 className="m-b-xs text-center">Crear parámetros de comparación</h1>
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
                                        <form className="form-horizontal" role="form">
                                            <div className="form-group">
                                                <div className="col-lg-3 col-md-3 col-sm-5 col-xs-10 p-r-n">
                                                    <label>Familia</label>
                                                    <div className="clearfix"></div>
                                                    <input type="text" className="form-control input-lg" id="" placeholder="Guantes" />	
                                                </div>
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-2 p-l-n">	
                                                    <label>&nbsp;</label>
                                                    <div className="clearfix"></div>
                                                    <button type="submit" className="btn btn-primary wp100"><i className="fa fa-trash"></i></button>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-5 col-xs-10 p-r-n">
                                                    <label>Material guantes</label>
                                                    <div className="clearfix"></div>							
                                                    <input type="text" className="form-control input-lg" id="" placeholder="Guantes de latex" />	
                                                </div>
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-2 p-l-n">	
                                                    <label>&nbsp;</label>
                                                    <div className="clearfix"></div>
                                                    <button type="submit" className="btn btn-primary wp100"><i className="fa fa-trash"></i></button>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-5 col-xs-10 p-r-n">
                                                    <label>Tipo de guantes</label>
                                                    <div className="clearfix"></div>
                                                    <input type="text" className="form-control input-lg" id="" placeholder="Examinación" />	
                                                </div>
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-2 p-l-n">	
                                                    <label>&nbsp;</label>
                                                    <div className="clearfix"></div>
                                                    <button type="submit" className="btn btn-primary wp100"><i className="fa fa-trash"></i></button>
                                                </div>	
                                                <div className="col-lg-3 col-md-3 col-sm-5 col-xs-10 p-r-n">
                                                    <label>Con polvo/sin polvo</label>
                                                    <div className="clearfix"></div>							
                                                    <input type="text" className="form-control input-lg" id="" placeholder="Sin polvo" />	
                                                </div>
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-2 p-l-n">	
                                                    <label>&nbsp;</label>
                                                    <div className="clearfix"></div>
                                                    <button type="submit" className="btn btn-primary wp100"><i className="fa fa-trash"></i></button>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-5 col-xs-10 p-r-n">
                                                    <label>Talla</label>
                                                    <div className="clearfix"></div>
                                                    <input type="text" className="form-control input-lg" id="" placeholder="M" />	
                                                </div>
                                                <div className="col-lg-1 col-md-1 col-sm-1 col-xs-2 p-l-n">	
                                                    <label>&nbsp;</label>
                                                    <div className="clearfix"></div>
                                                    <button type="submit" className="btn btn-primary wp100"><i className="fa fa-trash"></i></button>
                                                </div>	
                                                <div className="clearfix"></div>
                                                <div className="col-lg-4 col-lg-push-4 col-md-4 col-sm-6 col-xs-12 text-center">
                                                    <a href="javascript:void(0)" data-toggle="modal" data-target="#agregar_parametro" className="m-t-lg dBlock"><i className="fa fa-plus"></i> Agregar parámetro</a>
                                                    <button type="button" data-toggle="modal" data-target="#myModal" className="text-center btn btn-primary m-t-md col-lg-12 col-md-12 col-sm-12 col-xs-12">GUARDAR</button>
                                                </div>																				
                                            </div>
                                        </form>
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

export default CrearParamentrosComparacion;