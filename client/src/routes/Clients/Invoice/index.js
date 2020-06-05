/**
 * Invoice
 */
import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {Link, NavLink} from 'react-router-dom';

// intl messages
import IntlMessages from '../../../util/IntlMessages';

// rct card
import {RctCard} from '../../../components/RctCard/index';

import {getQuoteById, getquoteMoneyData} from '../../../actions/QuoteActions';
import Moment from 'react-moment';
import 'moment-timezone';

class Invoice extends Component {
  componentDidMount () {
    // const { id } = this.props.location.quoteid;
    // this.props.getQuoteById(id);

    this.props.getQuoteById (this.props.quoteToView.quoteId);
  }

  calcTotal = (quantity, price) => {
    return parseFloat (quantity) * parseFloat (price);
  };

  calcTaxes = (quantity, price) => {
    let total = parseFloat (quantity) * parseFloat (price);
    return total * 0.0825;
  };

  calcSuma = (total, taxes, delivery) => {
    return total + taxes + delivery;
  };

  render () {
    console.log (
      `id que viene de la tabla ${JSON.stringify (this.props.location.quoteid)}`
    );
    console.log (`quote info ${JSON.stringify (this.props.actualQuote)}`);

    let taxes = this.calcTaxes (
      this.props.actualQuote.Quantity,
      this.props.actualQuote.Cost
    );
    let total = this.calcTotal (
      this.props.actualQuote.Quantity,
      this.props.actualQuote.Cost
    );
    let suma = this.calcSuma (total, taxes, this.props.actualQuote.DeliveryFee);

    let date = new Date ().toString ().split (' ').splice (1, 3).join (' ');

    return (
      <div className="invoice-wrapper">
        {/* <PageTitleBar
          title={<IntlMessages id="sidebar.invoice" />}
          match={this.props.match}
        /> */}
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
                        src={require ('../../../assets/img/logo.png')}
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
                    <span>Invoice: {this.props.actualQuote.InvoiceNumber}</span>
                    <span>Date: {date} </span>
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
                    <span>{this.props.actualQuote.Address1}</span>
                    <span>{this.props.actualQuote.Address2}</span>
                    <span>
                      {this.props.actualQuote.City} {this.props.actualQuote.Zip}
                    </span>
                    <span>{this.props.actualQuote.Country}</span>
                    <span>{this.props.actualQuote.Phone}</span>
                    <span>{this.props.actualQuote.Email}</span>
                  </div>
                </div>
                <div className="order-status mb-30">
                  <span>
                    Order Date:{' '}
                    <Moment format="YYYY/MM/DD">
                      {this.props.actualQuote.createdAt}
                    </Moment>
                  </span>
                  <span>Order Status: {this.props.actualQuote.Status}</span>
                  <span>Order ID: #{this.props.actualQuote.id}</span>
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
                        <td>${total}</td>
                      </tr>

                      <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td className="fw-bold">Subtotal</td>
                        <td>${total}</td>
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
                        <td>${taxes}</td>
                      </tr>
                      <tr>
                        <td>&nbsp;</td>
                        <td>&nbsp;</td>
                        <td className="fw-bold">Total</td>
                        <td>${suma}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="note-wrapper row">
                  <div className="invoice-note col-sm-12 col-md-8">
                    {/* <h2 className="invoice-title">Note</h2>
                    <p className="fs-14">
                      Etsy doostang zoodles disqus groupon greplin oooj voxy
                      zoodles, weebly ning heekya handango imeem plugg dopplr
                      jibjab, movity jajah plickers sifteo edmodo ifttt zimbra.
                    </p> */}
                  </div>
                  <div className="totle-amount col-sm-12 col-md-4 text-right">
                    <h2 className="invoice-title">USD {suma}</h2>
                    <div className="row">
                      <div className="col-sm-6">
                        <Button // variant="contained"
                        className="btn-info text-white btn-icon">
                          <i className="ti-save mr-10" />{' '}
                          <IntlMessages id="components.Save" />
                        </Button>
                      </div>
                      <div className="col-sm-6">
                        <NavLink
                          to={{
                            pathname: '/app/checkout',
                            // quoteid: {
                            //   id: this.props.actualQuote.id,
                            // },
                            // data: {
                            //   taxes: taxes,
                            //   TotalPrice: suma,
                            //   shipping: this.props.actualQuote.DeliveryFee,
                            // },
                            // source: {
                            //   source: 'invoice',
                            // },
                          }}
                        >
                          <Button
                            variant="contained"
                            className="btn-success text-white btn-icon"
                            onClick={() =>
                              this.props.getquoteMoneyData ({
                                quoteId: this.props.actualQuote.id,
                                source: 'invoice',
                                taxes: taxes,
                                TotalPrice: suma,
                                shipping: this.props.actualQuote.DeliveryFee,
                              })}
                          >
                            <i className="ti-wallet mr-10" />{' '}
                            <IntlMessages id="components.payNow" />
                          </Button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RctCard>
          </div>
        </div>
      </div>
    );
  }
}

// map state to props
const mapStateToProps = ({quote, authUser}) => {
  const {myOrders, actualQuote, quoteToView} = quote;
  const {userData} = authUser;
  return {myOrders, userData, actualQuote, quoteToView};
};

export default connect (mapStateToProps, {getQuoteById, getquoteMoneyData}) (Invoice);
