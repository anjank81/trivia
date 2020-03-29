import React, { Component } from "react";
import styles from "./AttendeeDetails.css";
import ControlInput from "../../../core/ControlInput";
import {
  isEmpty,
  lettersWithSpace,
  validateEmail,
  validatePhone,
  onlyLetters
} from "../../../utils/validation.js";

export default class AttendeeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      email: this.props.email,
      mobileno: this.props.mobileNo,
      showInputError: this.props.showInputError,
      mobilenoError: false,
      nameError: false,
      emailError: false
    };
  }
  handleMobilNoChange = val => {
    if (!isEmpty(val.mobileno)) {
      this.setState({ mobilenoError: false });
      this.setState(val);
      this.props.onChange(this.state);
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
      this.props.onChange(this.state);
    }
  };
  handleEmailChange = val => {
    if (!isEmpty(val.email)) {
      this.setState({ emailError: false });
      this.setState(val);
      this.props.onChange(this.state);
    }
  };
  render() {
    return (
      <div className={styles.attendes}>
        <div className={styles.attendeHeader}>
          {this.props.title}{" "}
          {this.props.subTitle && <span>({this.props.subTitle})</span>}
        </div>
        <div className={styles.inputHolder}>
          <ControlInput
            value={this.state.name}
            placeholder={"Name"}
            height={40}
            onChange={val => {
              this.handleNameChange({ name: val });
            }}
            borderColor={this.state.nameError ? "#d81818" : "#d2d2d2"}
            onBlur={val => this.onKeyUp({ name: val.target.value })}
          />
        </div>
        {this.state.nameError && (
          <div className={styles.error}>Please enter valid name</div>
        )}
        <div className={styles.inputHolder}>
          <ControlInput
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
          <div className={styles.error}>Please enter valid e-mail address</div>
        )}
        <div className={styles.inputHolder}>
          <ControlInput
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
      </div>
    );
  }
}
