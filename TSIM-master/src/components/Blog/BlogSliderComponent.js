import React, { Component } from "react";
import styles from "./BlogSliderComponent.css";
import img1 from "../Images/b.jpg";
import img2 from "../Images/f.jpg";
import img3 from "../Images/p.jpg";
import img4 from "../Images/p.jpg";
import Image from "../../core/Image";
import BlogSlider from "./BlogSlider";
import * as Cookie from "../../utils/Cookie";
import { ACCESS_TOKEN, BLOG_COUNT } from "../../utils/constant";
import { BLOG_DETAILS_WITHOUT_ID } from "../../utils/constant.js";
class BlogSliderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stopSlider: false
    };
  }
  showBlogSelector = () => {
    if (this.props.showBlogSelector) {
      this.setState({ stopSlider: true });
      this.props.closeModal();
      this.props.showBlogSelector();
    }
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
  //   showBlogDetailsModule = () => {
  //     if (this.props.showBlogDetailsModule) {
  //       this.props.showBlogDetailsModule();
  //     }
  //   };
  render() {
    const allBlogsDetails = this.props && this.props.allBlogsDetails;
    return (
      <React.Fragment>
        <div className={styles.baseWrapper}>
          <div className={styles.base}>
            <div className={styles.sliderWrapper}>
              <BlogSlider
                stepsInfo={stepsInfo}
                stopSlider={this.state.stopSlider}
                {...this.props}
                reachedEnd={() => this.showBlogSelector()}
              >
                {stepsInfo &&
                  stepsInfo.map((value, i) => {
                    return (
                      <div className={styles.topContainer}>
                        <div className={styles.innerImage}>
                          <div className={styles.feed}>
                            {/* <Image image={value.img} /> */}
                            <Image
                              image={
                                allBlogsDetails &&
                                allBlogsDetails[i] &&
                                allBlogsDetails[i].imageUrl
                              }
                            />
                            <div className={styles.overlay}>
                              <div
                                className={styles.bannerContentBase}
                                onClick={() => {
                                  this.handleredirect(
                                    `${BLOG_DETAILS_WITHOUT_ID}/${allBlogsDetails &&
                                      allBlogsDetails[i] &&
                                      allBlogsDetails[i].blogId}`
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
                                      allBlogsDetails[i] &&
                                      allBlogsDetails[i].labels[0]}
                                  </div>
                                  {allBlogsDetails &&
                                    allBlogsDetails[i] &&
                                    allBlogsDetails[i].labels.length > 1 && (
                                      <div className={styles.tagButton}>
                                        +
                                        {allBlogsDetails &&
                                          allBlogsDetails[i] &&
                                          allBlogsDetails[i].labels.length}
                                      </div>
                                    )}
                                </div>
                                {/* );
                            })} */}
                                <div className={styles.heading}>
                                  {allBlogsDetails &&
                                    allBlogsDetails[i] &&
                                    allBlogsDetails[i].title}
                                </div>
                                <div className={styles.task}>
                                  {allBlogsDetails &&
                                    allBlogsDetails[i] &&
                                    allBlogsDetails[i].author}
                                  <span className={styles.dot} />{" "}
                                  {allBlogsDetails &&
                                    allBlogsDetails[i] &&
                                    allBlogsDetails[i].duration}
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
                        </div>
                      </div>
                    );
                  })}
              </BlogSlider>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BlogSliderComponent;

export const stepsInfo = [
  {
    id: 1,
    stepNumber: 1,
    img: img1
  },
  {
    id: 2,
    stepNumber: 2,
    img: img2
  },

  {
    id: 3,
    stepNumber: 3,
    img: img3
  }
];
