import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  showModal,
  FILTER_MODULE,
  EVENT_DETAIL_SLIDER_COMPONENT,
  SIGNUP_MODULE
} from "../../modules/modal.actions";
import EventPage from "../EventPage";
import {
  getAllEvents,
  getEventDetails,
  getFilterList,
  getLabels,
  getAllPastEvents,
  getCityList
} from "../../../actions/event.action";
import { getUserInterest } from "../../../actions/feed.actions";
const mapDispatchToProps = dispatch => {
  return {
    showFilterModule: data => {
      dispatch(showModal(FILTER_MODULE, data));
    },
    showEventDetailsModule: data => {
      dispatch(showModal(EVENT_DETAIL_SLIDER_COMPONENT, data));
    },
    getUserInterest: () => {
      dispatch(getUserInterest());
    },
    getAllEvents: (filterDetails, page, oldData, showLoader) => {
      dispatch(getAllEvents(filterDetails, page, oldData, showLoader));
    },
    showSignUpModal: data => {
      dispatch(showModal(SIGNUP_MODULE, data));
    },
    getEventDetails: id => {
      dispatch(getEventDetails(id));
    },
    getFilterList: () => {
      dispatch(getFilterList());
    },
    getLabels: () => {
      dispatch(getLabels());
    },
    getCityList: city => {
      dispatch(getCityList(city));
    },
    getAllPastEvents: (filterDetails, page, oldData) => {
      dispatch(getAllPastEvents(filterDetails, page, oldData));
    }
  };
};

const mapStateToProps = state => {
  return {
    allEventDetails: state.event.allEventDetails,
    pastEventDetails: state.event.pastEventDetails,
    eventDetails: state.event.eventDetails,
    filterList: state.event.filterList,
    filterLoader: state.event.filterLoader,
    loading: state.event.loading,
    labelList: state.event.labelList,
    error: state.event.error,
    userIntrestList: state.feed.userIntrestList
  };
};
const EventPageContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EventPage)
);

export default EventPageContainer;
