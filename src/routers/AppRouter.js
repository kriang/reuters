import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';


import BuscarIdPadre from '../components/BuscarIdPadre';
import BuscarIdPadreSearchResult from '../components/BuscarIdPadreSearchResult';
import CrearParamentrosComparacion from '../components/CrearParamentrosComparacion';
import AgregarProductorHijos from '../components/AgregarProductorHijos';
import AgregarProductorHijosSearchResult from '../components/AgregarProductorHijosSearchResult';
import AgregarMassProductosHijos from '../components/AgregarMassProductosHijos';
import ResumenAntesDeCrearRanking from '../components/ResumenAntesDeCrearRanking';
import RankingDeProductos from '../components/RankingDeProductos';
import HomeTodosLosRankings from '../components/HomeTodosLosRankings';
import Configuracion from '../components/Configuracion';
import Home from '../components/Home';

import NotFoundPage from '../components/NotFoundPage';


class AppRouter extends React.Component{

    constructor(props){
        super(props);
    }

    
    render(){
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        
                        <Route path="/" exact={true} component={BuscarIdPadre} />
                        <Route path="/buscaridsearchresult" component={BuscarIdPadreSearchResult} />
                        <Route path="/crearparamentroscomparacion" component={CrearParamentrosComparacion} />
                        <Route path="/agregarproductorhijos" component={AgregarProductorHijos} />
                        <Route path="/agregarproductorijossearchresult" component={AgregarProductorHijosSearchResult} />
                        <Route path="/agregarmassproductoshijos" component={AgregarMassProductosHijos} />
                        <Route path="/resumenantesdecrearranking" component={ResumenAntesDeCrearRanking} />
                        <Route path="/rankingdeproductos" component={RankingDeProductos} />
                        <Route path="/hometodoslosrankings" component={HomeTodosLosRankings} />
                        <Route path="/configuracion" component={Configuracion} />
                        <Route path="/home" component={Home} />

                        <Route component={NotFoundPage} />

                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
        

}


export default AppRouter;
