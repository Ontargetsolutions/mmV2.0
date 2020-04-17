import React, { Component } from "react";
import Stepper from './Stepper';


// rct card box
import RctCollapsibleCard from "../../../../../components/RctCollapsibleCard/RctCollapsibleCard";


class IznikTiles extends Component {


  render() {
    return (
      <div className="ecom-dashboard-wrapper">
        <RctCollapsibleCard >
          <div className="row">
            <Stepper />
          </div>
        </RctCollapsibleCard>
      </div>
    );
  }
}

export default IznikTiles;
