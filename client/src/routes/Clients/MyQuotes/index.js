/**
 * my orders
 */

import React, { Component } from "react";
import ReactTable from "./reactTable";



export default class MyOrders extends Component {
  render() {
    return (
      <div className="ecom-dashboard-wrapper">
          <ReactTable />
      </div>
    );
  }
}


