import * as attendeeAction from "../actions/attendee.action";

const attendee = (
  state = {
    loginDetails: null,
    status: null,
    error: null,
    loading: false,
    attendeeDetails: []
  },
  action
) => {
  switch (action.type) {
    case attendeeAction.POST_ATTENDEE_REQUEST:
      return Object.assign({}, state, {
        status: action.status,
        loginError: null,
        loading: true
      });

    case attendeeAction.POST_ATTENDEE_SUCCESS:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        attendeeDetails: action.attendeeDetails
      });
    case attendeeAction.POST_ATTENDEE_FAILURE:
      return Object.assign({}, state, {
        status: action.status,
        loading: false,
        error: action.error
      });

    default:
      return state;
  }
};
export default attendee;
