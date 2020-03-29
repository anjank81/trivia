import {
  SUCCESS,
  FAILURE,
  REQUESTING,
  ERROR,
  ACCESS_TOKEN,
  USER_DETAILS
} from "../utils/constant";
import * as Cookie from "../utils/Cookie.js";
import { displayToast } from "../components/modules/toast.actions";

import { get, post } from "../utils/apiRequest.js";
export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const SIGN_UP_USER_REQUEST = "SIGN_UP_USER_REQUEST";
export const SIGN_UP_USER_SUCCESS = "SIGN_UP_USER_SUCCESS";
export const SIGN_UP_USER_FAILURE = "SIGN_UP_USER_FAILURE";

export const FORGOT_USER_PASSWORD_REQUEST = "FORGOT_USER_PASSWORD_REQUEST";
export const FORGOT_USER_PASSWORD_SUCCESS = "FORGOT_USER_PASSWORD_SUCCESS";
export const FORGOT_USER_PASSWORD_FAILURE = "FORGOT_USER_PASSWORD_FAILURE";

export const RESET_USER_PASSWORD_REQUEST = "RESET_USER_PASSWORD_REQUEST";
export const RESET_USER_PASSWORD_SUCCESS = "RESET_USER_PASSWORD_SUCCESS";
export const RESET_USER_PASSWORD_FAILURE = "RESET_USER_PASSWORD_FAILURE";

export const COUNTRIES_USER_REQUEST = "COUNTRIES_USER_REQUEST";
export const COUNTRIES_USER_SUCCESS = "COUNTRIES_USER_SUCCESS";
export const COUNTRIES_USER_FAILURE = "COUNTRIES_USER_FAILURE";

export const SIGN_UP_GOOGLE_REQUEST = "SIGN_UP_GOOGLE_REQUEST";
export const SIGN_UP_GOOGLE_SUCCESS = "SIGN_UP_GOOGLE_SUCCESS";
export const SIGN_UP_GOOGLE_FAILURE = "SIGN_UP_GOOGLE_FAILURE";

export function signUpGoogleRequest() {
  return {
    type: SIGN_UP_GOOGLE_REQUEST,
    status: REQUESTING
  };
}

export function signUpGoogleSuccess(signUpGoogleDetails) {
  return {
    type: SIGN_UP_GOOGLE_SUCCESS,
    status: SUCCESS,
    signUpGoogleDetails
  };
}

export function signUpGoogleFailure(error) {
  return {
    type: SIGN_UP_GOOGLE_FAILURE,
    status: ERROR,
    error
  };
}

export function postGoogleSignUp(userGoogleDetails) {
  return async dispatch => {
    dispatch(signUpGoogleRequest());
    try {
      let url = `users/ssoLogin`;
      const result = await post(url, userGoogleDetails);
      const resultJson = await result.data;
      if (resultJson.message) {
        throw new Error(resultJson.message);
      }

      Cookie.createCookie(ACCESS_TOKEN, resultJson.token);
      Cookie.createCookie(USER_DETAILS, JSON.stringify(resultJson));
      return dispatch(signUpGoogleSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast(e.message));
      return dispatch(signUpGoogleFailure(e.message));
    }
  };
}

export function countriesUserRequest() {
  return {
    type: COUNTRIES_USER_REQUEST,
    status: REQUESTING
  };
}

export function countriesUserSuccess(countryDetails) {
  return {
    type: COUNTRIES_USER_SUCCESS,
    status: SUCCESS,
    countryDetails
  };
}

export function countriesUserFailure(error) {
  return {
    type: COUNTRIES_USER_FAILURE,
    status: ERROR,
    error
  };
}

export function getCountry() {
  return async dispatch => {
    dispatch(countriesUserRequest());
    try {
      let url = `/countries?limit=1000`;
      const result = await get(url);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }

      return dispatch(countriesUserSuccess(resultJson));
    } catch (e) {
      return dispatch(countriesUserFailure(e.message));
    }
  };
}

