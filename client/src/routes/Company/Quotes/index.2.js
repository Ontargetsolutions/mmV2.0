/**
 * my orders
 */

import React, { Component } from "react";
import ReactTableIznik from "./reactTableIznik";



export default class MyOrders extends Component {
  render() {
    return (
      <div className="ecom-dashboard-wrapper">
          <ReactTableIznik />
      </div>
    );
  }
}


