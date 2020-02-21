/**
 * Auth User Reducers
 */
import {NotificationManager} from 'react-notifications';
import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  SHOW_MESSAGE,
} from '../actions/types';

/**
 * initial auth user
 */
const INIT_STATE = {
  user: localStorage.getItem ('user_id'),
  loading: false,
  userAuthe: localStorage.getItem ('user_info'),
  userData: {},
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {...state, loading: true};

    case LOGIN_USER_SUCCESS:
      return {...state, loading: false, user: action.payload};

    case LOGIN_USER_FAILURE:
      NotificationManager.error (action.payload);
      return {...state, loading: false};

    case LOGOUT_USER:
      return {...state};

    case LOGOUT_USER_SUCCESS:
      NotificationManager.success ('User Logged Out');
      return {...state, user: null};

    case LOGOUT_USER_FAILURE:
      return {...state};

    case SIGNUP_USER:
      return {...state, loading: true};

    case SIGNUP_USER_SUCCESS:
      NotificationManager.success ('Account Created');
      console.log (
        `action.payload en el reducer despues de autentificar ${JSON.stringify (action.payload)}`
      );
      return {
        ...state,
        loading: false,
        user: action.payload.uid,
        userAuthe: action.payload.userAuthe.Email,
      };

    case SHOW_MESSAGE:
      NotificationManager.error (action.payload);
      return {
        ...state,
      };

    case SIGNUP_USER_FAILURE:
      // NotificationManager.error(action.payload);
      return {...state, loading: false};

    default:
      return {...state};
  }
};
