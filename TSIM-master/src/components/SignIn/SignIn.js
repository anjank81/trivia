import React from "react";
import styles from "../SignIn/SignIn.css";
import CenteredContent from "../../core/CenteredContent";
import Input2 from "../../core/Input2";
import linkedin from "../../images/Linkedin.svg";
import Facebook from "../../images/Facebook.svg";
import Google from "../../images/Google.svg";
import Back from "../../images/Back.svg";
import PasswordInput from "../general/PasswordInput";
import SelectBox from "../../core/SelectBox";
import { FEED, HOME } from "../../utils/constant.js";
import GoogleLogin from "react-google-login";

import {
  validateEmail,
  onlyLetters,
  lettersWithSpace,
  validatePassword
} from "../../utils/validation";
import ControlInput from "../../core/ControlInput";
// import { Input2 } from "../../core";
export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props && this.props.email,
      password: "",
      passwordText: "",
      emailEmpty: true,
      passwordMatch: true,
      remember: false,
      loginType: "",
      firstName: "",
      lastName: "",
      googleFirstName: "",
      googleLastName: "",
      googleEmail: ""
    };
  }

  checkSignIn(val) {
    if (val === "Enter") {
      this.handleLogin();
    }
  }
  responseGoogle = response => {
    if (response.profileObj) {
      this.setState({
        googleFirstName: response.profileObj.givenName,
        googleLastName: response.profileObj.familyName,
        googleEmail: response.profileObj.email,
        loginType: "Google"
      });
    }
    if (this.state.loginType === "Google") {
      const reqBodyGoogle = {
        firstName: this.state.googleFirstName,
        lastName: this.state.googleLastName,
        email: this.state.googleEmail,
        loginType: "Google"
      };
      if (reqBodyGoogle) {
        this.props.postGoogleSignUp(reqBodyGoogle);
      }
    }
  };

  handleLogin = () => {
    if (!this.state.email) {
      this.setState({
        emailEmpty: false,
        emailError: "please enter email"
      });
      return false;
    }

    if (this.state.email) {
      if (validateEmail(this.state.email)) {
        this.setState({
          emailEmpty: false,
          emailError: "Invalid email"
        });
        return false;
      }
    }
    if (!this.state.password) {
      this.setState({
        passwordMatch: false,
        passwordText: "Password cannot be empty"
      });
      return false;
    }

    // if (!this.state.password) {
    //   alert("Please enter password");
    // } else
    if (this.props.getLogin && this.state.loginType === "") {
      this.props.getLogin(this.state);
    }
  };
  componentWillReceiveProps = nextProps => {
    if (
      nextProps &&
      nextProps.loginDetails &&
      nextProps.loginDetails.loginDetails
    ) {
      window.location.reload();
      this.props.history.push(HOME);
    }
    if (nextProps && nextProps.signUpGoogleDetails) {
      window.location.reload();
      this.props.history.push(HOME);
    }

    if (nextProps && nextProps.loginDetails.status === "ERROR") {
      this.setState({
        passwordText: nextProps.loginError
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <CenteredContent>
          <div onClick={this.props.closeModal} className={styles.backCircle}>
            <img src={Back} className={styles.backImg} alt="" />
          </div>

          <div className={styles.signInContainer}>
            <div className={styles.welTxt}>
              <div className={styles.welcomeTxt}>Welcome Back</div>
              <div className={styles.stayConnected}>
                Stay connected, be informed and keep inspiring.
              </div>
              {/* {this.props.loginDetails &&
                this.props.loginDetails.status === "ERROR" && (
                  <div className={styles.error}>
                    {this.props.loginDetails.error}
                  </div>
                )} */}
              <div className={styles.inputBox}>
                <ControlInput
                  placeholder="Email Address"
                  value={this.state.email}
                  onChange={val => this.setState({ email: val })}
                  height={50}
                  boxy={true}
                  border={"1px solid #d2d2d2"}
                  borderColor={
                    !this.state.emailEmpty
                      ? "#d81818"
                      : "rgba(127, 127, 127, 0.5)"
                  }
                  onFocus={() => this.setState({ emailEmpty: true })}
                />
              </div>
              {!this.state.emailEmpty ? (
                <div className={styles.error}>{this.state.emailError}</div>
              ) : null}
              <div className={styles.inputBox}>
                <PasswordInput
                  placeholder="Password"
                  password={this.state.password}
                  value={this.state.password}
                  onChange={val => this.setState({ password: val })}
                  height={50}
                  boxy={true}
                  borderColor={
                    !this.state.passwordMatch
                      ? "#d81818"
                      : "rgba(127, 127, 127, 0.5)"
                  } // borderBottom={"#7f7f7f"}
                  type="password"
                  onFocus={() => this.setState({ passwordMatch: true })}
                  onKeyUp={event => {
                    this.checkSignIn(event.key);
                  }}
                />
              </div>
              {this.state.passwordText && (
                <div className={styles.error}>{this.state.passwordText}</div>
              )}
              <div
                className={styles.passwordBlock}
                onClick={() =>
                  this.setState({ remember: !this.state.remember })
                }
              >
                <div className={styles.selectBox}>
                  <SelectBox size={14} selected={this.state.remember} />
                </div>

                <div className={styles.remPassword}>Remember password</div>
                <div
                  className={styles.forgotPassword}
                  onClick={() => this.props.showForgotPassword(this.props)}
                >
                  Forgot password?
                </div>
              </div>
              <button
                onClick={() => this.handleLogin()}
                className={styles.loginButton}
                type="button"
              >
                LOGIN
              </button>

              <div></div>
              <div>
                <div className={styles.starInTxt}>No Account?&nbsp;&nbsp;</div>

                <div
                  className={styles.signUpNow}
                  onClick={() => {
                    this.props.showSignUpModal();
                  }}
                >
                  Sign Up
                </div>
              </div>
              <div className={styles.loginWith}>Login with</div>
            </div>
            <div className={styles.socialContainer}>
              <img
                src={linkedin}
                className={styles.img}
                alt=""
                style={{ opacity: 0.4, cursor: "default" }}
              />
              <GoogleLogin
                clientId="436581195458-4141qddi6npjei2e4akp1796b3cerbt7.apps.googleusercontent.com"
                render={renderProps => (
                  <div
                    className={styles.googleContainer}
                    onClick={() => renderProps.onClick()}
                  >
                    <img src={Google} className={styles.img} alt="" />
                  </div>
                )}
                onSuccess={res => this.responseGoogle(res)}
                onFailure={res => this.responseGoogle(res)}
                cookiePolicy={"single_host_origin"}
              />
            </div>
            {/* <img src={Facebook} className={styles.img} alt="" /> */}
          </div>
        </CenteredContent>
      </React.Fragment>
    );
  }
}
