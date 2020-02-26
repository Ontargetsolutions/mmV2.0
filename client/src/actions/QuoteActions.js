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
  GET_ORDERS_LIST_FAILURE
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
 * Redux Action to update the reducer with the service selected
 */
export const pickService = service => ({
  type: PICK_SERVICE,
  payload: service
});

/**
 * Redux Action to pick the source of the art
 */
export const pickMaterial = material => ({
  type: PICK_MATERIAL,
  payload: material
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
export const saveQuote = quote => (console.log(`en la accion pa salvar`),{
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
