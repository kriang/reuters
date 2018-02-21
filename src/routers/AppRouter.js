import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';


import DashboardPage from '../components/DashboardPage';
import FavouritesPage from '../components/FavouritesPage'

import NotFoundPage from '../components/NotFoundPage';



const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={DashboardPage} exact={true} />
                <Route path="/favourites" component={FavouritesPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
