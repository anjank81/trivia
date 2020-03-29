import React from "react";
import PropTypes from "prop-types";
import show_password from "../../images/Back.svg";
import show_passwordDesktop from "../../images/Viewline.svg";
import Input from "../modules/component/Input";
import CircleButton from "../../core/CircleButton";
import Icon from "../../core/Icon";
import MediaQuery from "react-responsive";
import styles from "./PasswordInput.css";
import ControlInput from "../../core/ControlInput";
import Input2 from "../../core/Input2";

class ConformPasswordInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPasswordVisible: this.props.passwordVisible
    };
  }

  onPress = () => {
    this.setState({ isPasswordVisible: !this.state.isPasswordVisible });
  };
  handleKeyUp(event) {
    if (this.props.onKeyUp) {
      this.props.onKeyUp(event);
    }
  }
  render() {
    let scalerClass = styles.scaler;
    let type = this.props.type;

    if (this.state.isPasswordVisible) {
      scalerClass = styles.scalerHolder;
      type = "text";
    }
    return (
      <ControlInput
        {...this.props}
        type={type}
        onKeyUp={event => {
          this.handleKeyUp(event);
        }}
        border={"1px solid #d2d2d2"}
        width={this.props.width}
        height={this.props.height}
        value={this.props.confirmPassword}
        rightChild={
          <React.Fragment>
            <MediaQuery query="(max-device-width:1024px)">
              <div className={styles.passWordButton}>
                <CircleButton
                  color={"transparent"}
                  icon={<Icon image={show_passwordDesktop} size={20} />}
                  onClick={this.onPress}
                />
                <div className={scalerClass} />
              </div>
            </MediaQuery>
            <MediaQuery query="(min-device-width: 1025px)">
              <div className={styles.passWordButton}>
                <CircleButton
                  color={"transparent"}
                  icon={<Icon image={show_passwordDesktop} size={20} />}
                  onClick={this.onPress}
                />
                <div className={scalerClass} />
              </div>
            </MediaQuery>
          </React.Fragment>
        }
      />
    );
  }
}

ConformPasswordInput.propTypes = {
  passwordVisible: PropTypes.bool,
  type: PropTypes.string,
  confirmPassword: PropTypes.string,
  img: PropTypes.string
};

ConformPasswordInput.defaultProps = {
  passwordVisible: false,
  type: "Password",
  confirmPassword: "",
  img: show_password
};

export default ConformPasswordInput;
