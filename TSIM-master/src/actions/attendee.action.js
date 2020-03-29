import {
  SUCCESS,
  FAILURE,
  REQUESTING,
  ERROR,
  USER_DETAILS
} from "../utils/constant";
import { put } from "../utils/apiRequest.js";
import { displayToast } from "../components/modules/toast.actions";

import * as Cookie from "../utils/Cookie";
export const POST_ATTENDEE_REQUEST = "POST_ATTENDEE_REQUEST";
export const POST_ATTENDEE_SUCCESS = "POST_ATTENDEE_SUCCESS";
export const POST_ATTENDEE_FAILURE = "POST_ATTENDEE_FAILURE";

export function attendeeDetailsRequest() {
  return {
    type: POST_ATTENDEE_REQUEST,
    status: REQUESTING
  };
}

export function attendeeDetailsSuccess(attendeeDetails) {
  return {
    type: POST_ATTENDEE_SUCCESS,
    status: SUCCESS,
    attendeeDetails
  };
}

export function attendeeDetailsFailure(error) {
  return {
    type: POST_ATTENDEE_FAILURE,
    status: ERROR,
    error
  };
}
export function postAttendee(attendeeArray) {
  return async dispatch => {
    dispatch(attendeeDetailsRequest());
    try {
      let url = `events/booking/${attendeeArray[1]}/attendees`;

      const result = await put(url, attendeeArray[0]);
      const resultJson = await result.data;

      if (resultJson.status === 200) {
        dispatch(displayToast("Attendees added successfully"));

        return dispatch(attendeeDetailsSuccess(resultJson));
      }
      if (resultJson.message) {
        throw new Error(resultJson.message);
      }

      return dispatch(attendeeDetailsSuccess(resultJson));
    } catch (e) {
      dispatch(displayToast(e.message));
      return dispatch(attendeeDetailsFailure(e.message));
    }
  };
}
