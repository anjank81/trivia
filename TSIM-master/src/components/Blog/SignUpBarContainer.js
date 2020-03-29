import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  showModal,
  LOGIN_MODULE,
  SIGNUP_MODULE
} from "../modules/modal.actions";
import { getsubscription } from "../../actions/blog.action";
import SignUpBar from "./SignUpBar";
import { displayToast } from "../modules/toast.actions";
const mapDispatchToProps = dispatch => {
  return {
    showLoginModule: data => {
      dispatch(showModal(SIGNUP_MODULE, data));
    },
    getsubscription: email => {
      dispatch(getsubscription(email));
    },
    showToast: msg => {
      dispatch(displayToast(msg));
    }
  };
};
const mapStateToProps = state => {
  return {
    subscribtionDetails: state.blog.subscribtionDetails,
    loading: state.blog.loading
  };
};
const SignUpBarContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SignUpBar)
);

export default SignUpBarContainer;
