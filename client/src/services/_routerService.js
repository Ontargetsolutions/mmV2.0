// routes
import Dashboard from "../routes/dashboard";

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
  AsyncForgotPasswordComponent,
  AsyncIznikServicesComponent,
  AsyncHardwoodServicesComponent,
  AsyncMyQuotesHardwoodComponent,
  AsyncMyQuotesIznikComponent,
  AsyncViewAllNotificationsComponent,
  AsyncUserManagementComponent,
  AsyncImagesComponent,
  AsyncFramesComponent,
  AsyncUserReportComponent,
  AsyncQuotesMosaicsComponent,
  AsyncQuotesHardwoodComponent,
  AsyncQuotesIznikComponent,
  AsyncViewAllQuoteComponent
} from "../components/AsyncComponent/AsyncComponent";

export default [
  {
    path: "dashboard",
    component: Dashboard
  },
  {
    path: "profile",
    component: AsyncProfileComponent
  },
  {
    path: "myMosaicsQuotes",
    component: AsyncMyQuotesComponent
  },
  {
    path: "myIznikQuotes",
    component: AsyncMyQuotesIznikComponent
  },
  {
    path: "myHardwoodQuotes",
    component: AsyncMyQuotesHardwoodComponent
  },
  {
    path: "client",
    component: AsyncClientDashboardComponent
  },
  {
    path: "quote",
    component: AsyncProductsComponent
  },
  {
    path: "allNotifications",
    component: AsyncViewAllNotificationsComponent
  },
  {
    path: "viewQuote",
    component: AsyncViewQuoteComponent
  },
  {
    path: "viewAllQuotes",
    component: AsyncViewAllQuoteComponent
  },
  {
    path: "invoice",
    component: AsyncInvoiceComponent
  },
  {
    path: "checkout",
    component: AsyncCheckoutComponent
  },
  {
    path: "shop",
    component: AsyncShopComponent
  },
  {
    path: "custom/mosaics",
    component: AsyncProductsComponent
  },
  {
    path: "cart",
    component: AsyncCartComponent
  },
  {
    path: "forgot-password",
    component: AsyncForgotPasswordComponent
  },
  {
    path: "custom/iznik",
    component: AsyncIznikServicesComponent
  },
  {
    path: "custom/hardwood",
    component: AsyncHardwoodServicesComponent
  },
  {
    path: "MosaicsQuotes",
    component: AsyncQuotesMosaicsComponent
  },
  {
    path: "HardwoodQuotes",
    component: AsyncQuotesHardwoodComponent
  },
  {
    path: "IznikQuotes",
    component: AsyncQuotesIznikComponent
  },
  {
    path: "clientsR",
    component: AsyncUserReportComponent
  },
  {
    path: "admin",
    component: AsyncUserManagementComponent
  },
  {
    path: "images",
    component: AsyncImagesComponent
  },
  {
    path: "frames",
    component: AsyncFramesComponent
  },   {
    path: 'admin',
    component: AsyncUserManagementComponent
 },
];
