import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import UploadVideo from "../UploadVideo";
import { showModal, CENTER_MODULE_DEMO,UPLOAD_VIDEO_MODAL} from "../../modules/modal.actions";
const mapDispatchToProps = dispatch => {
  return {
    showUploadVideoEvent: data => {
      dispatch(showModal(UPLOAD_VIDEO_MODAL, data));
    }
  };
};

const mapStateToProps = state => {

  return {
    loading: state
  };
};
const UploadVideoModalContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UploadVideo)
);

export default UploadVideoModalContainer;