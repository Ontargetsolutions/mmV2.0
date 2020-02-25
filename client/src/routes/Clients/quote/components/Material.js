/**
 * Ecommerce Dashboard
 */

import React, {Component} from 'react';
import {FormGroup, Input, Label, Col} from 'reactstrap';
import MatButton from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

// rct card box
import RctCollapsibleCard
  from '../../../../components/RctCollapsibleCard/RctCollapsibleCard';

import {pickMaterial, pickService} from '../../../../actions/QuoteActions';

class Materials extends Component {
  state = {
    material: 'Art Gallery',
  };

  // componentDidMount(){
  //   this.props.pickMaterial(this.state.material);
  // }

  componentWillMount () {
    this.props.pickMaterial ('Art Gallery');
    console.log (`reducer en el comp will mount ${this.props.material}`);
  }

  handleChangeRadio = (e, key) => {
    this.setState ({[key]: e.target.value});
    this.props.pickMaterial (e.target.value);
    console.log (`reducer en el  handle change  ${this.props.material}`);
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
              aria-label="materials"
              name="materials"
              value={this.state.material}
              onChange={e => this.handleChangeRadio (e, 'material')}
            >
              {this.props.serviceSelected === 'Custom-Framed Murals' &&
                <FormControlLabel
                  value="Art Gallery"
                  control={<Radio />}
                  label="Art Gallery"
                />}
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
  const {serviceSelected, material} = quote;
  return {serviceSelected, material};
};

export default connect (mapStateToProps, {
  pickMaterial,
  pickService,
}) (Materials);
