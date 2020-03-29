import React, { Component } from "react";
import cal from "../../../images/calendarEvent .svg";
import ButtonWithIcon from "./ButtonWithIcon";
import Button from "../../../core/Button";
import InputWithIcon from "./InputWithIcon";
import info from "../../../images/Info_Line.svg";
import styles from "./WorkExpModal.css";
import ControlInput from "../../../core/ControlInput";
import Input2 from "../../../core/Input2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default class WorkForm extends Component {
  state = {
    active: "WORK",
    showModal: "WORK",
    job: "",
    organization: "",
    industry: "",
    location: "",
    startdate: "",
    enddate: "",
    description: "",
    files: [],
    date: new Date()
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

  handleStartChange = date => {
    this.setState({
      startDate: date
    });
  };

  handleEndChange = date => {
    this.setState({
      enddate: date
    });
  };

  render() {
    return <div></div>;
  }
}
