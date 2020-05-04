/**
 * User Management Page
 */
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";

import { connect } from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Badge,
} from "reactstrap";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { NotificationManager } from "react-notifications";
import Avatar from "@material-ui/core/Avatar";

// redux action
import {
  getWorkersList,
  fetchCountry,
  fetchState,
  signupUserInFirebase,
  addUser,
} from "../../../actions";

// api
// import api from "Api";

import Table from "./reactTable";

// delete confirmation dialog
import DeleteConfirmationDialog from "../../../components/DeleteConfirmationDialog/DeleteConfirmationDialog";

// add new user form
import AddNewUserForm from "./AddNewUserForm";

// update user form
import UpdateUserForm from "./UpdateUserForm";

// page title bar
import PageTitleBar from "../../../components/PageTitleBar/PageTitleBar";

// intl messages
import IntlMessages from "../../../util/IntlMessages";

// rct card box
import RctCollapsibleCard from "../../../components/RctCollapsibleCard/RctCollapsibleCard";

// rct section loader
import RctSectionLoader from "../../../components/RctSectionLoader/RctSectionLoader";
const countriesStates = require ('countrycitystatejson');

class UserProfile extends Component {
  state = {
    all: false,
    country: "af",
    users: null, // initial user data
    selectedUser: null, // selected user to perform operations
    loading: false, // loading activity
    addNewUserModal: false, // add new user form modal
    addNewUserDetail: {
      id: "",
      email: "",
      password: "123456",
      name: "",
      phone: "",
      address1: "",
      address2: "",
      city: "",
      country: "",
      stateC: "",
      zipcode: "",
      rol: "",
      badgeClass: "badge-success",
      // dateCreated: 'Just Now',
      checked: false,
    },
    openViewUserDialog: false, // view user dialog box
    editUser: null,
    allSelected: false,
    selectedUsers: 0,
  };

  componentDidMount() {

  }

  handleChangeCountry = event => {
    this.setState ({country: event.target.value});
  };
  handleChangeState = event => {
    this.setState ({stateC: event.target.value});
  };

  /**
   * Open Add New User Modal
   */
  opnAddNewUserModal(e) {
    e.preventDefault();
    this.setState({ addNewUserModal: true });
  }

  /**
   * On Reload
   */
  onReload(e) {
    this.setState({ loading: true });
    let self = this;
    setTimeout(() => {
      self.setState({ loading: false });
    }, 2000);
    e.preventDefault();
  }

  /**
   * On Select User
   */
  onSelectUser(user) {
    user.checked = !user.checked;
    let selectedUsers = 0;
    let users = this.state.users.map(userData => {
      if (userData.checked) {
        selectedUsers++;
      }
      if (userData.id === user.id) {
        if (userData.checked) {
          selectedUsers++;
        }
        return user;
      } else {
        return userData;
      }
    });
    this.setState({ users, selectedUsers });
  }

  /**
   * On Change Add New User Details
   */
  onChangeAddNewUserDetails(key, value) {
    this.setState({
      addNewUserDetail: {
        ...this.state.addNewUserDetail,
        [key]: value,
      },
    });
    if (key === "country") {
      this.props.fetchState(value);
    }
  }

  /**
   * Add New User
   */
  addNewUser() {
    const {
      email,
      password,
      name,
      phone,
      address1,
      address2,
      city,
      country,
      stateC,
      zipcode,
      rol,
    } = this.state.addNewUserDetail;

    console.log(
      `addNewUserDetail ${JSON.stringify(this.state.addNewUserDetail)}`
    );
    if (
      email !== "" &&
      name !== "" &&
      phone !== "" &&
      address1 !== "" &&
      country !== "" &&
      city !== "" &&
      zipcode !== ""
    ) {
      if (stateC !== "") {
        console.log(`state ${JSON.stringify(this.state)}`);
        this.props.addUser({
          email,
          password,
          name,
          phone,
          address1,
          address2,
          city,
          country,
          stateC,
          zipcode,
          rol,
        });
        this.setState({ addNewUserModal: false, loading: true });
        let self = this;
        setTimeout(() => {
          self.setState({ loading: false });
          NotificationManager.success("User Created!");
        }, 1000);
        this.setState(prevState => ({
          addNewUserDetail: {
            // object that we want to update
            ...prevState.addNewUserDetail, // keep all other key-value pairs
            email: "",
            password: "123456",
            name: "",
            phone: "",
            address1: "",
            address2: "",
            city: "",
            country: "",
            stateC: "",
            zipcode: "",
            rol: "", // update the value of specific key
          },
        }));
      } else {
        NotificationManager.error("You must to choose an State");
      }
    } else {
      NotificationManager.error("You must fill all data required");
    }
  }

