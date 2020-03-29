import React, { Component } from "react";
import styles from "./WorkExpModal.css";
import InputWithIcon from "./InputWithIcon";
import Input from "./Input";
import info from "../../../images/Info_Line.svg";
import cal from "../../../images/calendarEvent .svg";
import ButtonWithIcon from "./ButtonWithIcon";
import Button from "../../../core/Button";
import Input2 from "../../../core/Input2";

const formType = [{ name: "Work" }, { name: "Volunteer" }];
export default class Jobline extends Component {
  state = {
    active: "Work",
    showModal: "WORK",
    // work
    job: "",
    company: "",
    industry: "",
    workLocation: "",
    startWorkdate: "",
    endWorkdate: "",
    workDescription: "",
    // voulenteer
    organization: "",
    volunteerrole: "",
    cause: "",
    volunteerLocation: "",
    startVolunteerdate: "",
    endVolunteerdate: "",
    vounteerDescription: "",
    files: []
  };

  handleChange = val => {
    this.setState({
      active: val,
      showModal: val.toUpperCase()
    });
  };

  handleWorkChange = files => {
    if (this.state.files.length + files.length <= 3) {
      let existingFile = this.state.files;
      existingFile.push(...files);
      this.setState({ files: existingFile });
    }
  };
  handleWorkRemoveClick = files => {
    let existingFile = this.state.files;
    var index = existingFile.findIndex(val => {
      return val.name == files;
    });
    existingFile.splice(index, 1);
    this.setState({ files: existingFile });
  };

