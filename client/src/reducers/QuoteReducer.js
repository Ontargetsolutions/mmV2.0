import {
  GET_ADOBE_STOCK_IMAGES_SUCCESS,
  GET_ADOBE_STOCK_IMAGES_FAILURE,
  PICK_SERVICE,
  PICK_MATERIAL,
  PICK_DIMENTIONS,
  SELECT_ADDRESS,
  PICK_QUANTITY,
  PICK_IMAGE,
  PICK_FRAME,
  SAVE_IMAGE_UPLOADED,
  GET_ORDERS_LIST_FAILURE,
  GET_ORDERS_LIST_SUCCESS,
  GET_QUOTE_BY_ID_SUCCESS,
  GET_QUOTE_BY_ID_FAILURE,
  GET_IMAGE,
  GET_IMAGE_FAILURE,
  GET_IMAGE_SUCCESS,
  GET_GALLERY_FILTER_CRITERIA,
  SET_LOADER_TRUE
} from "../actions/types";

import { NotificationManager } from "react-notifications";

const INIT_STATE = {
  imagesAdobeStock: [],
  material: "Art Gallery",
  imageUploaded: {},
  imageSelectedId: "",
  serviceSelected: "Custom-Framed Murals",
  frameSelected: "",
  size: "3x3",
  quantity: 1,
  country: "",
  state: "",
  city: "",
  address1: "",
  address2: "",
  zipcode: "",
  myOrders: [],
  actualQuote: {},
  actualImage: {},
  extGalleryFilter: "",
  loading: false
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ADOBE_STOCK_IMAGES_SUCCESS:
      return {
        ...state,
        imagesAdobeStock: action.payload,
        loading: false,
        imageSelectedId:
          action.payload.length !== 0
            ? action.payload[0].id
            : state.imageSelectedId
      };

    case GET_GALLERY_FILTER_CRITERIA:
      return {
        ...state,
        extGalleryFilter: action.payload
      };

    case GET_ADOBE_STOCK_IMAGES_FAILURE:
      NotificationManager.error(action.payload);
      return { ...state };

    case PICK_SERVICE:
      return {
        ...state,
        serviceSelected: action.payload,
        imagesAdobeStock: [],
        material: "Art Gallery",
        imageUploaded: {},
        imageSelectedId: "",
        frameSelected: "",
        size: "3x3",
        quantity: 1,
        country: "",
        state: "",
        city: "",
        address1: "",
        address2: "",
        zipcode: ""
      };

    case PICK_MATERIAL:
      return {
        ...state,
        material: action.payload,
        imageSelectedId: "",
        frameSelected: "",
        imageUploaded: {},
        imagesAdobeStock: [],
        size: "3x3",
        quantity: 1
      };

    case PICK_DIMENTIONS:
      return { ...state, size: action.payload };

    case SAVE_IMAGE_UPLOADED:
      return { ...state, imageUploaded: action.payload };

    case PICK_QUANTITY:
      return { ...state, quantity: action.payload };

    case SET_LOADER_TRUE:
      console.log(`en el reducer loading ${action.payload}`);
      return { ...state, loading: action.payload };

    case PICK_IMAGE:
      console.log(`en pick image reducer ${action.payload}`);
      return { ...state, imageSelectedId: action.payload };

    case PICK_FRAME:
      return { ...state, frameSelected: action.payload };

    case GET_ORDERS_LIST_FAILURE:
      NotificationManager.error(action.payload);
      return { ...state };

    case GET_ORDERS_LIST_SUCCESS:
      return { ...state, myOrders: action.payload };

    case GET_IMAGE_SUCCESS:
      return { ...state, actualImage: action.payload };

    case GET_IMAGE_FAILURE:
      NotificationManager.error(action.payload);
      return { ...state };

    case SELECT_ADDRESS:
      return {
        ...state,
        address1: action.payload.address.address1,
        address2: action.payload.address.address2,
        city: action.payload.address.city,
        state: action.payload.address.state,
        country: action.payload.address.country,
        zipcode: action.payload.address.zipcode
      };
    case GET_QUOTE_BY_ID_SUCCESS:
      return { ...state, actualQuote: action.payload };

    case GET_QUOTE_BY_ID_FAILURE:
      NotificationManager.error(action.payload);
      return { ...state };

    default:
      return { ...state };
  }
};
