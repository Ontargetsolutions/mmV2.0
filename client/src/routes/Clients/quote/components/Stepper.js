/*====== Vertical Stapper =====*/
import React from "react";
import { connect } from "react-redux";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

import Material from "../components/Material";
import Services from "../../Services/index";
import Patterns from "../components/Search";
import StockGallery from "../components/StockGallery";
import UpladPic from "../components/UploadPicture";
import GerneralQuestions from "../components/GeneralQuestions";
import Frames from "./Frames";
import ArtGallery from './ArtGallery';
import WallFloor from './WallFloor';

import { saveQuote } from "../../../../actions";

import { NavLink } from "react-router-dom";

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0
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
        switch (this.props.material) {
          case "Art Gallery":
            return <ArtGallery />;
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
    if (isFinished) this.props.saveQuote({...this.props.quote, user: this.props.userData});
    this.setState({
      activeStep: this.state.activeStep + 1
    });
  };

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
        console.log(
          `serviceSelected: ${this.props.serviceSelected}, activeStep ${this.state.activeStep},  size: ${this.props.size}`
        );
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
  render() {
    const steps = this.getSteps(this.props.serviceSelected);
    const { activeStep } = this.state;

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
            <p>
              All steps completed - you&quot;re finished, our agents will
              contact you soon.
            </p>
            <NavLink to="/app/client">
              <Button
                variant="contained"
                className="btn-success text-white mr-10 mb-10"
              >
                Go Home
              </Button>
            </NavLink>
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
    size
  } = quote;
  const { userData } = authUser;
  return {
    material,
    serviceSelected,
    imageSelectedId,
    frameSelected,
    size,
    quote,
    userData
  };
};

export default connect(mapStateToProps, { saveQuote })(VerticalLinearStepper);
