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

import "../../../assets/css/style.css";

import { getQuoteById } from "../../../actions/QuoteActions";

import upIma from "../../../assets/img/CC_Upload.jpg";

class ViewQuote extends Component {
  //   state = {
  //     image: upIma
  //   };

  //   uploadImage(e) {
  //     let imageFormObj = new FormData();
  //     imageFormObj.append("userImage", e.target.files[0]);
  //     this.setState({ image: URL.createObjectURL(e.target.files[0]) });
  //     // api.uploadPic(imageFormObj);

  //     this.props.saveImageUpload(imageFormObj);
  //     this.props.pickImage('imageUploaded');

  //   }
  componentDidMount() {
    const { id } = this.props.location.quoteid;
    this.props.getQuoteById(id);
  }
  reorder() {  }
  render() {
    console.log(
      `id de la imagen que viene de la tabla quotas ${JSON.stringify(
        this.props.actualQuote
      )}`
    );
    return (
      <div className="cardsmasonry-wrapper">
        <Card>
          {this.props.actualQuote.Product === "Custom-Framed Murals" && (
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

                    <Button
                      variant="contained"
                      color="primary"
                      className="text-white"
                    >
                      Reorder
                    </Button>
                  </CardBody>
                </Col>
              </div>
            </div>
          )}
          {this.props.actualQuote.Product !== "Custom-Framed Murals" && (
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

                    <Button
                      variant="contained"
                      color="primary"
                      className="text-white"
                      onClick={e => {
                        this.reorder(e);
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
      </div>
    );
  }
}

const mapStateToProps = ({ quote }) => {
  const { actualQuote, actualImage } = quote;
  return { quote, actualQuote, actualImage };
};

export default connect(mapStateToProps, { getQuoteById })(ViewQuote);
