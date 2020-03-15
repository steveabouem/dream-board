import React from 'react';

export const Commitment = ({ children }) => (
    <div className="commitment-wrap">
        <div className="commitment-thumbnail" />
        <div className="commitment-left">
            <div className="commitment-title">
                <div className="left">
                    Finish this site by noon.
                </div>
                <div className="right">
                    <FontAwesomeIcon icon={icon} />
                </div>
            </div>
            <div className="commitment-summary">
                {children}
            </div>
        </div>
    </div>
);