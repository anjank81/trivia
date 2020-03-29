import React, { Component } from "react";
import styles from "./IconWithText.css";

class IconWithText extends Component {
  state = {};
  render() {
    return (
      <div className={styles.base}>
        <div className={styles.iconHolder}>
          <img src={this.props.icon} className={styles.icon} alt="" />
        </div>
        <div className={styles.text}>{this.props.text}</div>
      </div>
    );
  }
}

export default IconWithText;
