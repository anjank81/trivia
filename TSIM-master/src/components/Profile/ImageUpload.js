import React, { Component } from "react";
import styles from "./ImageUpload.css";
import BottomSlideModal from "../modules/component/BottomSlideModal";
import Button from "../../core/Button";
import { PROFILE } from "../../utils/constant";

class ImageUplaod extends Component {
  constructor(props) {
    super(props);
    this.homeRef = React.createRef();
    this.state = {
      file: this.props && [{ profileURL: this.props.profileUrl }],
      slideIndex: 0,
      maxSlide: 5,
      width: null,
      height: null
    };
  }

  onChange = async event => {
    await this.setState({ file: [...event.target.files] });
    await this.setState({
      height: this.homeRef.current.offsetHeight,
      width: this.homeRef.current.offsetWidth
    });
  };

  removeImageFromList = val => {
    let file = this.state.file;
    let newarray = file.splice(0, val);
    this.setState({
      file: newarray
    });
  };

  getCroppedImageUrl = () => {
    let file = this.state.file;
    if (file.length > 0) {
      file.map((val, i) => {
        return this.setState({
          file: URL.createObjectURL(val[i])
        });
      });
    }
  };

  handleSubmit = async () => {
    if (this.state.width > 500 || this.state.height > 500) {
      this.props.showToast("Image size greater than 500*500");
    } else {
      let formData = new FormData();
      formData.append("file", this.state.file && this.state.file[0]);
      this.props.profileImageExperienceEvent(formData);
      if (this.props.getProfileDetails) {
        this.props.getProfileDetails();
      }
      // this.props.closeModal();
    }
  };
  componentWillReceiveProps = nextprops => {
    if (nextprops.userProfileImage) {
      window.location.reload();
    }
  };

  render() {
    return (
      <BottomSlideModal>
        <div className={styles.base}>
          <div className={styles.heading}>Add Profile Photo</div>
          <div style={{ position: "relative" }}>
            <div className={styles.uploadImageSection}>
              {this.state.file.length > 0 && this.state.file[0] ? (
                <div>
                  {this.state.file[0].profileURL ? (
                    <div className={styles.mySlides}>
                      {" "}
                      <div
                        style={{
                          backgroundImage: `url(${this.state.file[0].profileURL})`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          backgroundSize: "70%"
                        }}
                        className={styles.homepageCarousal}
                        ref={this.homeRef}
                      />
                    </div>
                  ) : (
                    <div className={styles.mySlides}>
                      {" "}
                      {this.state.file[0] && (
                        <div
                          style={{
                            backgroundImage: `url(${URL.createObjectURL(
                              this.state.file[0]
                            )})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "70%"
                          }}
                          className={styles.homepageCarousal}
                          ref={this.homeRef}
                        />
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div className={styles.uploadImageDummy} />
              )}
            </div>
            <div className={styles.uploadImageGroup}>
              {" "}
              {!this.state.file[0] ? (
                <div className={styles.uploadPlusButton}>
                  <input
                    type="file"
                    accept={".png, .jpg, .jpeg"}
                    onChange={e => this.onChange(e)}
                    style={{
                      cursor: "pointer",
                      borderRadius: "50%",
                      width: "44px",
                      opacity: "0",
                      height: "44px"
                    }}
                    value={this.value}
                  />
                </div>
              ) : this.state.file[0].profileURL ? (
                <div
                  className={styles.imageWithCross}
                  style={{
                    backgroundImage: `url(${this.state.file[0].profileURL})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "70%",
                    backgroundPosition: "center"
                  }}
                >
                  <div
                    className={styles.crossButton}
                    onClick={() => this.removeImageFromList(0)}
                  ></div>
                </div>
              ) : (
                <div
                  className={styles.imageWithCross}
                  style={{
                    backgroundImage: `url(${URL.createObjectURL(
                      this.state.file[0]
                    )})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "70%",
                    backgroundPosition: "center"
                  }}
                >
                  <div
                    className={styles.crossButton}
                    onClick={() => this.removeImageFromList(0)}
                  ></div>
                </div>
              )}
            </div>
          </div>
          <div className={styles.footer}>
            <Button
              width="100%"
              height="50px"
              backgroundColor="#4F439A"
              color="white"
              label="Update"
              onClick={() => this.handleSubmit()}
              disabled={this.state.file.length === 0}
            />
          </div>
        </div>
      </BottomSlideModal>
    );
  }
}

export default ImageUplaod;
