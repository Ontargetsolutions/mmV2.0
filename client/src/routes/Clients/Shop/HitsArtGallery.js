/**
 * Hits Component
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

import {pickImage, pickFrame} from '../../../actions/QuoteActions';

// Card Component
import {RctCard} from '../../../components/RctCard';

//Actions

//Helper
import {textTruncate} from '../../../helpers/helpers';

class Hit extends Component {
  state = {
    loading: false,
  };

  //Select the image
  onSelect (imageId, e) {
    this.setState ({loading: true});
    this.props.art
      ? this.props.pickImage (imageId)
      : this.props.pickFrame (imageId);

    e.preventDefault ();
    console.log (`reducer ${JSON.stringify (this.props.quote)}`);
  }

  onViewDesciption (desc) {
    //eslint-disable-next-line no-unused-expressions
    this.props.art ? 'self' : window.open (desc);
    return false;
  }

  render () {
    const {hit} = this.props;

    const {loading} = this.state;
    return (
      <RctCard customClasses="d-flex  mb-0 flex-column justify-content-between overflow-hidden">
        <div className="overlay-wrap overflow-hidden">
          <div
            className="text-center p-4"
            id="linkHit"
            className={
              this.props.imageSelectedId === hit.image ||
                this.props.frameSelected === hit.image
                ? 'imageSelected text-center '
                : 'text-center'
            }
          >
            <img src={hit.image} className="img-fluid" alt="product" />
          </div>
          <div
            className="overlay-content d-flex align-items-end"
            onClick={e => this.onSelect (hit.image, e)}
          >
            <a
              href="#"
              className="bg-primary text-center w-100 cart-link text-white py-2 "
              onClick={e => this.onViewDesciption (hit.description)}
            >
              {this.props.art ? 'Add to cart' : 'Description'}
            </a>
          </div>
        </div>
        <div className="product-info border-top p-3">
          <div className="d-flex justify-content-between">
            {this.props.userData.AccountType === 'company'
              ? <h2 className="text-danger">Price: {hit.wholesalePrice}</h2>
              : <h2 className="text-danger">Price: {hit.retailPrice}</h2>}
          </div>
          {/* <div className="d-flex justify-content-between">
            <h2 className="text-dark">Name: {hit.name}</h2>
          </div> */}
          <h4 className="text-dark">Name: {hit.name}</h4>
          {/* <h4 className="text-dark">{textTruncate(hit.name, 25)}</h4> */}
          <h4 className="text-dark">Material: {hit.material}</h4>
          <p className="mb-5 text-muted font-xs">
            Dimentions: {hit.dimentions}
          </p>
        </div>
      </RctCard>
    );
  }
}

// map state to props
const mapStateToProps = ({quote, authUser}) => {
  const {imagesAdobeStock, imageSelectedId, frameSelected} = quote;
  const {userData} = authUser;
  return {imagesAdobeStock, quote, imageSelectedId, frameSelected, userData};
};

export default connect (mapStateToProps, {
  pickImage,
  pickFrame,
}) (Hit);
