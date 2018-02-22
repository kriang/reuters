import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <div className="container">
            <div className="row">
                
                <div className="col-xs-8 col-md-4 no-padding">
                    <div className="input-group header-search">
                        <input type="text" className="form-control" placeholder="Search" />
                        <span className="input-group-btn">
                            <button className="btn btn-default button-search" type="button"><img src="images/icons/magnifying-glass.svg" width="25px;" alt="" /></button>
                        </span>
                    </div>{ /* input-group */ }
                </div>
                <div className="col-xs-2 col-md-8 pull-right">
                    <ul className="nav nav-pills pull-right hidden-xs">
                        <NavLink to="/settings" activeClassName="active" className="text-left" exact={true}>
                            <li role="presentation" className="mr-2"><a href="#"><img src="images/icons/cog.svg" width="25px;" alt="" /> Settings</a></li>
                        </NavLink>
                        
                        <li role="presentation"><a href="#"><img src="images/icons/user.svg" width="25px;" alt="" /> Account</a></li>
                    </ul>
                    
                </div>
            </div>
            
        </div>
    </header>
);

export default Header;