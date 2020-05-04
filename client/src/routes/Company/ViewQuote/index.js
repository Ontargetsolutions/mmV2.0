//Image Cropper

import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, FormGroup, Label, Input, Col } from "reactstrap";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
  CardImgOverlay
} from "reactstrap";
import Button from "@material-ui/core/Button";
import ImageLoader from "react-image-file";
import { CircularProgress } from "@material-ui/core";
import SweetAlert from "react-bootstrap-sweetalert";

import "../../../assets/css/style.css";

import {
  getQuoteById,
  saveQuote,
  reorder
} from "../../../actions/QuoteActions";

import upIma from "../../../assets/img/CC_Upload.jpg";

class ViewQuote extends Component {
  state = {
    success: false
  };

  //   uploadImage(e) {
  //     let imageFormObj = new FormData();
  //     imageFormObj.append("userImage", e.target.files[0]);
  //     this.setState({ image: URL.createObjectURL(e.target.files[0]) });
  //     // api.uploadPic(imageFormObj);

  //     this.props.saveImageUpload(imageFormObj);
  //     this.props.pickImage('imageUploaded');

  //   }

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

  componentDidMount() {
    const { id } = this.props.location.quoteid;
    this.props.getQuoteById(id);
  }

  render() {
    console.log(
      `id de la imagen que viene de la tabla quotas ${JSON.stringify(
        this.props.actualQuote
      )}`
    );
    const { success } = this.state;
    return (
      <div className="cardsmasonry-wrapper">
        <Card>
          {this.props.actualQuote.Service === "Custom-Framed Murals" && (
            <div>
              <div className="row">
                <Col sm={4}>
                  <h1>Art:</h1>
                  {this.props.actualQuote.ImageType === "upload" &&
                    (this.props.actualImage.Data ? (
                      <ImageLoader
                        file={this.props.actualImage.Data.data}
                        alt="some text"
                      />
                    ) : (
                      <CircularProgress color="secondary"></CircularProgress>
                    ))}
                  {this.props.actualQuote.ImageType !== "upload" && (
                    <CardImg
                      top
                      width="25%"
                      height="25%"
                      src={this.props.actualQuote.ImagePath}
                      className="img-fluid"
                      alt="Art"
                    />
                  )}
                </Col>
                <Col sm={4}>
                  <h1>Frame:</h1>
                  <CardImg
                    top
                    width="25%"
                    height="25%"
                    src={this.props.actualQuote.FramePath}
                    className="img-fluid"
                    alt="Frame"
                  />
                </Col>
                <Col sm={4}>
                  <CardBody>
                    <div className="row">
                      <h1>Details:</h1>
                    </div>
                    <div className="row">
                      <h3>Quantity: </h3>
                      <span>{`${this.props.actualQuote.Quantity}`}</span>
                    </div>
                    <div className="row">
                      <h3>Dimentions: </h3>
                      <span>{this.props.actualQuote.Size} sqft</span>
                    </div>
                    <div className="row">
                      <h3>Delivery address:</h3>
                      <span>{`${this.props.actualQuote.Address1} ${this.props.actualQuote.Address2} ${this.props.actualQuote.City}, ${this.props.actualQuote.State} ${this.props.actualQuote.Zip}`}</span>
                    </div>
                    <div className="row">
                      <h3>Price:</h3>
                      {this.props.actualQuote.Cost}
                    </div>
                  </CardBody>
                </Col>
              </div>
            </div>
          )}
          {((this.props.actualQuote.Service !== "Custom-Framed Murals" &&
            this.props.actualQuote.Product === "Mosaics") ||
            this.props.actualQuote.Product === "IznikTile") && (
            <div>
              <div className="row">
                <Col sm={4}>
                  {this.props.actualQuote.ImageType === "upload" &&
                    (this.props.actualImage.Data ? (
                      <ImageLoader
                        file={this.props.actualImage.Data.data}
                        alt="some text"
                      />
                    ) : (
                      <CircularProgress color="secondary"></CircularProgress>
                    ))}
                  {this.props.actualQuote.ImageType !== "upload" && (
                    <CardImg
                      top
                      width="25%"
                      height="25%"
                      src={this.props.actualQuote.ImagePath}
                      className="img-fluid"
                      alt="Art"
                    />
                  )}
                </Col>
                <Col sm={6}>
                  <CardBody>
                    <div className="row">
                      <h1>Details:</h1>
                    </div>
                    <div className="row">
                      <h3>Quantity: </h3>
                      <span>{`${this.props.actualQuote.Quantity}`}</span>
                    </div>
                    <div className="row">
                      <h3>Dimentions: </h3>
                      <span>{this.props.actualQuote.Size} sqft</span>
                    </div>
                    <div className="row">
                      <h3>Delivery address:</h3>
                      <span>{`${this.props.actualQuote.Address1} ${this.props.actualQuote.Address2} ${this.props.actualQuote.City}, ${this.props.actualQuote.State} ${this.props.actualQuote.Zip}`}</span>
                    </div>
                    <div className="row">
                      <h3>Price:</h3>${this.props.actualQuote.Cost}
                    </div>
                  </CardBody>
                </Col>
              </div>
            </div>
          )}
          {this.props.actualQuote.Product === "HardwoodFlooring" && (
            <div>
              <div className="row">
                <Col sm={4}>
                  <CardImg
                    top
                    width="25%"
                    height="25%"
                    src={this.props.actualQuote.HardwoodSelected}
                    className="img-fluid"
                    alt="Art"
                  />
                </Col>
                <Col sm={6}>
                  <CardBody>
                    <div className="row">
                      <h1>Details:</h1>
                    </div>
                    <div className="row">
                      <h3>Quantity: </h3>
                      <span>{`${this.props.actualQuote.Quantity}`}</span>
                    </div>
                    <div className="row">
                      <h3>Thickness: </h3>
                      <span>{this.props.actualQuote.HardwoodThickness} mm</span>
                    </div>
                    <div className="row">
                      <h3>Width: </h3>
                      <span>{this.props.actualQuote.HardwoodWidth} mm</span>
                    </div>
                    <div className="row">
                      <h3>Length: </h3>
                      <span>{this.props.actualQuote.HardwoodLength} mm</span>
                    </div>
                    <div className="row">
                      <h3>Delivery address:</h3>
                      <span>{`${this.props.actualQuote.Address1} ${this.props.actualQuote.Address2} ${this.props.actualQuote.City}, ${this.props.actualQuote.State} ${this.props.actualQuote.Zip}`}</span>
                    </div>
                    <div className="row">
                      <h3>Price:</h3>${this.props.actualQuote.Cost}
                    </div>
                  </CardBody>
                </Col>
              </div>
            </div>
          )}
        </Card>
        <SweetAlert
          success
          show={success}
          title="Your Order Is Successfully Placed !"
          btnSize="sm"
          onConfirm={() => {
            this.onConfirm("success");
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ quote, authUser }) => {
  const { actualQuote, actualImage } = quote;
  const { userData } = authUser;
  return { quote, actualQuote, actualImage, userData };
};

export default connect(mapStateToProps, { getQuoteById, saveQuote, reorder })(
  ViewQuote
);
