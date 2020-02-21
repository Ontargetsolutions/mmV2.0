/**
 * AsyncComponent
 * Code Splitting Component / Server Side Rendering
 */
import React from 'react';
import Loadable from 'react-loadable';

// rct page loader
import RctPageLoader from '../../components/RctPageLoader/RctPageLoader';

// ecommerce dashboard
const AsyncEcommerceDashboardComponent = Loadable ({
  loader: () => import ('../../routes/dashboard/ecommerce'),
  loading: () => <RctPageLoader />,
});

/*---------------- Session ------------------*/

// Session Login
const AsyncSessionLoginComponent = Loadable ({
  loader: () => import ('../../routes/session/login'),
  loading: () => <RctPageLoader />,
});

// Session Register
const AsyncSessionRegisterComponent = Loadable ({
  loader: () => import ('../../routes/session/register'),
  loading: () => <RctPageLoader />,
});

// Session Forgot Password
const AsyncSessionForgotPasswordComponent = Loadable ({
  loader: () => import ('../../routes/session/forgot-password'),
  loading: () => <RctPageLoader />,
});

// Session Page 404
const AsyncSessionPage404Component = Loadable ({
  loader: () => import ('../../routes/session/404'),
  loading: () => <RctPageLoader />,
});

/*---------------- Client ------------------*/

// SProfile
const AsyncProfileComponent = Loadable ({
  loader: () => import ('../../routes/Clients/Profile'),
  loading: () => <RctPageLoader />,
});

export {
  AsyncEcommerceDashboardComponent,
  AsyncSessionLoginComponent,
  AsyncSessionRegisterComponent,
  AsyncSessionForgotPasswordComponent,
  AsyncSessionPage404Component,
  AsyncProfileComponent
};
