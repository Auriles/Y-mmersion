import React from 'react';
import { Route } from 'react-router-dom';
import requireAuth from './utils/requireAuth'
import App from './components/App';
import DashboardComponent from './components/dashboard/DashboardComponent';
import Login from './components/modules/Login';

const Routes = () => {
    return (
        <main>
            <Route exact path="/" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={requireAuth(DashboardComponent)}/>
        </main>
    )
}

export default (Routes);