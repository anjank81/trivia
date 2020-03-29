import React, { Component } from "react";
import BottomSlideModal from "./BottomSlideModal";
import styles from "./DemoModal.css";
export default class DemoModal extends Component {
  render() {
    return (
      <BottomSlideModal width="400px">
        <div className={styles.centermodal}>
          center modal
          <div>banu</div>
          <div>banu</div>
          <div>banu</div>
          <div>banu</div>
        </div>
      </BottomSlideModal>
    );
  }
}
