import React from 'react';
import { Icon } from '../common';
import { NavLink } from 'react-router-dom';
import { dashboardRoutes } from '../common/routes';

export const Sidebar = () => {

    return (
        <div className="dashboard-sidebar">
            <div className="dashboard-sidebar-cell title">
                <NavLink to={dashboardRoutes.FOLDERS.INDEX}>
                    FOLDERS
                </NavLink>
                <NavLink to={dashboardRoutes.NEW_ITEM.FOLDER}>
                    &nbsp;<Icon icon="plus" />
                </NavLink>
            </div>

            {/* <div className="dashboard-sidebar-cell">
                    Archive
                </div> */}
            <div className="line" />

            <div className="dashboadashboardRoutesrd-sidebar-cell title">
                <NavLink to={dashboardRoutes.CATEGORIES.INDEX}>
                    CATEGORIES
                </NavLink>
                <NavLink to={dashboardRoutes.NEW_ITEM.CATEGORY}>
                    &nbsp;<Icon icon="plus" />
                </NavLink>
            </div>
            {/* 
                <div className="dashboard-sidebar-cell">
                    Health
                </div> */}

            <div className="line" />

            <div className="dashboard-sidebar-cell title">
                <NavLink  to={dashboardRoutes.COMMITMENTS.INDEX}>
                    COMMITMENTS
                </NavLink>
                <NavLink  to={dashboardRoutes.NEW_ITEM.COMMITMENT}>
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