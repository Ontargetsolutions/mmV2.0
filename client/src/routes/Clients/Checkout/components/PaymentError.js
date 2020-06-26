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

import {manageErrorDialog} from '../../../../actions';

class FormDialog extends Component {

  handleClickOpen = () => {
    this.props.manageErrorDialog (true);
  };

  handleClose = () => {
    this.props.manageErrorDialog (false);
    console.log(`cambiar el errorDialogto false`);
  };

  render () {
    console.log (`errormessage`, this.props.paymentMessage);
    return (
      <div>
        <Dialog
          open={this.props.errorPaymentDialog}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Payment Error</DialogTitle>
          <DialogContent dividers>

            {/* <Typography gutterBottom>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
              scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
              auctor fringilla.
            </Typography> */}
            <div
              className="card-image card-content text-center"
              style={{marginTop: '10%'}}
            >
              <img
                src={require ('../../../../assets/img/error-icon-15.png')}
                alt="about card"
                className="img-fluid mt-5"
                width="200"
                height="150"
              />
            </div>
            <div className="card-content text-center p-30">
              <div className="section-title mb-40">
                <h3>
                  {
                   this.props.paymentMessage.transactionResponse ? this.props.paymentMessage.transactionResponse.errors[0]
                      .errorText: ''
                  }
                </h3>
              </div>
              <p className="card-content text-center p-30">
                Please review submitted information. Payment also can be made via phone 713-364-6216.
              </p>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} className="btn-danger">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

// map state to props
const mapStateToProps = ({quote}) => {
  // return settings;
  const {errorPaymentDialog, paymentMessage} = quote;
  return {errorPaymentDialog, paymentMessage};
};

export default withRouter (
  connect (mapStateToProps, {
    manageErrorDialog,
  }) (FormDialog)
);
