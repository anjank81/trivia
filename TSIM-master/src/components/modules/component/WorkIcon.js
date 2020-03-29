import React, { Component } from "react";
import styles from "./WorkExpModal.css";
export default class WorkIcon extends Component {
  render() {
    return (
      <div
        className={this.props.selected ? styles.active : styles.workiconcont}
        onClick={() => {
          this.props.onClick();
        }}
      >
        <img
          src={this.props.src}
          alt="images"
          height={this.props.height}
          width={this.props.width}
        ></img>
      </div>
    );
  }
}
