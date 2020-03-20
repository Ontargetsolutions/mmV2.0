// routes
import Dashboard from '../routes/dashboard';

// async component
import {
   AsyncProfileComponent,
   AsyncMyQuotesComponent,
   AsyncClientDashboardComponent,
   AsyncProductsComponent,
   AsyncViewQuoteComponent,
   AsyncInvoiceComponent,
   AsyncCheckoutComponent,
   AsyncShopComponent,
   AsyncCartComponent,
   AsyncForgotPasswordComponent

 } from "../components/AsyncComponent/AsyncComponent";

export default [
  {
    path: 'dashboard',
    component: Dashboard,
  },
  {
    path: 'profile',
    component: AsyncProfileComponent,
  },
  {
    path: 'myquotes',
    component: AsyncMyQuotesComponent,
  },
  {
    path: 'client',
    component: AsyncClientDashboardComponent,
  },
  {
    path: 'quote',
    component: AsyncProductsComponent,
  },
  {
    path: 'viewQuote',
    component: AsyncViewQuoteComponent,
  },
  {
    path: 'invoice',
    component: AsyncInvoiceComponent,
  },
  {
    path: 'checkout',
    component: AsyncCheckoutComponent,
  },
  {
    path: 'shop',
    component: AsyncShopComponent,
  },
  {
    path: 'custom/mosaics',
    component: AsyncProductsComponent,
  },
  {
    path: 'custom/hardwood',
    component: AsyncProductsComponent,
  },
  {
    path: 'custom/tiles',
    component: AsyncProductsComponent,
  },
  {
    path: 'cart',
    component: AsyncCartComponent,
  },
  {
    path: 'forgot-password',
    component: AsyncForgotPasswordComponent,
  },
];
