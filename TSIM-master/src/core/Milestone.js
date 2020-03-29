import React, { Component } from "react";
import styles from "./Milestone.css";
import { IMAGE_URL_ROOT } from "../utils/constant";
import Image from "../core/Image";

class Milestone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  componentDidMount = () => {
    // if (this.props.getMilestoneDetails) {
    //   this.props.getMilestoneDetails();
    // }
  };

  showMilestones = (title, photoUrl) => {
    if (this.props.showMilestones) this.props.showMilestones(title, photoUrl);
  };

  render() {

    return (
      <div
        className={styles.base}
        onClick={(title, photoUrl) => this.showMilestones(title, photoUrl)}
      >
        {!this.props.photoUrl ? (
          <div className={styles.addprofileImage}></div>
        ) : (
          <div className={styles.noprofileImage}>
            <img
              src={this.props.photoUrl}
              width="100%"
              height="100%"
              alt="icon"
              styles="margin:0 auto"
            />
          </div>
        )}
        {this.props.title ? (
          <div className={styles.userMilestone}>
            <div className={styles.milestoneTitle}>{this.props.title}</div>
            <div className={styles.joining}>{this.props.description}</div>
          </div>
        ) : (
          <div className={styles.milestoneEmptyText}>Add a Milestone</div>
        )}
      </div>
    );
  }
}

export default Milestone;
