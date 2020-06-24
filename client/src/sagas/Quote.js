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
  getImageSuccess,
  generateInvoiceNumberSuccess,
  generateInvoiceNumberFailure,
  generateInvoiceNumber,
  reorderFailure,
  reorderSuccess,
  getDeliveryFeeFailure,
  getDeliveryFeeSuccess,
  paymentFailure,
  paymentSuccess,
  saveBillingInfoFailure,
  saveBillingInfoSuccess,
  sendEmailWithPaymentConfirmationSuccess,
  sendEmailWithPaymentConfirmationFailure,
  manageErrorDialog,
} from '../actions/QuoteActions';
import {
  GET_ADOBE_STOCK_IMAGES,
  SAVE_QUOTE,
  GET_ORDERS_LIST,
  GET_QUOTE_BY_ID,
  GENERATE_INVOICE_NUMBER,
  REORDER,
  GET_ALL_QUOTES,
  GET_DELIVERY_FEE,
  PAYMENT,
  BILLING_INFO,
  SHOP_DONE_EMAIL,
} from '../actions/types';
import {all, call, fork, put, takeEvery} from 'redux-saga/effects';

import quoteAPI from '../api/QuoteAPI';
import utilAPI from '../api/UtilAPI';

const getImagesFomAdobeRequest = async parameter =>
  await utilAPI
    .getImagesFromAdobe (parameter)
    .then (imageList => imageList)
    .catch (error => error);

const uploadImageRequest = async data =>
  await utilAPI.uploadPic (data).then (info => info).catch (error => error);

const getImageRequest = async id =>
  await utilAPI.getPictureById (id).then (info => info).catch (error => error);

const saveQuoteRequest = async data =>
  await quoteAPI.saveQuote (data).then (quote => quote).catch (error => error);

const getMyOrdersListRequest = async data =>
  await quoteAPI.myQuotes (data).then (list => list).catch (error => error);

const getOrderByIdRequest = async id =>
  await quoteAPI.orderById (id).then (order => order).catch (error => error);

const generateInvoiceNumberRequest = async order =>
  await quoteAPI
    .invoiceNumber (order)
    .then (number => number)
    .catch (error => error);

const getAllOrdersByProductRequest = async product =>
  await quoteAPI
    .getAllQuotesByProduct (product)
    .then (number => number)
    .catch (error => error);

const getDeliveryFeeRequest = async data =>
  await utilAPI.getDeliveryFee (data).then (fee => fee).catch (error => error);

const paymentRequest = async data =>
  await utilAPI.payment (data).then (pay => pay).catch (error => error);

const sendEmailShopDoneRequest = async parameter => {
  console.log (
    `aquiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii`
  );
  return await utilAPI
    .sendEmailWhenShopIsDone (parameter)
    .then (imageList => imageList)
    .catch (error => error);
};

/**
 * GET IMAGE FROM ADOBE BY WORD
 */
function* getImagesFomAdobeS (payload) {
  const parameter = payload.payload;
  try {
    const images = yield call (getImagesFomAdobeRequest, parameter);
    if (images.message) {
      yield put (getAdobeImagesFailure (images.message));
    } else {
      yield put (getAdobeImagesSuccess (images.data.files));
    }
  } catch (error) {
    yield put (getAdobeImagesFailure (error));
  }
}

/**
 * GET IMAGE FROM ADOBE BY WORD
 */
function* getMyOrdersListS (payload) {
  const parameter = payload.payload;
  try {
    const list = yield call (getMyOrdersListRequest, parameter);
    if (list.message) {
      yield put (getMyQuotesListFailure (list.message));
    } else {
      yield put (getMyQuotesListSuccess (list.data));
    }
  } catch (error) {
    yield put (getMyQuotesListFailure (error));
  }
}

/**
 * GET ORDER BY ID
 */
function* getOrderByIdS (payload) {
  console.log (`en la saga para buscar orden por id`);
  const id = payload.payload;
  try {
    const order = yield call (getOrderByIdRequest, id);
    if (order.message) {
      yield put (getQuoteByIdFailure (order.message));
    } else {
      if (order.data.ImageId !== null) {
        const pic = yield call (getImageRequest, order.data.ImageId);
        if (pic.message) {
          yield put (getImageFailure (pic.message));
        } else {
          let imageURL =
            'data:image/png;base64,' +
            new Buffer (pic.data.Data.data, 'binary').toString ('base64');
          // console.log(`imagen que viene de la bd`,imageURL);
          yield put (getImageSuccess (imageURL));
        }
        yield put (getQuoteByIdSuccess (order.data));
        ///////////////////////////////////////////////////////////////////////////////////////////////////////
        // yield put(generateInvoiceNumber(order.data));
      } else {
        yield put (getQuoteByIdSuccess (order.data));
      }
    }
  } catch (error) {
    yield put (getQuoteByIdFailure (error));
  }
}

/**
 * GET ORDER BY ID
 */
