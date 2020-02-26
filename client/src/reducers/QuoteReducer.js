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
  GET_ORDERS_LIST_SUCCESS
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
  myOrders: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ADOBE_STOCK_IMAGES_SUCCESS:
      return {
        ...state,
        imagesAdobeStock: action.payload
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

    case PICK_IMAGE:
      return { ...state, imageSelectedId: action.payload };

    case PICK_FRAME:
      return { ...state, frameSelected: action.payload };

    case GET_ORDERS_LIST_FAILURE:
      NotificationManager.error(action.payload);
      return { ...state };

    case GET_ORDERS_LIST_SUCCESS:
      console.log(`reducer en la lista de quotas, ${JSON.stringify(action.payload)}`)
      return { ...state, myOrders: action.payload };

    case SELECT_ADDRESS:
        console.log(`reducer para actualizar la delivery address, ${JSON.stringify(action.payload)}`)
      return {
        ...state,
        address1: action.payload.address.address1,
        address2: action.payload.address.address2,
        city: action.payload.address.city,
        state: action.payload.address.state,
        country: action.payload.address.country,
        zipcode: action.payload.address.zipcode
      };

    default:
      return { ...state };
  }
};
