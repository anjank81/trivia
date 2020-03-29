import React, { Component } from "react";
import SignIn from "../../SignIn/SignIn";
import RightSlideModal from "./RightSlideModal";
import styles from "./LoginModule.css";

export default class LoginModule extends Component {
  render() {
    return (
      <RightSlideModal>
        <div className={styles.base}>
          <SignIn {...this.props} />
        </div>
      </RightSlideModal>
    );
  }
}
