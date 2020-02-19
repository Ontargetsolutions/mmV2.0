/**
 * Auth Sagas
 */
import {all, call, fork, put, takeEvery} from 'redux-saga/effects';
import {auth, facebookAuthProvider, googleAuthProvider} from '../firebase';
import {
  LOGIN_USER,
  LOGIN_FACEBOOK_USER,
  LOGIN_GOOGLE_USER,
  LOGOUT_USER,
  SIGNUP_USER,
  CHANGE_PASSWORD,
  FETCH_COUNTRY,
  FETCH_STATE,
  FETCH_CITY,
  GET_USER,
} from 'Actions/types';

import {
  signinUserSuccess,
  signinUserFailure,
  signUpUserInFirebaseSuccess,
  signUpUserInFirebaseFailure,
  logoutUserFromFirebaseSuccess,
  logoutUserFromFirebaseFailure,
  changePasswordSuccess,
  changePasswordFailure,
  fetchCountryFailure,
  fetchCountrySuccess,
  fetchStateFailure,
  fetchStateSuccess,
  getUserFailure,
  getUserSuccess,
  showAuthMessage
} from 'Actions';
import {stringify} from 'querystring';

import API from '../api/index';

const actionCodeSettings = {
  url: 'http://localhost:3000',
  // handleCodeInApp: false
};

/**
 *
 * Sigin User With Email and Password Request
 */
const signInUserWithEmailPasswordRequest = async (email, password) =>
  await auth
    .signInWithEmailAndPassword (email, password)
    .then (authUser => authUser)
    .catch (error => error);


/**
 * Register the user in MySQL
 */
const registerMySQL = async (
  email,
  password,
  name,
  phone,
  address1,
  address2,
  city,
  country,
  stateC,
  zipcode,
  type,
  companyName
) =>
  await API.register ({
    email,
    password,
    name,
    phone,
    address1,
    address2,
    city,
    country,
    stateC,
    zipcode,
    type,
    companyName
  })
    .then (userCreated => userCreated)
    .catch (error => error);

/**
 * Signin User With Facebook Request
 */
const signInUserWithFacebookRequest = async () =>
  await auth
    .signInWithPopup (facebookAuthProvider)
    .then (authUser => authUser)
    .catch (error => error);

/**
 * Signin User With Facebook Request
 */
const signInUserWithGoogleRequest = async () =>
  await auth
    .signInWithPopup (googleAuthProvider)
    .then (authUser => authUser)
    .catch (error => error);

/**
 * Change the password Request
 */
const changeThePasswordRequest = async email =>
  await auth
    .sendPasswordResetEmail (email, actionCodeSettings)
    .then (res => {
      console.log (`res de la llamada a la funcion que manda el email ${res}`);
    })
    .catch (error => error);

const deletingASignedFirebaseUser = async () => {
  let user = auth.currentUser;
  await user
    .delete ()
    .then (function () {
      // FirebaseUser deleted.
    })
    .catch (error => error);
};

/**
 * Fectch countries
 */
const fetchCountriesRequest = async () =>
  await API.getCountries ()
    .then (countries => countries)
    .catch (error => error);

/**
 * Fectch States
 */
const fetchStateRequest = async country =>
  await API.getStates (country).then (states => states).catch (error => error);

/**
 * Find User by Email
 */
const findUserRequest = async email =>
  await API.getUserByEmail (email).then (user => user).catch (error => error);

/**
 * Signout Request
 */
const signOutRequest = async () =>
  await auth.signOut ().then (authUser => authUser).catch (error => error);

/**
 * Create User
 */
const createUserWithEmailPasswordRequest = async (email, password) =>
  await auth
    .createUserWithEmailAndPassword (email, password)
    .then (authUser => authUser)
    .catch (error => error);

/**
 * Signin User With Email & Password
 */
