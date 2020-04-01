import {
  getAdobeImagesSuccess,
  getAdobeImagesFailure,
  saveQuoteFailure,
  saveQuoteSuccess,
  getMyQuotesListFailure,
  getMyQuotesListSuccess,
  getQuoteByIdFailure,
  getQuoteByIdSuccess,
  getImageFailure,
  getImageSuccess
} from "../actions/QuoteActions";
import {
  GET_ADOBE_STOCK_IMAGES,
  SAVE_QUOTE,
  GET_ORDERS_LIST,
  GET_QUOTE_BY_ID
} from "../actions/types";
import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import quoteAPI from "../api/QuoteAPI";
import utilAPI from "../api/UtilAPI";

const getImagesFomAdobeRequest = async parameter =>
  await utilAPI
    .getImagesFromAdobe(parameter)
    .then(imageList => imageList)
    .catch(error => error);

const uploadImageRequest = async data =>
  await utilAPI
    .uploadPic(data)
    .then(info => info)
    .catch(error => error);

const getImageRequest = async id =>
  await utilAPI
    .getPictureById(id)
    .then(info => info)
    .catch(error => error);

const saveQuoteRequest = async data =>
  await quoteAPI
    .saveQuote(data)
    .then(quote => quote)
    .catch(error => error);


const getMyOrdersListRequest = async data =>
  await quoteAPI
    .myQuotes(data)
    .then(list => list)
    .catch(error => error);

const getOrderByIdRequest = async id =>
  await quoteAPI
    .orderById(id)
    .then(order => order)
    .catch(error => error);

/**
 * GET IMAGE FROM ADOBE BY WORD
 */
function* getImagesFomAdobeS(payload) {
  const parameter = payload.payload;
  try {
    const images = yield call(getImagesFomAdobeRequest, parameter);
    if (images.message) {
      yield put(getAdobeImagesFailure(images.message));
    } else {
      yield put(getAdobeImagesSuccess(images.data.files));
    }
  } catch (error) {
    yield put(getAdobeImagesFailure(error));
  }
}

/**
 * GET IMAGE FROM ADOBE BY WORD
 */
function* getMyOrdersListS(payload) {
  const parameter = payload.payload;
  try {
    const list = yield call(getMyOrdersListRequest, parameter);
    if (list.message) {
      yield put(getMyQuotesListFailure(list.message));
    } else {
      yield put(getMyQuotesListSuccess(list.data));
    }
  } catch (error) {
    yield put(getMyQuotesListFailure(error));
  }
}

/**
 * GET ORDER BY ID
 */
function* getOrderByIdS(payload) {
  const id = payload.payload;
  try {
    const order = yield call(getOrderByIdRequest, id);
    if (order.message) {
      yield put(getQuoteByIdFailure(order.message));
    } else {
      if (order.data.ImageId !== null) {
        const pic = yield call(getImageRequest, order.data.ImageId);
        console.log(`imagen que viene de la bd ${JSON.stringify(pic)}`);
        if (pic.message) {
          yield put(getImageFailure(pic.message));
        } else {
          yield put(getImageSuccess(pic.data));
        }
        yield put(getQuoteByIdSuccess(order.data));
      } else {
        yield put(getQuoteByIdSuccess(order.data));
      }
    }
  } catch (error) {
    yield put(getQuoteByIdFailure(error));
  }
}

/**
 * SAVE THE QUOTE
 */
function* saveQuoteS(payload) {
  console.log(` guardar quota en la saga payload ${JSON.stringify(payload.payload)}`);
  const {
    material,
    imageUploaded,
    imageSelectedId,
    serviceSelected,
    frameSelected,
    size,
    quantity,
    country,
    state,
    city,
    address1,
    address2,
    zipcode,
    user
  } = payload.payload;
  try {
    if (material === "Upload a pic") {
      var imageData = yield call(uploadImageRequest, {
        imageUploaded,
        id: user.id
      });
    }
    const quote = yield call(saveQuoteRequest, {
      // Cost: "",
      ImagePath:
        material === "Upload a pic" ? imageData.data.id : imageSelectedId,
      FramePath: frameSelected,
      ImageType:
        material === "Upload a pic"
          ? "upload"
          : material === "Extensive Gallery"
          ? "adobe"
          : "company",
      Size: size,
      Quantity: quantity,
      Address1: address1,
      Address2: address2,
      City: city,
      Country: country,
      State: state,
      Zip: zipcode,
      Status: "Ordered",
      UserId: user.id,
      ImageId: imageData ? imageData.data.id: null,
      Cost: 0,
      Product: serviceSelected
    });
    console.log(`quote en la saga ${JSON.stringify(quote)}`);
    if (quote.message) {
      yield put(saveQuoteFailure(quote.message));
    } else {
      yield put(saveQuoteSuccess(quote.data.files));
    }
  } catch (error) {
    yield put(saveQuoteFailure(error));
  }
}

/**
 * Get images from adobe stock
 */
export function* getImagesFomAdobeWatcher() {
  yield takeEvery(GET_ADOBE_STOCK_IMAGES, getImagesFomAdobeS);
}

// /**
//  * Save the quote in the database
//  */
export function* saveQuoteWatcher() {
  yield takeEvery(SAVE_QUOTE, saveQuoteS);
}

// /**
//  * Get list of all ordersby client
//  */
export function* getMyOrdersListWatcher() {
  yield takeEvery(GET_ORDERS_LIST, getMyOrdersListS);
}

// /**
//  * Get order by Id
//  */
export function* getOrderByIdWatcher() {
  yield takeEvery(GET_QUOTE_BY_ID, getOrderByIdS);
}

/**
 * Quote Root Saga
 */
export default function* rootSaga() {
  yield all([
    fork(getImagesFomAdobeWatcher),
    fork(saveQuoteWatcher),
    fork(getMyOrdersListWatcher),
    fork(getOrderByIdWatcher)
  ]);
}
