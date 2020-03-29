import React, { Component } from "react";
import BottomSlideModal from "./BottomSlideModal";
import styles from "./GetInTouchModal.css";

export default class GetInTouchModal extends Component {
  render() {
    return (
      <BottomSlideModal>
        <div
          className={styles.crossIcon}
          onClick={() => this.props.closeModal()}
        >
          x
        </div>
        <div className={styles.container}>
          If you have any suggestions or just want to have a chat, write to us
          at
          <div className={styles.feedbackText}>
            <div>
              <a href="mailto:feedback@thestarinme.com">
                feedback@thestarinme.com
              </a>
            </div>
          </div>
        </div>
      </BottomSlideModal>
    );
  }
}
