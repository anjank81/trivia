import React, { Component } from "react";
import styles from "./TagsInput.css";
import cross from "../modules/component/Images/canceltransperent.png";
import Icon from "../../core/Icon";

export default class TagsInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTag: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleRemoveTag = this.handleRemoveTag.bind(this);
  }

  handleChange(e) {
    this.setState({ newTag: e.target.value });
  }

  handleKeyDown(e) {
    if (e.keyCode === 13 && e.target.value !== "") {
      let newTag = this.state.newTag.trim();

      if (this.props.value.indexOf(newTag) === -1) {
        this.props.value.push(newTag);
        this.setState({ newTag: "" });
      }
      e.target.value = "";
    }
  }

  handleRemoveTag(e) {
    let tag = e.target.parentNode.textContent.trim();
    if (this.props.handleTagClick) {
      this.props.handleTagClick(tag);
    }
    let index = this.props.value.indexOf(tag);
    this.props.value.splice(index, 1);
    this.setState({ newTag: "" });
  }

  render() {
    return (
      <div className={styles.tags_input}>
        {/* {this.props.fixedTag && (
          <div className={styles.tag}>{this.props.fixedTag}</div>
        )} */}
        {this.props.value.map((tag, index) => (
          <div className={styles.tag}>
            {tag}
            <div className={styles.delete} onClick={this.handleRemoveTag} />
          </div>
        ))}
      </div>
    );
  }
}
