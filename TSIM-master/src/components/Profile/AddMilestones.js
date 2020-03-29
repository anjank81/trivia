import React from "react";
import styles from "../Profile/AddMilestones.css";
import Input2 from "../../core/Input2";
import addImg from "../../images/Add-Fill-color.svg";
import CenterSlideModel from "../modules/component/CenterSlideModel/CenterSlideModel";

export default class AddMilestones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: [],
      image: this.props.photoUrl ? this.props.photoUrl : "",
      title: this.props.title ? this.props.title : "",
      description: this.props.description ? this.props.description : ""
    };
  }

  showEventSelector = () => {
    if (this.props.showEventSelector) {
      this.setState({ stopSlider: true });
      this.props.closeModal();
    }
  }; 
  onChange = async event => {
    await this.setState({ file: [...event.target.files] });
  };

  handleSignUp = () => {
    let formData = new FormData();
    // formData.append("userMilestoneId", this.props.userMilestoneId);
    formData.append("title", this.state.title);
    formData.append("description", this.state.description);
    formData.append("file", this.state.file && this.state.file[0]);
    this.props.milestoneEvent(formData);
    this.props.closeModal();
    // this.props.getMilestoneDetails();
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.postMilestoneDetails !== this.props.postMilestoneDetails) {
      if (nextProps.postMilestoneDetails) {
        // this.props.getProfileDetails();
        // console.log
      }
    }
    if (nextProps.getMilestoneDetails !== this.props.getMilestoneDetails) {
      this.props.getMilestoneDetails();
    }
  };

  render() {
    return (
      <CenterSlideModel>
        <div className={styles.baseContainer}>
          <div className={styles.addMilestones}>Add Milestones</div>
          <div className={styles.showcase}>
            Showcase the highlights of your career
          </div>
          <div className={styles.ovalContainer}>
            <div className={styles.oval} onChange={e => this.onChange(e)}>
              <input
                type="file"
                accept={"image"}
                style={{
                  cursor: "pointer",
                  borderRadius: "50%",
                  width: "100px",
                  opacity: "0",
                  height: "100px",
                  zIndex: "1",
                  backgroundSize: "100%"
                }}
                value={this.value}
              />
              {this.state.file.length <= 0 ? (
                // <img className={styles.addImg} src={addImg} />
                <div
                  className={styles.imageWithCross}
                  style={{
                    backgroundImage: `url(${addImg})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "70%",
                    backgroundPosition: "center"
                  }}
                />
              ) : (
                // <img className={styles.addImg} src={this.state.panImage} />
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
                />
              )}
            </div>
          </div>

          <div className={styles.addPhoto}>ADD PHOTO</div>
          <div className={styles.title}>
            {!this.state.title ? "Title" : this.state.title}
          </div>
          <div className={styles.description}>
            {" "}
            {!this.state.description ? "Description" : this.state.description}
          </div>
          <div className={styles.input}>
            {/* {!this.state.title ? ( */}
            <Input2
              placeholder="Add Title (Max 2 words)"
              value={this.state.title}
              onChange={val => this.setState({ title: val })}
              textStyle={{
                fontSize: 14,
                fontFamily: "Regular",
                lineHeight: 20
              }}
              height={50}
              boxy={true}
              borderColor={"#7f7f7f"}
              borderBottom={"#7f7f7f"}
            />
            {/* ) : null} */}
          </div>
          <div className={styles.input}>
            {/* {!this.state.description ? ( */}
            <Input2
              placeholder="Add Description (Max 5 words)"
              value={this.state.description}
              onChange={val => this.setState({ description: val })}
              textStyle={{
                fontSize: 14,
                fontFamily: "Regular",
                lineHeight: 20
              }}
              height={50}
              boxy={true}
              borderColor={"#7f7f7f"}
              borderBottom={"#7f7f7f"}
            />
            {/* ) : null} */}
          </div>
          <div className={styles.submit} onClick={() => this.handleSignUp()}>
            SUBMIT
          </div>
        </div>
      </CenterSlideModel>
    );
  }
}
