/**
 * Checkout Item
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import SweetAlert from "react-bootstrap-sweetalert";
import Button from "@material-ui/core/Button";

// intl messages
import IntlMessages from "../../../../util/IntlMessages";

import { getDeliveryFee } from "../../../../actions";



class CheckoutItem extends Component {
  state = {
    success: false
  };

  componentDidMount() {
    
    if (this.props.cart.length !== 0) {
      this.props.getDeliveryFee({user: this.props.userData, cart: this.props.cart});
    }
  }

  /**
   * On Confirm dialog
   * @param {string} key
   */
  onConfirm(key) {
    this.setState({ [key]: false });
  }

  /**
   * Open Alert
   * @param {key} key
   */
  openAlert(key) {
    this.setState({ [key]: true });
  }

  //Get Total Price
  getTotalPrice() {
    const { cart } = this.props;
    let totalPrice = 0;
    let total = 0;
    for (const item of cart) {
      totalPrice += item.totalPrice;
    }
    total = parseFloat(totalPrice) + parseFloat(this.props.deliveryFee);

    return total;
  }

  //Is Cart Empty
  isCartEmpty() {
    const { cart } = this.props;
    if (cart.length === 0) {
      return true;
    }
  }

  render() {
    const { cart } = this.props;
   
    console.log(`delivery fee en el reducer `, this.props.deliveryFee);
    console.log(`userData`, this.props.userData);
    const { success } = this.state;
    return (
      <div className="checkout-item-wrap p-4">
        <div className="border-bottom d-flex justify-content-between align-items-center p-3">
          <span className="font-weight-bold w-70">
            <IntlMessages id="components.product" />
          </span>
          <span className="font-weight-bold w-15">
            <IntlMessages id="components.quantity" />
          </span>
          <span className="font-weight-bold w-15">
            <IntlMessages id="widgets.price" />
          </span>
        </div>
        {this.isCartEmpty() ? (
          <div className="text-center p-4">
            <h3>
              <IntlMessages id="components.NoItemFound" />
            </h3>
          </div>
        ) : (
          <Scrollbars
            className="rct-scroll"
            autoHeight
            autoHeightMin={100}
            autoHeightMax={450}
            autoHide
          >
            <ul className="list-unstyled dropdown-body">
              {cart.map((cart, key) => (
                <li className="d-flex justify-content-between p-3" key={key}>
                  <div className="media overflow-hidden w-75">
                    <div className="mr-15">
                      <img
                        src={cart.image}
                        alt="products"
                        className="media-object"
                        width="63"
                        height="63"
                      />
                    </div>
                    <div className="media-body text-truncate">
                      <span className="fs-14 d-block text-truncate">
                        {cart.name}
                      </span>
                      <span className="fs-12 d-block text-muted text-truncate">
                        {cart.material}
                      </span>
                      {/* <span className="fs-12 d-block text-muted">{cart.brand}</span> */}
                    </div>
                  </div>
                  <div className="w-10">
                    <span className="text-muted fs-12 d-block mb-10">
                      {cart.productQuantity}
                    </span>
                  </div>
                  <div className="w-15">
                    <span className="text-muted fs-12 d-block mb-10">
                      $ {cart.price}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </Scrollbars>
        )}
        <div className=" d-flex justify-content-between align-items-center py-4">
          <span className=" text-muted">
            <IntlMessages id="components.estimatedDelivery" />
          </span>
          <span className="font-weight-bold">$ {this.props.deliveryFee}</span>
        </div>
        <div className="border-top d-flex justify-content-between align-items-center py-4">
          <span className="font-weight-bold text-muted">
            <IntlMessages id="components.totalPrice" />
          </span>
          <span className="font-weight-bold">$ {this.getTotalPrice()}</span>
        </div>
        {/* <div className="d-flex justify-content-end align-items-center">
               {!this.isCartEmpty() ? (
                  <Button variant="contained" color="primary" className="text-white" onClick={() => this.openAlert('success')}>
                     <IntlMessages id="components.placeOrder" />
                  </Button>
               ) : (
                     <Button variant="contained" color="secondary" component={Link} to="/app/ecommerce/shop" className="text-white">
                        <IntlMessages id="components.goToShop" />
                     </Button>
                  )
               }
            </div>
            <SweetAlert
               success
               show={success}
               title="Your Order Is Successfully Placed !"
               btnSize="sm"
               onConfirm={() => this.onConfirm('success')}
            /> */}
      </div>
    );
  }
}

const mapStateToProps = ({ ecommerce, settings, quote, authUser }) => {
  const { cart } = ecommerce;
  const { deliveryFee } = quote;
  const { userData } = authUser;
  return { cart, settings, deliveryFee, userData };
};

export default connect(mapStateToProps, { getDeliveryFee })(CheckoutItem);
