import React from 'react';
import { NavLink } from 'react-router-dom';
import { appRoutes } from '../common/routes.js';

export const Topnav = () => {

    return (
        <div className="nav-wrap topnav">
             <div className="nav-cell logo">
                <div>
                   
                </div>
            </div>
            <NavLink to={appRoutes.HOME} exact className="nav-cell" activeClassName="active">
                <div>
                    Dream board
                </div>
            </NavLink>
            <NavLink className="nav-cell" activeClassName="active" to={appRoutes.DASHBOARD}>
                <div>
                    dashboard
                </div>
            </NavLink>
            <NavLink to={appRoutes.CATEGORIES} className="nav-cell" activeClassName="active">
                <div>
                    categories
                </div>
            </NavLink>
            <NavLink className="nav-cell" activeClassName="active" to={appRoutes.PROFILE}>
                <div>
                    profile
                </div>
            </NavLink>
        </div>
    );
};