import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { postAttendee } from "../../actions/attendee.action";
import Attendee from "../Attendee/Attendee";
const mapDispatchToProps = dispatch => {
  return {
    postAttendee: data => {
      dispatch(postAttendee(data));
    }
  };
};
const mapStateToProps = state => {
  return {
    attendeeDetails: state.attendee.attendeeDetails
  };
};
const AttendeeContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Attendee)
);

export default AttendeeContainer;
