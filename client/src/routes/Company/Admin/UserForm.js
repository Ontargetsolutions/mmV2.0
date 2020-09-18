import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { NotificationContainer } from "react-notifications";
import { connect } from "react-redux";
import {
  addUserP,
  removeUserP,
  editUserP
} from "../../../../../../actions/User";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import CloseTwoToneIcon from "@material-ui/icons/CloseTwoTone";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.edit ? this.props.edit.user.name : "",
      email: this.props.edit ? this.props.edit.user.email : "",
      phone: this.props.edit ? this.props.edit.user.phone : "",
      role: this.props.edit ? this.props.edit.user.role : "Client",
      activateAccount: this.props.edit ? false : true
    };
  }

  onSubmitForm = event => {
    event.preventDefault();
    if (this.props.add) {
      this.props.addUserP({
        ...this.state,
        selected: this.props.selected
      });
    } else {
      if (this.props.edit) {
        this.props.editUserP({
          ...this.state,
          _id: this.props.edit.user._id,
          selected: this.props.selected
        });
      } else {
        this.props.removeUserP({
          _id: this.props.delete.user._id,
          selected: this.props.selected
        });
      }
    }

    this.props.closing();
  };
  
  render() {
    const { name, email, phone, role, activateAccount } = this.state;

    return (
      <div className="login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
        <div className="login-content text-center">
          <h2>
            {this.props.add
              ? "Add a new User"
              : this.props.edit
              ? "Edit the User"
              : `Are you sure to remove ${this.props.delete.user.name} info?`}
          </h2>

          <div className="login-form">
            <form
              onSubmit={e => {
                this.onSubmitForm(e);
              }}
            >
              {!this.props.delete && (
                <div>
                  <TextField
                    type="text"
                    id="signUpName"
                    label="Name"
                    onChange={event =>
                      this.setState({ name: event.target.value })
                    }
                    fullWidth
                    defaultValue={name}
                    margin="normal"
                    className="mt-0 mb-2"
                    required
                  />
                  <TextField
                    type="email"
                    onChange={event =>
                      this.setState({ email: event.target.value })
                    }
                    id="required"
                    label="Email"
                    fullWidth
                    defaultValue={email}
                    margin="normal"
                    className="mt-0 mb-2"
                    required
                  />
                  <TextField
                    type="text"
                    id="required"
                    label="Phone"
                    onChange={event => {
                      if (
                        event.target.value.match(/^-{0,1}\d+$/) ||
                        event.target.value === ""
                      ) {
                        this.setState({ phone: event.target.value });
                      }
                    }}
                    fullWidth
                    // defaultValue={phone}
                    margin="normal"
                    className="mt-0 mb-2"
                    required
                    maxLength="2"
                    inputProps={{
                      maxlength: 10,
                      minlength: 10,
                      value: phone
                    }}
                  />
                  <div>
                    <RadioGroup
                      id="roleRadioForm"
                      className="d-flex flex-row"
                      aria-label="role"
                      name="role"
                      value={role}
                      onChange={event =>
                        this.setState({
                          role: event.target.value,
                          activateAccount:
                            event.target.value === "Seller" && !this.props.edit
                              ? true
                              : activateAccount
                        })
                      }
                    >
                      <FormControlLabel
                        value="Client"
                        control={<Radio />}
                        label="Client"
                      />
                      <FormControlLabel
                        value="Seller"
                        control={<Radio />}
                        label="Seller"
                      />
                    </RadioGroup>
                    <FormControlLabel
                      disabled={
                        this.props.edit
                          ? false
                          : role === "Seller"
                          ? true
                          : false
                      }
                      id="switchActivateAccount"
                      control={
                        <Switch
                          checked={activateAccount}
                          onChange={event =>
                            this.setState({
                              activateAccount: event.target.checked
                            })
                          }
                          value="activateAccount"
                          color=""
                        />
                      }
                      label="Activate Account"
                      labelPlacement="top"
                    />
                  </div>
                </div>
              )}

              <div className="mb-3  margin-20">
                <Button
                  color="primary"
                  variant="contained"
                  className="text-white"
                  type="submit"
                >
                  {this.props.add ? "Add" : this.props.edit ? "Edit" : "Remove"}
                </Button>
                {this.props.delete && (
                  <Button
                    color="primary"
                    variant="contained"
                    className="text-white"
                    onClick={this.props.closing}
                    id="cancelButtonClose"
                  >
                    Cancel
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
        {!this.props.delete && (
          <Tooltip className="closeButtonUsers" title="Close">
            <IconButton
              className="closeButton"
              aria-label="add"
              onClick={this.props.closing}
            >
              <CloseTwoToneIcon />
            </IconButton>
          </Tooltip>
        )}
        <NotificationContainer />
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  const { selected } = user;
  return { selected };
};

export default connect(mapStateToProps, {
  addUserP,
  removeUserP,
  editUserP
})(UserForm);
