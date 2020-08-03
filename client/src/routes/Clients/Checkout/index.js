/**
 * Checkout Page
 */
import React, { Component } from "react";
import {connect} from 'react-redux';

//Components
import CheckoutForm from "./components/CheckoutForm";
import CheckoutItem from "./components/CheckoutItem";
import CheckoutQuote from "./components/CheckoutQuote";

import {getQuoteById, getquoteMoneyData} from '../../../actions/QuoteActions';

// Card Component
import { RctCard, RctCardContent } from "../../../components/RctCard";

class Checkout extends Component {
  render() {
    const { match } = this.props;
   
    const  source  = this.props.quoteToView.source ? this.props.quoteToView.source : "cart";

    return (
      <div className="checkout-wrap">
        <RctCard customClasses="overflow-hidden">
          <RctCardContent noPadding>
            <div className="row no-gutters">
              <div className="col-lg-8 col-md-6 col-sm-12">
                <CheckoutForm />
              </div>                 
              <div className="col-lg-4 col-md-6 col-sm-12">
                {source=== "invoice" && (
                  <CheckoutQuote
                    quoteid={this.props.quoteMoneyData.quoteId}
                    data={this.props.quoteMoneyData}
                  />
                )}
                {source === "checkout" && (
                  <CheckoutQuote quoteid={this.props.quoteMoneyData.quoteId}  data={this.props.quoteMoneyData}/>
                )}
                {(source !== 'checkout' && source !== 'invoice') && (
                  <CheckoutItem />
                )}
              </div>
            </div>
          </RctCardContent>
        </RctCard>
      </div>
    );
  }
}


// map state to props
const mapStateToProps = ({quote, authUser}) => {
  const {myOrders, actualQuote, quoteToView, quoteMoneyData} = quote;
  const {userData} = authUser;
  return {myOrders, userData, actualQuote, quoteToView, quoteMoneyData};
};

export default connect (mapStateToProps, {getQuoteById, getquoteMoneyData}) (Checkout);