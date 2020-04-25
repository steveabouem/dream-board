import React from 'react';
import { Icon } from '../../common';
import { NavLink } from 'react-router-dom';

export const CommitmentsView = () => {

    return (
        <div className="content">
            {[1,2,3,4,5].map((commitment, i) => (
                <Commitment title="Title" id={i}>
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
                    <NavLink to={`/commitments/:${id}`}>
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

export const CommitmentDetails = ({start, end, details}) => {

    return (
        <div className="details-wrap">
            <div className="details-title">Details</div>
            <div>
                <div>left</div>
                <div>
                    right
                    <div>calendar</div>
                </div>
            </div>
            <div>
                <div>
                    button
                </div>
            </div>
        </div>
    );
};


// wrap
// display: flex;
// flex: 0 1 80%;
// align-self: center;
// width: 80%;
// /* margin: auto; */
// margin: auto;
// background: white;
// flex-wrap: nowrap;

