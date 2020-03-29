import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getAllPastEvents,
  getTestimonials
} from "../../../actions/event.action";
import EventDetailSlider from "../EventDetailSlider/EventDetailSlider";
import EventDetailSliderComponent from "../EventDetailSlider/EventDetailSliderComponent";
const mapDispatchToProps = dispatch => {
  return {
    getAllPastEvents: filterDetails => {
      dispatch(getAllPastEvents(filterDetails));
    },
    getTestimonials: id => {
      dispatch(getTestimonials(id));
    }
  };
};

const mapStateToProps = state => {
  return {
    allEventDetails: state.event.allEventDetails,
    stepsInfo: state.event.pastEventDetails,
    eventDetails: state.event.eventDetails,
    filterList: state.event.filterList,
    filterLoader: state.event.filterLoader,
    loading: state.event.loading,
    labelList: state.event.labelList,
    error: state.event.error,
    testimonials: state.event.testimonials,
  };
};
const EventSlidePageContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EventDetailSliderComponent)
);

export default EventSlidePageContainer;
