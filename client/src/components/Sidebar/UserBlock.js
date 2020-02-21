/**
 * User Block Component
 */
import React, {Component} from 'react';
import {Dropdown, DropdownToggle, DropdownMenu} from 'reactstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Badge} from 'reactstrap';
import {NotificationManager} from 'react-notifications';

// components
import SupportPage from '../Support/Support';

// redux action
import {logoutUserFromFirebase, getUser} from '../../actions';

// intl messages
import IntlMessages from '../../util/IntlMessages';


class UserBlock extends Component {
  state = {
    userDropdownMenu: false,
    isSupportModal: false,
  };

  componentDidMount () {
    const email = this.props.userAuthe;
    console.log (`====>email despues de la funcion ${JSON.stringify(email)}`);
    // toString().replace (/['"]+/g, '');
    this.props.getUser (email);
  }

  /**
	 * Logout User
	 */
  logoutUser (e) {
    e.preventDefault ();
    this.props.logoutUserFromFirebase ();
  }

  /**
	 * Toggle User Dropdown Menu
	 */
  toggleUserDropdownMenu () {
    this.setState ({userDropdownMenu: !this.state.userDropdownMenu});
  }

  /**
	 * Open Support Modal
	 */
  openSupportModal () {
    this.setState ({isSupportModal: true});
  }

  /**
	 * On Close Support Page
	 */
  onCloseSupportPage () {
    this.setState ({isSupportModal: false});
  }

  /**
	 * On Submit Support Page
	 */
  onSubmitSupport () {
    this.setState ({isSupportModal: false});
    NotificationManager.success ('Message has been sent successfully!');
  }

  render () {
	const {userAuthe, userData} = this.props;
	console.log(`user que viene para la barra del lado ${JSON.stringify(userData)}  userAute ${userAuthe} `)
    return (
      <div className="top-sidebar">
        <div className="sidebar-user-block">
          <Dropdown
            isOpen={this.state.userDropdownMenu}
            toggle={() => this.toggleUserDropdownMenu ()}
            className="rct-dropdown"
          >
            <DropdownToggle tag="div" className="d-flex align-items-center">
              {/* <div className="user-profile">
                <img
                  src={require ('Assets/avatars/user-15.jpg')}
                  alt="user profile"
                  className="img-fluid rounded-circle"
                  width="50"
                  height="100"
                />
              </div> */}
              <div className="user-info">
                <span className="user-name ml-4">{userData.Name}</span>
                <i className="zmdi zmdi-chevron-down dropdown-icon mx-4" />
              </div>
            </DropdownToggle>
            <DropdownMenu>
              <ul className="list-unstyled mb-0">
                <li className="p-15 border-bottom user-profile-top bg-primary rounded-top">
                  <p className="text-white mb-0 fs-14">{userData.Name}</p>
                  <span className="text-white fs-14">{userAuthe}</span>
                </li>
                <li className="border-top">
                  <a href="#" onClick={e => this.logoutUser (e)}>
                    <i className="zmdi zmdi-power text-danger mr-3" />
                    <IntlMessages id="widgets.logOut" />
                  </a>
                </li>
              </ul>
            </DropdownMenu>
          </Dropdown>
        </div>
        <SupportPage
          isOpen={this.state.isSupportModal}
          onCloseSupportPage={() => this.onCloseSupportPage ()}
          onSubmit={() => this.onSubmitSupport ()}
        />
      </div>
    );
  }
}

// map state to props
const mapStateToProps = ({settings, authUser}) => {
  const {userAuthe, userData} = authUser;
  return {settings, userAuthe, userData};
};

export default connect (mapStateToProps, {
  logoutUserFromFirebase,
  getUser,
}) (UserBlock);
