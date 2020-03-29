import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  showModal,
  UPLOAD_PROFILE_IMAGE_MODAL,
  UPLOAD_CV_MODAL,
  ADD_SKILLS,
  ADD_LANGUAGES,
  ADD_ACTIVITIES,
  ADD_INTEREST,
  PROFILE_MODAL,
  SHOW_MILESTONES,
  WORKEXP_MODAL,
  UPLOAD_VIDEO_MODAL,
  SHOW_INTRO_MESSAGE,

} from "../../modules/modal.actions";
import {
  profileEvent,
  milestoneEvent,
  getProfileDetails,
  getMilestoneDetails,
  profileImageExperienceEvent,
  getProfilePictureDetails,
  getUserSkill,
  getUserLanguage
  // postProfileEdit
} from "../../../actions/profile.action";
import Profile from "../Profile";
import AddMilestones from "../AddMilestones";
import WorkExpModal from "../../modules/component/WorkExpModal";
import UploadVideoModal from "../../modules/component/UploadVideoModal";
import ProfileModal from "../../modules/component/ProfileModal";
import InstructionModal from "../../Profile/InstructionModal";

const mapDispatchToProps = dispatch => {
  return {
    showImageUploadModal: data => {
      dispatch(showModal(UPLOAD_PROFILE_IMAGE_MODAL, data));
    },
    showUploadCvModal: data => {
      dispatch(showModal(UPLOAD_CV_MODAL, data));
    },
    showAddSkillModal: data => {
      dispatch(showModal(ADD_SKILLS, data));
    },
    showAddLanguagesModal: data => {
      dispatch(showModal(ADD_LANGUAGES, data));
    },
    getUserSkill: () => {
      dispatch(getUserSkill());
    },
    getUserLanguage: () => {
      dispatch(getUserLanguage());
    },
    showAddInterestModal: data => {
      dispatch(showModal(ADD_INTEREST, data));
    },
    showAddActivityModal: data => {
      dispatch(showModal(ADD_ACTIVITIES, data));
    },
    showProfileModal: data => {
      dispatch(showModal(PROFILE_MODAL, data));
    },
    profileEvent: userDetails => {
      dispatch(profileEvent(userDetails));
    },
    showMilestonesEvent: data => {
      dispatch(showModal(SHOW_MILESTONES, data));
    },
    postMilestoneData: userDetails => {
      dispatch(milestoneEvent(userDetails));
    },
    showWorkExpEvent: data => {
      dispatch(showModal(WORKEXP_MODAL, data));
    },
    getProfileDetails: data => {
      dispatch(getProfileDetails(data));
    },
    getMilestoneDetails: data => {
      dispatch(getMilestoneDetails(data));
    },
    postProfileImageData: userDetails => {
      dispatch(profileImageExperienceEvent(userDetails));
    },
    showUploadVideoEvent: data => {
      dispatch(showModal(UPLOAD_VIDEO_MODAL, data));
    },
    showInstructionModal: data => {
      dispatch(showModal(SHOW_INTRO_MESSAGE, data));
    }
    // postProfileEdit: data => {
    //   dispatch(postProfileEdit(data));
    // }
    // postIntroVideoData: data => {
    //   dispatch(showModal(UPLOAD_VIDEO_MODAL, data));
    // }
  };
};

const mapStateToProps = state => {
  return {
    loading: state.profile.loading,
    profileDetails: state.profile.profileDetails,
    milestoneDetails: state.profile.milestoneDetails,
    userProfileDetails: state.profile.userProfileDetails,
    getMilestoneDetails: state.profile.getMilestoneDetails,
    ProfileImage: state.profile.profileImage,
    data: state.profile.data,
    userSkillGetMessage: state.profile.userSkillGetMessage,
    userLanguageGetMessage: state.profile.userLanguageGetMessage,
    postSkillStatus: state.profile.postUserSkills,
    postLanguageStatus: state.profile.postLanguageStatus,
    postuserLanguage: state.profile.postuserLanguage
    // getUserIntroVideo: state.profile.getVideo
  };
};
const ProfileContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(
    Profile,
    AddMilestones,
    WorkExpModal,
    ProfileModal,
    UploadVideoModal,
    UploadVideoModal,
    InstructionModal
  )
);

export default ProfileContainer;
