import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { showModal, ALL_CONNECTION_MODAL } from "../modal.actions.js";
import Connections from "../../Connections/ConnectionsPage";
const mapDispatchToProps = dispatch => {
  return {
    showAllConnectionModal: data => {
      dispatch(showModal(ALL_CONNECTION_MODAL, data));
    }
  };
};

const mapStateToProps = state => {
  return {
    loading: state
  };
};
const ConnectionContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Connections)
);

export default ConnectionContainer;
