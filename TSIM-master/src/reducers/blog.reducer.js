import * as eventAction from "../actions/blog.action";

const blog = (
  state = {
    status: null,
    error: null,
    loading: false,
    allBlogsDetails: null,
    blogDetails: null,
    blogLikeDetails: null,
    subscribtionDetails: null,
    blogPostCommentDetails: null
  },
  action
) => {
  switch (action.type) {
    case eventAction.GET_ALL_BLOGS_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: false
      });

    case eventAction.GET_ALL_BLOGS_SUCCESS:
      let searchResults = [...action.oldBlog, ...action.blogsDetails];
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        allBlogsDetails: searchResults
      });
     
    case eventAction.GET_ALL_BLOGS_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });
    case eventAction.GET_BLOG_DETAILS_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true,
        blogPostCommentDetails: null
      });

    case eventAction.GET_BLOG_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        blogDetails: action.blogsDetails
      });
    case eventAction.GET_BLOG_DETAILS_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });
    case eventAction.POST_BLOG_LIKE_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: false
      });

    case eventAction.POST_BLOG_LIKE_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        blogLikeDetails: action.blogLikeDetails
      });
    case eventAction.POST_BLOG_LIKE_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });
    case eventAction.GET_BLOG_COMMENT_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        blogPostCommentDetails: null
      });

    case eventAction.GET_BLOG_COMMENT_SUCCESS:
      
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        comments: action.comments
      });
    case eventAction.GET_BLOG_COMMENT_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });
    case eventAction.POST_BLOG_COMMENT_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: false
      });

    case eventAction.POST_BLOG_COMMENT_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        blogPostCommentDetails: action.blogPostCommentDetails
      });
    case eventAction.POST_BLOG_COMMENT_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });
    case eventAction.GET_BLOG_COMMENTS_OF_COMMENT_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true,
        blogPostCommentDetails: null
      });

    case eventAction.GET_BLOG_COMMENTS_OF_COMMENT_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        commentsOfComment: action.commentsOfComment
      });
    case eventAction.GET_BLOG_COMMENTS_OF_COMMENT_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });
    case eventAction.SUBSCRIPTION_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case eventAction.SUBSCRIPTION_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        subscribtionDetails: action.userDetails
      });
    case eventAction.SUBSCRIPTION_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });
    case eventAction.POST_BLOG_BOOKMARK_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: false
      });

    case eventAction.POST_BLOG_BOOKMARK_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        blogBookmarkDetails: action.blogBookmarkDetails
      });
    case eventAction.POST_BLOG_BOOKMARK_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });
    default:
      return state;
  }
};
export default blog;
