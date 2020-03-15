import React from 'react';
import { Icon } from '../../common';
import { NavLink } from 'react-router-dom';

export const CommitmentsView = () => {

    return (
        <div className="content">
            {[1,2,3,4,5].map((commitment, i) => (
                <Commitment title="Title">
                    {trans('lorem.corp')}
                </Commitment>
            ))}
        </div>
    );
};

const Commitment = ({ children, title, id }) => (
    <div className="commitment-wrap">
        <div className="commitment-thumbnail" />
        <div className="commitment-left">
            <div className="commitment-title">
                <div className="left">
                    {title}
                </div>
                <div className="right">
                    <NavLink to={`commitment/:id`}>
                        <Icon icon="folder-open"/>
                    </NavLink>
                </div>
            </div>
            <div className="commitment-summary">
                {children}
            </div>
        </div>
    </div>
);