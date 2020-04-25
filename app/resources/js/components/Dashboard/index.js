import React, {useState, useEffect} from 'react';
import { Sidebar } from './Sidebar';
import { CommitmentsView, CommitmentDetails } from './commitment';
import { Loader, Content, ContentHeader } from '../common';
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
                        <Route exact path="/" render={() => <DashboardMain/>}/>

                        <Route exact path="/commitments" render={() => <CommitmentsView/>}/>
                        <Route path="/commitments/:id" render={() => <CommitmentDetails/>}/>

                        <Route path="/stats" render={() => <CommitmentsView/>}/>

                        <Route path="/categories" render={() => <CommitmentsView/>}/>
                        <Route path="/categories/:name" render={() => <CommitmentsView/>}/>


                        <Route path="/folders" render={() => <CommitmentsView/>}/>
                        <Route path="/folders/:name" render={() => <CommitmentsView/>}/>
                    </Switch>
                </div>
                <Sidebar/>
            </div>
        </MemoryRouter>
    );
};

const DashboardMain = () => {

    return (
        <div className="content">
            <ContentHeader>
                <div>Welcome to your dashboard. View options on the right</div>
            </ContentHeader>
        </div>
    );
};