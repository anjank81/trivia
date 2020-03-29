import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getAllBlogs,
  getBlogsDetails,
  postBlogLike,
  getsubscription,
  postBlogBookmark
} from "../../../actions/blog.action";
import { showModal, SIGNUP_MODULE } from "../../modules/modal.actions";
import BlogFeed from "../BlogFeed";
const mapDispatchToProps = dispatch => {
  return {
    
    getAllBlogs: (id, prevdata) => {
      dispatch(getAllBlogs(id, prevdata));
    },
    getBlogsDetails: id => {
      dispatch(getBlogsDetails(id));
    },
    postBlogLike: blogDetails => {
      dispatch(postBlogLike(blogDetails));
    },
    getsubscription: email => {
      dispatch(getsubscription(email));
    },
    postBlogBookmark: data => {
      dispatch(postBlogBookmark(data));
    },
    showSignUpModule: data => {
      dispatch(showModal(SIGNUP_MODULE, data));
    }
  };
};

const mapStateToProps = state => {
  return {
    allBlogsDetails: state.blog.allBlogsDetails,
    loading: state.blog.loading,
    blogDetails: state.blog.blogDetails,
    blogLikeDetails: state.blog.blogLikeDetails,
    blogBookmarkDetails: state.blog.blogBookmarkDetails
  };
};
const BlogContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BlogFeed)
);

export default BlogContainer;
