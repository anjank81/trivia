import React from "react";
import styles from "../Welcome/Welcome.css";
import CenteredContent from "../../core/CenteredContent";
import { FEED } from "../../utils/constant.js";

import RightSlideModal from "../../../src/components/modules/component/RightSlideModal";

// import { Input2 } from "../../core";
export default class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      welcome: ""
    };
  }

  getStarted = () => {
    if (this.props.showTour) {
      this.props.history.push("/");
      this.props.showTour(this.props);
    }
  };
  render() {
    return (
      <React.Fragment>
        <CenteredContent>
          <div className={styles.baseContainer}>
            <div className={styles.welTxt}>
              <div className={styles.welcomeTxt}>Welcome to&nbsp;</div>
              <div className={styles.startInMe}>The star in me,&nbsp;</div>
              <div className={styles.welcomeTxt}>{this.props.firstName}!</div>

              <div className={styles.stayConnected}>You’re almost done.</div>

              <div className={styles.valBlock}>
                <div className={styles.valText}>
                  Thank you for joining. We may reach out to you for additional
                  validation, if required.{" "}
                </div>
              </div>

              <div
                onClick={() => this.getStarted()}
                className={styles.getStartedButton}
              >
                LET’S GET STARTED!
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </CenteredContent>
      </React.Fragment>
    );
  }
}
