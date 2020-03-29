import React, { Component } from "react";
import BottomSlideModal from "./BottomSlideModal";
import WorkIcon from "./WorkIcon";
import awardIcon from "../../../images/Awards fill-grey.svg";
import awardIconFill from "../../../images/Awards-fill.svg";
import certificateIcon from "../../../images/Certification-Line-grey.svg";
import certificateIconFill from "../../../images/Certification-Fill .svg";
import educationIcon from "../../../images/Education-fill-grey.svg";
import educationIconFill from "../../../images/Education-line-fill.svg";
import jobIconFill from "../../../images/job-line-blue-fill.svg";
import jobIcon from "../../../images/Job Fill-grey.svg";
import styles from "./WorkExpModal.css";
import Jobline from "./Jobline";
import EducationLine from "./EducationLine.js";
import Certification from "./Certification";
import Awards from "./Awards";
import Calendar from "react-calendar";
const IconType = [
  { name: "JOB", image: jobIcon, image1: jobIconFill },
  { name: "Education", image: educationIcon, image1: educationIconFill },
  {
    name: "Certification",
    image: certificateIcon,
    image1: certificateIconFill
  },
  { name: "Awards", image: awardIcon, image1: awardIconFill }
];

export default class WorkExpModal extends Component {
  state = {
    active: "JOB",
    showModal: "JOB"
  };
  handleClick = val => {
    this.setState({
      active: val,
      showModal: val.toUpperCase()
    });
  };

  render() {
    return (
      <BottomSlideModal width="auto">
        <div className={styles.centermodal}>
          <div className={styles.headerCont}>
            <div className={styles.workheader}>
              Add{" "}
              {this.state.active === "JOB"
                ? "Work Experience"
                : this.state.active && this.state.active === "Awards"
                ? "Honors & Awards"
                : this.state.active}
            </div>
          </div>
          <div className={styles.workicon}>
            {IconType.map(val => {
              return (
                <WorkIcon
                  src={this.state.active === val.name ? val.image1 : val.image}
                  height="50px"
                  width="50px"
                  onClick={() => this.handleClick(val.name)}
                  selected={this.state.active === val.name ? true : false}
                ></WorkIcon>
              );
            })}
          </div>
          {this.state.showModal === "JOB" && (
            <React.Fragment>
              <Jobline
                {...this.props}
                closeModal={() => this.props.closeModal()}
                postWorkData={() => this.props.postWorkData()}
                postVounteerData={() => this.props.postVounteerData()}
                getProfileDetails={() => this.props.getProfileDetails()}
              />
            </React.Fragment>
          )}
          {this.state.showModal === "EDUCATION" && (
            <React.Fragment>
              <EducationLine
                educationExperienceEvent={this.props.educationExperienceEvent}
                getProfileDetails={() => this.props.getProfileDetails()}
              />
            </React.Fragment>
          )}
          {this.state.showModal === "CERTIFICATION" && (
            <React.Fragment>
              <Certification
                certificationExperienceEvent={data =>
                  this.props.certificationExperienceEvent(data)
                }
                publicationExperienceEvent={data =>
                  this.props.publicationExperienceEvent(data)
                }
                patentExperienceEvent={data =>
                  this.props.patentExperienceEvent(data)
                }
                getProfileDetails={() => this.props.getProfileDetails()}
              />
            </React.Fragment>
          )}
          {this.state.showModal === "AWARDS" && (
            <React.Fragment>
              <Awards
                awardExperienceEvent={data =>
                  this.props.awardExperienceEvent(data)
                }
                getProfileDetails={() => this.props.getProfileDetails()}
              />
            </React.Fragment>
          )}
        </div>
      </BottomSlideModal>
    );
  }
}
