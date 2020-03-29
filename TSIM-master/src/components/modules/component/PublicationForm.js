import React, { Component } from "react";
import cal from "../../../images/calendarEvent .svg";
import ButtonWithIcon from "./ButtonWithIcon";
import Button from "../../../core/Button";
import InputWithIcon from "./InputWithIcon";
import info from "../../../images/Info_Line.svg";
import styles from "./WorkExpModal.css";
import ControlInput from "../../../core/ControlInput";
import Input2 from "../../../core/Input2";
export default class PublicationForm extends Component {
  state = {
    active: "Publication",
    showModal: "PUBLICATION",
    title: "",
    publisher: "",
    authors: "",
    publicationurl: "",
    publishdate: ""
  };
  render() {
    return <div></div>;
  }
}