export function resetUserPasswordRequest() {
  return {
    type: RESET_USER_PASSWORD_REQUEST,
    status: REQUESTING
  };
}

export function resetUserPasswordSuccess(passwordResetResponse) {
  return {
    type: RESET_USER_PASSWORD_SUCCESS,
    status: SUCCESS,
    passwordResetResponse
  };
}

export function resetUserPasswordFailure(error) {
  return {
    type: RESET_USER_PASSWORD_FAILURE,
    status: ERROR,
    error
  };
}

export function postResetPassword(reqBody) {
  return async dispatch => {
    dispatch(resetUserPasswordRequest());
    try {
      let url = `users/resetPassword`;
      const result = await post(url, reqBody);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }

      return dispatch(resetUserPasswordSuccess(resultJson));
    } catch (e) {
      return dispatch(resetUserPasswordFailure(e.message));
    }
  };
}

export function forgotUserPasswordRequest() {
  return {
    type: FORGOT_USER_PASSWORD_REQUEST,
    status: REQUESTING
  };
}

export function forgotUserPasswordSuccess(userPasswordReset) {
  return {
    type: FORGOT_USER_PASSWORD_SUCCESS,
    status: SUCCESS,
    userPasswordReset
  };
}

export function forgotUserPasswordFailure(error) {
  return {
    type: FORGOT_USER_PASSWORD_FAILURE,
    status: ERROR,
    error
  };
}

export function postForgotPassword(email) {
  return async dispatch => {
    dispatch(forgotUserPasswordRequest());
    try {
      let url = `users/forgetPassword`;
      const result = await post(url, email);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      dispatch(displayToast("Password reset link sent to your email"));
      return dispatch(forgotUserPasswordSuccess(resultJson));
    } catch (e) {
      return dispatch(forgotUserPasswordFailure(e.message));
    }
  };
}

export function loginUserRequest() {
  return {
    type: LOGIN_USER_REQUEST,
    status: REQUESTING
  };
}

export function loginUserSuccess(loginDetails) {
  return {
    type: LOGIN_USER_SUCCESS,
    status: SUCCESS,
    loginDetails
  };
}

export function loginUserFailure(error) {
  return {
    type: LOGIN_USER_FAILURE,
    status: ERROR,
    error
  };
}

export function getLogin(userLoginDetails) {
  return async dispatch => {
    dispatch(loginUserRequest());
    try {
      let url = `users/login`;
      const result = await post(url, userLoginDetails);
      const resultJson = await result.data;
      if (resultJson.message) {
        throw new Error(resultJson.message);
      }

      Cookie.createCookie(ACCESS_TOKEN, resultJson.token);
      Cookie.createCookie(USER_DETAILS, JSON.stringify(resultJson));
      return dispatch(loginUserSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast(e.message));
      return dispatch(loginUserFailure(e.message));
    }
  };
}

export function signUpUserRequest() {
  return {
    type: SIGN_UP_USER_REQUEST,
    status: REQUESTING
  };
}

export function signUpUserSuccess(signUpDetails) {
  return {
    type: SIGN_UP_USER_SUCCESS,
    status: SUCCESS,
    signUpDetails
  };
}

export function signUpUserFailure(error) {
  return {
    type: SIGN_UP_USER_FAILURE,
    status: ERROR,
    error
  };
}

export function postSignUp(userSignUpDetails) {
  return async dispatch => {
    dispatch(signUpUserRequest());
    try {
      let url = `users`;
      const result = await post(url, userSignUpDetails);
      const resultJson = await result.data;
      if (resultJson.message) {
        throw new Error(resultJson.message);
      }

      Cookie.createCookie(ACCESS_TOKEN, resultJson.token);
      Cookie.createCookie(USER_DETAILS, JSON.stringify(resultJson));
      return dispatch(signUpUserSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast(e.message));
      return dispatch(signUpUserFailure(e.message));
    }
  };
}
