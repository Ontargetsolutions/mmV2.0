/**
 * Sign Up With Firebase
 */
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Col } from "reactstrap";
import LinearProgress from "@material-ui/core/LinearProgress";
import QueueAnim from "rc-queue-anim";
import Switch from "@material-ui/core/Switch";
// components
import { SessionSlider } from "../components/Widgets";
import { NotificationManager } from "react-notifications";
import SweetAlert from "react-bootstrap-sweetalert";

// intl messages
import IntlMessages from "../util/IntlMessages";

// app config
import AppConfig from "../constants/AppConfig";

// redux action
import { signupUserInFirebase, fetchCountry, fetchState } from "../actions";

const countriesStates = require("countrycitystatejson");

class SignupFirebase extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    type: "",
    companyName: "",
    country: "AD",
    stateC: "",
    zipcode: "",
    checkedCompany: false,
    errorPassword: false,
    errorEmail: false,
    errorPhone: false,
    success: false
  };

  handleChangeCountry = event => {
    this.setState({ country: event.target.value });
  };

  handleChangeState = event => {
    this.setState({ stateC: event.target.value });
  };

  handleChange = name => (event, checked) => {
    this.setState({ [name]: checked });
    if (this.state.checkedCompany) {
      this.setState({ type: "personal" });
    } else {
      this.setState({ type: "company" });
    }
  };

  validatePhone(phone) {
    var validNumber = "0123456789.-";
    for (let i = 0; i < phone.length; i++) {
      if (validNumber.indexOf(phone.charAt(i)) == -1) {
        this.setState({ errorPhone: true });
        break;
      }
    }
    this.setState({ errorPhone: false });
  }
  /**
   * On Confirm dialog
   * @param {string} key
   */
  onConfirm(key) {
    this.setState({ [key]: false });
    window.location = "/signin";
  }
  /**
   * Open Alert
   * @param {key} key
   */
  openAlert(key) {
    this.setState({ [key]: true });
  }
  /**
   * On User Signup
   */
  onUserSignUp() {
    const {
      email,
      password,
      name,
      phone,
      address1,
      address2,
      city,
      country,
      stateC,
      zipcode,
      companyName,
      type
    } = this.state;

    this.validatePhone(phone);

    if (
      email !== "" &&
      password !== "" &&
      name !== "" &&
      phone !== "" &&
      address1 !== "" &&
      country !== "" &&
      city !== "" &&
      zipcode !== ""
    ) {
      if (stateC !== "") {
        console.log(`state ${JSON.stringify(this.state)}`);
        if (password.length < 6) {
          NotificationManager.error(
            "Password length has to be at least 6 characteres"
          );
          this.setState({ errorPassword: true });
        } else {
          if (this.state.errorPhone) {
            NotificationManager.error("Please enter a valid phone number");
          } else {
            this.setState({ errorPassword: false });
            this.setState({ errorPhone: false });
            this.props.signupUserInFirebase(
              {
                email,
                password,
                name,
                phone,
                address1,
                address2,
                city,
                country,
                stateC,
                zipcode,
                type,
                companyName
              },
              this.props.history
            );
          }
        }
      } else {
        NotificationManager.error("You must to choose an State");
      }
    } else {
      NotificationManager.error("You must fill all data required");
    }
  }

  render() {
    const {
      name,
      email,
      password,
      phone,
      address1,
      address2,
      city,
      companyName,
      country,
      state,
      zipcode
    } = this.state;
    const { loading } = this.props;

    const countires = countriesStates.getCountries();
    const states = countriesStates.getStatesByShort(this.state.country);

    return (
      <QueueAnim type="bottom" duration={2000}>
        <div className="rct-session-wrapper">
          {loading && <LinearProgress />}
          <AppBar position="static" className="session-header">
            <Toolbar>
              <div className="container">
                <div className="d-flex justify-content-between">
                  <div className="session-logo">
                    <Link to="/">
                      {/* <img
                        src={AppConfig.appLogo}
                        alt="session-logo"
                        width="110"
                        height="35"
                      /> */}
                    </Link>
                  </div>
                  <div>
                    <Link to="/signin" className="mr-15 text-white">
                      Already have an account?
                    </Link>
                    <Button
                      component={Link}
                      to="/signin"
                      variant="contained"
                      className="btn-light"
                    >
                      Sign In
                    </Button>
                  </div>
                </div>
              </div>
            </Toolbar>
          </AppBar>
          <div className="session-inner-wrapper">
            <div className="container">
              <div className="row row-eq-height">
                <div className="col-sm-10 col-md-10 col-lg-10">
                  <div className="session-body text-center">
                    <div className="session-head mb-15">
                      <h2>Get started with {AppConfig.brandName}</h2>
                    </div>
                    <Form>
                      <FormGroup row>
                        <Col sm={8}>
                          {/* <FormGroup className="has-wrapper"> */}
                          <Input
                            type="text"
                            value={name}
                            name="user-name"
                            id="user-name"
                            className="has-input input-lg"
                            placeholder="Your Name"
                            onChange={e =>
                              this.setState({ name: e.target.value })
                            }
                          />
                        </Col>
                        <Col sm={4}>
                          {/* <FormGroup className="has-wrapper"> */}
                          <Input
                            value={password}
                            type="Password"
                            name="user-pwd"
                            id="pwd"
                            className="has-input input-lg"
                            placeholder="Password"
                            onChange={e =>
                              this.setState({ password: e.target.value })
                            }
                          />
                          {this.state.errorPassword && (
                            <p className="text-danger">
                              * Password hast to have at least 6 characteres
                            </p>
                          )}
                        </Col>
                      </FormGroup>

                      <FormGroup row>
                        <Col sm={8}>
                          <FormGroup className="has-wrapper">
                            <Input
                              type="mail"
                              value={email}
                              name="user-mail"
                              id="user-mail"
                              className="has-input input-lg"
                              placeholder="Email Address"
                              onChange={e =>
                                this.setState({ email: e.target.value })
                              }
                            />
                          </FormGroup>
                        </Col>
                        <Col sm={4}>
                          <FormGroup className="has-wrapper">
                            <Input
                              value={phone}
                              type="phone"
                              name="user-phone"
                              id="phone"
                              className="has-input input-lg"
                              placeholder="Phone"
                              onChange={e =>
                                this.setState({ phone: e.target.value })
                              }
                            />
                            {this.state.errorPassword && (
                              <p className="text-danger">
                                * Please eneter a valid phone number
                              </p>
                            )}
                          </FormGroup>
                        </Col>
                      </FormGroup>

                      <FormGroup row>
                        <Col sm={6}>
                          <FormGroup className="has-wrapper">
                            <Label for="account">
                              <IntlMessages id="components.Company account" />
                            </Label>
                            <Switch
                              checked={this.state.checkedCompany}
                              onChange={this.handleChange("checkedCompany")}
                              aria-label="checkedCompany"
                            />
                          </FormGroup>
                        </Col>
                        <Col sm={6}>
                          {this.state.checkedCompany && (
                            <FormGroup className="has-wrapper">
                              <Input
                                value={companyName}
                                type="text"
                                name="user-company"
                                id="companyName"
                                className="has-input input-lg"
                                placeholder="Company Name"
                                onChange={e =>
                                  this.setState({ companyName: e.target.value })
                                }
                              />
                            </FormGroup>
                          )}
                        </Col>
                      </FormGroup>

                      <FormGroup row>
                        <Col sm={8}>
                          <Input
                            value={address1}
                            type="text"
                            name="user-address1"
                            id="address1"
                            className="has-input input-lg"
                            placeholder="Address 1"
                            onChange={e =>
                              this.setState({ address1: e.target.value })
                            }
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
                            onChange={e =>
                              this.setState({ address2: e.target.value })
                            }
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup row>
                        <Col sm={8}>
                          <Input
                            className="mb-20"
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
                            onChange={e =>
                              this.setState({ city: e.target.value })
                            }
                          />
                        </Col>
                        <Col sm={4}>
                          <Input
                            value={zipcode}
                            type="text"
                            name="user-zipcode"
                            id="zipcode"
                            className="has-input input-lg"
                            placeholder="Zip code"
                            onChange={e =>
                              this.setState({ zipcode: e.target.value })
                            }
                          />
                        </Col>
                      </FormGroup>
                      <FormGroup className="mb-15">
                        <Button
                          className="btn-info text-white btn-block w-100"
                          variant="contained"
                          size="large"
                          onClick={() => {
                            this.onUserSignUp();
                            this.openAlert("success");
                          }}
                        >
                          Sign Up
                        </Button>
                      </FormGroup>
                    </Form>
                    <p className="text-muted">
                      By signing up you agree to {AppConfig.brandName}
                    </p>
                    {/* <p>
                      <Link to="/terms-condition" className="text-muted">
                        Terms of Service
                      </Link>
                    </p> */}
                  </div>
                </div>
                <div className="col-sm-2 col-md-2 col-lg-2">
                  {/* <SessionSlider /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <SweetAlert
          success
          show={this.state.success}
          title="Check your email to validate your account before to sign in!"
          btnSize="sm"
          onConfirm={() => {
            this.onConfirm("success");
          }}
        />
      </QueueAnim>
    );
  }
}

// map state to props
const mapStateToProps = ({ authUser }) => {
  const { loading } = authUser;
  return { loading };
};

export default connect(mapStateToProps, {
  signupUserInFirebase
})(SignupFirebase);
