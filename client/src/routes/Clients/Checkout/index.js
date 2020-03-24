/**
 * Checkout Page
 */
import React, { Component } from "react";

//Components
import CheckoutForm from "./components/CheckoutForm";
import CheckoutItem from "./components/CheckoutItem";
import CheckoutQuote from "./components/CheckoutQuote";

// Card Component
import { RctCard, RctCardContent } from "../../../components/RctCard";

class Checkout extends Component {
  render() {
    const { match } = this.props;
    const  source  = this.props.location.source ? this.props.location.source: "cart";
    return (
      <div className="checkout-wrap">
        <RctCard customClasses="overflow-hidden">
          <RctCardContent noPadding>
            <div className="row no-gutters">
              <div className="col-lg-8 col-md-6 col-sm-12">
                <CheckoutForm />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                {source.source === "invoice" && (
                  <CheckoutQuote
                    quoteid={this.props.location.quoteid}
                    data={this.props.location.data}
                  />
                )}
                {source.source === "checkout" && (
                  <CheckoutQuote quoteid={this.props.location.quoteid}  data={this.props.location.data}/>
                )}
                {source === 'cart' && (
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
export default Checkout;
