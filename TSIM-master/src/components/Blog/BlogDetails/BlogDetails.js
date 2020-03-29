import React from "react";
import CenteredContent from "../../../core/CenteredContent";
import styles from "./BlogDetails.css";
import SeekImage from "../../../images/Resources-min.jpg";
import facebook from "../../../images/Facebook-black.svg";
import linkedin from "../../../images/Linkedin-black.svg";
import twitter from "../../../images/Twitter-black.svg";
import instagram from "../../../images/Instagram.svg";
import Footer from "../../Footer/Footer";
import profileImage from "../../../images/Profile-Fill-grey.svg";
import PrimaryHeaderContainer from "../../HomePage/container/PrimaryHeaderContainer";
import FooterContainer from "../../Footer/FooterContainer";
import SecondaryLoader from "../../general/SecondaryLoader";
import * as Cookie from "../../../utils/Cookie";
import {
  ACCESS_TOKEN,
  USER_DETAILS,
  isUserLogedIn,
  BLOG_COUNT
} from "../../../utils/constant";
import profile from "../../../images/Profile-Fill-grey.svg";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from "react-share";
import Image from "../../../core/Image";

export default class BlogDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComments: false,
      showButton: false,
      commentText: ""
    };
  }
  componentDidMount() {
    let blogcount = localStorage.getItem(BLOG_COUNT);
    if (blogcount) {
      localStorage.setItem(BLOG_COUNT, parseInt(blogcount) + 1);
    } else {
      localStorage.setItem(BLOG_COUNT, 1);
    }
    let blogId = this.props.match.params.blogId;
    this.props.getBlogsDetails(blogId);
  }

  handlePostComment = id => {
    let userDetails = Cookie.getCookie(USER_DETAILS);
    if (userDetails) {
      let user = JSON.parse(userDetails);
      let data = {
        userId: user.userId,
        blogId: this.props.match.params.blogId,
        comment: this.state.commentText,
        parentCommentId: null
      };

      this.props.postBlogComment(data);
      this.setState({
        commentText: ""
      });
    }
  };
  componentWillReceiveProps = nextProps => {
    if (nextProps.blogPostCommentDetails) {
      this.props.getBlogComment(this.props.match.params.blogId);
    }
  };
  render() {
    return (
      <React.Fragment>
        {this.props.loading ? (
          <SecondaryLoader />
        ) : (
          <React.Fragment>
            <div className={styles.fixedHeader}>
              <PrimaryHeaderContainer />
            </div>
            <CenteredContent>
              <div className={styles.baseContainer}>
                <div className={styles.title}>
                  {this.props.blogDetails && this.props.blogDetails.title}
                </div>

                <div className={styles.jobSection}>
                  <div className={styles.leftWrapper}>
                    <div className={styles.jobIcon}>
                      <Image image={profileImage} width="100%" height="100%" />
                    </div>
                    <div>
                      <div className={styles.wrapper}>
                        <div className={styles.jobTitle}>
                          {this.props.blogDetails &&
                            this.props.blogDetails.author}
                        </div>
                        {/* <div className={styles.jobDate}>Follow</div> */}
                      </div>
                      <div className={styles.jobDetails}>
                        <div className={styles.companyLocation}>
                          Nov 27 ·{" "}
                          {this.props.blogDetails &&
                            this.props.blogDetails.duration}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.imageContainer}>
                    <div className={styles.socialBlock}>
                      <FacebookShareButton
                        url={window.location.href}
                        children={
                          <img
                            className={styles.socialImg}
                            src={facebook}
                            alt=""
                          />
                        }
                        style={{
                          height: "40px",
                          outline: "none",
                          cursor: "pointer"
                        }}
                      />
                      <TwitterShareButton
                        url={window.location.href}
                        children={
                          <img
                            className={styles.socialImg}
                            src={twitter}
                            alt=""
                          />
                        }
                        style={{
                          height: "40px",
                          outline: "none",
                          cursor: "pointer"
                        }}
                      />
                      <LinkedinShareButton
                        url={window.location.href}
                        children={
                          <img
                            className={styles.socialImg}
                            src={linkedin}
                            alt=""
                          />
                        }
                        style={{
                          height: "40px",
                          outline: "none",
                          cursor: "pointer"
                        }}
                      />
                      {/* <a
                        href="https://www.facebook.com/femmevista"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className={styles.socialImg}
                          src={facebook}
                          alt=""
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/femmevista"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className={styles.socialImg}
                          src={linkedin}
                          alt=""
                        />
                      </a>
                      <a
                        href="https://twitter.com/@thestarinme1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className={styles.socialImg}
                          src={twitter}
                          alt=""
                        />
                      </a> */}
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    className={styles.image}
                    src={
                      this.props.blogDetails && this.props.blogDetails.imageUrl
                        ? this.props.blogDetails.imageUrl
                        : SeekImage
                    }
                    alt=""
                  />
                  {/* <div
                className={styles.banner}
                style={{
                  backgroundImage: `url(${
                    this.props.image ? this.props.image : SeekImage
                  })`
                }}
              ></div> */}
                </div>
                <p className={styles.paragraph}>
                  {this.props.blogDetails &&
                    this.props.blogDetails.fullDescription}
                </p>

                {this.props.blogDetails &&
                  this.props.blogDetails.labels &&
                  this.props.blogDetails.labels.map(data => {
                    return <div className={styles.tagName}>{data}</div>;
                  })}

                <div className={styles.commcont}>
                  <div className={styles.commhead}>
                    Comments(
                    {this.props &&
                    this.props.comments &&
                    this.props.comments.length
                      ? this.props.comments.length
                      : 0}
                    )
                  </div>
                  {isUserLogedIn && (
                    <div className={styles.commentBox}>
                      <textarea
                        className={styles.commentText}
                        type="text"
                        value={this.state.commentText}
                        placeholder="Type your Comment"
                        onChange={event => {
                          if (
                            event.target.value != " " ||
                            this.state.commentText
                          ) {
                            this.setState({
                              commentText: event.target.value,
                              showButton: true
                            });
                          }
                        }}
                        rows="4"
                      ></textarea>
                    </div>
                  )}
                  {isUserLogedIn &&
                    this.state.showButton &&
                    this.state.commentText && (
                      <div
                        className={styles.postButton}
                        onClick={this.handlePostComment}
                      >
                        Post
                      </div>
                    )}
                </div>

                {this.props &&
                this.props.comments &&
                this.props.comments.message !== "No data found" ? (
                  <div className={styles.commentContainer}>
                    {!this.state.showComments && (
                      <div className={styles.commentholder}>
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
                            <div className={styles.profilename}>
                              {" "}
                              {this.props.comments &&
                                !this.props.comments.message &&
                                this.props.comments[0].user}
                            </div>
                            <div className={styles.degn}>
                              {this.props.comments[0].designation} |{" "}
                              {this.props.comments[0].createdAt}
                            </div>
                            <div className={styles.comment_text}>
                              {this.props.comments &&
                                !this.props.comments.message &&
                                this.props.comments[0].comment}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {!this.state.showComments ? (
                      <div
                        className={styles.responsebutt}
                        onClick={() =>
                          this.setState({
                            showComments: !this.state.showComments
                          })
                        }
                      >
                        View more
                      </div>
                    ) : null}
                    {this.state.showComments &&
                      this.props.comments &&
                      this.props.comments.map(val => {
                        return (
                          <div className={styles.commentholder}>
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
                                <div className={styles.profilename}>
                                  {val.user}
                                </div>
                                <div className={styles.degn}>
                                  {val.designation} | {val.createdAt}
                                </div>
                                <div className={styles.comment_text}>
                                  {val.comment}
                                </div>
                              </div>
                            </div>
                            {/* <div className={styles.username}> {val.user}</div>
                              <div className={styles.comments}>
                                {val.comment}
                              </div>
                              <div className={styles.likesection}>
                                <div className={styles.like}>
                                  {val.noOfLikes}
                                </div>
                                <div className={styles.comment}>
                                  {val.noOfComments}
                                </div>
                              </div> */}
                          </div>
                        );
                      })}
                  </div>
                ) : (
                  <div>NO COMMENTS</div>
                )}
              </div>
            </CenteredContent>
            <FooterContainer />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
