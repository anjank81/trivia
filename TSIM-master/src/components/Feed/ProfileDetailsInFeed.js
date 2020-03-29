import React, { Component } from "react";
import styles from "./ProfileDetailsInFeed.css";
import profileImage from "../../images/Profile-Fill-grey.svg";
import Button from "../general/Button";
import { IMAGE_URL_ROOT } from "../../utils/constant";
export default class ProfileDetailsInFeed extends Component {
  render() {
    return (
      <div className={styles.base}>
        <div className={styles.container}>
          <div
            className={styles.editIcon}
            onClick={() => {
              this.props.history.push("/profile");
            }}
          ></div>
          <div className={styles.profileHolder}>
            <div className={styles.profileImageHolder}>
              <img
                src={
                  this.props.user_profile_photos &&
                  this.props.user_profile_photos.photo_url
                    ? IMAGE_URL_ROOT + this.props.user_profile_photos.photo_url
                    : profileImage
                }
                width="100%"
                height="100%"
                className={styles.profileImage}
                alt="ProfileImage"
              />
            </div>
            <div className={styles.profileName}>
              {this.props.firstName != "undefined"
                ? this.props.firstName
                : "The Star In Me"}{" "}
              {this.props.lastName}
            </div>
            <div className={styles.designation}>
              {this.props.user_profile && this.props.user_profile.designation}
              {/* Life coach | Interaction Designer */}
            </div>
            <div className={styles.profileCompletedPercentage}>
              {this.props.profileCompletion} Completed
            </div>
            <div className={styles.completedBar}>
              <div
                className={styles.completedLevel}
                style={{
                  width: this.props.profileCompletion
                    ? this.props.profileCompletion
                    : "0%"
                }}
              ></div>
            </div>
            <div className={styles.profileDetailContainer}>
              <div className={styles.connectionsContainer}>
                <div className={styles.connectionsCount}>
                  {this.props.numberOfConnections}
                </div>
                <div className={styles.connections}>connections</div>
              </div>
              <div className={styles.connectionsContainer}>
                <div className={styles.connectionsCount}>
                  {this.props.numberOfFollowers}
                </div>
                <div className={styles.connections}>Follow</div>
              </div>
              <div className={styles.connectionsContainer}>
                <div className={styles.connectionsCount}>
                  {this.props.numberOfPosts}
                </div>
                <div className={styles.connections}>Post</div>
              </div>
            </div>
            <div
              className={styles.myProfileButton}
              onClick={() => {
                this.props.history.push("/profile");
              }}
            >
              <Button
                type="primary"
                backgroundColor={"#E0DEED"}
                fontColor={"#4F439A"}
                borderColor={"#E0DEED"}
                height={40}
                width={136}
                label="MY PROFILE"
                borderRadius={3}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
