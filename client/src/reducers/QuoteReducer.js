import {
  GET_ADOBE_STOCK_IMAGES_SUCCESS,
  GET_ADOBE_STOCK_IMAGES_FAILURE,
  PICK_SERVICE,
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
  SET_LOADER_TRUE,
  GENERATE_INVOICE_NUMBER_SUCCESS,
  GENERATE_INVOICE_NUMBER_FAILURE,
  PICK_ART_SOURCE,
  PICK_PRODUCT,
  PICK_THICKNESS,
  PICK_WIDTH,
  PICK_LENGTH,
  PICK_TYPE,
  PICK_STYLE,
  PICK_FINISH,
  PICK_HARDWOOD,
  GET_DELIVERY_FEE_FAILURE,
  GET_DELIVERY_FEE_SUCCESS,
  PICK_PAYMENT_METHOD,
  QUOTE_TO_VIEW,
  QUOTE_MONEY_DATA,
  PAYMENT_SUCCESS,
  PAYMENT_FAILURE,
  BILLING_INFO,
  SAVE_CART_PRICING,
  ORDER_PLACED,
  SAVE_SHIPPING_ADDRESS_CART,
  OPEN_DIALOG_FOR_PAYMENT_ERROR,
  OPEN_DIALOG_FOR_INVOICE,
} from '../actions/types';

import {NotificationManager} from 'react-notifications';

