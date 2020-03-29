import * as feedAction from "../actions/feed.actions";
import concat from "lodash.concat";
import cloneDeep from "lodash.clonedeep";
const initialState = {
  imagesArr: [],

  loading: false,
  error: null,

  userIntrestList: null,

  addUserIntrestDetails: null,
  addUserIntrestStatus: "",

  recommendedList: null,
  topPicksList: null,

  feedDetails: null,
  feedLoader: false,
  feedStatus: null,
  feeds: [],
  previousFeed: [],
  userProfileInfo: null,
  labelsList: null,
  postLikeDetails: null,
  comments: null,
  feedPostCommentDetails: null
};

export function feedReducer(state = initialState, action) {
  let feedArray = [];
  switch (action.type) {
    case feedAction.UPDATE_IMAGE_ARR:
      return {
        ...state,
        imagesArr: action.data
      };
    case feedAction.ADD_USER_INTEREST_REQUEST:
      return Object.assign({}, state, {
        addUserIntrestStatus: action.status,
        loader: true,
        addUserIntrestDetails: null
      });

    case feedAction.ADD_USER_INTEREST_SUCCESS:
      return Object.assign({}, state, {
        addUserIntrestStatus: action.status,
        loader: false,
        addUserIntrestDetails: action.userDetails
      });
    case feedAction.ADD_USER_INTEREST_FAILURE:
      return Object.assign({}, state, {
        addUserIntrestStatus: action.status,
        loader: false,
        error: action.error
      });
    case feedAction.GET_USER_INTRESET_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loader: true,
        userIntrestList: null
      });

    case feedAction.GET_USER_INTRESET_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loader: false,
        userIntrestList: action.userDetails
      });
    case feedAction.GET_USER_INTRESET_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loader: false,
        error: action.error
      });
    case feedAction.GET_RECOMMANDATION_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loader: true,
        recommendedList: null
      });

    case feedAction.GET_RECOMMANDATION_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loader: false,
        recommendedList: action.recommands
      });
    case feedAction.GET_RECOMMANDATION_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loader: false,
        error: action.error
      });
    case feedAction.GET_TOP_PICKS_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loader: true,
        topPicksList: null
      });

    case feedAction.GET_TOP_PICKS_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loader: false,
        topPicksList: action.topPicks
      });
    case feedAction.GET_TOP_PICKS_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loader: false,
        error: action.error
      });
    case feedAction.POST_FEED_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loader: false,
        error: action.error
      });
    case feedAction.POST_FEED_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        feedDetails: false,
        loader: true
      });

    case feedAction.POST_FEED_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loader: false,
        feedDetails: action.feedDetails
      });
    case feedAction.GET_FEED_REQUEST:
      return Object.assign({}, state, {
        feedStatus: action.status,
        feedDetails: null,
        feedLoader: true
      });

    case feedAction.GET_FEED_SUCCESS:
      let userFeeds = action.feeds && action.feeds.userFeeds;

      let eventFeeds = action.feeds && action.feeds.eventFeeds;

      let blogFeeds = action.feeds && action.feeds.blogFeeds;
      let heighestLength = userFeeds && userFeeds.length;
      if (eventFeeds && eventFeeds.length > heighestLength) {
        if (eventFeeds.length > blogFeeds.length) {
          heighestLength = eventFeeds.length;
        } else if (blogFeeds.length > heighestLength) {
          heighestLength = blogFeeds.length;
        }
      }
      const mixFeed = [];
      for (let i = 0; i < heighestLength; i++) {
        userFeeds[i] && mixFeed.push(userFeeds[i]);
        eventFeeds[i] && mixFeed.push(eventFeeds[i]);
        blogFeeds[i] && mixFeed.push(blogFeeds[i]);
      }

      let searchResults = [...action.oldFeed, ...mixFeed];
      return Object.assign({}, state, {
        feedStatus: action.status,
        feedLoader: false,
        feeds: searchResults
      });
    case feedAction.GET_FEED_FAILURE:
      return Object.assign({}, state, {
        feedStatus: action.status,
        feedLoader: false,
        error: action.error
      });

    case feedAction.GET_USER_PROFILE_INFO_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loader: true
      });

    case feedAction.GET_USER_PROFILE_INFO_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loader: false,
        userProfileInfo: action.userProfileInfo
      });
    case feedAction.GET_USER_PROFILE_INFO_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loader: false,
        error: action.error
      });
    case feedAction.GET_LABELS_REQUEST:
      return Object.assign({}, state, {
        status: action.status
      });

    case feedAction.GET_LABELS_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        labelsList: action.labelsList
      });
    case feedAction.GET_LABELS_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        error: action.error
      });
    case feedAction.POST_FEED_LIKE_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: false
      });

    case feedAction.POST_FEED_LIKE_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        postLikeDetails: action.postLikeDetails
      });
    case feedAction.POST_FEED_LIKE_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });
    case feedAction.GET_FEED_COMMENT_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        feedPostCommentDetails: null
      });

    case feedAction.GET_FEED_COMMENT_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        comments: action.comments
      });
    case feedAction.GET_FEED_COMMENT_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });
    case feedAction.POST_FEED_COMMENT_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: false
      });

    case feedAction.POST_FEED_COMMENT_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        feedPostCommentDetails: action.feedPostCommentDetails
      });
    case feedAction.POST_FEED_COMMENT_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });
    default:
      return state;
  }
}
export default feedReducer;
