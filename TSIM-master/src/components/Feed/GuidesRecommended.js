import React, { Component } from "react";
import styles from "./GuidesRecommended.css";
import Button from "../general/Button";
import profileImage from "../../images/Profile-Fill-grey.svg";
export default class GuidesRecommended extends Component {
  render() {
    return (
      <div className={styles.base}>
        <div className={styles.container}>
          <div className={styles.profileHolder}>
            <div className={styles.profilePic}>
              <img
                src={
                  this.props.guidedetails && this.props.guidedetails.profile_pic
                    ? this.props.guidedetails.profile_pic
                    : profileImage
                }
                width="100%"
                height="100%"
                className={styles.profileImage}
              />
            </div>
            <div className={styles.profileDetails}>
              <div className={styles.profileName}>
                {this.props.guidedetails && this.props.guidedetails.name}
              </div>
              <div className={styles.profileDesignation}>
                {this.props.designation
                  ? this.props.designation
                  : "Interaction Designer"}
              </div>
              <div className={styles.profileAddress}>
                {this.props.guidedetails && this.props.guidedetails.city
                  ? this.props.guidedetails.city
                  : "Bengaluru"}
                ,{" "}
                {this.props.guidedetails && this.props.guidedetails.state
                  ? this.props.guidedetails.state
                  : "India"}
              </div>
            </div>
          </div>
          <div className={styles.mutualConnectionInfoDetails}>
            <div className={styles.mutualConnectionImages}>
              {this.props.guidedetails &&
                this.props.guidedetails.mutual_connection &&
                this.props.guidedetails.mutual_connection.map((val, i) => {
                  if (i <= 2) {
                    return (
                      <img
                        src={val.profile_pic ? val.profile_pic : profileImage}
                        className={styles.dot}
                        alt={"profile"}
                      />
                    );
                  }
                })}

              {/* <img src={profileImage} className={styles.dot} alt={"profile"} />
              <span className={styles.more}>+26</span> */}
              {this.props.guidedetails &&
                this.props.guidedetails.mutual_connection &&
                this.props.guidedetails.mutual_connection.length > 2 && (
                  <div className={styles.mutualConnectionInfo}>
                    {this.props.guidedetails &&
                      this.props.guidedetails.mutual_connection &&
                      this.props.guidedetails.mutual_connection.length - 2}{" "}
                    2 Mutual Connections
                  </div>
                )}
            </div>
            <div className={styles.buttonContainer}>
              <Button
                type="primary"
                backgroundColor={"#E0DEED"}
                fontColor={"rgba(79,67,154,0.4)"}
                borderColor={"#E0DEED"}
                disabled={true}
                height={30}
                width={90}
                label="CONNECT"
                borderRadius={3}
              />
            </div>
          </div>
          <div className={styles.expertDetailsContainer}>
            <div className={styles.expertHeading}>EXPERT</div>
            <div className={styles.tagContainer}>
              {this.props.guidedetails &&
                this.props.guidedetails.expert &&
                this.props.guidedetails.expert.map(val => {
                  return <div className={styles.tag}>{val}</div>;
                })}
              {[1, 2].map(val => {
                return (
                  <div className={styles.tag}>
                    {val == 1 ? "Interaction Design" : "Product strategy"}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
