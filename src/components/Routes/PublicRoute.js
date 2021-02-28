import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import withAuth from '../hoc/withAuth';

const PublicRoute = ({ component: Component, isLogged,
    restricted, ...routeProps }) => (  
    <Route
        {...routeProps}
        render={props => {
            return isLogged && restricted ? 
                (<Redirect to='/contacts' />) : (<Component {...props} />)
            }
        }
    />
);

export default withAuth(PublicRoute);