function* getAllOrdersByProductsS (payload) {
  const product = payload.payload;
  try {
    const list = yield call (getAllOrdersByProductRequest, product);
    if (list.message) {
      yield put (getMyQuotesListFailure (list.message));
    } else {
      yield put (getMyQuotesListSuccess (list.data));
    }
  } catch (error) {
    yield put (getMyQuotesListFailure (error));
  }
}

/**
 * generate Invoice number
 */
function* generateInvoiceNumberS (order) {
  console.log (
    `orden que llega para generar invoice ${JSON.stringify (order)}`
  );
  try {
    const invoiceNumber = yield call (generateInvoiceNumberRequest, order);
    if (invoiceNumber.message) {
      yield put (generateInvoiceNumberFailure (invoiceNumber.message));
    } else {
      yield put (generateInvoiceNumberSuccess (invoiceNumber));
    }
  } catch (error) {
    yield put (generateInvoiceNumberFailure (error));
  }
}

/**
 * Reorder
 */
function* reorderS (payload) {
  const {order} = payload.payload;
  console.log (`order en reorder ${JSON.stringify (order)}`);
  try {
    const newOrder = yield call (saveQuoteRequest, order);
    if (newOrder.message) {
      yield put (reorderFailure (newOrder.message));
    } else {
      yield put (reorderSuccess (newOrder));
    }
  } catch (error) {
    yield put (reorderFailure (error));
  }
}

/**
 * Delivery fee
 */
function* getDeliveryFeeS (payload) {
  const data = payload.payload;
  console.log (`data en delivery fee ${JSON.stringify (data)}`);
  try {
    const newFee = yield call (getDeliveryFeeRequest, data);
    console.log (
      `lo que vira de buscar delivery fee ${JSON.stringify (newFee)}`
    );
    if (newFee.message) {
      yield put (getDeliveryFeeFailure (newFee.message));
    } else {
      yield put (getDeliveryFeeSuccess (parseFloat (newFee.data)));
    }
  } catch (error) {
    yield put (getDeliveryFeeFailure (error));
  }
}

/**
 * Payment
 */
function* paymentS (payload) {
  console.log (`payload`, payload);
  // const data = payload.data;
  const {history, data} = payload.payload;
  console.log (`data en payment ${JSON.stringify (data)}`);
  try {
    const pay = yield call (paymentRequest, data);
    console.log (`lo que vira del pago ${JSON.stringify (pay)}`);
    if (pay.message) {
      yield put (paymentFailure (pay.message));
    } else {
      if (
        (pay.data.messages && pay.data.messages.resultCode === 'Error') ||
        (pay.data.transactionResponse.errors &&
          pay.data.transactionResponse.errors[0].errorText !== '')
      ) {
        console.log ('here in sagde pago no paso');
        yield put (manageErrorDialog (true));
      } else {
        yield put (paymentSuccess (pay.data));
        history.push ('/app/payed');
      }
    }
  } catch (error) {
    yield put (paymentFailure (error));
  }
}

function* sendEmailShopDoneS (payload) {
  console.log (`payload en send email ${JSON.stringify (payload)}`);
  const data = payload.payload;
  console.log (`data en send email ${JSON.stringify (data)}`);
  try {
    const info = yield call (sendEmailShopDoneRequest, data);
    console.log (`lo que vira de enviar el email${JSON.stringify (info)}`);
    if (data.message) {
      yield put (sendEmailWithPaymentConfirmationFailure (info.message));
    } else {
      yield put (sendEmailWithPaymentConfirmationSuccess (info));
    }
  } catch (error) {
    yield put (sendEmailWithPaymentConfirmationFailure (error));
  }
}

/**
 * SAVE THE QUOTE
 */
