import React, { Component } from "react";
import BottomSlideModal from "../modules/component/BottomSlideModal";
import styles from "./UploadCV.css";
import CancelIcon from "../../images/Cancel_FIll.svg";
import UploadIcon from "../../images/Upload.svg";
import Button from "../general/Button";
import { IMAGE_URL_ROOT } from "../../utils/constant";

export default class UploadCV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: this.props.cvUrl ? { name: this.props.cvUrl } : [],
      image: null
    };
  }
  showEventSelector = () => {
    if (this.props.showEventSelector) {
      this.setState({ stopSlider: true });
      this.props.closeModal();
    }
  };
  handleChange(event) {
    if (event.target.files[0]) {
      let panImage = URL.createObjectURL(event.target.files[0]);

      this.setState({
        file: event.target.files[0],
        image: panImage
      });
    }
  }
  ImageChange(event) {
    this.setState({
      image: null,
      file: null
    });
  }

  handleSubmit = async () => {
    let formData = new FormData();
    formData.append("file", this.state.file);
    if (this.props.postCVExperienceEvent)
      this.props.postCVExperienceEvent(formData);
  };
  componentWillReceiveProps = nextProps => {
    if (nextProps.pstCvdetails) {
      window.location.reload();
    }
  };

  render() {
    return (
      <React.Fragment>
        <div
          className={styles.showCross}
          onClick={() => this.props.closeModal()}
        />
        <BottomSlideModal>
          <div className={styles.base}>
            <div className={styles.heading}>Upload CV</div>
            <div className={styles.container}>
              <div className={styles.iconWithNameContainer}>
                <div className={styles.iconHolder}>
                  {this.state.file ? (
                    <div className={styles.iconWithName}>
                      {this.state.file.name}
                    </div>
                  ) : (
                    <div className={styles.iconWithName}>
                      {this.state.file[0] &&
                        this.state.file[0].file &&
                        this.state.file[0].file.name}
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.iconWithImageContainer}>
                <div className={styles.uploadIcon}>
                  <input
                    id="img-icon"
                    type="file"
                    accept="application/pdf, application/vnd.ms-excel"
                    onChange={e => this.handleChange(e)}
                  />
                </div>
                <div className={styles.imageContainer}>
                  <label for="img-icon">
                    <img
                      src={UploadIcon}
                      alt="upload"
                      width="40px"
                      height="auto"
                    />
                  </label>

                  <div className={styles.iconSubHeding}>Upload your CV</div>
                  <div className={styles.iconName}>Max.file size:2MB</div>
                  <div className={styles.iconName}>PDF only</div>
                </div>
              </div>
              <div className={styles.button}>
                <Button
                  type="primary"
                  backgroundColor={"#4F439A;"}
                  fontColor={"#fff"}
                  label="UPLOAD"
                  height={50}
                  width={263}
                  borderRadius={5}
                  onClick={() => this.handleSubmit()}
                />
              </div>
            </div>
          </div>
        </BottomSlideModal>
      </React.Fragment>
    );
  }
}
