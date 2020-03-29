import React, { Component } from "react";
import styles from "./EventDetailsPage.css";
import Button from "../general/Button.js";
import Card from "../general/EventCard";
import CenteredContent from "../../core/CenteredContent";
import Image from "../../core/Image";
import profileImage from "../Images/b.jpg";
import PrimaryHeaderContainer from "../HomePage/container/PrimaryHeaderContainer";
import EventDetailPageSliderComponent from "./EventDetailPageSlider/EventDetailPageSliderComponent";
import DesktopOnly from "../general/DesktopOnly";
import MobileOnly from "../general/MobileOnly";
import FooterContainer from "../Footer/FooterContainer";
import SecondaryLoader from "../general/SecondaryLoader";
import * as Cookie from "../../utils/Cookie";
import { USER_DETAILS, EVENT_DETAILS_WITHOUT_ID } from "../../utils/constant";
import check_blue from "../../images/check_blue.svg";
import HorizantalIconWithHeader from "../../core/HorizantalIconWithHeader";
import { validateDate } from "../../utils/dateTimeFunction";
export default class EventDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intrested:
        this.props.eventDetails && this.props.eventDetails.userInterested
          ? this.props.eventDetails.userInterested
          : false,
      showAbout: true,
      showTestimonials: false,
      eventId: null,
      showbutton: true
    };
  }
  componentDidMount() {
    let eventId = this.props.match.params.eventId;
    this.setState({ eventId: this.props.match.params.eventId });
    this.props.getEventDetails(eventId);
    this.props.getRegisterEvent(eventId);
    this.props.getAllEvents();
    if (this.props.getTestimonials) {
      this.props.getTestimonials(eventId);
    }
  }
  static async getDerivedStateFromProps(props, state) {
    if (props.eventDetails && props.eventDetails.userInterested) {
      return {
        intrested: props.eventDetails.userInterested
      };
    }
  }
  handleredirect = val => {
    if (this.props.history) {
      window.open(val, "_blank");
    }
  };

  handleIntrestClick = () => {
    let eventId = this.props.match.params.eventId;
    let user = Cookie.getCookie(USER_DETAILS);
    let parsedUser = user ? JSON.parse(user) : null;
    let userId = parsedUser ? parsedUser.userId : null;
    if (userId) {
      let details = {
        userId: userId,
        eventId: this.state.eventId,
        status: !this.state.intrested
      };
      this.props.addUserIntrest(details);
      this.props.getEventDetails(eventId);
      this.setState({ intrested: !this.state.intrested });
    } else {
      this.props.showSignUpModal();
    }
  };
  getTestimonials = () => {
    this.setState({
      showAbout: false,
      showTestimonials: true
    });
  };
  aboutWork = () => {
    this.setState({
      showAbout: true,
      showTestimonials: false
    });
  };

  render() {
    const eventDetails = this.props && this.props.eventDetails;
    let eventId = this.props.match.params.eventId;
    const eventSlot =
      this.props &&
      this.props.eventDetails &&
      this.props.eventDetails.eventSlots &&
      this.props.eventDetails.eventSlots[0];
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

            <div className={styles.container}>
              <CenteredContent>
                <div className={styles.bannerDescHolder}>
                  {eventDetails && eventDetails.imageUrl && (
                    <div className={styles.bannerImage}>
                      {eventDetails && eventDetails.imageUrl ? (
                        <Image
                          image={eventDetails.imageUrl}
                          width="50%"
                          height="100%"
                        />
                      ) : (
                        <EventDetailPageSliderComponent></EventDetailPageSliderComponent>
                      )}
                    </div>
                  )}
                  <div className={styles.descriptionBase}>
                    <div className={styles.descriptionContainer}>
                      <div className={styles.tagContainer}>
                        {this.props &&
                          this.props.eventDetails &&
                          this.props.eventDetails.labels &&
                          this.props.eventDetails.labels.map(label => {
                            return (
                              <div className={styles.tagButton}>{label}</div>
                            );
                          })}
                      </div>
                      {this.props &&
                        this.props.eventDetails &&
                        this.props.eventDetails.title && (
                          <div className={styles.eventHeading}>
                            {this.props.eventDetails.title}
                          </div>
                        )}
                      {this.props &&
                        this.props.eventDetails &&
                        this.props.eventDetails.eventLevel && (
                          <div className={styles.eventlevel}>
                            {this.props.eventDetails.eventLevel} Level
                          </div>
                        )}
                      {this.props &&
                        this.props.eventDetails &&
                        this.props.eventDetails.organizer && (
                          <div className={styles.eventHostBy}>
                            Hosted by {this.props.eventDetails.organizer}
                          </div>
                        )}
                      <div className={styles.eventAddressBase}>
                        <div className={styles.eventAdressContainer}>
                          {eventDetails && eventDetails.locality ? (
                            <div className={styles.eventPlaceName}>
                              {eventDetails.locality}
                            </div>
                          ) : (
                            <div className={styles.eventPlaceName}>
                              {"Online"}
                            </div>
                          )}
                          {/* <div className={styles.address}>
                            No. 7, 4th Main Rd, Stage 2{" "}
                          </div> */}
                          {eventDetails && eventDetails.eventAddress && (
                            <div className={styles.address}>
                              {eventDetails.eventAddress}
                            </div>
                          )}
                        </div>
                        <div className={styles.mapContainer}>
                          {/* <Map
          google={this.props.google}
          style={mapstyle}
          initialCenter={{
            lat: 40.854885,
            lng: -88.081807
          }}
          zoom={15}
          onClick={this.onMapClicked}
        /> */}
                        </div>
                      </div>

                      {eventSlot && (
                        <div className={styles.eventDetails}>
                          <div className={styles.eventTime}>
                            {eventSlot.startTime} – {eventSlot.endTime}
                          </div>
                          <div
                            className={styles.eventDate}
                            // onClick={() => this.checkDate(eventSlot.date)}
                          >
                            {eventSlot.date}
                          </div>
                          <div className={styles.eventCost}>
                            {eventSlot.price.price === 0
                              ? "Free"
                              : `INR ${eventSlot.price.price}`}
                          </div>
                        </div>
                      )}
                      {eventSlot &&
                        eventSlot.noOfSeats.noOfSeats &&
                        validateDate(eventSlot.date) && (
                          <div className={styles.seatAlertMessage}>
                            {eventSlot.noOfSeats.noOfSeats -
                              eventSlot.noOfSeats.seatBooked}{" "}
                            Seats are left!
                          </div>
                        )}
                      {eventSlot &&
                      validateDate(eventSlot.date) &&
                      eventSlot.noOfSeats.noOfSeats -
                        eventSlot.noOfSeats.seatBooked >
                        1 ? (
                        <div className={styles.eventButtonConatiner}>
                          {this.props.registerEventList &&
                            this.props.registerEventList.length > 0 && (
                              <div className={styles.eventButton}>
                                {eventDetails && eventDetails.userRegistered ? (
                                  <Button
                                    type="primary"
                                    backgroundColor={"#4F439A"}
                                    fontColor={"#fff"}
                                    height={50}
                                    width={210}
                                    disabled={true}
                                    label="Registed"
                                    borderRadius={10}
                                  />
                                ) : (
                                  <div
                                    onClick={() =>
                                      this.props.showRegisterDetailsModule({
                                        ...this.props,
                                        eventId: eventId,
                                        handlePageLoad: true
                                      })
                                    }
                                  >
                                    <Button
                                      type="primary"
                                      backgroundColor={"#4F439A"}
                                      fontColor={"#fff"}
                                      height={50}
                                      width={210}
                                      label="Register"
                                      borderRadius={10}
                                    />
                                  </div>
                                )}
                              </div>
                            )}
                          <DesktopOnly>
                            <div
                              className={styles.eventButton}
                              onClick={this.handleIntrestClick}
                            >
                              {eventDetails &&
                              !this.state.intrested &&
                              !eventDetails.userInterested ? (
                                <Button
                                  type="primary"
                                  backgroundColor={"#fff"}
                                  fontColor={"#4F439A"}
                                  height={50}
                                  width={210}
                                  label={"I am interested"}
                                  borderRadius={10}
                                />
                              ) : (
                                <HorizantalIconWithHeader
                                  icon={check_blue}
                                  size={25}
                                  fontSize={"18px"}
                                  fontColor={"#4f439a"}
                                  text={"Interested"}
                                />
                              )}
                            </div>
                          </DesktopOnly>
                          <MobileOnly>
                            <div
                              className={styles.eventButton}
                              onClick={this.handleIntrestClick}
                            >
                              {eventDetails &&
                              !this.state.intrested &&
                              !eventDetails.userInterested ? (
                                <Button
                                  type="primary"
                                  backgroundColor={"#fff"}
                                  borderColor={"#fff"}
                                  fontColor={"#4F439A"}
                                  height={50}
                                  width={150}
                                  label="I am interested"
                                  borderRadius={10}
                                />
                              ) : (
                                <HorizantalIconWithHeader
                                  icon={check_blue}
                                  size={20}
                                  fontSize={"18px"}
                                  fontColor={"#4f439a"}
                                  text={"Interested"}
                                />
                              )}
                            </div>
                          </MobileOnly>
                        </div>
                      ) : (
                        <div className={styles.eventButtonConatiner}>
                          {this.props.registerEventList &&
                            this.props.registerEventList.length > 0 && (
                              <div className={styles.disable}>
                                {eventDetails && eventDetails.userRegistered ? (
                                  <Button
                                    type="primary"
                                    backgroundColor={"#4F439A"}
                                    fontColor={"#fff"}
                                    height={50}
                                    width={210}
                                    label="Registed"
                                    disabled={true}
                                    borderRadius={10}
                                  />
                                ) : (
                                  <Button
                                    type="primary"
                                    backgroundColor={"#4F439A"}
                                    fontColor={"#fff"}
                                    height={50}
                                    width={210}
                                    label="Register"
                                    disabled={true}
                                    borderRadius={10}
                                  />
                                )}
                              </div>
                            )}
                          <DesktopOnly>
                            <div className={styles.disable}>
                              {eventDetails &&
                              !this.state.intrested &&
                              !eventDetails.userInterested ? (
                                <Button
                                  type="primary"
                                  backgroundColor={"#fff"}
                                  fontColor={"#4F439A"}
                                  height={50}
                                  width={210}
                                  label={"I am interested"}
                                  borderRadius={10}
                                  disabled={true}
                                />
                              ) : (
                                <HorizantalIconWithHeader
                                  icon={check_blue}
                                  size={25}
                                  fontSize={"18px"}
                                  fontColor={"#4f439a"}
                                  disabled={true}
                                  text={"Interested"}
                                />
                              )}
                            </div>
                          </DesktopOnly>
                          <MobileOnly>
                            <div className={styles.disable}>
                              {eventDetails &&
                              !this.state.intrested &&
                              !eventDetails.userInterested ? (
                                <Button
                                  type="primary"
                                  backgroundColor={"#fff"}
                                  borderColor={"#fff"}
                                  fontColor={"#4F439A"}
                                  height={50}
                                  width={150}
                                  label="I am interested"
                                  disabled={true}
                                  borderRadius={10}
                                />
                              ) : (
                                <HorizantalIconWithHeader
                                  icon={check_blue}
                                  size={20}
                                  fontSize={"18px"}
                                  fontColor={"#4f439a"}
                                  disabled={true}
                                  text={"Interested"}
                                />
                              )}
                            </div>
                          </MobileOnly>
                        </div>
                      )}
                    </div>
                    {/* <div className={styles.registrationdetails}>
                      <div className={styles.registrationdetailsContainer}>
                        <img
                          src={profileImage}
                          className={styles.dot}
                          alt={"profile"}
                        />
                        <img
                          src={profileImage}
                          className={styles.dot}
                          alt={"profile"}
                        />
                        <img
                          src={profileImage}
                          className={styles.dot}
                          alt={"profile"}
                        />
                        <span className={styles.more}>+26</span>
                        <div className={styles.intrested}>
                          Intrested & 13 Registered
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className={styles.detailsHolder}>
                  <div className={styles.header}>
                    <div
                      className={
                        this.state.showAbout ? styles.seletedText : styles.text
                      }
                      onClick={() => this.aboutWork()}
                    >
                      About the Workshop
                    </div>
                    {this.props && this.props.testimonials && (
                      <DesktopOnly>
                        {this.props &&
                          this.props.testimonials &&
                          !this.props.testimonials.message && (
                            <div
                              className={
                                this.state.showTestimonials
                                  ? styles.seletedText
                                  : styles.text
                              }
                              onClick={() => this.getTestimonials()}
                            >
                              Testimonials
                            </div>
                          )}
                      </DesktopOnly>
                    )}
                  </div>
                  {this.state.showAbout &&
                    eventDetails &&
                    eventDetails.eventDescription && (
                      <div className={styles.desc}>
                        {eventDetails.eventDescription}
                      </div>
                    )}
                  {this.state.showTestimonials &&
                    this.props &&
                    this.props.testimonials &&
                    !this.props.testimonials.message &&
                    this.props.testimonials.map(testimonial => {
                      return (
                        <div className={styles.testimonialUserBase}>
                          <div className={styles.desc}>
                            {testimonial.message}
                          </div>
                          <div className={styles.testimonialUserContainer}>
                            <div className={styles.testimonialUser}>
                              {testimonial.user}
                            </div>
                            <div className={styles.testimonialCreateAt}>
                              {testimonial.createdAt}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  {/* <div className={styles.noteConatiner}>
                    <div className={styles.noteHeading}>Make a note</div>
                    <div className={styles.noteDescription}>
                      Please note that all material required for the workshop
                      will be provided at the venue.
                    </div>
                  </div> */}
                  {/* <div className={styles.buttonContainer}>
                    <Button
                      type="primary"
                      backgroundColor={"#E0DEED"}
                      borderColor="#E0DEED"
                      fontColor={"#4F439A"}
                      height={50}
                      width={210}
                      label="ASK A QUESTION"
                      borderRadius={10}
                    />
                  </div> */}
                </div>
              </CenteredContent>
              <DesktopOnly>
                <hr />
              </DesktopOnly>
              <CenteredContent>
                <div className={styles.recommendedEvents}>
                  <div className={styles.recommendedEventsHeading}>
                    Recommended Events
                  </div>
                  {/* <DesktopOnly>
                    <div className={styles.viewAllButtonContainer}>
                      <Button
                        type="primary"
                        backgroundColor={"#E0DEED"}
                        borderColor="#E0DEED"
                        fontColor={"#4F439A"}
                        height={50}
                        width={210}
                        label="VIEW ALL"
                        borderRadius={10}
                      />
                    </div>
                  </DesktopOnly> */}
                </div>
                <div className={styles.storiesContainer}>
                  {this.props.allEventDetails &&
                    this.props.allEventDetails.map((val, i) => (
                      <div
                        className={styles.card}
                        onClick={() => {
                          this.handleredirect(
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
                </div>
                <MobileOnly>
                  <div className={styles.viewAllButtonContainer}>
                    <Button
                      type="primary"
                      backgroundColor={"#FFF"}
                      borderColor="#4F439A"
                      fontColor={"#4F439A"}
                      height={30}
                      width={99}
                      fontSize={"12px"}
                      label="VIEW ALL"
                      borderRadius={0}
                    />
                  </div>
                </MobileOnly>
              </CenteredContent>
            </div>

            <div className={styles.footerSection}>
              <FooterContainer />
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
