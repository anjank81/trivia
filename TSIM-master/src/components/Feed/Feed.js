import React, { Component, createRef } from "react";
import styles from "./Feed.css";
import CenteredContent from "../../core/CenteredContent";
import profileImage from "../../images/Profile-Fill-grey.svg";
import Image from "../../core/Image";
import VerticalStatus from "./VerticalStatus";
import Button from "../general/Button";
import PrimaryHeaderContainer from "../HomePage/container/PrimaryHeaderContainer";
import ProfileDetailsInFeed from "./ProfileDetailsInFeed";
import ProfileConnection from "./ProfileConnection";
import AddMoreIntrest from "./AddMoreIntrest";
import GuidesRecommended from "./GuidesRecommended";
import RecommendedConnection from "./RecommendedConnection";
import Input2 from "../../core/Input2";
import FeedCard from "./FeedCard";
import CompleteProfileAlert from "./CompleteProfileAlert";
import FeedCardOverlay from "./FeedCardOverlay";
import FeedPollingWithText from "./FeedPollingWithText";
import {
  EVENT,
  EVENT_DETAILS_WITHOUT_ID,
  BLOG_DETAILS_WITHOUT_ID
} from "../../utils/constant";
import FeedPollingWithImage from "./FeedPollingWithImage";
import FeedWithMultipleImages from "./FeedWithMultipleImages";
import FeedEvent from "./FeedEvent";
import DesktopOnly from "../general/DesktopOnly";
import SecondaryLoader from "../general/SecondaryLoader";

