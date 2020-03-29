import React, { Component } from "react";
import styles from "./FeedMenu.css";
import IconWithText from "./IconWithText";

class FeedMenu extends Component {
  render() {
    return (
      <div className={styles.base}>
        {this.props.showFeedMenu && (
          <div className={styles.feedMenuHolder}>
            {this.props.data.map(val => {
              return <IconWithText icon={val.icon} text={val.text} />;
            })}
          </div>
        )}
      </div>
    );
  }
}

export default FeedMenu;
