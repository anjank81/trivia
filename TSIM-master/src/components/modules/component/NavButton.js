import React from "react";
import styles from "./NavButton.css";

export default class NavButton extends React.Component {
  render() {
    let checkClass = styles.check;
    if (this.props.unlocked) {
      checkClass = styles.unlocked;
    }
    if (this.props.completed) {
      checkClass = styles.completed;
    }

    return (
      <div className={styles.base} onClick={this.props.onClick}>
        <div className={checkClass} />
        <div className={this.props.selected ? styles.selected : styles.label}>
          {this.props.data}
        </div>
      </div>
    );
  }
}
