import React, { Component } from "react";
import styles from "./BoxCheck.css";
export default class BoxCheck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: this.props.selected ? true : false
    };
  }
  handleClick = () => {
    this.setState({ selected: !this.state.selected });
    if (this.props.onClick) {
      this.props.onClick();
    }
  };
  render() {
    return (
      <div
        className={this.state.selected ? styles.checkFill : styles.check}
        style={{
          borderColor: this.props.borderColor,
          borderRadius: this.props.borderRadius,
          backgroundColor: this.state.selected && this.props.fillColor
        }}
        onClick={() => this.handleClick()}
      ></div>
    );
  }
}
