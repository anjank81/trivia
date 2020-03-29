import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  profileImageExperienceEvent,
  getProfileDetails
} from "../../../actions/profile.action";
import AddMilestones from "../ImageUpload";
import { displayToast } from "../../modules/toast.actions";
const mapDispatchToProps = dispatch => {
  return {
    profileImageExperienceEvent: userDetails => {
      dispatch(profileImageExperienceEvent(userDetails));
    },
    showToast: msg => {
      dispatch(displayToast(msg));
    },
    getProfileDetails: () => {
      dispatch(getProfileDetails());
    }
  };
};

const mapStateToProps = state => {
  return {
    userProfileDetails: state.profile.userProfileDetails,
    userProfileImage: state.profile.profileImage,
    ProfileImage: state.profile.profileImage
  };
};
const AddMilestoneContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AddMilestones)
);

export default AddMilestoneContainer;
