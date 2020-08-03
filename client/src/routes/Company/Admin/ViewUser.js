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
import IntlMessages from '../../../util/IntlMessages';
import {Grid} from '@material-ui/core';
import {NotificationManager} from 'react-notifications';
import Typography from '@material-ui/core/Typography';

import {manageViewUserDialog, getWorkersById} from '../../../actions';

class FormDialog extends Component {
  handleClickOpen = () => {
    this.props.manageViewUserDialog (true);
  };

  handleClose = () => {
    this.props.manageViewUserDialog (false);
  };

  componentWillMount () {
    console.log (`888888888888`, this.props.userId);
    this.props.getWorkersById (this.props.userId);
  }

  render () {
    return (
      <div>
        <Dialog
          open={this.props.viewUserDialog}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">User Information</DialogTitle>
          <DialogContent dividers>
            <div
              className="card-image card-content text-center"
            //   style={{marginTop: '10%'}}
            >
              {/* <img
                src={require ('../../../assets/img/error-icon-15.png')}
                alt="about card"
                className="img-fluid mt-5"
                width="200"
                height="150"
              /> */}
            </div>
            <div className="card-content text-center">
              {/* <div className="section-title mb-40">
                <h3>
                  hello
             {
                   (this.props.paymentMessage.transactionResponse && this.props.paymentMessage.transactionResponse.errors) ? this.props.paymentMessage.transactionResponse.errors[0]
                      .errorText: ''
                  } 
                </h3>
              </div> */}
              <p className="card-content  p-10">
                Name: {this.props.actualWorker.Name}
              </p>
              <p className="card-content  p-10">
                Phone: {this.props.actualWorker.Phone}
              </p>
              <p className="card-content  p-10">
                Email: {this.props.actualWorker.Email}
              </p>
              <p className="card-content  p-10">
                Address:
                {' '}
                {`${this.props.actualWorker.Address1} ${this.props.actualWorker.Address2} ${this.props.actualWorker.City}, ${this.props.actualWorker.State} ${this.props.actualWorker.Zip}`}
              </p>
              <p className="card-content  p-10">
                Rol: {this.props.actualWorker.Rol}
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
const mapStateToProps = ({user}) => {
  // return settings;
  const {viewUserDialog, userId, actualWorker} = user;
  return {viewUserDialog, userId, actualWorker};
};

export default withRouter (
  connect (mapStateToProps, {
    manageViewUserDialog,
    getWorkersById,
  }) (FormDialog)
);
