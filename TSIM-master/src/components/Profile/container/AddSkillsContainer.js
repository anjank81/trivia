import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  postUserSkills,
  getUserSkill,
  getProfileDetails
} from "../../../actions/profile.action";
import AddSkills from "../../modules/component/AddSkills";
import { showModal } from "../../modules/modal.actions";
const mapDispatchToProps = dispatch => {
  return {
    postUserSkills: details => {
      dispatch(postUserSkills(details));
    },
    getUserSkill: key => {
      dispatch(getUserSkill(key));
    },
    getProfileDetails: data => {
      dispatch(getProfileDetails(data));
    }
  };
};

const mapStateToProps = state => {
  return {
    loading: state,
    getUserSkills: state.profile.userProfileDetails.skills,
    postUserSkills: state.profile.postUserSkills,
    profileDetails: state.profile.profileDetails
  };
};
const AddSkillsContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AddSkills)
);

export default AddSkillsContainer;
