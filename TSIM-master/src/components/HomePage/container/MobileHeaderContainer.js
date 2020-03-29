import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  showModal,
  LOGIN_MODULE,
  SIGNUP_MODULE,
  SLIDER_COMPONENT
} from "../../modules/modal.actions";
import MobileHeader from "../MobileHeader";
const mapDispatchToProps = dispatch => {
  return {
    showLoginModule: data => {
      dispatch(showModal(LOGIN_MODULE, data));
    },
    showSignUpModule: data => {
      dispatch(showModal(SIGNUP_MODULE, data));
    },
    showsliderComponent: data => {
      dispatch(showModal(SLIDER_COMPONENT, data));
    }
  };
};
const mapStateToProps = state => {
  return {
    loading: state
  };
};
const MobileHeaderContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MobileHeader)
);

export default MobileHeaderContainer;