function* saveQuoteS (payload) {
  console.log (
    ` guardar quota en la saga payload ${JSON.stringify (payload.payload)}`
  );
  const {
    artSource,
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
    user,
    productSelected,
    hardwoodThickness,
    hardwoodWidth,
    hardwoodLength,
    hardwoodType,
    hardwoodStyle,
    hardwoodFinish,
    hardwoodSelected,
  } = payload.payload;
  try {
    if (artSource === 'Upload a pic') {
      var imageData = yield call (uploadImageRequest, {
        imageUploaded,
        id: user.id,
      });
      console.log (`lo que vira de guardar la imagen`, imageData);
    }
    switch (productSelected) {
      case 'Mosaics':
        const quoteMosaic = yield call (saveQuoteRequest, {
          // Cost: "",
          ImagePath: artSource === 'Upload a pic'
            ? imageData.data.id
            : imageSelectedId,
          FramePath: frameSelected,
          ImageSource: artSource === 'Upload a pic'
            ? 'upload'
            : artSource === 'Extensive Gallery' ? 'adobe' : 'company',
          Size: size,
          Quantity: quantity,
          Address1: address1,
          Address2: address2,
          City: city,
          Country: country,
          State: state,
          Zip: zipcode,
          Status: 'Ordered',
          UserId: user.id,
          ImageId: imageData ? imageData.data.id : null,
          Cost: 0,
          Service: serviceSelected,
          Product: 'Mosaics',
        });
        console.log (`quote en la saga ${JSON.stringify (quoteMosaic)}`);
        if (quoteMosaic.message) {
          yield put (saveQuoteFailure (quoteMosaic.message));
        } else {
          yield put (saveQuoteSuccess (quoteMosaic.data.files));
        }
        break;
      case 'HardwoodFlooring':
        const quoteHardwood = yield call (saveQuoteRequest, {
          ImagePath: imageSelectedId,
          HardwoodType: hardwoodType,
          HardwoodStyle: hardwoodStyle,
          HardwoodSelected: hardwoodSelected,
          HardwoodFinish: hardwoodFinish,
          HardwoodThickness: hardwoodThickness,
          HardwoodWidth: hardwoodWidth,
          HardwoodLength: hardwoodLength,
          Quantity: quantity,
          Address1: address1,
          Address2: address2,
          City: city,
          Country: country,
          State: state,
          Zip: zipcode,
          Status: 'Ordered',
          UserId: user.id,
          Cost: 0,
          Product: 'HardwoodFlooring',
        });
        console.log (`quote en la saga ${JSON.stringify (quoteHardwood)}`);
        if (quoteHardwood.message) {
          yield put (saveQuoteFailure (quoteHardwood.message));
        } else {
          yield put (saveQuoteSuccess (quoteHardwood.data.files));
        }
        break;
      case 'IznikTile':
        const quoteIznik = yield call (saveQuoteRequest, {
          // Cost: "",
          ImagePath: artSource === 'Upload a pic'
            ? imageData.data.id
            : imageSelectedId,
          FramePath: frameSelected,
          ImageSource: artSource === 'Upload a pic' ? 'upload' : 'company',
          Size: size,
          Quantity: quantity,
          Address1: address1,
          Address2: address2,
          City: city,
          Country: country,
          State: state,
          Zip: zipcode,
          Status: 'Ordered',
          UserId: user.id,
          ImageId: imageData ? imageData.data.id : null,
          Cost: 0,
          Product: 'IznikTile',
          Service: serviceSelected,
        });
        console.log (`quote en la saga ${JSON.stringify (quoteIznik)}`);
        if (quoteIznik.message) {
          yield put (saveQuoteFailure (quoteIznik.message));
        } else {
          yield put (saveQuoteSuccess (quoteIznik.data.files));
        }
        break;
      default:
        break;
    }
  } catch (error) {
    yield put (saveQuoteFailure (error));
  }
}

/**
 * Get images from adobe stock
 */
export function* getImagesFomAdobeWatcher () {
  yield takeEvery (GET_ADOBE_STOCK_IMAGES, getImagesFomAdobeS);
}

// /**
//  * Save the quote in the database
//  */
export function* saveQuoteWatcher () {
  yield takeEvery (SAVE_QUOTE, saveQuoteS);
}

// /**
//  * Get list of all ordersby client
//  */
export function* getMyOrdersListWatcher () {
  yield takeEvery (GET_ORDERS_LIST, getMyOrdersListS);
}

// /**
//  * Get order by Id
//  */
export function* getOrderByIdWatcher () {
  yield takeEvery (GET_QUOTE_BY_ID, getOrderByIdS);
}

// /**
//  * Generate Invoice Number
//  */
export function* generateInvoiceNumberWatcher () {
  yield takeEvery (GENERATE_INVOICE_NUMBER, generateInvoiceNumberS);
}

// /**
//  * Reorder
//  */
export function* reorderWatcher () {
  yield takeEvery (REORDER, reorderS);
}

// /**
//  * Get All Quotes By Products
//  */
export function* getAllOrdersByProductsWatcher () {
  yield takeEvery (GET_ALL_QUOTES, getAllOrdersByProductsS);
}

// /**
//  * Get ups delivery fee
//  */
export function* getDeliveryFeeWatcher () {
  yield takeEvery (GET_DELIVERY_FEE, getDeliveryFeeS);
}

// /**
//  * Get payment
//  */
export function* paymentWatcher () {
  yield takeEvery (PAYMENT, paymentS);
}

// /**
//  * Get payment
//  */
export function* sendEmailShopDoneWatcher () {
  yield takeEvery (SHOP_DONE_EMAIL, sendEmailShopDoneS);
}

// // /**
// //  * Save the billing info in the reducer
// //  */
// export function* saveBillingInfoWatcher() {
//   yield takeEvery(BILLING_INFO, saveBillingInfoS);
// }
/**
 * Quote Root Saga
 */
export default function* rootSaga () {
  yield all ([
    fork (getImagesFomAdobeWatcher),
    fork (saveQuoteWatcher),
    fork (getMyOrdersListWatcher),
    fork (getOrderByIdWatcher),
    fork (generateInvoiceNumberWatcher),
    fork (reorderWatcher),
    fork (getAllOrdersByProductsWatcher),
    fork (getDeliveryFeeWatcher),
    fork (paymentWatcher),
    fork (sendEmailShopDoneWatcher),
    // fork(saveBillingInfoWatcher)
  ]);
}
