import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  showModal,
  LOGIN_MODULE,
  SIGNUP_MODULE,
  SLIDER_COMPONENT
} from "../../modules/modal.actions";
import PrimaryHeader from "../PrimaryHeader";
import WorkExpModal from "../../modules/component/WorkExpModal";
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
    loading: state,
    userProfileInfo: state.feed.userProfileInfo
  };
};
const PrimaryHeaderContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PrimaryHeader)
);

export default PrimaryHeaderContainer;
