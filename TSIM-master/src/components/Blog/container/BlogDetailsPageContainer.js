import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getAllBlogs,
  getBlogsDetails,
  getBlogComment,
  postBlogComment,
  getBlogCommentsOfComment
} from "../../../actions/blog.action";
import { GET_IN_TOUCH, showModal } from "../../modules/modal.actions";
import BlogDetails from "../BlogDetails/BlogDetails";
const mapDispatchToProps = dispatch => {
  return {
    getAllBlogs: () => {
      dispatch(getAllBlogs());
    },
    getBlogsDetails: id => {
      dispatch(getBlogsDetails(id));
    },
    getBlogComment: id => {
      dispatch(getBlogComment(id));
    },
    postBlogComment: data => {
      dispatch(postBlogComment(data));
    },
    getBlogCommentsOfComment: (blogId, parentId) => {
      dispatch(getBlogCommentsOfComment(blogId, parentId));
    },
    showGetInTouchModal: data => {
      dispatch(showModal(GET_IN_TOUCH, data));
    }
  };
};

const mapStateToProps = state => {
  return {
    allBlogsDetails: state.blog.allBlogsDetails,
    loading: state.blog.loading,
    blogDetails: state.blog.blogDetails,
    comments: state.blog.comments,
    blogPostCommentDetails: state.blog.blogPostCommentDetails,
    commentsOfComment: state.blog.commentsOfComment
  };
};
const BlogDetailsContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BlogDetails)
);

export default BlogDetailsContainer;
