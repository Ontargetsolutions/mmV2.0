/**
 * Email Sagas
 */
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

// api
import api from '../api';

import {
    GET_EMAILS,
} from '../actions/types';

import {
    getEmailsSuccess,
    getEmailsFailure
} from '../actions';

/**
 * Send Email Request To Server
 */
const getEmailsRequest = async () =>
    await api.get('emails.js')
        .then(response => response)
        .catch(error => error);

/**
 * Get Emails From Server
 */
function* getEmailsFromServer() {
    try {
        const response = yield call(getEmailsRequest);
        yield put(getEmailsSuccess(response));
    } catch (error) {
        yield put(getEmailsFailure(error));
    }
}

/**
 * Ger Emails
 */
export function* getEmails() {
    yield takeEvery(GET_EMAILS, getEmailsFromServer);
}

/**
 * Email Root Saga
 */
export default function* rootSaga() {
    yield all([
        fork(getEmails)
    ]);
}