import React from 'react';
import { Icon } from '../common';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {

    return (
        <div className="dashboard-sidebar">
                <div className="dashboard-sidebar-cell title">
                    <NavLink to="/folders">
                        FOLDERS
                    </NavLink>
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
                <NavLink to="/categories">
                        CATEGORIES
                    </NavLink>
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

                <div className="dashboard-sidebar-cell title">
                    <NavLink to="/commitments">
                        COMMITMENTS
                    </NavLink>
                    <NavLink to="/commitments/new">
                        &nbsp;<Icon icon="plus"/>
                    </NavLink>
                </div>

                <div className="dashboard-sidebar-cell">
                    <NavLink to="/commitments/01">
                        My first one
                    </NavLink>
                </div>
                <div className="line"/>
        </div>
    );
};