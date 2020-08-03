/**
 * Ecommerce Dashboard
 */

import React, { Component } from "react";
import { connect } from "react-redux";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { Col } from "reactstrap";

import { pickStyle } from "../../../../../actions/QuoteActions";

class Style extends Component {
  state = {
    style: "Select"
  };

  // componentDidMount(){
  //   this.props.pickMaterial(this.state.material);
  // }

  componentWillMount() {
    this.props.pickStyle("Select");
  }

  handleChangeRadio = (e, key) => {
    this.setState({ [key]: e.target.value });
    this.props.pickStyle(e.target.value);
  };

  render() {
    console.log(`hardwoodType en hardwood style ${this.props.hardwoodType}`);
    return (
      <div className="ecom-dashboard-wrapper">
        {this.props.hardwoodType === "Parquet" && (
          <div className="row">
            <Col md={3} sm={12}>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="style"
                  name="style"
                  value={this.state.style}
                  onChange={e => this.handleChangeRadio(e, "style")}
                >
                  <FormControlLabel
                    value="Select"
                    control={<Radio />}
                    label="Select"
                  />

                  <FormControlLabel
                    value="Natural"
                    control={<Radio />}
                    label="Natural"
                  />

                  <FormControlLabel
                    value="Rustical"
                    control={<Radio />}
                    label="Rustic"
                  />
                </RadioGroup>
              </FormControl>
            </Col>
            <Col md={9} sm={12}>
              {this.state.style === "Select" && (
                <div className="row">
                  <Col sm={6} md={6}>
                    <img
                      src="https://montagemosaics.com/hardwoodcollection/hwstylestype/parquet-select-1(1).jpg"
                      alt="uplad-image"
                      className="divPic"
                    />
                  </Col>
                  <Col sm={6} md={6}>
                    <div className="row">
                      <p>
                        This kind of oak parquet is made only from high quality
                        wood. Baltal is not allowed. Natural, rare, minimal
                        cracks are allowed at the ends. There are color
                        deviations of oak parquet board due to natural wood
                        pattern.
                      </p>
                    </div>
                  </Col>
                </div>
              )}
              {this.state.style === "Rustical" && (
                <div>
                  <div className="row">
                    <Col sm={6}>
                      <img
                        src="https://montagemosaics.com/hardwoodcollection/hwstylestype/parquet-rustic-3(1).jpg"
                        alt="uplad-image"
                        className="divPic"
                      />
                    </Col>
                    <Col sm={6}>
                      <div className="row">
                        <p>
                          This type of oak parquet has a bright wood pattern
                          with natural branches up to 30 mm. The number of
                          healthy twigs is unlimited. The twist emphasizes the
                          vitality of the wood and gives it a color variety that
                          reveals the true beauty of the wood. Allowed white up
                          to 10%. Naturally occurring and filled cracks up to 10
                          cm long and up to 2 mm wide are allowed.
                        </p>
                      </div>
                    </Col>
                  </div>
                </div>
              )}
              {this.state.style === "Natural" && (
                <div>
                  <div className="row">
                    <Col sm={6}>
                      <img
                        src="https://montagemosaics.com/hardwoodcollection/hwstylestype/parquet-natur2(1).jpg"
                        alt="uplad-image"
                        className="divPic"
                      />
                    </Col>
                    <Col sm={6}>
                      <div className="row">
                        <p>
                          This type of oak parquet meets the highest standards,
                          but - unlike Select - the larger number and size of
                          twigs allowed. Healthy twigs - up to 10-15 mm. Up to
                          5% whiteness is allowed. Different patterns of wood
                          have different shades, which makes oak parquet boards
                          look natural and alive.
                        </p>
                      </div>
                    </Col>
                  </div>
                </div>
              )}
            </Col>
          </div>
        )}
        {this.props.hardwoodType === "Solid Flooring" && (
          <div className="row">
            <Col md={3} sm={12}>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="style"
                  name="style"
                  value={this.state.style}
                  onChange={e => this.handleChangeRadio(e, "style")}
                >
                  <FormControlLabel
                    value="Select"
                    control={<Radio />}
                    label="Select"
                  />

                  <FormControlLabel
                    value="Natural"
                    control={<Radio />}
                    label="Natural"
                  />

                  <FormControlLabel
                    value="Rustical"
                    control={<Radio />}
                    label="Rustic"
                  />
                </RadioGroup>
              </FormControl>
            </Col>
            <Col md={9} sm={12}>
              {this.state.style === "Select" && (
                <div className="row">
                  <Col sm={6} md={6}>
                    <img
                      src="https://montagemosaics.com/hardwoodcollection/hwstylestype/solidselect-1.jpg"
                      alt="uplad-image"
                      className="divPic"
                    />
                  </Col>
                  <Col sm={6} md={6}>
                    <div className="row">
                      <p>
                        This type of solid oak parquet is made only from high
                        quality wood. Rare, single, healthy branches up to 3-5
                        mm are allowed. Baltal is not allowed. Natural, rare,
                        minimal cracks are allowed at the ends. There are color
                        deviations due to the natural wood pattern.
                      </p>
                    </div>
                  </Col>
                </div>
              )}
              {this.state.style === "Rustical" && (
                <div>
                  <div className="row">
                    <Col sm={6}>
                      <img
                        src="https://montagemosaics.com/hardwoodcollection/hwstylestype/solid-rustic-1(1).jpg"
                        alt="uplad-image"
                        className="divPic"
                      />
                    </Col>
                    <Col sm={6}>
                      <div className="row">
                        <p>
                          This type of oak boards have a bright wood pattern
                          with natural branches up to 40 mm and patched up to 30
                          mm. The number of healthy twigs is unlimited. The
                          twist emphasizes the vitality of the wood and gives it
                          a variety of colors that reveal the true beauty of the
                          wood. Allowed white up to 10%. Naturally occurring and
                          filled cracks are allowed up to 20 cm long and up to 5
                          mm wide.
                        </p>
                      </div>
                    </Col>
                  </div>
                </div>
              )}
              {this.state.style === "Natural" && (
                <div>
                  <div className="row">
                    <Col sm={6}>
                      <img
                        src="https://montagemosaics.com/hardwoodcollection/hwstylestype/solid-natur-1(1) (1).jpg"
                        alt="uplad-image"
                        className="divPic"
                      />
                    </Col>
                    <Col sm={6}>
                      <div className="row">
                        <p>
                          This type of solid oak boards meet the highest
                          standards, but unlike the Select type, the size and
                          size of the twigs is greater. Whole twigs up to 15-25
                          mm and filled twigs up to 10-20 mm. Whiteness up to 5%
                          allowed. Natural, rare, minimal cracks up to 20 mm
                          long and 2 mm wide are permissible at the ends.
                          Different patterns of wood have different shades,
                          making the oak solid floor look natural and alive.
                        </p>
                      </div>
                    </Col>
                  </div>
                </div>
              )}
            </Col>
          </div>
        )}
        {this.props.hardwoodType === "Engineered Hardwood Flooring" && (
          <div className="row">
            <Col md={3} sm={12}>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="style"
                  name="style"
                  value={this.state.style}
                  onChange={e => this.handleChangeRadio(e, "style")}
                >
                  <FormControlLabel
                    value="Select"
                    control={<Radio />}
                    label="Select"
                  />

                  <FormControlLabel
                    value="Natural"
                    control={<Radio />}
                    label="Natural"
                  />

                  <FormControlLabel
                    value="Rustical"
                    control={<Radio />}
                    label="Rustic"
                  />
                </RadioGroup>
              </FormControl>
            </Col>
            <Col md={9} sm={12}>
              {this.state.style === "Select" && (
                <div className="row">
                  <Col sm={6} md={6}>
                    <img
                      src="https://montagemosaics.com/hardwoodcollection/hwstylestype/Engineered-select-1(1).jpg"
                      alt="uplad-image"
                      className="divPic"
                    />
                  </Col>
                  <Col sm={6} md={6}>
                    <div className="row">
                      <p>
                        This type of oak boards are made only from high quality
                        wood. Rare, single, healthy twigs up to 8 mm are
                        allowed. Baltal is not allowed. Natural, rare, minimal
                        cracks are allowed at the ends. There are color
                        deviations due to the natural wood pattern.
                      </p>
                    </div>
                  </Col>
                </div>
              )}
              {this.state.style === "Rustical" && (
                <div>
                  <div className="row">
                    <Col sm={6}>
                      <img
                        src="https://montagemosaics.com/hardwoodcollection/hwstylestype/eningeer-rustic(1).jpg"
                        alt="uplad-image"
                        className="divPic"
                      />
                    </Col>
                    <Col sm={6}>
                      <div className="row">
                        <p>
                          This type of oak boards has a bright wood pattern with
                          natural branches up to 60mm and patched up to 50mm.
                          The number of healthy twigs is unlimited. The twist
                          emphasizes the vitality of the wood and gives it a
                          color variety that reveals the true beauty of the
                          wood. Allowed white up to 10%. Naturally occurring and
                          filled cracks are allowed up to 20 cm long and up to 5
                          mm wide.
                        </p>
                      </div>
                    </Col>
                  </div>
                </div>
              )}
              {this.state.style === "Natural" && (
                <div>
                  <div className="row">
                    <Col sm={6}>
                      <img
                        src="https://montagemosaics.com/hardwoodcollection/hwstylestype/engineered-natural-1(1).jpg"
                        alt="uplad-image"
                        className="divPic"
                      />
                    </Col>
                    <Col sm={6}>
                      <div className="row">
                        <p>
                          This type of oak boards are of the highest standard,
                          but unlike the Select species, a larger number and
                          size of twigs are allowed. Whole twigs up to 25-35 mm
                          and filled up to 15-25 mm. The minimum allowed amount
                          of white is up to 5%. Natural, rare, minimum cracks up
                          to 20 mm long and 2 mm wide are permissible at the
                          ends. Wood of different patterns has different shades,
                          which makes this parquet look natural and alive.
                        </p>
                      </div>
                    </Col>
                  </div>
                </div>
              )}
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
  pickStyle
})(Style);
