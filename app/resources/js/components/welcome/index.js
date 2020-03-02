import React from 'react';

export const Welcome = () => (
    <React.Fragment>
        <div className="tagline-section-wrap">
            <div className="tagline-section-left">
                <div className="tagline-title">
                    <span>{trans('welcome.tagline')}</span>
                </div>

            </div>
            <div className="tagline-section-right">
                <div></div>
            </div>
        </div>

        <div className="tagline-section-wrap">
        <div className="tagline-section-left">
            <div className="tagline-title">
                <span>{trans('welcome.tagline')}</span>
            </div>

        </div>
        <div className="tagline-section-right">
            <div></div>
        </div>
    </div>
    </React.Fragment>
);