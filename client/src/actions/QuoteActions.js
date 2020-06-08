import {
  GET_ADOBE_STOCK_IMAGES,
  GET_ADOBE_STOCK_IMAGES_SUCCESS,
  GET_ADOBE_STOCK_IMAGES_FAILURE,
  PICK_SERVICE,
  PICK_MATERIAL,
  PICK_DIMENTIONS,
  SELECT_ADDRESS,
  PICK_QUANTITY,
  PICK_IMAGE,
  SAVE_QUOTE,
  PICK_FRAME,
  SAVE_IMAGE_UPLOADED,
  SAVE_QUOTE_SUCCESS,
  SAVE_QUOTE_FAILURE,
  GET_ORDERS_LIST,
  GET_ORDERS_LIST_SUCCESS,
  GET_ORDERS_LIST_FAILURE,
  GET_QUOTE_BY_ID,
  GET_QUOTE_BY_ID_SUCCESS,
  GET_QUOTE_BY_ID_FAILURE,
  GET_IMAGE,
  GET_IMAGE_SUCCESS,
  GET_IMAGE_FAILURE,
  GET_GALLERY_FILTER_CRITERIA,
  SET_LOADER_TRUE,
  GENERATE_INVOICE_NUMBER,
  GENERATE_INVOICE_NUMBER_FAILURE,
  GENERATE_INVOICE_NUMBER_SUCCESS,
  PICK_PRODUCT,
  PICK_ART_SOURCE,
  PICK_THICKNESS,
  PICK_WIDTH,
  PICK_LENGTH,
  PICK_TYPE,
  PICK_STYLE,
  PICK_FINISH,
  PICK_HARDWOOD,
  REORDER,
  REORDER_SUCCESS,
  REORDER_FAILURE,
  GET_ALL_QUOTES,
  GET_DELIVERY_FEE_FAILURE,
  GET_DELIVERY_FEE_SUCCESS,
  GET_DELIVERY_FEE,
  GET_ALL_QUOTES_NO_COMPLETED,
  GET_ALL_QUOTES_NO_COMPLETED_FAILURE,
  GET_ALL_QUOTES_NO_COMPLETED_SUCCESS,
  PICK_PAYMENT_METHOD,
  QUOTE_TO_VIEW,
  QUOTE_MONEY_DATA,
  PAYMENT,
  PAYMENT_FAILURE,
  PAYMENT_SUCCESS,
  BILLING_INFO,
  BILLING_INFO_FAILURE,
  BILLING_INFO_SUCCESS,
  SAVE_CART_PRICING,
  ORDER_PLACED
} from "./types";

/**
 * Redux Action get adobe stock images
 */
export const getAdobeImages = word => ({
  type: GET_ADOBE_STOCK_IMAGES,
  payload: word
});

/**
 * Redux Action get adobe stock images success
 */
export const getAdobeImagesSuccess = imageList => ({
  type: GET_ADOBE_STOCK_IMAGES_SUCCESS,
  payload: imageList
});

/**
 * Redux Action get adobe stock images failure
 */
export const getAdobeImagesFailure = error => ({
  type: GET_ADOBE_STOCK_IMAGES_FAILURE,
  payload: error
});

/**
 * Redux Action get adobe stock images
 */
export const reorder = order => ({
  type: REORDER,
  payload: order
});

export const quoteToView = data => ({
  type: QUOTE_TO_VIEW,
  payload: data
});

export const getquoteMoneyData = data => ({
  type: QUOTE_MONEY_DATA,
  payload: data
});

/**
 * Redux Action get adobe stock images success
 */
export const reorderSuccess = () => ({
  type:REORDER_SUCCESS,
  // payload: imageList
});

/**
 * Redux Action get adobe stock images failure
 */
export const reorderFailure = error => ({
  type: REORDER_FAILURE,
  payload: error
});

/**
 * Redux Action to update the reducer with the service selected
 */
export const pickService = service => ({
  type: PICK_SERVICE,
  payload: service
});

/**
 * Redux Action to pick the product
 */
export const pickProduct = product => ({
  type: PICK_PRODUCT,
  payload: product
});

/**
 * Redux Action to pick the hardwood thinckness
 */
export const pickThickness = thickness => ({
  type: PICK_THICKNESS,
  payload: thickness
});

/**
 * Redux Action to pick the hardwood width
 */
export const pickWidth = width => ({
  type: PICK_WIDTH,
  payload: width
});

/**
 * Redux Action to pick the hardwood lenght
 */
export const pickLength = lenght => ({
  type: PICK_LENGTH,
  payload: lenght
});


export const pickPaymentMethod = method => ({
  type: PICK_PAYMENT_METHOD,
  payload: method
});
/**
 * Redux Action to pick the hardwood type
 */
export const pickType = htype => (console.log(`picking the type ${htype}`),{
  type: PICK_TYPE,
  payload: htype
});

/**
 * Redux Action to pick the hardwood style
 */
export const pickStyle = style => ({
  type: PICK_STYLE,
  payload: style
});

/**
 * Redux Action to pick the hardwood finish
 */
export const pickFinish = finish => ({
  type: PICK_FINISH,
  payload: finish
});

/**
 * Redux Action to pick the hardwood 
 */
export const pickHardwood = hardwood => ({
  type: PICK_HARDWOOD,
  payload: hardwood
});

/**
 * Redux Action to pick the source of the art
 */
