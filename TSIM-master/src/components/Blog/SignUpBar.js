import React, { Component } from "react";
import styles from "./SignUpBar.css";
import signUpImage from "../Images/Signupbanner.svg";
import Input2 from "../../core/Input2";
import DesktopOnly from "../general/DesktopOnly";
import MobileOnly from "../general/MobileOnly";
import { validateEmail, isEmpty } from "../../utils/validation";
export default class SignUpBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      showError: false
    };
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.subscribtionDetails&&nextProps.buttonText!=="SUBSCRIBE") {
      this.props.showLoginModule({ email: this.state.email });
    }
  };

  onChange = val => {
    this.setState({ email: val, showError: false });
  };
  checkSignIn(key){
    if (key === "Enter") {
      this.onClick();
    }
  }
  onClick = () => {
    if (this.state.email.length > 4) {
      if (validateEmail(this.state.email)) {
        this.setState({ showError: true });
      } else {
        if(this.props.buttonText!=="SUBSCRIBE"){
         
        this.props.showLoginModule({ email: this.state.email });
        }
        if (this.props.getsubscription) {
          let details = {
            email: this.state.email,
            isSubscribed: true
          };

          this.props.getsubscription(details);
          this.setState({ email: ""})
        }
      }
    } else {
      this.setState({ showError: true });
    }
  };

  render() {
    return (
      <div className={styles.signupHolder}>
        <div className={styles.signUpContainer}>
          <div className={styles.signup}>
            <DesktopOnly>
              <div
                className={styles.signupText}
                style={{ fontSize: this.props.fontSize }}
              >
                {this.props.heading}
              </div>
            </DesktopOnly>
            <MobileOnly>
              <div className={styles.signupText}>{this.props.heading}</div>
            </MobileOnly>
            <div className={styles.subText}>{this.props.content}</div>
            {this.props.content2 && (
              <div className={styles.subText}>
                Sign up to get access to interesting resources on the platform
              </div>
            )}
            <div className={styles.inputBase}>
              <div className={styles.inputContainer}>
                <div className={styles.inputWithButton}>
                  <div className={styles.inputHolder}>
                    <div className={styles.input}>
                      <Input2
                        placeholder="Enter your Email Address"
                        value={this.state.email}
                        onChange={val => this.onChange(val)}
                        textStyle={{ fontSize: 14 }}
                        height={50}
                        boxy={true}
                        border={"none"}
                        borderColor={"#fff"}
                        borderBottom={"#fff"}
                        // // onFocus={() => {
                        // //   this.handleOnFocusInput();
                        // }}
                        onKeyUp={event => {
                          this.checkSignIn(event.key);
                        }}
                      />
                    </div>
                    {this.state.showError && (
                      <div className={styles.error}>
                        Please enter valid email address
                      </div>
                    )}
                  </div>
                  <div className={styles.buttonHolder}>
                    <div
                      className={styles.button}
                      onClick={() => this.onClick()}
                    >
                      {" "}
                      {this.props.buttonText}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.imageHolder}>
            <img
              className={styles.signUpImage}
              src={signUpImage}
              alt="no i"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
SignUpBar.defaultProps = {
  heading: "Sign up to access more resources",
  content: "It won’t take long!",
  content2: true,
  buttonText: "GET STARTED"
};
