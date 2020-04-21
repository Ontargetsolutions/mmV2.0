/**
 * Ecommerce Dashboard
 */

import React, { Component } from "react";
import { FormGroup, Input, Label, Col } from "reactstrap";
import MatButton from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import { pickType } from "../../../../../actions/QuoteActions";
import image from "../../../../../assets/images/hardwoodcataloguecover-01.jpg";

class Type extends Component {
  state = {
    type: "",
    image: image
  };

  handleChangeRadio = (e, key) => {
    this.setState({ [key]: e.target.value });
    this.props.pickType(e.target.value);
    console.log(`reducer after click type ${JSON.stringify(this.props.quote)}`);
  };

  componentWillMount() {
    this.props.pickType("Parquet");
    console.log(`reducer after click type ${JSON.stringify(this.props.quote)}`);
  }

  render() {
    return (
      <div className="ecom-dashboard-wrapper">
        {this.state.type === "" && (
          <div className="row">
            <Col md={3} sm={12}>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="type"
                  name="type"
                  value={this.state.type}
                  onChange={e => {
                    // e.preventDefault;
                    this.handleChangeRadio(e, "type");
                  }}
                >
                  <FormControlLabel
                    value="Parquet"
                    control={<Radio />}
                    label="Parquet"
                  />
                  <FormControlLabel
                    value="Mosaics Parquet (Versailles)"
                    control={<Radio />}
                    label="Mosaics Parquet (Versailles)"
                  />
                  <FormControlLabel
                    value="Engineered Hardwood Flooring"
                    control={<Radio />}
                    label="Engineered Hardwood Flooring"
                  />
                  <FormControlLabel
                    value="Solid Flooring"
                    control={<Radio />}
                    label="Solid Flooring"
                  />
                  <FormControlLabel
                    value="Pattern English Christmas Tree"
                    control={<Radio />}
                    label="Pattern English Christmas Tree"
                  />
                  <FormControlLabel
                    value="French Herringbone"
                    control={<Radio />}
                    label="French Herringbone"
                  />
                </RadioGroup>
              </FormControl>
            </Col>

            <Col md={9} sm={12}>
              <div className="row">
                <Col sm={6} md={6}>
                  <img
                    src={this.state.image}
                    alt="uplad-image"
                    className="divPic"
                  />
                </Col>
                <Col sm={6} md={6}>
                  <div className="row">
                    <p>
                      The power of hardwood flooring combined with your mosaic
                      designs is timeless. We offer different textures and
                      finishes to complete the look. Our hardwood consists of
                      solid European Oak and Ash lacquered and oil-stained.
                    </p>
                  </div>
                </Col>
              </div>
            </Col>
          </div>
        )}
        {this.state.type !== "" && (
          <div className="row">
            <Col md={3} sm={12}>
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="type"
                  name="type"
                  value={this.state.type}
                  onChange={e => {
                    // e.preventDefault;
                    this.handleChangeRadio(e, "type");
                  }}
                >
                  <FormControlLabel
                    value="Parquet"
                    control={<Radio />}
                    label="Parquet"
                  />
                  <FormControlLabel
                    value="Mosaics Parquet (Versailles)"
                    control={<Radio />}
                    label="Mosaics Parquet (Versailles)"
                  />
                  <FormControlLabel
                    value="Engineered Hardwood Flooring"
                    control={<Radio />}
                    label="Engineered Hardwood Flooring"
                  />
                  <FormControlLabel
                    value="Solid Flooring"
                    control={<Radio />}
                    label="Solid Flooring"
                  />
                  <FormControlLabel
                    value="Pattern English Christmas Tree"
                    control={<Radio />}
                    label="Pattern English Christmas Tree"
                  />
                  <FormControlLabel
                    value="French Herringbone"
                    control={<Radio />}
                    label="French Herringbone"
                  />
                </RadioGroup>
              </FormControl>
            </Col>

            <Col md={9} sm={12}>
              {this.state.type === "Parquet" && (
                <div className="row">
                  <Col sm={6} md={6}>
                    <img
                      src="https://montagemosaics.com/hardwoodcollection/hwstylestype/parquet-rustic-3(1).jpg"
                      alt="uplad-image"
                      className="divPic"
                    />
                  </Col>
                  <Col sm={6} md={6}>
                    <div className="row">
                      <p>
                        Oak parquet flooring – this is an environmentally
                        friendly flooring of a darker shade. Oak wood is
                        characterized by extreme solidity, durability and
                        environmental resistance. The rich tone surface is
                        pleasing to the eye and gives the room presentability.
                        These floors perfectly combine both classic style and
                        modern interior. Ash parquet flooring is of soft, light
                        color. This wood is highly durable and solid; it is
                        resistant to abrasion and indentation. Ash parquet
                        flooring gives the room coziness, elegance; creates an
                        impression of cleanliness and space.
                      </p>
                    </div>
                  </Col>
                </div>
              )}
              {this.state.type === "Mosaics Parquet (Versailles)" && (
                <div>
                  <div className="row">
                    <Col sm={6}>
                      <img
                        src="https://montagemosaics.com/hardwoodcollection/hwstylestype/Versailles panels.jpg"
                        alt="uplad-image"
                        className="divPic"
                      />
                    </Col>
                    <Col sm={6}>
                      <div className="row">
                        <p>
                          Mosaic (Versailles) parquet is a classic type of
                          parquet panel consisting of a weave pattern framed in
                          a square. Mosaic parquet is associated with Versailles
                          Palace, since it was originally designed to replace
                          all marble floors in the palace in 1693. Elegant and
                          stylish wooden floors were painted by Louis IV, and
                          Versailles parquet has since become a symbol of royal
                          taste.
                        </p>
                        <p>
                          This unique parquet design has become the beginning of
                          classic parquet flooring and a global trend in Europe.
                          Its simplicity and grandeur are reflected in many
                          European castles, where the principle of symmetry was
                          combined with the laconic and solemn interior
                          decoration of the palace.
                        </p>
                        <p>
                          This unique parquet design has become the beginning of
                          classic parquet flooring and a global trend in Europe.
                          Its simplicity and grandeur are reflected in many
                          European castles, where the principle of symmetry was
                          combined with the laconic and solemn interior
                          decoration of the palace.
                        </p>
                      </div>
                    </Col>
                  </div>
                </div>
              )}
              {this.state.type === "Engineered Hardwood Flooring" && (
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
                          Two-layer parquet boards - for the exclusive interior
                          of your home. They are luxurious in appearance and
                          natural. The top layer is made of 4 or 6 mm thick
                          solid oak. The bottom layer is made of the highest
                          quality moisture-resistant birch plywood of the Baltic
                          region.
                        </p>
                        <p>
                          Birch veneer is oak-bonded by cold pressing to achieve
                          greater strength and stability. Such parquet boards
                          are suitable for a variety of applications, even where
                          heated floor systems are installed. This natural
                          parquet has ecological properties and is therefore
                          particularly suitable for children's rooms. The latest
                          technologies are used in the production process, which
                          guarantees a special floor quality.
                        </p>
                        <p>
                          The two-layer natural parquet is distinguished by
                          unique patterns, does not cause allergies, gives a
                          feeling of comfort, is extremely warm and pleasant,
                          positively affects the microclimate of the room.
                        </p>
                        <p>
                          Exceptionally wide oak parquet boards - modern design
                          and luxurious look. Such parquet is suitable for all
                          private and business spaces. Parquet board width can
                          be 240/260 or even 300 mm and length up to 3000 mm.
                          Wide two-layered parquet boards combine high-quality
                          processing technology, craftsmanship and contemporary
                          home design trends. Such floors are popular in both
                          home and business classrooms. The large, wide,
                          homogeneous parquet board creates a sense of solidity
                          and luxury.
                        </p>
                      </div>
                    </Col>
                  </div>
                </div>
              )}

              {this.state.type === "Solid Flooring" && (
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
                          Solid oak flooring - for those looking for durability
                          and durability. Solid parquet is very popular due to
                          the expressive natural wood groove on the floor
                          surface. Such floors are perfect for both classic and
                          modern interiors. Solid oak floors are made of oiled
                          or lacquered, and for those who appreciate a
                          distinctive interior, we can offer smoked and steamed
                          or heat treated oak products and combed floorboards.
                          The production process uses modern technology and the
                          quality is strictly controlled. This is achieved
                          through the combination of wood drying, moisture
                          stabilization and workpiece storage processes. Extra
                          wide color range of oak solid floor: dark to grayish,
                          white
                        </p>
                      </div>
                    </Col>
                  </div>
                </div>
              )}
              {this.state.type === "Pattern English Christmas Tree" && (
                <div>
                  <div className="row">
                    <Col sm={6}>
                      <img
                        src="https://montagemosaics.com/hardwoodcollection/hwstylestype/herringbone parketlentes(1).jpg"
                        alt="uplad-image"
                        className="divPic"
                      />
                    </Col>
                    <Col sm={6}>
                      <div className="row">
                        <p>
                          Herringbone has been known and still used for many
                          years for laying flooring. Flooring with this method
                          is characterized by a rich variety of wood patterns.
                          Creates a cozy handmade effect. Fills even empty
                          spaces, making them more uniform when viewed from a
                          distance. Herringbone parquet boards are machined with
                          extremely high precision machines, resulting in quick,
                          easy and accurate floor installation.
                        </p>
                      </div>
                    </Col>
                  </div>
                </div>
              )}
              {this.state.type === "French Herringbone" && (
                <div>
                  <div className="row">
                    <Col sm={6}>
                      <img
                        src="https://montagemosaics.com/hardwoodcollection/hwstylestype/chevron.jpg"
                        alt="uplad-image"
                        className="divPic"
                      />
                    </Col>
                    <Col sm={6}>
                      <div className="row">
                        <p>
                          Chevron flooring techniques originated in the 17th
                          century. In France. This technique quickly became an
                          exclusive brand of luxury. This type of flooring
                          quickly became desirable for the king and the
                          nobility. The main difference between the Chevron and
                          Herringbone skirting boards, called the zig zag angle
                          on the herringbone, is 90 degrees and the chevron
                          45-60 degrees.
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
  const { hardwoodType } = quote;
  return { hardwoodType, quote };
};

export default connect(mapStateToProps, {
  pickType
})(Type);
