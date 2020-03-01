import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Dashboard } from './components/dashboard';
import { Categories } from './components/categories';
import { Welcome } from './components/welcome';
import { Content, Header } from './components/common';
import { Topnav } from './components/menus/Topnav';
import { appRoutes } from './components/common/routes'

export const  Client = () => {
    return  (
        <Router>
            <Header>
                <Topnav/>
            </Header>
            <Content>
                    <Route exact path={appRoutes.HOME} component={Welcome}/>
                    <Route path={appRoutes.MAIN_DASHBOARD} component={Dashboard}/>
                    <Route path={appRoutes.CATEGORIES_INDEX} component={Categories}/>
            </Content>
        </Router>
    );
};

if (document.getElementById('client')) {
    ReactDOM.render(<Client/>, document.getElementById('client'));
}