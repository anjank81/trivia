import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Counter.css";
import add_fill from "../../images/Add_Fill.svg";
import add from "../../images/Add.svg";
import sub_fill from "../../images/Subtract-Fill-color.svg";
import sub from "../../images/Subtract.svg";
import Icon from "../../core/Icon";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value:
        this.props && this.props.value ? this.props.value : this.state.value
    };
  }
  decrement = () => {
    if (this.state.value > 0) {
      this.setState({ value: this.state.value - 1 });
    }
    this.props.setvalue(this.state.value - 1);
  };
  increment = () => {
    this.setState({ value: this.state.value + 1 });
    this.props.setvalue(this.state.value + 1);
  };
  render() {
    return (
      <div className={styles.counter}>
        <div className={styles.counterHolder}>
          {this.state.value > 1 ? (
            <Icon
              image={sub_fill}
              size={this.props.size}
              selectItem={() => this.decrement()}
            />
          ) : (
            <Icon image={sub} size={this.props.size} />
          )}
          <div
            className={styles.counterText}
            style={{
              fontSize: this.props.fontSize,
              color: this.props.fontColor
            }}
          >
            {this.state.value}
          </div>
          {this.state.value < this.props.max ? (
            <Icon
              image={add_fill}
              size={this.props.size}
              selectItem={() => this.increment()}
            />
          ) : (
            <Icon image={add} size={this.props.size} />
          )}
        </div>
      </div>
    );
  }
}
Counter.propTypes = {
  value: PropTypes.number,
  size: PropTypes.number
};
Counter.defaultProps = {
  fontSize: "14px",
  color: "#000000",
  size: 50,
  value: 1
};
