import React, { Component } from "react";
import { connect } from "react-redux";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import {
  pickPaymentMethod
} from "../../../../../actions/QuoteActions";

class PaymentMethod extends Component {
  state = {
    method: "Credit/ Debit card"
  };

  componentWillMount() {
    this.props.pickArtSource("Credit/ Debit Card");
 
  }

  handleChangeRadio = (e, key) => {
    this.setState({ [key]: e.target.value });
    this.props.pickPaymentMethod(e.target.value);
    // console.log(`reducer en el  handle change  ${this.props.paymentMethod}`);
  };

  render() {
    return (
      <div className="ecom-dashboard-wrapper">
        <div className="row">
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="paymentMethod"
              name="paymentMethod"
              value={this.state.method}
              onChange={e => this.handleChangeRadio(e, "method")}
            >
              <FormControlLabel
                value="Credit/ Debit Card"
                control={<Radio />}
                label="Credit/ Debit Card"
              />
              <FormControlLabel
                value="International Wire Transfer"
                control={<Radio />}
                label="International Wire Transfer"
              />

              <FormControlLabel
                value="ACH"
                control={<Radio />}
                label="ACH"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    );
  }
}

// map state to props
const mapStateToProps = ({ quote }) => {
  const { paymentMethod  } = quote;
  return {paymentMethod };
};

export default connect(mapStateToProps, {
  pickPaymentMethod,
})(PaymentMethod);
