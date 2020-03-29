import React, { Component } from "react";
// import { LinkedInPopUp } from "react-linkedin-login-oauth2";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import {
  HOME,
  BLOG,
  EVENT,
  TERMS,
  PRIVACY,
  VISUAL_PROFILE,
  SEEK_GUIDE,
  ABOUT_US,
  EVENT_DETAILS,
  BLOG_DETAILS,
  MORE,
  PROFILE,
  FEED,
  CONNECTION,
  SETTING,
  EULA,
  NOTFOUND,
  SET_PASSWORD,
  WELCOME
} from "./utils/constant";
import styles from "./App.css";
import MorePage from "./components/HomePage/MorePage";
import Terms from "./components/TermsAndConditions/TermsAndConditions";
import Privacy from "./components/TermsAndConditions/Privacy";
import Eula from "./components/TermsAndConditions/Eula";
import AboutUs from "./components/AboutUs/AboutUs";
import ModalContainer from "./components/modules/container/ModalContainer";
import EventPageContainer from "./components/Event/container/EventPageContainer";
import HomeContainer from "./components/HomePage/container/HomeContainer";
import EventDetailsPageContainer from "./components/Event/container/EventDetailsPageContainer";
import ConnectionsContainer from "./components/modules/container/ConnectionContainer";
import ProfileContainer from "./components/Profile/container/ProfileContainer";
import FeedContainer from "./components/Feed/container/FeedContainer";
import Settings from "./components/Settings/SettingsContainer/SettingsContainer";
import BlogContainer from "./components/Blog/container/BlogContainer";
import VisualProfileContainer from "./components/VisualProfile/conatiner/VisualProfileContainer";
import SeekGuideContainer from "./components/SeekGuide/SeekGuideContainer";
import BlogDetailsContainer from "./components/Blog/container/BlogDetailsPageContainer";
import FeedExtraImagesContainer from "./components/Feed/container/FeedExtraImagesContainer";
import NotFound from "./components/NotFound/NotFound";
import ToastContainer from "./components/modules/container/ToastContainer";
import smoothscroll from "smoothscroll-polyfill";
import SetPasswordContainer from "./components/modules/container/SetPasswordContainer";
import SetPassword from "./components/SetPassword/SetPassword";
import * as Cookie from "./utils/Cookie";
import { ACCESS_TOKEN } from "./utils/constant";
import WelcomeModuleContainer from "./components/modules/container/WelcomeModuleContainer";
import AttendeeContainer from "./components/Attendee/AttendeeContainer";
import LinkedInPage from "./components/SignUp/SignUp";
class App extends Component {
  componentDidMount() {
    smoothscroll.polyfill();
  }

  render() {
    let isUserLogedIn = Cookie.getCookie(ACCESS_TOKEN) ? true : false;
    return (
      <BrowserRouter>
        <Switch>
          {isUserLogedIn ? (
            <Route exact path={HOME} component={FeedContainer} />
          ) : (
            <Route exact path={HOME} component={HomeContainer} />
          )}

          <Route path={BLOG} component={BlogContainer} />
          <Route path={MORE} component={MorePage} />
          <Route path={TERMS} component={Terms} />
          <Route path={PRIVACY} component={Privacy} />
          <Route path={VISUAL_PROFILE} component={VisualProfileContainer} />
          <Route path={SEEK_GUIDE} component={SeekGuideContainer} />
          <Route path={ABOUT_US} component={AboutUs} />
          <Route path={EVENT_DETAILS} component={EventDetailsPageContainer} />
          <Route path={BLOG_DETAILS} component={BlogDetailsContainer} />
          <Route path={EVENT} component={EventPageContainer} />
          <Route path={PROFILE} component={ProfileContainer} />
          {/* <Route path={FEED} component={FeedContainer} /> */}
          <Route path={CONNECTION} component={ConnectionsContainer} />
          <Route path="/feedImages" component={FeedExtraImagesContainer} />
          <Route path={SETTING} component={Settings} />
          <Route path={EULA} component={Eula} />
          <Route path={NOTFOUND} component={NotFound} />
          <Route path={SET_PASSWORD} component={SetPasswordContainer} />
          <Route path={WELCOME} component={WelcomeModuleContainer} />
          <Route path={"/event-attendees"} component={AttendeeContainer} />
          {/* <Route exact path="/linkedin" component={LinkedInPopUp} /> */}
          <Route path="/" component={LinkedInPage} />
          <Route>
            <Redirect to={NOTFOUND}></Redirect>
          </Route>
        </Switch>
        <ModalContainer />
        <ToastContainer />
      </BrowserRouter>
    );
  }
}

export default App;
