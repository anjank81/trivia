import React, { Component } from "react";
import styles from "./FeedCard.css";
import ProfileImage from "./ProfileImage";
import profile from "../Images/f.jpg";
import Image from "../../core/Image";
import Button from "../general/Button";
import FeedCardDottedMenu from "./FeedCardDottedMenu/FeedCardDottedMenu";
import PollingResult from "./PollingResult";
import FeedProfileHolder from "./FeedProfileHolder";
import CommentText from "./CommentText";
import imageattach from "../../images/Image_add_blue.svg";
import CommentSection from "./CommentSection";
import { USER_DETAILS } from "../../utils/constant";
import dropdown from "../../images/dropdown-blue.svg";
import droupup from "../../images/Upvote-line.svg";
import share from "../../images/ForwardLine.svg";
import { BLOG_DETAILS_WITHOUT_ID } from "../../utils/constant";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from "react-share";
import * as Cookie from "../../utils/Cookie";
export default class FeedCardOverlay extends Component {
  state = {
    showFeedMenu: false,
    showCommentBox: false,
    showComments: false,
    comments: "",
    arrComment: [],
    id: 0,
    showComment: false,
    likes: this.props.userLiked ? this.props.userLiked : false
  };

  showFeedMenu = () => {
    this.setState({ showFeedMenu: !this.state.showFeedMenu });
  };
  handleClick = () => {
    this.setState({ showCommentBox: !this.state.showCommentBox });
  };
  handleChange(event) {
    this.setState({ comments: event });
  }
  handlePostComment = id => {
    let userDetails = Cookie.getCookie(USER_DETAILS);
    if (userDetails) {
      let user = JSON.parse(userDetails);
      let data = {
        userId: user.userId,
        blogId: this.props.blogId,
        comment: this.state.comments,
        parentCommentId: null
      };

      this.props.postBlogComment(data);
      this.setState({
        commentText: ""
      });
    }
  };
  handleClickComment = () => {
    this.setState({ showComments: true, id: this.state.id + 1 });
    let prev = this.state.arrComment;
    prev.push({ comments: this.state.comments, id: this.state.id });
    this.setState({ arrComment: prev, comments: "" });
  };
  handleLikes = async () => {
    if (this.props.postBlogLike) {
      await this.setState({ likes: !this.state.likes });
      let userDetails = Cookie.getCookie(USER_DETAILS);
      let user = JSON.parse(userDetails);
      let blogDetails = {
        blogId: this.props.blogId,
        userId: user.userId,
        isLiked: this.state.likes
      };

      this.props.postBlogLike(blogDetails);
    }
  };
  handleredirect = val => {
    if (this.props.history) {
      this.props.history.push(`${val}`);
    }
  };
  render() {
    return (
      <div className={styles.blogFeed}>
        <div className={styles.feedHeaderContainer}>
          <FeedProfileHolder
            user={this.props.author}
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
        <div className={styles.container}>
          <div className={styles.tagContainer}>
            {this.props.labels &&
              this.props.labels.map((val, i) => {
                if (i < 2) {
                  return <div className={styles.tag}>{val}</div>;
                }
              })}
            {this.props.labels && this.props.labels.length > 2 && (
              <div className={styles.more}>+{this.props.labels.length - 2}</div>
            )}
          </div>
          <div className={styles.feedHeading}>{this.props.title}</div>
          <div className={styles.feedDescription}>{this.props.description}</div>
          <div className={styles.hashTagContainer}>
            {this.props.hashTag &&
              this.props.hashTag.map(val => {
                return <div className={styles.hashTag}>#{val}</div>;
              })}
          </div>
          <div
            className={styles.feedImage}
            onClick={() => {
              this.handleredirect(
                `${BLOG_DETAILS_WITHOUT_ID}/${this.props.blogId}`
              );
            }}
          >
            <Image image={this.props.imageUrl} />
            <div className={styles.feedOverLay}>
              <div className={styles.overlayhead}>{this.props.title}</div>
              {this.props.blogUrl && (
                <div className={styles.overlayurl}>{this.props.blogUrl}</div>
              )}
            </div>
          </div>
        </div>
        {/* {this.state.showComment && (
          <CommentSection
            {...this.props}
            postBlogComment={data => {
              this.props.postBlogComment(data);
            }}
            getBlogComment={blogId => {
              this.props.getBlogComment(blogId);
            }}
          />
        )}
        {this.state.showComments && <div>Comments</div>} */}
        {/* <div className={styles.ans}>
          55 Answers
          <div className={styles.drop}>
            <img src={dropdown} height="12px" width="12px"></img>
          </div>
        </div> */}
        {/* <form action="">
          <div className={styles.commentholder}>
            <div className={styles.profilepicture}>
              <img
                className={styles.commentprofile}
                src={profile}
                height="35px"
                width="35px"
              />
            </div>
            <div className={styles.profilenameholder}>
              <div className={styles.profilename}>Devanshi Sheth</div>
              <div className={styles.degn}>Visual Designer | 8 Aug</div>
              <div className={styles.comment_text}>
                No plans? We're hosting yet another Design workshop with
                Roundhouse agency
              </div>
              {this.state.showComments &&
                this.state.arrComment.map(val => {
                  return (
                    <div style={{ display: "flex" }}>
                      <div className={styles.profilepicture}>
                        <img
                          className={styles.commentprofile}
                          src={profile}
                          height="35px"
                          width="35px"
                        />
                      </div>
                      <div className={styles.profilenameholder}>
                        <div className={styles.profilename}>Devanshi Sheth</div>
                        <div className={styles.degn}>
                          Visual Designer | 8 Aug
                        </div>
                        <div className={styles.comment_text}>
                          {val.comments}
                        </div>
                      </div>
                    </div>
                  );
                })}
              <div className={styles.droupcont}>
                <div className={styles.dropupcont}>
                  <div className={styles.dropup} onClick={this.handleClick}>
                    <img src={droupup} height="15px" width="15px"></img>
                  </div>
                  <div className={styles.drouptxt}>120</div>
                </div>

                <div className={styles.dropupcont}>
                  <div className={styles.droupup}>
                    <img src={share} height="15px" width="15px"></img>
                  </div>
                  <div className={styles.drouptxt}>12</div>
                </div>
              </div>
              {this.state.showCommentBox && (
                <div className={styles.commentBox}>
                  <div className={styles.cprofilepicture}>
                    <img
                      className={styles.commentinpprofile}
                      src={profile}
                      height="25px"
                      width="25px"
                    />
                  </div>
                  <input
                    className={styles.commentinp}
                    type="text"
                    value={this.state.comments}
                    onChange={event => this.handleChange(event.target.value)}
                  />
                  <div className={styles.combutcont}>
                    <button
                      type="reset"
                      className={styles.commentbut}
                      onClick={() => this.handleClickComment()}
                    >
                      Post
                    </button>{" "}
                  </div>
                </div>
              )}
            </div>
          </div>
        </form> */}
        <div className={styles.likesSection}>
          <div
            className={this.state.likes ? styles.likes : styles.unlikes}
            onClick={() => {
              this.handleLikes();
            }}
          >
            {this.props &&
            this.props.blogLikeDetails &&
            this.props.blogLikeDetails.data &&
            this.props.blogLikeDetails.data.totalLikes
              ? this.props.blogLikeDetails.data.totalLikes &&
                this.props.blogLikeDetails.data.totalLikes > 1
                ? this.props.blogLikeDetails.data.totalLikes + " Likes"
                : this.props.blogLikeDetails.data.totalLikes + " Like"
              : this.props.noOfLikes && this.props.noOfLikes > 1
              ? this.props.noOfLikes + " Likes"
              : this.props.noOfLikes + " Like"}{" "}
          </div>
          <div
            className={styles.comment}
            // onClick={() => {
            //   this.setState({ showComment: true });
            // }}
            onClick={() => {
              this.handleredirect(
                `${BLOG_DETAILS_WITHOUT_ID}/${this.props.blogId}`
              );
            }}
          >
            {this.props.noOfComments} comment
          </div>
          <div
            className={styles.share}
            onClick={() => {
              this.setState({ showShare: !this.state.showShare });
            }}
          >
            10 Share
          </div>
          {this.state.showShare && (
            <div className={styles.sharemenu}>
              <FacebookShareButton
                url={
                  window.location.href + "resourcedetailes/" + this.props.blogId
                }
                children={<FacebookIcon size={35} round={true} />}
                style={{
                  height: "40px",
                  outline: "none",
                  cursor: "pointer",
                  padding: "10px"
                }}
              />
              <TwitterShareButton
                url={
                  window.location.href + "resourcedetailes/" + this.props.blogId
                }
                children={<TwitterIcon size={35} round={true} />}
                style={{
                  height: "40px",
                  outline: "none",
                  cursor: "pointer",
                  padding: "10px"
                }}
              />
              <LinkedinShareButton
                url={
                  window.location.href + "resourcedetailes/" + this.props.blogId
                }
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
      </div>
    );
  }
}
