import React, { Component } from "react";
import styles from "./EventDetailPageSliderComponent.css";
import { stepsInfo } from "../EventSliderComponent/EventSliderComponent";
import Image from "../../../core/Image";
import EventDetailPageSlider from "./EventDetailPageSlider";

class EventDetailPageSliderComponent extends Component {
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
  render() {
    return (
      <React.Fragment>
        <div className={styles.baseWrapper}>
          <div className={styles.base}>
            <div className={styles.sliderWrapper}>
              <EventDetailPageSlider
                stepsInfo={stepsInfo}
                stopSlider={this.state.stopSlider}
                {...this.props}
                reachedEnd={() => this.showEventSelector()}
              >
                {stepsInfo &&
                  stepsInfo.map(value => {
                    return (
                      <div className={styles.topContainer}>
                        <div className={styles.innerImage}>
                          <Image image={value.img} />
                        </div>
                      </div>
                    );
                  })}
              </EventDetailPageSlider>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EventDetailPageSliderComponent;
