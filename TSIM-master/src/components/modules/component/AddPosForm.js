import React, { Component } from "react";
import BottomSlideModal from "./BottomSlideModal";
import InfoLine from "../../../images/Info-Line.svg";
import AddFile from "../../../images/Add.svg"
import PropTypes from "prop-types";
import Icon from "../../../core/Icon";
import Button from "../../../core/Button";
import styles from "./AddPosForm.css";
import ControlInput from "../../../core/ControlInput";

export default class AddPosForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }
  getValue = value => {
    this.setState({ value });
  };

  render() {
    return (
      <BottomSlideModal width="50%">
        <div className={styles.base}>
          <div className={styles.inpcont}>
            <div className={styles.mainText}>Add Position</div>

            <div className={styles.input}>
              <ControlInput
                value={this.state.name}
                placeholder={"Xelpmoc Design and Tech"}
                height={50}
                onChange={val => {
                  this.setState({ name: val });
                }}
              />
            </div>

            <div className={styles.input}>
              <ControlInput
                value={this.state.desig}
                placeholder={"Add designation/Job Position*"}
                height={50}
                onChange={val => {
                  this.setState({ desig: val });
                }}
              />
            </div>

            <div className={styles.input}>
              <ControlInput
                value={this.state.role}
                placeholder={"Design"}
                height={50}
                onChange={val => {
                  this.setState({ role: val });
                }}
              />
            </div>

            <div className={styles.input}>
              <ControlInput
                value={this.state.location}
                placeholder={"Location"}
                height={50}
                onChange={val => {
                  this.setState({ location: val });
                }}
              />
            </div>

            <div className={styles.mainDate} id="hiii">
              <div className={styles.startDate}>
                <ControlInput
                  type="date"
                  value={this.state.sdate}
                  placeholder={"Start Date*"}
                  height={50}
                  onChange={val => {
                    this.setState({ sdate: val });
                  }}
                />
                <div className={styles.calendarIcon}></div>
              </div>

                <div className={styles.endDate}>
                  <ControlInput
                    type="date"
                    value={this.state.edate}
                    placeholder={"End Date*"}
                    height={50}
                    onChange={val => {
                      this.setState({ edate: val });
                    }}
                  />
                  <div className={styles.calendarIcon}></div>
                </div>
            </div>

            <div className={styles.input}>
              <div className={styles.iconadj}>
                <ControlInput
                  value={this.state.description}
                  placeholder={"Description"}
                  height={50}
                  onChange={val => {
                    this.setState({ description: val });
                  }}
                />
                <div className={styles.icc}>
                  <Icon image={InfoLine} size={20} />
                </div>
              </div>
            </div>

            <div className={styles.addMedia}>
              <div className={styles.addMediaText}>Add Media</div>
              <div className={styles.addIcon}>
              <Icon image={AddFile} size={20} />
              </div>
            </div>
            <div className={styles.files}>Upto 3 Files</div>

            <Button
              width="600px"
              backgroundColor="#4F439A"
              color="white"
              label="UPDATE"
            ></Button>
          </div>
        </div>
      </BottomSlideModal>
    );
  }
}

AddPosForm.propTypes = {
  placeholder: PropTypes.string
};

AddPosForm.defaultProps = {
  placeholder: "search"
};
