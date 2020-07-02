/**
 * Billing Form Component
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, FormGroup, Input, Label, Col, FormText} from 'reactstrap';
import Button from '@material-ui/core/Button';
import {
  saveShipingAddress,
  getDeliveryFee,
} from '../../../../actions/QuoteActions';

// intl messages
import IntlMessages from '../../../../util/IntlMessages';

class shippingForm extends Component {
  state = {
    shippingInformation: {
      firstName: '',
      lastName: '',
      emailId: '',
      mobileNumber: '',
      addressLine1: '',
      addressLine2: '',
      country: '',
      zipCode: '',
      state: '',
      city: '',
    },
  };

  /**
   * On Change shipping Information
   */
  onChangeshippingInformation (key, value) {
    this.setState ({
      shippingInformation: {
        ...this.state.shippingInformation,
        [key]: value,
      },
    });
  }

  /**
   * Function To Check Either The Form Is Valid Or Not
   * Return Boolean
   */
  isFormValid () {
    // console.log(this.state);
    const {
      firstName,
      emailId,
      mobileNumber,
      addressLine1,
      zipCode,
      country,
      state,
      city,
    } = this.state.shippingInformation;
    if (
      firstName !== '' &&
      emailId !== '' &&
      addressLine1 !== '' &&
      mobileNumber !== '' &&
      zipCode !== '' &&
      country !== '' &&
      state !== '' &&
      city !== '' &&
      this.props.orderPlaced === true
    ) {
      return true;
    } else {
      return false;
    }
  }

  render () {
    let newShippingTo = {
      Name: this.state.shippingInformation.firstName +
        ' ' +
        this.state.shippingInformation.lastName,
      Phone: this.state.shippingInformation.mobileNumber,
      Company: '',
      Email: this.state.shippingInformation.emailId,
      Address1: this.state.shippingInformation.addressLine1,
      Address2: this.state.shippingInformation.addressLine2,
      City: this.state.shippingInformation.city,
      Country: this.state.shippingInformation.country,
      State: this.state.shippingInformation.state,
      Zip: this.state.shippingInformation.zipCode,
    };
    return (
      <div className="shipping-form-warp py-4">
        <Form>
          <FormGroup row>
            <Col sm={6}>
              <Label for="firstName">
                <IntlMessages id="components.firstName" />
                <span className="text-danger">*</span>
              </Label>
              <Input
                type="text"
                name="first name"
                id="firstName"
                className="mb-4 mb-sm-0"
                onChange={e =>
                  this.onChangeshippingInformation (
                    'firstName',
                    e.target.value
                  )}
              />
            </Col>
            <Col sm={6}>
              <Label for="lastName">
                <IntlMessages id="components.lastName" />
              </Label>
              <Input
                type="text"
                name="last name"
                id="lastName"
                onChange={e =>
                  this.onChangeshippingInformation ('lastName', e.target.value)}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={6}>
              <Label for="emailId">
                <IntlMessages id="components.email" />
                <span className="text-danger">*</span>
              </Label>
              <Input
                type="email"
                name="mail"
                id="emailId"
                className="mb-4 mb-sm-0"
                onChange={e =>
                  this.onChangeshippingInformation ('emailId', e.target.value)}
              />
            </Col>
            <Col sm={6}>
              <Label for="contactNumber">
                <IntlMessages id="components.mobileNumber" />
                <span className="text-danger">*</span>
              </Label>
              <Input
                type="tel"
                name="number"
                id="contactNumber"
                onChange={e =>
                  this.onChangeshippingInformation (
                    'mobileNumber',
                    e.target.value
                  )}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={12}>
              <Label for="address1">
                <IntlMessages id="components.address" />1
                <span className="text-danger">*</span>
              </Label>
              <Input
                type="textarea"
                name="address"
                id="address1"
                onChange={e =>
                  this.onChangeshippingInformation (
                    'addressLine1',
                    e.target.value
                  )}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={6}>
              <Label for="address2">
                <IntlMessages id="components.address2Optional" />
              </Label>
              <Input
                type="text"
                name="address"
                id="address2"
                onChange={e =>
                  this.onChangeshippingInformation (
                    'addressLine2',
                    e.target.value
                  )}
              />
            </Col>
            <Col sm={6}>
              <Label for="city">
                <IntlMessages id="components.city" />
                <span className="text-danger">*</span>
              </Label>
              <Input
                type="text"
                name="city"
                id="cityName"
                className="mb-4 mb-sm-0"
                onChange={e =>
                  this.onChangeshippingInformation ('city', e.target.value)}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col sm={4}>
              <Label for="countryName">
                <IntlMessages id="components.country" />
                <span className="text-danger">*</span>
              </Label>
              <Input
                type="text"
                name="country"
                id="countryName"
                className="mb-4 mb-sm-0"
                onChange={e =>
                  this.onChangeshippingInformation ('country', e.target.value)}
              />
            </Col>
            <Col sm={4}>
              <Label for="stateName">
                <IntlMessages id="components.state" />
                <span className="text-danger">*</span>
              </Label>
              <Input
                type="text"
                name="state"
                id="stateName"
                className="mb-4 mb-sm-0"
                onChange={e =>
                  this.onChangeshippingInformation ('state', e.target.value)}
              />
            </Col>
            <Col sm={4}>
              <Label for="zip">
                <IntlMessages id="components.zip" />
                <span className="text-danger">*</span>
              </Label>
              <Input
                type="number"
                name="zip"
                id="zip"
                onChange={e =>
                  this.onChangeshippingInformation ('zipCode', e.target.value)}
              />
            </Col>
          </FormGroup>
          {/* <FormGroup row className="mb-0">
                  <Col sm={12}>
                     <Label className="ml-4">
                        <Input type="checkbox" /><IntlMessages id="components.ShippingAddressText" />
                     </Label>
                  </Col>
               </FormGroup> */}
          <FormText color="danger">
            All fields marked with an asterisk (*) are required
          </FormText>
        </Form>
        <div className="d-flex justify-content-end">
          <Button
            disabled={!this.isFormValid ()}
            onClick={() => {
              this.props.saveShipingAddress (newShippingTo);
              this.props.onComplete ();
            }}
            color="primary"
            variant="contained"
          >
            <IntlMessages id="components.saveContinue" />
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ecommerce, quote, authUser, settings}) => {
  const {
    myOrders,
    actualQuote,
    actualImage,
    quoteMoneyData,
    orderPlaced,
  } = quote;
  const {cart} = ecommerce;
  const {userData} = authUser;
  return {
    myOrders,
    userData,
    actualQuote,
    settings,
    actualImage,
    quoteMoneyData,
    orderPlaced,
    cart,
  };
};

export default connect (mapStateToProps, {saveShipingAddress, getDeliveryFee}) (
  shippingForm
);
