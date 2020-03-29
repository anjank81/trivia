import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { displayToast } from "../toast.actions";
import { getFeed, postFeed, getLabels } from "../../../actions/feed.actions";
import UserPostModal from "../../Feed/UserPostModal";
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
    }
  };
};

const mapStateToProps = state => {
  return {
    loading: state.feed.loading,
    error: state.feed.error,
    feedDetails: state.feed.feedDetails,
    labelsList: state.feed.labelsList
  };
};
const UserPostModalContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserPostModal)
);

export default UserPostModalContainer;
