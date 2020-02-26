/**
 * Profile Page
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  FormGroup,
  Input,
  Form,
  Label,
  Col,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import {NotificationManager} from 'react-notifications';

// intlmessages
import IntlMessages from '../../../../util/IntlMessages';

// redux action

import {updateUser} from '../../../../actions/UserActions';

const countriesStates = require ('countrycitystatejson');

class Profile extends Component {
  state = {
    name: this.props.userData.Name,
    email: this.props.userData.Email,
    phone: this.props.userData.Phone,
    address1: this.props.userData.Address1,
    address2: this.props.userData.Address2,
    city: this.props.userData.City,
    country: this.props.userData.Country,
    stateC: this.props.userData.State,
    zipcode: this.props.userData.Zip,
    id: this.props.userData.id,
  };

  handleChangeCountry = event => {
    this.setState ({country: event.target.value});
  };
  handleChangeState = event => {
    this.setState ({stateC: event.target.value});
  };

  /**
    * On Update Profile
    */
  onUpdateProfile () {
    const user = {
      Name: this.state.name,
      Phone: this.state.phone,
      // AccountType: type,
      // Company: companyName,
      // Email: this.state.email,
      Address1: this.state.address1,
      Address2: this.state.address2,
      City: this.state.city,
      Country: this.state.country,
      State: this.state.stateC,
      Zip: this.state.zipcode,
      Active: true,
      Rol: "Client",
      Id: this.state.id,
    };
    this.props.updateUser (user);
  }

  render () {
    const {userData} = this.props;
    console.log (
      `userData 111111111111111111111111: ${JSON.stringify (userData)}`
    );

    const countires = countriesStates.getCountries ();
    const statesList = countriesStates.getStatesByShort (this.state.country);

    return (
      <div className="profile-wrapper w-50">
        <h2 className="heading">
          <IntlMessages id="widgets.personalDetails" />
        </h2>
        <Form>
          <FormGroup row>
            <Label for="Name" sm={3}>
              <IntlMessages id="components.Name" />
            </Label>
            <Col sm={9}>
              <Input
                type="text"
                name="Name"
                id="Name"
                className="input-lg"
                value={this.state.name}
                onChange={e => this.setState ({name: e.target.value})}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Email" sm={3}>
              <IntlMessages id="components.Email" />
            </Label>
            <Col sm={9}>
              <Input
                type="email"
                name="Email"
                id="Email"
                readonly="readonly"
                className="input-lg"
                value={this.state.email}
                onChange={e => this.setState ({email: e.target.value})}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="telephone" sm={3}>
              <IntlMessages id="components.phoneNo" />
            </Label>
            <Col sm={9}>
              <Input
                type="tel"
                name="telephone"
                id="telephone"
                className="input-lg"
                value={this.state.phone}
                onChange={e => this.setState ({phone: e.target.value})}
              />
            </Col>
          </FormGroup>
        </Form>
        <hr />
        <h2 className="heading"><IntlMessages id="components.address" /></h2>
        <Form>
          <FormGroup row>
            <Label for="address1" sm={3}>
              <IntlMessages id="components.address1" />
            </Label>
            <Col sm={9}>
              <Input
                type="text"
                name="address1"
                id="address1"
                className="input-lg"
                value={this.state.address1}
                onChange={e => this.setState ({address1: e.target.value})}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="address2" sm={3}>
              <IntlMessages id="components.address2" />
            </Label>
            <Col sm={9}>
              <Input
                type="text"
                name="address2"
                id="address2"
                className="input-lg"
                value={this.state.address2}
                onChange={e => this.setState ({address2: e.target.value})}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="country" sm={3}>
              <IntlMessages id="components.country" />
            </Label>
            <Col sm={9}>
              <Input
                className="mb-20"
                type="select"
                bsSize="lg"
                id="country"
                value={this.state.country}
                onChange={this.handleChangeCountry}
              >
                {countires.map ((count, index) => {
                  return (
                    <option value={count.shortName} key={index}>
                      {count.name}
                    </option>
                  );
                })}
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="state" sm={3}>
              <IntlMessages id="components.state" />
            </Label>
            <Col sm={9}>
              <Input
                className="mb-20"
                type="select"
                bsSize="lg"
                id="states"
                value={this.state.stateC}
                onChange={this.handleChangeState}
              >
                {statesList.map ((state, index) => {
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
            <Label for="city" sm={3}>
              <IntlMessages id="components.city" />
            </Label>
            <Col sm={9}>
              <Input
                type="text"
                name="city"
                id="city"
                className="input-lg"
                value={this.state.city}
                onChange={e => this.setState ({city: e.target.value})}
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="zip" sm={3}>
              <IntlMessages id="components.zipCode" />
            </Label>
            <Col sm={9}>
              <Input
                type="text"
                name="zip"
                id="zip"
                className="input-lg"
                value={this.state.zipcode}
                onChange={e => this.setState ({zipcode: e.target.value})}
              />
            </Col>
          </FormGroup>
        </Form>
        <hr />
        <Button
          variant="contained"
          color="primary"
          className="text-white"
          onClick={() => this.onUpdateProfile ()}
        >
          <IntlMessages id="widgets.updateProfile" />
        </Button>
      </div>
    );
  }
}

// map state to props
const mapStateToProps = ({authUser}) => {
  const {loading, userData} = authUser;
  return {loading, userData};
};

export default connect (mapStateToProps, {
  updateUser
}) (Profile);
