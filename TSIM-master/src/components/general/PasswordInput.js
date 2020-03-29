import React from "react";
import PropTypes from "prop-types";
import show_password from "../../images/Back.svg";
import show_passwordDesktop from "../../images/Viewline.svg";
import viewIcon from "../../images/Viewline.svg";
import CircleButton from "../../core/CircleButton";
import Icon from "../../core/Icon";
import MediaQuery from "react-responsive";
import styles from "./PasswordInput.css";
import Input2 from "../../core/Input2";
import ControlInput from "../../core/ControlInput";

class PasswordInput extends React.Component {
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
        border={"1px solid #d2d2d2"}
        onKeyUp={event => {
          this.handleKeyUp(event);
        }}
        value={this.props.password}
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

PasswordInput.propTypes = {
  passwordVisible: PropTypes.bool,
  type: PropTypes.string,
  password: PropTypes.string,
  img: PropTypes.string
};

PasswordInput.defaultProps = {
  passwordVisible: false,
  type: "Password",
  password: "",
  img: show_password
};

export default PasswordInput;
