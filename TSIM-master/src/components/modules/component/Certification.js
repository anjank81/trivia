import React, { Component } from "react";
import styles from "./WorkExpModal.css";
import Input from "./Input";
import CertificationForm from "./CertificationForm";
import PublicationForm from "./PublicationForm";
import PatentForm from "./PatentForm";
import InputWithIcon from "./InputWithIcon";
import Input2 from "../../../core/Input2";
import cal from "../../../images/calendarEvent .svg";
import Button from "../../../core/Button";
import info from "../../../images/Info_Line.svg";
const formType = [
  { name: "Certification" },
  { name: "Publication" },
  { name: "Patent" }
];
export default class Certification extends Component {
  state = {
    //Certification

    active: "Certification",
    showModal: "CERTIFICATION",
    certificationname: "",
    organization: "",
    certificateid: "",
    certificateurl: "",
    certificationIssuedate: "",
    expirydate: "",

    // publication

    publicationTitle: "",
    publisher: "",
    authors: "",
    publicationurl: "",
    publishdate: "",
    publishDescription: "",

    // Patent

    patentTitle: "",
    office: "",
    number: "",
    patentIssuedate: "",
    description: ""
  };

  handleChange = val => {
    this.setState({
      active: val,
      showModal: val.toUpperCase()
    });
  };

