import React, { Component } from "react";
import styles from "./Card.css";
import defaultImage from "../Images/b.jpg";
import facebook from "../../images/Facebook-black.svg";
import linkedin from "../../images/Linkedin-black.svg";
import twitter from "../../images/Twitter-black.svg";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from "react-share";
export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.userLiked ? this.props.userLiked : false,
      bookmarks: this.props.bookmarks ? true : false,
      showAllTags: false,
      showShare: false
    };
  }
  handleredirect = () => {
    if (this.props.handleredirect && this.props.redirectUrl) {
      this.props.handleredirect(this.props.redirectUrl);
    }
  };
  handleLikes = async () => {
    if (this.props.isUserLogedIn && this.props.postBlogLike) {
      await this.setState({ likes: !this.state.likes });
      let user = JSON.parse(this.props.userDetails);
      let blogDetails = {
        blogId: this.props.blogId,
        userId: user.userId,
        isLiked: this.state.likes
      };

      this.props.postBlogLike(blogDetails);
    }
  };
  handleBookmarks = async () => {
    if (this.props.isUserLogedIn) {
      await this.setState({ bookmarks: !this.state.bookmarks });
      let user = JSON.parse(this.props.userDetails);
      let blogDetails = {
        blogId: this.props.blogId,
        userId: user.userId
      };

      this.props.postBlogBookmark(blogDetails);
    }
  };
  render() {
    return (
      <div
        className={
          window.location.pathname === "/"
            ? styles.homeCardBase
            : styles.cardBase
        }
      >
        <div
          className={styles.cardContainer}
          onClick={() => this.handleredirect()}
        >
          <div className={styles.profileHolder}>
            <img
              className={
                window.location.pathname === "/"
                  ? styles.homeStoryImage
                  : styles.storiesImage
              }
              src={this.props.imageUrl ? this.props.imageUrl : defaultImage}
              alt="no i"
            ></img>
            <div className={styles.overlay}>
              <div className={styles.tagBase}>
                <div className={styles.tagContainer}>
                  {/* {this.props &&
                    this.props.tags &&
                    this.props.tags.map(tag => {
                      return <div className={styles.tags}>{tag}</div>;
                    })} */}
                  {this.props &&
                    this.props.tags &&
                    this.props.tags.map((label, i) => {
                      if (!this.state.showAllTags) {
                        if (i < 2) {
                          return <div className={styles.tags}>{label}</div>;
                        }
                      } else {
                        return <div className={styles.tags}>{label}</div>;
                      }
                    })}
                  {!this.state.showAllTags &&
                    this.props &&
                    this.props.tags &&
                    this.props.tags.length &&
                    this.props.tags.length > 2 && (
                      <div
                        className={styles.tags}
                        onClick={() =>
                          this.setState({
                            showAllTags: !this.state.showAllTags
                          })
                        }
                      >
                        +{this.props.tags.length - 2}
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.contentContainer}>
            <div
              className={
                window.location.pathname === "/"
                  ? styles.homeContentHeading
                  : styles.contentHeading
              }
            >
              {this.props.heading}
            </div>
            <div className={styles.username}>
              {this.props.name} <span className={styles.or}> | </span>{" "}
              {this.props.time}
            </div>
          </div>
        </div>
        {this.props.isUserLogedIn && (
          <div className={styles.actionBarConatiner}>
            <div className={styles.actionsHolder}>
              <div
                className={this.state.likes ? styles.likes : styles.unlikes}
                onClick={() => {
                  this.handleLikes();
                }}
              >
                {this.props.blogLikeDetails &&
                this.props.blogLikeDetails.blogId &&
                this.props.blogLikeDetails.blogId === this.props.blogId
                  ? this.props.blogLikeDetails.totalLikes
                  : this.props.likes}
              </div>
              <div
                className={styles.comment}
                onClick={() => this.handleredirect()}
              >
                {this.props.comments}
              </div>
              <div
                className={styles.share}
                onClick={() => {
                  this.setState({ showShare: !this.state.showShare });
                }}
              >
                {this.props.shared}
              </div>
              {this.state.showShare && (
                <div className={styles.sharemenu}>
                  <FacebookShareButton
                    url={window.location.host}
                    children={<FacebookIcon size={35} round={true} />}
                    style={{
                      height: "40px",
                      outline: "none",
                      cursor: "pointer",
                      padding: "10px"
                    }}
                  />
                  <TwitterShareButton
                    url={window.location.href}
                    children={<TwitterIcon size={35} round={true} />}
                    style={{
                      height: "40px",
                      outline: "none",
                      cursor: "pointer",
                      padding: "10px"
                    }}
                  />
                  <LinkedinShareButton
                    url={window.location.href}
                    children={<LinkedinIcon size={35} round={true} />}
                    style={{
                      height: "40px",
                      outline: "none",
                      cursor: "pointer",
                      padding: "10px"
                    }}
                  />
                </div>
              )}
            </div>
            <div
              className={
                this.state.bookmarks
                  ? styles.wishlistActive
                  : styles.wishlistInActive
              }
              onClick={this.handleBookmarks}
            ></div>
          </div>
        )}
      </div>
    );
  }
}
