import React, { Component } from "react";
import ProfileImage from "./ProfileImage";
import profile from "../../images/Profile-Fill-grey.svg";
import styles from "./FeedProfileHolder.css";
import { getUTCDateMonthFormat } from "../../utils/dateTimeFunction";
export default class FeedProfileHolder extends Component {
  render() {
    const UTCDate = new Date(
      this.props && this.props.createdAt && this.props.createdAt
    ).toUTCString();

    return (
      
      <div className={styles.feedHeaderContainer}>
        <div className={styles.profileImage}>
          <ProfileImage
            src={this.props.profile_pic ? this.props.profile_pic : profile}
          />
        </div>
        <div className={styles.profileDetails}>
          <div className={styles.profileName}>
            {this.props.first_name
              ? this.props.first_name !== "undefined"
                ? this.props.first_name
                : "The Star In Me"
              : "The Star In Me"}{" "}
            {this.props.last_name}
          </div>
          <div className={styles.date}>
            {this.props.createdAt
              ? getUTCDateMonthFormat(UTCDate, true, true)
              : "10 Sep 2019"}{" "}
          </div>
        </div>
      </div>
    );
  }
}
