import React, { Component } from "react";
import styles from "./ButtonWithIcon.css";
export default class ButtonWithIcon extends Component {
  render() {
    return (
      <div className={styles.upload_btn_wrapper}>
        <button className={styles.btn}>+ ADD MEDIA</button>
        <input
          type="file"
          name="myfile"
          onChange={event => {
            this.props.onChange(event);
          }}
          multiple
        />
      </div>
      //             <div className={styles.upload_bttn_wrapper} >
      //               <button className={styles.bttn}>
      //    + Add Media</button>
      //   <input type="file" name="myfile"></input>
      //             </div>
    );
  }
}