function* signInUserWithEmailPassword({payload}) {
  const {email, password} = payload.user;
  const {history} = payload;
  try {
    const signInUser = yield call (
      signInUserWithEmailPasswordRequest,
      email,
      password
    );
    if (signInUser.message) {
      yield put (signinUserFailure (signInUser.message));
      localStorage.removeItem ('user_id');
      localStorage.removeItem ('user_info');
    } else {
      localStorage.setItem ('user_id', signInUser.user.uid);
      localStorage.setItem ('user_info', signInUser.user.email);
      yield put (
        signinUserSuccess ({
          uid: signInUser.user.uid,
          userAuthe: signInUser.user.email,
        })
      );
      history.push ('/');
    }
  } catch (error) {
    yield put (signinUserFailure (error));
  }
}

/**
 * GET USER BY EMAIL
 */
function* getUserByEmail (payload) {
  const email = payload.payload;
  console.log(`email en saga para obtener datos de usurios logeado ${JSON.stringify(payload)}`)
  console.log(`en saga para obtener datos de usurios logeado ${JSON.stringify(payload)}`)
  try {
    const user = yield call (findUserRequest, email);
    console.log(`user devuelto ${JSON.stringify(payload)}`)
    if (user.message) {
      yield put (getUserFailure (user.message));
    } else {
      yield put (getUserSuccess (user));
    }
  } catch (error) {
    yield put (getUserFailure (error));
  }
}

/**
 * Signin User With Facebook Account
 */
function* signinUserWithFacebookAccount({payload}) {
  try {
    const signUpUser = yield call (signInUserWithFacebookRequest);
    if (signUpUser.message) {
      yield put (signinUserFailure (signUpUser.message));
    } else {
      const user = yield call (findUserRequest, signUpUser.user.email);
      if (user.data != '') {
        localStorage.setItem ('user_id', signUpUser.user.uid);
        yield put (signinUserSuccess (signUpUser));
        payload.push ('/');
      } 
      else {
        yield call (deletingASignedFirebaseUser);
        yield put (showAuthMessage ('You need to Sign Up First'));
        localStorage.removeItem ('user_id');
        localStorage.removeItem ('user_info');
      }
    }
  } catch (error) {
    yield put (signinUserFailure (error));
  }
}

/**
 * Signin User With Google Account
 */
function* signinUserWithGoogleAccount({payload}) {
  try {
    const signUpUser = yield call (signInUserWithGoogleRequest);
    if (signUpUser.message) {
      yield put (signinUserFailure (signUpUser.message));
    } else {
      const user = yield call (findUserRequest, signUpUser.user.email);
      if (user.data != '') {
        localStorage.setItem ('user_id', signUpUser.user.uid);
        localStorage.setItem ('user_info', signUpUser.user.email);
        yield put (signinUserSuccess ({userAuthe: signInUser.user.email, userData: user.data}));
        payload.push ('/');
      } 
      else {
        yield call (deletingASignedFirebaseUser);
        yield put (showAuthMessage ('You need to Sign Up First'));
        localStorage.removeItem ('user_id');
        localStorage.removeItem ('user_info');
      }
    }
  } catch (error) {
    yield put (signinUserFailure (error));
  }
}

/**
 * Signout User
 */
function* signOut () {
  try {
    yield call (signOutRequest);
    localStorage.removeItem ('user_id');
    localStorage.removeItem ('user_info');
    yield put (logoutUserFromFirebaseSuccess ());
  } catch (error) {
    yield put (logoutUserFromFirebaseFailure ());
  }
}

/**
 * Create User In Firebase
 */
