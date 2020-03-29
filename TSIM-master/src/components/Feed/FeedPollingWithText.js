import React, { Component } from "react";
import FeedCardDottedMenu from "./FeedCardDottedMenu/FeedCardDottedMenu";
import FeedProfileHolder from "./FeedProfileHolder";
import PollingResult from "./PollingResult";
import CommentSection from "./CommentSection";
import styles from "./FeedPollingWithText.css";
export default class FeedPollingWithText extends Component {
  state = {
    showFeedMenu: false,
    showComment: false
  };
  showFeedMenu = () => {
    this.setState({ showFeedMenu: !this.state.showFeedMenu });
  };
  render() {
    return (
      <div className={styles.base}>
        <div className={styles.feedHeaderContainer}>
          <FeedProfileHolder {...this.props.user} />
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
        <div className={styles.container}>
          {/* <div className={styles.tagContainer}>
            {this.props.tags &&
              this.props.tags.length > 1 &&
              this.props.tags.map((val, i) => {
                if (i < 2) {
                  return <div className={styles.tag}>{val}</div>;
                }
              })}
            {this.props.tags &&
              this.props.tags.length > 0 &&
              this.props.tags.length > 2 && (
                <div className={styles.more}>+{this.props.tags.length - 2}</div>
              )}
          </div> */}
          <div className={styles.feedHeading}>{this.props.title}?</div>

          <div className={styles.pollingResultContainer}>
            <PollingResult {...this.props}></PollingResult>
          </div>
        </div>
        <CommentSection />
        <div className={styles.likesSection}>
          <div className={styles.likes}>
            {this.props.totalLikesCount && this.props.totalLikesCount > 1
              ? this.props.totalLikesCount + " Likes"
              : this.props.totalLikesCoun + " Like"}{" "}
          </div>
          <div
            className={styles.comment}
            onClick={() => {
              this.setState({ showComment: true });
            }}
          >
            {this.props.totalCommentsCount} comment
          </div>
          <div className={styles.share}>{this.props.totalShared} Share</div>
        </div>
      </div>
    );
  }
}
