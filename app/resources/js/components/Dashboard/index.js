import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const Dashboard = () => {
    return (
        <div className="dashboard-wrap">
            <div className="dashboard-left">
                <div className="commitment-wrap">
                    <div className="commitment-thumbnail"/>
                    <div className="commitment-left">
                        <div className="commitment-title">
                            <div className="left">
                                Finish this site by noon.
                                <FontAwesomeIcon name="exclamation"/>
                            </div>
                            <div className="right">
                                <FontAwesomeIcon name="info-circle"/>
                                <FontAwesomeIcon name="times-circle"/>
                                <FontAwesomeIcon name="exclamation"/>
                                <FontAwesomeIcon name="edit"/>
                            </div>
                        </div>
                        <div className="commitment-summary">
                            {trans('lorem.corp')}
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard-sidebar">
                <div className="dashboard-sidebar-cell">
                    <FontAwesomeIcon name="plus-square"/>
                    New Commitment
                </div>
                <div className="dashboard-sidebar-cell">
                    <FontAwesomeIcon name="folder"/>
                    Archive
                </div>
                <div className="dashboard-sidebar-cell">Projects</div>
                <div className="dashboard-sidebar-cell">Bla</div>
                <div className="dashboard-sidebar-cell">Blabla</div>
                <div className="dashboard-sidebar-cell">Blablabla</div>
            </div>
        </div>
    );
};