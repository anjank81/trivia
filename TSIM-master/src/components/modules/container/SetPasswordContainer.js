import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import {
//   showModal,
//   FORGOT_PASSWORD_MODULE,
//   LOGIN_MODULE,
//   SIGNUP_MODULE
// } from "../modal.actions.js";
import { postResetPassword } from "../../../actions/loginSignup.action";
import SetPassword from "../../SetPassword/SetPassword";
const mapDispatchToProps = dispatch => {
  return {
    postResetPassword: data => {
      dispatch(postResetPassword(data));
    }
  };
};
const mapStateToProps = state => {
  return {
    resetPassword: state.loginSignup.resetPassword
  };
};
const SetPasswordContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SetPassword)
);

export default SetPasswordContainer;
