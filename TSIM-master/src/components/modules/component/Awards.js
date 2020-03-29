import React, { Component } from "react";
import styles from "./WorkExpModal.css";
import InputWithIcon from "./InputWithIcon";
import info from "../../../images/Info_Line.svg";
import cal from "../../../images/calendarEvent .svg";
import Button from "../../../core/Button";
import Input2 from "../../../core/Input2";
export default class Awards extends Component {
  state = {
    awardtitle: "",
    issuer: "",
    eventname: "",
    issuedate: "",
    description: ""
  };
  handleClick = val => {
    this.setState({
      active: val,
      showModal: val.toUpperCase()
    });
  };

  handleSubmit = () => {
    const reqBody = {
      userHonourAwardId: null,
      title: this.state.awardtitle,
      issuer: this.state.issuer,
      eventName: this.state.eventname,
      issueDate: this.state.issuedate,
      description: this.state.description
    };
    if (this.props.awardExperienceEvent) {
      this.props.awardExperienceEvent(reqBody);
    }
  };

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.award !== this.props.award) {
  //     this.props.getProfileDetails();
  //     this.props.closeModal();
  //   }
  // }

  render() {
    return (
      <div className={styles.inpcont}>
        <div className={styles.inputHolder}>
          <Input2
            placeholder="Honor/Award Title*"
            value={this.state.awardtitle}
            onChange={val => this.setState({ awardtitle: val })}
            textStyle={{ fontSize: 14 }}
            height={50}
          />
        </div>
        <div className={styles.inputHolder}>
          <Input2
            placeholder="Honor/Award Title*"
            value={this.state.issuer}
            onChange={val => this.setState({ issuer: val })}
            textStyle={{ fontSize: 14 }}
            height={50}
          />
        </div>
        <div className={styles.inputHolder}>
          <Input2
            placeholder="Event Name"
            value={this.state.eventname}
            onChange={val => this.setState({ eventname: val })}
            textStyle={{ fontSize: 14 }}
            height={50}
          />
        </div>

        <div className={styles.datecont}>
          <InputWithIcon
            src={cal}
            imageHeight="20px"
            imageWidth="20px"
            type="date"
            placeholder="Issue Date"
            height="50px"
            width="674px"
            value={this.state.issuedate}
            onChange={val => this.setState({ issuedate: val })}
          ></InputWithIcon>
        </div>
        <div className={styles.desccont}>
          <InputWithIcon
            src={info}
            theight="47px"
            twidth="672px"
            imageHeight="20px"
            imageWidth="20px"
            type="text"
            placeholder="Description*"
            height="50px"
            width="674px"
            value={this.state.description}
            onChange={val => this.setState({ description: val })}
          ></InputWithIcon>
        </div>
        <div className={styles.buttonCont}>
          <Button
            width="674px"
            height="50px"
            backgroundColor="#4F439A"
            color="white"
            label="Update"
            onClick={() => this.handleSubmit()}
            disabled={
              !(
                this.state.awardtitle &&
                this.state.issuer &&
                this.state.eventname &&
                // this.state.issuedate &&
                this.state.description
              )
            }
          ></Button>
        </div>
      </div>
    );
  }
}
