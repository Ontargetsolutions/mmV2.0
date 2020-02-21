// routes
import Dashboard from '../routes/dashboard';

// async component
import {
   AsyncProfileComponent,

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
];
