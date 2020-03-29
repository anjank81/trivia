import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getUserInterest,
  addUserInterest
} from "../../../actions/feed.actions";
import { displayToast } from "../toast.actions";
import TopicsPage from "../component/TopicsPage";
const mapDispatchToProps = dispatch => {
  return {
    getUserInterest: () => {
      dispatch(getUserInterest());
    },
    addUserInterest: val => {
      dispatch(addUserInterest(val));
    },
    showToast: msg => {
      dispatch(displayToast(msg));
    }
  };
};
const mapStateToProps = state => {
  return {
    userIntrestList: state.feed.userIntrestList,
    addUserIntrestDetails: state.feed.addUserIntrestDetails
  };
};
const TopicsPageContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TopicsPage)
);

export default TopicsPageContainer;
