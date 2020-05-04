/**
 * Notification Component
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { Scrollbars } from "react-custom-scrollbars";
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import Button from "@material-ui/core/Button";
import { Badge } from "reactstrap";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { Icon } from "@iconify/react";
import notificationsActive from "@iconify/icons-zmdi/notifications-active";

import {
  getNotificationsNoRead,
  getUser,
  updateNotificationsNoRead
} from "../../actions";



import { NavLink } from "react-router-dom";

// intl messages
import IntlMessages from "../../util/IntlMessages";

class Notifications extends Component {
  state = {
    notifications: this.props.userId
  };

  componentWillMount() {
    this.props.getNotificationsNoRead(this.state.notifications);
  }

  updateRead(e, notification) {
    e.preventDefault();
    const notificationO = {
      Id: notification.id,
      Read: true,
      UserId: notification.UserId
    };
    this.props.updateNotificationsNoRead(notificationO);
  }
  render() {

    return (
      <UncontrolledDropdown
        nav
        className="list-inline-item notification-dropdown"
      >
        <DropdownToggle nav className="p-0">
          <Tooltip title="Notifications" placement="bottom">
            <IconButton color="white" className="shake" aria-label="bell">
              <Icon icon={notificationsActive} color="white" />
              <Badge
                color="danger"
                className="badge-xs badge-top-right rct-notify"
              >
                {this.props.NotificationNoReadList.length}
              </Badge>
            </IconButton>
          </Tooltip>
        </DropdownToggle>
        <DropdownMenu right>
          <div className="dropdown-content">
            <div className="dropdown-top d-flex justify-content-between rounded-top bg-primary">
              <span className="text-white font-weight-bold">
                <IntlMessages id="widgets.recentNotifications" />
              </span>
            </div>
            <Scrollbars
              className="rct-scroll"
              autoHeight
              autoHeightMin={100}
              autoHeightMax={280}
            >
              <ul className="list-unstyled dropdown-list">
                {this.props.NotificationNoReadList &&
                  this.props.NotificationNoReadList.map((notification, key) => (
                    <li key={key}>
                      <div className="media">
                        <div className="media-body pt-5">
                          <div className="d-flex justify-content-between">
                            <h5 className="mb-5 text-primary">
                              {notification.Header}
                            </h5>
                          </div>
                          <span className="text-muted fs-12 d-block">
                            {notification.Text}
                          </span>
                          <Button
                            className="btn-xs mr-10"
                            onClick={e => this.updateRead(e, notification)}
                          >
                            <i className="zmdi zmdi-check-all mr-2"></i>{" "}
                            <IntlMessages id="button.clear" />
                          </Button>
                        </div>
                      </div>
                    </li>
                  ))}
                {this.props.NotificationNoReadList.length === 0 && (
                  <p>There's no recent notifications</p>
                )}
              </ul>
            </Scrollbars>
          </div>
          <div className="dropdown-foot p-2 bg-white rounded-bottom">
            <NavLink to="/app/allNotifications">
              <Button
                variant="raised"
                color="primary"
                className="mr-10 btn-xs bg-primary"
              >
                <IntlMessages id="button.viewAll" />
              </Button>
            </NavLink>
          </div>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}

const mapStateToProps = ({ notifications, authUser }) => {
  const { userAuthe, userData, userId } = authUser;
  const { NotificationNoReadList } = notifications;
  return { NotificationNoReadList, userAuthe, userData, userId, authUser };
};

export default connect(mapStateToProps, {
  getNotificationsNoRead,
  getUser,
  updateNotificationsNoRead
})(Notifications);
