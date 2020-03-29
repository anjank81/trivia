import React, { Component } from "react";
import BottomSlideModal from "./BottomSlideModal";
import styles from "./ProfileModal.css";
import Button from "../../../core/Button";
import Textarea from "../../../core/TextArea";
import { lettersWithSpace } from "../../../utils/validation";
import Input2 from "../../../core/Input2";
import { PROFILE } from "../../../utils/constant";
export default class ProfileModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.userDetails && this.props.userDetails.firstName,
      lastName: this.props.userDetails && this.props.userDetails.lastName,
      designation: this.props.summary && this.props.summary.designation,
      location: this.props.summary && this.props.summary.location,
      summary: this.props.summary && this.props.summary.profileSummary
    };
  }
  componentWillReceiveProps = nextprops => {
    if (nextprops.profileDetails) {
      window.location.reload();
    }
  };
  handleSignUp = () => {
    if (this.state.firstName) {
      if (lettersWithSpace(this.state.firstName)) {
        alert("Please enter a valid first name");
        return false;
      }
    }
    if (this.state.lastName) {
      if (lettersWithSpace(this.state.lastName)) {
        alert("Please enter a valid Last name");
        return false;
      }
    }

    const reqBody = {
      userName: `${this.state.firstName}` + " " + `${this.state.lastName}`,
      designation: this.state.designation,
      location: this.state.location,
      profileSummary: this.state.summary
    };
    this.props.profileEvent(reqBody);
  };

  render() {
    const allBlogsDetails = this.props && this.props.userProfileDetails;
    return (
      <BottomSlideModal width="400px">
        <div className={styles.centermodal}>
          <div className={styles.headerCont}>
            <div
              className={styles.back}
              onClick={() => this.props.closeModal()}
            ></div>
            <div className={styles.profileheader}>My Profile</div>
          </div>
          <div className={styles.brdr}></div>

          <div className={styles.inpcont}>
            <div className={styles.section}>
              <div className={styles.label}>FirstName</div>
              <Input2
                className={styles.input}
                type="text"
                height={50}
                width="100%"
                value={this.state.firstName}
                onChange={val => this.setState({ firstName: val })}
              ></Input2>
            </div>
            <div className={styles.section}>
              <div className={styles.label}>LastName</div>
              <Input2
                className={styles.input}
                type="text"
                height={50}
                width="100%"
                value={this.state.lastName}
                onChange={val => this.setState({ lastName: val })}
              ></Input2>
            </div>
            <div className={styles.section}>
              <div className={styles.label}>Designation</div>
              <Input2
                className={styles.Input}
                type="text"
                height={50}
                width="100%"
                value={this.state.designation}
                onChange={val => this.setState({ designation: val })}
              ></Input2>
            </div>
            <div className={styles.section}>
              <div className={styles.label}>Location</div>{" "}
              <Input2
                className={styles.Input}
                type="text"
                height={50}
                width="100%"
                value={this.state.location}
                onChange={val => this.setState({ location: val })}
              ></Input2>
            </div>
            <div className={styles.section}>
              {" "}
              <div className={styles.label}>Professional Summary</div>
              <Textarea
                placeholder="(For ex: A Human resources leader with over 18 years of experience across Talent management, HR Policy and Recruitment)"
                rows={"3"}
                value={this.state.summary}
                onChange={val => this.setState({ summary: val })}
                height={85}
                // maxLength={100}
                // border="none"
              />
            </div>
          </div>
          <div className={styles.buttonCont}>
            <Button
              width="160px"
              backgroundColor="transparent"
              color="#4F439A"
              label="Cancel"
              onClick={() => this.props.closeModal()}
            ></Button>
            <Button
              width="160px"
              backgroundColor="#E0DEED"
              color="#4F439A"
              label="Save Changes"
              onClick={() => this.handleSignUp()}
              // disabled={
              //   !(
              //     this.state.firstName &&
              //     this.state.lastName &&
              //     this.state.designation &&
              //     this.state.location &&
              //     this.state.summary
              //   )
              // }
            ></Button>
          </div>
        </div>
      </BottomSlideModal>
    );
  }
}
