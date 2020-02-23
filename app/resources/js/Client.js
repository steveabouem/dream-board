import React from 'react';
import ReactDOM from 'react-dom';
import { Dashboard } from './components/Dashboard';

class Client extends React.Component {

    render() {
        return  (
            <Dashboard greeting={'Hello world'}/>
        );
    }
}

if (document.getElementById('client')) {
    ReactDOM.render(<Client/>, document.getElementById('client'));
}