import React, { Component } from "react";
import styles from "./WorkExpModal.css";
import InputWithIcon from "./InputWithIcon";
import info from "../../../images/Info_Line.svg";
import cal from "../../../images/calendarEvent .svg";
import ButtonWithIcon from "./ButtonWithIcon";
import Button from "../../../core/Button";
import Input2 from "../../../core/Input2";
export default class EducationLine extends Component {
  state = {
    school: "",
    degree: "",
    fieldofstudy: "",
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

  handleSubmit = () => {
    const reqBody = {
      userEducationDetailId: null,
      institute: this.state.school,
      degree: this.state.degree,
      fieldOfStudy: this.state.fieldofstudy,
      description: this.state.description,
      currentlyStuding: false,
      startDate: this.state.startdate,
      endDate: this.state.enddate
    };
    if (this.props.educationExperienceEvent) {
      this.props.educationExperienceEvent(reqBody);
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.education !== this.props.education) {
      this.props.getProfileDetails();
      this.props.closeModal();
    }
  }

  render() {
    return (
      <div className={styles.inpcont}>
        <div className={styles.inputHolder}>
          <Input2
            placeholder="School/College/University"
            value={this.state.school}
            onChange={val => this.setState({ school: val })}
            textStyle={{ fontSize: 14 }}
            height={50}
          />
        </div>
        <div className={styles.inputHolder}>
          <Input2
            placeholder="Degree*"
            value={this.state.degree}
            onChange={val => this.setState({ degree: val })}
            textStyle={{ fontSize: 14 }}
            height={50}
          />
        </div>
        <div className={styles.inputHolder}>
          <Input2
            placeholder="Field of Study*"
            value={this.state.fieldofstudy}
            onChange={val => this.setState({ fieldofstudy: val })}
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
            value={this.state.startdate}
            onChange={val => this.setState({ startdate: val })}
          ></InputWithIcon>
          <InputWithIcon
            src={cal}
            imageHeight="20px"
            imageWidth="20px"
            type="date"
            placeholder="End Date"
            height="50px"
            width="334px"
            value={this.state.enddate}
            onChange={val => this.setState({ enddate: val })}
          ></InputWithIcon>
        </div>
        <div className={styles.checkcont}>
          <input className={styles.check} type="checkbox"></input>{" "}
          <div className={styles.checktxt}>Still Studying</div>
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
          value={this.state.description}
          onChange={val => this.setState({ description: val })}
        ></InputWithIcon>
        <div className={styles.buttonCont}>
          <div className={styles.uploadcont}>
            {" "}
            <ButtonWithIcon
              onChange={event => {
                this.handleChange(event.target.files);
              }}
            ></ButtonWithIcon>
            <div style={{ padding: "10px" }}>
              {this.state.files.map(val => (
                <div>
                  {val.name}
                  <button
                    onClick={() => {
                      this.handleClick(val.name);
                    }}
                  >
                    remove
                  </button>
                </div>
              ))}{" "}
              Upto 3 files
            </div>
          </div>
          <Button
            width="674px"
            height="50px"
            backgroundColor="#4F439A"
            color="white"
            label="Update"
            onClick={() => this.handleSubmit()}
            disabled={
              !(
                this.state.degree &&
                this.state.fieldofstudy &&
                this.state.description
              )
            }
          ></Button>
        </div>
      </div>
    );
  }
}
