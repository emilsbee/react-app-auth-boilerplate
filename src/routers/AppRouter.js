import {Router, Route, Switch, Link, NavLink} from 'react-router-dom'
import React from 'react'; 
import { createBrowserHistory } from 'history'
import NotFound from './../components/NotFound'
import DashboardPage from './../components/DashboardPage'
import LoginPage from './../components/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
        <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true}/>
            <PrivateRoute path="/dashboard" component={DashboardPage}/>
            <Route component={NotFound}/> 
        </Switch>
        </div>
    </Router>
)

export default AppRouter

