import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  postUserIntrests,
  getUserInterests
} from "../../../actions/profile.action";
import AddInterest from "../../modules/component/AddInterest";

const mapDispatchToProps = dispatch => {
  return {
    postUserIntrests: details => {
      dispatch(postUserIntrests(details));
    },
    getUserInterests: key => {
      dispatch(getUserInterests(key));
    }
  };
};

const mapStateToProps = state => {
  return {
    loading: state,
    getUserInterest: state.profile.getUserInterest,
    postUserInterest: state.profile.postUserInterest
  };
};
const AddInterestsContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AddInterest)
);

export default AddInterestsContainer;
