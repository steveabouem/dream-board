import React from 'react';
import { Icon } from '../common';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {

    return (
        <div className="dashboard-sidebar">
                <div className="dashboard-sidebar-cell title">
                    FOLDERS
                    <NavLink to="folders/new">
                        &nbsp;<Icon icon="plus"/>
                    </NavLink>
                </div>

                <NavLink to="new">
                    <div className="dashboard-sidebar-cell">
                        New
                    </div>
                </NavLink>
                <NavLink to="commitments">
                    <div className="dashboard-sidebar-cell">
                        Archive
                    </div>
                </NavLink>
                <div className="dashboard-sidebar-cell">
                    Archive
                </div>
                <div className="line"/>

                <div className="dashboard-sidebar-cell title">
                    CATEGORIES
                    <NavLink to="categories/new">
                        &nbsp;<Icon icon="plus"/>
                    </NavLink>
                </div>

                <div className="dashboard-sidebar-cell">
                    Health
                </div>
                <div className="dashboard-sidebar-cell">
                    Travel
                </div>
                <div className="dashboard-sidebar-cell">
                    career
                </div>
                <div className="line"/>

                <div className="dashboard-sidebar-cell">
                    Archive
                </div>
                <div className="dashboard-sidebar-cell">
                    Archive
                </div>
                <div className="dashboard-sidebar-cell">
                    Archive
                </div>
                <div className="dashboard-sidebar-cell">
                    Archive
                </div>
        </div>
    );
};