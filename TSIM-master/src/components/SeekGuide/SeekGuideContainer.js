import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { showModal, SIGNUP_MODULE } from "../modules/modal.actions";
import SeekGuide from "./SeekGuide";
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
const SeekGuideContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SeekGuide)
);

export default SeekGuideContainer;
