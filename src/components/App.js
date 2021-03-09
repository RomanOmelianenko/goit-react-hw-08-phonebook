import React, { Component, Suspense } from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Layout from './Layout/Layout';
import HeaderNav from './HeaderNav/HeaderNav';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import routes from '../routes';
import { authOperations } from '../redux/auth';
import Loader from '../helpers/Loader/Loader';

// const AsyncHomeView = lazy(() =>
//   import('../views/HomeView' /* webpackChunkName: "home-view" */),
// );

// const AsyncRegisterView = lazy(() =>
//   import('../views/RegisterView' /* webpackChunkName: "register-view" */),
// );
// const AsyncLoginView = lazy(() =>
//   import('../views/LoginView/LoginView' /* webpackChunkName: "login-view" */),
// );
// const AsyncContactsView = lazy(() =>
//   import('../views/ContactsView/ContactsView' /* webpackChunkName: "contacts-view" */),
// );

// const AsyncPageNotFound = lazy(() => 
//     import('../views/PageNotFound' /* webpackChunkName: "ShowDetails" */)
// );

class App extends Component {

  componentDidMount() {
    this.props.onGetCurrentUser();
  };

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <HeaderNav/>
          <Suspense fallback={<Loader />}>
            <Switch>
              {/* <PublicRoute path="/" exact component={AsyncHomeView} />
              <PublicRoute path="/register" restricted component={AsyncRegisterView} />
              <PublicRoute path="/login" restricted component={AsyncLoginView} />
              <PrivateRoute path="/contacts" component={AsyncContactsView} />
              <Redirect to="/" /> */}
              {/* <Route component={AsyncPageNotFound} /> */}
              
              {routes.map(route => {   
                return route.private ?
                  <PrivateRoute key={route.label} {...route} /> 
                  :
                  <PublicRoute key={route.label} {...route} restricted={route.restricted} /> 
              })}

              <Redirect to="/" />
              
              {/* <Route component={AsyncNotFound} /> */}
            </Switch>
          </Suspense>
        </Layout>
      </BrowserRouter>
    )
  };
};

export default connect(null, {onGetCurrentUser: authOperations.getCurrentUser})(App);
