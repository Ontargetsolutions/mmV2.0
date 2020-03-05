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
        <div className="buttons-wrapper">
        <div className="row center">
              <NavLink to="/app/quote">
                <MatButton variant="contained" className="buttonStyle">
                  Pick your design
                </MatButton>
              </NavLink>
            </div>
        </div>
      </div>
    );
  }
}

export default clientDashboard;
