import React, {useEffect, useState} from 'react';

export const Loader = () => (
    <div className="loader">
        <span/>
    </div>
);

export const Header = ({children}) => (
    <div className="header-wrap">
        <div className="header">
            {children}
        </div>
    </div>
);

export const ContentHeader =({children}) => (
    <div className="content-header-wrap">
        <div className="content-header">
            {children}
        </div>
    </div>
);

export const Content = ({children}) => (
    <div className="content-wrap">
        <div className="content">
            {children}
        </div>
    </div>
);

