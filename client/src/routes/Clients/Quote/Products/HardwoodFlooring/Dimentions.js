/**
 * Ecommerce Dashboard
 */

import React, { Component } from "react";
import { connect } from "react-redux";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { Label, Col } from "reactstrap";

import {
  pickThickness,
  pickWidth,
  pickLength
} from "../../../../../actions/QuoteActions";

class Dimentions extends Component {
  state = {
    thickness: "",
    width: "",
    length: ""
  };

  //   componentWillMount() {
  //     this.props.pickStyle("Select");
  //   }

  handleChangeRadioThickness = (e, key) => {
    this.setState({ [key]: e.target.value });
    this.props.pickThickness(e.target.value);
  };

  handleChangeRadioWidth = (e, key) => {
    this.setState({ [key]: e.target.value });
    this.props.pickWidth(e.target.value);
  };

  handleChangeRadioLength = (e, key) => {
    this.setState({ [key]: e.target.value });
    this.props.pickLength(e.target.value);
  };

  render() {
    console.log(`hardwoodType en hardwood style ${this.props.hardwoodType}`);
    return (
      <div>
        {(this.props.hardwoodType === "Parquet" ||
          this.props.hardwoodType === "Mosaics Parquet (Versailles)") && (
          <div className="row">
            <Col md={3} sm={12}>
              <Label for="size" sm={4}>
                Thickness(mm):
              </Label>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="thickness"
                  name="thickness"
                  value={this.state.thickness}
                  onChange={e =>
                    this.handleChangeRadioThickness(e, "thickness")
                  }
                >
                  <FormControlLabel value="15" control={<Radio />} label="15" />
                </RadioGroup>
              </FormControl>
            </Col>
            <Col md={3} sm={12}>
              <Label for="size" sm={4}>
                Width(mm):
              </Label>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="width"
                  name="width"
                  value={this.state.witdth}
                  onChange={e => this.handleChangeRadioWidth(e, "width")}
                >
                  <FormControlLabel value="50" control={<Radio />} label="50" />
                  <FormControlLabel value="70" control={<Radio />} label="70" />
                </RadioGroup>
              </FormControl>
            </Col>
            <Col md={3} sm={12}>
              <Label for="size" sm={4}>
                Length(mm):
              </Label>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="length"
                  name="length"
                  value={this.state.length}
                  onChange={e => this.handleChangeRadioLength(e, "length")}
                >
                  <FormControlLabel
                    value="300"
                    control={<Radio />}
                    label="300"
                  />
                  <FormControlLabel
                    value="350"
                    control={<Radio />}
                    label="350"
                  />
                  <FormControlLabel
                    value="400"
                    control={<Radio />}
                    label="400"
                  />
                  <FormControlLabel
                    value="450"
                    control={<Radio />}
                    label="450"
                  />
                  <FormControlLabel
                    value="500"
                    control={<Radio />}
                    label="500"
                  />
                </RadioGroup>
              </FormControl>
            </Col>
          </div>
        )}
        {this.props.hardwoodType === "Solid Flooring" && (
          <div className="row">
            <Col md={4} sm={12}>
              <Label for="size" sm={4}>
                Thickness(mm):
              </Label>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="thickness"
                  name="thickness"
                  value={this.state.thickness}
                  onChange={e =>
                    this.handleChangeRadioThickness(e, "thickness")
                  }
                >
                  <FormControlLabel value="15" control={<Radio />} label="15" />

                  <FormControlLabel
                    value="17 custom-made"
                    control={<Radio />}
                    label="17 custom-made"
                  />

                  <FormControlLabel
                    value="20 custom-made"
                    control={<Radio />}
                    label="20 custom-made"
                  />
                </RadioGroup>
              </FormControl>
            </Col>
            <Col md={4} sm={12}>
              <Label for="width">Width(mm):</Label>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="width"
                  name="width"
                  value={this.state.witdth}
                  onChange={e => this.handleChangeRadioWidth(e, "width")}
                >
                  <FormControlLabel
                    value="100"
                    control={<Radio />}
                    label="100"
                  />
                  <FormControlLabel
                    value="120"
                    control={<Radio />}
                    label="120"
                  />
                  <FormControlLabel
                    value="140"
                    control={<Radio />}
                    label="140"
                  />
                </RadioGroup>
              </FormControl>
            </Col>
            <Col md={4} sm={12}>
              <Label for="length">Length(mm):</Label>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="length"
                  name="length"
                  value={this.state.length}
                  onChange={e => this.handleChangeRadioLength(e, "length")}
                >
                  <div className="row">
                    <Col sm={6}>
                      <FormControlLabel
                        value="400"
                        control={<Radio />}
                        label="400"
                      />
                      <FormControlLabel
                        value="600"
                        control={<Radio />}
                        label="600"
                      />
                      <FormControlLabel
                        value="800"
                        control={<Radio />}
                        label="800"
                      />
                      <FormControlLabel
                        value="1000"
                        control={<Radio />}
                        label="1000"
                      />
                      <FormControlLabel
                        value="1200"
                        control={<Radio />}
                        label="1200"
                      />
                    </Col>
                    <Col sm={6}>
                      <FormControlLabel
                        value="1400"
                        control={<Radio />}
                        label="1400"
                      />
                      <FormControlLabel
                        value="1600"
                        control={<Radio />}
                        label="1600"
                      />
                      <FormControlLabel
                        value="1800"
                        control={<Radio />}
                        label="1800"
                      />
                      <FormControlLabel
                        value="2000"
                        control={<Radio />}
                        label="2000"
                      />
                    </Col>
                  </div>
                </RadioGroup>
              </FormControl>
            </Col>
          </div>
        )}
        {(this.props.hardwoodType === "Engineered Hardwood Flooring" ||
          this.props.hardwoodType === "Pattern English Christmas Tree" ||
          this.props.hardwoodType === "French Herringbone") && (
            <div className="row">
              <Col md={4} sm={12}>
                <Label for="size" sm={4}>
                  Thickness(mm):
                </Label>
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="thickness"
                    name="thickness"
                    value={this.state.thickness}
                    onChange={e =>
                      this.handleChangeRadioThickness(e, "thickness")
                    }
                  >
                    <FormControlLabel
                      value="4mm oak layer 13mm other layer"
                      control={<Radio />}
                      label="4mm oak layer 13mm other layer"
                    />
                    <FormControlLabel
                      value="4mm oak layer 16mm other layer"
                      control={<Radio />}
                      label="4mm oak layer 16mm other layer"
                    />
                    <FormControlLabel
                      value="4mm oak layer 19mm other layer"
                      control={<Radio />}
                      label="4mm oak layer 19mm other layer"
                    />
                    <FormControlLabel
                      value="6mm oak layer 18mm other layer"
                      control={<Radio />}
                      label="6mm oak layer 18mm other layer"
                    />
                    <FormControlLabel
                      value="6mm oak layer 21mm other layer"
                      control={<Radio />}
                      label="6mm oak layer 21mm other layer"
                    />
                  </RadioGroup>
                </FormControl>
              </Col>
              <Col md={4} sm={12}>
                <Label for="width">Width(mm):</Label>
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="width"
                    name="width"
                    value={this.state.witdth}
                    onChange={e => this.handleChangeRadioWidth(e, "width")}
                  >
                    <div className="row">
                      <Col sm={6}>
                        <FormControlLabel
                          value="140"
                          control={<Radio />}
                          label="140"
                        />
                        <FormControlLabel
                          value="160"
                          control={<Radio />}
                          label="160"
                        />
                        <FormControlLabel
                          value="180"
                          control={<Radio />}
                          label="800"
                        />
                      </Col>
                      <Col sm={6}>
                        <FormControlLabel
                          value="220"
                          control={<Radio />}
                          label="220"
                        />
                        <FormControlLabel
                          value="260"
                          control={<Radio />}
                          label="260"
                        />
                        <FormControlLabel
                          value="300"
                          control={<Radio />}
                          label="300"
                        />
                      </Col>
                    </div>
                  </RadioGroup>
                </FormControl>
              </Col>
              <Col md={4} sm={12}>
                <Label for="length">Length(mm):</Label>
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="length"
                    name="length"
                    value={this.state.length}
                    onChange={e => this.handleChangeRadioLength(e, "length")}
                  >
                    <div className="row">
                      <Col sm={6}>
                        <FormControlLabel
                          value="1200"
                          control={<Radio />}
                          label="1200"
                        />
                        <FormControlLabel
                          value="1400"
                          control={<Radio />}
                          label="1400"
                        />
                        <FormControlLabel
                          value="1600"
                          control={<Radio />}
                          label="1600"
                        />
                        <FormControlLabel
                          value="1800"
                          control={<Radio />}
                          label="1800"
                        />
                      </Col>
                      <Col sm={6}>
                        <FormControlLabel
                          value="2000"
                          control={<Radio />}
                          label="2000"
                        />
                        <FormControlLabel
                          value="2200"
                          control={<Radio />}
                          label="2200"
                        />
                        <FormControlLabel
                          value="2400"
                          control={<Radio />}
                          label="2400"
                        />
                      </Col>
                    </div>
                  </RadioGroup>
                </FormControl>
              </Col>
            </div>
          )}
      </div>
    );
  }
}

// map state to props
const mapStateToProps = ({ quote }) => {
  const { hardwoodStyle, hardwoodType } = quote;
  return { hardwoodStyle, hardwoodType };
};

export default connect(mapStateToProps, {
  pickThickness,
  pickWidth,
  pickLength
})(Dimentions);
