/**
 * Payment Component
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import Cards from "react-credit-cards";
import { Form, FormGroup, Input, Label } from "reactstrap";
import Button from "@material-ui/core/Button";
import MaskedInput from "react-text-mask";
import { NotificationManager } from "react-notifications";

import { payment } from "../../../../actions/QuoteActions";
// Card Component
import { RctCard, RctCardContent } from "../../../../components/RctCard";
// intl messages
import IntlMessages from "../../../../util/IntlMessages";

class SuccessfulPayment extends Component {
  render() {
    console.log(`the cart in the successful payment`, this.props.cart);
    return (
      <div className="invoice-wrapper">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-xl-10 mx-auto">
            {this.props.paymentMessage.transactionResponse.responseCode ===
              "1" && (
              <RctCard>
                <div className="invoice-head text-right">
                  <ul className="list-inline">
                    <li>
                      <a
                        href="#"
                        onClick={e => (e.preventDefault(), window.print())}
                      >
                        <i className="mr-10 ti-printer" /> Print
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="p-50">
                  <div className="d-flex justify-content-between mb-50">
                    <div className="sender-address">
                      <div className="invoice-logo mb-30">
                        <img
                          src={require("../../../../assets/img/logo.png")}
                          alt="session-logo"
                          className="img-fluid"
                          width="140"
                          height="37"
                        />
                      </div>
                      <div className="address">
                        <span>14825 St. Marys Ln. Ste. 250</span>
                        <span>Houston TX, 77074</span>
                        <span>United States</span>
                      </div>
                      <div className="address">
                        <span>Telephone: 800-692-7753</span>
                        <span>Fax: 800-692-7753</span>
                      </div>
                    </div>
                    <div className="invoice-address text-right">
                      {/* <span>Date: {date} </span> */}
                    </div>
                  </div>
                  <div className="d-flex justify-content-between mb-30 add-full-card">
                    <div className="add-card">
                      <h4 className="mb-15">To</h4>
                      <span className="name">{this.props.userData.Name}</span>
                      <span>{this.props.userData.Address1}</span>
                      <span>{this.props.userData.Address2}</span>
                      <span>
                        {this.props.userData.City} {this.props.userData.Zip}
                      </span>
                      <span>{this.props.userData.Country}</span>
                      <span>{this.props.userData.Phone}</span>
                      <span>{this.props.userData.Email}</span>
                    </div>
                    <div className="add-card">
                      <h4 className="mb-15">Ship To</h4>
                      <span className="name">{this.props.userData.Name}</span>
                      <span>{this.props.shippingAdreessCart.Address1}</span>
                      <span>{this.props.shippingAdreessCart.Address2}</span>
                      <span>
                        {this.props.shippingAdreessCart.City}{" "}
                        {this.props.shippingAdreessCart.Zip}
                      </span>
                      <span>{this.props.shippingAdreessCart.Country}</span>
                      <span>{this.props.shippingAdreessCart.Phone}</span>
                      <span>{this.props.shippingAdreessCart.Email}</span>
                    </div>
                  </div>
                  <div className="order-status mb-30">
                    <span>
                      Transaction Status:{" "}
                      {this.props.paymentMessage.messages.message.text}
                    </span>
                    <span>
                      {
                        this.props.paymentMessage.transactionResponse.messages
                          .description
                      }
                    </span>
                    <span>
                      Transaction Id:{" "}
                      {
                        this.props.paymentMessage.transactionResponse
                          .networkTransId
                      }
                    </span>
                  </div>
                  <div className="table-responsive mb-40">
                    <table className="table table-borderless">
                      <thead>
                        <tr>
                          <th>Qty</th>
                          <th>Product</th>
                          <th>Unit Price</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{this.props.actualQuote.Quantity}</td>
                          <td>{this.props.actualQuote.Product}</td>
                          <td>${this.props.actualQuote.Cost}</td>
                          {/* <td>${total}</td> */}
                        </tr>

                        <tr>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                          <td className="fw-bold">Subtotal</td>
                          {/* <td>${total}</td> */}
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                          <td className="fw-bold">Estimated Shipping</td>
                          <td>${this.props.actualQuote.DeliveryFee}</td>
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                          <td className="fw-bold">Estimated Taxes</td>
                          {/* <td>${taxes}</td> */}
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                          <td className="fw-bold">Total</td>
                          {/* <td>${suma}</td> */}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="note-wrapper row">
                    <div className="invoice-note col-sm-12 col-md-8"></div>
                    <div className="totle-amount col-sm-12 col-md-4 text-right">
                      {/* <h2 className="invoice-title">USD {suma}</h2> */}
                    </div>
                  </div>
                </div>
              </RctCard>
            )}
            {this.props.paymentMessage.messages.resultCode ===
              "Error" && (
              <RctCard>
                <p>No paso</p>
              </RctCard>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ quote, authUser, settings, ecommerce }) => {
  const { paymentMessage, shippingAdreessCart, actualQuote } = quote;
  const { cart } = ecommerce;
  const { userData } = authUser;
  return { paymentMessage, shippingAdreessCart, actualQuote, cart, userData };
};

export default connect(mapStateToProps, {})(SuccessfulPayment);
