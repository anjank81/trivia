import React from "react";
import styles from "../Settings/Password.css";
import Input2 from "../../core/Input2";
import Security from "../Settings/Security";
export default class Password extends React.Component {
  // handleredirect = url => {
  //   if (this.props.history) {
  //     window.open(url, "_blank");
  //   }
  // };
  constructor() {
    super();
    this.state = {
      password: ""
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className={styles.baseContainer}>
          <div className={styles.container}>
            <div className={styles.profileContainer}>
              <div className={styles.myProfile}>Password</div>
              <div className={styles.lineSeparator}></div>
              <div className={styles.nameContainer}>
                <div className={styles.name}>Password</div>
                <div>
                  <Input2
                    placeholder="Password"
                    value={this.state.name}
                    onChange={val => this.setState({ password: val })}
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

              <div
                onClick={this.props.onChangePassword}
                className={styles.saveButton}
              >
                Change Password
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
