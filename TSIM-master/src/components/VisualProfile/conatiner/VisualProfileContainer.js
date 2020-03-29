import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { showModal, SIGNUP_MODULE } from "../../modules/modal.actions";
import VisualProfilePage from "../VisualProfilePage";
const mapDispatchToProps = dispatch => {
  return {
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
const VisualProfileContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(VisualProfilePage)
);

export default VisualProfileContainer;
