import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  showModal,
  LOGIN_MODULE,
  SLIDER_COMPONENT,
  SELECT_EVENT_MODULE,
  WELCOME_MODULE
} from "../modal.actions.js";
import {
  postSignUp,
  getCountry,
  postGoogleSignUp
} from "../../../actions/loginSignup.action";
import SignUpModule from "../component/SignUpModule.js";
import { displayToast } from "../toast.actions";
const mapDispatchToProps = dispatch => {
  return {
    showLoginModal: data => {
      dispatch(showModal(LOGIN_MODULE, data));
    },
    showTour: data => {
      dispatch(showModal(SLIDER_COMPONENT, data));
    },
    showEventSelector: data => {
      dispatch(showModal(SELECT_EVENT_MODULE, data));
    },
    postSignUp: userDetails => {
      dispatch(postSignUp(userDetails));
    },
    getCountry: () => {
      dispatch(getCountry());
    },
    showWelcomeModal: data => {
      dispatch(showModal(WELCOME_MODULE, data));
    },

    showToast: msg => {
      dispatch(displayToast(msg));
    },
    postGoogleSignUp: userDetails => {
      dispatch(postGoogleSignUp(userDetails));
    }
  };
};
const mapStateToProps = state => {
  return {
    SignUpDetails: state.loginSignup,
    countryValue: state.loginSignup.countryValue,
    signUpGoogleDetails: state.loginSignup.signUpGoogleDetails
  };
};
const SignUpModuleContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SignUpModule)
);

export default SignUpModuleContainer;
