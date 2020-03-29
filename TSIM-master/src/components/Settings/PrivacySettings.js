import React from "react";
import styles from "../Settings/PrivacySettings.css";
import Input2 from "../../core/Input2";
import Switch from "react-switch";

const PrivacyInfo = [
  {
    title: "PROFILE PICTURE",
    subTitle: "You can allow non logged in users to view your profile picture",
    allow: true
  },
  {
    title: "DESIGNATION",
    subTitle: "You can allow non logged in users to view your profile picture",
    allow: true
  },
  {
    title: "CONNECTIONS",
    subTitle: "You can allow non logged in users to view your profile picture",
    allow: true
  },
  {
    title: "MUTUAL CONNECTIONS",
    subTitle: "You can allow non logged in users to view your profile picture",
    allow: true
  },
  {
    title: "MILESTONES",
    subTitle: "You can allow non logged in users to view your profile picture",
    allow: true
  },
  {
    title: "PROFESSIONAL SUMMARY",
    subTitle: "You can allow non logged in users to view your profile picture",
    allow: true
  },
  {
    title: "INTRO VIDEO",
    subTitle: "You can allow non logged in users to view your profile picture",
    allow: true
  },
  {
    title: "PROFESSIONAL JOURNEY",
    subTitle: "You can allow non logged in users to view your profile picture",
    allow: true
  },
  {
    title: "RECENT ACTIVITIES",
    subTitle: "You can allow non logged in users to view your profile picture",
    allow: true
  },

  {
    title: "SKILLS",
    subTitle: "You can allow non logged in users to view your profile picture",
    allow: true
  },

  {
    title: "LANGUAGES",
    subTitle: "You can allow non logged in users to view your profile picture",
    allow: true
  },

  {
    title: "INTERESTS",
    subTitle: "You can allow non logged in users to view your profile picture",
    allow: true
  }
];

export default class PrivacySettings extends React.Component {
  constructor() {
    super();
    this.state = {
      PrivacyInfo: [...PrivacyInfo]
    };
  }

  onChange = (info, index) => {
    PrivacyInfo[index].allow = !PrivacyInfo[index].allow;
    this.forceUpdate();
  };

  render() {
    return (
      <React.Fragment>
        <div className={styles.baseContainer}>
          <div className={styles.container}>
            <div className={styles.profileContainer}>
              <div className={styles.myProfile}>Privacy Settings</div>
              <div className={styles.lineSeparator}></div>
              <div className={styles.choose}>
                Choose how your profile appears to non-logged in members
              </div>

              {this.state.PrivacyInfo.map((info, index) => {
                return (
                  <div className={styles.commonContainer}>
                    <div>
                      <div className={styles.title}>{info.title}</div>
                      <div className={styles.subTitle}>{info.subTitle}</div>
                    </div>
                    <div className={styles.wrapper}>
                      <div
                        onClick={() => this.onChange(info, index)}
                        className={info.allow ? styles.allow : styles.dontAllow}
                      >
                        {info.allow ? "Allow" : "Don't Allow"}
                      </div>

                      <Switch
                        className={styles.checkbox}
                        onChange={() => this.onChange(info, index)}
                        checked={info.allow}
                        offColor={"#B2B2B2"}
                        onColor={"#4F439A"}
                        checkedIcon={false}
                        uncheckedIcon={false}
                      />

                      {/* </input> */}
                    </div>
                  </div>
                );
              })}

              <div className={styles.secondaryLineSeperrator}></div>

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
