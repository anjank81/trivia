import React, { Component } from "react";
import BottomSlideModal from "../modules/component/BottomSlideModal";
import styles from "./UploadVideo.css";
import CancelIcon from "../../images/Cancel_FIll.svg";
import UploadIcon from "../../images/Upload.svg";
import Button from "../general/Button";
import Upload from "../../images/Upload.svg";
import ReactPlayer from "react-player";
import Close from "../../images/Cancel_ine.svg";

export default class UploadVideo extends Component {
  constructor(props) {
    super(props);
    this.video = React.createRef();
    this.state = {
      file: [],
      image: null,
      filename: "",
      playVideo: false,
      error: ""
    };
  }
  handleRemoveVideo = files => {
    this.setState({ file: [] });
  };
  handleDuration = () => {
    return this.video.getDuration();
  };

  render() {
    return (
      <React.Fragment>
        <div
          className={styles.showCross}
          onClick={() => this.props.closeModal()}
        />
        <BottomSlideModal>
          <div className={styles.baseContainer}>
            <div className={styles.uploadintrovideo}>Upload intro video</div>
            <div>
              <div className={styles.videoWrapper}>
                <div className={styles.upload_btn_wrapper}>
                  {this.state.file &&
                  this.state.file[0] &&
                  this.state.file[0].fileVideo ? (
                    <div>
                      {this.state.file &&
                        this.state.file[0] &&
                        this.state.file[0].fileVideo && (
                          <div>
                            <div
                              className={styles.closeButton}
                              onClick={this.handleRemoveVideo}
                            >
                              <img src={Close} height="15px" width="15px" />
                            </div>
                            <ReactPlayer
                              ref={this.video}
                              url={this.state.file[0].fileVideo}
                              width="100%"
                              height="100%"
                            />
                          </div>
                        )}
                      <div>
                        {this.state.filename}
                        {/* 
                        {this.state.filename.execCommand("copy")} */}
                      </div>
                    </div>
                  ) : (
                    <div>
                      <button className={styles.btn}>
                        <img
                          className={styles.uploadImg}
                          src={Upload}
                          alt=""
                          height="30px"
                          width="30px"
                          style={{ margin: "10px" }}
                        />{" "}
                        Upload Your Video
                      </button>
                      <input
                        type="file"
                        onChange={e => {
                          let size = e.target.files[0].size / 1000000;
                          if (size < 10) {
                            // this.setState({ showVideo: true });
                            let prev = this.state.file;
                            prev.push({
                              fileVideo: URL.createObjectURL(e.target.files[0])
                            });
                            this.setState({
                              file: prev
                            });

                            // prev.push(e.target.files[0]);
                            this.setState({ file: e.target.files[0] });
                            this.setState({ file: prev });
                            this.setState({
                              filename: e.target.files[0].name,
                              size: this.size,
                              error: ""
                            });
                          } else {
                            this.setState({
                              error: "Size should be less 10 MB"
                            });
                          }
                        }}
                      />
                      <div className={styles.error}>{this.state.error}</div>
                    </div>
                  )}
                  {this.state.playVideo && (
                    <div className={styles.playVideo}>
                      <ReactPlayer url={this.state.file[0].fileVideo} playing />{" "}
                    </div>
                  )}
                </div>
                {/* <div className={styles.uploadVideo}>
                <img className={styles.uploadImg} src={Upload} alt="" />
                <div className={styles.uploadText}>Upload your video</div>
              </div> */}
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
              <div className={styles.listcont}>
                <ul className={styles.list}>
                  <li className={styles.introductory}>
                    An introductory video is a short video where you introduce
                    yourself. Such a video usually captures your personal
                    elevator pitch and sets the tone for your personal brand.
                  </li>
                  <li className={styles.introductory}>
                    Keep it short and crisp (less that 90 seconds)
                  </li>
                  <li className={styles.introductory}>
                    Pay attention to lighting
                  </li>
                  <li className={styles.introductory}>
                    An effective introductory video tells people who you are,
                    what you do, what differentiates you and what you aspire to
                    do.
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className={styles.upload}>UPLOAD</div>
              {this.state.file &&
              this.state.file[0] &&
              this.state.file[0].fileVideo ? (
                <div
                  className={styles.preview}
                  onClick={() => {
                    this.setState({ playVideo: !this.state.playVideo });
                  }}
                >
                  Preview
                </div>
              ) : (
                <div className={styles.watchVideo}>Not sure? Watch a video</div>
              )}
            </div>
          </div>
        </BottomSlideModal>
      </React.Fragment>
    );
  }
}
