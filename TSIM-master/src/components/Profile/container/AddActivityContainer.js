import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  getUserActivity,
  postUserActivity
} from "../../../actions/profile.action";
import AddActivity from "../../modules/component/AddActivity";
const mapDispatchToProps = dispatch => {
  return {
    postUserActivity: details => {
      dispatch(postUserActivity(details));
    },
    getUserActivity: key => {
      dispatch(getUserActivity(key));
    }
  };
};

const mapStateToProps = state => {
  return {
    loading: state,
    getUserActivities: state.profile.getUserActivities,
    postUserActivities: state.profile.postUserActivities
  };
};
const AddActivityContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AddActivity)
);

export default AddActivityContainer;
