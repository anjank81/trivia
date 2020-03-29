import React, { Component } from "react";
import styles from "./Profile.css";
import CenteredContent from "../../core/CenteredContent";
import Milestone from "../../core/Milestone";
import Skills from "../Skills/Skills";
import ToolTip from "../../core/ToolTip";
import Button from "../../core/Button";
import PrimaryHeaderContainer from "../HomePage/container/PrimaryHeaderContainer";
import ImageUplaod from "./ImageUpload";
import FeedMenu from "./FeedMenu";
import MyFeedMenu from "./MyFeedMenu";
import follow from "../../images/Follow.svg";
import share from "../../images/Sharefill.svg";
import download from "../../images/Download-profile.svg";
import report from "../../images/Report.svg";
import contactInfo from "../../images/Contact-Info.svg";
import * as Cookie from "../../utils/Cookie";
import {
  FILE_URL_ROOT,
  API_URL_ROOT,
  IMAGE_URL_ROOT,
  USER_DETAILS
} from "../../utils/constant";
import SecondaryLoader from "../general/SecondaryLoader";
import MobileNavigatorHeader from "../modules/MobileNavigationalHeader";

// const data = [{}, {}, {}, {}, {}];

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.toolTip1 = React.createRef();
    this.toolTip2 = React.createRef();
    this.toolTip3 = React.createRef();
    this.toolTip4 = React.createRef();
    this.toolTip5 = React.createRef();
    this.toolTip6 = React.createRef();
    // this.toolTip7 = React.createRef();

    this.state = {
      tour1: false,
      tour2: false,
      tour3: false,
      tour4: false,
      tour5: false,
      tour6: false,
      // tour7: false,
      tourcount: 0,
      closeToolTip: false,
      closeBanner: true,
      file: [],
      slideIndex: 0,
      maxSlide: 5,
      showProfileMenu: false,
      showFeedMenu: false,
      username: null,
      activeIndex: null,
      milestone: [],
      image: null,
      showWorkMenu: false
    };
  }

  incrementTime = () => {
    if (this.state.tourcount === 1) {
      this.setState({
        tour1: true,
        tourcount: this.state.tourcount + 1
      });
    } else if (this.state.tourcount === 2) {
      this.setState({
        tour2: true,
        tourcount: this.state.tourcount + 1
      });
    } else if (this.state.tourcount === 3) {
      this.setState({
        tour3: true,
        tourcount: this.state.tourcount + 1
      });
    } else if (this.state.tourcount === 4) {
      this.setState({
        tour4: true,
        tourcount: this.state.tourcount + 1
      });
    } else if (this.state.tourcount === 5) {
      this.setState({
        tour5: true,
        tourcount: this.state.tourcount + 1
      });
    } else if (this.state.tourcount === 6) {
      this.setState({
        tour6: true,
        tourcount: this.state.tourcount + 1
      });
    } else if (this.state.tourcount === 7) {
      this.setState({
        tour7: true,
        tourcount: this.state.tourcount + 1
      });
    } else {
      //console.log("end the tour");
    }
  };

  gotItHandler = async () => {
    await this.setState({
      tourcount: this.state.tourcount + 1
    });
    if (this.state.tourcount === 1) {
      this.scrollToToolTip1Ref();
    } else if (this.state.tourcount === 2) {
      this.scrollToToolTip2Ref();
    } else if (this.state.tourcount === 3) {
      this.scrollToToolTip3Ref();
    } else if (this.state.tourcount === 4) {
      this.scrollToToolTip4Ref();
    } else if (this.state.tourcount === 5) {
      this.scrollToToolTip5Ref();
    } else if (this.state.tourcount === 6) {
      this.scrollToToolTip6Ref();
    }
    // else if (this.state.tourcount === 7) {
    //   this.scrollToToolTip7Ref();
    // }
  };

  startTour = async () => {
    await this.setState({
      tourcount: this.state.tourcount + 1,
      tour1: true
    });
    this.scrollToToolTip1Ref();
  };

  closeToolTip = () => {
    this.setState({
      tourcount: 0,
      tour1: false,
      tour2: false,
      tour3: false,
      tour4: false,
      tour5: false,
      tour6: false,
      tour7: false,
      closeToolTip: false,
      closeBanner: false
    });
  };

  closeBannerToolTip = () => {
    this.setState({
      closeBanner: false
    });
  };

  onLoadMore = () => {
    this.props.showImageUploadModule();
    this.scrollToToolTip1Ref();
  };

  handleScroll = () => {
    this.setState({ lastScrollY: window.scrollY });
  };

  showFeedMenu = () => {
    this.setState({ showFeedMenu: !this.state.showFeedMenu });
  };

  showWorkMenu = e => {
    this.setState({ showWorkMenu: !this.state.showWorkMenu });
  };

  handleClick = () => {
    // this.showFeedMenu();
    this.setState({ showFeedMenu: !this.state.showProfileMenu });
  };

  showProfileMenu = () => {
    this.setState({ showProfileMenu: !this.state.showProfileMenu });
  };

  showMilestones = () => {
    if (this.props.showMilestonesEvent) {
      this.props.showMilestonesEvent();
    }
  };

  scrollToToolTip1Ref = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  scrollToToolTip2Ref = () => {
    window.scroll({
      top: 350 - this.toolTip2.current.offsetTop,
      behavior: "smooth"
    });
  };
  scrollToToolTip3Ref = () => {
    window.scroll({
      top: 350 + this.toolTip3.current.offsetTop,
      behavior: "smooth"
    });
  };
  scrollToToolTip4Ref = () => {
    window.scroll({
      top: 600 + this.toolTip4.current.offsetTop,
      behavior: "smooth"
    });
  };
  scrollToToolTip5Ref = () => {
    window.scroll({
      top: 950 + this.toolTip5.current.offsetTop,
      behavior: "smooth"
    });
  };
  scrollToToolTip6Ref = () => {
    window.scroll({
      top: 1200 + this.toolTip6.current.offsetTop,
      behavior: "smooth"
    });
  };
  // scrollToToolTip7Ref = () => {
  //   window.scroll({
  //     top: 1350 - this.toolTip7.current.offsetTop,
  //     behavior: "smooth"
  //   });
  // };
  showWorkExpModal = () => {
    if (this.props.showWorkExpEvent) {
      this.props.showWorkExpEvent();
    }
  };
  showUploadVideoModal = () => {
    if (this.props.showUploadVideoEvent) {
      this.props.showUploadVideoEvent();
    }
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
    if (this.props.getProfileDetails) {
      this.props.getProfileDetails();
    }
    if (this.props.getProfileImage) {
      this.props.getProfileImage();
    }
    if (this.props.getUserSkill) {
      this.props.getUserSkill();
    }
    if (this.props.getUserLanguage) {
      this.props.getUserLanguage();
    }
    if (this.props.showInstructionModal) {
      this.props.showInstructionModal(this.props.history);
    }
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  onOpenAccordian = activeIndex => {
    this.setState({
      activeIndex: activeIndex
    });
  };

  componentWillReceiveProps(nextProps) {
    let abc =
      nextProps.userProfileDetails &&
      nextProps.userProfileDetails.profilePhotos[0] &&
      nextProps.userProfileDetails.profilePhotos[0].photoUrl;

    if (
      nextProps.userProfileDetails &&
      nextProps.userProfileDetails.profilePhotos[0] &&
      nextProps.userProfileDetails.profilePhotos[0].photoUrl
    ) {
      this.setState({
        image:
          nextProps.userProfileDetails &&
          nextProps.userProfileDetails.profilePhotos[0] &&
          nextProps.userProfileDetails.profilePhotos[
            nextProps.userProfileDetails.profilePhotos.length - 1
          ].photoUrl
      });
    }
  }

  render() {
    const allBlogsDetails = this.props && this.props.userProfileDetails;

    let summary = allBlogsDetails && allBlogsDetails.summary;

    let milestones = allBlogsDetails && allBlogsDetails.milestones;

    let professionalDetails =
      allBlogsDetails &&
      allBlogsDetails.professionalDetails &&
      allBlogsDetails.professionalDetails[0];

    let unfollowedData = [
      { icon: follow, text: "Follow" },
      { icon: share, text: "Share Profile" },
      { icon: download, text: "Download Profile" },
      { icon: report, text: "Report/Block" },
      { icon: contactInfo, text: "Contact Info" }
    ];

    let myData = [
      { icon: follow, text: "Edit Profile" },
      { icon: share, text: "Share Profile" },
      { icon: download, text: "Download Profile" }
    ];

    let workExpData = [
      { icon: follow, text: "Edit Profile" },
      { icon: share, text: "Share Profile" },
      { icon: download, text: "Download Profile" }
    ];

    let jobData =
      professionalDetails &&
      professionalDetails.userWorkDetails.map(val => {
        return val;
      });
    let volunteerData =
      professionalDetails &&
      professionalDetails.userVolunteerDetails.map(val => {
        return val;
      });

    let educationData =
      professionalDetails &&
      professionalDetails.userEducationDetails.map(val => {
        return val;
      });

    let certificationData =
      professionalDetails &&
      professionalDetails.userCertificationCourses.map(val => {
        return val;
      });

    let publicationData =
      professionalDetails &&
      professionalDetails.userPublicationDetails.map(val => {
        return val;
      });

    let patentData =
      professionalDetails &&
      professionalDetails.userPatentDetails.map(val => {
        return val;
      });

    let awardsData =
      professionalDetails &&
      professionalDetails.userHonourAwards.map(val => {
        return val;
      });

    let professionalSkills = allBlogsDetails && allBlogsDetails.skills;

    let professionalLanguages = allBlogsDetails && allBlogsDetails.languages;

    let profileImage = allBlogsDetails && allBlogsDetails.profilePhotos;

    let cvUrl = summary && summary.cvUrl;
    let user = allBlogsDetails && allBlogsDetails.user;
    let firstName = user && user.firstName;
    let lastName = user && user.lastName;
    const initialMilestone = [0,1,2,3,4];

    return (
      <React.Fragment>
        <div className={styles.fixedHeader}>
          <PrimaryHeaderContainer />
        </div>
        <div className={styles.base}>
          <div className={styles.topSection}>
            <CenteredContent contentWidth="1200px">
              <div className={styles.profileSection}>
                <div className={styles.profile}>
                  <div className={styles.nameWithEdit}>
                    <div className={styles.profileName}>
                      {firstName && lastName
                        ? `${firstName + " " + lastName}`
                        : "Add Name"}
                      {/* <div className={styles.editIcon}></div> */}
                    </div>
                    <div
                      className={styles.editableOptions}
                      onClick={this.showProfileMenu}
                    >
                      {/* write a condition if the user tries to view someothers profile and user is viewing his own profile */}

                      {/* <FeedMenu
                        data={unfollowedData}
                         showFeedMenu={this.state.showFeedMenu}
                      ></FeedMenu>  */}
                      <MyFeedMenu
                        data={myData}
                        showFeedMenu={this.state.showProfileMenu}
                        handleEdit={this.handleEdit}
                        handleDownload={this.handleDownload}
                        handleShare={this.handleShare}
                        showProfileModal={() =>
                          this.props.showProfileModal({
                            userDetails: user,
                            summary: summary
                          })
                        }
                        downloadDisabled={true}
                        shareDisabled={true}
                      ></MyFeedMenu>
                    </div>
                  </div>
                  <div className={styles.profileDesignation}>
                    {summary && summary.profileSummary
                      ? summary && summary.designation
                      : "Add Designation"}
                    {/* <div className={styles.editIcon}></div> */}
                  </div>
                  <div className={styles.profileLocation}>
                    {summary && summary.location
                      ? summary && summary.location
                      : "Add Location"}
                    {/* <div className={styles.editIcon}></div> */}
                  </div>
                  <div className={styles.profileConnections}>
                    <div className={styles.connections}>
                      {this.props.connections ? "" : 0} Connections
                      {this.state.tourcount === 1 && (
                        <div ref={this.toolTip1}>
                          <ToolTip
                            toolTipLeft={"130px"}
                            toolTipTop={"-20px"}
                            left={"-8px"}
                            top={"50px"}
                            handleModal={this.closeToolTip}
                            showScreen={false}
                            children={
                              <React.Fragment>
                                <div className={styles.toolTipHeader}>
                                  Tell us about yourself
                                </div>
                                <div className={styles.toolTipBody}>
                                  Let other users know more about you
                                </div>
                                <Button
                                  type="primary"
                                  backgroundColor={"#AD5DA3"}
                                  fontColor={"#fff"}
                                  height={30}
                                  width={80}
                                  label="Got It!"
                                  borderRadius={2}
                                  onClick={this.gotItHandler}
                                />
                              </React.Fragment>
                            }
                          />
                        </div>
                      )}
                    </div>
                    {!cvUrl ? (
                      <div
                        className={styles.uploadCvButton}
                        onClick={() => this.props.showUploadCvModal()}
                      >
                        UPLOAD CV
                      </div>
                    ) : (
                      <div
                        className={styles.uploadCvButton}
                        onClick={() =>
                          this.props.showUploadCvModal({ cvUrl: cvUrl })
                        }
                      >
                        UPDATE CV
                      </div>
                    )}
                  </div>
                  <div className={styles.dividingLine} />
                  <div className={styles.summary}>
                    <div className={styles.summaryHeader}>
                      Professional Summary
                      <div className={styles.infoIcon}></div>
                    </div>
                    <div className={styles.addBio}>
                      {/* Add bio<div className={styles.editIcon}></div> */}
                    </div>
                    <div className={styles.bioList}>
                      {summary && summary.profileSummary
                        ? summary && summary.profileSummary
                        : "(For ex: A Human resources leader with over 18 years of experience across Talent management, HR Policy and Recruitment)"}

                      <div className={styles.wordLimit}>
                        Word Limit: 100 words
                      </div>
                    </div>
                    {/* <div className={styles.uploadIntroVideo}>
                      <div className={styles.uploadIcon}></div>
                      <div
                        className={styles.uploadText}
                        onClick={this.showUploadVideoModal}
                      >
                        Upload intro video
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className={styles.uploadImage}>
                  {this.state.image ? (
                    <React.Fragment>
                      <div
                        className={styles.profileCarousel}
                        style={{
                          backgroundImage: `url(${IMAGE_URL_ROOT +
                            this.state.image})`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                          backgroundSize: "contain"
                        }}
                      ></div>
                    </React.Fragment>
                  ) : (
                    <div className={styles.uploadImageDummy}></div>
                  )}
                  <div className={styles.uploadImageGroup}>
                    <div
                      className={styles.uploadImages}
                      onClick={() =>
                        this.props.showImageUploadModal({
                          profileUrl: `${IMAGE_URL_ROOT + this.state.image}`
                        })
                      }
                    >
                      Upload
                    </div>
                    {this.state.tourcount === 2 && (
                      <div ref={this.toolTip2}>
                        <ToolTip
                          toolTipLeft={"-325px"}
                          toolTipTop={"-40px"}
                          right={"-8px"}
                          top={"50px"}
                          transform={"rotate(180deg)"}
                          handleModal={this.closeToolTip}
                          showScreen={false}
                          children={
                            <React.Fragment>
                              <div className={styles.toolTipHeader}>
                                Add Profile Pictures
                              </div>
                              <div className={styles.toolTipBody}>
                                Its your profile and let’s make it interesting
                              </div>
                              <Button
                                type="primary"
                                backgroundColor={"#AD5DA3"}
                                fontColor={"#fff"}
                                height={30}
                                width={80}
                                label="Got It!"
                                borderRadius={2}
                                onClick={this.gotItHandler}
                              />
                            </React.Fragment>
                          }
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CenteredContent>
          </div>{" "}
          <div className={styles.milestones}>
            <CenteredContent contentWidth="1200px">
              {" "}
              <div className={styles.summaryHeader}>Milestones</div>
              <div className={styles.milestoneList}>
                Share your professional milestones and key achievements
              </div>
              <div className={styles.milestoneSection}>
                {milestones ?
                  milestones.map((val, index) => {
                    if (index < 5) {
                      return (
                        <Milestone
                          key={index}
                          current={index}
                          getMilestoneDetails={() =>
                            this.props.getMilestoneDetails(milestones)
                          }
                          showMilestones={() =>
                            this.props.showMilestonesEvent(val)
                          }
                          title={val.title}
                          photoUrl={IMAGE_URL_ROOT + val.photoUrl}
                        />
                      );
                    }
                  }) : initialMilestone.map((val, index) => {
                    return (<Milestone key={index}
                          current={index} showMilestones={() =>
                        this.props.showMilestonesEvent(val)
                      }   getMilestoneDetails={() =>
                        this.props.getMilestoneDetails(milestones)
                      }/>)
                    
                  })}
              </div>
              {this.state.tourcount === 3 && (
                <div ref={this.toolTip3}>
                  <ToolTip
                    toolTipLeft={"280px"}
                    toolTipBottom={"-110px"}
                    toolTipRight={"0px"}
                    left={"190px"}
                    top={"-12px"}
                    toolTipWidth={"410px"}
                    transform={"rotate(90deg)"}
                    handleModal={this.closeToolTip}
                    showScreen={false}
                    children={
                      <React.Fragment>
                        <div className={styles.toolTipHeader}>
                          Highlight your professional milestones
                        </div>
                        <div className={styles.toolTipBody}>
                          You can upto 5 major life events/achievements here!
                        </div>
                        <Button
                          type="primary"
                          backgroundColor={"#AD5DA3"}
                          fontColor={"#fff"}
                          height={30}
                          width={80}
                          label="Got It!"
                          borderRadius={2}
                          onClick={this.gotItHandler}
                        />
                      </React.Fragment>
                    }
                  />
                </div>
              )}
            </CenteredContent>
          </div>
          <div className={styles.journey}>
            <CenteredContent contentWidth="1200px">
              <div className={styles.usersJourney}>
                <div className={styles.summaryHeader}>
                  {firstName && lastName ? `${firstName}` : "User"}
                  's professional journey
                </div>
                <div
                  className={styles.editableOptions}
                  style={{ pointerEvents: "none", opacity: "0.5" }}
                  onClick={this.showFeedMenu}
                >
                  {/* <FeedMenu
                    data={unfollowedData}
                    showFeedMenu={this.state.showFeedMenu}
                  ></FeedMenu>{" "} */}
                </div>
                <div className={styles.milestoneList}>
                  {this.props.accomplishment
                    ? this.props.accomplishment
                    : "ADD ACOMPLISHMENTS"}
                </div>
                <div style={{ position: "relative" }}>
                  <div
                    className={styles.accomplishmentTag}
                    onClick={this.showWorkExpModal}
                  >
                    <div className={styles.boxIcon}></div>
                    <div className={styles.eduIcon}></div>
                    <div className={styles.profileIcon}></div>
                    <div className={styles.labelIcon}></div>
                  </div>
                  {this.state.tourcount === 4 && (
                    <div ref={this.toolTip4}>
                      {" "}
                      <ToolTip
                        toolTipLeft={"210px"}
                        toolTipTop={"-50px"}
                        left={"-8px"}
                        top={"60px"}
                        handleModal={this.closeToolTip}
                        showScreen={false}
                        children={
                          <React.Fragment>
                            <div className={styles.toolTipHeader}>
                              Narrate your story
                            </div>
                            <div className={styles.toolTipBody}>
                              You can add your
                              jobs/achievements/awards/education/certifications
                              on the platform. We’ll help you build your
                              professional timeline.
                            </div>
                            <Button
                              type="primary"
                              backgroundColor={"#AD5DA3"}
                              fontColor={"#fff"}
                              height={30}
                              width={80}
                              label="Got It!"
                              borderRadius={2}
                              onClick={this.gotItHandler}
                            />
                          </React.Fragment>
                        }
                      />
                    </div>
                  )}
                </div>
                <div className={styles.addAccomplishment}>
                  <div className={styles.jobSection}>
                    <div className={styles.jobIcon}></div>
                    <div style={{ width: "100%" }}>
                      <div className={styles.workSection}>
                        {" "}
                        {jobData ? (
                          <div>
                            {jobData &&
                              jobData.map(val => {
                                return (
                                  <React.Fragment>
                                    {" "}
                                    <div
                                      className={styles.editableOptions}
                                      onClick={() => this.showWorkMenu()}
                                      style={{
                                        pointerEvents: "none",
                                        opacity: "0.5"
                                      }}
                                    >
                                      <MyFeedMenu
                                        data={workExpData}
                                        showFeedMenu={this.state.showWorkMenu}
                                        handleEdit={this.handleEdit}
                                        handleDownload={this.handleDownload}
                                        handleShare={this.handleShare}
                                        showProfileModal={() =>
                                          this.props.showProfileModal({
                                            userDetails: user,
                                            summary: summary
                                          })
                                        }
                                        downloadDisabled={true}
                                        shareDisabled={true}
                                      ></MyFeedMenu>
                                    </div>
                                    <div className={styles.jobDescription}>
                                      <div
                                        style={{
                                          display: " flex",
                                          paddingBottom: "15px"
                                        }}
                                      >
                                        <div className={styles.jobTitle}>
                                          {!val.organization
                                            ? "Add Header"
                                            : val.organization}
                                        </div>
                                        <div
                                          className={styles.horizontalLine}
                                        />
                                        <div className={styles.jobDate}>
                                          {!val.startDate
                                            ? "Add Date"
                                            : val.startDate}
                                        </div>
                                      </div>
                                      <div className={styles.jobDetails}>
                                        <div className={styles.companyName}>
                                          {val.organization
                                            ? val.organization
                                            : "Add company Name"}
                                        </div>
                                        <div className={styles.companyLocation}>
                                          {val.location
                                            ? val.location
                                            : "Add company Location"}
                                        </div>
                                        <div
                                          className={styles.companyDescription}
                                        >
                                          {val.description
                                            ? val.description
                                            : "Add company Description"}
                                        </div>
                                      </div>
                                    </div>
                                  </React.Fragment>
                                );
                              })}
                          </div>
                        ) : (
                          <React.Fragment>
                            {" "}
                            <div
                              className={styles.editableOptions}
                              onClick={() => this.showWorkMenu()}
                              style={{ pointerEvents: "none", opacity: "0.5" }}
                            >
                              <MyFeedMenu
                                data={workExpData}
                                current={1}
                                activeIndex={this.state.activeIndex}
                                showFeedMenu={index =>
                                  this.state.showWorkMenu(index)
                                }
                                handleEdit={this.handleEdit}
                                handleDownload={this.handleDownload}
                                handleShare={this.handleShare}
                                showProfileModal={() =>
                                  this.props.showProfileModal({
                                    userDetails: user,
                                    summary: summary
                                  })
                                }
                                downloadDisabled={true}
                                shareDisabled={true}
                              ></MyFeedMenu>
                            </div>
                            <div className={styles.jobDescription}>
                              <div
                                style={{
                                  display: " flex",
                                  paddingBottom: "15px"
                                }}
                              >
                                <div className={styles.jobTitle}>
                                  {" Add Header"}
                                </div>
                                <div className={styles.horizontalLine} />
                                <div className={styles.jobDate}>
                                  {"Add Date"}
                                </div>
                              </div>
                              <div className={styles.jobDetails}>
                                <div className={styles.companyName}>
                                  {"Add company Name"}
                                </div>
                                <div className={styles.companyLocation}>
                                  {"Add company Location"}
                                </div>
                                <div className={styles.companyDescription}>
                                  {"Add company Description"}
                                </div>
                              </div>
                            </div>
                          </React.Fragment>
                        )}
                      </div>

                      {volunteerData &&
                        volunteerData.map(val => {
                          return (
                            <div className={styles.jobDescription}>
                              <div
                                style={{
                                  display: " flex",
                                  paddingBottom: "15px"
                                }}
                              >
                                <div className={styles.jobTitle}>
                                  {!val.organization
                                    ? "Add Header"
                                    : val.organization}
                                </div>
                                <div className={styles.horizontalLine} />
                                <div className={styles.jobDate}>
                                  {!val.startDate ? "Add Date" : val.startDate}
                                </div>
                              </div>
                              <div className={styles.jobDetails}>
                                <div className={styles.companyName}>
                                  {val.organization
                                    ? val.organization
                                    : "Add company Name"}
                                </div>
                                <div className={styles.companyLocation}>
                                  {val.location
                                    ? val.location
                                    : "Add company Location"}
                                </div>
                                <div className={styles.companyDescription}>
                                  {val.description
                                    ? val.description
                                    : "Add company Description"}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>

                  <div className={styles.jobSection}>
                    <div className={styles.educationIcon}></div>
                    <div>
                      {educationData &&
                        educationData.map(val => {
                          return (
                            <div className={styles.jobDescription}>
                              <div
                                style={{
                                  display: " flex",
                                  paddingBottom: "15px"
                                }}
                              >
                                <div className={styles.jobTitle}>
                                  {!val.institute
                                    ? "Add Header"
                                    : val.institute}
                                </div>
                                <div className={styles.horizontalLine} />
                                <div className={styles.jobDate}>
                                  {!val.startDate
                                    ? "Add Start Date"
                                    : val.startDate}
                                  {/* <div className={styles.horizontalLine} /> */}
                                  {/* {!val.endDate ? "Add End Date" : val.endDate} */}
                                </div>
                              </div>
                              <div className={styles.jobDetails}>
                                <div className={styles.companyName}>
                                  {val.institute
                                    ? val.institute
                                    : "Add institue Name"}
                                </div>
                                <div className={styles.companyLocation}>
                                  {val.fieldOfStudy
                                    ? val.fieldOfStudy
                                    : "Add Field of Study"}
                                </div>
                                <div className={styles.companyDescription}>
                                  {val.description
                                    ? val.description
                                    : "Add institue Description"}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                  <div className={styles.jobSection}>
                    <div className={styles.achievementIcon}></div>
                    <div>
                      {certificationData &&
                        certificationData.map(val => {
                          return (
                            <div className={styles.jobDescription}>
                              <div
                                style={{
                                  display: " flex",
                                  paddingBottom: "15px"
                                }}
                              >
                                <div className={styles.jobTitle}>
                                  {!val.ceritificationName
                                    ? "Add ceritificationName"
                                    : val.ceritificationName}
                                </div>
                                <div className={styles.horizontalLine} />
                                <div className={styles.jobDate}>
                                  {!val.issueDate
                                    ? "Start Date"
                                    : val.issueDate}
                                </div>{" "}
                                {/* <div className={styles.horizontalLine} />
                                <div className={styles.jobDate}>
                                  {!val.expiryDate
                                    ? "End Date"
                                    : val.expiryDate}
                                </div> */}
                              </div>
                              <div className={styles.jobDetails}>
                                <div className={styles.companyName}>
                                  {val.ceritificationName
                                    ? val.ceritificationName
                                    : "Add ceritification Name"}
                                </div>
                                <div className={styles.companyLocation}>
                                  {val.cerificateId
                                    ? val.cerificateId
                                    : "Add cerificateId"}
                                </div>
                                <div className={styles.companyDescription}>
                                  {val.certificateUrl
                                    ? val.certificateUrl
                                    : "Add certificateUrl"}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      {publicationData &&
                        publicationData.map(val => {
                          return (
                            <div className={styles.jobDescription}>
                              <div
                                style={{
                                  display: "flex",
                                  paddingBottom: "15px"
                                }}
                              >
                                <div className={styles.jobTitle}>
                                  {!val.title ? "Add title" : val.title}
                                </div>
                                <div className={styles.horizontalLine} />
                                <div className={styles.jobDate}>
                                  {!val.publicationDate
                                    ? "Start Date"
                                    : val.publicationDate}
                                </div>{" "}
                                {/* <div className={styles.horizontalLine} />
                                <div className={styles.jobDate}>
                                  {!val.expiryDate
                                    ? "End Date"
                                    : val.expiryDate}
                                </div> */}
                              </div>
                              <div className={styles.jobDetails}>
                                <div className={styles.companyName}>
                                  {val.authors ? val.authors : "Add authors"}
                                </div>
                                <div className={styles.companyLocation}>
                                  {val.publisher
                                    ? val.publisher
                                    : "Add publisher"}
                                </div>
                                <div className={styles.companyDescription}>
                                  {val.publicationUrl
                                    ? val.publicationUrl
                                    : "Add certificateUrl"}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      {patentData &&
                        patentData.map(val => {
                          return (
                            <div className={styles.jobDescription}>
                              <div
                                style={{
                                  display: "flex",
                                  paddingBottom: "15px"
                                }}
                              >
                                <div className={styles.jobTitle}>
                                  {!val.title ? "Add title" : val.title}
                                </div>
                                <div className={styles.horizontalLine} />
                                <div className={styles.jobDate}>
                                  {!val.publicationDate
                                    ? "Start Date"
                                    : val.publicationDate}
                                </div>{" "}
                                {/* <div className={styles.horizontalLine} />
                                <div className={styles.jobDate}>
                                  {!val.expiryDate
                                    ? "End Date"
                                    : val.expiryDate}
                                </div> */}
                              </div>
                              <div className={styles.jobDetails}>
                                <div className={styles.companyName}>
                                  {val.authors ? val.authors : "Add authorsaaa"}
                                </div>
                                <div className={styles.companyLocation}>
                                  {val.publisher
                                    ? val.publisher
                                    : "Add publisher"}
                                </div>
                                <div className={styles.companyDescription}>
                                  {val.publicationUrl
                                    ? val.publicationUrl
                                    : "Add certificateUrl"}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                  <div className={styles.jobSection}>
                    <div className={styles.awardsIcon}></div>
                    <div>
                      {awardsData &&
                        awardsData.map(val => {
                          return (
                            <div className={styles.jobDescription}>
                              <div
                                style={{
                                  display: " flex",
                                  paddingBottom: "15px"
                                }}
                              >
                                <div className={styles.jobTitle}>
                                  {!val.title ? "Add Header" : val.title}
                                </div>
                                <div className={styles.horizontalLine} />
                                <div className={styles.jobDate}>
                                  {!val.issueDate ? "Add Date" : val.issueDate}
                                </div>
                              </div>
                              <div className={styles.jobDetails}>
                                <div className={styles.companyName}>
                                  {val.issuer ? val.issuer : "Add Issuer Name"}
                                </div>
                                <div className={styles.companyLocation}>
                                  {val.eventName
                                    ? val.eventName
                                    : "Add eventName"}
                                </div>
                                <div className={styles.companyDescription}>
                                  {val.description
                                    ? val.description
                                    : "Add Description"}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                  <div className={styles.noJobSection}>
                    <div className={styles.jobIcon}></div>
                    <div>
                      <div className={styles.jobDescription}>
                        <div>
                          <div className={styles.jobTitle}>
                            Add recent Job Description/Education/Achievements
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.skillsLanguages}>
                <div style={{ position: "relative" }}>
                  {this.state.tourcount === 5 && (
                    <div ref={this.toolTip5}>
                      {" "}
                      <ToolTip
                        right={"-8px"}
                        top={"70px"}
                        toolTipLeft={"-540px"}
                        toolTipTop={"-30px"}
                        transform={"rotate(180deg)"}
                        handleModal={this.closeToolTip}
                        showScreen={false}
                        children={
                          <React.Fragment>
                            <div className={styles.toolTipHeader}>
                              Show us what are you skilled at!
                            </div>
                            <div className={styles.toolTipBody}>
                              You can add your skills here. Let other users know
                              what are your strengths
                            </div>
                            <Button
                              type="primary"
                              backgroundColor={"#AD5DA3"}
                              fontColor={"#fff"}
                              height={30}
                              width={80}
                              label="Got It!"
                              borderRadius={2}
                              onClick={this.gotItHandler}
                            />
                          </React.Fragment>
                        }
                      />
                    </div>
                  )}
                  <Skills
                    title={"Skills"}
                    details={this.props.userSkillGetMessage}
                    professionalSkills={professionalSkills}
                    {...this.props}
                    showAddSkillModal={this.props.showAddSkillModal}
                  />
                </div>
                <div style={{ position: "relative" }}>
                  <Skills
                    title={"Languages"}
                    languagedetails={this.props.userLanguageGetMessage}
                    {...this.props}
                    professionalLanguages={professionalLanguages}
                    showAddLanguagesModal={this.props.showAddLanguagesModal}
                  />
                  {this.state.tourcount === 6 && (
                    <div ref={this.toolTip6}>
                      {" "}
                      <ToolTip
                        toolTipLeft={"-510px"}
                        toolTipTop={"-40px"}
                        right={"-8px"}
                        top={"80px"}
                        transform={"rotate(180deg)"}
                        handleModal={this.closeToolTip}
                        showScreen={false}
                        children={
                          <React.Fragment>
                            <div className={styles.toolTipHeader}>
                              How many languages do you know?
                            </div>
                            <div className={styles.toolTipBody}>
                              Add the laguages that you know. (Bilingual,
                              Elementry, advanced, etc)
                            </div>
                            <Button
                              type="primary"
                              backgroundColor={"#AD5DA3"}
                              fontColor={"#fff"}
                              height={30}
                              width={80}
                              label="Got It!"
                              borderRadius={2}
                              onClick={this.gotItHandler}
                            />
                          </React.Fragment>
                        }
                      />
                    </div>
                  )}
                </div>
                <div style={{ position: "relative" }}>
                  {" "}
                  {/* {this.state.tourcount === 7 && (
                    <div>
                      {" "}
                      <ToolTip
                        toolTipLeft={"-420px"}
                        toolTipTop={"-20px"}
                        right={"-8px"}
                        top={"60px"}
                        transform={"rotate(180deg)"}
                        handleModal={this.closeToolTip}
                        showScreen={false}
                        children={
                          <React.Fragment>
                            <div className={styles.toolTipHeader}>
                              Tell us your interests
                            </div>
                            <div className={styles.toolTipBody}>
                              Add your interests to make the profile more
                              interesting
                            </div>
                            <Button
                              type="primary"
                              backgroundColor={"#AD5DA3"}
                              fontColor={"#fff"}
                              height={30}
                              width={80}
                              label="Got It!"
                              borderRadius={2}
                              onClick={this.gotItHandler}
                            />
                          </React.Fragment>
                        }
                      />
                    </div>
                  )} */}
                  {/* <Skills
                    title={"Interests"}
                    showAddInterestModal={this.props.showAddInterestModal}
                  /> */}
                </div>
              </div>
            </CenteredContent>
          </div>{" "}
          <div
            className={
              this.state.tourcount > 0 || this.state.closeBanner === false
                ? styles.removebanner
                : styles.notificationToolTip
            }
          >
            <ToolTip
              handleModal={this.closeBannerToolTip}
              showScreen={this.state.closeBanner}
              children={
                <div className={styles.toolTipBanner}>
                  <div className={styles.notifyIcon}></div>Get to know what can
                  be done with your The Star In Me Profile.
                  <div
                    className={styles.toolTipStart}
                    onClick={() => this.startTour()}
                  >
                    Start Tour
                  </div>
                </div>
              }
              toolTipBottom={"0"}
              toolTipWidth={"100vw"}
              textWidth={"100%"}
              displayTriangle={"none"}
            />
          </div>
        </div>

        <MobileNavigatorHeader history={this.props.history} />
      </React.Fragment>
    );
  }
}
