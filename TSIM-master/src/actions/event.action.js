import {
  SUCCESS,
  FAILURE,
  REQUESTING,
  ERROR,
  USER_DETAILS
} from "../utils/constant";
import * as Cookie from "../utils/Cookie";
import { get, post, put } from "../utils/apiRequest.js";
import { displayToast } from "../components/modules/toast.actions";

export const GET_ALL_EVENTS_REQUEST = "GET_ALL_EVENTS_REQUEST";
export const GET_ALL_EVENTS_SUCCESS = "GET_ALL_EVENTS_SUCCESS";
export const GET_ALL_EVENTS_FAILURE = "GET_ALL_EVENTS_FAILURE";

export const GET_ALL_PAST_EVENTS_REQUEST = "GET_ALL_PAST_EVENTS_REQUEST";
export const GET_ALL_PAST_EVENTS_SUCCESS = "GET_ALL_PAST_EVENTS_SUCCESS";
export const GET_ALL_PAST_EVENTS_FAILURE = "GET_ALL_PAST_EVENTS_FAILURE";

export const GET_EVENT_DETAILS_REQUEST = "GET_EVENT_DETAILS_REQUEST";
export const GET_EVENT_DETAILS_SUCCESS = "GET_EVENT_DETAILS_SUCCESS";
export const GET_EVENT_DETAILS_FAILURE = "GET_EVENT_DETAILS_FAILURE";

export const GET_FILTER_REQUEST = "GET_FILTER_REQUEST";
export const GET_FILTER_SUCCESS = "GET_FILTER_SUCCESS";
export const GET_FILTER_FAILURE = "GET_FILTER_FAILURE";

export const GET_REGISTER_EVENT_DETAILS_REQUEST =
  "GET_REGISTER_EVENT_DETAILS_REQUEST";
export const GET_REGISTER_EVENT_DETAILS_SUCCESS =
  "GET_REGISTER_EVENT_DETAILS_SUCCESS";
export const GET_REGISTER_EVENT_DETAILS_FAILURE =
  "GET_REGISTER_EVENT_DETAILS_FAILURE";

export const BOOK_EVENT_REQUEST = "BOOK_EVENT_REQUEST";
export const BOOK_EVENT_SUCCESS = "BOOK_EVENT_SUCCESS";
export const BOOK_EVENT_FAILURE = "BOOK_EVENT_FAILURE";

export const PAYMENT_STATUS_REQUEST = "PAYMENT_STATUS_REQUEST";
export const PAYMENT_STATUS_SUCCESS = "PAYMENT_STATUS_SUCCESS";
export const PAYMENT_STATUS_FAILURE = "PAYMENT_STATUS_FAILURE";

export const GET_LABEL_REQUESTING = "GET_LABEL_REQUESTING";
export const GET_LABEL_SUCCESS = "GET_LABEL_SUCCESS";
export const GET_LABEL_FAILURE = "GET_LABEL_FAILURE";

export const GET_TESTIMONIALS_REQUESTING = "GET_TESTIMONIALS_REQUESTING";
export const GET_TESTIMONIALS_SUCCESS = "GET_TESTIMONIALS_SUCCESS";
export const GET_TESTIMONIALS_FAILURE = "GET_TESTIMONIALS_FAILURE";

export const ADD_USER_INTEREST_REQUEST = "ADD_USER_INTEREST_REQUEST";
export const ADD_USER_INTEREST_SUCCESS = "ADD_USER_INTEREST_SUCCESS";
export const ADD_USER_INTEREST_FAILURE = "ADD_USER_INTEREST_FAILURE";

export const GET_CITY_LIST_REQUEST = "GET_CITY_LIST_REQUEST";
export const GET_CITY_LIST_SUCCESS = "GET_CITY_LIST_SUCCESS";
export const GET_CITY_LIST_FAILURE = "GET_CITY_LIST_FAILURE";

export const SUBSCRIPTION_REQUEST = "SUBSCRIPTION_REQUEST";
export const SUBSCRIPTION_SUCCESS = "SUBSCRIPTION_SUCCESS";
export const SUBSCRIPTION_FAILURE = "SUBSCRIPTION_FAILURE";

export function getLabelRequest() {
  return {
    type: GET_LABEL_REQUESTING,
    status: REQUESTING
  };
}

export function getLabelSuccess(labels) {
  return {
    type: GET_LABEL_SUCCESS,
    status: SUCCESS,
    labels
  };
}

export function getLabelFailure(error) {
  return {
    type: GET_LABEL_FAILURE,
    status: ERROR,
    error
  };
}

