import React from "react";
import styles from "./BottomSlideModal.css";
import PropTypes from "prop-types";
import DesktopOnly from "../../general/DesktopOnly";
import MobileOnly from "../../general/MobileOnly";
import RightSlideModal from "./RightSlideModal";
export default class BottomSlideModal extends React.Component {
  render() {
    return (
      <React.Fragment>
        <DesktopOnly>
          <div
            className={
              this.props.showCrossIcon === false
                ? styles.crossIconHide
                : styles.base
            }
          >
            <div className={styles.content}>{this.props.children}</div>
          </div>
        </DesktopOnly>
        <MobileOnly>
          <RightSlideModal>{this.props.children}</RightSlideModal>
        </MobileOnly>
      </React.Fragment>
    );
  }
}

BottomSlideModal.defaultProps = {
  showCrossIcon: false
};
