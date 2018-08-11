import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Error404 from '../Pages/Error404.jsx'
import Login from '../Pages/Login.jsx'
import Dashboard from '../Pages/Protected/Dashboard.jsx'

const PrivateRoute = ({ component: Component, authed, rest }) => (
  <Route
    {...rest}
    render={props =>
      (authed === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/', state: { from: props.location } }} />)}
  />
)

const PublicRoute = ({ component: Component, authed, rest }) => (
  <Route
    {...rest}
    render={props =>
      (authed === false
        ? <Component {...props} />
        : <Redirect to='/dashboard' />)}
  />
)

const Routes = ({ authed }) => (
  <Switch>
    <PublicRoute path='/' authed={authed} exact component={Login} />
    <PrivateRoute
      authed={authed}
      exact
      path='/dashboard'
      component={Dashboard}
    />
    <Route component={Error404} />
  </Switch>
)

export default Routes
