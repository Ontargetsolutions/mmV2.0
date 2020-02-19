/**
 * News Dashboard
 */

import React, { Component } from 'react'

// intl messages
import IntlMessages from 'util/IntlMessages';

// page title bar
import PageTitleBar from 'components/PageTitleBar/PageTitleBar';

export default class NewsDashboard extends Component {
   render() {
      const { match } = this.props;
      return (
         <div className="news-dashboard-wrapper">
            <PageTitleBar title={<IntlMessages id="sidebar.news" />} match={match} />
         </div>
      )
   }
}
