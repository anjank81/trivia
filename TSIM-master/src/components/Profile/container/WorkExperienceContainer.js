import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  workExperienceEvent,
  volunteerExperienceEvent,
  educationExperienceEvent,
  certificationExperienceEvent,
  publicationExperienceEvent,
  patentExperienceEvent,
  awardsExperienceEvent,
  profileEvent,
  getProfileDetails,
  awardExperienceEvent
} from "../../../actions/profile.action";
import WorkExp from "../../modules/component/WorkExpModal";
import { showModal, WORKEXP_MODAL } from "../../modules/modal.actions";
// import Jobline from "../../modules/component/Jobline";
const mapDispatchToProps = dispatch => {
  return {
    showWorkExpEvent: data => {
      dispatch(showModal(WORKEXP_MODAL, data));
    },
    workExperienceEvent: userDetails => {
      dispatch(workExperienceEvent(userDetails));
    },
    volunteerExperienceEvent: userDetails => {
      dispatch(volunteerExperienceEvent(userDetails));
    },
    educationExperienceEvent: userDetails => {
      dispatch(educationExperienceEvent(userDetails));
    },
    certificationExperienceEvent: userDetails => {
      dispatch(certificationExperienceEvent(userDetails));
    },
    publicationExperienceEvent: userDetails => {
      dispatch(publicationExperienceEvent(userDetails));
    },
    patentExperienceEvent: userDetails => {
      dispatch(patentExperienceEvent(userDetails));
    },
    awardExperienceEvent: userDetails => {
      dispatch(awardExperienceEvent(userDetails));
    },
    getProfileDetails: data => {
      dispatch(getProfileDetails(data));
    }
  };
};

const mapStateToProps = state => {
  return {
    loading: state,
    milestoneDetails: state.profile.milestoneDetails,
    workExperienceEvent: state.profile.workExperienceEvent,
    volunteerExperienceEvent: state.profile.volunteerExperienceEvent,
    education: state.profile.education,
    certificationExperienceEvent: state.profile.certificationExperienceEvent,
    publication: state.profile.publication,
    patent: state.profile.patent,
    awardExperienceEvent: state.profile.awardExperienceEvent,
    profileDetails: state.profile.profileDetails,
    userProfileDetails: state.profile.userProfileDetails
  };
};
const AddWorkExperienceContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(WorkExp)
);

export default AddWorkExperienceContainer;
