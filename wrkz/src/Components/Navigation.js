import React, { Component } from "react";
import styles from "./Navigation.module.css";
class Navigation extends Component {
  render() {
    return (
      <div className={styles.base}>
        <div className={styles.container}>
          <div className={styles.textHolder}>Virtual office</div>
          <div className={styles.dropdownHolder}>
            <div className={styles.label}>Team</div>
            <div className={styles.selectContainer}>
              <select
                style={{
                  width: " 250px",
                  borderRadius: " 100%"
                }}
              >
                <option>Select one</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
