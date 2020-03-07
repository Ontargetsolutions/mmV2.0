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
   AsyncShopComponent

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
];
