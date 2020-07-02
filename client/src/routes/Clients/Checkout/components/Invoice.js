import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {FormGroup, Input, Label} from 'reactstrap';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IntlMessages from '../../../../util/IntlMessages';
import {Grid} from '@material-ui/core';
import {NotificationManager} from 'react-notifications';
import Typography from '@material-ui/core/Typography';
import {RctCard, RctCardContent} from '../../../../components/RctCard';
import {NavLink} from 'react-router-dom';

import {
  manageInvoiceDialog,
  sendEmailWithPaymentConfirmation,
  cleanTheCart,
} from '../../../../actions';

class FormDialog extends Component {
  componentDidMount () {
    this.props.sendEmailWithPaymentConfirmation ({
      paymentInfo: this.props.cartMoneyData,
      userInfo: this.props.userData,
      shippingInfo: this.props.shippingAdreessCart,
      itemsBought: this.props.cart,
    });
  }

  componentWillUnmount () {
    this.props.cleanTheCart ();
  }
  handleClickOpen = () => {
    this.props.manageInvoiceDialog (true);
  };

  handleClose = () => {
    this.props.manageInvoiceDialog (false);
  };

  render () {
    console.log (`errormessage`, this.props.paymentMessage);
    return (
      <div>
        <Dialog
          open={this.props.invoiceDialog}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Invoice</DialogTitle>
          <DialogContent dividers>

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
                      <span>Telephone: 713-364-6216</span>
                      <span>Fax: 832-383-7050</span>
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
                    {this.props.paymentMessage &&
                      this.props.paymentMessage.messages
                      ? this.props.paymentMessage.messages.message[0].text
                      : ''}
                  </span>
                  <span>
                    {this.props.paymentMessage &&
                      this.props.paymentMessage.messages
                      ? this.props.paymentMessage.transactionResponse
                          .messages[0].description
                      : ''}
                  </span>
                  <span>
                    Transaction Id:{' '}
                    {this.props.paymentMessage &&
                      this.props.paymentMessage.transactionResponse
                      ? this.props.paymentMessage.transactionResponse.transId
                      : ''}
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
          </DialogContent>
          <DialogActions>
            <NavLink to="/app/client">
              {' '}
              <Button onClick={this.handleClose} className="btn-danger">
                Close
              </Button>
            </NavLink>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

// map state to props
const mapStateToProps = ({quote, authUser, settings, ecommerce}) => {
  const {
    paymentMessage,
    shippingAdreessCart,
    actualQuote,
    cartMoneyData,
    invoiceDialog,
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
    invoiceDialog,
  };
};

export default withRouter (
  connect (mapStateToProps, {
    sendEmailWithPaymentConfirmation,
    cleanTheCart,
    manageInvoiceDialog,
  }) (FormDialog)
);
