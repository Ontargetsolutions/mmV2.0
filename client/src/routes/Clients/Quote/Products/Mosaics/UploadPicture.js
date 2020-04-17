//Image Cropper

import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge } from "reactstrap";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from '@material-ui/core/IconButton';
// npm install --save-dev @iconify/react @iconify/icons-zmdi
import { Icon, InlineIcon } from '@iconify/react';
import infoOutline from '@iconify/icons-zmdi/info-outline';


import "../../../../../assets/css/style.css";

import {
  saveImageUpload,
  pickImage
} from "../../../../../actions/QuoteActions";

import upIma from "../../../../../assets/img/CC_Upload.jpg";

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
          <Tooltip
            placement="top"
            title="You can upload your own art/ picture here."
          >
            <IconButton aria-label="bag" id="iconify" >
            <Icon icon={infoOutline} color="black" md-18 />
              <Badge color="info" className="badge-xs badge-top-right"></Badge>
            </IconButton>
          </Tooltip>
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
