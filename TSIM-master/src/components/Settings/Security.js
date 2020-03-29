import React from "react";
import styles from "../Settings/Security.css";
import Input2 from "../../core/Input2";

export default class Security extends React.Component {
  constructor() {
    super();
    this.state = {
      currentPassword: "",
      confirmPassword: "",
      newPassword: ""
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className={styles.baseContainer}>
          <div className={styles.container}>
            <div className={styles.securityContainer}>
              <div className={styles.security}>Security</div>
              <div className={styles.forgotPassword}>Forgot Password</div>

              <div className={styles.lineSeparator}></div>
              <div className={styles.boxContainer}>
                <div className={styles.securityContainer}>
                  <div className={styles.label}>Current Password</div>
                  <div>
                    <Input2
                      placeholder="Pratiksha Gupta"
                      value={this.state.currentPassword}
                      onChange={val => this.setState({ currentPassword: val })}
                      textStyle={{ fontSize: 14 }}
                      height={50}
                      boxy={true}
                      borderColor={"#7f7f7f"}
                      type="password"
                      // borderBottom={"#7f7f7f"}
                      // // onFocus={() => {
                      // //   this.handleOnFocusInput();
                      // }}
                    />
                  </div>
                </div>
                <div className={styles.securityContainer}>
                  <div className={styles.label}>New Password</div>
                  <div>
                    <Input2
                      placeholder="Interaction Designer | Visual Designer"
                      value={this.state.designation}
                      onChange={val => this.setState({ newPassword: val })}
                      textStyle={{ fontSize: 14 }}
                      height={50}
                      boxy={true}
                      borderColor={"#7f7f7f"}
                      type="password"
                      // borderBottom={"#7f7f7f"}
                      // // onFocus={() => {
                      // //   this.handleOnFocusInput();
                      // }}
                    />
                  </div>
                </div>
                <div className={styles.securityContainer}>
                  <div className={styles.label}>Confirm Password</div>
                  <div>
                    <Input2
                      placeholder="Bengaluru, India"
                      value={this.state.location}
                      onChange={val => this.setState({ confirmPassword: val })}
                      textStyle={{ fontSize: 14 }}
                      height={50}
                      boxy={true}
                      borderColor={"#7f7f7f"}
                      type="password"
                      // borderBottom={"#7f7f7f"}
                      // // onFocus={() => {
                      // //   this.handleOnFocusInput();
                      // }}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.buttonContainer}>
                <div className={styles.cancelButton}>CANCEL</div>
                <div className={styles.saveButton}>SAVE CHANGES</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
