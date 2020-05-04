/**
* Report Page
*/
import React, { Component } from 'react';
import Table from './reactTable';


export default class Report extends Component {
   // Alert Dismiss

   render() {
      return (
         <div className="report-wrapper">
            {/* <Helmet>
               <title>Reactify | Clients Report</title>
               <meta name="description" content="Reactify Reports" />
            </Helmet>
            <PageTitleBar title={<IntlMessages id="sidebar.Clientreport" />} match={this.props.match} /> */}
           <Table />
         </div>
      );
   }
}