const INIT_STATE = {
  imagesAdobeStock: [],
  artSource: 'Art Gallery',
  imageUploaded: {},
  imageSelectedId: '',
  serviceSelected: 'Custom-Framed Murals',
  productSelected: '',
  frameSelected: '',
  size: '36x36',
  quantity: 1,
  country: '',
  state: '',
  city: '',
  address1: '',
  address2: '',
  zipcode: '',
  myOrders: [],
  actualQuote: {},
  actualImage: {},
  extGalleryFilter: '',
  loading: false,
  invoiceNumber: '',
  status: '',
  hardwoodThickness: '',
  hardwoodWidth: '',
  hardwoodLength: '',
  hardwoodType: '',
  hardwoodStyle: '',
  hardwoodFinish: '',
  hardwoodSelected: '',
  deliveryFee: 0,
  quoteToView: {},
  quoteMoneyData: {},
  cartMoneyData: {},
  paymentMessage: '',
  billingInfo: {},
  orderPlaced: false,
  shippingAdreessCart: {},
  errorPaymentDialog: false,
  invoiceDialog: false,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_ADOBE_STOCK_IMAGES_SUCCESS:
      return {
        ...state,
        imagesAdobeStock: action.payload,
        loading: false,
        imageSelectedId: action.payload.length !== 0
          ? action.payload[0].id
          : state.imageSelectedId,
      };

    case PAYMENT_SUCCESS:
      console.log (`message from payment`, action.payload);
      return {
        ...state,
        paymentMessage: action.payload,
      };

    case ORDER_PLACED:
      // console.log (`order placed en el reducer`, action.payload);
      return {
        ...state,
        orderPlaced: action.payload,
      };

    case OPEN_DIALOG_FOR_PAYMENT_ERROR:

      return {...state, errorPaymentDialog: action.payload};

    case OPEN_DIALOG_FOR_INVOICE:

      return {...state, invoiceDialog: action.payload};

    case SAVE_CART_PRICING:
      // console.log (`cart pricing en el reducer`, action.payload);
      return {
        ...state,
        cartMoneyData: action.payload,
      };

    case SAVE_SHIPPING_ADDRESS_CART:
      // console.log (`cart SHIPPING ADDRESS en el reducer`, action.payload);
      return {
        ...state,
        shippingAdreessCart: action.payload,
      };

    case PAYMENT_FAILURE:
      return {
        ...state,
        paymentMessage: action.payload,
      };

    case BILLING_INFO:
      // console.log (`billing info en el reducer`, action.payload);
      return {
        ...state,
        billingInfo: action.payload,
      };

    case GET_GALLERY_FILTER_CRITERIA:
      return {
        ...state,
        extGalleryFilter: action.payload,
      };

    case GENERATE_INVOICE_NUMBER_SUCCESS:
      return {
        ...state,
        invoiceNumber: action.payload,
      };
    case GENERATE_INVOICE_NUMBER_FAILURE:
      NotificationManager.error (action.payload);
      return {
        ...state,
      };

    case QUOTE_TO_VIEW:
      console.log (
        `lo que llega al reducer para guardar la quota que se quiere ver: `,
        action.payload
      );
      return {
        ...state,
        quoteToView: action.payload,
      };

    case QUOTE_MONEY_DATA:
      console.log (
        `lo que llega al reducer para guardar data money la quota que se quiere ver: `,
        action.payload
      );
      return {
        ...state,
        quoteMoneyData: action.payload,
      };

    case GET_ADOBE_STOCK_IMAGES_FAILURE:
      NotificationManager.error (action.payload);
      return {...state};

    case PICK_PRODUCT:
      return {
        ...state,
        productSelected: action.payload,
        imagesAdobeStock: [],
        artSource: '',
        imageUploaded: {},
        imageSelectedId: '',
        frameSelected: '',
        quantity: 1,
        country: '',
        state: '',
        city: '',
        address1: '',
        address2: '',
        zipcode: '',
        extGalleryFilter: '',
        hardwoodThickness: '',
        hardwoodWidth: '',
        hardwoodLength: '',
        hardwoodType: '',
        hardwoodStyle: '',
        hardwoodFinish: '',
        hardwoodSelected: '',
        paymentMethod: '',
      };

    case PICK_THICKNESS:
      return {...state, hardwoodThickness: action.payload};

    case PICK_WIDTH:
      return {...state, hardwoodWidth: action.payload};

    case PICK_LENGTH:
      return {...state, hardwoodLength: action.payload};

    case PICK_PAYMENT_METHOD:
      return {...state, paymentMethod: action.payload};

    case PICK_TYPE:
      return {...state, hardwoodType: action.payload};

    case PICK_STYLE:
      return {...state, hardwoodStyle: action.payload};

    case PICK_FINISH:
      return {...state, hardwoodFinish: action.payload};

    case PICK_HARDWOOD:
      return {...state, hardwoodSelected: action.payload};

    case PICK_SERVICE:
      return {
        ...state,
        serviceSelected: action.payload,
        imagesAdobeStock: [],
        artSource: 'Art Gallery',
        imageUploaded: {},
        imageSelectedId: '',
        frameSelected: '',
        size: '3x3',
        quantity: 1,
        country: '',
        state: '',
        city: '',
        address1: '',
        address2: '',
        zipcode: '',
      };

    case PICK_ART_SOURCE:
      return {
        ...state,
        artSource: action.payload,
        imageSelectedId: '',
        frameSelected: '',
        imageUploaded: {},
        imagesAdobeStock: [],
        size: '3x3',
        quantity: 1,
      };

    case PICK_DIMENTIONS:
      return {...state, size: action.payload};

    case SAVE_IMAGE_UPLOADED:
      return {...state, imageUploaded: action.payload};

    case PICK_QUANTITY:
      return {...state, quantity: action.payload};

    case SET_LOADER_TRUE:
      return {...state, loading: action.payload};

    case PICK_IMAGE:
      return {...state, imageSelectedId: action.payload};

    case PICK_FRAME:
      return {...state, frameSelected: action.payload};

    case GET_ORDERS_LIST_FAILURE:
      NotificationManager.error (action.payload);
      return {...state};

    case GET_ORDERS_LIST_SUCCESS:
      return {...state, myOrders: action.payload};

    case GET_DELIVERY_FEE_FAILURE:
      NotificationManager.error (action.payload);
      return {...state};

    case GET_DELIVERY_FEE_SUCCESS:
      NotificationManager.success (`buscó el delivery fee de nuevo`);
      return {...state, deliveryFee: action.payload};

    case GET_IMAGE_SUCCESS:
      return {...state, actualImage: action.payload};

    case GET_IMAGE_FAILURE:
      NotificationManager.error (action.payload);
      return {...state};

    case SELECT_ADDRESS:
      return {
        ...state,
        address1: action.payload.address.address1,
        address2: action.payload.address.address2,
        city: action.payload.address.city,
        state: action.payload.address.state,
        country: action.payload.address.country,
        zipcode: action.payload.address.zipcode,
      };
    case GET_QUOTE_BY_ID_SUCCESS:
      return {...state, actualQuote: action.payload};

    case GET_QUOTE_BY_ID_FAILURE:
      NotificationManager.error (action.payload);
      return {...state};

    default:
      return {...state};
  }
};
