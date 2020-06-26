/**
 * Payment Component
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import Cards from 'react-credit-cards';
import {Form, FormGroup, Input, Label} from 'reactstrap';
import Button from '@material-ui/core/Button';
import MaskedInput from 'react-text-mask';
import {NotificationManager} from 'react-notifications';
import * as emailjs from 'emailjs-com';

import {
  sendEmailWithPaymentConfirmation,
  cleanTheCart,
} from '../../../../actions';
// Card Component
import {RctCard, RctCardContent} from '../../../../components/RctCard';
// intl messages
import IntlMessages from '../../../../util/IntlMessages';

class SuccessfulPayment extends Component {
  componentDidMount () {
    if (
      this.props.paymentMessage.transactionResponse &&
      this.props.paymentMessage.transactionResponse.responseCode === '1'
    ) {
      this.props.sendEmailWithPaymentConfirmation ({
        paymentInfo: this.props.cartMoneyData,
        userInfo: this.props.userData,
        shippingInfo: this.props.shippingAdreessCart,
        itemsBought: this.props.cart,
      });
    }
  }

  componentWillUnmount () {
    this.props.cleanTheCart ();
  }

  render () {
    // console.log (`the cart in the successful payment`, this.props.cart);
    // console.log (
    //   `the cartMoneyData in the successful payment`,
    //   this.props.cartMoneyData
    // );

    // console.log (
    //   `the shippingAdreessCart in the successful payment`,
    //   this.props.shippingAdreessCart
    // );

    return (
      <div className="invoice-wrapper">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-xl-10 mx-auto">

            <RctCard>

              <div className="invoice-head text-right">
                <ul className="list-inline">
                  <li>
                    <a
                      href="#"
                      onClick={e => (e.preventDefault (), window.print ())}
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
                        src={require ('../../../../assets/img/logo.png')}
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
                    <span className="name">
                      {this.props.shippingAdreessCart.firstName +
                        ' ' +
                        this.props.shippingAdreessCart.lastName}
                    </span>
                    <span>{this.props.shippingAdreessCart.addressLine1}</span>
                    <span>{this.props.shippingAdreessCart.addressLine2}</span>
                    <span>
                      {this.props.shippingAdreessCart.city}{' '}
                      {this.props.shippingAdreessCart.zipCode}
                    </span>
                    <span>{this.props.shippingAdreessCart.country}</span>
                    <span>{this.props.shippingAdreessCart.mobileNumber}</span>
                    <span>{this.props.shippingAdreessCart.emailId}</span>
                  </div>
                </div>
                <div className="order-status mb-30">
                  <span>
                    Transaction Status:{' '}
                    {this.props.paymentMessage.messages.message[0].text}
                  </span>
                  <span>
                    {
                      this.props.paymentMessage.transactionResponse.messages[0]
                        .description
                    }
                  </span>
                  <span>
                    Transaction Id:{' '}
                    {this.props.paymentMessage.transactionResponse.transId}
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
                      {this.props.cart.map ((item, key) => (
                        <tr key={key}>
                          <td>{item.productQuantity}</td>
                          <td>{item.name}</td>
                          <td>${item.totalPrice}</td>
                          <td>${item.totalPrice * item.productQuantity}</td>
                        </tr>
                      ))}
                      {/* <tr>
                          <td>&nbsp;</td>
                          <td>&nbsp;</td>
                          <td className="fw-bold">Subtotal</td>
                          <td>${total}</td>
                        </tr> */}
                      <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td className="fw-bold">Estimated Shipping</td>
                        <td>${this.props.cartMoneyData.deliveryFee}</td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td className="fw-bold">Estimated Taxes</td>
                        <td>${this.props.cartMoneyData.taxes}</td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td className="fw-bold">Total</td>
                        <td>${this.props.cartMoneyData.totalPrice}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </RctCard>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({quote, authUser, settings, ecommerce}) => {
  const {
    paymentMessage,
    shippingAdreessCart,
    actualQuote,
    cartMoneyData,
  } = quote;
  const {cart} = ecommerce;
  const {userData} = authUser;
  return {
    paymentMessage,
    shippingAdreessCart,
    actualQuote,
    cart,
    userData,
    cartMoneyData,
  };
};

export default connect (mapStateToProps, {
  sendEmailWithPaymentConfirmation,
  cleanTheCart,
}) (SuccessfulPayment);
