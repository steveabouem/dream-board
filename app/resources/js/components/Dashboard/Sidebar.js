import React from 'react';
import { Icon } from '../common';
import { NavLink } from 'react-router-dom';
import { appRoutes } from '../common/routes';

export const Sidebar = () => {

    return (
        <div className="dashboard-sidebar">
            <div className="dashboard-sidebar-cell title">
                <NavLink to={appRoutes.FOLDERS.INDEX}>
                    FOLDERS
                </NavLink>
                <NavLink to={appRoutes.FOLDERS.NEW}>
                    &nbsp;<Icon icon="plus" />
                </NavLink>
            </div>

            {/* <div className="dashboard-sidebar-cell">
                    Archive
                </div> */}
            <div className="line" />


            <div className="dashboard-sidebar-cell title">
                <NavLink to={appRoutes.CATEGORIES.INDEX}>
                    CATEGORIES
                </NavLink>
                <NavLink to={appRoutes.CATEGORIES.NEW}>
                    &nbsp;<Icon icon="plus" />
                </NavLink>
            </div>
            {/* 
                <div className="dashboard-sidebar-cell">
                    Health
                </div> */}

            <div className="line" />

            <div className="dashboard-sidebar-cell title">
                <NavLink  to={appRoutes.COMMITMENTS.INDEX}>
                    COMMITMENTS
                </NavLink>
                <NavLink  to={appRoutes.COMMITMENTS.NEW}>
                    &nbsp;<Icon icon="plus" />
                </NavLink>
            </div>

            {/* <div className="dashboard-sidebar-cell">
                    <NavLink to="/commitments/01">
                        My first one
                    </NavLink>
                </div> */}
            <div className="line" />
        </div>
    );
};