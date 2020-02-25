// routes
import Dashboard from '../routes/dashboard';

// async component
import {
   AsyncProfileComponent,
   AsyncMyQuotesComponent,
   AsyncClientDashboardComponent,
   AsyncProductsComponent

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
];
