import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import withAuth from '../hoc/withAuth';

const PrivateRoute = ({ component: Component, isLogged, ...routeProps }) => (
    <Route
        {...routeProps}
        render={props => isLogged ? <Component {...props} /> : <Redirect to='/login' />}  
    />
);

export default withAuth(PrivateRoute);