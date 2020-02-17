/**
 * Auth Sagas
 */
import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { USER_UPDATE } from "Actions/types";
import { updateUserFailure, updateUserSuccess } from "Actions";
import { NotificationManager } from "react-notifications";

import API from "../api/index";
import {
  GET_USERS,
  ADD_USER,
  DELETE_USER,
  GET_WORKERS,
  GET_USER_BY_ID,
} from "../actions/types";
import {
  getUserListFailure,
  getUserListSuccess,
  deleteUserSuccess,
  getUserList,
  getWorkersListFailure,
  getWorkersListSuccess,
  getWorkersList,
  getPersonByIdFailure,
  getPersonByIdSuccess,
} from "../actions/UserActions";

import { auth } from "../firebase";

const updateUserRequest = async user =>
  await API.updateUsers(user)
    .then(authUser => authUser)
    .catch(error => error);

const getUserListRequest = async user =>
  await API.getAllUsers()
    .then(usersList => usersList)
    .catch(error => error);

const getWorkerListRequest = async user =>
  await API.getAllWorkers()
    .then(workersList => workersList)
    .catch(error => error);

const getPersonByIdRequest = async id =>
  await API.getPersonById(id)
    .then(person => person)
    .catch(error => error);

/**
 * Register the user in MySQL
 */
const registerMySQL1 = async (
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
  await API.addNewUser({
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
    companyName,
  })
    .then(userCreated => userCreated)
    .catch(error => error);

/**
 * Create User
 */
const createUserWithEmailPasswordRequest1 = async (email, password) =>
  await auth
    .createUserWithEmailAndPassword(email, password)
    .then(authUser => authUser)
    .catch(error => error);

/**
 * Delete User
 */
const deleteUserRequest = async id =>
  await API.deleteUsers(id)
    .then(authUser => authUser)
    .catch(error => error);

/**
 * Create User In Firebase
 */
function* createUserWithEmailPasswordS(payload) {
  console.log(
    `payload de user que llega a la saga grande ${JSON.stringify(payload)}`
  );
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
    rol,
  } = payload.payload;
  try {
    const signUpUser = yield call(
      createUserWithEmailPasswordRequest1,
      email,
      password
    );
    if (signUpUser.message) {
      yield put(signUpUserInFirebaseFailure(signUpUser.message));
    } else {
      const userCreated = yield call(
        registerMySQL1,
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
        rol
      );
      yield put(getWorkersList());
    }
  } catch (error) {
    yield put(signUpUserInFirebaseFailure(error));
  }
}

/**
 * UPDATE USER
 */
function* updateUserS(payload) {
  const user = payload.payload;
  try {
    const userUpdated = yield call(updateUserRequest, user);
    if (userUpdated.message) {
      yield put(updateUserFailure(userUpdated.message));
    } else {
      yield put(updateUserSuccess(userUpdated.data));
    }
  } catch (error) {
    yield put(updateUserFailure(error));
  }
}

/**
 * DELETE USER
 */
function* deleteUserS(data) {
  const id = data.payload;
  console.log(`id en la saga${JSON.stringify(data)}`);
  try {
    const userDeleted = yield call(deleteUserRequest, id);
    if (userDeleted.message) {
      yield put(deleteUserFailure(userDeleted.message));
    } else {
      NotificationManager.success(`User deleted successfuly`);
      yield put(getUserList());
      yield put(getWorkersList());
    }
  } catch (error) {
    yield put(deleteUserFailure(error));
  }
}

/**
 * GET USER LIST
 */
function* getUserListS() {
  try {
    const userList = yield call(getUserListRequest);
    if (userList.message) {
      yield put(getUserListFailure(userList.message));
    } else {
      yield put(getUserListSuccess(userList.data));
    }
  } catch (error) {
    yield put(getUserListFailure(error));
  }
}

/**
 * GET WORKERS LIST
 */
function* getWorkersListS() {
  try {
    const workerList = yield call(getWorkerListRequest);
    if (workerList.message) {
      yield put(getWorkersListFailure(workerList.message));
    } else {
      yield put(getWorkersListSuccess(workerList.data));
    }
  } catch (error) {
    yield put(getWorkersListFailure(error));
  }
}


/**
 * GET USER BY ID
 */
function* getUserByIdS (payload) {
  const id = payload.payload;
  try {
    const user = yield call (getPersonByIdRequest, id);
    if (user.message) {
      yield put (getPersonByIdFailure (user.message));
    } else {
      yield put (getPersonByIdSuccess (user.data));
    }
  } catch (error) {
    yield put (getPersonByIdFailure (error));
  }
}


/**
 * GET USER
 */
export function* updateUserWatcher() {
  yield takeEvery(USER_UPDATE, updateUserS);
}

/**
 * GET USERS LIST
 */
export function* getUserListWatcher() {
  yield takeEvery(GET_USERS, getUserListS);
}

/**
 * GET WORKERS LIST
 */
export function* getWorkersListWatcher() {
  yield takeEvery(GET_WORKERS, getWorkersListS);
}

/**
 * Create User
 */
export function* createUsertWatcher() {
  yield takeEvery(ADD_USER, createUserWithEmailPasswordS);
}

/**
 * DELETE User
 */
export function* deleteUsertWatcher() {
  yield takeEvery(DELETE_USER, deleteUserS);
}
/**
 * DELETE User
 */
export function* getPersonByIdWatcher() {
  yield takeEvery(GET_USER_BY_ID, getUserByIdS);
}

/**
 * Auth Root Saga
 */
export default function* rootSaga() {
  yield all([
    fork(updateUserWatcher),
    fork(getUserListWatcher),
    fork(createUsertWatcher),
    fork(deleteUsertWatcher),
    fork(getWorkersListWatcher),  
    fork(getPersonByIdWatcher),

  ]);
}
