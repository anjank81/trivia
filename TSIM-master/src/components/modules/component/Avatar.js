import React, { Component } from "react";
import avatar from "./Images/img_avatar.png";
import styles from "./SelectEvent.css";
export default class Avatar extends Component {
  render() {
    return (
      <div
        className={this.props.selected ? styles.active : styles.explorecont}
        onClick={() => {
          this.props.onClick();
        }}
      >
        <img
          className={styles.avatar}
          src={this.props.image}
          alt="avatar"
        ></img>
        <div className={styles.avaType}>{this.props.children}</div>
      </div>
    );
  }
}
