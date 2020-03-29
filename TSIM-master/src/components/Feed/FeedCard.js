import React, { Component } from "react";
import styles from "./FeedCard.css";
import ProfileImage from "./ProfileImage";
import profile from "../Images/f.jpg";
import Image from "../../core/Image";
import Button from "../general/Button";
import FeedCardDottedMenu from "./FeedCardDottedMenu/FeedCardDottedMenu";
import FeedProfileHolder from "./FeedProfileHolder";
import CompleteCourseImages from "./CompleteCourseImages/CompleteCourseImages";
import PollingResultWithImage from "./PollingResultWithImage/PollingResultWithImage";
import PollingResult from "./PollingResult";
import { IMAGE_URL_ROOT, USER_DETAILS } from "../../utils/constant";
import CommentSection from "./CommentSection";
import * as Cookie from "../../utils/Cookie";
export default class FeedCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.isLiked ? this.props.isLiked : false,
      showFeedMenu: false,
      showComment: false
    };
  }

  showFeedMenu = () => {
    this.setState({ showFeedMenu: !this.state.showFeedMenu });
  };
  handleLikes = async () => {
    if (this.props.postFeedLike) {
      await this.setState({ likes: !this.state.likes });
      let userDetails = Cookie.getCookie(USER_DETAILS);
      let user = JSON.parse(userDetails);
      let postDetails = {
        feedId: this.props.feed_id,
        userId: user.userId,
        isLiked: this.state.likes
      };

      this.props.postFeedLike(postDetails);
    }
  };
  openModal = modal => {
    if (modal == "post") {
      this.props.showUserPostModal({
        showModal: modal,
        page: this.props.page,
        postTitle: this.props.title,
        postLabels: this.props.labels,
        postDescription: this.props.decription,
        postImage: this.props.imageUrl
      });
    }else if(modal=="share"){
      this.props.showUserShareModal({
        showModal: modal,
        page: this.props.page,
        postTitle: this.props.title,
        postLabels: this.props.labels,
        postDescription: this.props.decription,
        postImage: this.props.imageUrl
      })
    }
  };
  render() {
    const imageUrl =
      this.props &&
      this.props.feed_files[0] &&
      this.props.feed_files[0].file_url;
    return (
      <div className={styles.blogFeed}>
        <div className={styles.feedHeaderContainer}>
          <FeedProfileHolder
            {...this.props.user}
            createdAt={this.props.createdAt}
          />
          <div
            // onClick={this.showFeedMenu}
            className={styles.dottedRightMenu}
            style={{ opacity: 0.4 }}
          ></div>
          {this.state.showFeedMenu && (
            <div className={styles.feedMenuHolder}>
              <FeedCardDottedMenu
                {...this.props}
                decription={this.props.content}
              ></FeedCardDottedMenu>
            </div>
          )}
        </div>

        {this.props &&
          this.props.feed_files[0] &&
          this.props.feed_files[0].file_url && (
            <div className={styles.feedImage}>
              <Image
                image={IMAGE_URL_ROOT + imageUrl}
                width="100%"
                height="100%"
              />
            </div>
          )}
        <div className={styles.container}>
          <div className={styles.tagContainer}>
            {this.props.tags &&
              this.props.tags.map((val, i) => {
                if (i < 2) {
                  return <div className={styles.tag}>{val}</div>;
                }
              })}

            {this.props.tags && this.props.tags.length > 2 && (
              <div className={styles.more}>+{this.props.tags.length - 2}</div>
            )}
          </div>
          <div className={styles.feedHeading}>
            {this.props.title &&
              this.props.title.toUpperCase() != "NULL" &&
              this.props.title}
          </div>

          <div className={styles.hashTagContainer}>
            {this.props.hashTag &&
              this.props.hashTag.map(val => {
                return <div className={styles.hashTag}>#{val}</div>;
              })}
          </div>
          <div className={styles.feedDescription}>
            {this.props.content &&
              this.props.content.toUpperCase() != "NULL" &&
              this.props.content}
            {this.props.url && (
              <span className={styles.readMore}>
                <a href={this.props.url}>Read More</a>
              </span>
            )}
          </div>
          {/* <div className={styles.completeCourseImagesContainer}>
            <CompleteCourseImages
              updateImages={data => this.props && this.props.updateImages(data)}
            />
          </div>
          <div className={styles.pollingResultContainer}>
            <PollingResultWithImage></PollingResultWithImage>
          </div>
          <div className={styles.pollingResultContainer}>
            <PollingResult></PollingResult>
          </div> */}
          {/* <div className={styles.eventDetailsContainer}>
            <div className={styles.time}>3 pm - 5 pm</div>
            <div className={styles.eventDate}>17th August 2019</div>
            <div className={styles.location}>Reva University, Bengaluru</div>
            <div className={styles.cost}>INR 1450</div>
          </div> */}
          {/* <div className={styles.buttonContainer}>
            <div className={styles.buttonHolder}>
              <Button
                type="primary"
                backgroundColor={"#4F439A"}
                fontColor={"#ffffff"}
                borderColor={"#4F439A"}
                height={40}
                width={163}
                label="REGISTER"
                borderRadius={5}
              />
            </div>
            <div className={styles.buttonHolder}></div>
            <Button
              type="primary"
              backgroundColor={"#fff"}
              fontColor={"#4F439A"}
              borderColor={"#fff"}
              height={40}
              width={167}
              label="I AM INTERESTED"
              borderRadius={5}
            />
          </div> */}
          {/* <div className={styles.registrationdetailsContainer}>
            <img src={profile} className={styles.dot} alt={"profile"} />
            <img src={profile} className={styles.dot} alt={"profile"} />
            <img src={profile} className={styles.dot} alt={"profile"} />
            <span className={styles.more}>+26</span>
            <div className={styles.intrested}>Intrested & 13 Registered</div>
          </div> */}

          {/* <div className={styles.pollingConatiner}>

            <PollingResult percentage={30} option="A"
              pollQuestion="Wouldn't it be amazing to access a unique profile builder" />
          </div> */}
        </div>
        {this.state.showComment && (
          <CommentSection
            {...this.props}
            postFeedComment={(data, id) => {
              this.props.postFeedComment(data, id);
            }}
            getFeedComment={feedId => {
              this.props.getFeedComment(feedId);
            }}
          />
        )}
        <div className={styles.likesSection}>
          {this.props &&
          this.props.postLikeDetails &&
          this.props.postLikeDetails.data &&
          this.props.postLikeDetails.data.totalLikes === 0 ? (
            <div
              className={this.state.likes ? styles.likes : styles.unlikes}
              onClick={() => {
                this.handleLikes();
              }}
            >
              {this.props &&
                this.props.postLikeDetails &&
                this.props.postLikeDetails.data &&
                this.props.postLikeDetails.data.totalLikes &&
                this.props.postLikeDetails.data.totalLikes }{ " Like"}
            </div>
          ) : (
            <div
              className={this.state.likes ? styles.likes : styles.unlikes}
              onClick={() => {
                this.handleLikes();
              }}
            >
              {this.props &&
              this.props.postLikeDetails &&
              this.props.postLikeDetails.data &&
              this.props.postLikeDetails.data.totalLikes
                ? this.props.postLikeDetails.data.totalLikes &&
                  this.props.postLikeDetails.data.totalLikes > 1
                  ? this.props.postLikeDetails.data.totalLikes + " Likes"
                  : this.props.postLikeDetails.data.totalLikes + " Like"
                : this.props.totalLikesCount && this.props.totalLikesCount > 1
                ? this.props.totalLikesCount + " Likes"
                : this.props.totalLikesCount + " Like"}{" "}
            </div>
          )}
          <div
            className={styles.comment}
            onClick={() => {
              this.props.getFeedComment(this.props.feed_id);
              this.setState({ showComment: true });
            }}
          >
            {this.props.totalCommentsCount} comment
          </div>
          <div
            className={styles.share}
            onClick={() =>
              this.props.showUserShareModal(this.props)
            }
          >
            {this.props.totalShared} Share
          </div>
        </div>
      </div>
    );
  }
}
