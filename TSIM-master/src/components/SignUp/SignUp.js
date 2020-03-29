import React from "react";
import styles from "../SignUp/SignUp.css";
import CenteredContent from "../../core/CenteredContent";
import Input2 from "../../core/Input2";
import SelectBox from "../../core/SelectBox";
import linkedin from "../../images/Linkedin.svg";
import Google from "../../images/Google_BG.svg";
import Back from "../../images/Back.svg";
import DesktopOnly from "../general/DesktopOnly";
import MobileOnly from "../general/MobileOnly";
import HorizantalIconWithHeader from "../../core/HorizantalIconWithHeader";
import PasswordInput from "../general/PasswordInput";
// import { LinkedIn } from "react-linkedin-login-oauth2";
import ConformPasswordInput from "../general/ConformPasswordInput";
import {
  validateEmail,
  lettersWithSpace,
  nameValidation
} from "../../utils/validation";
import { TERMS, HOME, FEED, WELCOME } from "../../utils/constant.js";
import Select from "react-select";
import ToolTip from "../../core/ToolTip";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";
import ControlInput from "../../core/ControlInput";

const options = [
  { value: 11, label: "India" },
  { value: 12, label: "Israel" },
  { value: 13, label: "Iraq" },
  { value: 14, label: "Iceland" },
  { value: 15, label: "Bahrain" }
];

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      email: this.props && this.props.email,
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      gender: false,
      passwordMatch: true,
      firstNameEmpty: true,
      lastNameEmpty: true,
      emailEmpty: true,
      title1: "Join",
      title2: "The star in me",
      passwordText: "",
      nameError: "",
      emailError: "",
      selectedOption: null,
      options: [],
      euroUnion: false,
      closeBanner: true,
      code: "",
      errorMessage: "",
      loginType: ""
    };
    this._onSelect = this._onSelect.bind(this);
  }
  handleredirect = url => {
    if (this.props.history) {
      window.open(url, "_blank");
    }
  };

  handleSuccess = data => {
    this.setState({
      code: data.code,
      errorMessage: ""
    });
  };

  handleFailure = error => {
    this.setState({
      code: "",
      errorMessage: error.errorMessage
    });
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };
  componentDidMount() {
    this.props.getCountry();
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.countryValue !== this.props.countryValue) {
      var countryOptions = nextProps.countryValue.map(country => {
        return {
          value: country.id,
          label: country.name,
          europeanUnion: country.europeanUnion
        };
      });
      countryOptions.sort((a, b) => (a.label > b.label ? 1 : -1));
      this.setState({
        options: countryOptions
      });
    }

    if (
      nextProps &&
      nextProps.SignUpDetails &&
      nextProps.SignUpDetails.signUpDetails
    ) {
      this.props.showWelcomeModal({
        firstName: this.state.firstName,
        ...this.props
      });
    }

    if (nextProps && nextProps.signUpGoogleDetails) {
      this.props.showWelcomeModal({
        firstName: this.state.firstName,
        ...this.props
      });
    }
  };
  _onSelect(option) {
    if (option.europeanUnion) {
      // if (this.props.showToast) {
      //   this.props.showToast(
      //     "Please note we are not GDPR compliant today. Going ahead and signing up, you voluntarily waive your  GDPR rights. We are working to be GDPR compliant in the future."
      //   );
      // }
      this.setState({
        euroUnion: option.europeanUnion
      });
    } else {
      this.setState({
        euroUnion: option.europeanUnion
      });
    }
    this.setState({ country: option });
  }

  handleSignUp = () => {
    // if (this.state.country.europeanUnion === true) {
    //   this.setState({
    //     euroUnion: true
    //   });
    // }
    if (!this.state.firstName || nameValidation(this.state.firstName)) {
      this.setState({
        firstNameEmpty: false,
        nameError: "First Name  cannot be empty"
      });
      return false;
    }
    if (!this.state.lastName || nameValidation(this.state.firstName)) {
      this.setState({
        lastNameEmpty: false,
        nameError: "Last Name cannot be empty"
      });
      return false;
    }
    if (this.state.firstName) {
      if (lettersWithSpace(this.state.firstName)) {
        this.setState({
          firstNameEmpty: false,
          nameError: "First Name cannot have numbers or special chraracters"
        });
        return false;
      }
    }
    if (this.state.lastName) {
      if (lettersWithSpace(this.state.lastName)) {
        this.setState({
          lastNameEmpty: false,
          nameError: "Last Name cannot have numbers or special chraracters"
        });
        return false;
      }
    }
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
    if (!this.state.password || !this.state.confirmPassword) {
      this.setState({
        passwordMatch: false,
        passwordText: "Password cannot be empty"
      });
      return false;
    }
    if (
      this.state.password.length < 6 ||
      this.state.confirmPassword.length < 6
    ) {
      this.setState({
        passwordMatch: false,
        passwordText: "Password cannot be less than 6 characters"
      });
      return false;
    } else if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        passwordMatch: false,
        passwordText: "Passwords don't match"
      });
    } else {
      this.setState({
        passwordMatch: true,
        firstNameEmpty: true,
        lastNameEmpty: true,
        emailEmpty: true
      });
      if (this.state.loginType === "") {
        const reqBody = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          gender: this.state.gender ? "female" : "male",
          country: this.state.country.value,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword
        };

        this.props.postSignUp(reqBody);
      }
    }
  };

  closeBannerToolTip = () => {
    this.setState({
      euroUnion: false
    });
  };

  checkSignUp(val) {
    if (val === "Enter") {
      this.handleSignUp();
    }
  }
  responseGoogle = response => {
    if (response.profileObj) {
      this.setState({
        firstName: response.profileObj.givenName,
        lastName: response.profileObj.familyName,
        email: response.profileObj.email,
        loginType: "Google"
      });
    }
    if (this.state.loginType === "Google") {
      const reqBodyGoogle = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        gender: this.state.gender ? "female" : "male",
        country: this.state.country.value,
        loginType: "Google"
      };

      if (reqBodyGoogle) {
        this.props.postGoogleSignUp(reqBodyGoogle);
      }
    }
  };
  render() {
    const { code, errorMessage } = this.state;
    // const responseGoogle = response => {
    //   console.log(response);
    // };

    const { selectedOption } = this.state;
    const defaultOption = this.state.country;
    const placeHolderValue =
      typeof this.state.country === "string"
        ? this.state.country
        : this.state.country.label;
    return (
      <React.Fragment>
        <CenteredContent>
          <div onClick={this.props.closeModal} className={styles.backCircle}>
            <img src={Back} className={styles.backImg} alt="" />
          </div>
          <div className={styles.signUpContainer}>
            <div className={styles.welTxt}>
              <div className={styles.joinTxt}>
                {this.props.title1 ? this.props.title1 : this.state.title1}
              </div>
              <div className={styles.starTxt}>
                {this.props.title2 ? this.props.title2 : this.state.title2}
              </div>
              <div className={styles.welTxt}>
                <div
                  className={styles.joinTxt}
                  onClick={() => this.setState({ gender: !this.state.gender })}
                >
                  <SelectBox size={20} selected={this.state.gender} />
                </div>
                <div className={styles.femaleCheck}>Yes, I am female</div>
              </div>

              <div className={styles.countrySelection}>
                <Select
                  styles={{
                    ...styles,
                    control: (base, state) => ({
                      ...base,
                      border: "rgba(127, 127, 127, 0.5)"
                    })
                  }}
                  value={this.state.country}
                  onChange={this._onSelect}
                  options={this.state.options && this.state.options}
                  placeholder="Select your country"
                  onFocus={() =>
                    this.setState({
                      euroUnion: false
                    })
                  }
                />
              </div>
              {/* {this.state.euroUnion ? (
                <div className={styles.noteText}>
                  Note: The star in me is not currently GDPR complianed
                </div>
              ) : null} */}

              <DesktopOnly>
                <div className={styles.socialContainer}>
                  <div
                    className={styles.linkedinNfbContainer}
                    style={{
                      opacity: 0.4,
                      cursor: "default"
                    }}
                  >
                    {/* <LinkedIn
                      clientId="86tqythwdgzpuv"
                      secretId="wVL9SCfNko8ys7DW"
                      onFailure={this.handleFailure}
                      onSuccess={this.handleSuccess}
                      redirectUri="http://localhost:4000/linkedin"
                    >
                      
                    </LinkedIn> */}
                    <img src={linkedin} className={styles.img} alt="" />
                    <div className={styles.linkedinTxt}>
                      Sign Up with LinkedIn
                    </div>
                  </div>

                  <GoogleLogin
                    clientId="436581195458-4141qddi6npjei2e4akp1796b3cerbt7.apps.googleusercontent.com"
                    render={renderProps => (
                      <React.Fragment>
                        {this.state.country && this.state.gender ? (
                          <div
                            className={styles.googleContainer}
                            onClick={() => renderProps.onClick()}
                          >
                            <img src={Google} className={styles.img} alt="" />
                            <div className={styles.linkedinTxt}>
                              Sign Up with Google
                            </div>
                          </div>
                        ) : (
                          <div
                            className={styles.googleContainer}
                            style={{
                              opacity: 0.4,
                              cursor: "default"
                            }}
                            // onClick={() => renderProps.onClick()}
                          >
                            <img src={Google} className={styles.img} alt="" />
                            <div className={styles.linkedinTxt}>
                              Sign Up with Google
                            </div>
                          </div>
                        )}
                      </React.Fragment>
                    )}
                    buttonText="Login"
                    onSuccess={res => this.responseGoogle(res)}
                    onFailure={res => this.responseGoogle(res)}
                    cookiePolicy={"single_host_origin"}
                  />
                  {/* <img src={Google} className={styles.img} alt="" /> */}
                  {/* <div className={styles.linkedinTxt}>SignUp with Google</div> */}
                </div>
              </DesktopOnly>
              <MobileOnly>
                <div className={styles.socialContainer}>
                  <div
                    className={styles.linkedinNfbContainer}
                    style={{
                      opacity: 0.4,
                      cursor: "default"
                    }}
                  >
                    <HorizantalIconWithHeader
                      size={15}
                      fontSize={12}
                      fontColor={"#fff"}
                      icon={linkedin}
                      text={"SignUp with LinkedIn"}
                    ></HorizantalIconWithHeader>
                  </div>
                  {this.state.country && this.state.gender ? (
                    <div className={styles.googleContainerMobile}>
                      <GoogleLogin
                        clientId="436581195458-4141qddi6npjei2e4akp1796b3cerbt7.apps.googleusercontent.com"
                        render={renderProps => (
                          <React.Fragment>
                            <div
                              className={styles.googleContainer}
                              onClick={() => renderProps.onClick()}
                            >
                              <HorizantalIconWithHeader
                                size={15}
                                fontSize={12}
                                fontColor={"#fff"}
                                icon={Google}
                                text={"SignUp with Google"}
                              ></HorizantalIconWithHeader>
                            </div>
                          </React.Fragment>
                        )}
                        buttonText="Login"
                        onSuccess={res => this.responseGoogle(res)}
                        onFailure={res => this.responseGoogle(res)}
                        cookiePolicy={"single_host_origin"}
                      />
                    </div>
                  ) : (
                    <div
                      className={styles.googleContainerMobile}
                      style={{
                        opacity: 0.4,
                        cursor: "default"
                      }}
                    >
                      <GoogleLogin
                        clientId="436581195458-4141qddi6npjei2e4akp1796b3cerbt7.apps.googleusercontent.com"
                        render={renderProps => (
                          <React.Fragment>
                            <div className={styles.googleContainer}>
                              <HorizantalIconWithHeader
                                size={15}
                                fontSize={12}
                                fontColor={"#fff"}
                                icon={Google}
                                text={"SignUp with Google"}
                              ></HorizantalIconWithHeader>
                            </div>
                          </React.Fragment>
                        )}
                        buttonText="Login"
                        onSuccess={res => this.responseGoogle(res)}
                        onFailure={res => this.responseGoogle(res)}
                        cookiePolicy={"single_host_origin"}
                      />
                    </div>
                  )}
                </div>
              </MobileOnly>

              <fieldset>
                <legend className={styles.dividingLine}>OR</legend>
              </fieldset>

              <div className={styles.nameContainer}>
                <div className={styles.firstName}>
                  <ControlInput
                    disabled={!this.state.gender || !this.state.country}
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={val => this.setState({ firstName: val })}
                    border={"1px solid #d2d2d2"}
                    height={50}
                    boxy={true}
                    borderColor={
                      !this.state.firstNameEmpty
                        ? "#d81818"
                        : "rgba(127, 127, 127, 0.5)"
                    }
                    onFocus={() => this.setState({ firstNameEmpty: true })}
                  />
                  {!this.state.firstNameEmpty ? (
                    <div className={styles.error}>{this.state.nameError}</div>
                  ) : null}
                </div>
                <div className={styles.lastName}>
                  <ControlInput
                    disabled={!this.state.gender || !this.state.country}
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={val => this.setState({ lastName: val })}
                    border={"1px solid #d2d2d2"}
                    height={50}
                    boxy={true}
                    borderColor={
                      !this.state.lastNameEmpty
                        ? "#d81818"
                        : "rgba(127, 127, 127, 0.5)"
                    }
                    onFocus={() => this.setState({ lastNameEmpty: true })}
                  />
                  {!this.state.lastNameEmpty ? (
                    <div className={styles.error}>{this.state.nameError}</div>
                  ) : null}
                </div>
              </div>

              <div className={styles.inputBox}>
                <ControlInput
                  disabled={!this.state.gender || !this.state.country}
                  placeholder="Email Address"
                  value={this.state.email}
                  onChange={val => this.setState({ email: val })}
                  border={"1px solid #d2d2d2"}
                  height={50}
                  boxy={true}
                  fontFamily="Regular"
                  borderColor={
                    !this.state.emailEmpty
                      ? "#d81818"
                      : "rgba(127, 127, 127, 0.5)"
                  }
                  onFocus={() => this.setState({ emailEmpty: true })}

                  // // onFocus={() => {
                  // //   this.handleOnFocusInput();
                  // }}
                />
              </div>
              {!this.state.emailEmpty ? (
                <div className={styles.error}>{this.state.emailError}</div>
              ) : null}
              <div className={styles.inputBox}>
                <PasswordInput
                  disabled={!this.state.gender || !this.state.country}
                  placeholder="New Password (Min 6 Characters)"
                  password={this.state.password}
                  onChange={val => this.setState({ password: val })}
                  border={"1px solid #d2d2d2"}
                  height={50}
                  width={"100%"}
                  boxy={true}
                  borderColor={
                    !this.state.passwordMatch
                      ? "#d81818"
                      : "rgba(127, 127, 127, 0.5)"
                  }
                  type="password"
                  onFocus={() => this.setState({ passwordMatch: true })}
                />
              </div>
              <div className={styles.inputBox}>
                <ConformPasswordInput
                  disabled={!this.state.gender || !this.state.country}
                  placeholder="Confirm Password"
                  confirmPassword={this.state.confirmPassword}
                  onChange={val => this.setState({ confirmPassword: val })}
                  border={"1px solid #d2d2d2"}
                  height={50}
                  width={"100%"}
                  boxy={true}
                  borderColor={
                    !this.state.passwordMatch
                      ? "#d81818"
                      : "rgba(127, 127, 127, 0.5)"
                  }
                  type="password"
                  onFocus={() => this.setState({ passwordMatch: true })}
                  onKeyUp={event => {
                    this.checkSignUp(event.key);
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
              <div className={styles.termsNcondition}>
                By signing up, I agree to the{" "}
                <span
                  onClick={() => this.handleredirect(TERMS)}
                  className={styles.clickInText}
                >
                  terms and conditions.
                </span>
                {/* <div className={styles.termsNconditionClick}></div> */}
              </div>
              <span>
                <button
                  disabled={!this.state.gender || !this.state.country}
                  onClick={() => this.handleSignUp()}
                  className={styles.signUpButton}
                  type="button"
                >
                  SIGN UP NOW
                </button>
              </span>

              <div>
                <div className={styles.starInTxt}>
                  Already have an account on&nbsp;
                </div>
                <div className={styles.accountTxt}>The star in me?&nbsp;</div>

                <div
                  className={styles.logInTxt}
                  onClick={() => this.props.showLoginModal()}
                >
                  Log In
                </div>
              </div>
            </div>
            <div
              className={
                this.state.euroUnion === false
                  ? styles.removebanner
                  : styles.notificationToolTip
              }
            >
              <ToolTip
                display={"flex"}
                handleModal={this.closeBannerToolTip}
                showScreen={this.state.euroUnion}
                children={
                  <div className={styles.toolTipBanner}>
                    <div className={styles.notifyIcon}></div>Please note we are
                    not GDPR compliant today. Going ahead and signing up, you
                    voluntarily waive your GDPR rights. We are working to be
                    GDPR compliant in the future.
                  </div>
                }
                left={0}
                bottom={0}
                width={"50vw"}
                toolTipBottom={"0"}
                toolTipWidth={"50vw"}
                textWidth={"100vw"}
                displayTriangle={"none"}
              />
            </div>
          </div>
        </CenteredContent>
      </React.Fragment>
    );
  }
}
