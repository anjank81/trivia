import React, { Component } from "react";
import styles from "./FeedCardDottedMenu.css";
export const dottedMenuArr = [
  { name: "Bookmark", id: 1, modal: "" },
  { name: "Copy link", id: 2, modal: "" },
  { name: "Report this post", id: 3, modal: "post" }
];
export default class FeedCardDottedMenu extends Component {
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
    }
    if (modal == "share") {
      this.props.showUserShareModal({
        showModal: modal,
        page: this.props.page,
        postTitle: this.props.title,
        postLabels: this.props.labels,
        postDescription: this.props.decription,
        postImage: this.props.imageUrl
      });
    }
  };
  render() {
    return (
      <div className={styles.baseWrappper}>
        <ul>
          {dottedMenuArr.map(m => {
            return (
              <li key={m.id} onClick={() => this.openModal(m.modal)}>
                <div className={styles.icon}></div>
                {m.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
