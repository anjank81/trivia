import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  showModal,
  USER_POST_MODAL,
  SELECT_EVENT_MODULE,
  TOPIC_SELECTION,
  REGISTER_DETAILS_MODAL,
  USER_SHARE_MODAL
} from "../../modules/modal.actions";
import {
  updateImageArr,
  getTopPicks,
  getRecommend,
  getFeed,
  getUserProfileInfo,
  getUserInterest,
  postFeedLike,
  getFeedComment,
  postFeedComment
} from "../../../actions/feed.actions";
import {
  postBlogLike,
  getBlogComment,
  postBlogComment
} from "../../../actions/blog.action";
import {
  getRegisterEvent,
  addUserIntrest
} from "../../../actions/event.action";
import Feed from "../Feed";
const mapDispatchToProps = dispatch => {
  return {
    showUserPostModal: data => {
      dispatch(showModal(USER_POST_MODAL, data));
    },
    showUserShareModal: data =>{
      dispatch(showModal(USER_SHARE_MODAL,data))
    },
    showRegisterDetailsModule: data => {
      dispatch(showModal(REGISTER_DETAILS_MODAL, data));
    },
    showEventSelector: data => {
      dispatch(showModal(TOPIC_SELECTION, data));
    },
    postFeedLike: data => {
      dispatch(postFeedLike(data));
    },
    postBlogLike: blogDetails => {
      dispatch(postBlogLike(blogDetails));
    },
    getBlogComment: id => {
      dispatch(getBlogComment(id));
    },
    postBlogComment: data => {
      dispatch(postBlogComment(data));
    },
    addUserIntrest: details => {
      dispatch(addUserIntrest(details));
    },
    updateImages: data => {
      dispatch(updateImageArr(data));
    },
    getTopPicks: () => {
      dispatch(getTopPicks());
    },
    getRecommend: () => {
      dispatch(getRecommend());
    },
    getFeed: (id, prevdata) => {
      dispatch(getFeed(id, prevdata));
    },
    showRegisterDetailsModule: data => {
      dispatch(showModal(REGISTER_DETAILS_MODAL, data));
    },
    getRegisterEvent: id => {
      dispatch(getRegisterEvent(id));
    },
    getUserProfileInfo: () => {
      dispatch(getUserProfileInfo());
    },
    getUserInterest: () => {
      dispatch(getUserInterest());
    },
    getFeedComment: id => {
      dispatch(getFeedComment(id));
    },
    postFeedComment: (data, id) => {
      dispatch(postFeedComment(data, id));
    }
  };
};

const mapStateToProps = state => {
  return {
    loading: state.feed.loader,
    feedLoader: state.feed.feedLoader,
    error: state.feed.error,
    recommendedList: state.feed.recommendedList,
    topPicksList: state.feed.topPicksList,
    feedStatus: state.feed.feedStatus,
    blogLikeDetails: state.blog.blogLikeDetails,
    feeds: state.feed.feeds,
    // registerEventList: state.event.registerEventList,
    userProfileInfo: state.feed.userProfileInfo,
    userIntrestList: state.feed.userIntrestList,

    postLikeDetails: state.feed.postLikeDetails,
    comments: state.feed.comments,
    feedPostCommentDetails: state.feed.feedPostCommentDetails
  };
};
const FeedContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Feed)
);

export default FeedContainer;
