import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

export const FoldersView = () => {

    return (
        <div className="content">
            {[1,2,3,4,5,6,7,8,9].map((folder, i) => (
                <Folder name={i} />
            ))}
        </div>
    );
};

const Folder = ({name}) => {
    return (
        <div className="list-icon">
            <NavLink to="/folders/:name">
                <FontAwesomeIcon icon="folder"/>
            </NavLink>
        </div>
    );

};