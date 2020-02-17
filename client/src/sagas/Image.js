import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import { SAVE_IMAGE } from '../actions/types';
import { saveImageSuccess, saveImageFailure } from '../actions/ImageAction';
import api from '../api';



/**
 * SAVE IMAGE FUNCTION
 */
const saveImageRequest = async () =>
  await api
    .saveImage(data)
    .then (image => image)
    .catch (error => error);

/**
 * SAVE IMAGE SAGA
 */
function* saveImageS (data) {
    try {
      const image = yield call (saveImageRequest, data);
      if (image.message) {
        yield put (saveImageFailure (image.message));
      } else {
        yield put (saveImageSuccess (image.data));
      }
    } catch (error) {
      yield put (saveImageFailure (error));
      console.log (`entro al error de la saga grande error ${error}`);
    }
  }

/**
 * SAVE IMAGE WATCHER
 */
export function* saveImageWatcher () {
    yield takeEvery (SAVE_IMAGE, saveImageS);
  }

/**
* Auth Root Saga
*/
export default function* rootSaga () {
  yield all ([
    fork (saveImageWatcher),
  ]);
}
