import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { Form, FormGroup, Label, Input, Col } from "reactstrap";
// redux action
import Switch from "@material-ui/core/Switch";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import {
  pickDimentions,
  selectDeliveryAddress,
  pickQuantity
} from "../../../../actions/QuoteActions";

const countriesStates = require("countrycitystatejson");

class GerneralQuestions extends Component {
  state = {
    size: "",
    quantity: 1,
    checkedAddress: false,
    address1: this.props.userData.Address1,
    address2: this.props.userData.Address2,
    city: this.props.userData.City,
    type: "",
    country: this.props.userData.Country,
    stateC: this.props.userData.State,
    zipcode: this.props.userData.Zip,
    sizeMurals: "3x3"
  };

  componentDidMount() {
    this.props.selectDeliveryAddress({
      address: {
        address1: this.props.userData.Address1,
        address2: this.props.userData.Address2,
        city: this.props.userData.City,
        country: this.props.userData.Country,
        state: this.props.userData.State,
        zipcode: this.props.userData.Zip
      }
    });
    console.log(`authData ${JSON.stringify(this.props.userData)}`);
    console.log(`state ${JSON.stringify(this.state)}`);
    console.log(`reducer ${JSON.stringify(this.props.quote)}`);
    this.props.serviceSelected === "Custom-Framed Murals"
      ? this.props.pickDimentions("3x3")
      : this.props.pickDimentions("");
  }

  handleChangeRadio = (e, key) => {
    this.setState({ [key]: e.target.value });
    this.props.pickDimentions(e.target.value);
    console.log(`reducer ${JSON.stringify(this.props.quote)}`);
  };

  handleChange = name => (event, checked) => {
    this.setState({ [name]: checked });
  };

  handleChangeCountry = event => {
    this.setState({ country: event.target.value });
    this.props.fetchState(event.target.value);
  };

  handleChangeState = event => {
    this.setState({ stateC: event.target.value });
  };

  onSaveAddress = () => {
    this.props.selectDeliveryAddress({
      address: {
        address1: this.state.address1,
        address2: this.state.address2,
        city: this.state.city,
        country: this.state.country,
        state: this.state.stateC,
        zipcode: this.state.zipcode
      }
    });
    console.log(`reducer ${JSON.stringify(this.props.quote)}`);
  };

  render() {
    const { address1, address2, city, zipcode, country, stateC } = this.state;
    const countires = countriesStates.getCountries();
    const states = countriesStates.getStatesByShort(this.state.country);
    return (
      <div>
        <Form>
          <FormGroup row>
            <Col sm={6}>
              <Label for="size" sm={4}>
                Dimentions  (sq ft):
              </Label>
              {this.props.serviceSelected != "Custom-Framed Murals" && (
                <Input
                  type="size"
                  value={this.props.size}
                  name="size"
                  id="size"
                  className="has-input input-lg"
                  placeholder="Type a dimention in sft"
                  onChange={e => {
                    this.props.pickDimentions(e.target.value);
                  }}
                />
              )}
              {this.props.serviceSelected === "Custom-Framed Murals" && (
                <RadioGroup
                  aria-label="size"
                  name="sizeMurals"
                  value={this.state.sizeMurals}
                  onChange={e => this.handleChangeRadio(e, "sizeMurals")}
                  onClick={console.log(this.state.sizeMurals)}
                >
                  <FormControlLabel
                    value="3x3"
                    control={<Radio />}
                    label="3x3 ft"
                  />
                  <FormControlLabel
                    value="3x5"
                    control={<Radio />}
                    label="3x5 ft"
                  />
                </RadioGroup>
              )}
            </Col>
            <Col sm={6}>
              <Label for="quantity" sm={2}>
                Quantity:
              </Label>
              <Input
                value={this.state.quantity}
                type="number"
                name="quantity"
                id="quantity"
                className="has-input input-lg"
                placeholder="Quantity"
                onChange={e => {
                  this.setState({ quantity: e.target.value });
                  this.props.pickQuantity(e.target.value);
                }}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={6}>
              <FormGroup className="has-wrapper">
                <Label for="account">
                  Delivery address is different than residential address?
                </Label>
              </FormGroup>
            </Col>
            <Col sm={6}>
              <Switch
                checked={this.state.checkedAddress}
                onChange={this.handleChange("checkedAddress")}
                aria-label="checkedAddress"
              />
            </Col>
          </FormGroup>
          {this.state.checkedAddress && (
            <div>
              <FormGroup row>
                <Col sm={8}>
                  <Input
                    value={address1}
                    type="text"
                    name="user-address1"
                    id="address1"
                    className="has-input input-lg"
                    placeholder="Address 1"
                    onChange={e => this.setState({ address1: e.target.value })}
                  />
                </Col>
                <Col sm={4}>
                  <Input
                    value={address2}
                    type="text"
                    name="user-address2"
                    id="address2"
                    className="has-input input-lg"
                    placeholder="Address 2"
                    onChange={e => this.setState({ address2: e.target.value })}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={8}>
                  <Input
                    className="mb-20"
                    value={country}
                    type="select"
                    bsSize="lg"
                    id="country"
                    onChange={this.handleChangeCountry}
                  >
                    {countires.map((count, index) => {
                      return (
                        <option value={count.shortName} key={index}>
                          {count.name}
                        </option>
                      );
                    })}
                  </Input>
                </Col>
                <Col sm={4}>
                  <Input
                    className="mb-20"
                    value={stateC}
                    type="select"
                    bsSize="lg"
                    id="states"
                    onChange={this.handleChangeState}
                  >
                    {states.map((state, index) => {
                      return (
                        <option value={state} key={index}>
                          {state}
                        </option>
                      );
                    })}
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={8}>
                  <Input
                    value={city}
                    type="text"
                    name="user-city"
                    id="city"
                    className="has-input input-lg"
                    placeholder="City"
                    onChange={e => this.setState({ city: e.target.value })}
                  />
                </Col>
                <Col sm={4}>
                  <Input
                    value={zipcode}
                    type="text"
                    name="user-zipcode"
                    id="zipcode"
                    className="has-input input-lg"
                    placeholder="Zipcode"
                    onChange={e => this.setState({ zipcode: e.target.value })}
                  />
                </Col>
              </FormGroup>
              <FormGroup className="mb-15">
                <Button
                  className="btn-info text-white btn-block w-100"
                  variant="contained"
                  size="large"
                  onClick={() => this.onSaveAddress()}
                >
                  Update Delivery Address
                </Button>
              </FormGroup>
            </div>
          )}
        </Form>
      </div>
    );
  }
}

// map state to props
const mapStateToProps = ({ authUser, quote }) => {
  const {  userData } = authUser;
  const { serviceSelected } = quote;
  return {
    serviceSelected,
    userData,
    quote
  };
};

export default connect(mapStateToProps, {
  pickDimentions,
  pickQuantity,
  selectDeliveryAddress
})(GerneralQuestions);