export const pickArtSource = artSource => ({
  type: PICK_ART_SOURCE,
  payload: artSource
});
/**
 * Redux Action to pick the dimentions of the art
 */
export const pickDimentions = size => ({
  type: PICK_DIMENTIONS,
  payload: size
});

/**
 * Redux Action to save the image upload in the reducer
 */
export const saveImageUpload = data => ({
  type: SAVE_IMAGE_UPLOADED,
  payload: data
});

/**
 * Redux Action to pick the image
 */
export const pickImage = id => ({
  type: PICK_IMAGE,
  payload: id
});

/**
 * Redux Action to pick the frame
 */
export const pickFrame = id => ({
  type: PICK_FRAME,
  payload: id
});

/**
 * Redux Action to select the delivery address
 */
export const selectDeliveryAddress = address => ({
  type: SELECT_ADDRESS,
  payload: address
});

/**
 * Redux Action to pick the quantity
 */
export const pickQuantity = quantity => ({
  type: PICK_QUANTITY,
  payload: quantity
});

/**
 * Redux Action to save the quote
 */
export const saveQuote = quote => ({
  type: SAVE_QUOTE,
  payload: quote
});

/**
 * Redux Action to save the quote success
 */
export const saveQuoteSuccess = quote => ({
  type: SAVE_QUOTE_SUCCESS,
  payload: quote
});

/**
 * Redux Action to get image
 */
export const getImage = data => ({
  type: GET_IMAGE,
  payload: data
});

export const setGalleryFilterCriteria = criteria => ({
  type: GET_GALLERY_FILTER_CRITERIA,
  payload: criteria
});

/**
 * Redux Action to get image success
 */
export const getImageSuccess = data => ({
  type: GET_IMAGE_SUCCESS,
  payload: data
});

export const setLoader = loading => ({
  type: SET_LOADER_TRUE,
  payload: loading
});

/**
 * Redux Action to get image success
 */
export const getImageFailure = err => ({
  type: GET_IMAGE_FAILURE,
  payload: err
});

/**
 * Redux Action to save the quote failure
 */
export const saveQuoteFailure = error => ({
  type: SAVE_QUOTE_FAILURE,
  payload: error
});

/**
 * Redux Action to save the quote
 */
export const getMyQuotesList = id => ({
  type: GET_ORDERS_LIST,
  payload: id
});

/**
 * Redux Action to save the quote success
 */
export const getMyQuotesListSuccess = list => ({
  type: GET_ORDERS_LIST_SUCCESS,
  payload: list
});

/**
 * Redux Action to save the quote failure
 */
export const getMyQuotesListFailure = error => ({
  type: GET_ORDERS_LIST_FAILURE,
  payload: error
});

export const getQuoteById = id => ({
  type: GET_QUOTE_BY_ID,
  payload: id
});

/**
 * Redux Action to save the quote success
 */
export const getQuoteByIdSuccess = quote => ({
  type: GET_QUOTE_BY_ID_SUCCESS,
  payload: quote
});

/**
 * Redux Action to save the quote failure
 */
export const getQuoteByIdFailure = error => ({
  type: GET_QUOTE_BY_ID_FAILURE,
  payload: error
});

export const generateInvoiceNumber = order => ({
  type: GENERATE_INVOICE_NUMBER,
  payload: order
});

export const generateInvoiceNumberFailure = error => ({
  type: GENERATE_INVOICE_NUMBER_FAILURE,
  payload: error
});

export const generateInvoiceNumberSuccess = invoiceNumber => ({
  type: GENERATE_INVOICE_NUMBER_SUCCESS,
  payload: invoiceNumber
});

export const generAllQuotesByProducts = (product) => ({
  type: GET_ALL_QUOTES,
  payload: product
});


export const getDeliveryFee = data => ({
  type: GET_DELIVERY_FEE,
  payload: data
});

export const getDeliveryFeeFailure = error => ({
  type: GET_DELIVERY_FEE_FAILURE,
  payload: error
});
  
export const getDeliveryFeeSuccess = fee => ({
  type: GET_DELIVERY_FEE_SUCCESS,
  payload: fee
});

export const orderPaced = value => ({
  type: ORDER_PLACED,
  payload: value
});

export const payment = data => ({
  type: PAYMENT,
  payload: data
});

export const paymentFailure = error => ({
  type: PAYMENT_FAILURE,
  payload: error
});
  
export const paymentSuccess = pay => ({
  type: PAYMENT_SUCCESS,
  payload: pay
});

export const saveBillingInfo = data => ({
  type: BILLING_INFO,
  payload: data
});

export const saveCartPricing = data => ({
  type: SAVE_CART_PRICING,
  payload: data
});

export const saveBillingInfoFailure = error => ({
  type: BILLING_INFO_FAILURE,
  payload: error
});
  
export const saveBillingInfoSuccess = data => ({
  type: BILLING_INFO_SUCCESS,
  payload: data
});

export const getAllNoCompletedQuotes = data => ({
  type: GET_ALL_QUOTES_NO_COMPLETED,
  payload: data
});

export const getAllNoCompletedQuotesFailure = error => ({
  type: GET_ALL_QUOTES_NO_COMPLETED_FAILURE,
  payload: error
});
  
export const getAllNoCompletedQuotesSuccess = list => ({
  type: GET_ALL_QUOTES_NO_COMPLETED_SUCCESS,
  payload: list
});