  handleSubmit = () => {
    if (this.state.showModal === "CERTIFICATION") {
      const reqBody = {
        userCertificationCourseId: null,
        ceritificationName: this.state.certificationname,
        institute: this.state.organization,
        cerificateId: this.state.certificateid,
        certificateUrl: this.state.certificateurl,
        expiryDate: this.state.certificationIssuedate,
        issueDate: this.state.expirydate
      };
      if (this.props.certificationExperienceEvent) {
        this.props.certificationExperienceEvent(reqBody);
      }
    }

    if (this.state.showModal === "PUBLICATION") {
      const reqBody = {
        userPublicationDetailId: 1,
        title: this.state.publicationTitle,
        publisher: this.state.publisher,
        authors: this.state.authors,
        publicationUrl: this.state.publicationurl,
        publicationDate: this.state.publishdate,
        publicationDescription: this.state.publishDescription
      };
      if (this.props.publicationExperienceEvent) {
        this.props.publicationExperienceEvent(reqBody);
      }
    }

    if (this.state.showModal === "PATENT") {
      const reqBody = {
        userPatentDetailId: 1,
        title: this.state.patentTitle,
        patentOffice: this.state.office,
        patentNo: this.state.number,
        issueDate: this.state.patentIssuedate,
        description: this.state.description,
        isPending: false
      };
      if (this.props.patentExperienceEvent) {
        this.props.patentExperienceEvent(reqBody);
      }
    }
  };

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.certification !== this.props.certification ||
      nextProps.publication !== this.props.publication ||
      nextProps.patent !== this.props.patent
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
        {this.state.showModal === "CERTIFICATION" && (
          <div>
            <div className={styles.inputHolder}>
              <Input2
                placeholder="Certification/Course Name*"
                value={this.state.certificationname}
                onChange={val => this.setState({ certificationname: val })}
                textStyle={{ fontSize: 14 }}
                height={50}
              />
            </div>
            <div className={styles.inputHolder}>
              <Input2
                placeholder="Issuing Organisation/Institute*"
                value={this.state.organization}
                onChange={val => this.setState({ organization: val })}
                textStyle={{ fontSize: 14 }}
                height={50}
              />
            </div>
            <div className={styles.inputHolder}>
              <Input2
                placeholder="Certificate ID"
                value={this.state.certificateid}
                onChange={val => this.setState({ certificateid: val })}
                textStyle={{ fontSize: 14 }}
                height={50}
              />
            </div>
            <div className={styles.inputHolder}>
              <Input2
                placeholder="Certificate URL"
                value={this.state.certificateurl}
                onChange={val => this.setState({ certificateurl: val })}
                textStyle={{ fontSize: 14 }}
                height={50}
              />
            </div>
            <div className={styles.checkcont}>
              <input className={styles.check} type="checkbox"></input>{" "}
              <div className={styles.checktxt}>No Expiry Date</div>
            </div>
          </div>
        )}
        {this.state.showModal === "PUBLICATION" && (
          <div>
            <div className={styles.inputHolder}>
              <Input2
                placeholder="Publication Title*"
                value={this.state.publicationTitle}
                onChange={val => this.setState({ publicationTitle: val })}
                textStyle={{ fontSize: 14 }}
                height={50}
              />
            </div>
            <div className={styles.inputHolder}>
              <Input2
                placeholder="Publisher"
                value={this.state.authors}
                onChange={val => this.setState({ authors: val })}
                textStyle={{ fontSize: 14 }}
                height={50}
              />
            </div>
            <div className={styles.inputHolder}>
              <Input2
                placeholder="Publication Url"
                value={this.state.publicationurl}
                onChange={val => this.setState({ publicationurl: val })}
                textStyle={{ fontSize: 14 }}
                height={50}
              />
            </div>
            <div className={styles.inputHolder}>
              <Input2
                placeholder="Publication Description"
                value={this.state.publishDescription}
                onChange={val => this.setState({ publishDescription: val })}
                textStyle={{ fontSize: 14 }}
                height={50}
              />
            </div>
          </div>
        )}
        {this.state.showModal === "PATENT" && (
          <div>
            <div className={styles.inputHolder}>
              <Input2
                placeholder="Patent Title*"
                value={this.state.patentTitle}
                onChange={val => this.setState({ patentTitle: val })}
                textStyle={{ fontSize: 14 }}
                height={50}
              />
            </div>
            <div className={styles.inputHolder}>
              <Input2
                placeholder="Patent Office"
                value={this.state.office}
                onChange={val => this.setState({ office: val })}
                textStyle={{ fontSize: 14 }}
                height={50}
              />
            </div>
            <div className={styles.inputHolder}>
              <Input2
                placeholder="Patent Number"
                value={this.state.number}
                onChange={val => this.setState({ number: val })}
                textStyle={{ fontSize: 14 }}
                height={50}
              />
            </div>
            <div className={styles.inputHolder}>
              <Input2
                placeholder="Patent Issue date"
                value={this.state.patentIssuedate}
                onChange={val => this.setState({ patentIssuedate: val })}
                textStyle={{ fontSize: 14 }}
                height={50}
              />
            </div>
          </div>
        )}
        <div className={styles.buttonCont}>
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
              placeholder="Description (Mention Patent URL, etc)"
              height="50px"
              width="674px"
              value={this.state.description}
              onChange={val => this.setState({ description: val })}
            ></InputWithIcon>
          </div>
          <div className={styles.buttonCont}>
            {this.state.showModal === "CERTIFICATION" && (
              <Button
                width="100%"
                height="50px"
                backgroundColor="#4F439A"
                color="white"
                label="Update"
                onClick={() => this.handleSubmit()}
                disabled={
                  !(
                    this.state.certificationname &&
                    this.state.organization &&
                    this.state.certificateurl &&
                    this.state.certificateid
                  )
                }
              ></Button>
            )}

            {this.state.showModal === "PUBLICATION" && (
              <Button
                width="100%"
                height="50px"
                backgroundColor="#4F439A"
                color="white"
                label="Update"
                onClick={() => this.handleSubmit()}
                disabled={
                  !(
                    this.state.publicationTitle &&
                    this.state.authors &&
                    this.state.publicationurl &&
                    this.state.publishDescription
                  )
                }
              ></Button>
            )}
            {this.state.showModal === "PATENT" && (
              <Button
                width="100%"
                height="50px"
                backgroundColor="#4F439A"
                color="white"
                label="Update"
                onClick={() => this.handleSubmit()}
                disabled={
                  !(
                    this.state.patentTitle &&
                    this.state.office &&
                    this.state.number &&
                    this.state.patentIssuedate &&
                    this.state.description
                  )
                }
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
