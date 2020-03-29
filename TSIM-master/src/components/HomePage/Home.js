import React from "react";
import styles from "./Home.css";
import image0 from "../../images/Welcome-Screen-min.jpg";
import image1 from "../../images/Build-your-profile-min.jpg";
import image2 from "../../images/Resources-min.jpg";
import image3 from "../../images/Events-min.jpg";
import image4 from "../../images/Seek-guidance-min.jpg";
import Button from "../../core/Button.js";
import HomepageEventsCarousel from "../general/HomePageEventsCarousel.";
import Card from "../general/EventCard";
import BlogCardForHomePage from "../general/BlogCardForHomePage";
import HomePageBlogCarousel from "../general/HomePageBlogCarousel";
import HomePageBannerCarousel from "../general/HomePageBannerCarousel";
import Footer from "../Footer/Footer";
import CenteredContent from "../../core/CenteredContent";
import PrimaryHeaderContainer from "./container/PrimaryHeaderContainer";
import SecondaryHeaderContainer from "./container/SecondaryHeaderContainer";
import Media from "react-media";
import DesktopOnly from "../general/DesktopOnly";
import MobileOnly from "../general/MobileOnly";
import ProgressBar from "../../core/ProgressBar";
import FooterContainer from "../Footer/FooterContainer";
import {
  BLOG_DETAILS_WITHOUT_ID,
  BLOG,
  EVENT,
  EVENT_DETAILS_WITHOUT_ID,
  SEEK_GUIDE,
  VISUAL_PROFILE
} from "../../utils/constant";
import * as Cookie from "../../utils/Cookie";
import {
  ACCESS_TOKEN,
  USER_DETAILS,
  isUserLogedIn,
  BLOG_COUNT
} from "../../utils/constant";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.homeRef = React.createRef();
    this.state = {
      slideIndex: 0,
      lastScrollY: 0,
      maxSlide: 4,
      position: 0,
      goback: false,
      stopSlide: false
    };
  }

  handleCarousel = currentSlide => {
    this.setState({
      stopSlide: true,
      position: currentSlide,
      slideIndex: currentSlide
    });
  };

  handleScroll = () => {
    this.setState({ lastScrollY: window.scrollY });
  };

  incrementTime = () => {
    if (this.state.slideIndex < this.state.maxSlide) {
      this.setState({
        slideIndex: this.state.slideIndex + 1
      });
    } else {
      this.setState({
        slideIndex: 1
      });
    }
  };
  autoscroll = () => {
    if (!this.state.stopSlide) {
      if (this.state.position === 0) {
        this.setState({ goback: false });
      }
      if (this.state.position < this.state.maxSlide && !this.state.goback) {
        this.setState({
          position: this.state.position + 1
        });
        if (this.state.position === this.state.maxSlide) {
          this.setState({
            goback: true
          });
        }
      } else if (this.state.goback) {
        this.setState({
          goback: true,
          position: this.state.position - 1
        });
      }
    }
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
    this.props.getAllEvents();
    this.props.getAllBlogs();
    if (this.state.position <= this.state.maxSlide) {
      var initialPos = setInterval(() => {
        this.autoscroll();
      }, 5000);
    }
    if (this.state.position > this.state.maxSlide) {
      clearInterval(initialPos);
    }
  };
  handleEventRedirect = val => {
    if (this.props.history) {
      this.props.history.push(`${val}`);
    }
  };
  handleBlogRediraction = val => {
    let isUserLogedIn = Cookie.getCookie(ACCESS_TOKEN) ? true : false;
    let blogcount = localStorage.getItem(BLOG_COUNT);
    if (!isUserLogedIn) {
      if (blogcount < 1) {
        if (this.props.history) {
          this.props.history.push(`${val}`);
        }
      } else {
        this.props.showSignUpModule();
      }
    }
  };
  handleredirect = val => {
    if (this.props.history) {
      this.props.history.push(`${val}`);
    }
  };

  render() {
    const translationAmount = -(100 * this.state.position);
    const transform = `translateX(${translationAmount}%)`;
    const style = {
      transform: transform
    };

    return (
      <div className={styles.base} ref={this.homeRef}>
        <div
          className={
            this.state.lastScrollY > 100 ? styles.fixedHeader : styles.header
          }
        >
          {this.state.lastScrollY > 100 ? (
            <PrimaryHeaderContainer />
          ) : (
            <SecondaryHeaderContainer history={this.props.history} />
          )}
        </div>
        <div className={styles.imgslide}>
          <div className={styles.children} style={style}>
            <div className={styles.feed}>
              <div
                style={{
                  backgroundImage: `url(${image0})`
                }}
                src={image0}
                className={styles.homepageCarousal}
              />
              <div className={styles.text}>
                <div className={styles.title}>Welcome to The star in me</div>{" "}
                <div className={styles.subText}>
                  Designed to be a career advancement platform for women, The
                  star in me provides a variety of resources to equip women on
                  their professional journeys
                  <br />
                  <br />
                  For organizations, The star in me is a diversity partner that
                  helps attract, engage and retain diverse talent.
                </div>
              </div>
            </div>

            <div className={styles.feed}>
              <div
                style={{
                  backgroundImage: `url(${image1})`
                }}
                className={styles.homepageCarousal}
                src={image1}
              />
              <div className={styles.text}>
                <div className={styles.title}>Create your best profile</div>

                <div className={styles.subText}>
                  Wouldn't it be amazing to access a unique profile builder to
                  create a visual resume and showcase yourself using videos,
                  pictures and stories?
                </div>
                <React.Fragment>
                  <Media query="(min-width:1024px)">
                    <div className={styles.buttonSection}>
                      <Button
                        borderRadius={5}
                        backgroundColor={"#AD5DA3"}
                        label="BUILD VISUAL PROFILE"
                        fontSize={"22px"}
                        lineHeight={"26px"}
                        width={"298px"}
                        height={"70px"}
                        fontFamily={"bold"}
                        onClick={() => this.props.showSignUpModule()}
                      />
                      <div
                        className={styles.link}
                        onClick={() => this.handleredirect(VISUAL_PROFILE)}
                      >
                        Learn more
                      </div>
                    </div>
                  </Media>
                  <Media query="(max-width:768px)">
                    <div className={styles.buttonSection}>
                      <Button
                        borderRadius={5}
                        backgroundColor={"#AD5DA3"}
                        label="BUILD VISUAL PROFILE"
                        fontSize={"14px"}
                        lineHeight={"22px"}
                        width={"auto"}
                        height={"40px"}
                        fontFamily={"bold"}
                        onClick={() => this.props.showSignUpModule()}
                      />
                      <div
                        className={styles.link}
                        onClick={() => this.handleredirect(VISUAL_PROFILE)}
                      >
                        Learn more
                      </div>
                    </div>
                  </Media>
                </React.Fragment>
              </div>
            </div>

            <div className={styles.feed}>
              <div
                style={{
                  backgroundImage: `url(${image2})`
                }}
                src={image2}
                className={styles.homepageCarousal}
              />
              <div className={styles.text}>
                <div className={styles.title}>Seek Guidance</div>{" "}
                <div className={styles.subText}>
                  If you need career guidance, then look no further. You can
                  find a career guide who has walked your path and can guide you
                  on your journey.
                </div>
                <React.Fragment>
                  <DesktopOnly>
                    <div className={styles.buttonSection}>
                      <Button
                        borderRadius={5}
                        backgroundColor={"#AD5DA3"}
                        label="SEEK GUIDANCE"
                        fontSize={"22px"}
                        lineHeight={"26px"}
                        width={"298px"}
                        height={"70px"}
                        fontFamily={"bold"}
                        onClick={() => this.props.showSignUpModule()}
                      />{" "}
                      <div
                        className={styles.link}
                        onClick={() => this.handleredirect(SEEK_GUIDE)}
                      >
                        Learn more
                      </div>
                    </div>{" "}
                  </DesktopOnly>
                  <MobileOnly>
                    {" "}
                    <div className={styles.buttonSection}>
                      <Button
                        borderRadius={5}
                        backgroundColor={"#AD5DA3"}
                        label="SEEK GUIDANCE"
                        fontSize={"14px"}
                        lineHeight={"22px"}
                        width={"auto"}
                        height={"40px"}
                        fontFamily={"bold"}
                        onClick={() => this.props.showSignUpModule()}
                      />{" "}
                      <div
                        className={styles.link}
                        onClick={() => this.handleredirect(SEEK_GUIDE)}
                      >
                        Learn More
                      </div>
                    </div>{" "}
                  </MobileOnly>
                </React.Fragment>
              </div>
            </div>

            <div className={styles.feed}>
              <div
                style={{
                  backgroundImage: `url(${image3})`
                }}
                src={image3}
                className={styles.homepageCarousal}
              />
              <div className={styles.text}>
                <div className={styles.title}>Find Interesting Events</div>
                <div className={styles.subText}>
                  There is immense value in networking and discussing new
                  concepts. Do you want to find events that might interest you?
                  <br />
                  <br />
                  View and register for events that interest you.
                </div>
                <React.Fragment>
                  <DesktopOnly>
                    <div className={styles.buttonSection}>
                      <Button
                        borderRadius={5}
                        backgroundColor={"#AD5DA3"}
                        label="REGISTER FOR AN EVENT"
                        fontSize={"22px"}
                        lineHeight={"26px"}
                        width={"298px"}
                        height={"70px"}
                        fontFamily={"bold"}
                        onClick={() =>
                          this.props.showSignUpModule({
                            title1: "Sign up",
                            title2: "to view and register for events"
                          })
                        }
                      />
                      <div
                        className={styles.link}
                        onClick={() => this.handleredirect(EVENT)}
                      >
                        View events
                      </div>
                    </div>{" "}
                  </DesktopOnly>
                  <MobileOnly>
                    <div className={styles.buttonSection}>
                      <Button
                        borderRadius={5}
                        backgroundColor={"#AD5DA3"}
                        label="REGISTER FOR AN EVENT"
                        fontSize={"14px"}
                        lineHeight={"22px"}
                        width={"auto"}
                        height={"40px"}
                        fontFamily={"bold"}
                        onClick={() =>
                          this.props.showSignUpModule({
                            title1: "Sign up",
                            title2: "to view and register for events"
                          })
                        }
                      />
                      <div
                        className={styles.link}
                        onClick={() => this.handleredirect(EVENT)}
                      >
                        View all events
                      </div>
                    </div>{" "}
                  </MobileOnly>
                </React.Fragment>
              </div>
            </div>

            <div className={styles.feed}>
              <div
                style={{
                  backgroundImage: `url(${image4})`
                }}
                src={image4}
                className={styles.homepageCarousal}
              />

              <div className={styles.text}>
                <div className={styles.title}>Featured Resources</div>
                <div className={styles.subText}>
                  Are you tired of wading through multiple channels to find
                  relevant content and resources?
                  <br />
                  <br />
                  Let us curate resources for you.
                </div>
                <React.Fragment>
                  <DesktopOnly>
                    {" "}
                    <div className={styles.buttonSection}>
                      {" "}
                      <Button
                        borderRadius={5}
                        backgroundColor={"#AD5DA3"}
                        label="ACCESS RESOURCES"
                        fontSize={"22px"}
                        lineHeight={"26px"}
                        width={"298px"}
                        height={"70px"}
                        fontFamily={"bold"}
                        onClick={() =>
                          this.props.showSignUpModule({
                            title1: "Sign up",
                            title2: " to access curated resources"
                          })
                        }
                      />
                      <div
                        className={styles.link}
                        onClick={() => this.handleredirect(BLOG)}
                      >
                        Learn more
                      </div>
                    </div>
                  </DesktopOnly>
                  <MobileOnly>
                    {" "}
                    <div className={styles.buttonSection}>
                      {" "}
                      <Button
                        borderRadius={5}
                        backgroundColor={"#AD5DA3"}
                        label="READ OUR BLOGS"
                        fontSize={"14px"}
                        lineHeight={"22px"}
                        width={"auto"}
                        height={"40px"}
                        fontFamily={"bold"}
                        onClick={() => this.props.showSignUpModule()}
                      />
                      <div
                        className={styles.link}
                        onClick={() => this.handleredirect(BLOG)}
                      >
                        View all blogs
                      </div>
                    </div>
                  </MobileOnly>
                </React.Fragment>
              </div>
            </div>
          </div>
          <React.Fragment>
            <Media query="(max-width:767px)">
              <div className={styles.navButtonSection}>
                <React.Fragment>
                  {" "}
                  <HomePageBannerCarousel>
                    <div
                      className={
                        this.state.position === 1
                          ? styles.activeNavButton
                          : styles.navButton
                      }
                      onClick={() => this.handleCarousel(1)}
                    >
                      BUILD
                      <br /> VISUAL PROFILE
                    </div>
                    <div
                      className={
                        this.state.position === 2
                          ? styles.activeNavButton
                          : styles.navButton
                      }
                      onClick={() => this.handleCarousel(2)}
                    >
                      SEEK
                      <br /> GUIDANCE
                    </div>
                    <div
                      className={
                        this.state.position === 3
                          ? styles.activeNavButton
                          : styles.navButton
                      }
                      onClick={() => this.handleCarousel(3)}
                    >
                      FIND
                      <br /> INTERESTING EVENTS
                    </div>
                    <div
                      className={
                        this.state.position === 4
                          ? styles.activeNavButton
                          : styles.navButton
                      }
                      onClick={() => this.handleCarousel(4)}
                    >
                      FEATURED
                      <br /> RESOURCES
                    </div>
                  </HomePageBannerCarousel>
                </React.Fragment>
                {/* <MobileOnly>
                  <ProgressBar
                    progress={(this.state.slideIndex * 100) / 2.66}
                  ></ProgressBar>
                  <div style={{ border: "1px solid red" }}></div>
                </MobileOnly> */}
              </div>
            </Media>
            <Media query="(min-width:1024px)">
              <div className={styles.navButtonSection}>
                <CenteredContent contentWidth={"1200px"}>
                  <div
                    className={styles.navButton}
                    onClick={() => this.handleCarousel(1)}
                  >
                    BUILD
                    <br /> VISUAL PROFILE
                    <div
                      className={
                        this.state.position === 1 ? styles.innerTriangle : null
                      }
                    ></div>
                  </div>
                  <div
                    className={styles.navButton}
                    onClick={() => this.handleCarousel(2)}
                  >
                    SEEK
                    <br /> GUIDANCE
                    <div
                      className={
                        this.state.position === 2 ? styles.innerTriangle : null
                      }
                    ></div>
                  </div>
                  <div
                    className={styles.navButton}
                    onClick={() => this.handleCarousel(3)}
                  >
                    FIND
                    <br /> INTERESTING EVENTS
                    <div
                      className={
                        this.state.position === 3 ? styles.innerTriangle : null
                      }
                    ></div>
                  </div>
                  <div
                    className={styles.navButton}
                    onClick={() => this.handleCarousel(4)}
                  >
                    FEATURED
                    <br /> RESOURCES
                    <div
                      className={
                        this.state.position === 4 ? styles.innerTriangle : null
                      }
                    ></div>
                  </div>
                </CenteredContent>
              </div>
            </Media>
          </React.Fragment>
        </div>
        <div className={styles.eventsSection}>
          <Media query="(min-width:1024px)">
            <div className={styles.eventsLink}>
              <div className={styles.calendarIcon}></div>
              <div className={styles.eventText}>EVENTS</div>
              <div className={styles.eventTitle}>
                View and attend workshops and networking events
              </div>
              <div
                className={styles.viewAllButton}
                onClick={() => this.handleredirect(EVENT)}
              >
                VIEW ALL <div className={styles.arrowp}></div>
              </div>
            </div>
          </Media>
          <Media query="(max-width:767px)">
            <div className={styles.eventsLink}>
              <div className={styles.eventsMobileSection}>
                <div className={styles.eventButton}>
                  <div className={styles.calendarIcon}></div>
                  <div className={styles.eventText}>EVENTS</div>
                  <div className={styles.eventTitle}>
                    View and attend workshops and networking events
                  </div>
                </div>
                <div
                  className={styles.viewAllButton}
                  onClick={() => this.handleredirect(EVENT)}
                >
                  VIEW ALL <div className={styles.arrow}></div>
                </div>
              </div>
            </div>
          </Media>
          <div className={styles.carousel}>
            <HomepageEventsCarousel>
              {this.props &&
                this.props.allEventDetails &&
                this.props.allEventDetails.message !== "No data found" &&
                this.props.allEventDetails.map((val, i) => (
                  <div
                    className={styles.card}
                    onClick={() => {
                      this.handleEventRedirect(
                        `${EVENT_DETAILS_WITHOUT_ID}/${val.eventId}`
                      );
                    }}
                  >
                    <Card
                      image={val.imageUrl}
                      heading={val.title}
                      time={`${val.eventSlots[0].startTime} - ${val.eventSlots[0].endTime}`}
                      date={val.eventSlots[0].date}
                      location={val.eventAddress}
                      key={i}
                      city={val.city}
                      locality={val.locality}
                      eventLabels={val.labels}
                      visibleChildrenDesktop={2}
                    />
                  </div>
                ))}
            </HomepageEventsCarousel>
          </div>
        </div>
        <div className={styles.featuredSection}>
          <div style={{ background: "#ebeced", padding: "100px 0 200px 0" }}>
            <div className={styles.featuredHeader}>
              <div className={styles.featIcon} />
              <div className={styles.featText}>
                <div className={styles.featTitle}>Featured content</div>
                <div className={styles.subTitle}>
                  Get access to career advice, inspirational stories and curated
                  career resources
                </div>
                <div
                  className={styles.gotoFeaturedContent}
                  onClick={() => this.handleredirect(BLOG)}
                >
                  {" "}
                  VIEW ALL <div className={styles.arrowb}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.eventCardContainer}>
            <div className={styles.featuredCarousel}>
              <HomePageBlogCarousel>
                {this.props &&
                  this.props.allBlogsDetails &&
                  this.props.allBlogsDetails.map(val => (
                    <div
                      className={styles.card}
                      onClick={() => {
                        this.handleBlogRediraction(
                          `${BLOG_DETAILS_WITHOUT_ID}/${val.blogId}`
                        );
                      }}
                    >
                      <BlogCardForHomePage
                        name={val.author}
                        tags={val.labels}
                        time={val.duration}
                        heading={val.title}
                        shared="12k"
                        likes={val.likes}
                        comments={val.comments}
                        imageUrl={val.imageUrl}
                      />
                    </div>
                  ))}
              </HomePageBlogCarousel>
            </div>
          </div>
        </div>
        <div className={styles.footerSection}>
          <FooterContainer />
        </div>
      </div>
    );
  }
}
