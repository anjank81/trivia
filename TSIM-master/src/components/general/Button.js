import React from "react";
import CoreButton from "../../core/Button.js";
import PropTypes from "prop-types";

export default class Button extends React.Component {
  renderButton() {
    var { backgroundColor, borderRadius, textStyle, ...other } = this.props;
    switch (this.props.type) {
      case "primary":
        return (
          <CoreButton
            {...other}
            backgroundColor={this.props.backgroundColor}
            disabled={this.props.disabled}
            height={this.props.height}
            borderRadius={this.props.borderRadius}
            textStyle={{
              color: this.props.fontColor,
              fontSize: this.props.fontSize ? this.props.fontSize : 16,
              fontFamily: "semibold"
            }}
            disabled={this.props.disabled}
            fontSize={this.props.fontSize ? this.props.fontSize : "16"}
          />
        );

      case "secondary":
        return (
          <CoreButton
            {...other}
            backgroundColor={"transparent"}
            disabled={this.props.disabled}
            height={this.props.height}
            borderColor={this.props.borderColor}
            borderRadius={this.props.borderRadius}
            textStyle={{
              color: this.props.fontColor,
              fontSize: this.props.fontSize ? this.props.fontSize : 16,
              fontFamily: "semibold"
            }}
            disabled={this.props.disabled}
            fontSize={this.props.fontSize ? this.props.fontSize : "16"}
          />
        );

      default:
        return <CoreButton {...this.props} />;
    }
  }
  render() {
    return <React.Fragment>{this.renderButton()}</React.Fragment>;
  }
}

Button.propTypes = {
  type: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "hollow",
    "linearGradient"
  ])
};

Button.defaultProps = {
  disabled: false,
  height: 36,
  fontColor: "#212121",
  backgroundColor: "#4F439A",
  borderColor: "#4F439A",
  borderRadius: "4px",
  linearColor: {
    fromColor: "#ce5096",
    toColor: "#da6060"
  }
};
