import React, { Component } from "react";
import profileImage from "../../images/Profile-Fill-grey.svg";
import styles from "./ProfileConnection.css";
import Button from "../general/Button";
import coverImage from "../Images/f.jpg";
export default class ProfileConnection extends Component {
  render() {
    return (
      <div className={styles.connectProfileContainer}>
        <div className={styles.coverImageForConnectionProfile}>
          <img
            src={this.props.wall_pic ? this.props.wall_pic : coverImage}
            width="100%"
            height="100%"
            className={styles.image}
          />
        </div>
        <div className={styles.connectProfileHolder}>
          <div className={styles.connectProfileImageHolder}>
            <img
              src={
                this.props.profile_pic ? this.props.profile_pic : profileImage
              }
              width="100%"
              height="100%"
              className={styles.connectProfileImage}
            />
          </div>
          <div className={styles.profileName}>{this.props.name}</div>
        </div>
        <div className={styles.connectProfileDetailsContainer}>
          <div className={styles.connectProfileDetails}>
            <div className={styles.connectProfileDesignations}>
              {this.props.designation
                ? this.props.designation
                : "Life Coach | Product Designer"}
            </div>
            <div className={styles.connectProfileTags}>
              {this.props.expert && this.props.expert[0]
                ? this.props.expert[0]
                : "Product Management"}
              <span className={styles.connectProfileTagsMoreThenOne}>
                {" & "}
                {this.props.expert && this.props.expert.length > 2
                  ? this.props.expert.length
                  : "2"}
                {" more"}
              </span>
            </div>
          </div>
          <div className={styles.connectionButton}>
            <Button
              type="primary"
              backgroundColor={"#E0DEED"}
              fontColor={"rgba(79,67,154,0.4)"}
              borderColor={"#E0DEED"}
              height={30}
              width={90}
              label="CONNECT"
              disabled={true}
              borderRadius={3}
            />
          </div>
        </div>
      </div>
    );
  }
}
