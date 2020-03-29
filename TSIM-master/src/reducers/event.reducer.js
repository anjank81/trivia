import * as eventAction from "../actions/event.action";

const event = (
  state = {
    status: null,
    error: null,
    loading: false,
    eventDetails: null,
    allEventDetails: [],
    pastEventDetails: null,

    addUserIntrestStatus: null,
    addUserIntrestDetails: null,

    cityList: null,
    filterList: null,
    filterLoader: false,

    registerEventList: null,
    registerEventLoader: false,

    paymentStatus: null,
    paymentDetails: null,
    paymentLoader: false,
    paymentError: null,

    paymentStatusDetails: null,
    labelList: null
  },
  action
) => {
  switch (action.type) {
    case eventAction.GET_ALL_EVENTS_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        error: null,
        loading: action.loader ? true : false
      });

    case eventAction.GET_ALL_EVENTS_SUCCESS:
      let newEvent = [...action.oldEvent, ...action.eventDetails];
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        allEventDetails: newEvent
      });
    case eventAction.GET_ALL_EVENTS_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    case eventAction.GET_ALL_PAST_EVENTS_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        pastEventDetails: null,
        error: null,
        loading: true
      });

    case eventAction.GET_ALL_PAST_EVENTS_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        pastEventDetails: action.pastEventDetails
      });
    case eventAction.GET_ALL_PAST_EVENTS_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    case eventAction.GET_LABEL_REQUESTING:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case eventAction.GET_LABEL_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        labelList: action.labels
      });
    case eventAction.GET_LABEL_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });
    case eventAction.GET_TESTIMONIALS_REQUESTING:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        testimonialsLoading: true
      });

    case eventAction.GET_TESTIMONIALS_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        testimonialsLoading: false,
        testimonials: action.testimonials
      });
    case eventAction.GET_TESTIMONIALS_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        testimonialsLoading: false,
        error: action.error
      });
    case eventAction.GET_EVENT_DETAILS_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loading: true
      });

    case eventAction.GET_EVENT_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        eventDetails: action.eventDetails
      });
    case eventAction.GET_EVENT_DETAILS_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });
    case eventAction.GET_FILTER_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        pastEventDetails: null,
        filterLoader: true
      });

    case eventAction.GET_FILTER_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        filterLoader: false,
        filterList: action.filterList
      });
    case eventAction.GET_FILTER_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        filterLoader: false,
        error: action.error
      });
    case eventAction.GET_REGISTER_EVENT_DETAILS_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        registerEventLoader: true
      });

    case eventAction.GET_REGISTER_EVENT_DETAILS_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        registerEventLoader: false,
        registerEventList: action.registerList
      });
    case eventAction.GET_REGISTER_EVENT_DETAILS_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        registerEventLoader: false,
        error: action.error
      });
    case eventAction.BOOK_EVENT_REQUEST:
      return Object.assign({}, state, {
        paymentStatus: action.status,
        paymentLoader: true
      });

    case eventAction.BOOK_EVENT_SUCCESS:
      return Object.assign({}, state, {
        paymentStatus: action.status,
        paymentLoader: false,
        paymentDetails: action.paymentMessage
      });
    case eventAction.BOOK_EVENT_FAILURE:
      return Object.assign({}, state, {
        paymentStatus: action.status,
        paymentLoader: false,
        paymentError: action.error
      });
    case eventAction.PAYMENT_STATUS_REQUEST:
      return Object.assign({}, state, {
        paymentStatus: action.status,
        paymentLoader: true,
        paymentDetails: null
      });

    case eventAction.PAYMENT_STATUS_SUCCESS:
      return Object.assign({}, state, {
        paymentStatus: action.status,
        paymentLoader: false,
        paymentStatusDetails: action.paymentStatus
      });
    case eventAction.PAYMENT_STATUS_FAILURE:
      return Object.assign({}, state, {
        paymentStatus: action.status,
        paymentLoader: false,
        paymentError: action.error
      });
    case eventAction.ADD_USER_INTEREST_REQUEST:
      return Object.assign({}, state, {
        addUserIntrestStatus: action.status,
        paymentLoader: true,
        addUserIntrestDetails: null
      });

    case eventAction.ADD_USER_INTEREST_SUCCESS:
      return Object.assign({}, state, {
        addUserIntrestStatus: action.status,
        paymentLoader: false,
        addUserIntrestDetails: action.userDetails
      });
    case eventAction.ADD_USER_INTEREST_FAILURE:
      return Object.assign({}, state, {
        addUserIntrestStatus: action.status,
        paymentLoader: false,
        error: action.error
      });
    case eventAction.GET_CITY_LIST_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        pastEventDetails: null,
        filterLoader: true,
        cityList: null
      });

    case eventAction.GET_CITY_LIST_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        filterLoader: false,
        cityList: action.cityList
      });
    case eventAction.GET_CITY_LIST_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        filterLoader: false,
        error: action.error
      });
    default:
      return state;
  }
};
export default event;
