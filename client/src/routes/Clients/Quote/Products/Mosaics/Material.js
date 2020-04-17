/**
 * Ecommerce Dashboard
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';



import {pickArtSource, pickService} from '../../../../../actions/QuoteActions';

class Materials extends Component {
  state = {
    artSource: 'Extensive Gallery',
  };

  componentWillMount () {
    this.props.pickArtSource ('Extensive Gallery');
    console.log (`reducer en el comp will mount ${this.props.artSource}`);
  }

  handleChangeRadio = (e, key) => {
    this.setState ({[key]: e.target.value});
    this.props.pickArtSource (e.target.value);
    console.log (`reducer en el  handle change  ${this.props.artSource}`);
  };

  render () {
    return (
      <div className="ecom-dashboard-wrapper">

        <div className="row">
          <FormControl component="fieldset">
            {/* <FormLabel
                  className="productsRadiobuttonHeader"
                  component="legend"
                ></FormLabel> */}
            <RadioGroup
              aria-label="artSource"
              name="artSource"
              value={this.state.artSource}
              onChange={e => this.handleChangeRadio (e, 'artSource')}
            >
              {this.props.serviceSelected === 'Custom-Framed Murals' &&
                <FormControlLabel
                  value="Extensive Gallery"
                  control={<Radio />}
                  label="Extensive Gallery"
                />}
              <FormControlLabel
                value="Patterns"
                control={<Radio />}
                label="Patterns"
              />

              <FormControlLabel
                value="Upload a pic"
                control={<Radio />}
                label="Upload your file"
              />
              {this.props.serviceSelected != 'Custom-Framed Murals' &&
                <FormControlLabel
                  value="Wall-Floor Art"
                  control={<Radio />}
                  label="Wall-Floor Art"
                />}
            </RadioGroup>
          </FormControl>
        </div>

      </div>
    );
  }
}

// map state to props
const mapStateToProps = ({quote}) => {
  const {serviceSelected, artSource} = quote;
  return {serviceSelected, artSource};
};

export default connect (mapStateToProps, {
  pickArtSource,
  pickService,
}) (Materials);
