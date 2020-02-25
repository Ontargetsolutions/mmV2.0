/**
 * Gallery
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FormGroup, Input, Col} from 'reactstrap';
import Button from '@material-ui/core/Button';
import {RctCard, RctCardContent} from '../../../../components/RctCard/index';
// intl messages
import IntlMessages from '../../../../util/IntlMessages';

import {getAdobeImages, pickImage } from '../../../../actions/QuoteActions';
// api
// import api from 'Api';

class Gallery extends Component {
  state = {
    galleryImages: null,
    word: '',
    imageSelected: '',
  };

  // get gallery images
  getGalleryImages (e) {
    e.preventDefault();
    this.props.getAdobeImages (this.state.word);
    console.log(  `hereeeeeeeeeeeeeeeeeeeeeeeeeeee`)
  }

  render () {
    const galleryImages = this.props.imagesAdobeStock;
    return (
      <div>
        <div className="row">
          <form onSubmit={(e) => this.getGalleryImages (e)}>
            <FormGroup row>
              <Col sm={8}>
                <Input
                  type="search"
                  name="search"
                  value={this.state.word}
                  id="search-todo"
                  className="has-input-right input-lg-icon pl-15"
                  placeholder="Word criteria"
                  onChange={e => this.setState ({word: e.target.value})}
                />
              </Col>
              <Col sm={4}>
                <Button
                  variant="contained"
                  className="btn-info text-white btn-icon"
                  onClick={(e) => this.getGalleryImages (e)}
                >
                  <IntlMessages id="components.searchImage" />
                  <i className="zmdi zmdi-search search-icon" />
                </Button>
              </Col>
            </FormGroup>
          </form>
          <div className="row">
            {galleryImages &&
              galleryImages.map ((image, key) => (
                <div className="col-sm-6 col-md-4 col-xl-3" key={key}>
                  <RctCard>
                    <RctCardContent>
                      <div className={this.props.imageSelectedId === image.stock_id ?"product-image mb-20 imageSelected": "product-image mb-20"} >
                        <a
                          href="#"
                          onClick={e => {
                            e.preventDefault();
                            // this.setState ({imageSelected: image.stock_id});
                            console.log (image.stock_id);
                            this.props.pickImage(image.stock_id);
                            console.log(`ttttttttttttttttttttttttttttt`+JSON.stringify(this.props.quote));
                          }}
                        >
                          <img
                            src={image.thumbnail_url}
                            alt="image"
                            className="img-fluid"
                            width="300"
                            height="300"
                          />
                        </a>
                      </div>
                    </RctCardContent>
                  </RctCard>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

// map state to props
const mapStateToProps = ({quote}) => {
  const {imagesAdobeStock, imageSelectedId} = quote;
  return {imagesAdobeStock, imageSelectedId, quote};
};

export default connect (mapStateToProps, {
  getAdobeImages,
  pickImage,
}) (Gallery);
