/**
 * my orders
 */

import React, { Component } from "react";
import ReactTableMosaics from "./reactTableMosaics";



export default class MyOrders extends Component {
  render() {
    return (
      <div className="ecom-dashboard-wrapper">
          <ReactTableMosaics />
      </div>
    );
  }
}


