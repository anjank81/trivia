import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { showModal, USER_POST_MODAL } from "../../modules/modal.actions";
import FeedExtraImagesComponent from "../FeedExtraImagesComponent/FeedExtraImagesComponent";

const mapDispatchToProps = dispatch => {
    return {
        showUserPostModal: data => {
            dispatch(showModal(USER_POST_MODAL, data));
        }
    };
};

const mapStateToProps = state => {

    return {
        imageArr: state.feed.imagesArr
    };
};
const FeedExtraImagesContainer = withRouter(
    connect(mapStateToProps, mapDispatchToProps)(FeedExtraImagesComponent)
);

export default FeedExtraImagesContainer;
