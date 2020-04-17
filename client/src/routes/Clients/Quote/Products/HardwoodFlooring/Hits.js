/**
 * Hits Component
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";

import { pickHardwood, pickFinish} from "../../../../../actions/QuoteActions";

// Card Component
import { RctCard } from "../../../../../components/RctCard";

//Actions

//Helper
import { textTruncate } from "../../../../../helpers/helpers";

class Hit extends Component {
  state = {
    loading: false
  };

  //Select the image
  onSelect(imageId, e, finish) {
    this.setState({ loading: true });
    this.props.pickHardwood(imageId);
    this.props.pickFinish(finish);

    e.preventDefault();
    console.log(`reducer ${JSON.stringify(this.props.quote)}`);
  }


  render() {
    const { hit } = this.props;

    const { loading } = this.state;
    return (
      <RctCard customClasses="d-flex  mb-0 flex-column justify-content-between overflow-hidden">
        <div className="overflow-hidden">
          <div className="overlay-wrap  overflow-hidden">
            <div
              // id="linkHit"
              className={
                this.props.hardwoodSelected === hit.image 
                  ? "imageSelected text-center p-0 mb-0"
                  : "text-center p-0 mb-0"
              }
            >
              <img src={hit.image} className="img-fluid" alt="product" />
            </div>
            <div
              className="overlay-content d-flex align-items-end"
              onClick={e => this.onSelect(hit.image, e, hit.finish)}
            >
              <a
                href="#"
                className="bg-primary text-center w-100 cart-link text-white py-2"
              >
                {loading ? (
                  <CircularProgress
                    className="text-white"
                    color="inherit"
                    size={20}
                  />
                ) : (
                  "Select"
                )}
              </a>
            </div>
          </div>
        </div>
        <div className="product-info border-top p-3">
          <div className="d-flex justify-content-between">
            <h4 className="text-dark">{hit.name}</h4>
          </div>
          <h4 className="text-dark"></h4>
        </div>
      </RctCard>
    );
  }
}

// map state to props
const mapStateToProps = ({ quote }) => {
  const {  hardwoodSelected } = quote;
  return {  hardwoodSelected, quote };
};

export default connect(mapStateToProps, {
  pickHardwood, pickFinish
})(Hit);
