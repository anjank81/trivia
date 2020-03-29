import * as loginAction from "../actions/loginSignup.action";
import * as signUpAction from "../actions/loginSignup.action";

const loginSignup = (
  state = {
    loginDetails: null,
    status: null,
    error: null,
    loginError: null,
    loading: false,
    signUpDetails: null,
    setPassword: null,
    resetPassword: null,
    countryValue: null,
    signUpGoogleDetails: null
  },
  action
) => {
  switch (action.type) {
    case loginAction.RESET_USER_PASSWORD_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loginError: null,
        loading: true
      });

    case loginAction.RESET_USER_PASSWORD_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        resetPassword: action.passwordResetResponse
      });
    case loginAction.RESET_USER_PASSWORD_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    case loginAction.LOGIN_USER_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loginError: null,
        loading: true
      });

    case loginAction.LOGIN_USER_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        loginDetails: action.loginDetails
      });
    case loginAction.LOGIN_USER_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        loginError: action.error
      });

    case signUpAction.SIGN_UP_USER_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case signUpAction.SIGN_UP_USER_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        signUpDetails: action.signUpDetails
      });
    case signUpAction.SIGN_UP_USER_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    case loginAction.FORGOT_USER_PASSWORD_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case loginAction.FORGOT_USER_PASSWORD_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        setPassword: action.userPasswordReset
      });
    case loginAction.FORGOT_USER_PASSWORD_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    case loginAction.COUNTRIES_USER_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case loginAction.COUNTRIES_USER_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        countryValue: action.countryDetails
      });
    case loginAction.COUNTRIES_USER_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    case signUpAction.SIGN_UP_GOOGLE_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case signUpAction.SIGN_UP_GOOGLE_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        signUpGoogleDetails: action.signUpGoogleDetails
      });
    case signUpAction.SIGN_UP_GOOGLE_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    default:
      return state;
  }
};
export default loginSignup;
