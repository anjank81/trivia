import React from "react";
import styles from "../Settings/ManageMembers.css";
import linkedin from "../../images/prof1.jpeg";

const UserInfo = [
  { id: 1, name: "Aishverya Agarwal", imgUrl: linkedin, block: true },
  { id: 2, name: "Aishverya Agarwal", imgUrl: linkedin, block: true },
  { id: 3, name: "Aishverya Agarwal", imgUrl: linkedin, block: false },
  { id: 4, name: "Aishverya Agarwal", imgUrl: linkedin, block: true }
];
export default class ManageMembers extends React.Component {
  constructor() {
    super();
    this.state = {
      UserInfo: [...UserInfo],
      name: "",
      designation: "",
      location: "",
      summary: ""
    };
  }
  unblock = (info, index) => {
    UserInfo[index].block = !UserInfo[index].block;
    this.forceUpdate();
  };
  render() {
    return (
      <React.Fragment>
        <div className={styles.baseContainer}>
          <div className={styles.container}>
            <div className={styles.profileContainer}>
              <div className={styles.myProfile}>Manage Members</div>
              <div className={styles.lineSeparator}></div>

              <div className={styles.choose}>Blocked Members</div>

              {this.state.UserInfo.map((info, index) => (
                <div key={index} className={styles.commonContainer}>
                  <div>
                    <img src={info.imgUrl} className={styles.img} alt="" />

                    <div className={styles.comments}>{info.name}</div>
                  </div>

                  <div>
                    <div
                      onClick={() => this.unblock(info, index)}
                      className={styles.unblock}
                    >
                      {info.block ? "Unblock" : "Block"}
                    </div>
                  </div>
                </div>
              ))}

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
