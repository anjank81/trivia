import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  showModal,
  LOGIN_MODULE,
  SLIDER_COMPONENT,
  SELECT_EVENT_MODULE
} from "../modal.actions.js";
import WelcomeModule from "../component/WelcomeModule";

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
    }
  };
};
const mapStateToProps = state => {
  return {
    SignUpDetails: state.loginSignup,
    countryValue: state.loginSignup.countryValue
  };
};
const WelcomeModuleContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(WelcomeModule)
);

export default WelcomeModuleContainer;