const data = [
  {
    data: profileImage
  },
  {
    data: profileImage
  },
  {
    data: profileImage
  },
  {
    data: profileImage
  }
];
export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      guidePosition: 0,
      page: 1,
      showdot: false
    };

    this.Observer = React.createRef();
    this.lastBookRef = node => {
      if (this.Observer.current) this.Observer.current.disconnect();
      this.Observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          this.setState({ page: this.state.page + 1 });
          this.props.getFeed(this.state.page, this.props.feeds);
        }
      });
      if (node) this.Observer.current.observe(node);
    };
  }

  handlePagination = () => {
    this.setState({ page: this.state.page + 1 });
    this.props.getFeed(this.state.page + 1, this.props.feeds);
  };

  goForward = val => {
    let coachLength =
      this.props.recommendedList &&
      this.props.recommendedList.coaches &&
      this.props.recommendedList.coaches.length - 1;
    let guideLength =
      this.props.recommendedList &&
      this.props.recommendedList.guides &&
      this.props.recommendedList.guides.length - 1;

    if (val !== "guide") {
      if (this.state.position < coachLength) {
        this.setState({ position: this.state.position + 1 });
      }
    } else {
      if (this.state.guidePosition < guideLength) {
        this.setState({ guidePosition: this.state.guidePosition + 1 });
      }
    }
  };
  goBack = val => {
    if (val !== "guide") {
      if (this.state.position > 0) {
        this.setState({ position: this.state.position - 1 });
      }
    } else {
      if (this.state.guidePosition > 0) {
        this.setState({ guidePosition: this.state.guidePosition - 1 });
      }
    }
  };
  handleredirect = val => {
    if (this.props.history) {
      this.props.history.push(`${val}`);
    }
  };
  componentDidMount = () => {
    this.props.getTopPicks();
    this.props.getRecommend();
    this.props.getFeed(this.state.page);
    this.props.getUserProfileInfo();
    this.props.getUserInterest();
  };
  render() {
    const translationAmount = -(100 * this.state.position);
    const transform = `translateX(${translationAmount}%)`;
    const translationAmount1 = -(100 * this.state.guidePosition);
    const guideTransform = `translateX(${translationAmount1}%)`;
    const style = {
      transform: transform
    };
    const guideStyle = {
      transform: guideTransform
    };
    const eventBanner =
      this.props.topPicksList &&
      this.props.topPicksList &&
      this.props.topPicksList.filter(details => {
        return details.feed_type === "Event";
      });
    const blogBanner =
      this.props.topPicksList &&
      this.props.topPicksList &&
      this.props.topPicksList.filter(details => {
        return details.feed_type === "Blog";
      });
    const questionBanner =
      this.props.topPicksList &&
      this.props.topPicksList &&
      this.props.topPicksList.filter(details => {
        return details.feed_type === "Question";
      });
    const profileBanner =
      this.props.topPicksList &&
      this.props.topPicksList &&
      this.props.topPicksList.filter(details => {
        return details.category === "PROFILE";
      });
    const userFeeds = this.props.feeds && this.props.feeds.userFeeds;
    const eventFeeds = this.props.feeds && this.props.feeds.eventFeeds;
    const blogFeeds = this.props.feeds && this.props.feeds.blogFeeds;
    let heighestLength = userFeeds && userFeeds.length;
    if (eventFeeds && eventFeeds.length > heighestLength) {
      if (eventFeeds.length > blogFeeds.length) {
        heighestLength = eventFeeds.length;
      } else if (blogFeeds.length > heighestLength) {
        heighestLength = blogFeeds.length;
      }
    }
    const mixFeed = [];
    for (let i = 0; i < heighestLength; i++) {
      userFeeds[i] && mixFeed.push(userFeeds[i]);
      eventFeeds[i] && mixFeed.push(eventFeeds[i]);
      blogFeeds[i] && mixFeed.push(blogFeeds[i]);
    }

    return (
      <div className={styles.base} onClick={this.showdot}>
        {/* <div className={styles.indicatorHolder}>
          <VerticalStatus first="complete" second="active" third="incompele" />
        </div> */}
        <div className={styles.fixedHeader}>
          <PrimaryHeaderContainer history={this.props.history} />
        </div>

        {this.props.loading ? (
          <React.Fragment>
            <SecondaryLoader />
          </React.Fragment>
        ) : (
          <CenteredContent>
            <DesktopOnly>
              <div className={styles.heading}>Top Picks</div>
              <div className={styles.imageDisplaySection}>
                {eventBanner &&
                  eventBanner.map(details => {
                    if (details.category === "EVENT")
                      return (
                        <div className={styles.leftImage}>
                          <div className={styles.leftImgCont}>
                            <img
                              src={details.wall_image}
                              width="100%"
                              height="100%"
                              className={styles.imageEventBanner}
                              alt="someImage"
                            />
                            <div className={styles.overlay}>
                              <div
                                className={styles.bannerEventDetailsContainer}
                              >
                                <div className={styles.bannerEventDetails}>
                                  <div className={styles.tagContainer}>
                                    <div className={styles.tagButton}>
                                      {details.header}
                                    </div>
                                  </div>
                                  <div className={styles.eventHeading}>
                                    {details.title}
                                  </div>
                                  <div className={styles.dateAndPlaceContainer}>
                                    {details.date} . {details.author}
                                  </div>
                                  <div
                                    className={styles.viewEventButtonContainer}
                                    onClick={() => {
                                      this.handleredirect(EVENT);
                                    }}
                                  >
                                    <Button
                                      type="primary"
                                      backgroundColor={"rgba(0,0,0,0.5)"}
                                      fontColor={"#fff"}
                                      borderColor="rgba(0,0,0,0.5)"
                                      height={40}
                                      width={146}
                                      label="VIEW EVENT"
                                      borderRadius={10}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                  })}
                <div className={styles.rightImageHolder}>
                  {blogBanner && blogBanner[0] && (
                    <div
                      className={styles.smallImage}
                      onClick={() => {
                        this.handleredirect(
                          `${BLOG_DETAILS_WITHOUT_ID}/${blogBanner &&
                            blogBanner[0] &&
                            blogBanner[0].url}`
                        );
                      }}
                    >
                      <img
                        src={blogBanner[0].wall_image}
                        width="100%"
                        height="100%"
                        className={styles.image}
                        alt="someImage"
                      />
                      <div className={styles.overlay}>
                        <div className={styles.bannerStoryContainer}>
                          <div className={styles.bannerEventDetails}>
                            <div className={styles.tagContainer}>
                              <div className={styles.tagButton}>
                                {blogBanner[0].header}
                              </div>
                            </div>
                            <div className={styles.storiesHeading}>
                              {blogBanner[0].title}
                            </div>
                            <div className={styles.dateAndPlaceContainer}>
                              {blogBanner[0].date} . {blogBanner[0].author}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className={styles.smallImage}>
                    {questionBanner && questionBanner[0] && (
                      <div className={styles.popularQuestionContainer}>
                        <div className={styles.popularQuestionHeading}>
                          {questionBanner[0].header}
                        </div>
                        <div className={styles.question}>
                          {questionBanner[0].title}?
                        </div>
                        <div className={styles.note}>
                          Check the intresting answer by clicking on Answer
                          button
                        </div>
                        <div className={styles.answerButton}>
                          <Button
                            type="primary"
                            disabled={true}
                            backgroundColor={"#fff"}
                            fontColor={"rgb(79, 67, 154,0.5)"}
                            borderColor={"#fff"}
                            height={30}
                            width={90}
                            label="ANSWER"
                            borderRadius={3}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                  {blogBanner && blogBanner[1] && (
                    <div
                      className={styles.smallImage}
                      onClick={() => {
                        this.handleredirect(
                          `${BLOG_DETAILS_WITHOUT_ID}/${blogBanner &&
                            blogBanner[0] &&
                            blogBanner[0].url}`
                        );
                      }}
                    >
                      <img
                        src={blogBanner[1].wall_image}
                        width="100%"
                        height="100%"
                        className={styles.image}
                        alt="someImage"
                      />
                      <div className={styles.overlay}>
                        <div className={styles.bannerStoryContainer}>
                          <div className={styles.bannerEventDetails}>
                            <div className={styles.tagContainer}>
                              <div className={styles.tagButton}>
                                {" "}
                                {blogBanner[1].header}
                              </div>
                            </div>
                            <div className={styles.storiesHeading}>
                              {blogBanner[1].title}
                            </div>
                            <div className={styles.dateAndPlaceContainer}>
                              {blogBanner[1].date} . {blogBanner[1].author}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className={styles.smallImage}>
                    {profileBanner &&
                      profileBanner.map(data => {
                        return (
                          <div className={styles.connectProfileContainer}>
                            <div
                              className={styles.coverImageForConnectionProfile}
                            >
                              <img
                                src={data.wall_pic}
                                width="100%"
                                height="100%"
                                className={styles.image}
                                alt="someImage"
                              />
                            </div>
                            <div className={styles.connectProfileHolder}>
                              <div className={styles.connectProfileImageHolder}>
                                <img
                                  src={data.profile_pic}
                                  width="100%"
                                  height="100%"
                                  className={styles.connectProfileImage}
                                  alt="someImage"
                                />
                              </div>
                              <div className={styles.profileName}>
                                {data.name}
                              </div>
                            </div>
                            <div
                              className={styles.connectProfileDetailsContainer}
                            >
                              <div className={styles.connectProfileDetails}>
                                <div
                                  className={styles.connectProfileDesignations}
                                >
                                  {this.props.designation}
                                </div>
                                <div className={styles.connectProfileTags}>
                                  {data.expert && data.expert[0]}
                                  {data.expert && data.expert.length > 1 && (
                                    <span
                                      className={
                                        styles.connectProfileTagsMoreThenOne
                                      }
                                    >
                                      +{data.expert.length - 1}
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div>
                                <Button
                                  type="primary"
                                  backgroundColor={"#E0DEED"}
                                  fontColor={"rgb(79, 67, 154,0.3)"}
                                  borderColor={"#E0DEED"}
                                  height={30}
                                  width={90}
                                  label="CONNECT"
                                  borderRadius={3}
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </DesktopOnly>
            <div className={styles.dataHolderWrapper}>
              <DesktopOnly>
                <div className={styles.leftSidePannel}>
                  <div className={styles.myProfileSection}>
                    <ProfileDetailsInFeed
                      {...this.props.userProfileInfo}
                      history={this.props.history}
                    />
                  </div>
                  <div className={styles.addMoreIntrestContainer}>
                    <AddMoreIntrest {...this.props} />
                  </div>
                  {/* <div className={styles.dataDiv}>john-priya</div>
              <div className={styles.dataDiv}>john</div> */}
                </div>

                <div className={styles.rightSidePannel}>
                  {this.props.recommendedList &&
                    this.props.recommendedList.coaches &&
                    this.props.recommendedList.coaches.length > 0 && (
                      <div className={styles.profileConnectionHeading}>
                        Coaches recommended for you
                      </div>
                    )}
                  <div className={styles.caurosel}>
                    <div className={styles.slider} style={style}>
                      {this.props.recommendedList &&
                        this.props.recommendedList.coaches &&
                        this.props.recommendedList.coaches.map((val, i) => {
                          return (
                            <div className={styles.cauroselData}>
                              <ProfileConnection {...val} />
                            </div>
                          );
                        })}
                    </div>
                  </div>
                  {this.props.recommendedList &&
                    this.props.recommendedList.coaches &&
                    this.props.recommendedList.coaches.length > 0 && (
                      <div className={styles.forwrdBackContainer}>
                        <div className={styles.forwrdBack}>
                          <div
                            className={styles.back}
                            onClick={() => this.goBack()}
                          ></div>
                          <div
                            className={styles.forward}
                            onClick={() => this.goForward()}
                          ></div>
                        </div>
                        <div className={styles.viewAllButtonContainer}>
                          <Button
                            type="primary"
                            backgroundColor={"transparent"}
                            fontColor={"rgba(0,0,0,0.4)"}
                            borderColor={"#7F7F7F"}
                            height={30}
                            width={116}
                            label="VIEW ALL"
                            borderRadius={5}
                          />
                        </div>
                      </div>
                    )}
                  {this.props.recommendedList &&
                    this.props.recommendedList.guides &&
                    this.props.recommendedList.guides.length > 0 && (
                      <div className={styles.guideRecommendedHeading}>
                        Guides recommended for you
                      </div>
                    )}
                  <div className={styles.caurosel}>
                    <div className={styles.slider} style={guideStyle}>
                      {this.props.recommendedList &&
                        this.props.recommendedList.guides &&
                        this.props.recommendedList.guides.map((val, i) => {
                          return (
                            <div className={styles.GuideCauroselData}>
                              <GuidesRecommended
                                {...this.props}
                                guidedetails={val}
                              />
                            </div>
                          );
                        })}
                    </div>
                  </div>
                  {this.props.recommendedList &&
                    this.props.recommendedList.guides &&
                    this.props.recommendedList.guides.length > 0 && (
                      <div className={styles.forwrdBackContainer}>
                        <div className={styles.forwrdBack}>
                          <div
                            className={styles.back}
                            onClick={() => this.goBack("guide")}
                          ></div>
                          <div
                            className={styles.forward}
                            onClick={() => this.goForward("guide")}
                          ></div>
                        </div>
                        <div className={styles.viewAllButtonContainer}>
                          <Button
                            type="primary"
                            backgroundColor={"transparent"}
                            fontColor={"rgba(0,0,0,0.4)"}
                            borderColor={"#7F7F7F"}
                            height={30}
                            width={116}
                            label="VIEW ALL"
                            borderRadius={5}
                          />
                        </div>
                      </div>
                    )}
                  {this.props.recommendedList &&
                    this.props.recommendedList.connections &&
                    this.props.recommendedList.connections.length > 0 && (
                      <div className={styles.recommendedConnectionHeader}>
                        Connections recommended for you{" "}
                      </div>
                    )}

                  {this.props.recommendedList &&
                    this.props.recommendedList.connections &&
                    this.props.recommendedList.connections.map((data, i) => {
                      return (
                        <div className={styles.recommendedConnectionContainer}>
                          <RecommendedConnection
                            {...this.props}
                            connectionDetails={data}
                          />
                        </div>
                      );
                    })}
                </div>
              </DesktopOnly>
              <div className={styles.centerSection}>
                <div className={styles.createPostContainer}>
                  <div className={styles.createPostNav}>
                    <div
                      className={styles.writePost}
                      onClick={() =>
                        this.props.showUserPostModal({
                          showModal: "Post",
                          page: this.state.page
                        })
                      }
                    >
                      Create Post
                    </div>
                    <div
                      className={styles.askQuestion}
                      onClick={() =>
                        this.props.showUserPostModal({ showModal: "Question" })
                      }
                    >
                      Ask Question
                    </div>
                    <div
                      className={styles.createPoll}
                      // onClick={() =>
                      //   this.props.showUserPostModal({ showModal: "Poll" })
                      // }
                    >
                      Create Poll
                    </div>
                  </div>
                  <div className={styles.imageAndInputHolder}>
                    <div className={styles.createPostContainerImage}>
                      <img
                        src={profileImage}
                        width="100%"
                        height="100%"
                        className={styles.connectProfileImage}
                        alt="someImage"
                      />
                    </div>
                    <Input2
                      placeholder="What’s on your mind?"
                      onClick={() =>
                        this.props.showUserPostModal({
                          showModal: "Post",
                          page: this.state.page
                        })
                      }
                      // value={this.state.email}
                      // onChange={val => this.onChange(val)}
                      textStyle={{
                        fontSize: 14,
                        color: "#7F7F7F",
                        fontFamily: "regular",
                        lineHeight: "20px"
                      }}
                      height={50}
                      boxy={true}
                      border={"none"}
                      borderColor={"transparent"}
                      borderBottom={"transparent"}
                      // // onFocus={() => {
                      // //   this.handleOnFocusInput();
                      // }}
                    />
                  </div>
                </div>
                <div className={styles.recentAndTopPickContainer}>
                  <div className={styles.recent}>RECENT</div>
                  <div className={styles.topPick}>TOP PICK</div>
                </div>
                <div className={styles.feedsContainer}>
                  {this.props &&
                    this.props.feeds &&
                    this.props.feeds.map(val => {
                      if (val && val.feed_type) {
                        if (val.feed_type === "Blog") {
                          return (
                            <FeedCardOverlay
                              {...val}
                              history={this.props.history}
                              showUserPostModal={this.props.showUserPostModal}
                              showUserShareModal={this.props.showUserShareModal}
                              page={this.state.page}
                              postBlogLike={data =>
                                this.props.postBlogLike(data)
                              }
                              blogLikeDetails={this.props.blogLikeDetails}
                              postBlogComment={data =>
                                this.props.postBlogComment(data)
                              }
                              getBlogComment={id =>
                                this.props.getBlogComment(id)
                              }
                              comments={this.props.comments}
                              blogPostCommentDetails={
                                this.props.blogPostCommentDetails
                              }
                            />
                          );
                        } else if (val.feed_type == "Poll") {
                          return (
                            <FeedPollingWithText
                              {...val}
                              showUserPostModal={this.props.showUserPostModal}
                              showUserShareModal={this.props.showUserShareModal}
                              page={this.state.page}
                              history={this.props.history}
                            />
                          );
                        } else if (val.feed_type == "Event") {
                          return (
                            <FeedEvent
                              {...val}
                              history={this.props.history}
                              addUserIntrest={this.props.addUserIntrest}
                              showUserPostModal={this.props.showUserPostModal}
                              showUserShareModal={this.props.showUserShareModal}
                              page={this.state.page}
                              showRegisterDetailsModule={
                                this.props.showRegisterDetailsModule
                              }
                              getRegisterEvent={this.props.getRegisterEvent}
                            />
                          );
                        } else if (val.feed_type == "Post") {
                          return (
                            <FeedCard
                              {...val}
                              showUserPostModal={this.props.showUserPostModal}
                              showUserShareModal={this.props.showUserShareModal}
                              page={this.state.page}
                              history={this.props.history}
                              postFeedLike={data => {
                                this.props.postFeedLike(data);
                              }}
                              postLikeDetails={this.props.postLikeDetails}
                              showfeedModal={this.state.showdot}
                              postFeedComment={(data, id) =>
                                this.props.postFeedComment(data, id)
                              }
                              getFeedComment={id =>
                                this.props.getFeedComment(id)
                              }
                              comments={this.props.comments}
                              FeedPostCommentDetails={
                                this.props.FeedPostCommentDetails
                              }
                            />
                          );
                        } else if (val.feed_type == "Question") {
                          return (
                            <FeedCard
                              {...val}
                              showUserPostModal={this.props.showUserPostModal}
                              showUserShareModal={this.props.showUserShareModal}
                              page={this.state.page}
                              history={this.props.history}
                              postFeedLike={data => {
                                this.props.postFeedLike(data);
                              }}
                              postLikeDetails={this.props.postLikeDetails}
                              postFeedComment={data =>
                                this.props.postFeedComment(data)
                              }
                              getFeedComment={id =>
                                this.props.getFeedComment(id)
                              }
                              comments={this.props.comments}
                              FeedPostCommentDetails={
                                this.props.FeedPostCommentDetails
                              }
                            />
                          );
                        }
                      } else {
                      }
                    })}
                </div>
            
                {this.props.feeds.length > 0 && (
                  <div
                    className={styles.buttonContainerForLoadMore}
                    ref={this.lastBookRef}
                  >
                    <div className={styles.loader}></div>
                  </div>
                )}
                {/* <div className={styles.completeProfileAlertContainer}>
                <CompleteProfileAlert />
              </div> */}

                {/* <div className={styles.completeProfileAlertContainer}>
                <FeedPollingWithImage />
              </div>
              <div className={styles.completeProfileAlertContainer}>
                <FeedWithMultipleImages/>
              </div> */}
              </div>
            </div>
          </CenteredContent>
        )}
      </div>
    );
  }
}
