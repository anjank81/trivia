import React, { Component } from "react";
import BottomSlideModal from "../modules/component/BottomSlideModal";
import styles from "./UserPostModal.css";
import Image from "../../core/Image";
import TextArea from "../../core/TextArea.js";
import ControlInput from "../../core/ControlInput";
import profileImage from "../../images/Profile-Fill-grey.svg";
import image_blue from "../../images/Image_add_blue.svg";
import location from "../../images/Location_Line_blue.svg";
import back from "../../images/Back.svg";
import pdf from "../../images/Pdf_add_blue.svg";
import tag from "../../images/tag_blue.svg";
import video from "../../images/Video_line_blue.svg";
import Icon from "../../core/Icon.js";
import TagsInput from "../general/TagsInput";
import HorizantalIconWithHeader from "../../core/HorizantalIconWithHeader";
import ProfileImage from "../../core/ProfileImage";
import BoxCheck from "../../core/BoxCheck";
import PollInputBox from "./PollInputBox";
import UploadIcon from "../../images/Add-Fill-color.svg";
import CenterSlideModel from "../modules/component/CenterSlideModel/CenterSlideModel";
import InputTag from "../general/InputTag";
import { nameValidation } from "../../utils/validation";
export default class UserPostModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.postTitle ? this.props.postTitle : null,
      desc: this.props.postDescription ? this.props.postDescription : null,

      tags: this.props.postLabels ? this.props.postLabels : [],

      //tags: [],

      showModal: this.props.showModal,
      closeModal: this.props.closeModal,
      value: "",
      pollText: "",
      showDropDown: false,
      image: this.props.postImage ? [this.props.postImage] : [],
      showImageModal: false,
      isAnonymous: false,
      visibleTo: 1,
      showTag: false,
      files: [],
      allowPost: false,
      labelId: [],
      labels: [],
      labelsList: this.props.labelsList
    };
  }
  showUploadImage = () => {
    this.setState({ showImageModal: true });
  };
  componentDidMount = () => {
    this.props.getLabels();
  };
  handleChange(event) {
    if (event.target.files[0]) {
      let panImage = [...this.state.image];
      panImage.push({ file: URL.createObjectURL(event.target.files[0]) });
      this.setState({
        image: panImage
      });
      this.setState({
        files: event.target.files[0]
      });
    }
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.feedDetails) {
      this.props.closeModal();
      this.props.getFeed(1);
    }
  };
  handleTagClick(tag, id) {
    let newTag = this.state.tags;
    let ids = this.state.labelId;
    let tagUpperCase = tag.toUpperCase();
    let index = newTag && newTag.length > 0 ? newTag.indexOf(tagUpperCase) : -1;
    if (index >= 0) {
      if (index == 0) {
        newTag.splice(index, 1);
        ids.splice(index, 1);
      } else {
        newTag.splice(index, 1);
        ids.splice(index, 1);
      }
      this.setState({count:this.state.count++})
      this.setState({ tags: newTag, labelId: ids });
    } else {
      if(this.state.tags.length<5)
     { newTag.push(tag.toUpperCase());
      ids.push(id);
      this.setState({ tags: newTag, labelId: ids });}
    
    }
  }
  handleTagsChange(tags) {
    this.setState({ tags: tags });
  }
  handlePostfeed = () => {
    if (this.state.title || this.state.desc || this.state.files.length > 0) {
      let formData = new FormData();
      formData.append("postFiles", this.state.files);
      formData.append("type", this.state.showModal);
      formData.append("title", this.state.title);
      formData.append("content", this.state.desc);
      formData.append("fileType", "Image");
      // formData.append("location", );
      formData.append("tags", JSON.stringify(this.state.labels));
      formData.append("labels", JSON.stringify(this.state.labelId));
      formData.append("visibleTo", this.state.visibleTo);
      formData.append("isAnonymous", this.state.isAnonymous);
      // let feedDetails = {
      //   type: this.state.showModal,
      //   title: this.state.title,
      //   content: this.state.desc,
      //   fileType: null, //"Image/Document/Video"
      //   location: "Chennai, India",
      //   tags: this.state.tags,
      //   labels: [1, 2, 3, 4],
      //   visibleTo: this.state.visibleTo,
      //   isAnonymous: this.state.isAnonymous
      // };
      this.props.postFeed(formData);
      //this.props.closeModal();
    } else {
      this.props.displayToast("Post content cannot be empty");
    }
  };
  handleInputChange = val => {
    this.setState({ value: val });
    if (val != undefined || val != null) {
      let newLabelList =
        this.props.labelsList &&
        this.props.labelsList.filter(data => {
          return data.name.toUpperCase().startsWith(val.toUpperCase());
        });
      this.setState({ labelsList: newLabelList });
    } else {
      this.setState({ labelsList: this.props.labelsList });
    }
  };
  handleTitle = val => {
    if (!nameValidation(val)) {
      this.setState({ title: val });
    }
  };
  handleDesc = val => {
    if (!nameValidation(val)) {
      this.setState({ desc: val });
    }
  };
  render() {
    return (
      <CenterSlideModel>
        {this.state.showInputModal && (
          <div className={styles.inputContianer}>
            <div
              className={styles.topNav}
              onClick={() => this.setState({ showInputModal: false })}
            >
              <HorizantalIconWithHeader
                icon={back}
                size={16}
                text={this.state.showTag ? "Add Labels" : "Tag people"}
                fontSize={"14px"}
                fontColor={"#333"}
              ></HorizantalIconWithHeader>
              <div className={styles.done}>Done</div>
            </div>

            <div className={styles.tagInputHolder}>
              <ControlInput
                value={this.state.value}
                onChange={val => this.handleInputChange(val)}
                placeholder={
                  this.state.showTag
                    ? "Type relevant labels (Add upto 5 labels)"
                    : "Search for connections"
                }
              ></ControlInput>
              <TagsInput value={this.state.tags} />
            </div>

            {this.state.labelsList &&
              this.state.labelsList.map(val => {
                return (
                  <div className={styles.dataHolder}>
                    <div className={styles.imageWithTextHolder}>
                      <div
                        className={styles.profilText}
                        onClick={() => this.handleTagClick(val.name, val.id)}
                      >
                        {val.name}
                      </div>
                    </div>
                    {/* <BoxCheck onClick={() => this.handleTagClick(val.name)} /> */}
                  </div>
                );
              })}
          </div>
        )}
        {!this.state.showInputModal && (
          <React.Fragment>
            <div className={styles.createPostContainer}>
              <div className={styles.createPostNav}>
                <div
                  className={
                    this.state.showModal == "Post"
                      ? styles.writePostMessageBox
                      : ""
                  }
                >
                  <div
                    className={
                      this.state.showModal == "Post"
                        ? styles.writePostSelected
                        : styles.writePost
                    }
                    onClick={() => this.setState({ showModal: "Post" })}
                  >
                    Create Post
                  </div>
                </div>
                <div
                  className={
                    this.state.showModal == "Question"
                      ? styles.writePostMessageBox
                      : ""
                  }
                >
                  <div
                    className={
                      this.state.showModal == "Question"
                        ? styles.askQuestionSelected
                        : styles.askQuestion
                    }
                    onClick={() => this.setState({ showModal: "Question" })}
                  >
                    Ask Question
                  </div>
                </div>{" "}
                <div
                  className={
                    this.state.showModal == "Poll"
                      ? styles.writePostMessageBox
                      : ""
                  }
                >
                  <div
                    className={
                      this.state.showModal == "Poll"
                        ? styles.createPollSelected
                        : styles.createPoll
                    }
                    // onClick={() => this.setState({ showModal: "Poll" })}
                  >
                    Create Poll
                  </div>
                </div>
              </div>
              <div className={styles.commentHolder}>
                <div className={styles.imageAndInputHolder}>
                  <div className={styles.createPostContainerImage}>
                    <Image
                      image={profileImage}
                      width="100%"
                      height="100%"
                      className={styles.connectProfileImage}
                    />
                  </div>

                  <ControlInput
                    placeholder="Add Title (Optional)"
                    value={this.state.title}
                    onChange={val => this.handleTitle(val)}
                    textStyle={{
                      fontSize: 16,
                      color: "#7F7F7F",
                      fontFamily: "regular",
                      lineHeight: "20px"
                    }}
                    height={50}
                    boxy={true}
                    borderColor={"transparent"}
                    borderBottom={"transparent"}
                  />
                </div>
                <div className={styles.textArea}>
                  <TextArea
                    onChange={val => this.handleDesc(val)}
                    value={this.state.desc}
                    height={85}
                    placeholder="Add Description"
                    border="none"
                  />
                </div>
                {this.props.postImage && (
                  <div className={styles.postImage}>
                    {" "}
                    <img
                      src={this.props.postImage}
                      alt="icon"
                      height="100%"
                      width="100%"
                    />
                  </div>
                )}
                {this.state.showImageModal && (
                  <div className={styles.boxContainer}>
                    <div className={styles.displayBox}>
                      {this.state.image &&
                        this.state.image.length > 0 &&
                        this.state.image.map(val => {
                          return (
                            <div className={styles.imageStyle}>
                              <img
                                src={val.file}
                                alt="icon"
                                height="84px"
                                width="112px"
                              />
                            </div>
                          );
                        })}
                    </div>
                    <div className={styles.uploadBox}>
                      <div className={styles.uploadIcon}>
                        <input
                          id="img-icon"
                          type="file"
                          onChange={e => this.handleChange(e)}
                        />
                      </div>

                      <div className={styles.imageContainer}>
                        <label for="img-icon">
                          <img
                            src={UploadIcon}
                            alt="upload"
                            width="20px"
                            height="20px"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                )}

                {this.state.showModal == "Poll" && (
                  <div className={styles.pollInputHolder}>
                    <div className={styles.pollBox}>
                      <PollInputBox
                        leftText={"A"}
                        rightText={"ADD PHOTO"}
                        placeholder={"Add Option"}
                      />
                    </div>
                    <div className={styles.pollBox}>
                      <PollInputBox
                        leftText={"B"}
                        leftColor={"#B2B2B2"}
                        placeholder={"Add Option"}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className={styles.iconHolders}>
                <div
                  className={styles.icon}
                  onClick={() => this.showUploadImage()}
                >
                  <Icon size={25} image={image_blue} />
                </div>
                <div className={styles.iconBlur}>
                  <Icon size={25} image={video} />
                </div>
                <div className={styles.iconBlur}>
                  <Icon size={25} image={pdf} />
                </div>
                <div
                  className={styles.iconBlur}
                  onClick={() => this.setState({ showInputModal: true })}
                >
                  <Icon size={25} image={location} />
                </div>
                <div
                  className={styles.iconBlur}
                  onClick={() => this.setState({ showInputModal: true })}
                >
                  <Icon size={25} image={tag} />
                </div>
              </div>
              <div className={styles.labelHolder}>
                <div
                  className={styles.tagHolder}
                  onClick={() =>
                    this.setState({
                      showInputModal: true,
                      showTag: true,
                      labelsList: this.props.labelsList
                    })
                  }
                >
                  ADD LABEL
                </div>
                <TagsInput value={this.state.tags} />
              </div>
              <div className={styles.postHolder}>
                {this.state.showModal === "Post" && (
                  <div className={styles.selectHolder}>
                    <BoxCheck
                      onClick={() =>
                        this.setState({ isAnonymous: !this.state.isAnonymous })
                      }
                    />
                    <div className={styles.postuser}>Post anonymously</div>
                  </div>
                )}
                <div
                  className={
                    this.state.showModal === "Post"
                      ? styles.selectHolder
                      : styles.holder
                  }
                >
                  <div
                    className={styles.cancel}
                    onClick={() => this.props.closeModal()}
                  >
                    Cancel
                  </div>
                  {console.log("here", this.state.showModal)}
                  {this.state.showModal === "Post" ? (
                    <React.Fragment>
                      {this.state.title ||
                      this.state.desc ||
                      this.state.files.length > 0 ? (
                        <div
                          className={styles.dropdownHolder}
                          onClick={this.handlePostfeed}
                        >
                          Post
                        </div>
                      ) : (
                        <div className={styles.dropdownHolderInActive}>
                          Post
                        </div>
                      )}
                    </React.Fragment>
                  ) : (
                    // {this.state.showModal === "Question" &&
                    // this.state.labelId.length > 1 &&
                    <React.Fragment>
                      {(this.state.title ||
                        this.state.desc ||
                        this.state.files.length > 0) &&
                      this.state.labelId.length > 0 ? (
                        <div
                          className={styles.dropdownHolder}
                          onClick={this.handlePostfeed}
                        >
                          Post
                        </div>
                      ) : (
                        <div className={styles.dropdownHolderInActive}>
                          Post
                        </div>
                      )}
                    </React.Fragment>
                  )}
                  <div
                    className={styles.dropdownArrow}
                    onClick={() =>
                      this.setState({ showDropDown: !this.state.showDropDown })
                    }
                  >
                    +
                    {this.state.showDropDown && (
                      <div className={styles.showdropDown}>
                        <div className={styles.dropHeader}>VISIBLE TO</div>
                        <div
                          className={styles.content}
                          onClick={() => this.setState({ visibleTo: 1 })}
                        >
                          <BoxCheck
                            borderRadius={"50%"}
                            borderColor={"#333"}
                            fillColor={"#4f439a"}
                            selected={this.state.visibleTo === 1 ? true : false}
                          />
                          <div className={styles.text}>Anyone</div>
                        </div>
                        <div
                          className={styles.content}
                          onClick={() => this.setState({ visibleTo: 2 })}
                        >
                          <BoxCheck
                            borderRadius={"50%"}
                            borderColor={"#333"}
                            fillColor={"#4f439a"}
                            selected={this.state.visibleTo === 2 ? true : false}
                          />
                          <div className={styles.text}>My Connections</div>
                        </div>
                      </div>
                    )}
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

const profileData = [
  {
    name: "abc"
  },
  {
    name: "xyz"
  },
  {
    name: "bp"
  }
];
