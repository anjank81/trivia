import React from "react";
import styles from "../SetPassword/SetPassword.css";
import CenteredContent from "../../core/CenteredContent";
import Input2 from "../../core/Input2";
import PasswordInput from "../general/PasswordInput";
import ConformPasswordInput from "../general/ConformPasswordInput";
import PrimaryHeaderContainer from "../../components/HomePage/container/PrimaryHeaderContainer";
import SecondaryHeaderContainer from "../../components/HomePage/container/SecondaryHeaderContainer";
import RightSlideModal from "../modules/component/RightSlideModal";
import Back from "../../images/Back.svg";
import { HOME } from "../../utils/constant.js";

// import { Input2 } from "../../core";
export default class SetPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      newPassword: "",
      confirmPassword: "",
      passwordMatch: true,
      passwordText: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.resetPassword !== this.props.resetPassword) {
      if (nextProps.resetPassword.status === 200) {
        this.props.history.push(HOME);
      }
    }
  }

  checkSignIn(val) {
    if (val === "Enter") {
      this.handleSubmit();
    }
  }
  handleSubmit = () => {
    if (
      this.state.newPassword.length === 0 ||
      this.state.confirmPassword.length === 0
    ) {
      this.setState({
        passwordMatch: false,
        passwordText: "Password cannot be empty"
      });
      return false;
    }
    if (
      this.state.newPassword.length < 6 ||
      this.state.confirmPassword.length < 6
    ) {
      this.setState({
        passwordMatch: false,
        passwordText: "Password cannot be less than 6 characters"
      });
      return false;
    } else if (this.state.newPassword !== this.state.confirmPassword) {
      this.setState({
        passwordMatch: false,
        passwordText: "Passwords don't match"
      });
    } else if (this.props.location.search) {
      const reqBody = {
        token: this.props.location.search.split("=")[1],
        newPassword: this.state.newPassword,
        repeatNewPassword: this.state.confirmPassword
      };
      if (this.props.postResetPassword) {
        this.props.postResetPassword(reqBody);
      }
    }
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <PrimaryHeaderContainer />
        </div>
        <CenteredContent>
          <div className={styles.baseContainer}>
            <div className={styles.welTxt}>
              <div className={styles.forgetPwd}>Create new password</div>

              <div className={styles.inputBox}>
                <PasswordInput
                  placeholder="New Password (Min 6 Characters)"
                  password={this.state.newPassword}
                  onChange={val => this.setState({ newPassword: val })}
                  textStyle={{
                    fontSize: 14,
                    fontFamily: "Regular",
                    lineHeight: 20
                  }}
                  height={50}
                  width={"100%"}
                  boxy={true}
                  type="password"
                  onFocus={() => this.setState({ passwordMatch: true })}
                  borderColor={
                    !this.state.passwordMatch
                      ? "#d81818"
                      : "rgba(127, 127, 127, 0.5)"
                  }
                />
              </div>
              <div className={styles.inputBox}>
                <ConformPasswordInput
                  //   disabled={!this.state.gender || !this.state.country}
                  placeholder="Confirm Password"
                  confirmPassword={this.state.confirmPassword}
                  onChange={val => this.setState({ confirmPassword: val })}
                  textStyle={{
                    fontSize: 14,
                    fontFamily: "Regular",
                    lineHeight: 20
                  }}
                  height={50}
                  width={"100%"}
                  boxy={true}
                  type="password"
                  onFocus={() => this.setState({ passwordMatch: true })}
                  borderColor={
                    !this.state.passwordMatch
                      ? "#d81818"
                      : "rgba(127, 127, 127, 0.5)"
                  }
                  onKeyUp={event => {
                    this.checkSignIn(event.key);
                  }}
                />
              </div>
              {!this.state.passwordMatch ? (
                <div className={styles.error}>{this.state.passwordText}</div>
              ) : null}
              <div className={styles.minChar}>
                <div className={styles.circle}></div>
                <div className={styles.circleTxt}>Atleast 6 characters</div>
              </div>
              <button
                disabled={!this.state.newPassword}
                onClick={() => this.handleSubmit(this.state.newPassword)}
                className={styles.loginButton}
                type="button"
              >
                SET PASSWORD
              </button>
              <div></div>
              <div></div>
            </div>
          </div>
        </CenteredContent>
        {/* </RightSlideModal> */}
      </React.Fragment>
    );
  }
}
