import React from "react";
import styles from "./Radio.css";
export default class RadioButtons extends React.Component {
  handleSelect(key, value) {
    if (this.props.onSelect) {
      this.props.onSelect(key, value);
    }
  }
  render() {
    return (
      <div className={this.props.singleLine ? styles.singleLine : styles.base}>
        <div
          className={
            this.props.value === this.props.selected
              ? styles.buttonActive
              : styles.button
          }
          onClick={() => {
            this.handleSelect(this.props.value, this.props.label);
          }}
        >
          <div className={styles.label}>{this.props.label}</div>
        </div>
      </div>
    );
  }
}
