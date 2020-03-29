import React from "react";
import styles from "./RightSlideModal.css";
export default class RightSlideModal extends React.Component {
  render() {
    return (
      <div className={styles.base}>
        <div
          style={{ width: this.props.width }}
          className={styles.crossIconHide}
        >
          <div className={styles.content}>{this.props.children}</div>
        </div>
      </div>
    );
  }
}
