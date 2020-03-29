import React from "react";
import styles from "../Settings/MyProfile.css";
import Input2 from "../../core/Input2";

export default class MyProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      designation: "",
      location: "",
      summary: ""
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className={styles.baseContainer}>
          <div className={styles.container}>
            <div className={styles.profileContainer}>
              <div className={styles.myProfile}>My Profile</div>
              <div className={styles.lineSeparator}></div>
              <div className={styles.nameContainer}>
                <div className={styles.name}>Name</div>
                <div>
                  <Input2
                    placeholder="Pratiksha Gupta"
                    value={this.state.name}
                    onChange={val => this.setState({ name: val })}
                    textStyle={{ fontSize: 14 }}
                    height={50}
                    boxy={true}
                    borderColor={"#7f7f7f"}
                    // borderBottom={"#7f7f7f"}
                    // // onFocus={() => {
                    // //   this.handleOnFocusInput();
                    // }}
                  />
                </div>
              </div>
              <div className={styles.nameContainer}>
                <div className={styles.name}>Designation</div>
                <div>
                  <Input2
                    placeholder="Interaction Designer | Visual Designer"
                    value={this.state.designation}
                    onChange={val => this.setState({ designation: val })}
                    textStyle={{ fontSize: 14 }}
                    height={50}
                    boxy={true}
                    borderColor={"#7f7f7f"}
                  />
                </div>
              </div>
              <div className={styles.nameContainer}>
                <div className={styles.name}>Location</div>
                <div>
                  <Input2
                    placeholder="Bengaluru, India"
                    value={this.state.location}
                    onChange={val => this.setState({ location: val })}
                    textStyle={{ fontSize: 14 }}
                    height={50}
                    boxy={true}
                    borderColor={"#7f7f7f"}
                  />
                </div>
              </div>
              <div className={styles.nameContainer}>
                <div className={styles.name}>Professional Summary</div>
                <div>
                  <Input2
                    placeholder="For ex:
                   A Human resources leader with over 18 years of experienceacross Talent Management, HR Policy and Recruitment"
                    value={this.state.summary}
                    onChange={val => this.setState({ summary: val })}
                    textStyle={{ fontSize: 14 }}
                    height={50}
                    boxy={true}
                    borderColor={"#7f7f7f"}
                  />
                </div>
              </div>
              <div className={styles.buttonContainer}>
                <div className={styles.cancelButton}>CANCEL</div>
                <div className={styles.saveButton}>SAVE CHANGES</div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
