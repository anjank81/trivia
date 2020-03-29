import React, { Component } from "react";
import styles from "./BlogFeed.css";
import Card from "../general/Card";
import CenteredContent from "../../core/CenteredContent";
import SignUpBar from "./SignUpBar";
import PrimaryHeaderContainer from "../HomePage/container/PrimaryHeaderContainer";
import { BLOG_DETAILS_WITHOUT_ID } from "../../utils/constant.js";
import DesktopOnly from "../general/DesktopOnly";
import MobileOnly from "../general/MobileOnly";
import BlogSliderComponent from "./BlogSliderComponent";
import FooterContainer from "../Footer/FooterContainer";
import SecondaryLoader from "../general/SecondaryLoader";
import * as Cookie from "../../utils/Cookie";
import {
  ACCESS_TOKEN,
  USER_DETAILS,
  isUserLogedIn,
  BLOG_COUNT
} from "../../utils/constant";
import Image from "../../core/Image";
import SignUpBarContainer from "./SignUpBarContainer";
import Button from "../../core/Button";

export default class BlogFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }
  componentDidMount = () => {
    if (this.props.getAllBlogs) {
      this.props.getAllBlogs(this.state.page);
    }
  };
  handlePagination = () => {
    this.props.getAllBlogs(this.state.page + 1, this.props.allBlogsDetails);
    this.setState({ page: this.state.page + 1 });
  };

  handleredirect = val => {
    let isUserLogedIn = Cookie.getCookie(ACCESS_TOKEN) ? true : false;
    let blogcount = localStorage.getItem(BLOG_COUNT);
    if (isUserLogedIn) {
      if (this.props.history) {
        this.props.history.push(`${val}`);
      }
    } else {
      if (blogcount < 1) {
        if (this.props.history) {
          this.props.history.push(`${val}`);
        }
      } else {
        this.props.showSignUpModule();
      }
    }
  };
  render() {
    let isUserLogedIn = Cookie.getCookie(ACCESS_TOKEN) ? true : false;
    let userDetails = Cookie.getCookie(USER_DETAILS);
    const allBlogsDetails = this.props && this.props.allBlogsDetails;

    return (
      <React.Fragment>
        {this.props.loading ? (
          <SecondaryLoader />
        ) : (
          <div className={styles.base}>
            <div className={styles.headerHolder}>
              <div className={styles.fixedHeader}>
                <PrimaryHeaderContainer />
              </div>
            </div>

            <CenteredContent>
              <MobileOnly>
                <BlogSliderComponent {...this.props}>
                  <div className={styles.banner}></div>
                </BlogSliderComponent>
              </MobileOnly>

              <div className={styles.container}>
                <DesktopOnly>
                  <div className={styles.bannerBase}>
                    <div className={styles.bannerContainer}>
                      <div className={styles.banner}>
                        <Image
                          image={
                            allBlogsDetails &&
                            allBlogsDetails[0] &&
                            allBlogsDetails[0].imageUrl
                          }
                        />
                      </div>
                      <div className={styles.overlay}>
                        <div
                          className={styles.bannerContentBase}
                          onClick={() => {
                            this.handleredirect(
                              `${BLOG_DETAILS_WITHOUT_ID}/${allBlogsDetails &&
                                allBlogsDetails[0] &&
                                allBlogsDetails[0].blogId}`
                            );
                          }}
                        >
                          {/* {allBlogsDetails &&
                            allBlogsDetails[0] &&
                            allBlogsDetails[0].labels.map(tag => { */}
                          {/* return ( */}
                          {/* {console.log(
                            "banner1",
                            allBlogsDetails &&
                              allBlogsDetails[0] &&
                              allBlogsDetails[0].labels[0]
                          )} */}
                          <div className={styles.tagConatiner}>
                            <div className={styles.tagButton}>
                              {allBlogsDetails &&
                                allBlogsDetails[0] &&
                                allBlogsDetails[0].labels[0]}
                            </div>
                            {allBlogsDetails &&
                              allBlogsDetails[0] &&
                              allBlogsDetails[0].labels.length > 1 && (
                                <div className={styles.tagButton}>
                                  +
                                  {allBlogsDetails &&
                                    allBlogsDetails[0] &&
                                    allBlogsDetails[0].labels.length}
                                </div>
                              )}
                          </div>
                          {/* );
                            })} */}
                          <div className={styles.heading}>
                            {allBlogsDetails &&
                              allBlogsDetails[0] &&
                              allBlogsDetails[0].title}
                          </div>
                          <div className={styles.task}>
                            {allBlogsDetails &&
                              allBlogsDetails[0] &&
                              allBlogsDetails[0].author}
                            <span className={styles.dot} />{" "}
                            {allBlogsDetails &&
                              allBlogsDetails[0] &&
                              allBlogsDetails[0].duration}
                          </div>
                          {/* <div className={styles.description}>
                            When was the last time you took a moment for
                            yourself? Most of us tend to lead super-charged
                            lives that are incredibly hectic. And if we do
                            manage…
                          </div> */}
                          <div className={styles.button}>Read More</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.splitbannerContainer}>
                      <div
                        className={styles.splitbanner1}
                        onClick={() => {
                          this.handleredirect(
                            `${BLOG_DETAILS_WITHOUT_ID}/${allBlogsDetails &&
                              allBlogsDetails[1] &&
                              allBlogsDetails[1].blogId}`
                          );
                        }}
                      >
                        <Image
                          image={
                            allBlogsDetails &&
                            allBlogsDetails[1] &&
                            allBlogsDetails[1].imageUrl
                          }
                        />
                        <div className={styles.splitbannerOverlay}>
                          <div className={styles.bannerContentBase}>
                            {/* {allBlogsDetails &&
                              allBlogsDetails[1] &&
                              allBlogsDetails[1].labels.map(tag => {
                                return ( */}
                            <div className={styles.tagConatiner}>
                              <div className={styles.tagButton}>
                                {allBlogsDetails &&
                                  allBlogsDetails[1] &&
                                  allBlogsDetails[1].labels[0]}
                              </div>
                              {allBlogsDetails &&
                                allBlogsDetails[1] &&
                                allBlogsDetails[1].labels.length > 1 && (
                                  <div className={styles.tagButton}>
                                    +
                                    {allBlogsDetails &&
                                      allBlogsDetails[1] &&
                                      allBlogsDetails[1].labels.length}
                                  </div>
                                )}
                            </div>
                            {/* );
                              })} */}
                            <div className={styles.splitbannerHeading}>
                              {allBlogsDetails &&
                                allBlogsDetails[1] &&
                                allBlogsDetails[1].title}
                            </div>
                            <div className={styles.task}>
                              {allBlogsDetails &&
                                allBlogsDetails[1] &&
                                allBlogsDetails[1].author}{" "}
                              <span className={styles.dot} />{" "}
                              {allBlogsDetails &&
                                allBlogsDetails[1] &&
                                allBlogsDetails[1].duration}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className={styles.splitbanner2}
                        onClick={() => {
                          this.handleredirect(
                            `${BLOG_DETAILS_WITHOUT_ID}/${allBlogsDetails &&
                              allBlogsDetails[2] &&
                              allBlogsDetails[2].blogId}`
                          );
                        }}
                      >
                        <Image
                          image={
                            allBlogsDetails &&
                            allBlogsDetails[2] &&
                            allBlogsDetails[2].imageUrl
                          }
                        />
                        <div className={styles.splitbannerOverlay}>
                          <div className={styles.bannerContentBase}>
                            {/* {allBlogsDetails &&
                              allBlogsDetails[2] &&
                              allBlogsDetails[2].labels.map(tag => {
                                return ( */}
                            <div className={styles.tagConatiner}>
                              <div className={styles.tagButton}>
                                {allBlogsDetails &&
                                  allBlogsDetails[2] &&
                                  allBlogsDetails[2].labels[0]}
                              </div>
                              {allBlogsDetails &&
                                allBlogsDetails[2] &&
                                allBlogsDetails[2].labels.length > 1 && (
                                  <div className={styles.tagButton}>
                                    +
                                    {allBlogsDetails &&
                                      allBlogsDetails[2] &&
                                      allBlogsDetails[2].labels.length}
                                  </div>
                                )}
                            </div>
                            {/* );
                              })} */}
                            <div className={styles.splitbannerHeading}>
                              {allBlogsDetails &&
                                allBlogsDetails[2] &&
                                allBlogsDetails[2].title}
                            </div>
                            <div className={styles.task}>
                              {allBlogsDetails &&
                                allBlogsDetails[2] &&
                                allBlogsDetails[2].author}
                              <span className={styles.dot} />{" "}
                              {allBlogsDetails &&
                                allBlogsDetails[2] &&
                                allBlogsDetails[2].duration}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DesktopOnly>
                <div className={styles.storiesBase}>
                  <div className={styles.storiesHeading}>
                    FEATURED RESOURCES
                  </div>

                  <div className={styles.storiesContainer}>
                    {allBlogsDetails &&
                      allBlogsDetails.map(val => (
                        <div className={styles.card}>
                          <Card
                            imageUrl={val.imageUrl}
                            city={val.city}
                            locality={val.locality}
                            name={val.author}
                            tags={val.labels}
                            time={val.duration}
                            heading={val.title}
                            shared={val.shared ? val.shared : 0}
                            likes={val.noOfLikes}
                            bookmarks={val.noOfBookmarks}
                            comments={val.noOfComments}
                            handleredirect={this.handleredirect}
                            redirectUrl={`${BLOG_DETAILS_WITHOUT_ID}/${val.blogId}`}
                            isUserLogedIn={isUserLogedIn}
                            userDetails={userDetails}
                            blogId={val.blogId}
                            postBlogLike={this.props.postBlogLike}
                            blogLikeDetails={
                              this.props.blogLikeDetails &&
                              this.props.blogLikeDetails.data
                            }
                            userLiked={val.userLiked}
                            postBlogBookmark={this.props.postBlogBookmark}
                            blogBookmarkDetails={this.props.blogBookmarkDetails}
                          />
                        </div>
                      ))}
                  </div>

                  {this.props.allBlogsDetails &&
                    this.state.page * 10 <=
                      this.props.allBlogsDetails.length && (
                      <div className={styles.buttonContainerForLoadMore}>
                        <Button
                          type="primary"
                          backgroundColor={"#ad5da3"}
                          borderColor="#ad5da3"
                          fontColor={"#fff"}
                          height={50}
                          width={210}
                          label="Load More"
                          borderRadius={10}
                          onClick={() => this.handlePagination()}
                        />
                      </div>
                    )}
                </div>
                {!isUserLogedIn && (
                  <DesktopOnly>
                    <div className={styles.signUpBarContainer}>
                      <SignUpBarContainer {...this.props} />
                    </div>
                  </DesktopOnly>
                )}
              </div>
              {!isUserLogedIn && (
                <MobileOnly>
                  <div className={styles.signUpBarContainer}>
                    <SignUpBarContainer {...this.props} />
                  </div>
                </MobileOnly>
              )}
            </CenteredContent>
            <div className={styles.footerSection}>
              <FooterContainer />
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
