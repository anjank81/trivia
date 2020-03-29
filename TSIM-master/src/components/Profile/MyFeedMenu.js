import React, { Component } from "react";
import styles from "./FeedMenu.css";
import IconWithText from "./IconWithText";

class FeedMenu extends Component {
  handleEdit = () => {
    if (this.props.showProfileModal) this.props.showProfileModal();
  };

  handleShare = () => {};

  handleDownload = () => {};

  render() {
    return (
      <div className={styles.base}>
        {this.props.showFeedMenu && (
          <div className={styles.feedMenuHolder}>
            <div onClick={this.handleEdit}>
              {" "}
              <IconWithText
                icon={this.props.data[0].icon}
                text={this.props.data[0].text}
              />
            </div>
            <div
              onClick={this.handleShare}
              className={this.props.disabled === true ? null : styles.disabled}
            >
              {" "}
              <IconWithText
                icon={this.props.data[1].icon}
                text={this.props.data[1].text}
              />
            </div>
            <div
              onClick={this.handleDownload}
              className={this.props.disabled === true ? null : styles.disabled}
            >
              {" "}
              <IconWithText
                icon={this.props.data[2].icon}
                text={this.props.data[2].text}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default FeedMenu;
