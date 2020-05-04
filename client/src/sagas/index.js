/**
 * Root Sagas
 */
import { all } from 'redux-saga/effects';

// sagas
import authSagas from './Auth';
import emailSagas from './Email';
import todoSagas from './Todo';
import feedbacksSagas from './Feedbacks';
import userSaga from './User';
import quoteSaga from './Quote';
import notificationSaga from './Notification';

export default function* rootSaga(getState) {
    yield all([
        authSagas(),
        emailSagas(),
        todoSagas(),
        feedbacksSagas(), 
        userSaga(),
        quoteSaga(),
        notificationSaga()
    ]);
}