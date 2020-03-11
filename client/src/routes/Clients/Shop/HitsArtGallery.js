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
import {onAddItemToCart} from '../../../actions/EcommerceActions';

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

  //Add Item to cart
  onPressAddToCart (cartItem, e) {
    const Item = {
      objectID: cartItem.objectID,
      artGalleryId: cartItem.artGalleryId,
      name: cartItem.name,
      image: cartItem.image,
      price: this.props.userData.AccountType === 'company'? parseFloat(cartItem.wholesalePrice): parseFloat(cartItem.retailPrice),
      material: cartItem.material,
      dimentions: cartItem.dimentions
    }
    this.setState ({loading: true});
    setTimeout (() => {
      this.props.onAddItemToCart (Item);
    }, 1000);
    e.preventDefault ();
  }

  /**
	 * Function to check either the item exist in cart or not
	 * Return boolean
	 * @param {boolean} id 
	 */
  isItemExistInCart (id) {
    const {cart} = this.props;
    let existence = false;
    for (const item of cart) {
      if (item.objectID === id) {
        existence = true;
      }
    }
    return existence;
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

          <div className="overlay-wrap overflow-hidden">
            <div className="text-center p-4">
              <img src={hit.image} className="img-fluid" alt="product" />
            </div>
            <div className="overlay-content d-flex align-items-end">
              {!this.isItemExistInCart (hit.objectID)
                ? <a
                    href="#"
                    className="bg-primary text-center w-100 cart-link text-white py-2"
                    onClick={e => this.onPressAddToCart (hit, e)}
                  >
                    {loading
                      ? <CircularProgress
                          className="text-white"
                          color="inherit"
                          size={20}
                        />
                      : 'Add To Cart'}
                  </a>
                : <Link
                    to="/app/cart"
                    className="bg-secondary text-center w-100 cart-link text-white py-2"
                  >
                    View Cart
                  </Link>}
            </div>
          </div>
        </div>
        <div className="product-info border-top p-3">
          <div className="d-flex justify-content-between">
            {this.props.userData.AccountType === 'company'
              ? <h2 className="text-danger">Price: ${hit.wholesalePrice}</h2>
              : <h2 className="text-danger">Price: ${hit.retailPrice}</h2>}
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
const mapStateToProps = ({quote, authUser, ecommerce}) => {
  const {imagesAdobeStock, imageSelectedId, frameSelected} = quote;
  const {userData} = authUser;
  const { cart } = ecommerce;
  return {imagesAdobeStock, quote, imageSelectedId, frameSelected, userData, cart};
};

export default connect (mapStateToProps, {
  pickImage,
  pickFrame,
  onAddItemToCart
}) (Hit);
