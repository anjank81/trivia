import React, { Component } from "react";
import Icon from "./Icon";
import styles from "./HorizantalIconWithHeader.css";
export default class HorizantalIconWithHeader extends Component {
  render() {
    return (
      <div className={styles.iconWithText}>
        {this.props.icon && (
          <div
            className={styles.icon}
            style={{ paddingRight: this.props.spacing }}
          >
            <Icon image={this.props.icon} size={this.props.size} />
          </div>
        )}
        <div
          className={styles.subText}
          style={{
            fontSize: this.props.fontSize,
            color: this.props.fontColor
          }}
        >
          {this.props.text}
        </div>
      </div>
    );
  }
}
