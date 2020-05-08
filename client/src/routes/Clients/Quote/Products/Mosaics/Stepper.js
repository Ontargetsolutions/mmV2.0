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

import Material from "./Material";
import Services from "../../../Services/index";
import Patterns from "./Search";
import StockGallery from "./StockGallery";
import UpladPic from "./UploadPicture";
import GerneralQuestions from "./GeneralQuestions";
import Frames from "./Frames";
import WallFloor from "./WallFloor";

import { saveQuote, pickProduct } from "../../../../../actions";
// intl messages
import IntlMessages from "../../../../../util/IntlMessages";

import { NavLink } from "react-router-dom";

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
    success: false
  };

  getSteps = productSelected => {
    return productSelected === "Custom-Framed Murals"
      ? [
          "Select a product",
          "Select an art source",
          "Select your art",
          "Select the frame",
          "General questions"
        ]
      : [
          "Select a product",
          "Select an art source",
          "Select your art",

          "General questions"
        ];
  };

  getStepContent = step => {
    switch (step) {
      case 0:
        return <Services />;
      case 1:
        return <Material />;
      case 2: {
        switch (this.props.artSource) {
          case "Extensive Gallery":
            return <StockGallery />;
          case "Patterns":
            return <Patterns />;
          case "Wall-Floor Art":
            return <WallFloor />;
          default:
            return <UpladPic />;
        }
      }
      case 3: {
        return this.props.serviceSelected === "Custom-Framed Murals" ? (
          <Frames />
        ) : (
          <GerneralQuestions />
        );
      }
      case 4:
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

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1
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
  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  disableNext() {
    if (this.state.activeStep === 2 && this.props.imageSelectedId === "") {
      return true;
    } else {
      if (
        this.state.activeStep === 3 &&
        this.props.frameSelected === "" &&
        this.props.serviceSelected === "Custom-Framed Murals"
      ) {
        return true;
      } else {
        if (
          this.props.serviceSelected != "Custom-Framed Murals" &&
          this.state.activeStep === 3 &&
          this.props.size === ""
        ) {
          return true;
        } else {
          return false;
        }
      }
    }
  }

  componentDidMount() {
    this.props.pickProduct("Mosaics");
  }
  render() {
    const steps = this.getSteps(this.props.serviceSelected);
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
              <IntlMessages id="components.submitQuote" />
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
    artSource,
    serviceSelected,
    imageSelectedId,
    frameSelected,
    size
  } = quote;
  const { userData } = authUser;
  return {
    artSource,
    serviceSelected,
    imageSelectedId,
    frameSelected,
    size,
    quote,
    userData
  };
};

export default connect(mapStateToProps, { saveQuote, pickProduct })(
  VerticalLinearStepper
);
