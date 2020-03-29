import React from "react";
import CenterSlideModel from "../modules/component/CenterSlideModel/CenterSlideModel";
import Upload from "../../images/Upload.svg";
import styles from "./UploadIntroVideo.css";

export default class UploadIntroVideo extends React.Component {
  render() {
    return (
      <CenterSlideModel>
        <div className={styles.baseContainer}>
          <div className={styles.uploadintrovideo}>Upload intro video</div>
          <div>
            <div className={styles.videoWrapper}>
              <div className={styles.uploadVideo}>
                <img className={styles.uploadImg} src={Upload} alt="" />
                <div className={styles.uploadText}>Upload your video</div>
              </div>
              <div className={styles.maxFileSize}>
                Max. file size: 10 MB
                <br />
                Time Limit: max 90 secs
                <br />
                Formats: MP4
                <br />
                Resolution: 1920x1080
              </div>
            </div>
            <ul className={styles.list}>
              <li className={styles.introductory}>
                An introductory video is a short video where you introduce
                yourself. Such a video usually captures your personal elevator
                pitch and sets the tone for your personal brand.
              </li>
              <li className={styles.introductory}>
                Keep it short and crisp (less that 90 seconds).
              </li>
              <li className={styles.introductory}>
                Pay attention to lighting.
              </li>
              <li className={styles.introductory}>
                An effective introductory video tells people who you are, what
                you do, what differentiates you and what you aspire to do.
              </li>
            </ul>
          </div>
          <div className={styles.upload}>UPLOAD</div>
          <div className={styles.watchVideo}>Not sure? Watch a video</div>
        </div>
      </CenterSlideModel>
    );
  }
}
