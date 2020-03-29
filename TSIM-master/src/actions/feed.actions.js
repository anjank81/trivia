import {
  SUCCESS,
  FAILURE,
  REQUESTING,
  ERROR,
  USER_DETAILS
} from "../utils/constant";
import { get, post } from "../utils/apiRequest.js";
import * as Cookie from "../utils/Cookie";
import { displayToast } from "../components/modules/toast.actions";
import { getLabelFailure, GET_LABEL_FAILURE } from "./event.action";
export const UPDATE_IMAGE_ARR = "updateImageArr";

export const GET_USER_INTRESET_REQUEST = "GET_USER_INTRESET_REQUEST";
export const GET_USER_INTRESET_SUCCESS = "GET_USER_INTRESET_SUCCESS";
export const GET_USER_INTRESET_FAILURE = "GET_USER_INTRESET_FAILURE";

export const ADD_USER_INTEREST_REQUEST = "ADD_USER_INTEREST_REQUEST";
export const ADD_USER_INTEREST_SUCCESS = "ADD_USER_INTEREST_SUCCESS";
export const ADD_USER_INTEREST_FAILURE = "ADD_USER_INTEREST_FAILURE";

export const GET_TOP_PICKS_REQUEST = "GET_TOP_PICKS_REQUEST";
export const GET_TOP_PICKS_SUCCESS = "GET_TOP_PICKS_SUCCESS";
export const GET_TOP_PICKS_FAILURE = "GET_TOP_PICKS_FAILURE";

export const GET_RECOMMANDATION_REQUEST = "GET_RECOMMANDATION_REQUEST";
export const GET_RECOMMANDATION_SUCCESS = "GET_RECOMMANDATION_SUCCESS";
export const GET_RECOMMANDATION_FAILURE = "GET_RECOMMANDATION_FAILURE";

export const POST_FEED_REQUEST = "POST_FEED_REQUEST";
export const POST_FEED_SUCCESS = "POST_FEED__SUCCESS";
export const POST_FEED_FAILURE = "POST_FEED__FAILURE";

export const GET_FEED_REQUEST = "GET_FEED_REQUEST";
export const GET_FEED_SUCCESS = "GET_FEED_SUCCESS";
export const GET_FEED_FAILURE = "GET_FEED_FAILURE";

export const GET_USER_PROFILE_INFO_REQUEST = "GET_USER_PROFILE_INFO_REQUEST";
export const GET_USER_PROFILE_INFO_SUCCESS = "GET_USER_PROFILE_INFO_SUCCESS";
export const GET_USER_PROFILE_INFO_FAILURE = "GET_USER_PROFILE_INFO_FAILURE";

export const GET_LABELS_REQUEST = "GET_LABELS_REQUEST";
export const GET_LABELS_SUCCESS = "GET_LABELS_SUCCESS";
export const GET_LABELS_FAILURE = "GET_LABELS_FAILURE";

export const POST_FEED_LIKE_REQUEST = "POST_FEED_LIKE_REQUEST";
export const POST_FEED_LIKE_SUCCESS = "POST_FEED_LIKE_SUCCESS";
export const POST_FEED_LIKE_FAILURE = "POST_FEED_LIKE_FAILURE";

export const GET_FEED_COMMENT_REQUEST = "GET_FEED_COMMENT_REQUEST";
export const GET_FEED_COMMENT_SUCCESS = "GET_FEED_COMMENT_SUCCESS";
export const GET_FEED_COMMENT_FAILURE = "GET_FEED_COMMENT_FAILURE";

export const POST_FEED_COMMENT_REQUEST = "POST_FEED_COMMENT_REQUEST";
export const POST_FEED_COMMENT_SUCCESS = "POST_FEED_COMMENT_SUCCESS";
export const POST_FEED_COMMENT_FAILURE = "POST_FEED_COMMENT_FAILURE";

export function updateImageArr(data) {
  return {
    type: UPDATE_IMAGE_ARR,
    data
  };
}

export function addUserInterestRequest() {
  return {
    type: ADD_USER_INTEREST_REQUEST,
    status: REQUESTING
  };
}

export function addUserInterestSuccess(userDetails) {
  return {
    type: ADD_USER_INTEREST_SUCCESS,
    status: SUCCESS,
    userDetails
  };
}

export function addUserInterestFailure(error) {
  return {
    type: ADD_USER_INTEREST_FAILURE,
    status: ERROR,
    error
  };
}

export function addUserInterest(value) {
  return async dispatch => {
    dispatch(addUserInterestRequest());
    try {
      let user = Cookie.getCookie(USER_DETAILS);
      let parsedUser = user ? JSON.parse(user) : null;
      let userId = parsedUser ? parsedUser.userId : null;
      let url = `users/${userId}/interest`;
      const result = await post(url, value);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      return dispatch(addUserInterestSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast(e.message));
      return dispatch(addUserInterestFailure(e.message));
    }
  };
}

