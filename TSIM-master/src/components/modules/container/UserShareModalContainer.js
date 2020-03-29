import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { displayToast } from "../toast.actions";
import { getFeed, postFeed, getLabels } from "../../../actions/feed.actions";
import UserShareModal from "../../Feed/UserShareModal";
import {getUserProfileInfo} from "../../../actions/feed.actions"
const mapDispatchToProps = dispatch => {
  return {
    postFeed: data => {
      dispatch(postFeed(data));
    },
    getFeed: data => {
      dispatch(getFeed(data));
    },
    displayToast: message => {
      dispatch(displayToast(message));
    },
    getLabels: () => {
      dispatch(getLabels());
    },
    getUserProfileInfo: () => {
        dispatch(getUserProfileInfo());
      }
  };
};

const mapStateToProps = state => {
  return {
    loading: state.feed.loading,
    error: state.feed.error,
    feedDetails: state.feed.feedDetails,
    labelsList: state.feed.labelsList,
    userProfileInfo:state.feed.userProfileInfo

  };
};
const UserShareModalContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserShareModal)
);

export default UserShareModalContainer;
