/**
 * Ecommerce Dashboard
 */

import React, { Component } from "react";
import { FormGroup, Input, Label, Col } from "reactstrap";
import MatButton from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

// rct card box
import RctCollapsibleCard from "../../../components/RctCollapsibleCard/RctCollapsibleCard";

import { pickService } from "../../../actions/QuoteActions";



class Services extends Component {
  state = {
    service: "Custom-Framed Murals"
  };

  handleChangeRadio = (e, key) => {
    this.setState({ [key]: e.target.value });
    this.props.pickService(e.target.value);
  };

  componentWillMount() {
    this.props.pickService("Custom-Framed Murals");
  }

  render() {
    return (
      <div className="ecom-dashboard-wrapper">
      
          <div className="row">
            {/* <Col md={3} sm={12}> */}
              <FormControl component="fieldset">
                {/* <FormLabel
                  className="productsRadiobuttonHeader"
                  component="legend"
                >
                  Products:
                </FormLabel> */}
                <RadioGroup
                  aria-label="service"
                  name="service"
                  value={this.state.service}
                  onChange={e => {
                    // e.preventDefault;
                    this.handleChangeRadio(e, "service");
                  }}
                >
                  <FormControlLabel
                    value="Custom-Framed Murals"
                    control={<Radio />}
                    label="Custom-Framed Murals"
                  />
                  <FormControlLabel
                    value="Kitchen-Backsplash"
                    control={<Radio />}
                    label="Kitchen-Backsplash"
                  />
                  <FormControlLabel
                    value="Bathroom"
                    control={<Radio />}
                    label="Bathroom"
                  />
                  <FormControlLabel
                    value="Living-Dining"
                    control={<Radio />}
                    label="Living-Dining"
                  />
                  <FormControlLabel
                    value="Floors-Walls"
                    control={<Radio />}
                    label="Floors-Walls"
                  />
                  <FormControlLabel
                    value="Pools"
                    control={<Radio />}
                    label="Pools"
                  />
                </RadioGroup>
              </FormControl>
            {/* </Col> */}
            {/* <Col md={9} sm={12}>
              {this.state.service === "Custom-Framed Murals" && <CarMurals />}
              {this.state.service === "Kitchen-Backsplash" && <CarKitchen />}
              {this.state.service === "Bathroom" && <CarBath />}
              {this.state.service === "Living-Dining" && <CarLiving />}
              {this.state.service === "Floors-Walls" && <CarFloor />}
              {this.state.service === "Pools" && <CarPools />}
            </Col> */}
          </div>
    
      </div>
    );
  }
}

// map state to props
const mapStateToProps = ({ quote }) => {
  const { serviceSelected } = quote;
  return { serviceSelected };
};

export default connect(mapStateToProps, {
  pickService
})(Services);
