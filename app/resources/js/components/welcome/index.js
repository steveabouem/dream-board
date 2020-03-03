import React from 'react';

export const Welcome = () => (
    <React.Fragment>
        <div className="tagline-section-wrap">
        <div className="tagline-section-left">
            <div className="tagline-title">
                <span>{trans('welcome.tagline')}</span>
            </div>
            <div className="tagline-paragraph">
                {trans('lorem.par3')}
            </div>
        </div>
        <div className="tagline-section-right">
          
        </div>
    </div>
    </React.Fragment>
);