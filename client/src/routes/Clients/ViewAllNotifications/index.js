/**
 * ViewAllNotifications Page
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import { Helmet } from "react-helmet";
import Pagination from "../Quote/Products/Mosaics/Pagination";
import Moment from "react-moment";

// api
// import api from "Api";

import { getNotifications } from "../../../actions";
import { Grid } from "@material-ui/core";

//Components
// import SearchIdeas from './components/SearchIdeas';

class ViewAllNotifications extends Component {
  state = {
    notifications: null,
    actualPage: 1,
    picsPerPage: 6
  };

  componentDidMount() {
    this.props.getNotifications(this.props.userId);
  }
  paginate = pageNumber => {
    this.setState({ actualPage: pageNumber });
  };

  render() {
    const { actualPage, picsPerPage, pics } = this.state;
    const indexOfLastPic = actualPage * picsPerPage;
    const indexOfFirstPic = indexOfLastPic - picsPerPage;
    const currentNotifications = this.props.notificationList.slice(
      indexOfFirstPic,
      indexOfLastPic
    );
    return (
      <div className="faq-page-wrapper">
        {this.props.notificationList &&
          currentNotifications.map((notification, key) => (
            <ExpansionPanel key={key} className="mb-30 panel">
              <ExpansionPanelSummary
                expandIcon={<i className="zmdi zmdi-chevron-down"></i>}
                className="m-0 panel-heading"
              >
                <h4>{notification.Header}</h4>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Moment format="YYYY/MM/DD">
                      {notification.createdAt}
                    </Moment>
                  </Grid>
              

                <Grid item xs={12}>
                  <p>{notification.Text}</p>
                </Grid>
                </Grid>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          ))}
        {this.props.notificationList.length > 5 && (
          <Pagination
            postPerPage={picsPerPage}
            TotalPost={this.props.notificationList.length}
            paginate={this.paginate}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ notifications, authUser }) => {
  const { userAuthe, userData, userId } = authUser;
  const { notificationList } = notifications;
  return { notificationList, userAuthe, userData, userId, authUser };
};

export default connect(mapStateToProps, {
  getNotifications
})(ViewAllNotifications);
