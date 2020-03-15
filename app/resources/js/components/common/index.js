import React, {useEffect, useState} from 'react';
import { css } from "@emotion/core";
import { RingLoader} from 'react-spinners';
import { NavLink } from 'react-router-dom';
import { appRoutes } from './routes';
import { Field } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Lang from 'lang.js';

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

export const LanguageSelector = () => {
    const [isExpanded, expand ] = useState();

    return (
        <div className="language-selector-wrap">
            <Icon icon="globe" spin={isExpanded ? true : false} handleClick={() => expand(!isExpanded)}/>
            <div>
                {isExpanded && (
                    <div className="language-list">
                        <div className="language-choice" onClick={() => Lang.setLocale('fr')}>{trans('menus.lang.french')}</div>
                        <div className="language-choice" onClick={() => Lang.setLocale('en')}>{trans('menus.lang.english')}</div>
                    </div>
                )}
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
    const [active, setActive] = useState(false);

    return (
        <div className={'login-bar-wrap' + ( active ? ' active' : '')} onMouseEnter={() => setActive(true)}>
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
    <FontAwesomeIcon icon={icon} spin={spin} onClick={handleClick}/>
);

export const Footer = () => (
    <div className="app-footer-wrap">
        <div>credential left</div>
        <div>credential right</div>
    </div>
);