  handleSubmit = () => {
    if (this.state.showModal === "VOLUNTEER") {
      const reqBody = {
        userVolunteerDetailId: null,
        organization: this.state.organization,
        volunteerRole: this.state.volunteerrole,
        cause: this.state.cause,
        location: this.state.volunteerLocation,
        startDate: this.state.startVolunteerdate,
        endDate: this.state.endVolunteerdate,
        description: this.state.vounteerDescription,
        currentlyWorking: false
      };
      if (this.props.volunteerExperienceEvent) {
        this.props.volunteerExperienceEvent(reqBody);
      }
    }

    if (this.state.showModal === "WORK") {
      const reqBody = {
        organization: this.state.job,
        designation: this.state.company,
        industry: this.state.industry,
        location: this.state.workLocation,
        startDate: this.state.startWorkdate,
        endDate: this.state.endWorkdate,
        description: this.state.workDescription,
        currentlyWorking: true
      };
      if (this.props.workExperienceEvent) {
        this.props.workExperienceEvent(reqBody);
      }
    }
  };

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.workDetails !== this.props.workDetails ||
      nextProps.volunteer !== this.props.volunteer
    ) {
      this.props.getProfileDetails();
      this.props.closeModal();
    }
  }

  render() {
    return (
      <div className={styles.inpcont}>
        <div className={styles.radioco}>
          {formType.map(val => {
            return (
              <div className={styles.radiocont}>
                <Input
                  type="radio"
                  onChange={() => this.handleChange(val.name)}
                  value={val.name}
                  name="form"
                  checked={this.state.active === val.name ? "checked" : ""}
                ></Input>
                <label>{val.name}</label>
              </div>
            );
          })}
        </div>
        {this.state.showModal === "WORK" && (
          <div>
            {" "}
            <div className={styles.inputHolder}>
              <Input2
                placeholder="Designation/Job Position*"
                value={this.state.job}
                onChange={val => this.setState({ job: val })}
                textStyle={{ fontSize: 14 }}
                height={50}
              />
            </div>
            <div className={styles.inputHolder}>
              <Input2
                placeholder="Organisation/Company*"
                value={this.state.company}
                onChange={val => this.setState({ company: val })}
                textStyle={{ fontSize: 14 }}
                height={50}
              />
            </div>
            <div className={styles.inputHolder}>
              <Input2
                placeholder="Industry*"
                value={this.state.industry}
                onChange={val => this.setState({ industry: val })}
                textStyle={{ fontSize: 14 }}
                height={50}
              />
            </div>
            <div className={styles.inputHolder}>
              <Input2
                placeholder="Location*"
                value={this.state.workLocation}
                onChange={val => this.setState({ workLocation: val })}
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
                placeholder="Start Date"
                height="50px"
                width="49%"
                value={this.state.startWorkdate}
                onChange={val => this.setState({ startWorkdate: val })}
              ></InputWithIcon>
              <InputWithIcon
                src={cal}
                imageHeight="20px"
                imageWidth="20px"
                type="date"
                placeholder="End Date"
                height="50px"
                width="50%"
                value={this.state.endWorkdate}
                onChange={val => this.setState({ endWorkdate: val })}
              ></InputWithIcon>
            </div>
            <div className={styles.checkcont}>
              <input className={styles.check} type="checkbox"></input>{" "}
              <div className={styles.checktxt}>Currently Working</div>
            </div>
            <InputWithIcon
              src={info}
              height="47px"
              width="100%"
              type="text"
              placeholder="Description*"
              value={this.state.workDescription}
              onChange={val => this.setState({ workDescription: val })}
            ></InputWithIcon>
          </div>
        )}
        {this.state.showModal === "VOLUNTEER" && (
          <div>
            <div className={styles.inputHolder}>
              <Input2
                placeholder="Organisation/Company*"
                value={this.state.organization}
                onChange={val => this.setState({ organization: val })}
                textStyle={{ fontSize: 14 }}
                height={50}
              />
            </div>
            <div className={styles.inputHolder}>
              <Input2
                placeholder="Volunteer Role"
                value={this.state.volunteerrole}
                onChange={val => this.setState({ volunteerrole: val })}
                textStyle={{ fontSize: 14 }}
                height={50}
              />
            </div>
            <div className={styles.inputHolder}>
              <Input2
                placeholder="Cause"
                value={this.state.cause}
                onChange={val => this.setState({ cause: val })}
                textStyle={{ fontSize: 14 }}
                height={50}
              />
            </div>
            <div className={styles.inputHolder}>
              <Input2
                placeholder="Location*"
                value={this.state.volunteerLocation}
                onChange={val => this.setState({ volunteerLocation: val })}
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
                placeholder="Start Date"
                height="50px"
                width="334px"
                value={this.state.startVolunteerdate}
                onChange={val => this.setState({ startVolunteerdate: val })}
              ></InputWithIcon>
              <InputWithIcon
                src={cal}
                imageHeight="20px"
                imageWidth="20px"
                type="date"
                placeholder="End Date"
                height="50px"
                width="334px"
                value={this.state.endVolunteerdate}
                onChange={val => this.setState({ endVolunteerdate: val })}
              ></InputWithIcon>
            </div>
            <div className={styles.checkcont}>
              <input className={styles.check} type="checkbox"></input>{" "}
              <div className={styles.checktxt}>Currently Working</div>
            </div>
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
              value={this.state.vounteerDescription}
              onChange={val => this.setState({ vounteerDescription: val })}
            ></InputWithIcon>
          </div>
        )}
        <div className={styles.buttonCont}>
          <div className={styles.uploadcont}>
            {" "}
            <ButtonWithIcon
              onChange={event => {
                this.handleWorkChange(event.target.files);
              }}
            />
            <div style={{ padding: "10px" }}>
              {this.state.files.map(val => (
                <div>
                  {val.name}
                  <button
                    onClick={() => {
                      this.handleWorkRemoveClick(val.name);
                    }}
                  >
                    remove
                  </button>
                </div>
              ))}
              Upto 3 files
            </div>
          </div>
          <React.Fragment>
            {" "}
            {this.state.showModal === "WORK" ? (
              <Button
                width="674px"
                height="50px"
                backgroundColor="#4F439A"
                color="white"
                label="Update"
                onClick={() => this.handleSubmit()}
                disabled={
                  !(
                    this.state.job &&
                    this.state.company &&
                    this.state.industry &&
                    this.state.workLocation &&
                    this.state.workDescription
                  )
                }
              ></Button>
            ) : null}
            {this.state.showModal === "VOLUNTEER" ? (
              <Button
                width="674px"
                height="50px"
                backgroundColor="#4F439A"
                color="white"
                label="Update"
                onClick={() => this.handleSubmit()}
                disabled={
                  !(
                    this.state.organization &&
                    this.state.volunteerLocation &&
                    this.state.vounteerDescription
                  )
                }
              ></Button>
            ) : null}
          </React.Fragment>
        </div>
      </div>
    );
  }
}
