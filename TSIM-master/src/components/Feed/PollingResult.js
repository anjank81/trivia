import React, { Component } from "react";
import styles from "./PollingResult.css";
import { pollingResult } from "./PollingResultWithImage/PollingResultWithImage";
export default class PollingResult extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.poll_options &&
          this.props.poll_options.map((m, i) => {
            return (
              <div className={styles.pollingContainer}>
                <div className={styles.pollingTag}>
                  <div className={styles.pollingLabel}>{i}</div>
                </div>
                <div className={styles.pollBar}>
                  <div className={styles.pollQuestionContainer}>
                    <div className={styles.pollQuestion}>{m.option}</div>
                    <div className={styles.pollPercentage}>
                      {m.poll_responses}
                    </div>
                  </div>
                  <div
                    className={styles.pollLevel}
                    style={{ width: m.poll_responses }}
                  ></div>
                </div>
              </div>
            );
          })}
      </React.Fragment>
    );
  }
}
