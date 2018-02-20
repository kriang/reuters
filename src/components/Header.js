import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>STOCKIE</h1>
        <form>
            <input type="text" placeholder="Search Stocks or Portfolio or News" className="input-search" />
        </form>
        <NavLink to="/settings" activeClassName="is-active">Settings</NavLink>
        <NavLink to="/accounts" activeClassName="is-active">Account</NavLink>
    </header>
);

export default Header;