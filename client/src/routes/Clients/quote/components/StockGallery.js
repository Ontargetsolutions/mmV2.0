/**
 * Gallery
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { FormGroup, Input, Col } from "reactstrap";
import Button from "@material-ui/core/Button";

import { NotificationManager } from "react-notifications";
import { withStyles } from "@material-ui/styles";
import AdobeImages from "./AdobeImage";
import Pagination from "./Pagination";

// intl messages
import IntlMessages from "../../../../util/IntlMessages";

import {
  getAdobeImages,
  pickImage,
  setGalleryFilterCriteria,
  setLoader
} from "../../../../actions/QuoteActions";
import Filters from "./extGalleryFilter";

const style = theme => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2)
    }
  }
});

class Gallery extends Component {
  state = {
    galleryImages: [],
    word: "",
    imageSelected: "",
    criteria: "",
    actualPage: 1,
    picsPerPage: 12,
  };
  s;

  componentDidMount() {
    // this.setState({ loading: this.props.loading });
    // this.props.getAdobeImages("Modern Art");
    // this.setState({loading: true});
  }
  // get gallery images
  getGalleryImages(e) {
    e.preventDefault();
    this.props.setLoader("true");
    const criteria = this.props.extGalleryFilter;
    criteria === ""
      ? NotificationManager.error(
          "You need to type or select any search criteria"
        )
      : this.props.getAdobeImages(criteria)
  }

  handleChangeRadio = e => {
    this.setState({ criteria: e.target.value });
    this.props.setGalleryFilterCriteria(e.target.value);
    this.setState({ word: "" });
  };

  //

  paginate = pageNumber => {
    this.setState({ actualPage: pageNumber });
  };

  render() {
    const galleryImages = this.props.imagesAdobeStock;
    const { classes, loading } = this.props;
    const { actualPage, picsPerPage, pics } = this.state;
    const indexOfLastPic = actualPage * picsPerPage;
    const indexOfFirstPic = indexOfLastPic - picsPerPage;
    const currentPics = galleryImages.slice(indexOfFirstPic, indexOfLastPic);

    return (
      <div>
        <div className="row">
          <form onSubmit={e => this.getGalleryImages(e)}>
            <FormGroup>
              <Input
                type="search"
                name="search"
                value={this.state.word}
                id="search-todo"
                className="has-input-right input-lg-icon pl-15"
                placeholder="Word criteria"
                onChange={e => (
                  this.setState({ word: e.target.value }),
                  this.setState({ criteria: "" }),
                  this.props.setGalleryFilterCriteria(e.target.value)
                )}
              />
              <Filters
                handleChangeRadio={this.handleChangeRadio}
                criteria={this.state.criteria}
              />
              <div className="row">
                <Col sm={4} sx={6}>
                  <Button
                    variant="contained"
                    className="btn-info text-white btn-icon"
                    onClick={e => this.getGalleryImages(e)}
                  >
                    <IntlMessages id="components.searchImage" />
                    <i className="zmdi zmdi-search search-icon" />
                  </Button>
                </Col>
                <Col sm={4} sx={6}>
                  <Button
                    variant="contained"
                    className="btn-danger text-white btn-icon"
                    onClick={e => (
                      this.setState({ word: "" }),
                      this.setState({ criteria: "" })
                    )}
                  >
                    <IntlMessages id="components.clearSelection" />
                    <i className="zmdi zmdi-delete" />
                  </Button>
                </Col>
              </div>
            </FormGroup>
          </form>
          <AdobeImages
            images={currentPics}
            loading={loading}
            pickImage={this.props.pickImage}
            imageSelected={this.props.imageSelectedId}
          />
          {galleryImages.length !== 0 && !loading &&(
            <Pagination
              postPerPage={picsPerPage}
              TotalPost={galleryImages.length}
              paginate={this.paginate}
            />
          )}
        </div>
      </div>
    );
  }
}

// map state to props
const mapStateToProps = ({ quote }) => {
  const {
    imagesAdobeStock,
    imageSelectedId,
    extGalleryFilter,
    loading
  } = quote;
  return {
    imagesAdobeStock,
    imageSelectedId,
    quote,
    extGalleryFilter,
    loading
  };
};

export default withStyles(style)(
  connect(mapStateToProps, {
    getAdobeImages,
    setGalleryFilterCriteria,
    pickImage,
    setLoader
  })(Gallery)
);
