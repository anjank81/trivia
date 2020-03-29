import React, { Component } from "react";
import styles from "./SeekGuide.css";
import CenteredContent from "../../core/CenteredContent";
import VideoComponent from "../general/VideoComponent";
import Button from "../general/Button.js";
import SignUpBar from "../Blog/SignUpBar";
import Footer from "../Footer/Footer";
import PrimaryHeaderContainer from "../HomePage/container/PrimaryHeaderContainer";
import FooterContainer from "../Footer/FooterContainer";
import SignUpBarContainer from "../Blog/SignUpBarContainer";
import { isUserLogedIn } from "../../utils/constant";
export default class SeekGuide extends Component {
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
              <PrimaryHeaderContainer history={this.props.history} />
            </div>
          </div>
          <CenteredContent>
            <div className={styles.container}>
              <div className={styles.bannerContainer}>
                <div className={styles.banner}>
                  <div className={styles.overlay}>
                    <div className={styles.contentContainer}>
                      <div className={styles.heading}>{"Seek Guidance"}</div>
                      <div className={styles.content}>
                        {
                          "There are times when we need more than a sounding board. We need a person with experience in our field, to guide us. "
                        }
                      </div>
                      <div className={styles.content}>
                        Reach out to a guide or become one.{" "}
                      </div>
                      <div className={styles.buttonHolder}>
                        <div
                          className={styles.button}
                          onClick={() => this.props.showSignUpModule()}
                        >
                          <Button
                            type="primary"
                            backgroundColor={"#4F439A"}
                            fontColor={"#fff"}
                            height={50}
                            width={210}
                            label="Seek Guidance"
                            borderRadius={10}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.aboutBase}>
                <div className={styles.aboutConatiner}>
                  <div className={styles.aboutContent}>
                    <div className={styles.questionContainer}>
                      <div className={styles.question}>How do I </div>
                      <div className={styles.quetionWithColor}>
                        seek guidance?
                      </div>
                    </div>
                    <div className={styles.answer}>
                      Get career guidance from experts in your field. And if you
                      are an expert yourself, do register as a guide to help
                      others.
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
                        onClick={() => this.playVideo()}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.videoContainer}>
                  <VideoComponent
                    url={"https://www.youtube.com/watch?v=3SmZyxrvHyU"} // put your video link here..
                    playing={this.state.playing}
                    // playing={this.props.isPlaying}
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
