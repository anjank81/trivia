import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { addUserIntrest } from "../../actions/event.action";
import Intreseted from "./Intreseted";

const mapDispatchToProps = dispatch => {
  return {
    addUserIntrest: details => {
      dispatch(addUserIntrest(details));
    }
  };
};

const mapStateToProps = state => {
  return {
    loading: state.event.loading,
    addUserIntrestStatus: state.event.addUserIntrestStatus,
    addUserIntrestDetails: state.event.addUserIntrestDetails
  };
};
const IntrestedContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Intreseted)
);

export default IntrestedContainer;
