import {
  USER_UPDATE,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILURE,
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  DELETE_USER,
  DELETE_USER_FAILURE,
  DELETE_USER_SUCCESS,
  GET_WORKERS,
  GET_WORKERS_SUCCESS,
  GET_WORKERS_FAILURE,
  GET_USER_BY_ID,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_FAILURE,
  VIEW_USER_DIALOG,
  EDIT_USER_DIALOG,
  GET_WORKER_BY_ID,
  GET_WORKER_BY_ID_SUCCESS,
  GET_WORKER_BY_ID_FAILURE,
} from "./types";

/**
 * Redux Action update user
 */
export const updateUser = user => ({
  type: USER_UPDATE,
  payload: user,
});

/**
 * Redux Action update User success
 */
export const updateUserSuccess = user => ({
  type: USER_UPDATE_SUCCESS,
  payload: user,
});

/**
 * Redux Action update User failure
 */
export const updateUserFailure = error => ({
  type: USER_UPDATE_FAILURE,
  payload: error,
});

export const getUserList = () => ({
  type: GET_USERS,
});

/**
 * Redux Action update User success
 */
export const getUserListSuccess = userList => ({
  type: GET_USERS_SUCCESS,
  payload: userList,
});

/**
 * Redux Action update User failure
 */
export const getUserListFailure = error => ({
  type: GET_USERS_FAILURE,
  payload: error,
});

export const manageViewUserDialog = (value) => ({
  type: VIEW_USER_DIALOG,
  payload: value,
});


export const manageEditUserDialog = (value) => ({
  type: EDIT_USER_DIALOG,
  payload: value,
});

/**
 * Redux Action add User
 */
export const addUser = user => ({
  type: ADD_USER,
  payload: user,
});

/**
 * Redux Action add User success
 */
export const addUserSuccess = user => ({
  type: ADD_USER_SUCCESS,
  payload: user,
});

/**
 * Redux Action add User failure
 */
export const addUserFailure = error => ({
  type: ADD_USER_FAILURE,
  payload: error,
});

/**
 * Redux Action detelet User
 */
export const deteletUser = id => ({
  type: DELETE_USER,
  payload: id,
});

/**
 * Redux Action detelet User success
 */
export const deleteUserSuccess = () => ({
  type: DELETE_USER_SUCCESS
});

/**
 * Redux Action detelet User failure
 */
export const deteletUserFailure = error => ({
  type: DELETE_USER_FAILURE,
  payload: error,
});

/**
 * Redux Action add User
 */
export const getWorkersList = () => (console.log(`en la accion para buscar trabajadores`),{
  type: GET_WORKERS
});

/**
 * Redux Action add User success
 */
export const getWorkersListSuccess = workersList => ({
  type: GET_WORKERS_SUCCESS,
  payload: workersList,
});

/**
 * Redux Action add User failure
 */
export const getWorkersListFailure = error => ({
  type: GET_WORKERS_FAILURE,
  payload: error,
});

export const getWorkersById = (id) => (console.log(`en la accion para buscar trabajadores por Id`),{
  type: GET_WORKER_BY_ID,
  payload: id
});

/**
 * Redux Action add User success
 */
export const getWorkersByIdSuccess = worker => ({
  type: GET_WORKER_BY_ID_SUCCESS,
  payload: worker,
});

/**
 * Redux Action add User failure
 */
export const getWorkersByIdFailure = error => ({
  type: GET_WORKER_BY_ID_FAILURE,
  payload: error,
});


/**
 * Redux Action add User
 */
export const getPersonById = (id) => ({
  type: GET_USER_BY_ID,
  payload: id
});

/**
 * Redux Action add User success
 */
export const getPersonByIdSuccess = user => ({
  type: GET_USER_BY_ID_SUCCESS,
  payload: user,
});

/**
 * Redux Action add User failure
 */
export const getPersonByIdFailure = error => ({
  type: GET_USER_BY_ID_FAILURE,
  payload: error,
});

