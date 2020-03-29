import React, { Component } from "react";
import styles from "./EventPage.css";
import Button from "../general/Button.js";
import Card from "../general/EventCard";
import CenteredContent from "../../core/CenteredContent";
import EventSliderComponent from "./EventSliderComponent/EventSliderComponent";
import PrimaryHeaderContainer from "../HomePage/container/PrimaryHeaderContainer";
import FilterSliderComponent from "./FilterSliderComponent/FilterSliderComponent";
import MobileOnly from "../general/MobileOnly";
import DesktopOnly from "../general/DesktopOnly";
import FooterContainer from "../Footer/FooterContainer";
import { EVENT_DETAILS_WITHOUT_ID } from "../../utils/constant";
import SecondaryLoader from "../general/SecondaryLoader";
export default class EventPage extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        labels: null,
        pageNumber: 1
      };
    }
  }
  handleredirect = val => {
    if (this.props.history) {
      this.props.history.push(`${val}`);
    }
  };

  showEventDetailsModule = nextProps => {
    if (this.props.showEventDetailsModule) {
      this.props.showEventDetailsModule();
    }
  };
  handleClick = label => {
    this.setState({ labels: label });
    let filterdLabels = { labels: null };
    const labels =
      label &&
      label.map(val => {
        let data = [];
        if (val.id) {
          // data.push(val.id);
          return val.id;
        }
      });

    filterdLabels.labels = labels;
    this.props.getAllEvents(JSON.stringify(filterdLabels), 1, [], true);
  };
  loadMoreEvent = () => {
    this.props.getAllEvents(
      [],
      this.state.pageNumber + 1,
      this.props.allEventDetails
    );
    this.setState({ pageNumber: this.state.pageNumber + 1 });
  };
  componentDidMount = () => {
    this.props.getAllEvents([], this.state.pageNumber, []);
    this.props.getFilterList();
    this.props.getUserInterest();
    this.props.getCityList();
  };
  componentWillReceiveProps = nextProps => {
    // if (nextProps.pastEventDetails) {
    //   this.showEventDetailsModule(nextProps);
    // }
  };
  render() {
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
            <React.Fragment>
              <CenteredContent>
                <div className={styles.eventSlideHolder}>
                  <EventSliderComponent {...this.props} />
                </div>
                <DesktopOnly>
                  <div className={styles.filterBase}>
                    <div className={styles.tagAndFilter}>
                      {this.props && this.props.userIntrestList && (
                        <FilterSliderComponent
                          handleClick={val => {
                            this.handleClick(val);
                          }}
                          filterData={this.props.userIntrestList}
                          selectedFilter={this.state.labels}
                        ></FilterSliderComponent>
                      )}
                      <div className={styles.filterButtonContainer}>
                        <div
                          className={styles.fliterButton}
                          onClick={() =>
                            this.props.showFilterModule(this.props)
                          }
                        >
                          <Button
                            type="primary"
                            backgroundColor={"transparent"}
                            fontColor={"#4F439A"}
                            height={40}
                            width={118}
                            label="FILTER"
                            borderRadius={10}
                          />
                          <div className={styles.arrow}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DesktopOnly>
                <MobileOnly>
                  <div
                    className={styles.fliterButton}
                    onClick={() => this.props.showFilterModule(this.props)}
                  >
                    <Button
                      type="primary"
                      backgroundColor={"transparent"}
                      borderColor={"#4F439A"}
                      fontColor={"#4F439A"}
                      height={30}
                      width={90}
                      label="FILTER"
                      borderRadius={0}
                    />
                  </div>
                </MobileOnly>
              </CenteredContent>
            </React.Fragment>
            <CenteredContent>
              <div className={styles.container}>
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
                  {this.props &&
                    this.props.allEventDetails &&
                    !this.props.allEventDetails.message &&
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
                          city={val.city}
                          locality={val.locality}
                          key={i}
                          eventLabels={val.labels}
                          visibleChildrenDesktop={2}
                        />
                      </div>
                    ))}
                </div>
                {this.props.allEventDetails &&
                  this.state.pageNumber * 10 <=
                    this.props.allEventDetails.length && (
                    <div
                      className={styles.buttonContainerForLoadMore}
                      onClick={() => this.loadMoreEvent()}
                    >
                      <Button
                        type="primary"
                        backgroundColor={"#ad5da3"}
                        borderColor={"#ad5da3"}
                        fontColor={"#fff"}
                        height={50}
                        width={210}
                        label="Load More"
                        borderRadius={10}
                        // onClick={() => this.handlePagination()}
                      />
                    </div>
                  )}
              </div>
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
