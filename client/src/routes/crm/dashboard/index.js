/**
 * Crm Dashboard
 */
/* eslint-disable */
import React, { Component } from 'react'
import { Helmet } from "react-helmet";

// intl messages
import IntlMessages from 'util/IntlMessages';

// page title bar
import PageTitleBar from 'components/PageTitleBar/PageTitleBar';

export default class CrmDashboard extends Component {
   render() {
      const { match } = this.props;

      return (
         <div className="ecom-dashboard-wrapper">
            <Helmet>
               <title>Crm Dashboard</title>
               <meta name="description" content="Reactify Crm Dashboard" />
            </Helmet>
            <PageTitleBar title={<IntlMessages id="sidebar.crm" />} match={match} />
         </div>
      )
   }
}
