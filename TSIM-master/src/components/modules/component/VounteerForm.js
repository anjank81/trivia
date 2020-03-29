import React, { Component } from "react";
import cal from "../../../images/calendarEvent .svg";
import ButtonWithIcon from "./ButtonWithIcon";
import Button from "../../../core/Button";
import InputWithIcon from "./InputWithIcon";
import info from "../../../images/Info_Line.svg";
import styles from "./WorkExpModal.css";
import ControlInput from "../../../core/ControlInput";
import Input2 from "../../../core/Input2";
export default class VolunteerForm extends Component {
  state = {
    active: "VOLUNTEER",
    showModal: "VOLUNTEER",
    organization: "",
    volunteerrole: "",
    cause: "",
    location: "",
    startdate: "",
    enddate: "",
    description: "",
    files: []
  };
  handleChange = files => {
    if (this.state.files.length + files.length <= 3) {
      let existingFile = this.state.files;
      existingFile.push(...files);
      this.setState({ files: existingFile });
    }
  };
  handleClick = files => {
    let existingFile = this.state.files;
    var index = existingFile.findIndex(val => {
      return val.name == files;
    });
    existingFile.splice(index, 1);
    this.setState({ files: existingFile });
  };
  render() {
    return <div> </div>;
  }
}
