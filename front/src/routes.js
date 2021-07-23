import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NoMatch from './pages/NoMatch';
import ResetPassword from './pages/ResetPassword';

export default function Routes() {
    return (
       
            <Switch>
                <Route exact path="/">
                    <Dashboard />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/resetpassword">
                    <ResetPassword/>
                </Route>
                <Route path="/signup">
                    <Signup />
                </Route>
                <Route path="*">
                    <NoMatch />
                </Route>
            </Switch>
        

    )
}; 
