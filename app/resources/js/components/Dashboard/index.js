import React, {useState, useEffect} from 'react';
import { Sidebar } from './Sidebar';
import { CommitmentsView, CommitmentDetails } from './commitment';
import { Loader, Content, ContentHeader } from '../common';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import { appRoutes } from '../common/routes';
import { NewDashboardItem } from '../common/forms/NewDashboardItem';


export const Dashboard = () => {
    const [loaded, setLoaded] = useState(true);
    const foldersProps = [{name: 'name', label: 'Create a new :item', type: 'string'}];
    // const commitmentsProps = {fields: [{name: 'name', label: 'Create a new :item', type: 'string'}]};

    return !loaded ? (
        <Loader/>
    ) : (
        // <MemoryRouter>
            <div className="dashboard-wrap">
                <div className="dashboard-left">
                    <Switch>
                        <Route exact path="/" render={() => <DashboardMain/>}/>

                        <Route exact path={appRoutes.COMMITMENTS.INDEX} render={() => <CommitmentsView/>}/>
                        <Route path={appRoutes.COMMITMENTS.ID} render={() => <CommitmentDetails/>}/>
                        <Route path={appRoutes.COMMITMENTS.NEW} render={() => <NewDashboardItem fields={foldersProps}/>}/>

                        <Route path="/stats" render={() => <CommitmentsView/>}/>

                        <Route path={appRoutes.CATEGORIES.INDEX} render={() => <CommitmentsView/>}/>
                        <Route path={appRoutes.COMMITMENTS.ID} render={() => <CommitmentsView/>}/>
                        <Route path={appRoutes.COMMITMENTS.NEW} render={() => <NewDashboardItem fields={foldersProps}/>}/>


                        <Route path={appRoutes.FOLDERS.INDEX} render={() => <CommitmentsView/>}/>
                        <Route path={appRoutes.FOLDERS.ID} render={() => <CommitmentsView/>}/>
                        <Route path={appRoutes.FOLDERS.NEW} render={() => <NewDashboardItem fields={foldersProps}/>}/>
                    </Switch>
                </div>
                <Sidebar/>
            </div>
        // </MemoryRouter>
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