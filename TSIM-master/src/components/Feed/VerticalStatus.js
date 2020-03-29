import React, { Component } from "react";
import styles from "./VerticalStatus.css";
export default class VerticalStatus extends Component {
  checkStatus = state => {
    switch (state) {
      case "active":
        return styles.activeState;

      case "complete":
        return styles.completeState;

      default:
        return styles.inActiveState;
    }
  };
  render() {
    return (
      <div className={styles.verticalStatusHolder}>
        <div className={styles.firstIndicator}>
          <div className={this.checkStatus(this.props.first)}></div>
          SELECT TICKETS
        </div>
        <div className={styles.secondIndicator}>
          <div className={this.checkStatus(this.props.second)}></div>
          ATTENDEE DETAILS
        </div>
        <div className={styles.thirdIndicator}>
          <div className={this.checkStatus(this.props.third)}></div>
          REVIEW
        </div>
      </div>
    );
  }
}
