import React, { Component } from "react";
import styles from "./FeedCard.css";
import profile from "../../images/Profile-Fill-grey.svg";
import imageattach from "../../images/Image_add_blue.svg";
import CommentText from "./CommentText";
import droupup from "../../images/Upvote-line.svg";
import share from "../../images/ForwardLine.svg";

import FromProgress from "../../core/ProgressBar";
export default class CommentSection extends Component {
  state = {
    comments: "",
    arrComment: [],
    id: 0,
    showComments: false,
    showCommentBox: false,
    arrRep: [],
    reply: "",
    repid: 0
  };
  componentDidMount() {
    this.props.getFeedComment(this.props.feed_id,[]);
  }
  handleChange(event) {
    this.setState({ reply: event });
  }
  handleClick = () => {
    this.setState({ showCommentBox: !this.state.showCommentBox });
  };
  handleClickComment = () => {
    this.setState({ showComments: true, id: this.state.id + 1 });
    let prev = this.state.arrRep;
    prev.push({
      reply: this.state.reply,
      id: this.state.id,
      repid: this.state.arrComment.id
    });
    this.setState({ arrRep: prev, reply: "" });
  };
  render() {
    const comments =
      this.props && this.props.comments
        ? this.props.comments[this.props.feed_id]
        : [];

    return (
      <div>
        <div className={styles.commentcont}>
          <div className={styles.commsec}>
            <div className={styles.profilepicture}>
              <img
                className={styles.commentprofile}
                src={profile}
                height="35px"
                width="35px"
              />
            </div>
            <CommentText
              src={imageattach}
              imageHeight="16px"
              imageWidth="16px"
              placeholder="Type your Comment"
              feedId={this.props.feed_id}
              postFeedComment={(data, id) => {
                this.props.postFeedComment(data, id);
              }}
              getFeedComment={feedId => {
                this.props.getFeedComment(feedId);
              }}

              // onKeyDown={event => {
              //   this.setState({ key: event.target.value });

              //   if (event.which == 13) {
              //     // this.setState({ showComments: true, id: this.state.id + 1 });
              //     // let prev = this.state.arrComment;
              //     // prev.push({
              //     //   comments: this.state.comments,
              //     //   id: this.state.id
              //     // });
              //     // this.setState({ arrComment: prev, comments: "" });
              //   }
              // }}
            />
          </div>
        </div>
        {comments &&
          !comments.message &&
          comments.map(val => {
            return (
              <div>
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
                    <div className={styles.profilename}>{val.user}</div>
                    <div className={styles.degn}>{val.createdAt}</div>
                    <div className={styles.comment_text}>{val.comment}</div>

                    {/* <div className={styles.droupcont}>
                      <div className={styles.dropupcont}>
                        <div
                          className={styles.dropup}
                          onClick={this.handleClick}
                        >
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
                          value={this.state.reply}
                          onChange={event =>
                            this.handleChange(event.target.value)
                          }
                        />
                        <div className={styles.combutcont}>
                          <button
                            className={styles.commentbut}
                            onClick={() => this.handleClickComment()}
                          >
                            Post
                          </button>{" "}
                        </div>
                      </div>
                    )} */}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}
