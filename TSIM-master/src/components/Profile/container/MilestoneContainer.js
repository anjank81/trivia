import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  milestoneEvent,
  getMilestoneDetails,
  getProfileDetails
} from "../../../actions/profile.action";
import AddMilestones from "../AddMilestones";
const mapDispatchToProps = dispatch => {
  return {
    milestoneEvent: data => {
      dispatch(milestoneEvent(data));
    },
    getMilestoneDetails: data => {
      dispatch(getMilestoneDetails(data));
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
    postMilestoneDetails: state.profile.postMilestoneDetails
  };
};
const AddMilestoneContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AddMilestones)
);

export default AddMilestoneContainer;
