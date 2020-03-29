import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./SearchInput.css";
import Icon from "../../core/Icon";
import ControlInput from "../../core/ControlInput";
export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      errorMessage: null,
      showInput: false
    };
  }
  getValue = value => {
    this.setState({ value });
  };
  handleOnFocusInput(event) {
    if (this.props.onFocusInput) {
      this.props.onFocusInput(event);
    }
  }

  handleBlurInput() {
    if (this.props.onBlur) {
      this.props.onBlur();
    }
    this.onUpdate();
  }

  handleKeyUp(event) {
    if (event.key === "Go" || event.key === "Enter") {
      this.onUpdate();
    }
  }
  showInputBox = () => {
    this.setState({ showInput: true });
  };
  onUpdate() {}
  render() {
    return (
      <div className={styles.base}>
        <div className={styles.inputSearchHolder}>
          <div className={styles.buttonHolder}>
            <div className={styles.buttonCover}>
              <div
                className={styles.imageCover}
                onClick={() => {
                  this.showInputBox();
                }}
              >
                <Icon image={this.props.iconImage} size={20}></Icon>
              </div>
            </div>
          </div>
          <div
            className={styles.inputHolder}
            style={{ width: this.props.width }}
          >
            {" "}
            <ControlInput
              boxy={this.props.uiType === "default" ? true : false}
              hollow={this.props.uiType === "hollow" ? true : false}
              id={this.props.id}
              value={this.state.value}
              placeholder={this.props.placeholder}
              onChange={val => this.getValue(val)}
              textStyle={{ fontSize: 14 }}
              height={35}
              autoFocus={this.props.hasAutoFocus}
              rightChildSize={35}
              borderColor={this.props.borderColor}
              borderBottom={this.props.borderBottom}
              fontColor={this.props.fontColor}
              onFocus={event => {
                this.handleOnFocusInput(event);
              }}
              disabled={this.props.disabled}
              onBlur={() => {
                this.handleBlurInput();
              }}
              onKeyUp={event => {
                this.handleKeyUp(event);
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
SearchInput.propTypes = {
  placeholder: PropTypes.string
};

SearchInput.defaultProps = {
  placeholder: "search"
};
