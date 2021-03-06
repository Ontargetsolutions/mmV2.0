/**
 * Checkout Item
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import SweetAlert from "react-bootstrap-sweetalert";
import Button from "@material-ui/core/Button";
import { getQuoteById } from "../../../../actions/QuoteActions";
import ImageLoader from "react-image-file";
import { CircularProgress } from "@material-ui/core";

// intl messages
import IntlMessages from "../../../../util/IntlMessages";

class CheckoutItem extends Component {
  state = {
    success: false
  };

  /**
   * On Confirm dialog
   * @param {string} key
   */
  onConfirm(key) {
    this.setState({ [key]: false });
  }

  componentDidMount() {
    // console.log(`component didmount quotemoneydata`, this.props.quoteMoneyData);
    const idQ  = this.props.quoteToView.quoteId;
    this.props.getQuoteById(idQ);
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
    for (const item of cart) {
      totalPrice += item.totalPrice;
    }
    return totalPrice.toFixed(2);
  }

  //Is Cart Empty
  isCartEmpty() {
    const { cart } = this.props;
    if (cart.length === 0) {
      return true;
    }
  }
  calcTotal = (quantity, price) => {
    return parseFloat(quantity) * parseFloat(price);
  };

  calcTaxes = (quantity, price) => {
    let total = parseFloat(quantity) * parseFloat(price);
    return total * 0.0825;
  };

  calcSuma = (total, taxes, delivery) => {
    return total + taxes + delivery;
  };
  render() {
    const { cart } = this.props;
    const { success } = this.state;
    // const { cost, quantity } = this.props.data ? this.props.data : 0;
    // const { taxes, TotalPrice, shipping } = this.props.data
    //   ? this.props.data
    //   : 0;

    let taxes1 = this.calcTaxes(
      this.props.actualQuote.Quantity,
      this.props.actualQuote.Cost
    );
    let total1 = this.calcTotal(
      this.props.actualQuote.Quantity,
      this.props.actualQuote.Cost
    );
    let suma1 = this.calcSuma(
      total1,
      taxes1,
      this.props.actualQuote.DeliveryFee
    );
    console.log(`actualquote`, this.props.actualQuote);
    
    // console.log(`actualImage`, JSON.stringify(this.props.actualImage.data));

    console.log(`billing info in payment`, this.props.billingInfo);
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

        <Scrollbars
          className="rct-scroll"
          autoHeight
          autoHeightMin={100}
          autoHeightMax={450}
          autoHide
        >
          <ul className="list-unstyled dropdown-body">
            <li className="d-flex justify-content-between p-3">
              <div className="media overflow-hidden w-75">
                <div className="mr-15">
                  {/* {this.props.actualQuote.ImageSource === "upload" && (
                    <img
                      src={this.props.actualImage}
                      alt="uploaded_pic"
                      style={{ height: "50%", width: "60%" }}
                    />
                  )} */}
                  {this.props.actualQuote.ImageSource === "upload" &&
                    (this.props.actualImage ? (
                      <img
                        src={this.props.actualImage}
                        alt="uploaded_pic"
                        style={{ height: "50%", width: "60%" }}
                      />
                    ) : (
                      <CircularProgress color="secondary"></CircularProgress>
                    ))}
                  {this.props.actualQuote.ImageSource !== "upload" &&
                    (this.props.actualQuote ? (
                      <img
                        src={this.props.actualQuote.ImagePath}
                        alt="products"
                        className="media-object"
                        width="63"
                        height="63"
                      />
                    ) : (
                      <CircularProgress color="secondary"></CircularProgress>
                    ))}
                </div>
                <div className="media-body text-truncate">
                  {/* <span className="fs-14 d-block text-truncate">c</span> */}
                  {/* <span className="fs-12 d-block text-muted text-truncate">{this.props.actualQuote.material}</span> */}
                  {/* <span className="fs-12 d-block text-muted">{cart.brand}</span> */}
                </div>
              </div>
              <div className="w-10">
                <span className="text-muted fs-12 d-block mb-10">
                  {this.props.actualQuote.Quantity}
                </span>
              </div>
              <div className="w-15">
                <span className="text-muted fs-12 d-block mb-10">
                  $ {this.props.actualQuote.Cost}
                </span>
              </div>
            </li>
          </ul>
        </Scrollbars>

        <div className="border-top d-flex justify-content-between align-items-center py-4">
          <span className=" text-muted">
            <IntlMessages id="components.Price" />
          </span>
          <span className="font-weight-bold">
            $ {this.props.actualQuote.Cost}
          </span>
        </div>
        <div className=" d-flex justify-content-between align-items-center py-4">
          <span className=" text-muted">
            <IntlMessages id="components.EstimatedShipping" />
          </span>
          <span className="font-weight-bold">
            $ {this.props.actualQuote.DeliveryFee}
          </span>
        </div>
        <div className=" d-flex justify-content-between align-items-center py-4">
          <span className=" text-muted">
            <IntlMessages id="components.EstimatedTaxes" />
          </span>
          <span className="font-weight-bold">$ {taxes1}</span>
        </div>
        <div className="border-top d-flex justify-content-between align-items-center py-4">
          <span className="font-weight-bold text-muted">
            <IntlMessages id="components.totalPrice" />
          </span>
          <span className="font-weight-bold">$ {suma1}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ quote}) => {
  const { billingInfo, quoteToView, actualQuote } = quote;
  return { billingInfo, quoteToView, actualQuote};
};

export default connect(mapStateToProps, { getQuoteById })(CheckoutItem);
