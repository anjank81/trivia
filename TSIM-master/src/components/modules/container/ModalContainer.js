import { connect } from "react-redux";
import ModalRoot from "../component/ModalRoot.js";
import { withRouter } from "react-router-dom";
import * as modalActions from "../modal.actions.js";
const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.modal,
    modalStatus: state.modal.modalDisplayed,
    modalType: state.modal.modalType,
    ownProps: state.modal.ownProps
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showModal: (type, ownProps = null) => {
      dispatch(modalActions.showModal(type, ownProps));
    },
    hideModal: () => {
      dispatch(modalActions.hideModal());
    }
  };
};
const ModalContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ModalRoot)
);

export default ModalContainer;
