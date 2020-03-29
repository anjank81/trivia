import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  showModal,
  LOGIN_MODULE,
  SIGNUP_MODULE
} from "../../modules/modal.actions";
import SecondaryHeader from "../SecondaryHeader";
const mapDispatchToProps = dispatch => {
  return {
    showLoginModule: data => {
      dispatch(showModal(LOGIN_MODULE, data));
    },
    showSignUpModule: data => {
      dispatch(showModal(SIGNUP_MODULE, data));
    }
  };
};
const mapStateToProps = state => {
  return {
    loading: state
  };
};
const SecondaryHeaderContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SecondaryHeader)
);

export default SecondaryHeaderContainer;
