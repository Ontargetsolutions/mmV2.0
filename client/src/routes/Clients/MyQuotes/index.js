/**
 * my orders
 */

import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
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


