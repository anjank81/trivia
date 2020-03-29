import React from "react";
// import "./css/ModalPanel.css";
import ModalStyles from "./ModalPanelRight.css";
export default class ModalPanelRight extends React.Component {
  handleClick() {
    if (this.props.closeModal) {
      this.props.closeModal();
    }
  }
  render() {
    return (
      <div className={ModalStyles.base}>
        <div
          className={ModalStyles.background}
          onClick={() => this.handleClick()}
        />
        {this.props.children}
      </div>
    );
  }
}
