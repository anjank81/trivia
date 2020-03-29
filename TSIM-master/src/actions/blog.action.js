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
export const GET_ALL_BLOGS_REQUEST = "GET_ALL_BLOGS_REQUEST";
export const GET_ALL_BLOGS_SUCCESS = "GET_ALL_BLOGS_SUCCESS";
export const GET_ALL_BLOGS_FAILURE = "GET_ALL_BLOGS_FAILURE";

export const GET_BLOG_DETAILS_REQUEST = "GET_BLOG_DETAILS_REQUEST";
export const GET_BLOG_DETAILS_SUCCESS = "GET_BLOG_DETAILS_SUCCESS";
export const GET_BLOG_DETAILS_FAILURE = "GET_BLOG_DETAILS_FAILURE";

export const POST_BLOG_LIKE_REQUEST = "POST_BLOG_LIKE_REQUEST";
export const POST_BLOG_LIKE_SUCCESS = "POST_BLOG_LIKE_SUCCESS";
export const POST_BLOG_LIKE_FAILURE = "POST_BLOG_LIKE_FAILURE";

export const GET_BLOG_COMMENT_REQUEST = "GET_BLOG_COMMENT_REQUEST";
export const GET_BLOG_COMMENT_SUCCESS = "GET_BLOG_COMMENT_SUCCESS";
export const GET_BLOG_COMMENT_FAILURE = "GET_BLOG_COMMENT_FAILURE";

export const POST_BLOG_COMMENT_REQUEST = "POST_BLOG_COMMENT_REQUEST";
export const POST_BLOG_COMMENT_SUCCESS = "POST_BLOG_COMMENT_SUCCESS";
export const POST_BLOG_COMMENT_FAILURE = "POST_BLOG_COMMENT_FAILURE";

export const GET_BLOG_COMMENTS_OF_COMMENT_REQUEST =
  "GET_BLOG_COMMENTS_OF_COMMENT_REQUEST";
export const GET_BLOG_COMMENTS_OF_COMMENT_SUCCESS =
  "GET_BLOG_COMMENTS_OF_COMMENT_SUCCESS";
export const GET_BLOG_COMMENTS_OF_COMMENT_FAILURE =
  "GET_BLOG_COMMENTS_OF_COMMENT_FAILURE";

export const SUBSCRIPTION_REQUEST = "SUBSCRIPTION_REQUEST";
export const SUBSCRIPTION_SUCCESS = "SUBSCRIPTION_SUCCESS";
export const SUBSCRIPTION_FAILURE = "SUBSCRIPTION_FAILURE";

export const POST_BLOG_BOOKMARK_REQUEST = "POST_BLOG_BOOKMARK_REQUEST";
export const POST_BLOG_BOOKMARK_SUCCESS = "POST_BLOG_BOOKMARK_SUCCESS";
export const POST_BLOG_BOOKMARK_FAILURE = "POST_BLOG_BOOKMARK_FAILURE";

export function getAllBlogsRequest() {
  return {
    type: GET_ALL_BLOGS_REQUEST,
    status: REQUESTING
  };
}

export function getAllBlogsSuccess(blogsDetails,oldBlog) {
  return {
    type: GET_ALL_BLOGS_SUCCESS,
    status: SUCCESS,
    blogsDetails,
    oldBlog: oldBlog ? oldBlog : []
  };
}

export function getAllBlogsFailure(error) {
  return {
    type: GET_ALL_BLOGS_FAILURE,
    status: ERROR,
    error
  };
}

export function getAllBlogs(id, oldBlog) {
  return async dispatch => {
    dispatch(getAllBlogsRequest());
    try {
      let user = Cookie.getCookie(USER_DETAILS);
      let parsedUser = user ? JSON.parse(user) : null;
      let userId = parsedUser ? parsedUser.userId : null;
      let url = `blogs?limit=10&page=${id}&offset=1&userId=${userId}`;
      const result = await get(url);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }

      return dispatch(getAllBlogsSuccess(resultJson, oldBlog));
    } catch (e) {
      return dispatch(getAllBlogsFailure(e.message));
    }
  };
}

export function getBlogsDetailsRequest() {
  return {
    type: GET_BLOG_DETAILS_REQUEST,
    status: REQUESTING
  };
}

export function getBlogsDetailsSuccess(blogsDetails) {
  return {
    type: GET_BLOG_DETAILS_SUCCESS,
    status: SUCCESS,
    blogsDetails
  };
}

export function getBlogsDetailsFailure(error) {
  return {
    type: GET_BLOG_DETAILS_FAILURE,
    status: ERROR,
    error
  };
}

export function getBlogsDetails(id) {
  return async dispatch => {
    dispatch(getBlogsDetailsRequest());
    try {
      let url = `blogs/${id}`;
      const result = await get(url);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      dispatch(getBlogComment(id));
      return dispatch(getBlogsDetailsSuccess(resultJson));
    } catch (e) {
      // dispatch(displayToast("No data available"));
      return dispatch(getBlogsDetailsFailure(e.message));
    }
  };
}

export function postBlogLikeRequest() {
  return {
    type: POST_BLOG_LIKE_REQUEST,
    status: REQUESTING
  };
}