export function getLabels() {
  return async dispatch => {
    dispatch(getLabelRequest());
    try {
      let url = `labels?limit=100`;
      const result = await get(url);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }

      return dispatch(getLabelSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast("No data available"));
      return dispatch(getLabelFailure(e.message));
    }
  };
}

export function getTestimonialsRequest() {
  return {
    type: GET_TESTIMONIALS_REQUESTING,
    status: REQUESTING
  };
}

export function getTestimonialsSuccess(testimonials) {
  return {
    type: GET_TESTIMONIALS_SUCCESS,
    status: SUCCESS,
    testimonials
  };
}

export function getTestimonialsFailure(error) {
  return {
    type: GET_TESTIMONIALS_FAILURE,
    status: ERROR,
    error
  };
}

export function getTestimonials(eventId) {
  return async dispatch => {
    dispatch(getTestimonialsRequest());
    try {
      let url = `events/${eventId}/testimonials`;
      const result = await get(url);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }

      return dispatch(getTestimonialsSuccess(resultJson));
    } catch (e) {
      // dispatch(displayToast("No data available"));
      return dispatch(getTestimonialsFailure(e.message));
    }
  };
}

export function getAllPastEventsRequest() {
  return {
    type: GET_ALL_PAST_EVENTS_REQUEST,
    status: REQUESTING
  };
}

export function getAllPastEventsSuccess(eventDetails, oldEvent) {
  return {
    type: GET_ALL_PAST_EVENTS_SUCCESS,
    status: SUCCESS,
    eventDetails,
    oldEvent
  };
}

export function getAllPastEventsFailure(error) {
  return {
    type: GET_ALL_PAST_EVENTS_FAILURE,
    status: ERROR,
    error
  };
}

export function getAllPastEvents(filterDetails, page, oldData) {
  let filterData = filterDetails ? filterDetails : null;
  return async dispatch => {
    dispatch(getAllEventsRequest());
    try {
      let url = `events?limit=10&page=${page}&filter=${filterData}`;
      const result = await get(url);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }

      return dispatch(getAllEventsSuccess(resultJson, oldData));
    } catch (e) {
      dispatch(displayToast("No data available"));
      return dispatch(getAllEventsFailure(e.message));
    }
  };
}

export function getAllEventsRequest(loader) {
  return {
    type: GET_ALL_EVENTS_REQUEST,
    status: REQUESTING,
    loader: loader
  };
}

export function getAllEventsSuccess(eventDetails, oldEvent) {
  return {
    type: GET_ALL_EVENTS_SUCCESS,
    status: SUCCESS,
    eventDetails,
    oldEvent
  };
}

export function getAllEventsFailure(error) {
  return {
    type: GET_ALL_EVENTS_FAILURE,
    status: ERROR,
    error
  };
}

export function getAllEvents(filterDetails, page, oldEvent, loader) {
  let filterData = filterDetails ? filterDetails : null;
  let oldData = oldEvent ? oldEvent : null;
  return async dispatch => {
    dispatch(getAllEventsRequest(loader));
    try {
      let url = `events?limit=10&page=${page}&filter=${filterData}`;
      const result = await get(url);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }

      return dispatch(getAllEventsSuccess(resultJson, oldData));
    } catch (e) {
      return dispatch(getAllEventsFailure(e.message));
    }
  };
}

export function getEventDetailsRequest() {
  return {
    type: GET_EVENT_DETAILS_REQUEST,
    status: REQUESTING
  };
}

export function getEventDetailsSuccess(eventDetails) {
  return {
    type: GET_EVENT_DETAILS_SUCCESS,
    status: SUCCESS,
    eventDetails
  };
}

export function getEventDetailsFailure(error) {
  return {
    type: GET_EVENT_DETAILS_FAILURE,
    status: ERROR,
    error
  };
}

export function getEventDetails(id) {
  return async dispatch => {
    dispatch(getEventDetailsRequest());
    try {
      let user = Cookie.getCookie(USER_DETAILS);
      let parsedUser = user ? JSON.parse(user) : null;
      let userId = parsedUser ? parsedUser.userId : null;
      let url = `events/${id}?userId=${userId}`;
      const result = await get(url);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }

      return dispatch(getEventDetailsSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast("No data available"));
      return dispatch(getEventDetailsFailure(e.message));
    }
  };
}

export function getFilterRequest() {
  return {
    type: GET_FILTER_REQUEST,
    status: REQUESTING
  };
}

export function getFilterSuccess(filterList) {
  return {
    type: GET_FILTER_SUCCESS,
    status: SUCCESS,
    filterList
  };
}

export function getFilterFailure(error) {
  return {
    type: GET_FILTER_FAILURE,
    status: ERROR,
    error
  };
}

