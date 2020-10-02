/**
 * Ecommerce Dashboard
 */

import React, { Component } from "react";
import MatButton from "@material-ui/core/Button";
import "../../../assets/css/style.css";
import { NavLink } from "react-router-dom";

import Carousel from "./slider";


class clientDashboard extends Component {


  render() {
    return (
      <div>
        <Carousel />
      </div>
    );
  }
}

export default clientDashboard;
