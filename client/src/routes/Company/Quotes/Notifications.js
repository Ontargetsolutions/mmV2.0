import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { FormGroup, Input, Label } from "reactstrap";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import IntlMessages from "../../../util/IntlMessages";
import { Grid } from "@material-ui/core";
import { NotificationManager } from "react-notifications";

import { manageNotificaionDialog, saveNotification } from "../../../actions";

class FormDialog extends Component {
  state = {
    header: "",
    text: ""
  };
  handleClickOpen = () => {
    this.props.manageNotificaionDialog(true);
  };

  handleClose = () => {
    this.props.manageNotificaionDialog(false);
    this.setState({ header: "", text: "" });
  };

  sendNotification = e => {
    e.preventDefault();
    const notification = {
      Header: this.state.header,
      Text: this.state.text,
      UserId: this.props.openDialog,
      Read: false
    };
    this.props.saveNotification(notification);
  };

  render() {
    return (
      <div>
        <Dialog
          open={this.props.openDialog ? true : false}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Notifications</DialogTitle>
          <DialogContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="header"
                  id="header"
                  id="outlined-basic"
                  label="Header"
                  variant="outlined"
                  fullWidth
                  value={this.state.header}
                  onChange={e => this.setState({ header: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-textarea"
                  label="Notification"
                  placeholder="Notification content"
                  variant="outlined"
                  multiline
                  variant="outlined"
                  value={this.state.text}
                  fullWidth
                  onChange={e => this.setState({ text: e.target.value })}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} className="btn-danger">
              Cancel
            </Button>
            <Button
              onClick={e => {
                this.handleClose();
                this.sendNotification(e);
                NotificationManager.success(`Notification sent`);
              }}
              className="btn-info"
            >
              Send
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

// map state to props
const mapStateToProps = ({ notifications }) => {
  // return settings;
  const { openDialog } = notifications;
  return { openDialog };
};

export default withRouter(
  connect(mapStateToProps, {
    manageNotificaionDialog,
    saveNotification
  })(FormDialog)
);
