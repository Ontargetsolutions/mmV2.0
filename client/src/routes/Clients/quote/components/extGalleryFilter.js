/**
 * Checkbox List Component
 */
import React, { Component } from "react";
import {connect} from 'react-redux';
import { Scrollbars } from "react-custom-scrollbars";
import { withStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {setGalleryFilterCriteria } from '../../../../actions/QuoteActions';


const listItems = [
  {
    itemName: "Floral Paintings",
    status: false
  },
  {
    itemName: "Abstract Paintings",
    status: false
  },
  {
    itemName: "Vintage Paintings",
    status: false
  },
  {
    itemName: "Pet Paintings",
    status: false
  },
  {
    itemName: "Boat Paintings",
    status: false
  },
  {
    itemName: "Cityscape Paintings",
    status: false
  },
  {
    itemName: "Still Life Paintings",
    status: false
  },
  {
    itemName: "Landscape  Paintings",
    status: false
  },
  {
    itemName: "Religious Paintings",
    status: false
  },
  {
    itemName: "Orientalist Paintings",
    status: false
  },
  {
    itemName: "Famous Art",
    status: false
  },
  {
    itemName: "Famous People",
    status: false
  },
  {
    itemName: "Paris Street Art Paintings",
    status: false
  },
  {
    itemName: "Contemporary Art Paintings",
    status: false
  },
  {
    itemName: "Pop Art Paintings",
    status: false
  },
  {
    itemName: "Abstract Expressionism Art Paintings",
    status: false
  },
  {
    itemName: "Cubism Art Paintings",
    status: false
  },
  {
    itemName: "Surrealism Art Paintings",
    status: false
  },
  {
    itemName: "Paintings",
    status: false
  },
  {
    itemName: "Painting Venus of the Mirror by Titian",
    status: false
  }
];

const style = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    with: "90%",
    margin: "3%"
  }
});

class CheckboxListComponent extends Component {
  // Interactive State
  state = {
    listItems,
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            {" "}
            <Scrollbars
              className="rct-scroll"
              autoHeight
              autoHeightMin={100}
              autoHeightMax={260}
              autoHide
            >
              <RadioGroup
                value={this.props.criteria}
                onChange={e => this.props.handleChangeRadio(e)}
              >
                {this.state.listItems.map((data, key) => (
                  <FormControlLabel
                    value={data.itemName}
                    control={<Radio />}
                    label={data.itemName}
                    key={key}
                  />
                ))}
              </RadioGroup>
            </Scrollbars>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

// map state to props
const mapStateToProps = ({quote}) => {
    const {extGalleryFilter} = quote;
    return {extGalleryFilter, quote};
  };
  
  export default withStyles(style)(connect (mapStateToProps, {
    setGalleryFilterCriteria
  })(CheckboxListComponent));
  

