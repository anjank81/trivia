import React, { Component } from "react";
import styles from "./Inputwithicon.css";

export default class InputWithIcon extends Component {
  handleChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event.target.value);
    }
  }
  render() {
    return (
      <div
        className={styles.inpicocont}
        style={{ height: this.props.height, width: this.props.width }}
      >
        <input
          className={styles.inp}
          type={this.props.type}
          placeholder={this.props.placeholder}
          name={this.props.name}
          style={{ height: this.props.theight, width: this.props.twidth }}
          onChange={event => this.handleChange(event)}
        />
        {/* <div className={styles.icon}>
          <img src={this.props.src} height={"15px"} width={"15px"} alt="logo" />
        </div> */}
      </div>
    );
  }
}
