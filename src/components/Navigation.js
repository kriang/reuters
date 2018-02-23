import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="col-xs-12 col-md-2 aside">
                                    
                { /* Logo Wrapper */}
                <div className="col-xs-12 hidden-sm">
                    <h1 className="logo">STOCKIE</h1>
                </div>{ /* End of Logo Wrapper */}

                
                { /* Primary Navigation */ }
                <nav className="primary-navigation">
                    <ul>
                        <li>
                            <NavLink to="/" activeClassName="active" className="" exact={true}>
                                <img src="images/icons/bar-graph.svg" width="25px;" alt="" className="mr-2" /> Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/favourites" activeClassName="active" className="">
                                <img src="images/icons/star.svg" width="25px;" alt="" className="mr-2" /> Favourites
                            </NavLink>
                            
                        </li>
                        <li>
                            <NavLink to="/news" activeClassName="active" className="">
                                <img src="images/icons/news.svg" width="25px;" alt="" className="mr-2" /> News
                            </NavLink>

                        </li>
                        
                    </ul>
                </nav>{ /*End of Primary Navigation */}
            </div>
    );
}

export default Navigation;