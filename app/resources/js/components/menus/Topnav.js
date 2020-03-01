import React from 'react';
import { NavLink } from 'react-router-dom';
import { appRoutes } from '../common/routes.js';

export const Topnav = () => {

    return (
        <div className="nav-wrap topnav">
            <NavLink to={appRoutes.HOME} exact className="nav-cell" activeClassName="active">
                <div>
                    home
                </div>
            </NavLink>
            <NavLink className="nav-cell" activeClassName="active" to={appRoutes.MAIN_DASHBOARD}>
                <div>
                    dashboard
                </div>
            </NavLink>
            <NavLink to={appRoutes.CATEGORIES_INDEX} className="nav-cell" activeClassName="active">
                <div>
                    categories
                </div>
            </NavLink>
        </div>
    );
};