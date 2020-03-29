import React from "react";
import styles from "./Confirm.css";

export default class Confirm extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.confirmWrapper}>
          <div className={styles.confirm}>CONFIRM</div>
        </div>
        <div className={styles.messageWrapper}>
          <div className={styles.message}>
            Are you sure you want to cancel the changes made to the password?
          </div>
          <br />
          <div className={styles.message}>
            Press <strong>‘Save Changes’</strong> to save the password, or
            cancel to discard.
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <div className={styles.cancel}>CANCEL</div>
          <div className={styles.save}>SAVE CHANGES</div>
        </div>
      </div>
    );
  }
}
