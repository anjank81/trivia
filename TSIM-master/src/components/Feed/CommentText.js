import React, { Component } from "react";
import styles from "./CommentText.css";
import * as Cookie from "../../utils/Cookie";
import { USER_DETAILS } from "../../utils/constant";
export default class CommentText extends Component {
  state = {
    comments: ""
  };
  handleChange(event) {
    if (this.props.onChange) {
      this.props.onChange(event.target.value);
    }
  }
  handleKeyEnter = key => {
    if (key === "Enter") {
      if (this.state.comments !== "" || this.state.comments) {
        this.handlePostComment(this.props.feedId);
      }
    }
  };
  handlePostComment = async id => {
    let userDetails = Cookie.getCookie(USER_DETAILS);
    if (userDetails) {
      let user = JSON.parse(userDetails);
      let data = {
        userId: user.userId,
        feedId: this.props.feedId,
        comment: this.state.comments,
        parentCommentId: null
      };
      this.props.postFeedComment(data, this.props.feedId);
      this.props.getFeedComment(this.props.feedId);
      this.setState({
        comments: ""
      });
    }
  };
  render() {
    return (
      <div
        className={styles.inpicocont}
        style={{ height: this.props.height, width: this.props.width }}
      >
        <input
          className={styles.inp}
          type={this.props.type}
          placeholder={this.props.placeholder}
          name={this.props.name}
          style={{ height: this.props.theight, width: this.props.twidth }}
          value={this.props.value}
          onChange={event => {
            if (event.target.value !== " " || this.state.comments) {
              this.setState({ comments: event.target.value });
            }
          }}
          value={this.state.comments}
          onKeyUp={event => {
            this.handleKeyEnter(event.key);
          }}
        />
        <div className={styles.icon}>
          <img
            src={this.props.src}
            height={this.props.imageHeight}
            width={this.props.imageWidth}
          />
        </div>
      </div>
    );
  }
}
