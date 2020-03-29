import React, { Component } from "react";
import styles from "./VisualProfilePage.css";
import CenteredContent from "../../core/CenteredContent";
import VideoComponent from "../general/VideoComponent";
import Button from "../general/Button.js";
import SignUpBar from "../Blog/SignUpBar";
import Footer from "../Footer/Footer";
import PrimaryHeaderContainer from "../HomePage/container/PrimaryHeaderContainer";
import DesktopOnly from "../general/DesktopOnly";
import MobileOnly from "../general/MobileOnly";
import MobileHeader from "../HomePage/MobileHeader";
import FooterContainer from "../Footer/FooterContainer";
import SignUpBarContainer from "../Blog/SignUpBarContainer";
import { isUserLogedIn } from "../../utils/constant";
export default class VisualProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false
    };
  }

  playVideo = () => {
    this.setState({
      playing: true
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className={styles.base}>
          <div className={styles.headerHolder}>
            <div className={styles.fixedHeader}>
              <DesktopOnly>
                <PrimaryHeaderContainer history={this.props.history} />
              </DesktopOnly>
              <MobileOnly>
                <MobileHeader />
              </MobileOnly>
            </div>
          </div>
          <CenteredContent>
            <div className={styles.container}>
              <div className={styles.bannerContainer}>
                <div className={styles.banner}>
                  <div className={styles.overlay}>
                    <div className={styles.contentContainer}>
                      <div className={styles.heading}>
                        {"Build Visual Profile"}
                      </div>
                      <div className={styles.content}>
                        {
                          "In current times, your digital impression is as important as your offline impression. So, level up your online profile to make a great digital impression."
                        }
                      </div>
                      <div onClick={() => this.props.showSignUpModule()}>
                        <Button
                          type="primary"
                          backgroundColor={"#4F439A"}
                          fontColor={"#fff"}
                          height={50}
                          width={210}
                          label="Build Visual Profile"
                          borderRadius={10}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.aboutBase}>
                <div className={styles.aboutConatiner}>
                  <div className={styles.aboutContent}>
                    <div className={styles.questionContainer}>
                      <div className={styles.question}>How do I make a</div>
                      <div className={styles.quetionWithColor}>
                        stellar profile?
                      </div>
                    </div>
                    <div className={styles.answer}>
                      Use our unique Profile builder to build a visually
                      appealing profile by adding pictures and
                      videos. And then, publish it online as your digital
                      identity.
                    </div>
                    <div className={styles.buttonContainer}>
                      <Button
                        disabled={true}
                        type="primary"
                        backgroundColor={"#F6EEF5"}
                        borderColor="#F6EEF5"
                        fontColor={"#AD5DA3"}
                        height={50}
                        width={210}
                        label="Demo video"
                        borderRadius={10}
                        playing={this.state.playing}
                        onClick={() => this.playVideo()}
                      />
                      <div className={styles.arrow}></div>
                    </div>
                  </div>
                </div>
                <div className={styles.videoContainer}>
                  <VideoComponent
                    url={"https://www.youtube.com/watch?v=3SmZyxrvHyU"} // put your video link here..
                    playing={this.state.playing}
                    // onPlay={val => {
                    //   this.props.onPlay(val);
                    // }}
                    // onPause={val => {
                    //   this.props.onPause(val);
                    // }}
                    // onEnd={this.handleOnEnd}
                    // onProgress={val => {
                    //   this.props.onProgress(val);
                    // }}
                  />
                  <div className={styles.overlayVideo}></div>
                </div>
              </div>
              {!isUserLogedIn && (
                <div className={styles.signUpBarContainer}>
                  <SignUpBarContainer
                    heading={"Don’t miss the new updates."}
                    content={
                      "Get weekly updates on the newest design stories, case studies and tips right in your mailbox."
                    }
                    content2={false}
                    buttonText={"SUBSCRIBE"}
                  />
                </div>
              )}
            </div>
          </CenteredContent>
          <div className={styles.footerSection}>
            <FooterContainer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
