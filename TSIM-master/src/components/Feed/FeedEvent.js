import React, { Component } from "react";
import styles from "./FeedCard.css";
import profile from "../Images/f.jpg";
import Image from "../../core/Image";
import Button from "../general/Button";
import FeedCardDottedMenu from "./FeedCardDottedMenu/FeedCardDottedMenu";
import FeedProfileHolder from "./FeedProfileHolder";
import { EVENT_DETAILS_WITHOUT_ID, CONNECTION } from "../../utils/constant";
import CommentSection from "./CommentSection";
import { validateDate } from "../../utils/dateTimeFunction";

export default class FeedEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFeedMenu: false,
      showComment: false
    };
  }

  showFeedMenu = () => {
    this.setState({ showFeedMenu: !this.state.showFeedMenu });
  };
  //   handleRegisterClick = eventId => {
  //     this.props.getRegisterEvent(eventId);
  //     this.props.showRegisterDetailsModule(this.props);
  //   };
  handleredirect = val => {
    if (this.props.history) {
      window.open(val, "_blank");
    }
  };
  handleClick = () => {
    this.props.showRegisterDetailsModule({
      eventDetails: { ...this.props },
      eventId: this.props.eventId
    });
  };
  render() {
    return (
      <div className={styles.blogFeed}>
        <div className={styles.feedHeaderContainer}>
          <FeedProfileHolder
            user={this.props.eventAddress}
            createdAt={this.props.createdAt}
          />
          <div
            // onClick={this.showFeedMenu}
            className={styles.dottedRightMenu}
            style={{ opacity: 0.4 }}
          ></div>
          {this.state.showFeedMenu && (
            <div className={styles.feedMenuHolder}>
              <FeedCardDottedMenu
                {...this.props}
                decription={this.props.eventDescription}
              ></FeedCardDottedMenu>
            </div>
          )}
        </div>

        <div
          className={styles.feedImage}
          onClick={() => {
            this.handleredirect(
              `${EVENT_DETAILS_WITHOUT_ID}/${this.props.eventId}`
            );
          }}
        >
          <Image image={this.props.imageUrl} />
        </div>
        <div
          className={styles.container}
          // onClick={() => {
          //   this.handleredirect(
          //     `${EVENT_DETAILS_WITHOUT_ID}/${this.props.eventId}`
          //   );
          // }}
        >
          <div className={styles.tagContainer}>
            {this.props.labels &&
              this.props.labels.map((val, i) => {
                if (i < 2) {
                  return <div className={styles.tag}>{val}</div>;
                }
              })}

            {this.props.labels && this.props.labels.length > 2 && (
              <div className={styles.more}>+{this.props.labels.length - 2}</div>
            )}
          </div>
          <div className={styles.feedHeading}>{this.props.title}</div>
          <div className={styles.feedDescription}>
            {this.props.eventDescription}
          </div>
          <div className={styles.hashTagContainer}>
            {this.props.hashTag &&
              this.props.hashTag.map(val => {
                return <div className={styles.hashTag}>#{val}</div>;
              })}
          </div>

          {this.props.eventSlots && this.props.eventSlots.length > 0 && (
            <div className={styles.eventDetailsContainer}>
              <div className={styles.time}>
                {`${this.props.eventSlots[0].startTime}-${this.props.eventSlots[0].endTime}`}
              </div>
              <div className={styles.eventDate}>
                {this.props.eventSlots[0].date}
              </div>
              <div className={styles.location}>
                {this.props.locality && this.props.city
                  ? `${this.props.locality}, ${this.props.city}`
                  : this.props.city
                  ? this.props.city
                  : this.props.locality
                  ? this.props.locality
                  : "Online"}
              </div>
              {this.props.eventSlots[0].price && (
                <div className={styles.cost}>
                  INR {this.props.eventSlots[0].price}
                </div>
              )}
            </div>
          )}

          {this.props.eventSlots &&
          this.props.eventSlots.length > 0 &&
          validateDate(this.props.eventSlots[0].date) ? (
            <div className={styles.buttonContainer}>
              <div
                className={styles.buttonHolder}
                onClick={() => this.handleClick()}
              >
                <Button
                  type="primary"
                  backgroundColor={"#4F439A"}
                  fontColor={"#ffffff"}
                  borderColor={"#4F439A"}
                  height={40}
                  width={163}
                  label="REGISTER"
                  borderRadius={5}
                />
              </div>
              <div
                className={styles.buttonHolder}
                onClick={() => {
                  this.handleredirect(
                    `${EVENT_DETAILS_WITHOUT_ID}/${this.props.eventId}`
                  );
                }}
              >
                <Button
                  type="primary"
                  backgroundColor={"#fff"}
                  fontColor={"#4F439A"}
                  borderColor={"#fff"}
                  height={40}
                  width={167}
                  disable={true}
                  label="I AM INTERESTED"
                  borderRadius={5}
                />
              </div>
            </div>
          ) : (
            <div className={styles.buttonContainer}>
              <div className={styles.disable}>
                <Button
                  type="primary"
                  backgroundColor={"#4F439A"}
                  fontColor={"#ffffff"}
                  borderColor={"#4F439A"}
                  height={40}
                  width={163}
                  label="REGISTER"
                  disable={true}
                  borderRadius={5}
                />
              </div>
              <div className={styles.disable}>
                <Button
                  type="primary"
                  backgroundColor={"#fff"}
                  fontColor={"#4F439A"}
                  borderColor={"#fff"}
                  height={40}
                  disable={true}
                  width={167}
                  label="I AM INTERESTED"
                  borderRadius={5}
                />
              </div>
            </div>
          )}
          {/* <div className={styles.registrationdetailsContainer}>
            <img src={profile} className={styles.dot} alt={"profile"} />
            <img src={profile} className={styles.dot} alt={"profile"} />
            <img src={profile} className={styles.dot} alt={"profile"} />
            <span className={styles.more}>+26</span>
            <div className={styles.intrested}>Intrested & 13 Registered</div>
          </div> */}

          {/* <div className={styles.pollingConatiner}>

            <PollingResult percentage={30} option="A"
              pollQuestion="Wouldn't it be amazing to access a unique profile builder" />
          </div> */}
        </div>
        {this.state.showComment && <CommentSection />}
        {/* <div className={styles.likesSection}>
          <div className={styles.likes}>12k Likes</div>
          <div
            className={styles.comment}
            onClick={() => {
              this.setState({ showComment: true });
            }}
          >
            21 comment
          </div>
          <div className={styles.share}>10 Share</div>
        </div> */}
      </div>
    );
  }
}
