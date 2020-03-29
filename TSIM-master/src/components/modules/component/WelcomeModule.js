import React, { Component } from "react";
import Welcome from "../../Welcome/Welcome";
import RightSlideModal from "./RightSlideModal";
import styles from "./LoginModule.css";

export default class WelcomeModule extends Component {
  render() {
    return (
      <RightSlideModal>
        <div className={styles.base}>
          <Welcome {...this.props} />
        </div>
      </RightSlideModal>
    );
  }
}
