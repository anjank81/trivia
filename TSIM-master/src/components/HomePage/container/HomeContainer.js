import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { showModal, SIGNUP_MODULE } from "../../modules/modal.actions";
import Home from "../Home";
import { getAllEvents, getEventDetails } from "../../../actions/event.action";
import { getAllBlogs } from "../../../actions/blog.action";

const mapDispatchToProps = dispatch => {
  return {
    showSignUpModule: data => {
      dispatch(showModal(SIGNUP_MODULE, data));
    },
    getAllEvents: () => {
      dispatch(getAllEvents([], 1, []));
    },
    getEventDetails: id => {
      dispatch(getEventDetails(id));
    },
    getAllBlogs: () => {
      dispatch(getAllBlogs(1));
    }
  };
};

const mapStateToProps = state => {
  return {
    loading: state,
    allEventDetails: state.event.allEventDetails,
    allBlogsDetails: state.blog.allBlogsDetails
  };
};
const HomeContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Home)
);

export default HomeContainer;
