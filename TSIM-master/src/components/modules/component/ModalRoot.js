import React from "react";
import ReactDOM from "react-dom";
import ModalPanel from "./ModalPanel";
import DemoModalContainer from "../container/DemoModalContainer";
import SignInModuleContainer from "../container/SignInModuleContainer";
import SignUpModuleContainer from "../container/SignUpModuleContainer";
import WelcomeModuleContainer from "../container/WelcomeModuleContainer";
import ForgotPasswordContainer from "../container/ForgotPasswordContainer";
import ForgotPassword from "../../ForgotPassword/ForgotPassword";
import SetPassword from "../../SetPassword/SetPassword";
import SetPasswordContainer from "../container/SetPasswordContainer";
import SelectEventContainer from "../container/SelectEventContainer";
import ProfileModalContainer from "../../Profile/container/ProfileModalContainer";
import SliderComponent from "./SliderComponent/SliderComponent";
import AllConnection from "./AllConnection";
import ImageUplaod from "../../Profile/container/UploadImageContainer";
//import WorkExpModalContainer from "../container/WorkExpModalContainer";
import UserPostModal from "../../Feed/UserPostModal";
import UserShareModal from "../../../components/Feed/UserShareModal";
import EventDetailSliderComponent from "../../Event/EventDetailSlider/EventDetailSliderComponent";
import UploadCV from "../../Profile/container/UplaodCVContainer";
import UploadVideo from "../../Profile/container/UploadVideoModalContainer";
import WorkExpModal from "../../Profile/container/WorkExperienceContainer";

import RegisterDetailsModuleContainer from "../container/RegisterDetailsModuleContainer";
import GetInTouchModal from "./GetInTouchModal";
import AddSkillsContainer from "../../Profile/container/AddSkillsContainer";
import AddLanguageContainer from "../../Profile/container/AddLanguageContainer";
import AddInterestsContainer from "../../Profile/container/AddInterestsContainer";
import AddActivityContainer from "../../Profile/container/AddActivityContainer";
import AddMilestones from "../../Profile/container/MilestoneContainer";
import FilterModuleContainer from "../container/FilterModuleContainer";
import EventSlidePageContainer from "../../Event/container/EventSlidePageContainer";
import TopicsPage from "../container/TopicContainer";
import UserPostModalContainer from "../container/UserPostModalContainer";
import UserMessageModal from "../../Profile/InstructionModal";


const modalRoot = document.getElementById("modal-root");

export default class ModalRoot extends React.Component {
  constructor(props) {
    super(props);

    this.el = document.createElement("div");
    this.state = {
      loggedIn: false,
      customerDetails: null
    };
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }
  componentWillMount() {
    if (this.props.history) {
      this.unlisten = this.props.history.listen((location, action) => {
        this.handleClose();
      });
    }
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
    this.unlisten();
  }

  handleClose() {
    if (this.props.hideModal) {
      this.props.hideModal();
    }
  }

  render() {
    const MODAL_COMPONENTS = {
      DemoModalContainer: (
        <DemoModalContainer
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      LoginModule: (
        <SignInModuleContainer
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      SignUpModule: (
        <SignUpModuleContainer
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),

      WelcomeModule: (
        <WelcomeModuleContainer
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      FilterModule: (
        <FilterModuleContainer
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      ForgotPassword: (
        <ForgotPasswordContainer
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      SetPassword: (
        <SetPasswordContainer
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      SelectEventModule: (
        <SelectEventContainer
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      ProfileModal: (
        <ProfileModalContainer
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),

      Slider: (
        <SliderComponent
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      RegisterDetailsModal: (
        <RegisterDetailsModuleContainer
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      EventDetailSlider: (
        <EventSlidePageContainer
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      AllConnectionModal: (
        <AllConnection
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      UserPostModal: (
        <UserPostModalContainer
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      UploadCVModal: (
        <UploadCV
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      WorkExpModal: (
        <WorkExpModal
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      ImageUpload: (
        <ImageUplaod
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      GetInTouchModal: (
        <GetInTouchModal
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      AddSkills: (
        <AddSkillsContainer
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      AddActivity: (
        <AddActivityContainer
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      AddLanguages: (
        <AddLanguageContainer
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      AddInterest: (
        <AddInterestsContainer
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      ShowMilestones: (
        <AddMilestones
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      TopicModal: (
        <TopicsPage
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      UploadVideoModal: (
        <UploadVideo
          closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      UserMessageModal: (
        <UserMessageModal
          // closeModal={() => this.handleClose()}
          {...this.props.ownProps}
        />
      ),
      UserShareModal:(
<UserShareModal
 closeModal={() => this.handleClose()}
{...this.props.ownProps}
      />)
    };

    let SelectedModal = MODAL_COMPONENTS[this.props.modalType];
    // let SelectedModal = MODAL_COMPONENTS["centerModalDemo"];
    const Modal = this.props.modalStatus ? (
      <ModalPanel
        closeModal={() => {
          this.handleClose();
        }}
      >
        {SelectedModal}
      </ModalPanel>
    ) : null;

    return ReactDOM.createPortal(Modal, this.el);
  }
}
