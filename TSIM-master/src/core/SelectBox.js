import React, { Component } from "react";
import styles from "./SelectBox.css";
export default class SelectBox extends Component {
  render() {
    return (
      <div
        className={styles.buttonHolder}
        style={{ width: this.props.size, height: this.props.size }}
      >
        <div
          className={
            this.props.selected ? styles.buttonHolderColored : styles.button
          }
        ></div>
      </div>
    );
  }
}