export function postBlogLikeSuccess(blogLikeDetails) {
  return {
    type: POST_BLOG_LIKE_SUCCESS,
    status: SUCCESS,
    blogLikeDetails
  };
}

export function postBlogLikeFailure(error) {
  return {
    type: POST_BLOG_LIKE_FAILURE,
    status: ERROR,
    error
  };
}

export function postBlogLike(blogsDetails) {
  return async dispatch => {
    dispatch(postBlogLikeRequest());
    try {
      let url = `blogs/like`;
      const result = await post(url, blogsDetails);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      return dispatch(postBlogLikeSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast("Error please retry again"));
      return dispatch(postBlogLikeFailure(e.message));
    }
  };
}

export function getBlogCommentRequest() {
  return {
    type: GET_BLOG_COMMENT_REQUEST,
    status: REQUESTING
  };
}

export function getBlogCommentSuccess(comments) {
  return {
    type: GET_BLOG_COMMENT_SUCCESS,
    status: SUCCESS,
    comments
  };
}

export function getBlogCommentFailure(error) {
  return {
    type: GET_BLOG_COMMENT_FAILURE,
    status: ERROR,
    error
  };
}

export function getBlogComment(blogID) {
  return async dispatch => {
    dispatch(getBlogCommentRequest());
    try {
      let url = `blogs/comments/${blogID}`;
      const result = await get(url);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      return dispatch(getBlogCommentSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast("Error please retry again"));
      return dispatch(getBlogCommentFailure(e.message));
    }
  };
}

export function postBlogCommentRequest() {
  return {
    type: POST_BLOG_COMMENT_REQUEST,
    status: REQUESTING
  };
}

export function postBlogCommentSuccess(blogPostCommentDetails) {
  return {
    type: POST_BLOG_COMMENT_SUCCESS,
    status: SUCCESS,
    blogPostCommentDetails
  };
}

export function postBlogCommentFailure(error) {
  return {
    type: POST_BLOG_COMMENT_FAILURE,
    status: ERROR,
    error
  };
}

export function postBlogComment(blogsCommentDetails) {
  return async dispatch => {
    dispatch(postBlogCommentRequest());
    try {
      let url = `blogs/comment`;
      const result = await post(url, blogsCommentDetails);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      return dispatch(postBlogCommentSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast("Error please retry again"));
      return dispatch(postBlogCommentFailure(e.message));
    }
  };
}

export function getBlogCommentsOfCommentRequest() {
  return {
    type: GET_BLOG_COMMENTS_OF_COMMENT_REQUEST,
    status: REQUESTING
  };
}

export function getBlogCommentsOfCommentSuccess(commentsOfComment) {
  return {
    type: GET_BLOG_COMMENTS_OF_COMMENT_SUCCESS,
    status: SUCCESS,
    commentsOfComment
  };
}

export function getBlogCommentsOfCommentFailure(error) {
  return {
    type: GET_BLOG_COMMENTS_OF_COMMENT_FAILURE,
    status: ERROR,
    error
  };
}

export function getBlogCommentsOfComment(blogID, parentId) {
  return async dispatch => {
    dispatch(getBlogCommentsOfCommentRequest());
    try {
      let url = `blogs/comments/${blogID}/${parentId}`;
      const result = await get(url);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      return dispatch(getBlogCommentsOfCommentSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast("Error please retry again"));
      return dispatch(getBlogCommentsOfCommentFailure(e.message));
    }
  };
}
export function subscriptionRequest() {
  return {
    type: SUBSCRIPTION_REQUEST,
    status: REQUESTING
  };
}

export function subscriptionSuccess(userDetails) {
  return {
    type: SUBSCRIPTION_SUCCESS,
    status: SUCCESS,
    userDetails
  };
}

export function subscriptionFailure(error) {
  return {
    type: subscriptionFailure,
    status: ERROR,
    error
  };
}

export function getsubscription(data) {
  return async dispatch => {
    dispatch(subscriptionRequest());
    try {
      let url = `subscribe`;
      const result = await post(url, data);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      dispatch(displayToast(resultJson.message));
      return dispatch(subscriptionSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast("Error please retry again"));
      return dispatch(subscriptionFailure(e.message));
    }
  };
}
export function postBlogBookmarkRequest() {
  return {
    type: POST_BLOG_BOOKMARK_REQUEST,
    status: REQUESTING
  };
}

export function postBlogBookmarkSuccess(blogBookmarkDetails) {
  return {
    type: POST_BLOG_BOOKMARK_SUCCESS,
    status: SUCCESS,
    blogBookmarkDetails
  };
}

export function postBlogBookmarkFailure(error) {
  return {
    type: POST_BLOG_BOOKMARK_FAILURE,
    status: ERROR,
    error
  };
}

export function postBlogBookmark(blogDetails) {
  return async dispatch => {
    dispatch(postBlogBookmarkRequest());
    try {
      let url = `blogs/bookmark`;
      const result = await post(url, blogDetails);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      return dispatch(postBlogBookmarkSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast("Error please retry again"));
      return dispatch(postBlogBookmarkFailure(e.message));
    }
  };
}
