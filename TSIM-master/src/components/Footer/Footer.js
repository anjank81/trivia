import React from "react";
import styles from "../Footer/Footer.css";
import facebook from "../../images/Facebook-black.svg";
import linkedin from "../../images/Linkedin-black.svg";
import twitter from "../../images/Twitter-black.svg";
import instagram from "../../images/Instagram.svg";
import youtube from "../../images/Youtube.svg";
import tsim_logo from "../../images/tsim_logo.png";
import mail from "../../images/Mail.svg";
import DesktopOnly from "../general/DesktopOnly";
import MobileOnly from "../general/MobileOnly";
import {
  ABOUT_US,
  EVENT,
  BLOG,
  PRIVACY,
  TERMS,
  EULA,
  HOME
} from "../../utils/constant.js";

export default class Footer extends React.Component {
  handleredirect = url => {
    if (this.props.history) {
      window.open(url, "_blank");
    }
  };
  handleBackToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  redirectHome = () => {
    this.props.history.push(HOME);
  };

  render() {
    return (
      <React.Fragment>
        <DesktopOnly>
          <div className={styles.rowContainer}>
            <div className={styles.column}>
              <div
                className={styles.buttons}
                onClick={() => this.handleredirect(ABOUT_US)}
              >
                ABOUT <div className={styles.arrow}></div>
              </div>
            </div>
            {/* <div className={styles.column}>
            <div className={styles.buttons}>
              COACHES <div className={styles.arrow}></div>
            </div>
          </div> */}
            <div className={styles.column}>
              <div
                className={styles.buttons}
                onClick={() => this.handleredirect(EVENT)}
              >
                EVENTS <div className={styles.arrow}></div>
              </div>
            </div>
            <div className={styles.column}>
              <div
                className={styles.buttons}
                onClick={() => this.handleredirect(BLOG)}
              >
                RESOURCES <div className={styles.arrow}></div>
              </div>
            </div>
            {/* <div className={styles.column}>
            <div className={styles.buttons}>
              PARTNERS <div className={styles.arrow}></div>
            </div>
          </div> */}
            <div className={styles.column}>
              <div
                className={styles.buttons}
                onClick={() => this.handleredirect(PRIVACY)}
              >
                PRIVACY POLICY <div className={styles.arrow}></div>
              </div>
            </div>
            <div className={styles.column}>
              <div
                className={styles.buttons}
                onClick={() => this.handleredirect(TERMS)}
              >
                TERMS AND CONDITIONS <div className={styles.arrow}></div>
              </div>
            </div>
            <div className={styles.column}>
              <div
                className={styles.buttons}
                onClick={() => this.handleredirect(EULA)}
              >
                EULA <div className={styles.arrow}></div>
              </div>
            </div>
          </div>

          <div className={styles.feedbackBlock}>
            {/* <img className={styles.feedbackImg} src={mail} alt="" /> */}
            {/* <div className={styles.feedbackTxt}>feedback@thestarinme.com</div> */}
          </div>

          <div className={styles.bottomContainer}>
            <div className={styles.socialBlock}>
              <a
                href="https://www.facebook.com/femmevista"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className={styles.socialImg} src={facebook} alt="" />
              </a>
              <a
                href="https://www.linkedin.com/company/femmevista"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className={styles.socialImg} src={linkedin} alt="" />
              </a>
              <a
                href="https://twitter.com/@thestarinme1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className={styles.socialImg} src={twitter} alt="" />
              </a>
              <a
                href="https://www.instagram.com/the.star.in.me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className={styles.socialImg} src={instagram} alt="" />
              </a>
              <a
                href="https://www.youtube.com/channel/UC_s2GyPvpcM_sRaFrwXj5-w/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className={styles.socialImg} src={youtube} alt="" />
              </a>
            </div>

            <div
              className={styles.touch}
              onClick={() => this.props.showGetInTouchModal()}
            >
              <p>GET IN TOUCH</p>
            </div>

            <div className={styles.copyrightBlock} onClick={this.redirectHome}>
              <img className={styles.appLogo} src={tsim_logo} alt="" />

              <p className={styles.copyrightTxt}>
                © Copyright 2019 thestarinme.com
                <br /> All Rights Reserved
              </p>
            </div>
          </div>
        </DesktopOnly>
        <MobileOnly>
          <div className={styles.footerContainer}>
            <img className={styles.appLogo} src={tsim_logo} alt="" />
            <div className={styles.copyrightTxt}>
              © Copyright 2019 thestarinme.com All Rights Reserved
            </div>
            <div className={styles.columnContainer}>
              <div className={styles.mobileColumn}>
                <div
                  className={styles.buttons}
                  onClick={() => this.handleredirect(ABOUT_US)}
                >
                  ABOUT <div className={styles.arrow}></div>
                </div>
              </div>
              {/* <div className={styles.mobileColumn}>
            <div className={styles.buttons}>
              COACHES <div className={styles.arrow}></div>
            </div>
          </div> */}
              <div className={styles.mobileColumn}>
                <div
                  className={styles.buttons}
                  onClick={() => this.handleredirect(EVENT)}
                >
                  EVENTS <div className={styles.arrow}></div>
                </div>
              </div>
              <div className={styles.mobileColumn}>
                <div
                  className={styles.buttons}
                  onClick={() => this.handleredirect(BLOG)}
                >
                  RESOURCES <div className={styles.arrow}></div>
                </div>
              </div>
              {/* <div className={styles.mobileColumn}>
            <div className={styles.buttons}>
              PARTNERS <div className={styles.arrow}></div>
            </div>
          </div> */}
              <div className={styles.mobileColumn}>
                <div
                  className={styles.buttons}
                  onClick={() => this.handleredirect(PRIVACY)}
                >
                  PRIVACY POLICY <div className={styles.arrow}></div>
                </div>
              </div>
              <div className={styles.mobileColumn}>
                <div
                  className={styles.buttons}
                  onClick={() => this.handleredirect(TERMS)}
                >
                  TERMS AND CONDITIONS <div className={styles.arrow}></div>
                </div>
              </div>
              <div className={styles.mobileColumn}>
                <div
                  className={styles.buttons}
                  onClick={() => this.handleredirect(EULA)}
                >
                  EULA <div className={styles.arrow}></div>
                </div>
              </div>
            </div>
            <div className={styles.feedbackBlock}>
              {/* <img className={styles.feedbackImg} src={mail} alt="" /> */}
              {/* <div className={styles.feedbackTxt}>feedback@thestarinme.com</div> */}
            </div>
            <div className={styles.bottomContainer}>
              <div className={styles.socialBlock}>
                <a
                  href="https://www.facebook.com/femmevista"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className={styles.socialImg} src={facebook} alt="" />
                </a>
                <a
                  href="https://www.linkedin.com/company/femmevista"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className={styles.socialImg} src={linkedin} alt="" />
                </a>
                <a
                  href="https://twitter.com/@thestarinme1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className={styles.socialImg} src={twitter} alt="" />
                </a>
                <a
                  href="https://www.instagram.com/the.star.in.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className={styles.socialImg} src={instagram} alt="" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UC_s2GyPvpcM_sRaFrwXj5-w/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className={styles.socialImg} src={youtube} alt="" />
                </a>
                </div>
              <div
              className={styles.touchm}
              onClick={() => this.props.showGetInTouchModal()}
              >
              <p>GET IN TOUCH</p>
            </div>
            </div>
          </div>
        </MobileOnly>
      </React.Fragment>
    );
  }
}
