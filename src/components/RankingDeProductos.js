import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';


class RankingDeProductos extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
    
        return (
            <div>
                <div className="wrap">
                    <header>
                    
                        <Navigation />

                        <section id="info-ranking" class="col-xs-12">
                    
                            <div class="container">
                                <div class="row">
                                    <div class="ranking-position col-xs-2 col-md-1">
                                        <div class="ranking_lg ranking_lg_sube">
                                            <span class="numero">15</span>
                                            <span class="rank">Rank</span>	
                                        </div>
                                    </div>
                                    <div class="ranking-data col-xs-9 col-md-10 ">
                                        <h1>ACGUAEMN</h1>
                                        <p>Guante Latex Examinación con Polvo Talla M Caja 100 Unidades</p>
                                        <div id="date" class="fechas">
                                            <p >Actualizado: 17/02/2017 03:00 a.m.</p>
                                            <p class="color_7C9AB1">Siguiente:18/02/2017 03:00 a.m.</p>
                                        </div>	

                                        <div id="number" class="numeros ">
                                            <div class="pull-left text-center">
                                                <span>10</span>
                                                <p>Ofertas</p>
                                            </div>	
                                            <div class="pull-left text-center datos">
                                                <span>1</span>
                                                <p>Prod. Únicos</p>
                                            </div>	
                                            <div class="pull-left text-center">
                                                <span>2</span>
                                                <p>Prov. Únicos</p>
                                            </div>	
                                        </div>						
                                    </div>							
                                </div>
                            </div>
                                    
                            
                            <div class="btn_accion">
                                <a href="javascript:void(0)" class="pull-left"><i class="fa fa-download fa-3x" aria-hidden="true"></i></a>
                                <a href="javascript:void(0)" class="pull-left"><i class="fa fa-sort" aria-hidden="true"></i></a>
                                <a href="javascript:void(0)" class="pull-right"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                            </div>

                        </section>

                    </header>

                    
                    <section className="cuerpo_margen container">
			
                        <div className="row">
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-md-8 col-lg-8">
                                            <div className="listado_ranking">
                                                <div className="col-xs-2 col-sm-2 col-md-2 lugar">
                                                    <span className="mantiene text-center">1</span>
                                                    <div className="clearfix"></div>
                                                    <i className="fa fa-info-circle text-center" aria-hidden="true" aria-hidden="true" data-toggle="tooltip" data-placement="right" title="Información"></i>
                                                </div>
                                                <div className="col-xs-9 col-sm-9 col-md-9 descripcion">
                                                <span className="id id_borde">ID:1266812</span> <span className="valor">$ 1485</span>
                                                    <h2>GUILLERMO HARDING Y CIA LTDA</h2>
                                                    <p className="descripcion">GUANTE LATEX EXAMINACION CON POLVO TALLA M CAJA 100 UNIDADES</p>
                                                </div>
                                                <div className="hidden-xs ver_producto">
                                                    <a className="pull-right" href="#">
                                                        <i className="fa fa-chevron-circle-right fa-2x"></i>
                                                    </a>							
                                                </div>					
                                            </div>
                                            <div className="listado_ranking">
                                                <div className="col-xs-2 col-sm-2 col-md-2 lugar">
                                                    <span className="sube">2<span>+1</span></span>
                                                    <div className="clearfix"></div>
                                                    <i className="fa fa-certificate text-center" aria-hidden="true" data-toggle="tooltip" data-placement="right" title="Oferta"></i>
                                                </div>
                                                <div className="col-xs-9 col-sm-9 col-md-9 descripcion">
                                                <span className="id id_borde">ID:1266812</span> <span className="valor">$ 1485</span>
                                                    <h2>GUILLERMO HARDING Y CIA LTDA</h2>
                                                    <p className="descripcion">GUANTE LATEX EXAMINACION CON POLVO TALLA M CAJA 100 UNIDADES</p>
                                                </div>
                                                <div className="hidden-xs ver_producto">
                                                    <a className="pull-right" href="#">
                                                        <i className="fa fa-chevron-circle-right fa-2x"></i>
                                                    </a>							
                                                </div>					
                                            </div>

                                            <div className="listado_ranking">
                                                <div className="col-xs-2 col-sm-2 col-md-2 lugar">
                                                    <span className="baja">3<span>-2</span></span>
                                                    <div className="clearfix"></div>
                                                </div>
                                                <div className="col-xs-9 col-sm-9 col-md-9 descripcion">
                                                <span className="id id_borde">ID:1266812</span> <span className="valor">$ 1485</span>
                                                    <h2>GUILLERMO HARDING Y CIA LTDA</h2>
                                                    <p className="descripcion">GUANTE LATEX EXAMINACION CON POLVO TALLA M CAJA 100 UNIDADES GUANTE LATEX EXAMINACION CON POLVO TALLA M CAJA 100 UNIDADES</p>
                                                </div>
                                                <div className="hidden-xs ver_producto">
                                                    <a className="pull-right" href="#">
                                                        <i className="fa fa-chevron-circle-right fa-2x"></i>
                                                    </a>							
                                                </div>					
                                            </div>
                                            <div className="listado_ranking">
                                                <div className="col-xs-2 col-sm-2 col-md-2 lugar">
                                                    <span className="mantiene text-center">4</span>
                                                    <div className="clearfix"></div>
                                                    <i className="fa fa-info-circle text-center" aria-hidden="true" data-toggle="tooltip" data-placement="right" title="Información"></i>
                                                </div>
                                                <div className="col-xs-9 col-sm-9 col-md-9 descripcion">
                                                <span className="id id_borde">ID:1266812</span> <span className="valor">$ 1485</span>
                                                    <h2>GUILLERMO HARDING Y CIA LTDA</h2>
                                                    <p className="descripcion">GUANTE LATEX EXAMINACION CON POLVO TALLA M CAJA 100 UNIDADES</p>
                                                </div>
                                                <div className="hidden-xs ver_producto">
                                                    <a className="pull-right" href="#">
                                                        <i className="fa fa-chevron-circle-right fa-2x"></i>
                                                    </a>							
                                                </div>					
                                            </div>
                                        </div>

                                        <div className="col-md-4 col-lg-4 muestra_producto">
                                            <h3>DETALLES DEL PRODUCTO</h3>
                                            <div className="cabecera_producto">
                                                <img className="img-responsive foto_producto m-t-n-md" src="img/foto_producto.jpg" alt="" />
                                                <div className="ranking_lg ranking_lg_sube">
                                                    <span className="numero">1</span>
                                                    <span className="rank">Rank</span>	
                                                </div>
                                            </div>

                                            <div className="contiene_producto">
                                                <h4>GUILLERMO HARDING Y CIA LTDA</h4>
                                                <p className="text-center cm-description">Convenio Marco: Órtesis, Prótesis, Endoprótesis e Insumos de Salud</p>
                                                <p className="product-description"> Guante Latex Examinación con Polvo Talla M Caja 100 Unidades</p>
                                                <i className="fa fa-certificate oferta_i" aria-hidden="true"></i><span className="id">ID:1266812</span><span className="valor">$ 1485</span>
                                                <div className="clearfix"></div>
                                                <i className="fa fa-arrow-up oferta_flecha" aria-hidden="true"></i>
                                                <div className="oferta">La oferta especial caduca el 24/03/2017 12:00AM</div>

                                                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

                                                    <div className="panel panel-default">
                                                        <div className="panel-heading" role="tab" id="headingOne">
                                                            <h4 className="panel-title">
                                                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                                    <i className="fa fa-plus-circle fa-lg" aria-hidden="true"></i>
                                                                    Descripción
                                                                </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                                            <div className="panel-body">
                                                                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="panel panel-default">
                                                        <div className="panel-heading" role="tab" id="headingTwo">
                                                            <h4 className="panel-title">
                                                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                    <i className="fa fa-plus-circle fa-lg" aria-hidden="true"></i>
                                                                    Características del producto
                                                                </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                                            <div className="panel-body">
                                                                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. </p>
                                                                <p>Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="panel panel-default">
                                                        <div className="panel-heading" role="tab" id="headingThree">
                                                            <h4 className="panel-title">
                                                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                    <i className="fa fa-plus-circle fa-lg" aria-hidden="true"></i>
                                                                    Atributos extendidos
                                                                </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                                            <div className="panel-body">
                                                                <ul>
                                                                    <li>MATERIAL: CAUCHO</li>
                                                                    <li>TALLA: M</li>
                                                                    <li>PAIS DE ORIGEN: MALASIA</li>
                                                                    <li>CLASIFICACIÓN DE RIESGO: CLASE 2</li>
                                                                    <li>NOMBRE FABRICANTE: MAXTER GLOVE MANUFACTORING</li>
                                                                    <li>N° INSCRIPCIÓN ISPCH: DM/10GE/0002/05</li>
                                                                    <li>EMPRESA DISTRIBUIDORA EN CHILE: MUNNICH PHARMA MEDICAL</li>
                                                                    <li>MARCA COMERCIAL: MUNCARE</li>
                                                                    <li>N° RESOLUCIÓN SANITARIA VIGENTE: 7716.</li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="panel panel-default">
                                                        <div className="panel-heading" role="tab" id="headingThree">
                                                            <h4 className="panel-title">
                                                                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                                                    <i className="fa fa-plus-circle fa-lg" aria-hidden="true"></i>
                                                                    Listado de proveedores que ofrece este item en la tienda
                                                                </a>
                                                            </h4>
                                                        </div>
                                                        <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                                                            <div className="panel-body">
                                                                <label>Nombre</label>
                                                                <h2>GUILLERMO HARDING Y CIA LTDA</h2>
                                                                <label>Cobertura y condiciones</label>
                                                                <p>(XV, I, II, III, IV, V, VI, VII, VIII, IX, XIV, X, XI, XII, RM)</p>
                                                                <a href="">Condiciones Regionales</a>
                                                                <a href="">Condiciones Comerciales</a>
                                                                <label>Descuento por volumen</label>
                                                                <p>1 % (para 1 unid.)</p>
                                                                <a href="">Ver descuentos</a>
                                                                <label>Plazos de entrega</label>
                                                                <p>1 días habiles (Mínimo)</p>
                                                                <label>Precio por compra</label>
                                                                <p>
                                                                    <span className="tachado">$ 3.000</span>
                                                                    <span className="valor">, $ 1.485</span>
                                                                    <span>E</span> Hasta el 06-03-2017
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>

                    </section>


                    <Footer />

                </div>

            </div>
        );

    }

};

export default RankingDeProductos;