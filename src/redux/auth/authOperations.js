import axios from 'axios';
import authActions from './authActions';
import { error, success, info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com/';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`; 
    },
    unset() {
        axios.defaults.headers.common.Authorization = ''
    },
};

const register = credentials => dispatch => {
    dispatch(authActions.registerRequest());
    axios
        .post('/users/signup', credentials)
        .then(response => {
            token.set(response.data.token);
            dispatch(authActions.registerSuccess(response.data));

             if (response.status === 201) {
                success({
                    title: 'Success',
                    text: 'User created!'
                });
            }
        })
        .catch(errors => {
            dispatch(authActions.registerError(errors.message))

            if (errors.response.status === 400) {
                error({
                    title: 'Error',
                    text: 'User creation error! Please try again!'
                });
            } else if (errors.response.status === 500) {
                error({
                    title: 'Error',
                    text: 'Oops! Server error! Please try later!'
                });
            } else {
                error({
                    title: 'Error',
                    text: 'Something went wrong!'
                });
            };
        }
    );
};

const logIn = credentials => dispatch => {
    dispatch(authActions.loginRequest());
    axios
        .post('/users/login', credentials)
        .then(response => {
            token.set(response.data.token);
            dispatch(authActions.loginSuccess(response.data));

            if (response.status === 200) {
                success({
                    title: 'Success',
                    text: 'You are successfully logged in'
                })
            }
        })
        .catch(errors => {
            dispatch(authActions.loginError(errors))

            if (errors) {
                error({
                    title: 'Error',
                    text: 'Login error! Try again!'
                });
            }
        }
    );
};

const logOut = () => dispatch => {
    dispatch(authActions.logoutRequest());

    axios
        .post('/users/logout')
        .then((response) => {
            token.unset();
            dispatch(authActions.logoutSuccess(response));

            if (response.status === 200) {
                info({
                    title: 'Info',
                    text: 'User is logged out'
                })
            }
        })
        .catch(errors => {
            dispatch(authActions.logoutError(errors.message));

              if (errors.response.status === 401) {
                error({
                    title: 'Error',
                    text: 'Missing header with authorization token! Please try again!'
                });
            } else if (errors.response.status === 500) {
                error({
                    title: 'Error',
                    text: 'Oops! Server error! Please try later!'
                });
            } else {
                error({
                    title: 'Error',
                    text: 'Something went wrong!'
                });
            };
        })
};


const getCurrentUser = () => (dispatch, getState) => {
    const {
        auth: { token: persistedToken },
    } = getState();

    if (!persistedToken) {
        return
    };

    token.set(persistedToken);
    dispatch(authActions.getCurrentUserRequest);

    axios
        .get('/users/current')
        .then(({ data }) =>
            dispatch(authActions.getCurrentUserSuccess(data)))
        .catch(errors => dispatch(authActions.getCurrentUserError(errors.message)))
};

const authOperations = {
    register,
    logIn,
    logOut,
    getCurrentUser
};

export default authOperations;