import React, {useEffect, useState, useContext} from 'react';
import { css } from "@emotion/core";
import { RingLoader, ClockLoader} from 'react-spinners';
import { NavLink, useLocation } from 'react-router-dom';
import { appRoutes } from './routes';
import { Field } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Lang from 'lang.js';
import { UserContext } from '../contexts';

// for loading
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

// for processing
export const OverlayLoader = () => {
    const override = css `
        margin: 20% auto
    `;

    return (
        <div className="overlay-loader">
            <ClockLoader
                css={override}
                color={'#74839F'}
            />
        </div>
    );
};

export const Header = ({children}) => (
    <div className="header-wrap">
        <div className="header">
            {children}
        </div>
    </div>
);

export const LanguageSelector = () => {
    const [isExpanded, expand ] = useState();

    return (
        <div className="language-selector-wrap">
            <div className="nav-cell icon">
                <Icon icon="globe" spin={isExpanded ? true : false} handleClick={() => expand(!isExpanded)}/>
                <div>
                    {isExpanded && (
                        <div className="language-list">
                            <div className="language-choice" onClick={() => {
                                Lang.setLocale('fr'); expand()
                            }}>{trans('menus.lang.french')}</div>
                            <div className="language-choice" onClick={() => {
                                Lang.setLocale('en'); expand()
                            }}>{trans('menus.lang.english')}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

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

export const LongContent = () => (
    <div/>
);

export const LoginBar = () => {
    const {allowLoginBar, lockLoginBar} = useContext(UserContext);
    const [active, setActive] = useState();

    let {pathname} = useLocation();

    return pathname === appRoutes.LOGIN || !allowLoginBar ? (
        <b/>
    ) : (
        <div className={'login-bar-wrap' + ( active ? ' active' : '')} onMouseEnter={() => setActive(true)}>
            <div className="close-login">
                <Icon icon="times-circle" handleClick={() => {setActive(); lockLoginBar();}}/>
            </div>
            <div className="login-bar">
                <div>
                    {trans('menus.login.message')}
                </div>
                <div className="action-login">
                    <NavLink to={appRoutes.LOGIN}>
                        {trans('menus.login.action_login')}
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

// might need to pass children here for render
export const LabelledField = ({ label, fieldName, placeholder }) => (
    <React.Fragment>
        <label>{label}</label>
        <Field 
            name={fieldName}
            placeholder={placeholder}
        />
    </React.Fragment>
);

export const Icon = ({ icon, spin, handleClick }) => (
    <FontAwesomeIcon 
        icon={icon} 
        spin={spin}
        onClick={handleClick}
    />
);

export const Footer = () => (
    <div className="app-footer-wrap">
        <div>credential left</div>
        <div>credential right</div>
    </div>
);