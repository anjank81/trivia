import React, { Component } from "react";
import BottomSlideModal from "../modules/component/BottomSlideModal";
import styles from "./UserPostModal.css";
import Image from "../../core/Image";
import FeedProfileHolder from "./FeedProfileHolder";
import profileImage from "../../images/Profile-Fill-grey.svg";
import video from "../../images/Video_line_blue.svg";
import Icon from "../../core/Icon.js";
import TagsInput from "../general/TagsInput";
import { IMAGE_URL_ROOT, USER_DETAILS } from "../../utils/constant";
import HorizantalIconWithHeader from "../../core/HorizantalIconWithHeader";
import ProfileImage from "../../core/ProfileImage";
import * as Cookie from "../../utils/Cookie";
import CenterSlideModel from "../modules/component/CenterSlideModel/CenterSlideModel";
import TextArea from "../../core/TextArea.js";
import { nameValidation } from "../../utils/validation";

const userDetails = Cookie.getCookie(USER_DETAILS);
const user = userDetails && JSON.parse(userDetails);

export default class UserShareModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.postTitle ? this.props.postTitle : null,
      desc: this.props.postDescription ? this.props.postDescription : null,

      tags: this.props.postLabels ? this.props.postLabels : [],

      //tags: [],

      showModal: this.props.showModal,
      closeModal: this.props.closeModal,
      value: ""
    };
  }
  handleDesc = val => {
    if (!nameValidation(val)) {
      this.setState({ desc: val });
    }
  };
  render() {
    const imageUrl =
      this.props &&
      this.props.feed_files[0] &&
      this.props.feed_files[0].file_url;
    return (
      <CenterSlideModel>
        {!this.state.showInputModal && (
          <React.Fragment>
            <div className={styles.createPostContainer}>
              <div className={styles.imageAndInputHolder}>
                <FeedProfileHolder
                  {...this.props.user}
                  first_name={user.firstName}
                  last_name={user.lastName}
                  createdAt={this.props.createdAt}
                />
              </div>
              <div className={styles.commentHolder}>
                <div className={styles.imageAndInputHolder}>
                  <FeedProfileHolder
            {...this.props.user}
            
            createdAt={this.props.createdAt}
          />

           </div>
           {imageUrl && (
            <div className={styles.feedImage}>
              <Image
                image={IMAGE_URL_ROOT + imageUrl}
                width="100%"
                height="100%"
                fit = "contain"
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
                      <div className={styles.more}>
                        +{this.props.tags.length - 2}
                      </div>
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
             <div className={styles.textArea}>
                  <TextArea
                    onChange={val => this.handleDesc(val)}
                    value={this.state.desc}
                    height={85}
                    border="none"
                  />
                </div>
           
           <div className={styles.shareButton}>
                          Post
                        </div>
          
                      
                      
          </div>
         
          </div>
        
              </div>
            </div>
          </React.Fragment>
        )}
      </CenterSlideModel>
    );
  }
}
