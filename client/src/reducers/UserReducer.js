import { NotificationManager } from "react-notifications";
import {
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  GET_WORKERS_SUCCESS,
  GET_WORKERS_FAILURE,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_FAILURE
} from "../actions/types";

const INIT_STATE = {
  usersList: [],
  workerList: [],
  loading: false,
  person: ""
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        usersList: action.payload
      };

    case GET_USERS_FAILURE:
      NotificationManager.error(action.payload);
      return { ...state, loading: false };

    case GET_WORKERS_SUCCESS:
      return {
        ...state,
        loading: false,
        workerList: action.payload
      };

    case GET_WORKERS_FAILURE:
      NotificationManager.error(action.payload);
      return { ...state, loading: false };

    case DELETE_USER_SUCCESS:
      NotificationManager.success(`User deleted successfuly.`);
      return {
        ...state
      };

    case GET_USER_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        person: action.payload
      };

    case GET_USER_BY_ID_FAILURE:
      NotificationManager.error(action.payload);
      return { ...state, loading: false };

    case DELETE_USER_SUCCESS:
      NotificationManager.success(`User deleted successfuly.`);
      return {
        ...state
      };

    case DELETE_USER_FAILURE:
      NotificationManager.error(`Error deleting the user .` + action.payload);
      return {
        ...state
      };

    default:
      return { ...state };
  }
};
