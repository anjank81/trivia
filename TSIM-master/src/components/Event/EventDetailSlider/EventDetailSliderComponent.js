import React, { Component } from "react";
import styles from "./EventDetailSliderComponent.css";

import Image from "../../../core/Image";
import EventDetailSlider from "./EventDetailSlider";
import CenterSlideModal from "../../modules/component/CenterSlideModel/CenterSlideModel";


class EventDetailSliderComponent extends Component {
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
        <div className={styles.showCrossWrapper}>
          {" "}
          <div
            className={styles.showCross}
            onClick={() => this.props.closeModal()}
          />{" "}
        </div>
        <CenterSlideModal>
          {this.props.stepsInfo && this.props.stepsInfo.length > 1 && (
            <div className={styles.baseWrapper}>
              <div className={styles.base}>
                <div className={styles.sliderWrapper}>
                  <EventDetailSlider
                    stepsInfo={this.props.stepsInfo}
                    stopSlider={this.state.stopSlider}
                    {...this.props}
                    reachedEnd={() => this.showEventSelector()}
                  >
                    {this.props.stepsInfo &&
                      this.props.stepsInfo.map(value => {
                        return (
                          <div className={styles.topContainer}>
                            <div className={styles.innerImage}>
                              <Image image={value.imageUrl} />
                            </div>
                          </div>
                        );
                      })}
                  </EventDetailSlider>
                </div>
              </div>
            </div>
          )}
        </CenterSlideModal>
      </React.Fragment>
    );
  }
}

export default EventDetailSliderComponent;
