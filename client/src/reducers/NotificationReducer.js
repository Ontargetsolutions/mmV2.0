import {
  GET_NOTIFICATIONS_FAILURE,
  GET_NOTIFICATIONS_SUCCESS,
  GET_NOTIFICATIONS_NOREAD_FAILURE,
  GET_NOTIFICATIONS_NOREAD_SUCCESS,
  OPEN_DIALOG,
  SAVE_NOTIFICATION_SUCCESS,
  SAVE_NOTIFICATION_FAILURE
} from "../actions/types";

import { NotificationManager } from "react-notifications";

const INIT_STATE = {
  notificationList: [],
  NotificationNoReadList: [],
  openDialog: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_NOTIFICATIONS_FAILURE:
      NotificationManager.error(action.payload);
      return { ...state, notificationList: [] };

    case GET_NOTIFICATIONS_SUCCESS:
      return { ...state, notificationList: action.payload };

    case GET_NOTIFICATIONS_NOREAD_FAILURE:
      NotificationManager.error(action.payload);
      return { ...state, NotificationNoReadList: [] };

    case GET_NOTIFICATIONS_NOREAD_SUCCESS:
      return { ...state, NotificationNoReadList: action.payload };

    case SAVE_NOTIFICATION_SUCCESS:
      NotificationManager.success(`Notification sent`);
      return { ...state };

    case SAVE_NOTIFICATION_FAILURE:
      NotificationManager.error(`Fail to send notification, ${action.payload}`);
      return { ...state };

    case OPEN_DIALOG:
      return { ...state, openDialog: action.payload };
    default:
      return { ...state };
  }
};
