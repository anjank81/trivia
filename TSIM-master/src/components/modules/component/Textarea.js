import React from "react";
import styles from "./ProfileModal.css";
export default class TextArea extends React.Component {
  render() {
    return (
      <div>
        <textarea
          className={styles.txtarea}
          placeholder={this.props.placeholder}
          value={this.props.value}
        ></textarea>
      </div>
    );
  }
}
