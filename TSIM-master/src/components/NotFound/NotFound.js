import React, { Component } from "react";
import styles from "./NotFound.css";
import PrimaryHeaderContainer from "../HomePage/container/PrimaryHeaderContainer";
export default class NotFound extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.fixedHeader}>
          <PrimaryHeaderContainer />
        </div>
        <div className={styles.base}>
          <div>
            <div className={styles.errorCode}>404 </div>
            <div className={styles.errorMessage}>Page Not Found</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
