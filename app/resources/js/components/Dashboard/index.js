import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Sidebar } from './Sidebar';
import { Commitment } from './commitment';


export const Dashboard = () => {
    const [loaded, setLoaded] = useState();

    return !loaded ? (
        <Loader/>
    ) : (
        <div className="dashboard-wrap">
            <div className="dashboard-left">
                <div>
                    [1,2,3,4,5].map((commitment, i) => (
                        <Commitment>
                            {trans('lorem.corp')}
                        </Commitment>
                    ))
                </div>
            </div>
            <Sidebar/>
        </div>
    );
};