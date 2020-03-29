import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import {
//   showModal,
//   FORGOT_PASSWORD_MODULE,
//   LOGIN_MODULE,
//   SIGNUP_MODULE
// } from "../modal.actions.js";
import { postForgotPassword } from "../../../actions/loginSignup.action";
import ForgotPassword from "../../ForgotPassword/ForgotPassword";
const mapDispatchToProps = dispatch => {
  return {
    postForgotPassword: data => {
      dispatch(postForgotPassword(data));
    }
  };
};
const mapStateToProps = state => {
  return {
    setPassword: state.loginSignup.setPassword
  };
};
const ForgotPasswordContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)
);

export default ForgotPasswordContainer;
