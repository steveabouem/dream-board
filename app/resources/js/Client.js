import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Dashboard } from './components/dashboard';
import { Categories } from './components/categories';
import { Welcome } from './components/welcome';
import { Content, Header, LoginBar, Loader, Footer } from './components/common';
import { Topnav } from './components/menus/Topnav';
import { appRoutes } from './components/common/routes';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { UserContext } from './components/contexts';
import Lang from 'lang.js';
import {locales} from '../lang/js/locales';

/*FONT AWESOME ICONS____________________________________________*/
import { 
    faInfoCircle, faTimesCircle, faExclamation, faEdit, faThumbsDown, faBell, faFolder,
     faPlusSquare, faGlobeAfrica, faGlobe, faArchive, faTags, faPlus,
    faFolderOpen, faSearch, faAddressCard, faHome, faChevronCircleRight  } from '@fortawesome/free-solid-svg-icons';
import { LoginPage } from './components/welcome/Login';

library.add(
    faInfoCircle, faTimesCircle, faExclamation, faEdit, faThumbsDown, 
    faBell, faFolder, faPlus, faFolderOpen, faSearch, faAddressCard, faHome, faGlobeAfrica,
    faGlobe, faArchive, faPlusSquare, faTags, faChevronCircleRight
);
/*______________________________________________________________*/

/*GLOBAL VARIABLES (should be moved to locales.js)______________*/
window.lang = new Lang({ messages: locales, fallback: 'en' });
window.trans = (key, replace = [], locale = 'en') => window.lang.get(key, replace, locale);
/*______________________________________________________________*/


// COMMON STATE HOOKS : 
// loader
// const [loading, isLoading] = useState(false);
// overlayloader
// const [processing, isProcessing] = useState(false);

export const Client = () => {
   const [allowLoginBar, lockLoginBar] = useState(true);
   const [user, updateUser] = useState(null);

    return (
        <Router>
            <UserContext.Provider value= {{
                allowLoginBar, lockLoginBar, user, updateUser
            }}>
                <React.Fragment>
                    <Header>
                        <Topnav/>
                    </Header>
                    {!user && <LoginBar/>}
                    <Content>
                        <Route exact path={appRoutes.HOME} component={Welcome}/>
                        <Route exact path={appRoutes.LOGIN} component={LoginPage}/>
                        <Route path={appRoutes.DASHBOARD} component={Dashboard}/>
                        <Route path={appRoutes.CATEGORIES} component={Categories}/>
                    </Content>
                    <Footer/>
                </React.Fragment>
            </UserContext.Provider>
        </Router>
    );
};

if (document.getElementById('client')) {
    ReactDOM.render(<Client/>, document.getElementById('client'));
}