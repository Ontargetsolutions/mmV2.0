//Image Cropper

import React, { Component } from "react";
import { connect } from "react-redux";
import { FormGroup, Input, Col, Form } from "reactstrap";

import "../../../../assets/css/style.css";

import { saveImageUpload, pickImage } from "../../../../actions/QuoteActions";

import api from "../../../../api/UtilAPI";

import upIma from "../../../../assets/img/CC_Upload.jpg";

class UploadPicture extends Component {
  state = {
    image: upIma,
    userId: this.props.userData.id
  };

  uploadImage(e) {
    let imageFormObj = new FormData();
    imageFormObj.append("userImage", e.target.files[0]);
    // imageFormObj.append("userId", this.state.userId);
    this.setState({ image: URL.createObjectURL(e.target.files[0]) });
    // api.uploadPic(imageFormObj);

    this.props.saveImageUpload(imageFormObj);
    this.props.pickImage("imageUploaded");
  }

  render() {
    return (
      <div className="dropzone-wrapper">
        <div className="row">
          <h1>Upload your file</h1>
        </div>
        <div className="row">
          <input type="file" onChange={e => this.uploadImage(e)} />
        </div>
        <div>
          <img src={this.state.image} alt="uplad-image" className="divPic" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ quote, authUser }) => {
  const { imageSelectedId, frameSelected } = quote;
  const { userData } = authUser;
  return { quote, imageSelectedId, frameSelected, userData };
};

export default connect(mapStateToProps, {
  saveImageUpload,
  pickImage
})(UploadPicture);
