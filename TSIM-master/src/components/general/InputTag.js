import React, { Component } from "react";
import styles from "./InputTag.css";
const Tag = props => <span className={styles.tag} {...props} />;
const Delete = props => <button className={styles.delete} {...props} />;
const Help = props => <span className={styles.help} {...props} />;
export default class InputTag extends Component {
  constructor() {
    super();
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
    let index = this.props.value.indexOf(tag);
    this.props.value.splice(index, 1);
    this.setState({ newTag: "" });
  }

  render() {
    return (
      <div>
        <div className={styles.tags_input}>
          {this.props.value &&
            this.props.value.map((tag, index) => (
              <Tag>
                {tag}
                <Delete onClick={this.handleRemoveTag} />
              </Tag>
            ))}
          <input
            type={styles.text}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
          />
        </div>
        <Help>hit 'Enter' to add new tags</Help>
      </div>
    );
  }
}

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       tags: ["javascript", "react"]
//     };
//   }

//   handleTagsChange(tags) {
//     this.setState({ tags: tags });
//   }

// }
