import React, { Component } from "react";
import styles from "./RecommendedConnection.css";
import profileImage from "../../images/Profile-Fill-grey.svg";
import Button from "../general/Button";
export default class RecommendedConnection extends Component {
  render() {
    return (
      <div className={styles.base}>
        <div className={styles.container}>
          <div className={styles.profileHolder}>
            <div className={styles.profilePic}>
              <img
                src={
                  this.props.connectionDetails &&
                  this.props.connectionDetails.profile_pic
                    ? this.props.connectionDetails.profile_pic
                    : profileImage
                }
                width="100%"
                height="100%"
                className={styles.profileImage}
              />
            </div>
            <div className={styles.profileDetails}>
              <div className={styles.profileName}>
                {this.props.connectionDetails &&
                  this.props.connectionDetails.name}
              </div>
              <div className={styles.profileDesignation}>
                {this.props.connectionDetails &&
                  this.props.connectionDetails.designation}
              </div>
              {this.props.connectionDetails &&
                this.props.connectionDetails.city &&
                this.props.connectionDetails.state && (
                  <div className={styles.profileAddress}>
                    {" "}
                    {this.props.connectionDetails &&
                      this.props.connectionDetails.city}
                    ,{" "}
                    {this.props.connectionDetails &&
                      this.props.connectionDetails.state}
                  </div>
                )}
            </div>
          </div>
          <div className={styles.mutualConnectionInfoDetails}>
            <div className={styles.mutualConnectionImages}>
              {this.props.connectionDetails &&
                this.props.connectionDetails.mutual_connection &&
                this.props.connectionDetails.mutual_connection.map((val, i) => {
                  if (i <= 2) {
                    return (
                      <img
                        src={val.profile_pic ? val.profile_pic : profileImage}
                        className={styles.dot}
                      />
                    );
                  }
                })}
              {this.props.connectionDetails &&
                this.props.connectionDetails.mutual_connection &&
                this.props.connectionDetails.mutual_connection.length > 2 && (
                  <div className={styles.mutualConnectionInfo}>
                    {this.props.connectionDetails &&
                      this.props.connectionDetails.mutual_connection &&
                      this.props.connectionDetails.mutual_connection.length -
                        2}{" "}
                    Mutual Connections
                  </div>
                )}
            </div>
            <div className={styles.buttonContainer}>
              <Button
                type="primary"
                backgroundColor={"#E0DEED"}
                fontColor={"rgb(79, 67, 154,0.3)"}
                borderColor={"#E0DEED"}
                height={30}
                width={90}
                disabled={true}
                label="CONNECT"
                borderRadius={3}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
