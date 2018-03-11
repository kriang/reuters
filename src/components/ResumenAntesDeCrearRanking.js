import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';


class ResumenAntesDeCrearRanking extends React.Component {

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

                                    
                                    <h1 className="text-center">Resumen de tu nuevo ranking</h1>

                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-t-lg">
                                        <h3 className="m-t-lg">Producto padre</h3>
                                    </div>
        

                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
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
            
            
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-t-lg">
                                        <h3 className="m-t-lg">Parámetros de comparación</h3>
                                    </div>
            

                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="resumen">
                                            <ul className="m-b-xl">
                                                <li>
                                                    <strong>Familia:</strong> Guantes 
                                                    <a href="javascript:void(0)" className="text-center pull-right btn-secundary btn-min btn-sm" data-toggle="tooltip" data-placement="left" title="Editar">
                                                        <i className="fa fa-edit"></i>
                                                    </a>
                                                    <a href="javascript:void(0)" className="text-center pull-right btn-secundary btn-min btn-sm m-r-sm" data-toggle="tooltip" data-placement="left" title="Eliminar">
                                                        <i className="fa fa-trash"></i>
                                                    </a>
                                                </li>
                                                <li><strong>Material:</strong> Látex
                                                    <a href="javascript:void(0)" className="text-center pull-right btn-secundary btn-min btn-sm" data-toggle="tooltip" data-placement="left" title="Editar">
                                                        <i className="fa fa-edit"></i>
                                                    </a>
                                                    <a href="javascript:void(0)" className="text-center pull-right btn-secundary btn-min btn-sm m-r-sm" data-toggle="tooltip" data-placement="left" title="Eliminar">
                                                        <i className="fa fa-trash"></i>
                                                    </a>
                                                </li>
                                                <li><strong>Tipo:</strong> Examinación
                                                    <a href="javascript:void(0)" className="text-center pull-right btn-secundary btn-min btn-sm" data-toggle="tooltip" data-placement="left" title="Editar">
                                                        <i className="fa fa-edit"></i>
                                                    </a>
                                                    <a href="javascript:void(0)" className="text-center pull-right btn-secundary btn-min btn-sm m-r-sm" data-toggle="tooltip" data-placement="left" title="Eliminar">
                                                        <i className="fa fa-trash"></i>
                                                    </a>
                                                </li>
                                                <li><strong>Característica:</strong> con polvo 
                                                    <a href="javascript:void(0)" className="text-center pull-right btn-secundary btn-min btn-sm" data-toggle="tooltip" data-placement="left" title="Editar">
                                                        <i className="fa fa-edit"></i>
                                                    </a>
                                                    <a href="javascript:void(0)" className="text-center pull-right btn-secundary btn-min btn-sm m-r-sm" data-toggle="tooltip" data-placement="left" title="Eliminar">
                                                        <i className="fa fa-trash"></i>
                                                    </a>
                                                </li>
                                                <li><strong>Talla:</strong> M 
                                                    <a href="javascript:void(0)" className="text-center pull-right btn-secundary btn-min btn-sm" data-toggle="tooltip" data-placement="left" title="Editar">
                                                        <i className="fa fa-edit"></i>
                                                    </a>
                                                    <a href="javascript:void(0)" className="text-center pull-right btn-secundary btn-min btn-sm m-r-sm" data-toggle="tooltip" data-placement="left" title="Eliminar">
                                                        <i className="fa fa-trash"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
            
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-t-lg">
                                        <h3 className="m-t-lg">Productos hijos</h3>
                                    </div>
            

                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="resumen">
                                            <ul className="m-b-xl">
                                                <li>
                                                    <span className="col-lg-10 col-md-10 col-sm-10 col-xs-6 p-l-n">1299704<strong> GUANTE LATEX EXAMINACION CON POLVO TALLA M CAJA 100 UNIDADES</strong></span>
                                                    <span className="col-lg-2 col-md-2 col-sm-2 col-xs-6 p-r-n">
                                                        <a href="javascript:void(0)" className="text-center pull-right btn-secundary btn-min btn-sm" data-toggle="tooltip" data-placement="left" title="Editar">
                                                            <i className="fa fa-edit"></i>
                                                        </a>
                                                        <a href="javascript:void(0)" className="text-center pull-right btn-secundary btn-min btn-sm m-r-sm" data-toggle="tooltip" data-placement="left" title="Eliminar">
                                                            <i className="fa fa-trash"></i>
                                                        </a>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className="col-lg-10 col-md-10 col-sm-10 col-xs-6 p-l-n">1299704<strong> GUANTE LATEX EXAMINACION CON POLVO TALLA M CAJA 100 UNIDADES</strong></span>
                                                    <span className="col-lg-2 col-md-2 col-sm-2 col-xs-6 p-r-n">
                                                        <a href="javascript:void(0)" className="text-center pull-right btn-secundary btn-min btn-sm" data-toggle="tooltip" data-placement="left" title="Editar">
                                                            <i className="fa fa-edit"></i>
                                                        </a>
                                                        <a href="javascript:void(0)" className="text-center pull-right btn-secundary btn-min btn-sm m-r-sm" data-toggle="tooltip" data-placement="left" title="Eliminar">
                                                            <i className="fa fa-trash"></i>
                                                        </a>
                                                    </span>
                                                </li>								
                                            </ul>
            
                                        </div>
                                    </div>
            
                                    <div className="col-lg-4 col-lg-push-4 col-md-4 col-sm-6 col-xs-12 text-center">
                                        <button type="button" data-toggle="modal" data-target="#nuevo_ranking" className="text-center btn btn-primary col-lg-12 col-md-12 col-sm-12 col-xs-12">CREAR RANKING</button>
                                    </div>

                                    
                                </div>


                            </div>

                        </div>

                    </div>

                    <Footer />


                    <div className="modal fade" tabindex="-1" role="dialog" aria-labelledby="gridSystemModalLabel" id="nuevo_ranking">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <h2 className="m-b-md">¡Solo estas a un paso de crear tu nuevo ranking de productos!</h2>
                                            <p className="m-b-xs id">ID: 1299704</p>
                                            <p className="m-b-n descripcion">GUANTE LATEX EXAMINACION CON POLVO TALLA M CAJA 100 UNIDADES</p>
                                            <form>
                                                <div className="row">
                                                    <div className="form-group col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                        <label for="exampleSelect1">Nombre de tu ranking</label>
                                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresar valor asociado" />
                                                        <small>Máx. 30 carácteres</small>
                                                    </div>
                                                    <div className="form-group col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                        <label for="exampleSelect1">Descripción breve</label>
                                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresar valor asociado" />
                                                        <small>Máx. 140 carácteres</small>
                                                    </div>
                                                    <div className=" clearfix"></div>
                                                    <button type="submit" className="col-lg-2 col-md-4 col-sm-6 col-xs-10 col-lg-push-5 col-md-push-4 col-sm-push-3 col-xs-push-1 btn btn-primary m-t-lg text-center">VER RANKING</button>
                                                    <div className="clearfix"></div>
                                                    <div className="m-t-lg col-lg-10 col-lg-push-1 col-md-10 col-md-push-1 col-sm-12 col-xs-12">
                                                        <div className="div_nota text-center">
                                                        <p><i className="fa fa-exclamation-circle"></i> Puedes modificar tu ranking posteriormente, para obtener mejores datos de comparación</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        );

    }

};

export default ResumenAntesDeCrearRanking;