export function getFilterList() {
  return async dispatch => {
    dispatch(getFilterRequest());
    try {
      let url = `events/filters`;
      const result = await get(url);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      return dispatch(getFilterSuccess(resultJson));
    } catch (e) {
      return dispatch(getFilterFailure(e.message));
    }
  };
}

export function getRegisterEventRequest() {
  return {
    type: GET_REGISTER_EVENT_DETAILS_REQUEST,
    status: REQUESTING
  };
}

export function getRegisterEventSuccess(registerList) {
  return {
    type: GET_REGISTER_EVENT_DETAILS_SUCCESS,
    status: SUCCESS,
    registerList
  };
}

export function getRegisterEventFailure(error) {
  return {
    type: GET_REGISTER_EVENT_DETAILS_FAILURE,
    status: ERROR,
    error
  };
}

export function getRegisterEvent(id) {
  return async dispatch => {
    dispatch(getRegisterEventRequest());
    try {
      let url = `events/${id}/slots`;
      const result = await get(url);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      return dispatch(getRegisterEventSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast("Error please retry again"));
      return dispatch(getRegisterEventFailure(e.message));
    }
  };
}

export function bookEventRequest() {
  return {
    type: BOOK_EVENT_REQUEST,
    status: REQUESTING
  };
}

export function bookEventSuccess(paymentMessage) {
  return {
    type: BOOK_EVENT_SUCCESS,
    status: SUCCESS,
    paymentMessage
  };
}

export function bookEventFailure(error) {
  return {
    type: BOOK_EVENT_FAILURE,
    status: ERROR,
    error
  };
}

export function bookEvent(id, details) {
  return async dispatch => {
    dispatch(bookEventRequest());
    try {
      let url = `events/${id}/booking`;
      const result = await post(url, details);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      return dispatch(bookEventSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast("Error please retry again"));
      return dispatch(bookEventFailure(e.message));
    }
  };
}

export function paymentStatusRequest() {
  return {
    type: PAYMENT_STATUS_REQUEST,
    status: REQUESTING
  };
}

export function paymentStatusSuccess(paymentStatus) {
  return {
    type: PAYMENT_STATUS_SUCCESS,
    status: SUCCESS,
    paymentStatus
  };
}

export function paymentStatusFailure(error) {
  return {
    type: PAYMENT_STATUS_FAILURE,
    status: ERROR,
    error
  };
}

export function paymentStatus(id, details) {
  return async dispatch => {
    dispatch(paymentStatusRequest());
    try {
      let url = `events/${id}/booking`;
      const result = await put(url, details);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      return dispatch(paymentStatusSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast("Error please retry again"));
      return dispatch(paymentStatusFailure(e.message));
    }
  };
}
export function getCityRequest() {
  return {
    type: GET_CITY_LIST_REQUEST,
    status: REQUESTING
  };
}

export function getCitySuccess(cityList) {
  return {
    type: GET_CITY_LIST_SUCCESS,
    status: SUCCESS,
    cityList
  };
}

export function getCityFailure(error) {
  return {
    type: GET_CITY_LIST_FAILURE,
    status: ERROR,
    error
  };
}

export function getCityList(city) {
  let cityData = city ? city : null;
  return async dispatch => {
    dispatch(getCityRequest());
    try {
      let url = `citylists`;
      if (cityData) {
        url = `citylists?name=${cityData}&limit=10&page=1`;
      }
      const result = await get(url);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      return dispatch(getCitySuccess(resultJson));
    } catch (e) {
      return dispatch(getCityFailure(e.message));
    }
  };
}

export function addUserIntrestRequest() {
  return {
    type: ADD_USER_INTEREST_REQUEST,
    status: REQUESTING
  };
}

export function addUserIntrestSuccess(userDetails) {
  return {
    type: ADD_USER_INTEREST_SUCCESS,
    status: SUCCESS,
    userDetails
  };
}

export function addUserIntrestFailure(error) {
  return {
    type: ADD_USER_INTEREST_FAILURE,
    status: ERROR,
    error
  };
}

export function addUserIntrest(value) {
  return async dispatch => {
    dispatch(addUserIntrestRequest());
    try {
      let url = `events/interest`;
      const result = await post(url, value);
      const resultJson = await result.data;
      if (resultJson.error) {
        throw new Error(resultJson.message);
      }
      dispatch(displayToast(resultJson.message));
      return dispatch(addUserIntrestSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast("Error please retry again"));
      return dispatch(addUserIntrestFailure(e.message));
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
      return dispatch(subscriptionSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast("Error please retry again"));
      return dispatch(subscriptionFailure(e.message));
    }
  };
}
