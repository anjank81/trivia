import React, { Component } from "react";
import RightSlideModal from "./RightSlideModal";
import styles from "./LoginModule.css";
import SignUp from "../../SignUp/SignUp";
export default class SignUpModule extends Component {
  render() {
    return (
      <RightSlideModal>
        <div className={styles.base}>
          <SignUp {...this.props} />
        </div>
      </RightSlideModal>
    );
  }
}
