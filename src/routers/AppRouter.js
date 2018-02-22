import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';


import DashboardPage from '../components/DashboardPage';
import FavouritesPage from '../components/FavouritesPage';
import NewsPage from '../components/NewsPage';
import AccountsPage from '../components/AccountsPage';
import SettingsPage from '../components/SettingsPage';

import NotFoundPage from '../components/NotFoundPage';


class AppRouter extends React.Component{

    constructor(props){
        super(props);

        this.handleAddFavourite     = this.handleAddFavourite.bind(this);
        this.handleRemoveFavourite  = this.handleRemoveFavourite.bind(this);

        this.state = {
            favourites: [],
            columns: []
        };
    }

    handleAddFavourite(symbolToAdd){

        //console.log('Symbol To Add from AppRouter: ' + symbolToAdd);
        if(!symbolToAdd){
            return 'Symbol is empty';
        }else if(this.state.favourites.indexOf(symbolToAdd) > -1){
            return 'This already exists';
        }

        this.setState((prevState) => {
            return {
                favourites: prevState.favourites.concat([symbolToAdd])
            }
        });

        console.log('Favs: ' + this.state.favourites);
        
    }
    
    handleRemoveFavourite(symbolToRemove){
        console.log('Symbol To Remove from AppRouter: ' + symbolToRemove);
        this.setState((prevState) => {
            return {
                favourites: prevState.favourites.filter((fav) => symbolToRemove !== fav)
            }
        });

        //console.log('Favs: ' + this.state.favourites);

    }


    render(){
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/" exact={true} render={()=><DashboardPage handleAddFavourite={this.handleAddFavourite} />}/>
                        <Route path="/favourites" render={()=><FavouritesPage favs={this.state.favourites} handleRemoveFavourite={this.handleRemoveFavourite} />}/>
                        <Route path="/news" component={NewsPage} />
                        <Route path="/accounts" component={AccountsPage} />
                        <Route path="/settings" component={SettingsPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
        

}


export default AppRouter;
