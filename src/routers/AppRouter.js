import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';


import DashboardPage from '../components/DashboardPage';
import FavouritesPage from '../components/FavouritesPage'

import NotFoundPage from '../components/NotFoundPage';


class AppRouter extends React.Component{


    constructor(props){
        super(props);

        this.state = {
            favourites: ["MSFT", "FB"]
        }
    }

    handleAddFavourite(){
        console.log();
    }


    render(){
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" component={DashboardPage} exact={true} />
                        <Route path="/favourites" render={()=><FavouritesPage favs={this.state.favourites} />}/>
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
        

}


export default AppRouter;
