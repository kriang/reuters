import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <div className="container">
        
                { /* Mobile Header */}
                <div className="hidden-lg">
                    <div className="row">
                        
                        <div className="col-4">
                            <ul className="nav nav-pills pull-left">
                                        
                                <li role="presentation" className="mr-2 settings">
                                    <NavLink to="/settings" activeClassName="active" className="settings">
                                        <img src="images/icons/cog.svg" width="25px;" alt="" /> 
                                    </NavLink>
                                </li>
                                
                            </ul>
                        </div>{ /* End of Mobile Settings Menu */}

                        <div className="col-4">
                            <NavLink to="/" activeClassName="active" className="accounts">
                                <h1 className="logo">STOCKIE</h1>
                            </NavLink>
                        </div>{ /* End of Logo Wrapper */}

                        <div className="col-4">
                            <ul className="nav nav-pills pull-right">

                                <li role="presentation accounts">
                                    <NavLink to="/accounts" activeClassName="active" className="accounts">
                                        <img src="images/icons/user.svg" width="25px;" alt="" />
                                    </NavLink>
                                </li>
                            
                            </ul>
                        </div>{ /* End of Accounts Settings */}

                    </div>{ /* End of Mobile Header */}
                </div>

                <div className="row">

                    <div className="col-xs-8 col-md-4 no-padding">
                        <div className="input-group header-search">
                            <input type="text" className="form-control" placeholder="Search" />
                            <span className="input-group-btn">
                                <button className="btn btn-default button-search" type="button"><img src="images/icons/magnifying-glass.svg" width="25px;" alt="" /></button>
                            </span>
                        </div>{ /* input-group */ }
                    </div>
                    <div className="col-xs-2 col-md-8 pull-right hidden-sm">
                        <ul className="nav nav-pills pull-right">
                            
                            <li role="presentation" className="mr-2 settings">
                                <NavLink to="/settings" activeClassName="active" className="text-left settings">
                                    <img src="images/icons/cog.svg" width="25px;" alt="" /> 
                                    <span>Settings</span>
                                </NavLink>
                            </li>
                            <li role="presentation accounts">
                                <NavLink to="/accounts" activeClassName="active" className="text-left accounts">
                                    <img src="images/icons/user.svg" width="25px;" alt="" /> Account
                                </NavLink>
                            </li>
                            
                        </ul>
                        
                    </div>
                
                </div>

        </div>
            
    </header>
);

export default Header;