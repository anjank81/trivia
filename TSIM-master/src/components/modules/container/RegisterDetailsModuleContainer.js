import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  bookEvent,
  paymentStatus,
  getRegisterEvent
} from "../../../actions/event.action";
import RegisterDetailsModule from "../component/RegisterDetailsModule";

const mapDispatchToProps = dispatch => {
  return {
    bookEvent: (id, data) => {
      dispatch(bookEvent(id, data));
    },
    paymentStatus: (id, data) => {
      dispatch(paymentStatus(id, data));
    },
    getRegisterEvent: id => {
      dispatch(getRegisterEvent(id));
    }
  };
};
const mapStateToProps = state => {
  return {
    registerEventList: state.event.registerEventList,
    paymentStatus: state.event.paymentStatus,
    paymentDetails: state.event.paymentDetails,
    paymentLoader: state.event.paymentLoader,
    paymentError: state.event.paymentError,
    registerEventList: state.event.registerEventList,
    paymentStatusDetails: state.event.paymentStatusDetails
  };
};
const RegisterDetailsModuleContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RegisterDetailsModule)
);

export default RegisterDetailsModuleContainer;