  /**
   * View User Detail Hanlder
   */
  viewUserDetail(data) {
    this.setState({ openViewUserDialog: true, selectedUser: data });
  }

  /**
   * On Edit User
   */
  onEditUser(user) {
    this.setState({ addNewUserModal: true, editUser: user });
  }

  /**
   * On Add & Update User Modal Close
   */
  onAddUpdateUserModalClose() {
    this.setState({ addNewUserModal: false, editUser: null });
  }

  /**
   * On Update User Details
   */
  onUpdateUserDetails(key, value) {
    this.setState({
      editUser: {
        ...this.state.editUser,
        [key]: value,
      },
    });
  }

  /**
   * Update User
   */
  updateUser() {
    const { editUser } = this.state;
    let indexOfUpdateUser = "";
    let users = this.state.users;
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      if (user.id === editUser.id) {
        indexOfUpdateUser = i;
      }
    }
    users[indexOfUpdateUser] = editUser;
    this.setState({ loading: true, editUser: null, addNewUserModal: false });
    let self = this;
    setTimeout(() => {
      self.setState({ users, loading: false });
      NotificationManager.success("User Updated!");
    }, 2000);
  }

  //Select All user
  onSelectAllUser(e) {
    const { selectedUsers, users } = this.state;
    let selectAll = selectedUsers < users.length;
    if (selectAll) {
      let selectAllUsers = users.map(user => {
        user.checked = true;
        return user;
      });
      this.setState({
        users: selectAllUsers,
        selectedUsers: selectAllUsers.length,
      });
    } else {
      let unselectedUsers = users.map(user => {
        user.checked = false;
        return user;
      });
      this.setState({ selectedUsers: 0, users: unselectedUsers });
    }
  }

  render() {
    const { users, loading, selectedUser, editUser } = this.state;
    const countires = countriesStates.getCountries ();
    const statesList = countriesStates.getStatesByShort (this.state.country);
    return (
      <div className="user-management">
        <RctCollapsibleCard fullBlock>
          <div className="table-responsive">
            <div className="d-flex justify-content-between py-20 px-10 border-bottom">
              <div>
                <a
                  href="#"
                  onClick={e => this.onReload(e)}
                  className="btn-outline-default mr-10"
                >
                  <i className="ti-reload" />
                </a>
              </div>
              <div>
                <a
                  href="#"
                  onClick={e => this.opnAddNewUserModal(e)}
                  color="primary"
                  className="caret btn-sm mr-10"
                >
                  Add New User <i className="zmdi zmdi-plus" />
                </a>
              </div>
            </div>
            <Table
              OpenModalFunction={(e) => this.opnAddNewUserModal(e)}
              refreshTable={false}
              onDelete={this.onDelete}
            />
          </div>
          {loading && <RctSectionLoader />}
        </RctCollapsibleCard>
        <DeleteConfirmationDialog
          ref="deleteConfirmationDialog"
          title="Are You Sure Want To Delete?"
          message="This will delete user permanently."
          onConfirm={() => this.deleteUserPermanently()}
        />
        <Modal
          isOpen={this.state.addNewUserModal}
          toggle={() => this.onAddUpdateUserModalClose()}
        >
          <ModalHeader toggle={() => this.onAddUpdateUserModalClose()}>
            {editUser === null ? "Add New User" : "Update User"}
          </ModalHeader>
          <ModalBody>
            {editUser === null ? (
              <AddNewUserForm
                addNewUserDetails={this.state.addNewUserDetail}
                handleChangeCountry={this.handleChangeCountry}
                handleChangeStates={this.handleChangeStates}
                countries={this.props.countries}
                states={this.props.states}
                onChangeAddNewUserDetails={this.onChangeAddNewUserDetails.bind(
                  this
                )}
              />
            ) : (
              <UpdateUserForm
                user={editUser}
                onUpdateUserDetail={this.onUpdateUserDetails.bind(this)}
              />
            )}
          </ModalBody>
          <ModalFooter>
            {editUser === null ? (
              <Button
                variant="contained"
                className="text-white btn-success"
                onClick={() => this.addNewUser()}
              >
                Add
              </Button>
            ) : (
              <Button
                variant="contained"
                color="primary"
                className="text-white"
                onClick={() => this.updateUser()}
              >
                Update
              </Button>
            )}{" "}
            <Button
              variant="contained"
              className="text-white btn-danger"
              onClick={() => this.onAddUpdateUserModalClose()}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

// map state to props
const mapStateToProps = ({ user, authUser }) => {
  const { workerList } = user;
  const { countries, states } = authUser;
  return { workerList, countries, states };
};

export default connect(mapStateToProps, {
  getWorkersList,
  addUser,
})(UserProfile);

//   export default UserProfile;
