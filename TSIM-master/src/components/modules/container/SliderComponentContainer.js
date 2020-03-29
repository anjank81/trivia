import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SliderComponent from "../component/SliderComponent/SliderComponent";
import { showModal, SLIDER_COMPONENT } from "../modal.actions.js";
const mapDispatchToProps = dispatch => {
    return {
        showCliqCenterModule: data => {
            dispatch(showModal(SLIDER_COMPONENT, data));
        }
    };
};

const mapStateToProps = state => {
    return {
        loading: state
    };
};
const DemoModalContainer = withRouter(
    connect(mapStateToProps, mapDispatchToProps)(SliderComponent)
);

export default DemoModalContainer;
