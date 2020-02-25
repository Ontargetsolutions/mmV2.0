/**
 * Ecommerce Dashboard
 */

import React, { Component } from "react";
// import Search from './components/Search';
// import StockPage from './components/StockGallery';
import Stepper from './components/Stepper';




// rct card box
import RctCollapsibleCard from "../../../components/RctCollapsibleCard/RctCollapsibleCard";


class Products extends Component {


  render() {
    return (
      <div className="ecom-dashboard-wrapper">
        <RctCollapsibleCard >
          <div className="row">
            {/* <Search /> */}
            <Stepper />
          </div>

            {/* <StockPage /> */}
   
        </RctCollapsibleCard>
      </div>
    );
  }
}

export default Products;
