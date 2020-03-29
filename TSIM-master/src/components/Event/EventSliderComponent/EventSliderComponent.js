import React, { Component } from "react";
import styles from "./EventSliderComponent.css";
import img1 from "../../Images/b.jpg";
import img2 from "../../Images/f.jpg";
import img3 from "../../Images/p.jpg";
import img4 from "../../Images/p.jpg";
import Image from "../../../core/Image";
import EventSlider from "./EventSlider";
import { EVENT_DETAILS_WITHOUT_ID } from "../../../utils/constant.js";
class EventSliderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stopSlider: false
    };
  }
  showEventSelector = () => {
    if (this.props.showEventSelector) {
      this.setState({ stopSlider: true });
      this.props.closeModal();
      this.props.showEventSelector();
    }
  };
  handleredirect = val => {
    if (this.props.history) {
      this.props.history.push(`${val}`);
    }
  };
  // showEventDetailsModule = () => {
  //   if (this.props.showEventDetailsModule) {
  //     this.props.showEventDetailsModule();
  //   }
  // };
  render() {
    return (
      <React.Fragment>
        {this.props.allEventDetails && this.props.allEventDetails.length > 1 && (
          <div
            className={styles.baseWrapper}
            // onClick={() => {
            //   this.showEventDetailsModule();
            // }}
          >
            <div className={styles.base}>
              <div className={styles.sliderWrapper}>
                <EventSlider
                  stepsInfo={this.props.allEventDetails}
                  stopSlider={this.state.stopSlider}
                  {...this.props}
                  reachedEnd={() => this.showEventSelector()}
                >
                  {this.props.allEventDetails &&
                    this.props.allEventDetails.map((value, i) => {
                      if (i < 5) {
                        return (
                          <div
                            className={styles.topContainer}
                            onClick={() => {
                              this.handleredirect(
                                `${EVENT_DETAILS_WITHOUT_ID}/${value.eventId}`
                              );
                            }}
                          >
                            <div className={styles.innerImage}>
                              <Image image={value.topImageUrl} />
                              <div className={styles.overlay}></div>
                            </div>
                          </div>
                        );
                      }
                    })}
                </EventSlider>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default EventSliderComponent;

export const stepsInfo = [
  {
    id: 1,
    stepNumber: 1,
    img: img1,
    headerText: "stepNumber: 1",
    title: "Building a Strong Personal Brand by Uma Kasoji,1",
    time: "10 am – 5 pm",
    date: "21 Sep",
    location: "Koramangala, Bengaluru"
  },
  {
    id: 2,
    stepNumber: 2,
    img: img2,
    headerText: "stepNumber: 2",
    title: "Building a Strong Personal Brand by Uma Kasoji, 2",
    time: "11 am – 5 pm",
    date: "21 Sep",
    location: "Koramangala, Bengaluru"
  },

  {
    id: 3,
    stepNumber: 3,
    img: img3,
    headerText: "stepNumber: 3",
    title: "Building a Strong Personal Brand by Uma Kasoji, 3",
    time: "12 am – 5 pm",
    date: "21 Sep",
    location: "Koramangala, Bengaluru"
  },
  {
    id: 4,
    stepNumber: 4,
    img: img4,
    headerText: "stepNumber: 4",
    title: "Building a Strong Personal Brand by Uma Kasoji, 4",
    time: "1 pm – 5 pm",
    date: "21 Sep",
    location: "Koramangala, Bengaluru"
  },
  {
    id: 5,
    stepNumber: 5,
    img: img1,
    headerText: "stepNumber: 5",
    title: "Building a Strong Personal Brand by Uma Kasoji,5",
    time: "2 pm – 5 pm",
    date: "21 Sep",
    location: "Koramangala, Bengaluru"
  }
];
