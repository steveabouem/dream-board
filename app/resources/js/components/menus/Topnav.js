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
                    {trans('menus.topnav.links.home')}
                </div>
            </NavLink>
            <NavLink className="nav-cell" activeClassName="active" to={appRoutes.DASHBOARD}>
                <div>
                    {trans('menus.topnav.links.dashboard')}
                </div>
            </NavLink>
            <NavLink to={appRoutes.CATEGORIES} className="nav-cell" activeClassName="active">
                <div>
                    {trans('menus.topnav.links.categories')}
                </div>
            </NavLink>
            <NavLink className="nav-cell" activeClassName="active" to={appRoutes.PROFILE}>
                <div>
                    {trans('menus.topnav.links.profile')}
                </div>
            </NavLink>
        </div>
    );
};