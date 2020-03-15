import React, {useState, useEffect} from 'react';
import { Sidebar } from './Sidebar';
import { CommitmentsView } from './commitment';
import { Loader } from '../common';
import { MemoryRouter, Switch, Route } from 'react-router-dom';


export const Dashboard = () => {
    const [loaded, setLoaded] = useState(true);

    return !loaded ? (
        <Loader/>
    ) : (
        <MemoryRouter>
            <div className="dashboard-wrap">
                <div className="dashboard-left">
                    <Switch>
                        <Route path="commitments" render={() => <CommitmentsView/>}/>
                        <Route path="commitments" render={() => <CommitmentsView/>}/>
                        <Route path="stats" render={() => <CommitmentsView/>}/>
                        <Route exact path="/" render={() => <CommitmentsView/>}/>
                    </Switch>
                </div>
                <Sidebar/>
            </div>
        </MemoryRouter>
    );
};