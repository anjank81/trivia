import React, { Component } from "react";
import styles from "./CompleteProfileAlert.css";
import Image from "../../core/Image";
import icon from "../../images/Education-line-blue.svg";
import Button from "../general/Button";
export default class CompleteProfileAlert extends Component {
  render() {
    return (
      <div className={styles.base}>
        <div className={styles.container}>
          <div className={styles.heading}>Complete your profile</div>
          <div className={styles.subHeading}>1/8 completed</div>
          <div className={styles.cardContainer}>
            {[1, 2, 3, 4, 5].map(val => (
              <div className={styles.card}>
                <div className={styles.cardDetails}>
                  <div className={styles.holder}>
                    <div className={styles.IconHolder}>
                      <Image image={icon} />
                    </div>
                    <div className={styles.cardHeading}>
                      Add your work experience
                    </div>
                    <div className={styles.cardDescription}>
                      This will help you to connect with relavant users on the
                      platform
                    </div>

                    <div className={styles.buttonContainer}>
                      <Button
                        type="primary"
                        backgroundColor={"#4F439A"}
                        fontColor={"#ffffff"}
                        borderColor={"#4F439A"}
                        height={40}
                        width={215}
                        label="ADD WORK EXPERIENCE"
                        borderRadius={5}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
