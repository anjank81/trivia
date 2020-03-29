import React, { Component } from "react";
import styles from "./AddMoreIntrest.css";
import Button from "../general/Button";
const data = [
  { name: "ART" },
  { name: "BUSINESS" },
  { name: "PRODUCT DEVELOPMENT" },
  { name: "ARCHITECTURE" },
  { name: "PHILOSOPHY" }
];
export default class AddMoreIntrest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: []
    };
  }
  handleSelect = val => {
    let data = [];
    let dataExist =
      this.state.selected &&
      this.state.selected.length > 0 &&
      this.state.selected.find((categories, i) => {
        return categories.name === val.name;
      });
    if (dataExist) {
      var index = this.state.selected.findIndex(function(cat) {
        return cat.name == dataExist.name;
      });
      data.push(...this.state.selected);
      if (index == 0) {
        data.splice(index, 1);
        this.setState({ selected: data });
      } else {
        data.splice(index, index);
        this.setState({ selected: data });
      }
    } else {
      data.push(...this.state.selected);
      data.push(val);
      this.setState({ selected: data });
    }
  };

  render() {
    return (
      <div className={styles.base}>
        <div className={styles.heading}>Add more interests</div>
        <div className={styles.topicBase}>
          {this.props.userIntrestList &&
            this.props.userIntrestList.map((val, i) => {
              return (
                <div
                  className={styles.topicContainer}
                  // onClick={() => {
                  //   this.handleSelect(val);
                  // }}
                >
                  <div
                    className={
                      (this.state.selected &&
                        this.state.selected.length > 0 &&
                        this.state.selected.find(categories => {
                          return categories.name === val.name;
                        })) ||
                      val.status
                        ? styles.topicSelected
                        : styles.topic
                    }
                  >
                    {val.name}
                  </div>
                  <div
                    className={
                      (this.state.selected &&
                        this.state.selected.length > 0 &&
                        this.state.selected.find(categories => {
                          return categories.name === val.name;
                        })) ||
                      val.status
                        ? styles.checkIconVisible
                        : styles.checkIcon
                    }
                  ></div>
                </div>
              );
            })}
        </div>
        <div
          className={styles.buttonContainer}
          // onClick={() => this.props.showEventSelector({ visablemodal: true })}
        >
          <Button
            type="primary"
            backgroundColor={"#fff"}
            fontColor={"rgba(0,0,0,0.3)"}
            borderColor={"rgba(0,0,0,0.3)"}
            height={30}
            width={152}
            label="Discover more"
            borderRadius={5}
          />
        </div>
      </div>
    );
  }
}
