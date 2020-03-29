import React, { Component } from "react";
import styles from "./PollInputBox.css";
import ControlInput from "../../core/ControlInput";
export default class PollInputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }
  render() {
    return (
      <div className={styles.pollInputHolder}>
        <div className={styles.pollHolder}>
          {this.props.leftText && (
            <div
              className={styles.pollText}
              style={{ color: this.props.leftColor }}
            >
              {this.props.leftText}
            </div>
          )}
          <div className={styles.pollInput}>
            <ControlInput
              border={"none"}
              placeholder={"Add Option"}
              value={this.state.pollText}
              onChange={val => this.setState({ pollText: val })}
            ></ControlInput>
          </div>
        </div>
        <div className={styles.photoTextHolder}>
          {this.props.rightText && (
            <div className={styles.addPhoto}>{this.props.rightText}</div>
          )}
        </div>
      </div>
    );
  }
}