export function getUserInterestRequest() {
  return {
    type: GET_USER_INTRESET_REQUEST,
    status: REQUESTING
  };
}

export function getUserInterestSuccess(userDetails) {
  return {
    type: GET_USER_INTRESET_SUCCESS,
    status: SUCCESS,
    userDetails
  };
}

export function getUserInterestFailure(error) {
  return {
    type: GET_USER_INTRESET_FAILURE,
    status: ERROR,
    error
  };
}

export function getUserInterest() {
  return async dispatch => {
    dispatch(getUserInterestRequest());
    try {
      let user = Cookie.getCookie(USER_DETAILS);
      let parsedUser = user ? JSON.parse(user) : null;
      let userId = parsedUser ? parsedUser.userId : null;
      let url = userId ? `users/${userId}/interest` : `interests?limit=200`;
      const result = await get(url);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      return dispatch(getUserInterestSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast(e.message));
      return dispatch(getUserInterestFailure(e.message));
    }
  };
}

export function getTopPicksRequest() {
  return {
    type: GET_TOP_PICKS_REQUEST,
    status: REQUESTING
  };
}

export function getTopPicksSuccess(topPicks) {
  return {
    type: GET_TOP_PICKS_SUCCESS,
    status: SUCCESS,
    topPicks
  };
}

export function getTopPicksFailure(error) {
  return {
    type: GET_TOP_PICKS_FAILURE,
    status: ERROR,
    error
  };
}

export function getTopPicks() {
  return async dispatch => {
    dispatch(getTopPicksRequest());
    try {
      let user = Cookie.getCookie(USER_DETAILS);
      let parsedUser = user ? JSON.parse(user) : null;
      let userId = parsedUser ? parsedUser.userId : null;
      let url = `feeds/top-pick/${userId}`;
      const result = await get(url);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      return dispatch(getTopPicksSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast(e.message));
      return dispatch(getTopPicksFailure(e.message));
    }
  };
}

export function getRecommendRequest() {
  return {
    type: GET_RECOMMANDATION_REQUEST,
    status: REQUESTING
  };
}

export function getRecommendSuccess(recommands) {
  return {
    type: GET_RECOMMANDATION_SUCCESS,
    status: SUCCESS,
    recommands
  };
}

export function getRecommendFailure(error) {
  return {
    type: GET_RECOMMANDATION_FAILURE,
    status: ERROR,
    error
  };
}

export function getRecommend() {
  return async dispatch => {
    dispatch(getRecommendRequest());
    try {
      let user = Cookie.getCookie(USER_DETAILS);
      let parsedUser = user ? JSON.parse(user) : null;
      let userId = parsedUser ? parsedUser.userId : null;
      let url = `feeds/recommended/${userId}`;
      const result = await get(url);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      return dispatch(getRecommendSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast(e.message));
      return dispatch(getRecommendFailure(e.message));
    }
  };
}

export function getFeedRequest() {
  return {
    type: GET_FEED_REQUEST,
    status: REQUESTING
  };
}

export function getFeedSuccess(feeds, oldFeed) {
  return {
    type: GET_FEED_SUCCESS,
    status: SUCCESS,
    feeds,
    oldFeed: oldFeed ? oldFeed : []
  };
}

export function getFeedFailure(error) {
  return {
    type: GET_FEED_FAILURE,
    status: ERROR,
    error
  };
}

export function getFeed(id, oldFeed) {
  return async dispatch => {
    dispatch(getFeedRequest());
    try {
      let user = Cookie.getCookie(USER_DETAILS);
      let parsedUser = user ? JSON.parse(user) : null;
      let userId = parsedUser ? parsedUser.userId : null;
      let url = `feeds/allfeeds?page=${id}`;
      const result = await get(url);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      return dispatch(getFeedSuccess(resultJson, oldFeed));
    } catch (e) {
      dispatch(displayToast(e.message));
      return dispatch(getFeedFailure(e.message));
    }
  };
}
export function postFeedRequest() {
  return {
    type: POST_FEED_REQUEST,
    status: REQUESTING
  };
}

export function postFeedSuccess(feedDetails) {
  return {
    type: POST_FEED_SUCCESS,
    status: SUCCESS,
    feedDetails
  };
}

export function postFeedFailure(error) {
  return {
    type: POST_FEED_FAILURE,
    status: ERROR,
    error
  };
}

export function postFeed(postFeedDetails) {
  return async dispatch => {
    dispatch(postFeedRequest());
    try {
      let url = `feeds`;
      const result = await post(url, postFeedDetails);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      dispatch(displayToast("Post added successfully"));
      return dispatch(postFeedSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast(e.message));
      return dispatch(postFeedFailure(e.message));
    }
  };
}

