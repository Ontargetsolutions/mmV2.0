//Image Cropper

import React, { Component } from "react";
import { connect } from "react-redux";
import { Col } from "reactstrap";
import { Card, CardImg, CardBody, CardImgOverlay } from "reactstrap";
import Button from "@material-ui/core/Button";
import ImageLoader from "react-image-file";
import { CircularProgress } from "@material-ui/core";
import SweetAlert from "react-bootstrap-sweetalert";
// import BlobToBase64 from "blob-to-base64";
// import base64Img from 'base64-img-img';

import "../../../assets/css/style.css";

import {
  getQuoteById,
  saveQuote,
  reorder
} from "../../../actions/QuoteActions";

import upIma from "../../../assets/img/CC_Upload.jpg";

class ViewQuote extends Component {
  state = {
    success: false,
    blobUrl: ""
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

  componentDidMount() {
    this.props.getQuoteById(this.props.quoteToView.quoteId);
  }
  reorder(e) {
    let order = {};
    e.preventDefault();
    switch (this.props.actualQuote.Product) {
      case "Mosaics":
        order = {
          ImagePath: this.props.actualQuote.ImagePath,
          ImageId: this.props.actualQuote.ImageId,
          Material: this.props.actualQuote.Material,
          FramePath: this.props.actualQuote.FramePath,
          ImageSource: this.props.actualQuote.ImageSource,
          Size: this.props.actualQuote.Size,
          Quantity: this.props.actualQuote.Quantity,
          Address1: this.props.actualQuote.Address1,
          Address2: this.props.actualQuote.Address2,
          City: this.props.actualQuote.City,
          Country: this.props.actualQuote.Country,
          State: this.props.actualQuote.State,
          Zip: this.props.actualQuote.Zip,
          Service: this.props.actualQuote.Service,
          Status: "Ordered",
          UserId: this.props.userData.id,
          Product: "Mosaics",
          Cost: 0
        };
        this.props.reorder({ order });
        break;
      case "HardwoodFlooring":
        order = {
          ImagePath: this.props.actualQuote.ImageSelectedId,
          HardwoodType: this.props.actualQuote.HardwoodType,
          HardwoodStyle: this.props.actualQuote.HardwoodStyle,
          HardwoodSelected: this.props.actualQuote.HardwoodSelected,
          HardwoodFinish: this.props.actualQuote.HardwoodFinish,
          HardwoodThickness: this.props.actualQuote.HardwoodThickness,
          HardwoodWidth: this.props.actualQuote.HardwoodWidth,
          HardwoodLength: this.props.actualQuote.HardwoodLength,
          Quantity: this.props.actualQuote.Quantity,
          Address1: this.props.actualQuote.Address1,
          Address2: this.props.actualQuote.Address2,
          City: this.props.actualQuote.City,
          Country: this.props.actualQuote.Country,
          State: this.props.actualQuote.State,
          Zip: this.props.actualQuote.Zip,
          Status: "Ordered",
          UserId: this.props.userData.id,
          Product: "HardwoodFlooring",
          Cost: 0
        };
        this.props.reorder({ order, user: this.props.userData });
        break;
      case "IznikTile":
        order = {
          ImagePath: this.props.actualQuote.ImagePath,
          ImageId: this.props.actualQuote.ImageId,
          Material: this.props.actualQuote.Material,
          FramePath: this.props.actualQuote.FramePath,
          ImageSource: this.props.actualQuote.ImageSource,
          Size: this.props.actualQuote.Size,
          Quantity: this.props.actualQuote.Quantity,
          Address1: this.props.actualQuote.Address1,
          Address2: this.props.actualQuote.Address2,
          City: this.props.actualQuote.City,
          Country: this.props.actualQuote.Country,
          State: this.props.actualQuote.State,
          Zip: this.props.actualQuote.Zip,
          Service: this.props.actualQuote.Service,
          Status: "Ordered",
          UserId: this.props.userData.id,
          Product: "IznikTile",
          Cost: 0
        };
        this.props.reorder({ order, user: this.props.userData });
        break;
      default:
        break;
    }
  }

  // getPicture(data) {
  //   BlobToBase64(data, function(error, base64) {
  //     if (!error) {
  //       return base64;
  //     }
  //   });
  // }

  render() {
    console.log(
      `quota que viene de la tabla quotas ${JSON.stringify(
        this.props.actualQuote
      )}`
    );
    console.log(
      `quote to view que viene del reducer ${JSON.stringify(
        this.props.quoteToView
      )}`
    );

    const blobUrl1 =
      this.props.actualImage.Data && this.props.actualImage.Data.data
        ? this.props.actualImage.Data.data
        : "";
    // this.props.actualImage.Data.data !== undefined

    // const blobUrl1 = URL.createObjectURL(this.props.actualImage.Data.data);

    const { success } = this.state;
    return (
      <div className="cardsmasonry-wrapper">
        <Card>
          {this.props.actualQuote.Service === "Custom-Framed Murals" && (
            <div>
              <div className="row">
                <Col sm={4}>
                  <h1>Art:</h1>
                  {this.props.actualQuote.ImageSource === "upload" &&
                    (this.props.actualImage ? (
              
                      <img src={this.props.actualImage} alt="uploaded_pic"  style={{height: "90%", width: "100%"}}/>
                    ) : (
                      <CircularProgress color="secondary"></CircularProgress>
                    ))}
                  {this.props.actualQuote.ImageSource !== "upload" && (
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

                    <Button
                      variant="contained"
                      color="primary"
                      className="text-white"
                      onClick={e => {
                        this.reorder(e);
                        this.openAlert("success");
                      }}
                    >
                      Reorder
                    </Button>
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
                      <img src={this.props.actualImage} alt="uploaded_pic" />
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

                    <Button
                      variant="contained"
                      color="primary"
                      className="text-white"
                      onClick={e => {
                        this.reorder(e);
                        this.openAlert("success");
                      }}
                    >
                      Reorder
                    </Button>
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

                    <Button
                      variant="contained"
                      color="primary"
                      className="text-white"
                      onClick={e => {
                        this.reorder(e);
                        this.openAlert("success");
                      }}
                    >
                      Reorder
                    </Button>
                  </CardBody>
                </Col>
              </div>
            </div>
          )}
        </Card>
        <SweetAlert
          success
          show={success}
          title="Your request was successfully submitted. Our team will contact you shortly."
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
  const { actualQuote, actualImage, quoteToView } = quote;
  const { userData } = authUser;
  return { quote, actualQuote, actualImage, userData, quoteToView };
};

export default connect(mapStateToProps, { getQuoteById, saveQuote, reorder })(
  ViewQuote
);
