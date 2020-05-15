import React from 'react';
import { NavLink } from 'react-router-dom';
import { appRoutes } from '../routes.js';
import { LanguageSelector } from '../index.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Topnav = () => {
    return (
        <div className="nav-wrap topnav">
            <NavLink to={appRoutes.HOME} exact className="nav-cell icon" activeClassName="active">
                {/* {trans('menus.topnav.links.home')} */}
                <FontAwesomeIcon icon="home"/>
            </NavLink>
            <LanguageSelector/>
            <NavLink className="nav-cell icon" activeClassName="active" to={appRoutes.PROFILE}>
                <div>
                    {/* {trans('menus.topnav.links.profile')} */}
                    <FontAwesomeIcon icon="address-card"/>
                </div>
            </NavLink>
            <div className="nav-cell logo">
            </div>
            <div className="nav-cell">
                {/* {trans('menus.topnav.links.categories')} */}
                <input/>
                <FontAwesomeIcon icon="search" className="top-search-icon"/>
            </div>
            <NavLink className="nav-cell" activeClassName="active" to={appRoutes.DASHBOARD.INDEX}>
                <div>
                    {trans('menus.topnav.links.dashboard')}
                </div>
            </NavLink>
        </div>
    );
};