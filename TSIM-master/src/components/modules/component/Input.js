import React, { Component } from "react";
import styles from "./Input.css";

export default class Input extends Component {
  render() {
    return (
      <div className={styles.inpcont}>
        <input
          className={styles.inputbox}
          type={this.props.type}
          placeholder={this.props.placeholder}
          name={this.props.name}
          style={{ height: this.props.height, width: this.props.width }}
          onChange={() => {
            this.props.onChange();
          }}
          checked={this.props.checked}
        />
      </div>
    );
  }
}
