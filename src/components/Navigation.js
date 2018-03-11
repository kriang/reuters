import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
			<div className="container">
				<div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-2 col-xs-4 text-left">
                        <a href="index.html">
                            <img className="img-responsive logo" src="img/logo-blanco.svg" alt="" />
                        </a>
                    </div>
					<div className="col-lg-10 col-md-10 col-sm-10 col-xs-8 text-right">
						<div className="btn-group">
							<a href="" ><i className="fa fa-list-ul m-r-md"></i></a>
						</div>
						<div className="btn-group">
							<a type="button" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-bell m-r-md"><span>5</span></i></a>
							<div className="dropdown-menu dropdown-menu-right">
								<div className="flecha_dropdown"><i className="fa fa-chevron-up fa-2x"></i></div>
								<div className="row alertas">
									<div className="col-lg-12 text-right m-t-xs">
										<p><a href="javascript:void(0)">Marcar todas como leidas</a></p>
									</div>
									<div className="clearfix"></div>
									<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-right">
										<i className="fa fa-arrow-down fa-2x"></i>
									</div>
									<div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
										<h6>HAZ BAJADO EN EL RANKING <a href="javascript:void(0)">“ACGUAEMM”</a></h6>
										<p>Ya no eres el precio más barato en tu producto maestro.</p>
										<div className="tiempo">Hace 20 minutos</div>
									</div>
									<div className="clearfix"></div>
									<div className="col-lg-12"><hr/></div>
									<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-right">
										<i className="fa fa-arrow-up fa-2x"></i>
									</div>
									<div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
										<h6>HAZ SUBIDO EN EL RANKING <a href="javascript:void(0)">“ACGUAEMM”</a></h6>
										<p>Ya no eres el precio más barato en tu producto maestro.</p>
										<div className="tiempo">Hace 1 hora</div>
									</div>
									<div className="clearfix"></div>
									<div className="col-lg-12"><hr/></div>
									<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-right">
										<i className="fa fa-exclamation fa-2x"></i>
									</div>
									<div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
										<h6>OFERTA ESPECIAL</h6>
										<p><a href="javascript:void(0)">MEDICALTEK</a> ha publicado una <a href="javascript:void(0)">oferta especial</a></p>
										<div className="tiempo">Hace 3 horas</div>
									</div>
									<div className="clearfix"></div>
									<div className="col-lg-12"><hr/></div>
									<div className="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-right">
										<i className="fa fa-exchange fa-2x"></i>
									</div>
									<div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
										<h6>POSIBLE PRODUCTO SIMILAR</h6>
										<p>Hay un nuevo producto que podrías comparar en tu ranking <a href="javascript:void(0)">“ACGUAEMM”</a></p>
										<div className="tiempo">Hace 3 horas</div>
									</div>
									<div className="clearfix"></div>
									<div className="col-lg-12"><hr/></div>
									<div className="col-lg-12 text-center historial">
										<a href="javascript:void(0)"><i className="fa fa-history"></i> Ver historial de alertas</a>
									</div>								
								</div>
							</div>
						</div>

						<div className="btn-group">
							<a type="button" className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-gear m-r-md"></i></a>
							<div className="dropdown-menu dropdown-menu-right">
								<div className="flecha_dropdown"><i className="fa fa-chevron-up fa-2x"></i></div>
								<div className="row configuracion">
									<div className="col-lg-12">
										<h4 className="m-b-md"><i className="fa fa-gear"></i> Configuración de alertas</h4>
										<h6>Recibir un email cuando:</h6>
										<ul className="m-t-sm m-b-none">
											<li>
												<span>Has subido en el ranking</span>
												<label className="switch pull-right">
													<input type="checkbox" />
													<div className="slider round"></div>
												</label>											
											</li>
											<li>
												<span>Has bajado en el ranking</span>
												<label className="switch pull-right">
													<input type="checkbox" />
													<div className="slider round"></div>
												</label>											
											</li>
											<li>
												<span>Un nuevo producto es el  nº 1</span>
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
		</nav>
    );
}

export default Navigation;