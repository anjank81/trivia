import React from "react";
import styles from "../ForgotPassword/ForgotPassword.css";
import CenteredContent from "../../core/CenteredContent";
import Input2 from "../../core/Input2";
import linkedin from "../../images/Linkedin.svg";
import Facebook from "../../images/Facebook.svg";
import RightSlideModal from "../modules/component/RightSlideModal";
import Back from "../../images/Back.svg";
import { validateEmail } from "../../utils/validation";

// import { Input2 } from "../../core";
export default class ForgotPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      emailVal: true,
      emailText: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.setPassword !== this.props.setPassword) {
      if (nextProps.setPassword.message === "Email is not found") {
        this.setState({
          emailVal: false,
          emailText: "Email is not found"
        });
      } else {
        this.props.closeModal();
      }
    }
  }

  checkSignIn(val) {
    if (val === "Enter") {
      this.handleSubmit();
    }
  }

  handleSubmit = () => {
    if (!this.state.email) {
      this.setState({
        emailVal: false,
        emailText: "Enter email"
      });
    } else if (validateEmail(this.state.email)) {
      this.setState({
        emailVal: false,
        emailText: "Invalid email"
      });
    } else this.props.postForgotPassword(this.state);
  };
  render() {
    return (
      <React.Fragment>
        <RightSlideModal>
          <CenteredContent>
            <div onClick={this.props.closeModal} className={styles.backCircle}>
              <img src={Back} className={styles.backImg} alt="" />
            </div>
            <div className={styles.baseContainer}>
              <div className={styles.welTxt}>
                <div className={styles.forgetPwd}>Forgot Password</div>
                <div className={styles.stayConnected}>
                  Enter your email address that you used to register. We'll send
                  you <br /> an email with a link to reset your password.
                </div>

                <div className={styles.emailAddress}>
                  <Input2
                    placeholder="Enter your registered email"
                    value={this.state.email}
                    onChange={val => this.setState({ email: val })}
                    textStyle={{ fontSize: 14 }}
                    height={50}
                    boxy={true}
                    borderColor={
                      !this.state.emailVal
                        ? "#d81818"
                        : "rgba(127, 127, 127, 0.5)"
                    }
                    onFocus={() => this.setState({ emailVal: true })}
                    onKeyUp={event => {
                      this.checkSignIn(event.key);
                    }}

                    // borderBottom={"#7f7f7f"}
                    // // onFocus={() => {
                    // //   this.handleOnFocusInput();
                    // }}
                  />
                </div>

                {!this.state.emailVal ? (
                  <div className={styles.error}>{this.state.emailText}</div>
                ) : null}

                <button
                  // disabled={!this.state.email}
                  onClick={() => this.handleSubmit(this.state.email)}
                  className={styles.loginButton}
                  type="button"
                >
                  SUBMIT
                </button>
                <div></div>
                <div>
                  <div
                    className={styles.bckToLogin}
                    onClick={() => this.props.showLoginModal()}
                  >
                    Back to login
                  </div>
                </div>
              </div>
            </div>
          </CenteredContent>
        </RightSlideModal>
      </React.Fragment>
    );
  }
}