export function getUserProfileInfoRequest() {
  return {
    type: GET_USER_PROFILE_INFO_REQUEST,
    status: REQUESTING
  };
}

export function getUserProfileInfoSuccess(userProfileInfo) {
  return {
    type: GET_USER_PROFILE_INFO_SUCCESS,
    status: SUCCESS,
    userProfileInfo
  };
}

export function getUserProfileInfoFailure(error) {
  return {
    type: GET_USER_PROFILE_INFO_FAILURE,
    status: ERROR,
    error
  };
}

export function getUserProfileInfo() {
  return async dispatch => {
    dispatch(getUserProfileInfoRequest());
    try {
      let user = Cookie.getCookie(USER_DETAILS);
      let parsedUser = user ? JSON.parse(user) : null;
      let userId = parsedUser ? parsedUser.userId : null;
      let url = `users/${userId}/info`;
      const result = await get(url);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      return dispatch(getUserProfileInfoSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast(e.message));
      return dispatch(getUserProfileInfoFailure(e.message));
    }
  };
}

export function getLabelsRequesting() {
  return {
    type: GET_LABELS_REQUEST,
    status: REQUESTING
  };
}

export function getLabelsSuccess(labelsList) {
  return {
    type: GET_LABELS_SUCCESS,
    status: SUCCESS,
    labelsList
  };
}

export function getLabelsFailure(error) {
  return {
    type: GET_LABEL_FAILURE,
    status: ERROR,
    error
  };
}

export function getLabels() {
  return async dispatch => {
    dispatch(getLabelsRequesting());
    try {
      let user = Cookie.getCookie(USER_DETAILS);
      let parsedUser = user ? JSON.parse(user) : null;
      let userId = parsedUser ? parsedUser.userId : null;
      let url = `/labels`;
      const result = await get(url);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      return dispatch(getLabelsSuccess(resultJson));
    } catch (e) {
      //dispatch(displayToast(e.message));
      return dispatch(getLabelFailure(e.message));
    }
  };
}

export function postFeedLikeRequest() {
  return {
    type: POST_FEED_LIKE_REQUEST,
    status: REQUESTING
  };
}

export function postFeedLikeSuccess(postLikeDetails) {
  return {
    type: POST_FEED_LIKE_SUCCESS,
    status: SUCCESS,
    postLikeDetails
  };
}

export function postFeedLikeFailure(error) {
  return {
    type: POST_FEED_LIKE_FAILURE,
    status: ERROR,
    error
  };
}

export function postFeedLike(feedsDetails) {
  return async dispatch => {
    dispatch(postFeedLikeRequest());
    try {
      let url = `feeds/like`;
      const result = await post(url, feedsDetails);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      return dispatch(postFeedLikeSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast("Error please retry again"));
      return dispatch(postFeedLikeFailure(e.message));
    }
  };
}

export function getFeedCommentRequest() {
  return {
    type: GET_FEED_COMMENT_REQUEST,
    status: REQUESTING
  };
}

export function getFeedCommentSuccess(comments) {
  return {
    type: GET_FEED_COMMENT_SUCCESS,
    status: SUCCESS,
    comments
  };
}

export function getFeedCommentFailure(error) {
  return {
    type: GET_FEED_COMMENT_FAILURE,
    status: ERROR,
    error
  };
}

export function getFeedComment(feedId) {
  return async dispatch => {
    dispatch(getFeedCommentRequest());
    try {
      let url = `feeds/${feedId}/comments`;
      const result = await get(url);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }

      return dispatch(getFeedCommentSuccess({ [feedId]: resultJson }));
    } catch (e) {
      dispatch(displayToast("Error please retry again"));
      return dispatch(getFeedCommentFailure(e.message));
    }
  };
}

export function postFeedCommentRequest() {
  return {
    type: POST_FEED_COMMENT_REQUEST,
    status: REQUESTING
  };
}

export function postFeedCommentSuccess(feedPostCommentDetails) {
  return {
    type: POST_FEED_COMMENT_SUCCESS,
    status: SUCCESS,
    feedPostCommentDetails
  };
}

export function postFeedCommentFailure(error) {
  return {
    type: POST_FEED_COMMENT_FAILURE,
    status: ERROR,
    error
  };
}

export function postFeedComment(feedsCommentDetails, id) {
  return async dispatch => {
    dispatch(postFeedCommentRequest());
    try {
      let url = `feeds/comment`;
      const result = await post(url, feedsCommentDetails);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      return dispatch(postFeedCommentSuccess({ [id]: resultJson }));
    } catch (e) {
      dispatch(displayToast("Error please retry again"));
      return dispatch(postFeedCommentFailure(e.message));
    }
  };
}
