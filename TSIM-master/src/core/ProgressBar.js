import React from "react";
import styles from "./ProgressBar.css";

export default class FromProgress extends React.Component {
  render() {
    return (
      <div className={styles.base}>
        <div
          className={styles.progress}
          style={{ transform: `scaleX(${this.props.progress / 100})` }}
        />
      </div>
    );
  }
}
