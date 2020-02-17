/**
 * App.js Layout Start Here
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';
import {NotificationContainer} from 'react-notifications';

// rct theme provider
import RctThemeProvider from './RctThemeProvider';

//Horizontal Layout
import HorizontalLayout from './HorizontalLayout';

//Agency Layout
import AgencyLayout from './AgencyLayout';

//Main App
import RctDefaultLayout from './DefaultLayout';

// boxed layout
import RctBoxedLayout from './RctBoxedLayout';
// CRM layout
import CRMLayout from './CRMLayout';
// app signin
import AppSignIn from './SigninFirebase';
import AppSignUp from './SignupFirebase';

import {getUser} from 'Actions';

// async components
import {
  AsyncSessionLoginComponent,
  AsyncSessionRegisterComponent,
  AsyncSessionLockScreenComponent,
  AsyncSessionForgotPasswordComponent,
  AsyncSessionPage404Component,
  AsyncSessionPage500Component,
  AsyncTermsConditionComponent,
  AsyncClientDashboardComponent,
  AsyncProductsComponent
} from 'Components/AsyncComponent/AsyncComponent';

//Auth0
import Auth from '../Auth/Auth';

// callback component
import Callback from 'Components/Callback/Callback';

//Auth0 Handle Authentication
const auth = new Auth ();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test (location.hash)) {
    auth.handleAuthentication ();
  }
};

/**
 * Initial Path To Check Whether User Is Logged In Or Not
 */
const InitialPath = ({component: Component, authUser, ...rest}) => (
  <Route
    {...rest}
    render={
      authUser
        ? <Component {...props} />
        : <Redirect
            to={{
              pathname: '/signin',
              state: {from: props.location},
            }}
          />}
  />
);

class App extends Component {
  componentDidMount () {
    const email = this.props.userAuthe;
    this.props.getUser (email);
  }

  render () {
    const {location, match, user, userAuthe, userData} = this.props;
    if (location.pathname === '/') {
      if (user === null) {
        return <Redirect to={'/signin'} />;
      } else {
        if (userData.Rol != 'Client') {
           return <Redirect to={'/app/client' } />;
         } else {
            return <Redirect to={'/app/client'} />;
        }
      }
    }
    return (
      <RctThemeProvider>
        <NotificationContainer />
        <InitialPath
          path={`${match.url}app`}
          authUser={user}
          component={RctDefaultLayout}
        />
        <Route path="/dashboard" component={CRMLayout} />
        <Route path="/signin" component={AppSignIn} />
        <Route path="/signup" component={AppSignUp} />
        <Route path="/session/login" component={AsyncSessionLoginComponent} />
   
        <Route
          path="/session/register"
          component={AsyncSessionRegisterComponent}
        />

        <Route path="/session/404" component={AsyncSessionPage404Component} />

      </RctThemeProvider>
    );
  }
}

// map state to props
const mapStateToProps = ({authUser}) => {
  const {user, userAuthe, userData} = authUser;
  return {user, userAuthe, userData};
};

export default connect (mapStateToProps, {getUser}) (App);
