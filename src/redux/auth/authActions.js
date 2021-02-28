import { createAction } from '@reduxjs/toolkit';

const registerRequest = createAction('auth/registerRequest');
const registerSuccess = createAction('auth/registerSuccess');
const registerError = createAction('auth/registerError');

const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction('auth/loginSuccess');
const loginError = createAction('auth/loginError');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutSuccess');
const logoutError = createAction('auth/logoutError');

const getCurrentUserRequest = createAction('auth/getCurrentContactRequest');
const getCurrentUserSuccess = createAction('auth/getCurrentContactSuccess');
const getCurrentUserError = createAction('auth/getCurrentContactError');

const actions = {
    registerRequest,
    registerSuccess,
    registerError,

    loginRequest,
    loginSuccess,
    loginError,

    logoutRequest,
    logoutSuccess,
    logoutError,

    getCurrentUserRequest,
    getCurrentUserSuccess,
    getCurrentUserError
};

export default actions;