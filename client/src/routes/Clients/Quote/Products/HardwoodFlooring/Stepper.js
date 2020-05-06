/*====== Vertical Stapper =====*/
import React from "react";
import { connect } from "react-redux";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import SweetAlert from "react-bootstrap-sweetalert";
import {Redirect, Route} from 'react-router-dom';

import Types from "./Types";
import Style from "./Style";
import Finsih from "./Finish";
import GerneralQuestions from "./GeneralQuestions";

import { saveQuote, pickProduct } from "../../../../../actions";
// intl messages
import IntlMessages from "../../../../../util/IntlMessages";

import { NavLink } from "react-router-dom";

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
    success: false
  };

  getSteps = hardwoodType => {
    if (
      hardwoodType === "Parquet" ||
      hardwoodType === "Solid Flooring" ||
      hardwoodType === "Engineered Hardwood Flooring"
    ) {
      return [
        "Select a hardwood/ flooring type",
        "Select a style",
        "Select the finish",
        // "Select accesories",
        "General questions"
      ];
    } else {
      return [
        "Select a hardwood/ flooring type",
        "Select the finish",
        // "Select accesories",
        "General questions"
      ];
    }
  };

  getStepContent = step => {
    switch (step) {
      case 0:
        return <Types />;
      case 1: {
        return this.props.hardwoodType === "Parquet" ||
          this.props.hardwoodType === "Solid Flooring" ||
          this.props.hardwoodType === "Engineered Hardwood Flooring" ? (
          <Style />
        ) : (
          <Finsih />
        );
      }
      case 2:
        return this.props.hardwoodType === "Parquet" ||
          this.props.hardwoodType === "Solid Flooring" ||
          this.props.hardwoodType === "Engineered Hardwood Flooring" ? (
          <Finsih />
        ) : (
          //accesories
          <GerneralQuestions />
        );

      // case 3:
      //   return (this.props.hardwoodType === "Parquet" ||
      //   this.props.hardwoodType === "Solid Flooring" ||
      //   this.props.hardwoodType === "Engineered Hardwood Flooring") ? (
      //     <Types />
      //   ) : (
      //     <GerneralQuestions />
      //   );
      case 3:
        return <GerneralQuestions />;
      default:
        return <GerneralQuestions />;
    }
  };

  handleNext = (isFinished, e) => {
    e.preventDefault();
    if (isFinished)
      this.props.saveQuote({ ...this.props.quote, user: this.props.userData });
    this.setState({
      activeStep: this.state.activeStep + 1
    });
  };
  /**
   * On Confirm dialog
   * @param {string} key
   */
  onConfirm(key) {
    this.setState({ [key]: false });
    window.location = "/app/client";
  }
  /**
   * Open Alert
   * @param {key} key
   */
  openAlert(key) {
    this.setState({ [key]: true });
  }
  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  disableNext() {
    if (this.state.activeStep === 2 && this.props.hardwoodSelected === "") {
      return true;
    } else {
      if (this.state.activeStep === 2 && this.props.hardwoodSelected === "") {
        return true;
        // }
        // else {
        //   if (
        //     this.props.serviceSelected != "Custom-Framed Murals" &&
        //     this.state.activeStep === 3 &&
        //     this.props.size === ""
        //   ) {
        //     return true;
      } else {
        return false;
      }
    }
  }

  componentDidMount() {
    this.props.pickProduct("HardwoodFlooring");
    console.log(`se recargo el stepper`);
  }

  render() {
    const steps = this.getSteps(this.props.hardwoodType);
    const { activeStep, success } = this.state;

    return (
      <div>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  {this.getStepContent(index)}
                  <div>
                    {activeStep != 0 && (
                      <Button
                        variant="contained"
                        className="btn-danger text-white mr-10 mb-10"
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                      >
                        Back
                      </Button>
                    )}

                    <Button
                      variant="contained"
                      color="primary"
                      className="text-white mr-10 mb-10"
                      onClick={e => {
                        this.handleNext(activeStep === steps.length - 1, e);
                      }}
                      disabled={this.disableNext()}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </div>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className="pl-40">
            <SweetAlert
              success
              show={success}
              title="Your Order Is Successfully Placed !"
              btnSize="sm"
              onConfirm={() => {
                this.onConfirm("success");
              }}
            />
            <p>
              All steps completed - you&quot;re finished, our agents will
              contact you soon to finalize your order.
            </p>
            {/* <NavLink to="/app/client"> */}
              <Button
                variant="contained"
                color="primary"
                className="text-white"
                onClick={() => this.openAlert("success")}
              >
                <IntlMessages id="components.placeOrder" />
              </Button>
            {/* </NavLink> */}
          </Paper>
        )}
      </div>
    );
  }
}

// map state to props
const mapStateToProps = ({ quote, authUser }) => {
  const {
    material,
    serviceSelected,
    imageSelectedId,
    frameSelected,
    size,
    productSelected,
    hardwoodSelected,
    hardwoodType
  } = quote;
  const { userData } = authUser;
  return {
    material,
    serviceSelected,
    imageSelectedId,
    frameSelected,
    size,
    quote,
    userData,
    productSelected,
    hardwoodSelected,
    hardwoodType
  };
};

export default connect(mapStateToProps, { saveQuote, pickProduct })(
  VerticalLinearStepper
);
