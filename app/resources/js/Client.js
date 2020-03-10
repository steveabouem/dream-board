import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Dashboard } from './components/dashboard';
import { Categories } from './components/categories';
import { Welcome } from './components/welcome';
import { Content, Header, LoginBar, Loader, Footer } from './components/common';
import { Topnav } from './components/menus/Topnav';
import { appRoutes } from './components/common/routes';
import Lang from 'lang.js';
import { locales } from '../lang/js/locales.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faInfoCircle, faTimesCircle, faExclamation, faEdit, faThumbsDown, faBell, faFolder, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

/*FONT AWESOME ICONS____________________________________________*/
library.add(faInfoCircle, faTimesCircle, faExclamation, faEdit, faThumbsDown, faBell, faFolder, faPlusSquare);
/*______________________________________________________________*/

export const  Client = () => {
    const [loaded, setLoaded] = useState(true);
    return  !loaded ? (
        <React.Fragment>
            <Content>
                <Loader/>
            </Content>
            <Footer/>
        </React.Fragment>
    ) : (
        <Router>
            <Header>
                <Topnav/>
            </Header>
            <LoginBar/>
            <Content>
                <Route exact path={appRoutes.HOME} component={Welcome}/>
                <Route path={appRoutes.DASHBOARD} component={Dashboard}/>
                <Route path={appRoutes.CATEGORIES} component={Categories}/>
            </Content>
            <Footer/>
        </Router>
    );
};

if (document.getElementById('client')) {
    ReactDOM.render(<Client/>, document.getElementById('client'));
}