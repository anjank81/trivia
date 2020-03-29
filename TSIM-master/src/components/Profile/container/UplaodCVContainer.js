import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { postCVExperienceEvent } from "../../../actions/profile.action";
import { displayToast } from "../../modules/toast.actions";
import UploadCV from "../UploadCV";
const mapDispatchToProps = dispatch => {
  return {
    postCVExperienceEvent: userDetails => {
      dispatch(postCVExperienceEvent(userDetails));
    },
    showToast: msg => {
      dispatch(displayToast(msg));
    }
  };
};
const mapStateToProps = state => {
  return {
    loading: state,
    pstCvdetails: state.profile.pstCvdetails,
    getCv: state.profile.getCv,
    userProfileDetails: state.profile.userProfileDetails
  };
};
const UploadCVContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UploadCV)
);

export default UploadCVContainer;
