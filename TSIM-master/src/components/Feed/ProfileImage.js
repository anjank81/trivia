import React, { Component } from "react";
import styles from "./ProfileImage.css";
export default class ProfileImage extends Component {
  render() {
    return (
      <img
        src={this.props.src}
        alt={this.props.alt}
        width={this.props.width ? this.props.width : "100%"}
        height={this.props.height ? this.props.height : "100%"}
        className={styles.image}
      />
    );
  }
}
