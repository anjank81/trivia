import React from "react";
import styles from "../Settings/ManageNotification.css";
import Input2 from "../../core/Input2";

export default class ManageNotification extends React.Component {
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
              <div className={styles.myProfile}>Manage Notification</div>
              <div className={styles.lineSeparator}></div>
              <div className={styles.choose}>
                Choose what you want to get notified on
              </div>

              <div className={styles.commonContainer}>
                <div className={styles.comments}>Comments</div>
                <div>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    name="Remember Password"
                    value="true"
                  ></input>
                </div>
              </div>

              <div className={styles.commonContainer}>
                <div className={styles.comments}>Post Tags</div>
                <div>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    name="Remember Password"
                    value="true"
                  ></input>
                </div>
              </div>

              <div className={styles.commonContainer}>
                <div className={styles.comments}>Reminders</div>
                <div>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    name="Remember Password"
                    value="true"
                  ></input>
                </div>
              </div>

              <div className={styles.commonContainer}>
                <div className={styles.comments}>Payment Failures</div>
                <div>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    name="Remember Password"
                    value="true"
                  ></input>
                </div>
              </div>

              <div className={styles.commonContainer}>
                <div className={styles.comments}>Updates from Connections</div>
                <div>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    name="Remember Password"
                    value="true"
                  ></input>
                </div>
              </div>

              <div className={styles.commonContainer}>
                <div className={styles.comments}>People you may know</div>
                <div>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    name="Remember Password"
                    value="true"
                  ></input>
                </div>
              </div>

              <div className={styles.commonContainer}>
                <div className={styles.comments}>Events</div>
                <div>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    name="Remember Password"
                    value="true"
                  ></input>
                </div>
              </div>

              <div className={styles.commonContainer}>
                <div className={styles.comments}>Work Anniversaries</div>
                <div>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    name="Remember Password"
                    value="true"
                  ></input>
                </div>
              </div>

              <div className={styles.commonContainer}>
                <div className={styles.comments}>Post Activities</div>
                <div>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    name="Remember Password"
                    value="true"
                  ></input>
                </div>
              </div>

              <div className={styles.choose}>How you get notifications</div>

              <div className={styles.commonContainer}>
                <div className={styles.comments}>The star in me platform</div>
                <div>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    name="Remember Password"
                    value="true"
                  ></input>
                </div>
              </div>

              <div className={styles.commonContainer}>
                <div className={styles.comments}>Email</div>
                <div>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    name="Remember Password"
                    value="true"
                  ></input>
                </div>
              </div>

              <div className={styles.commonContainer}>
                <div className={styles.comments}>SMS</div>
                <div>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    name="Remember Password"
                    value="true"
                  ></input>
                </div>
              </div>

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
