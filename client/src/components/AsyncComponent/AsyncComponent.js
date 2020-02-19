/**
 * AsyncComponent
 * Code Splitting Component / Server Side Rendering
 */
import React from 'react';
import Loadable from 'react-loadable';

// rct page loader
import RctPageLoader from '../../components/RctPageLoader/RctPageLoader';

// ecommerce dashboard
const AsyncEcommerceDashboardComponent = Loadable({
   loader: () => import("../../routes/dashboard/ecommerce"),
   loading: () => <RctPageLoader />,
});


export {
   AsyncEcommerceDashboardComponent,

};
