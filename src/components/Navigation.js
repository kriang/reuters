import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <nav>
        <ul>
            <li><NavLink to="/" activeClassName="is-active">Dashboard</NavLink></li>
            <li><NavLink to="/favourites" activeClassName="is-active">Favourites</NavLink></li>
            <li><NavLink to="/news" activeClassName="is-active">News</NavLink></li>
        </ul>
    </nav>
);

export default Navigation;