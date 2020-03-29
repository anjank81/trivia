import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DemoModal from "../component/DemoModal";
import { showModal, CENTER_MODULE_DEMO } from "../modal.actions.js";
const mapDispatchToProps = dispatch => {
  return {
    showCliqCenterModule: data => {
      dispatch(showModal(CENTER_MODULE_DEMO, data));
    }
  };
};

const mapStateToProps = state => {
  return {
    loading: state
  };
};
const DemoModalContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DemoModal)
);

export default DemoModalContainer;
