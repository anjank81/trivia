import React, { Component } from "react";
import styles from "./EventCard.css";
import defaultImage from "../Images/b.jpg";
export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAllTags: false
    };
  }
  render() {
    return (
      <div className={styles.cardBase}>
        <div className={styles.imageBase}>
          <img
            className={styles.storiesImage}
            src={this.props.image ? this.props.image : defaultImage}
            alt="no i"
          ></img>
          <div className={styles.overlay}>
            <div className={styles.eventLabelContainer}>
            {/* <div className={styles.tags}>{this.props &&
                this.props.eventLabels &&this.props.eventLabels[0].label}</div> */}
              {this.props &&
                this.props.eventLabels &&
                this.props.eventLabels.map((label, i) => {
                  if (!this.state.showAllTags) {
                    if (i < 2) {
                      return <div className={styles.tags}>{label}</div>;
                    }
                  } else {
                    return <div className={styles.tags}>{label}</div>;
                  }
                })}
              {!this.state.showAllTags &&
                this.props &&
                this.props.eventLabels &&
                this.props.eventLabels.length > 2 && (
                  <div
                    className={styles.tags}
                    onClick={() =>
                      this.setState({ showAllTags: !this.state.showAllTags })
                    }
                  >
                    +{this.props.eventLabels.length - 2}
                  </div>
                )}
            </div>
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div
            className={
              window.location.pathname === "/"
                ? styles.homeheadingtext
                : styles.contentHeading
            }
          >
            {this.props.heading}
          </div>
          <div className={styles.time}>
            <div className={styles.timeImage}></div>
            {this.props.time}
          </div>
          <div className={styles.date}>
            <div className={styles.dateImage}></div>
            {this.props.date}
          </div>
          <div className={styles.location}>
            <div
              className={
                window.location.pathname === "/"
                  ? styles.homeLocationImage
                  : styles.locationImage
              }
            ></div>
            <div
              className={
                window.location.pathname === "/"
                  ? styles.homeLocationText
                  : styles.locationText
              }
            >
              {this.props.locality && this.props.city
                ? ` ${this.props.locality},${this.props.city}`
                : this.props.locality
                ? this.props.locality
                : this.props.city
                ? this.props.city
                : "Online"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
