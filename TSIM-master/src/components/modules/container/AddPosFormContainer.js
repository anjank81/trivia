import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import AddPosForm from "../component/AddPosForm";
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
const AddposFormContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(AddPosForm)
);

export default AddposFormContainer;
