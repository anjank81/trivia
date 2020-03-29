import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  showModal,
  REGISTER_DETAILS_MODAL,
  SIGNUP_MODULE
} from "../../modules/modal.actions";
import EventDetailsPage from "../EventDetailsPage";
import {
  getEventDetails,
  getRegisterEvent,
  bookEvent,
  getTestimonials,
  addUserIntrest, getAllEvents
} from "../../../actions/event.action";

const mapDispatchToProps = dispatch => {
  return {
    showRegisterDetailsModule: data => {
      dispatch(showModal(REGISTER_DETAILS_MODAL, data));
    },
    getEventDetails: id => {
      dispatch(getEventDetails(id));
    },
    getRegisterEvent: id => {
      dispatch(getRegisterEvent(id));
    },
    bookEvent: (id, details) => {
      dispatch(bookEvent(id, details));
    },
    showSignUpModal: data => {
      dispatch(showModal(SIGNUP_MODULE, data));
    },
    getTestimonials: id => {
      dispatch(getTestimonials(id));
    },
    addUserIntrest: details => {
      dispatch(addUserIntrest(details));
    },
    getAllEvents:()=>{
      dispatch(getAllEvents())
    }
  };
};

const mapStateToProps = state => {
  return {
    allEventDetails: state.event.allEventDetails,
    eventDetails: state.event.eventDetails,
    registerEventList: state.event.registerEventList,
    paymentStatus: state.event.paymentStatus,
    paymentDetails: state.event.paymentDetails,
    paymentLoader: state.event.paymentLoader,
    paymentError: state.event.paymentError,
    loading: state.event.loading,
    testimonials: state.event.testimonials,
    testimonialsLoading: state.event.testimonialsLoading,
    addUserIntrestStatus: state.event.addUserIntrestStatus,
    addUserIntrestDetails: state.event.addUserIntrestDetails
  };
};
const EventDetailsPageContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EventDetailsPage)
);

export default EventDetailsPageContainer;
