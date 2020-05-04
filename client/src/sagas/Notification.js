import {
  GET_NOTIFICATIONS,
  GET_NOREAD_NOTIFICATIONS,
  UPDATE_NOREAD_NOTIFICATIONS,
  SAVE_NOTIFICATION
} from "../actions/types";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  getNoticationsNoReadFailure,
  getNotificationsNoReadSuccess,
  getNotificationsSuccess,
  getNotificationsFailure,
  updateNotificationsNoReadSuccess,
  updateNotificationsNoReadFailure,
  getNotificationsNoRead
} from "../actions/NotificationActions";

import notificationsAPI from "../api/Notifications";

const getNotificationsRequest = async parameter =>
  await notificationsAPI
    .getNotifications(parameter)
    .then(notificationsList => notificationsList)
    .catch(error => error);

const getNotificationsNoReadRequest = async parameter =>
  await notificationsAPI
    .getNotificationNoRead(parameter)
    .then(notificationsList => notificationsList)
    .catch(error => error);

const updateNotificationsNoReadRequest = async (id, notification) =>
  await notificationsAPI
    .updateNotifications(id, notification)
    .then(notificationsList => notificationsList)
    .catch(error => error);

    const saveNotificationRequest = async (notification) =>
    await notificationsAPI
      .saveNotifications(notification)
      .then(notificationsList => notificationsList)
      .catch(error => error);
    
/**
 * Reorder
 */
function* getNotificationS(payload) {
  const user = payload.payload;
  try {
    const notificaionList = yield call(getNotificationsRequest, user);
    if (notificaionList.message) {
      yield put(getNotificationsFailure(notificaionList.message));
    } else {
      yield put(getNotificationsSuccess(notificaionList.data));
    }
  } catch (error) {
    yield put(getNotificationsFailure(error));
  }
}

function* getNotificationNoReadS(payload) {
  const clientId = payload.payload;
  try {
    const notificaionList = yield call(getNotificationsNoReadRequest, clientId);
    if (notificaionList.message) {
      yield put(getNoticationsNoReadFailure(notificaionList.message));
    } else {
      yield put(getNotificationsNoReadSuccess(notificaionList.data));
    }
  } catch (error) {
    yield put(getNoticationsNoReadFailure(error));
  }
}

function* updateNotificationsNoReadS(payload) {
  const notification = payload.payload;
  const notificationId = notification.Id;
  try {
    const notificaionList = yield call(
      updateNotificationsNoReadRequest,
      notificationId, notification
    );
    if (notificaionList.message) {
      yield put(updateNotificationsNoReadFailure(notificaionList.message));
    } else {
      yield put(updateNotificationsNoReadSuccess(notificaionList.data));
      yield put(getNotificationsNoRead(notification.UserId));
    }
  } catch (error) {
    yield put(updateNotificationsNoReadFailure(error));
  }
}
function* saveNotificationS(payload) {
  const notification = payload.payload;
  try {
    const notificaionList = yield call(
      saveNotificationRequest,
       notification
    );
    if (notificaionList.message) {
      yield put(updateNotificationsNoReadFailure(notificaionList.message));
    } else {
      yield put(updateNotificationsNoReadSuccess(notificaionList.data));
    }
  } catch (error) {
    yield put(updateNotificationsNoReadFailure(error));
  }
}

// /**
//  * WATCHERS
//  */
export function* getNotificationsWatcher() {
  yield takeEvery(GET_NOTIFICATIONS, getNotificationS);
}

export function* getNotificationsNoReadWatcher() {
  yield takeEvery(GET_NOREAD_NOTIFICATIONS, getNotificationNoReadS);
}
export function* updateNotificationsNoReadWatcher() {
  yield takeEvery(UPDATE_NOREAD_NOTIFICATIONS, updateNotificationsNoReadS);
}
export function* saveNotificationWatcher() {
  yield takeEvery(SAVE_NOTIFICATION, saveNotificationS);
}
/**
 * Quote Root Saga
 */
export default function* rootSaga() {
  yield all([
    fork(getNotificationsWatcher),
    fork(getNotificationsNoReadWatcher),
    fork(updateNotificationsNoReadWatcher),
    fork(saveNotificationWatcher)
  ]);
}