function* createUserWithEmailPassword({payload}) {
  console.log(`payload de user que llega a la saga grande ${JSON.stringify(payload)}`)
  const {
    email,
    password,
    name,
    phone,
    address1,
    address2,
    city,
    country,
    stateC,
    zipcode,
    type,
    companyName
  } = payload.user;
  const {history} = payload;
  try {
    const signUpUser = yield call (
      createUserWithEmailPasswordRequest,
      email,
      password
    );

    if (signUpUser.message) {
      yield put (signUpUserInFirebaseFailure (signUpUser.message));
    } else {
      const userCreated = yield call (
        registerMySQL,
        email,
        password,
        name,
        phone,
        address1,
        address2,
        city,
        country,
        stateC,
        zipcode,
        type,
        companyName
      );

      localStorage.setItem (
        'user_info',
        // JSON.stringify (userCreated.data.email)
        userCreated.data.Email
      );
      localStorage.setItem ('user_id', signUpUser.user.uid);
      yield put (
        signUpUserInFirebaseSuccess ({
          uid: signUpUser.user.uid,
          userAuthe: userCreated.data,
        })
      );
      history.push ('/');
      // }
    }
  } catch (error) {
    yield put (signUpUserInFirebaseFailure (error));
  }
}

/**
 * Change the password
 */
function* changeThePassword (payload) {
  // console.log (`en la saga grande payload ${(JSON, stringify (payload))}`);
  const email = payload.email;
  // console.log (`en la saga grande email ${email}`);
  try {
    yield call (changeThePasswordRequest, email);
    // if (result) {
    yield put (changePasswordSuccess ());
    // } else {
    //     yield put(changePasswordFailure(result));
    // history.push('/')
    // }
  } catch (error) {
    yield put (changePasswordFailure (error));
    console.log (`entro al error de la saga grande error ${error}`);
  }
}

/**
 * Fetch the Countries
 */
function* fetchCountries () {
  try {
    const countries = yield call (fetchCountriesRequest);
    if (countries.message) {
      yield put (fetchCountryFailure (countries.message));
    } else {
      yield put (fetchCountrySuccess (countries.data));
    }
  } catch (error) {
    yield put (changePasswordFailure (error));
    // console.log (`entro al error de la saga grande error ${error}`);
  }
}

/**
 * Fetch the States
 */
function* fetchStates (payload) {
  const country = payload.payload;
  // console.log (`country en la saga pa fetch states ${country}`);
  try {
    const states = yield call (fetchStateRequest, country);
    if (states.message) {
      yield put (fetchStateFailure (states.message));
    } else {
      yield put (fetchStateSuccess (states.data));
    }
  } catch (error) {
    yield put (fetchStateFailure (error));
    // console.log (`entro al error de la saga grande error ${error}`);
  }
}

/**
 * Signin User In Firebase
 */
export function* signinUserInFirebase () {
  yield takeEvery (LOGIN_USER, signInUserWithEmailPassword);
}

/**
 * Signin User With Facebook
 */
export function* signInWithFacebook () {
  yield takeEvery (LOGIN_FACEBOOK_USER, signinUserWithFacebookAccount);
}

/**
 * Signin User With Google
 */
export function* signInWithGoogle () {
  yield takeEvery (LOGIN_GOOGLE_USER, signinUserWithGoogleAccount);
}

/**
 * Signout User From Firebase
 */
export function* signOutUser () {
  yield takeEvery (LOGOUT_USER, signOut);
}

/**
 * Create User
 */
export function* createUserAccount () {
  yield takeEvery (SIGNUP_USER, createUserWithEmailPassword);
}

/**
 * Change password
 */
export function* changePassword () {
  yield takeEvery (CHANGE_PASSWORD, changeThePassword);
}

/**
 * FETCH COUNTRY
 */
export function* fetchCountryWatcher () {
  yield takeEvery (FETCH_COUNTRY, fetchCountries);
}

/**
 * FETCH STATE
 */
export function* fetchStateWatcher () {
  yield takeEvery (FETCH_STATE, fetchStates);
}


/**
 * GET USER
 */
export function* getUserByEmailWatcher () {
  yield takeEvery (GET_USER, getUserByEmail);
}

/**
 * Auth Root Saga
 */
export default function* rootSaga () {
  yield all ([
    fork (signinUserInFirebase),
    fork (signInWithFacebook),
    fork (signInWithGoogle),
    fork (signOutUser),
    fork (changePassword),
    fork (createUserAccount),
    fork (fetchCountryWatcher),
    fork (fetchStateWatcher),
    fork (getUserByEmailWatcher),

  ]);
}
