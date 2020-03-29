import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ProfileModal from "../../modules/component/ProfileModal";
import WorkExpModal from "../../modules/component/WorkExpModal";
import {
  showModal,
  CENTER_MODULE_DEMO,
  SHOW_MILESTONES,
  WORKEXP_MODAL
} from "../../modules/modal.actions.js";
import {
  profileEvent,
  getProfileDetails
} from "../../../actions/profile.action";

const mapDispatchToProps = dispatch => {
  return {
    showCliqCenterModule: data => {
      dispatch(showModal(CENTER_MODULE_DEMO, data));
    },
    profileEvent: userDetails => {
      dispatch(profileEvent(userDetails));
    },
    showMilestonesEvent: data => {
      dispatch(showModal(SHOW_MILESTONES, data));
    },
    showWorkExpEvent: data => {
      dispatch(showModal(WORKEXP_MODAL, data));
    },
    getProfileDetails: data => {
      dispatch(getProfileDetails(data));
    }
  };
};

const mapStateToProps = state => {
  return {
    loading: state,
    profileDetails: state.profile.profileDetails,
    userProfileDetails: state.profile.userProfileDetails
  };
};

const ProfileModalContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProfileModal, WorkExpModal)
);

export default ProfileModalContainer;
