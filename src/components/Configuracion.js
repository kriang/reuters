import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';


class Configuracion extends React.Component {

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
                                        <div className="row configuracion">
                                            <div className="col-lg-12">
                                                <h1><i className="fa fa-gear"></i> Configuración de alertas</h1>
                                                <p>Recibir un email cuando:</p>
                                                <h2>Generales</h2>
                                                <ul>
                                                    <li>
                                                        <span>Has subido en el ranking</span>
                                                        <label className="switch pull-right">
                                                            <input type="checkbox" checked="" />
                                                            <div className="slider round"></div>
                                                        </label>											
                                                    </li>
                                                    <li>
                                                        <span>Un nuevo producto es el  nº 1</span>
                                                        <label className="switch pull-right">
                                                            <input type="checkbox" checked="" />
                                                            <div className="slider round"></div>
                                                        </label>	
                                                    </li>
                                                    <br/>
                                                    <h2>Has Bajado en el ranking</h2>
                                                    <li>
                                                        <span>Has bajado en el ranking</span>
                                                        <label className="switch pull-right">
                                                            <input type="checkbox" />
                                                            <div className="slider round"></div>
                                                        </label>											
                                                    </li>
        
                                                    <li>
                                                        <span>Tu producto maestro ya no es el precio más barato</span>
                                                        <label className="switch pull-right">
                                                            <input type="checkbox" />
                                                            <div className="slider round"></div>
                                                        </label>	
                                                    </li>
                                                    <li>
                                                        <span>Compañías con mejor precio en el ranking</span>
                                                        <label className="switch pull-right">
                                                            <input type="checkbox" />
                                                            <div className="slider round"></div>
                                                        </label>	
                                                    </li>
                                                    <li>
                                                        <span>[Proveedor] ha creado una oferta especial</span>
                                                        <label className="switch pull-right">
                                                            <input type="checkbox" />
                                                            <div className="slider round"></div>
                                                        </label>	
                                                    </li>
                                                    <li>
                                                        <span>Fin de oferta especial</span>
                                                        <label className="switch pull-right">
                                                            <input type="checkbox" />
                                                            <div className="slider round"></div>
                                                        </label>	
                                                    </li>
                                                    <li>
                                                        <span>Posible producto similar en la tienda</span>
                                                        <label className="switch pull-right">
                                                            <input type="checkbox" />
                                                            <div className="slider round"></div>
                                                        </label>	
                                                    </li>
                                                    <li>
                                                        <span>[Proveedor] deja el ranking [Nombre del ranking]</span>
                                                        <label className="switch pull-right">
                                                            <input type="checkbox" />
                                                            <div className="slider round"></div>
                                                        </label>	
                                                    </li>
                                                    <li>
                                                        <span>Ajuste de precio al alza</span>
                                                        <label className="switch pull-right">
                                                            <input type="checkbox" />
                                                            <div className="slider round"></div>
                                                        </label>	
                                                    </li>
                                                    <li>
                                                        <span>Ajuste de precio a la baja</span>
                                                        <label className="switch pull-right">
                                                            <input type="checkbox" />
                                                            <div className="slider round"></div>
                                                        </label>	
                                                    </li>										
                                                </ul>
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

export default Configuracion;