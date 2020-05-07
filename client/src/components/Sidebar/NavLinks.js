// sidebar nav links
export default {
  category1: [
    {
      menu_title: "sidebar.dashboard",
      menu_icon: "zmdi zmdi-view-dashboard",
      path: "/app/client",
      new_item: false,
      type_multi: null
    },
    // {
    //   menu_title: "sidebar.shopinstock",
    //   menu_icon: "zmdi zmdi-shopping-cart-plus",
    //   path: "/app/shop",
    //   new_item: false,
    //   type_multi: null
    // }
  ],
  category2: [
    {
      path: "/app/custom/mosaics",
      menu_icon: "zmdi zmdi-grid",
      menu_title: "sidebar.mosaics"
    },
    {
      path: "/app/custom/hardwood",
      menu_icon: "zmdi zmdi-view-stream",
      menu_title: "sidebar.hardwoodFlooring"
    },
    {
      path: "/app/custom/iznik",
      menu_icon: "zmdi zmdi-view-quilt",
      menu_title: "sidebar.IznikPersian"
    }
  ],
  category3: [
    {
      menu_title: "sidebar.profile",
      menu_icon: "zmdi zmdi-accounts",
      path: "/app/profile",
      new_item: false,
      type_multi: null
    },

    {
      menu_title: "sidebar.myOrders",
      menu_icon: "zmdi zmdi-flower",
      new_item: false,
      type_multi: null,
      type_multi: null,
      child_routes: [
        {
          path: "/app/myMosaicsQuotes",
          menu_icon: "zmdi zmdi-grid",
          menu_title: "sidebar.mosaics"
        },
        {
          path: "/app/myHardwoodQuotes",
          menu_icon: "zmdi zmdi-view-stream",
          menu_title: "sidebar.hardwoodFlooring"
        },
        {
          path: "/app/myIznikQuotes",
          menu_icon: "zmdi zmdi-view-quilt",
          menu_title: "sidebar.IznikPersian"
        }
      ]
    }
  ],
  category4: [
    {
      menu_title: "sidebar.dashboard",
      menu_icon: "zmdi zmdi-view-dashboard",
      path: "/app/dashboard",
      new_item: false,
      type_multi: null
    }
  ],
  category5: [
    {
      menu_title: "sidebar.users",
      menu_icon: "zmdi zmdi-accounts",
      path: "/app/admin",
      new_item: false,
      type_multi: null
    }
  ],
  category6: [
    {
      menu_title: "sidebar.orders",
      menu_icon: "zmdi zmdi-flower",
      type_multi: null,
      child_routes: [
        {
          path: "/app/MosaicsQuotes",
          menu_icon: "zmdi zmdi-grid",
          menu_title: "sidebar.mosaics"
        },
        {
          path: "/app/HardwoodQuotes",
          menu_icon: "zmdi zmdi-view-stream",
          menu_title: "sidebar.hardwoodFlooring"
        },
        {
          path: "/app/IznikQuotes",
          menu_icon: "zmdi zmdi-view-quilt",
          menu_title: "sidebar.IznikPersian"
        }
      ]
    },
    {
      menu_title: "sidebar.images",
      menu_icon: "zmdi zmdi-image",
      path: "/app/images",
      new_item: false,
      type_multi: null
    },
    {
      menu_title: "sidebar.frames",
      menu_icon: "zmdi zmdi-square-o",
      path: "/app/frames",
      new_item: false,
      type_multi: null
    }
  ],
  category7: [
    {
      menu_title: "sidebar.reports",
      menu_icon: "zmdi zmdi-book",
      new_item: false,
      type_multi: null,
      child_routes: [
        {
          menu_title: "sidebar.sales",
          new_item: false,
          path: "/app/reports/sales"
        },
        {
          path: "/app/clientsR",
          new_item: false,
          menu_title: "sidebar.users"
        }
      ]
    }
  ],
  category8: [
    {
      menu_title: "sidebar.users",
      menu_icon: "zmdi zmdi-accounts",
      path: "/app/products",
      new_item: false,
      type_multi: null
    }
  ]
};
