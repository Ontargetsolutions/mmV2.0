// sidebar nav links
export default {
   category1: [
     {
       menu_title: 'sidebar.dashboard',
       menu_icon: 'zmdi zmdi-view-dashboard',
       path: '/app/client',
       new_item: false,
       type_multi: null,
     },
     {
       menu_title: 'sidebar.profile',
       menu_icon: 'zmdi zmdi-accounts',
       path: '/app/profile',
       new_item: false,
       type_multi: null,
     },
   ],
   category2: [
     {
       menu_title: 'sidebar.myOrders',
       menu_icon: 'zmdi zmdi-flower',
       path: '/app/myquotes',
       new_item: false,
       type_multi: null,
     },
   ],
   category3: [
     {
       menu_title: 'sidebar.dashboard',
       menu_icon: 'zmdi zmdi-view-dashboard',
       path: '/app/dashboard',
       new_item: false,
       type_multi: null,
     },
   ],
   category4: [
     {
       menu_title: 'sidebar.users',
       menu_icon: 'zmdi zmdi-accounts',
       path: '/app/admin',
       new_item: false,
       type_multi: null,
     },
   ],
   category5: [
     {
       menu_title: 'sidebar.orders',
       menu_icon: 'zmdi zmdi-flower',
       path: '/app/orders',
       new_item: false,
       type_multi: null,
     },
     {
       menu_title: 'sidebar.images',
       menu_icon: 'zmdi zmdi-image',
       path: '/app/images',
       new_item: false,
       type_multi: null,
     },
     {
       menu_title: 'sidebar.frames',
       menu_icon: 'zmdi zmdi-square-o',
       path: '/app/frames',
       new_item: false,
       type_multi: null,
     },
   ],
   category6: [
     {
       menu_title: 'sidebar.reports',
       menu_icon: 'zmdi zmdi-book',
       new_item: false,
       type_multi: null,
       child_routes: [
         {
           menu_title: 'sidebar.sales',
           new_item: false,
           path: '/app/reports/sales',
         },
         {
           path: '/app/clientsR',
           new_item: false,
           menu_title: 'sidebar.users',
         },
       ],
     },
   ],
   category7: [
     {
       menu_title: 'sidebar.users',
       menu_icon: 'zmdi zmdi-accounts',
       path: '/app/products',
       new_item: false,
       type_multi: null,
     },
   ],
 };
 