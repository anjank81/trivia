import React, { Component } from "react";
import styles from "./FeedCard.css";
import FeedCardDottedMenu from "./FeedCardDottedMenu/FeedCardDottedMenu";
import FeedProfileHolder from "./FeedProfileHolder";
import PollingResultWithImage from "./PollingResultWithImage/PollingResultWithImage";

export default class FeedPollingWithImage extends Component {
  state = {
    showFeedMenu: false
  };
  showFeedMenu = () => {
    this.setState({ showFeedMenu: !this.state.showFeedMenu });
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

        <div className={styles.container}>
          <div className={styles.tagContainer}>
            <div className={styles.tag}>Interaction Design</div>
            <div className={styles.tag}>Product strategy</div>
            <div className={styles.more}>+26</div>
          </div>
          <div className={styles.feedHeading}>
            Work Life Balance - Learn what makes a successful one
          </div>
          {/* <div className={styles.feedDescription}>
            Wouldn't it be amazing to access a unique profile builder to create
            a visual resume and showcase yourself using videos, pictures and
            stories?
          </div> */}
          <div className={styles.hashTagContainer}>
            <div className={styles.hashTag}>#productivity</div>
            <div className={styles.hashTag}>#productivity</div>
            <div className={styles.hashTag}>#productivity</div>
          </div>
          {/* <div className={styles.completeCourseImagesContainer}>
            <CompleteCourseImages
              updateImages={data => this.props && this.props.updateImages(data)}
            />
          </div> */}
          <div className={styles.pollingResultContainer}>
            <PollingResultWithImage></PollingResultWithImage>
          </div>
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
