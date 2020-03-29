import React, { Component } from "react";
import styles from "./Attendee.css";
import Input2 from "../../core/Input2";

import {
  isEmpty,
  lettersWithSpace,
  validateEmail,
  validatePhone,
  onlyLetters
} from "../../utils/validation.js";
import PrimaryHeaderContainer from "../../components/HomePage/container/PrimaryHeaderContainer";
import CenteredContent from "../../core/CenteredContent";
import { HOME } from "../../utils/constant.js";

export default class Attendee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      mobileno: "",
      showInputError: this.props.showInputError,
      mobilenoError: false,
      nameError: false,
      emailError: false,
      buttonText:
        this.props.location.search.split("&")[1].split("=")[1] - 1 === 1
          ? "SUBMIT"
          : "NEXT",
      number: this.props.location.search.split("&")[1].split("=")[1] - 1,
      AttendeeNo: 1,
      reqdetails: [],
      registrationId: this.props.location.search.split("&")[0].split("=")[1]
    };
  }
  handleMobilNoChange = val => {
    if (!isEmpty(val.mobileno)) {
      this.setState({ mobilenoError: false });
      this.setState(val);
      //   this.props.onChange(this.state);
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.attendeeDetails !== this.state.attendeeDetails) {
      this.props.history.push(HOME);
    }
  }
  makeApiCall = reqbody => {
    this.props.postAttendee([reqbody, this.state.registrationId]);
  };

  submit = () => {
    if (this.state.number !== 0) {
      const reqdetails = this.state.reqdetails;
      reqdetails.push({
        userName: this.state.name,
        email: this.state.email,
        mobile: this.state.mobileno
      });

      this.setState({
        reqdetails,
        number: this.state.number - 1,
        name: "",
        email: "",
        mobileno: "",
        buttonText: "NEXT",
        AttendeeNo: this.state.AttendeeNo + 1
      });
    }

    if (this.state.number === 1) {
      this.setState({
        buttonText: "SUBMIT"
      });
    }
    if (this.state.buttonText === "SUBMIT") {
      this.makeApiCall(this.state.reqdetails);
    }
  };

  onKeyUp = val => {
    if (val.email) {
      if (validateEmail(val.email)) {
        this.setState({ emailError: true });
      }
    }
    if (val.name) {
      if (onlyLetters(val.name)) {
        this.setState({ nameError: true });
      }
    }
  };
  handleNameChange = val => {
    if (!isEmpty(val.name) && !onlyLetters(val.name)) {
      this.setState(val);
      this.setState({ nameError: false });
      //   this.props.onChange(this.state);
    }
  };
  handleEmailChange = val => {
    if (!isEmpty(val.email)) {
      this.setState({ emailError: false });
      this.setState(val);
      //   this.props.onChange(this.state);
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
            <div className={styles.attendeHeader}>
              Attendee {this.state.AttendeeNo}
              {/* Attendee */}
              {/* {this.props.title}{" "}
              {this.props.subTitle && <span>({this.props.subTitle})</span>} */}
            </div>
            <div className={styles.inputHolder}>
              <Input2
                value={this.state.name}
                placeholder={"Name"}
                height={40}
                onChange={val => {
                  this.handleNameChange({ name: val });
                }}
                onBlur={val => this.onKeyUp({ name: val.target.value })}
              />
            </div>
            {this.state.nameError && (
              <div className={styles.error}>Please enter valid name</div>
            )}
            <div className={styles.inputHolder}>
              <Input2
                value={this.state.email}
                placeholder={"Email Address"}
                height={40}
                onChange={val => {
                  this.handleEmailChange({ email: val });
                }}
                borderColor={this.state.emailError ? "#d81818" : "#d2d2d2"}
                onBlur={val => this.onKeyUp({ email: val.target.value })}
              />
            </div>
            {this.state.emailError && (
              <div className={styles.error}>
                Please enter valid e-mail address
              </div>
            )}
            <div className={styles.inputHolder}>
              <Input2
                value={this.state.mobileno}
                placeholder={"Mobile No."}
                height={40}
                type={"number"}
                onChange={val => {
                  this.handleMobilNoChange({ mobileno: val });
                }}
                borderColor={this.state.mobilenoError ? "#d81818" : "#d2d2d2"}
                onBlur={val => this.onKeyUp({ mobileno: val.target.value })}
              />
            </div>
            {this.state.mobilenoError && (
              <div className={styles.error}>Please enter valid mobile no</div>
            )}
            <div className={styles.buttonWrapper}>
              <button
                disabled={
                  !this.state.mobileno || !this.state.email || !this.state.name
                }
                // onClick={() => this.handleSubmit(this.state.newPassword)}
                onClick={() => this.submit()}
                className={styles.loginButton}
                type="button"
              >
                {this.state.buttonText}
              </button>
            </div>
          </div>
        </CenteredContent>
      </React.Fragment>
    );
  }
}
