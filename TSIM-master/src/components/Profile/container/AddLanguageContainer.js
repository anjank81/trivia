import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  getUserLanguage,
  postUserLanguage,
  getProfileDetails
} from "../../../actions/profile.action";
import AddLanguage from "../../modules/component/AddLanguage";
const mapDispatchToProps = dispatch => {
  return {
    postUserLanguage: details => {
      dispatch(postUserLanguage(details));
    },
    getUserLanguage: key => {
      dispatch(getUserLanguage(key));
    },
    getProfileDetails: data => {
      dispatch(getProfileDetails(data));
    }
  };
};

const mapStateToProps = state => {
  return {
    loading: state,
    getUserLanguages: state.profile.userProfileDetails.languages,
    postUser: state.profile.postUserLanguages,
    profileDetails: state.profile.profileDetails
  };
};
const AddLanguageContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AddLanguage)
);

export default AddLanguageContainer;
