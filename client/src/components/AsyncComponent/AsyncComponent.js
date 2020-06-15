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

// My quotes
const AsyncMyQuotesComponent = Loadable ({
  loader: () => import ('../../routes/Clients/MyQuotes/index'),
  loading: () => <RctPageLoader />,
});
const AsyncMyQuotesHardwoodComponent = Loadable ({
  loader: () => import ('../../routes/Clients/MyQuotes/index.1'),
  loading: () => <RctPageLoader />,
});
const AsyncMyQuotesIznikComponent = Loadable ({
  loader: () => import ('../../routes/Clients/MyQuotes/index.2'),
  loading: () => <RctPageLoader />,
});

// Client Dashboard
const AsyncClientDashboardComponent = Loadable ({
  loader: () => import ('../../routes/Clients/Dashboard'),
  loading: () => <RctPageLoader />,
});

// Products Page
const AsyncProductsComponent = Loadable({
  loader: () => import("../../routes/Clients/Quote/Products/Mosaics"),
  loading: () => <RctPageLoader />,
});

// View Quote
const AsyncViewQuoteComponent = Loadable({
  loader: () => import("../../routes/Clients/ViewQuote"),
  loading: () => <RctPageLoader />,
});

// View Quote
const AsyncInvoiceComponent = Loadable({
  loader: () => import("../../routes/Clients/Invoice"),
  loading: () => <RctPageLoader />,
});

// View Quote
const AsyncCheckoutComponent = Loadable({
  loader: () => import("../../routes/Clients/Checkout"),
  loading: () => <RctPageLoader />,
});

// Shop
const AsyncShopComponent = Loadable({
  loader: () => import("../../routes/Clients/Shop"),
  loading: () => <RctPageLoader />,
});

// Cart
const AsyncCartComponent = Loadable({
  loader: () => import("../../routes/Clients/Cart"),
  loading: () => <RctPageLoader />,
});

// ForgotPassword
const AsyncForgotPasswordComponent = Loadable({
  loader: () => import("../../routes/session/forgot-password"),
  loading: () => <RctPageLoader />,
});


// Services Page
const AsyncIznikServicesComponent = Loadable({
  loader: () => import("../../routes/Clients/Quote/Products/IznikTiles/index"),
  loading: () => <RctPageLoader />,
});

// Services Page
const AsyncHardwoodServicesComponent = Loadable({
  loader: () => import("../../routes/Clients/Quote/Products/HardwoodFlooring"),
  loading: () => <RctPageLoader />,
});


// Services Page
const AsyncViewAllNotificationsComponent = Loadable({
  loader: () => import("../../routes/Clients/ViewAllNotifications"),
  loading: () => <RctPageLoader />,
});

//Image
const AsyncImagesComponent = Loadable({
  loader: () => import("../../routes/Company/Images"),
  loading: () => <RctPageLoader />,
});
//Frame
const AsyncFramesComponent = Loadable({
  loader: () => import("../../routes/Company/Frames"),
  loading: () => <RctPageLoader />,
});
// User Report Page
const AsyncUserReportComponent = Loadable({
  loader: () => import("../../routes/Company/ClientsReport"),
  loading: () => <RctPageLoader />,
});
// User Page
const AsyncUserComponent = Loadable({
  loader: () => import("../../routes/Company/users"),
  loading: () => <RctPageLoader />,
});
// Users Management
const AsyncUserManagementComponent = Loadable({
  loader: () => import("../../routes/Company/Admin"),
  loading: () => <RctPageLoader />,
});


// All quotes
const AsyncQuotesMosaicsComponent = Loadable ({
  loader: () => import ('../../routes/Company/Quotes/index'),
  loading: () => <RctPageLoader />,
});
const AsyncQuotesHardwoodComponent = Loadable ({
  loader: () => import ('../../routes/Company/Quotes/index.1'),
  loading: () => <RctPageLoader />,
});
const AsyncQuotesIznikComponent = Loadable ({
  loader: () => import ('../../routes/Company/Quotes/index.2'),
  loading: () => <RctPageLoader />,
});

const AsyncSuccessfulPaymentComponent = Loadable ({
  loader: () => import ('../../routes/Clients/Checkout/components/SuccessfullPayment'),
  loading: () => <RctPageLoader />,
});
const AsyncViewAllQuoteComponent = Loadable({
  loader: () => import("../../routes/Company/ViewQuote"),
  loading: () => <RctPageLoader />,
});


export {
  AsyncSuccessfulPaymentComponent,
  AsyncViewAllQuoteComponent,
  AsyncQuotesMosaicsComponent,
  AsyncQuotesHardwoodComponent,
  AsyncQuotesIznikComponent,
  AsyncEcommerceDashboardComponent,
  AsyncSessionLoginComponent,
  AsyncSessionRegisterComponent,
  AsyncSessionForgotPasswordComponent,
  AsyncSessionPage404Component,
  AsyncProfileComponent,
  AsyncMyQuotesComponent,
  AsyncClientDashboardComponent,
  AsyncProductsComponent,
  AsyncViewQuoteComponent,
  AsyncInvoiceComponent,
  AsyncCheckoutComponent,
  AsyncShopComponent,
  AsyncCartComponent,
  AsyncForgotPasswordComponent,
  AsyncIznikServicesComponent,
  AsyncHardwoodServicesComponent,
  AsyncMyQuotesHardwoodComponent,
  AsyncMyQuotesIznikComponent,
  AsyncViewAllNotificationsComponent, 
  AsyncUserReportComponent,
  AsyncFramesComponent,
  AsyncImagesComponent,
  AsyncUserComponent,
  AsyncUserManagementComponent
};
