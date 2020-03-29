import React, { Component } from "react";
import styles from "./Skills.css";

class Skills extends Component {
  state = {};

  onshowAddSkillModal = val => {
    if (this.props.showAddSkillModal) this.props.showAddSkillModal(val);
  };

  showAddLanguagesModal = val => {
    if (this.props.showAddLanguagesModal) this.props.showAddLanguagesModal(val);
  };

  onshowAddActivityModal = () => {
    if (this.props.showAddActivityModal) this.props.showAddActivityModal();
  };

  onshowAddInterestModal = () => {
    if (this.props.showAddInterestModal) this.props.showAddInterestModal();
  };

  render() {
    return (
      <div className={styles.base}>
        {this.props.title === "Skills" && (
          <React.Fragment>
            {this.props.professionalSkills &&
            this.props.professionalSkills.length !== 0 ? (
              this.props.professionalSkills &&
              this.props.professionalSkills.map(val => {
                return (
                  <React.Fragment>
                    <div className={styles.title}>{this.props.title}</div>
                    <div
                      className={styles.addButton}
                      onClick={() =>
                        this.onshowAddSkillModal({
                          skills: this.props.details,
                          postSkillStatus: this.props.postSkillStatus
                        })
                      }
                    ></div>
                    <div className={styles.container}>
                      <div className={styles.addSkill}>{val.name}</div>
                    </div>
                  </React.Fragment>
                );
              })
            ) : (
              <React.Fragment>
                <div className={styles.title}>{this.props.title}</div>
                <div
                  className={styles.addButton}
                  onClick={val =>
                    this.onshowAddSkillModal({
                      skills: this.props.details
                    })
                  }
                ></div>
                <div className={styles.container}>
                  <div className={styles.addSkill}>ADD SKILL</div>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
        {this.props.title === "Languages" && (
          <React.Fragment>
            {this.props.professionalLanguages &&
            this.props.professionalLanguages.length !== 0 ? (
              this.props.professionalLanguages &&
              this.props.professionalLanguages.map(val => {
                return (
                  <React.Fragment>
                    {" "}
                    <div className={styles.title}>{this.props.title}</div>
                    <div
                      className={styles.addButton}
                      onClick={() =>
                        this.showAddLanguagesModal({
                          language: this.props.languagedetails,
                          postLanguageStatus: this.props.postSkillStatus
                        })
                      }
                    ></div>
                    <div className={styles.container}>
                      {/* <div>{val.name}</div> */}
                      <div className={styles.addSkill}>{val.name}</div>
                    </div>
                  </React.Fragment>
                );
              })
            ) : (
              <React.Fragment>
                <div className={styles.title}>{this.props.title}</div>
                <div
                  className={styles.addButton}
                  onClick={() =>
                    this.showAddLanguagesModal({
                      language: this.props.languagedetails,
                      postLanguageStatus: this.props.postSkillStatus
                    })
                  }
                ></div>
                <div className={styles.container}>
                  {/* <div></div> */}
                  <div className={styles.addSkill}>ADD LANGUAGES</div>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
        {this.props.title === "Interests" && (
          <React.Fragment>
            <div className={styles.title}>{this.props.title}</div>
            <div
              className={styles.addButton}
              onClick={() => this.onshowAddInterestModal()}
            ></div>
            <div className={styles.container}>
              <div>{this.props.skills}</div>
              <div className={styles.addSkill}>Add Interests</div>
            </div>
          </React.Fragment>
        )}
        {/* {this.props.title === "Recent Activity" && (
          <React.Fragment>
            <div className={styles.title}>{this.props.title}</div>
            <div
              className={styles.addButton}
              onClick={() => this.onshowAddActivityModal()}
            ></div>
            <div>
              <div>{this.props.skills}</div>
              <div className={styles.addSkill}>Add Activity</div>
            </div>
          </React.Fragment>
        )} */}
      </div>
    );
  }
}

export default Skills;
