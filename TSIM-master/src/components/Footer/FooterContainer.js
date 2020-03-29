import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { GET_IN_TOUCH, showModal } from "../modules/modal.actions";
import Footer from "./Footer";
const mapDispatchToProps = dispatch => {
  return {
    showGetInTouchModal: data => {
      dispatch(showModal(GET_IN_TOUCH, data));
    }
  };
};
const mapStateToProps = state => {
  return {
    footer: state
  };
};
const FooterContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Footer)
);

export default FooterContainer;
