import {
  GET_NOTIFICATIONS,
  GET_NOTIFICATIONS_SUCCESS,
  GET_NOTIFICATIONS_FAILURE,
  GET_NOTIFICATIONS_NOREAD,
  GET_NOTIFICATIONS_NOREAD_SUCCESS,
  GET_NOTIFICATIONS_NOREAD_FAILURE,
  GET_NOREAD_NOTIFICATIONS,
  UPDATE_NOREAD_NOTIFICATIONS,
  UPDATE_NOTIFICATIONS_NOREAD_FAILURE,
  UPDATE_NOTIFICATIONS_NOREAD_SUCCESS,
  OPEN_DIALOG,
  SAVE_NOTIFICATION,
  SAVE_NOTIFICATION_SUCCESS,
  SAVE_NOTIFICATION_FAILURE
} from "./types";

/**
 * Redux Action get notification
 */
export const getNotifications = clientId => ({
  type: GET_NOTIFICATIONS,
  payload: clientId
});

/**
 * Redux Action get notification success
 */
export const getNotificationsSuccess = notificationList => ({
  type: GET_NOTIFICATIONS_SUCCESS,
  payload: notificationList
});

/**
 * Redux Action get notification failure
 */
export const getNotificationsFailure = error => ({
  type: GET_NOTIFICATIONS_FAILURE,
  payload: error
});

/**
 * Redux Action get notification
 */
export const getNotificationsNoRead = clientId => ({
    type: GET_NOREAD_NOTIFICATIONS,
    payload: clientId
  }
);

/**
 * Redux Action get notification
 */
export const updateNotificationsNoRead = notificationId => ({
    type: UPDATE_NOREAD_NOTIFICATIONS,
    payload: notificationId
  }
);

/**
 * Redux Action get notification success
 */
export const updateNotificationsNoReadSuccess = notificationList => ({
  type: UPDATE_NOTIFICATIONS_NOREAD_SUCCESS,
  payload: notificationList
});

/**
 * Redux Action get notification success
 */
export const updateNotificationsNoReadFailure = error => ({
  type: UPDATE_NOTIFICATIONS_NOREAD_FAILURE,
  payload: error
});

/**
 * Redux Action get notification success
 */
export const getNotificationsNoReadSuccess = notificationList => ({
  type: GET_NOTIFICATIONS_NOREAD_SUCCESS,
  payload: notificationList
});

/**
 * Redux Action get notification failure
 */
export const getNoticationsNoReadFailure = error => ({
  type: GET_NOTIFICATIONS_NOREAD_FAILURE,
  payload: error
});


export const manageNotificaionDialog = value => ({
  type: OPEN_DIALOG,
  payload: value
});

export const saveNotification = notification => ({
  type: SAVE_NOTIFICATION,
  payload: notification
});

export const saveNotificationFailure = error => ({
  type: SAVE_NOTIFICATION_FAILURE,
  payload: error
});

export const saveNotificationSuccess = () => ({
  type: SAVE_NOTIFICATION_SUCCESS,
});