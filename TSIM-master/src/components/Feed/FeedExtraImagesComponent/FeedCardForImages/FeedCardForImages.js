import React, { Component } from "react";
import styles from "./FeedCardForImages.css";
import Image from "../../../../core/Image";
import FeedCardDottedMenu from "../../FeedCardDottedMenu/FeedCardDottedMenu";
import FeedProfileHolder from "../../FeedProfileHolder";

export default class FeedCard extends Component {
  state = {
    showFeedMenu: false,
    showCommentList: false
  };
  showFeedMenu = () => {
    this.setState({ showFeedMenu: !this.state.showFeedMenu });
  };

  onCommentHandler = () => {
    this.setState({ showCommentList: !this.state.showCommentList });
  };
  render() {
    return (
      <div className={styles.base}>
        <div className={styles.feedHeaderContainer}>
          <FeedProfileHolder />
          <div
            // onClick={this.showFeedMenu}
            className={styles.dottedRightMenu}
            style={{ opacity: 0.4 }}
          ></div>
          {this.state.showFeedMenu && (
            <div className={styles.feedMenuHolder}>
              <FeedCardDottedMenu></FeedCardDottedMenu>
            </div>
          )}
        </div>

        <div className={styles.feedImage}>
          <Image image={this.props.data.img} />
        </div>

        <div className={styles.likesSection}>
          <div className={styles.likes}>12k Likes</div>
          <div className={styles.comment}>21 comment</div>
          <div className={styles.share}>10 Share</div>
        </div>
      </div>
    );
  }
}
