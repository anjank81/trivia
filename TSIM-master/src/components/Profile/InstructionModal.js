import React, { Component } from "react";
// import BottomSlideModal from "./BottomSlideModal";
import styles from "./AddMilestones.css";
// import Button from "../../../core/Button";
import Button from "../../core/Button";
import NonCloseCenterModal from "../modules/component/CenterSlideModel/NonCloseCenterModal";

export default class AddSkills extends Component {
  handleSubmit = () => {
    this.props.push("/");
  };

  render() {
    return (
      <NonCloseCenterModal width="50%">
        <div
          className={styles.base}
          style={{ background: "#fff", padding: "100px" }}
        >
          <React.Fragment>
            <div className={styles.title} style={{ paddingBottom: "1em" }}>
              We will be launching visual profile build shortly. <br />
              Please come back in few days to explore more
            </div>

            <div
              className={styles.buttonContainer}
              style={{ marginTop: "25px" }}
            >
              <Button
                type="primary"
                color={"#fff"}
                backgroundColor={"#4F439A"}
                height={50}
                width={"100%"}
                label="OK"
                borderRadius={3}
                onClick={() => this.handleSubmit()}
                // disabled={!this.state.totalSkills.length}
              />
            </div>
          </React.Fragment>
        </div>
      </NonCloseCenterModal>
    );
  }
}
