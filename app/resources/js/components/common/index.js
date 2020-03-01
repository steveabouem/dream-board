import React, {useEffect, useState} from 'react';
import { css } from "@emotion/core";
import { RingLoader} from 'react-spinners';
import { NavLink } from 'react-router-dom';
import { appRoutes } from './routes';

export const Loader = () => {
    const override = css `
        margin: 20% auto
    `;

    return (
        <RingLoader
            css={override}
            color={'#534fa0'}
        />
    );
};

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

export const LoginBar = () => {
    return (
        <div className="login-bar-wrap">
            <div className="action-register">
                <div>Register</div>
            </div>
            <div className="login-bar">
                <div>
                    {trans('welcome.login_c2a.message')}
                </div>
                <div className="action-login">
                    <NavLink to={appRoutes.LOGIN}>
                        {trans('welcome.login_c2a.action')}
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export const Footer = () => (
    <div className="app-footer-wrap">
        <div>credential left</div>
        <div>credential right</div>
    </div>
);
