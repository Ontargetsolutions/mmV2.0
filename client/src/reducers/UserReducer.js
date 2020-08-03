import {NotificationManager} from 'react-notifications';
import {
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_WORKERS_SUCCESS,
  GET_WORKERS_FAILURE,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_FAILURE,
  VIEW_USER_DIALOG,
  EDIT_USER_DIALOG,
  GET_WORKER_BY_ID_SUCCESS,
  GET_WORKER_BY_ID_FAILURE,
} from '../actions/types';

const INIT_STATE = {
  usersList: [],
  workerList: [],
  loading: false,
  person: '',
  viewUserDialog: false,
  editUserDialog: false,
  userId: 0,
  actualWorker: {},
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        usersList: action.payload,
      };

    case GET_USERS_FAILURE:
      NotificationManager.error (action.payload);
      return {...state, loading: false};

    case GET_WORKERS_SUCCESS:
      return {
        ...state,
        loading: false,
        workerList: action.payload,
      };

    case GET_WORKERS_FAILURE:
      NotificationManager.error (action.payload);
      return {...state, loading: false};

    case VIEW_USER_DIALOG:
      console.log (
        `en el reducer pa abrir el view user dialog`,
        action.payload
      );
      return {
        ...state,
        viewUserDialog: action.payload.open,
        userId: action.payload.userId,
      };

    case EDIT_USER_DIALOG:
      return {...state, editUserDialog: action.payload};

    case DELETE_USER_SUCCESS:
      NotificationManager.success (`User deleted successfuly.`);
      return {
        ...state,
      };

    case GET_USER_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        person: action.payload,
      };

    case GET_USER_BY_ID_FAILURE:
      NotificationManager.error (action.payload);
      return {...state, loading: false};

    case GET_WORKER_BY_ID_SUCCESS:
      return {
        ...state,
        actualWorker: action.payload,
      };

    case GET_WORKER_BY_ID_FAILURE:
      NotificationManager.error (action.payload);
      return {...state};

    case DELETE_USER_SUCCESS:
      NotificationManager.success (`User deleted successfuly.`);
      return {
        ...state,
      };

    case DELETE_USER_FAILURE:
      NotificationManager.error (`Error deleting the user .` + action.payload);
      return {
        ...state,
      };

    default:
      return {...state};
  }
};
