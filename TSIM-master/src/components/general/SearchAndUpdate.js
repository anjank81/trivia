import React from "react";
import PropTypes from "prop-types";
import styles from "./SearchAndUpdate.css";
import Icon from "../../core/Icon";
import ControlInput from "../../core/ControlInput";
export default class SearchAndUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pinCode: this.props.value,
      errorMessage: null
    };
  }
  getValue(pinCode) {
    const pin = pinCode.replace(/\D/g, "");
    if (pinCode.length <= 6) {
      this.setState({ pinCode: pin });
    }
    if (this.props.onChange) {
      this.props.onChange(pin);
    }
  }
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
  onUpdate() {}
  render() {
    return (
      <div className={styles.base}>
        <div className={styles.inputSearchHolder}>
          <div
            className={styles.inputHolder}
            style={{ width: this.props.width }}
          >
            {" "}
            <ControlInput
              boxy={this.props.uiType === "default" ? true : false}
              hollow={this.props.uiType === "hollow" ? true : false}
              id={this.props.id}
              value={this.state.pinCode}
              placeholder={this.props.placeholder}
              onChange={val => this.getValue(val)}
              textStyle={{ fontSize: 14 }}
              height={35}
              autoFocus={this.props.hasAutoFocus}
              rightChildSize={35}
              borderColor={this.props.borderColor}
              borderBottom={this.props.borderBottom}
              onFocus={event => {
                this.handleOnFocusInput(event);
              }}
              onBlur={() => {
                this.handleBlurInput();
              }}
              onKeyUp={event => {
                this.handleKeyUp(event);
              }}
            />
          </div>
          <div className={styles.buttonHolder}>
            <div className={styles.buttonCover}>
              {this.props.iconImage && (
                <div className={styles.imageCover}>
                  <Icon image={this.props.iconImage} size={"20px"}></Icon>
                </div>
              )}
              {this.props.iconText && (
                <div className={styles.buttonCover}>{this.props.iconText}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
SearchAndUpdate.propTypes = {
  placeholder: PropTypes.string
};

SearchAndUpdate.defaultProps = {
  placeholder: "search"
};
