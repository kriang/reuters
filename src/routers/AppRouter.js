import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';


import DashboardPage from '../components/DashboardPage';
import FavouritesPage from '../components/FavouritesPage'

import NotFoundPage from '../components/NotFoundPage';


class AppRouter extends React.Component{


    constructor(props){
        super(props);

        this.handleAddFavourite = this.handleAddFavourite.bind(this);

        this.state = {
            favourites: ["MSFT", "FB"]
        }
    }

    handleAddFavourite(symbolToAdd){
        console.log('Symbol To Add from AppRouter: ' + symbolToAdd);


    }
    
    handleRemoveFavourite(symbolToRemove){
        console.log('Symbol To Remove from AppRouter: ' + symbolToRemove);
    }


    render(){
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" exact={true} render={()=><DashboardPage handleAddFavourite={this.handleAddFavourite} />}/>
                        <Route path="/favourites" render={()=><FavouritesPage favs={this.state.favourites} handleRemoveFavourite={this.handleRemoveFavourite} />}/>
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
        

}


export default AppRouter;
