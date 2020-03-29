import React from "react";
import PropTypes from "prop-types";
import styles from "./EventDetailSlider.css";
export default class EventDetailSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      juke:
        this.props.children && this.props.children.length
          ? this.props.children.length
          : 0,
      position: 0,
      showAboutTheWorkshop: true
    };
  }

  componentDidMount() {
    if (this.props.getTestimonials) {
      this.props.getTestimonials(
        this.props &&
          this.props.stepsInfo &&
          this.props.stepsInfo[this.state.position].eventId
      );
    }
    if (this.props.interval && !this.props.stopSlider) {
    }
  }

  goForward = () => {
    const childCount = React.Children.count(this.props.children);
    if (this.state.position + 1 == childCount) {
      this.props.reachedEnd();
    }
    if (this.state.position + 1 < childCount) {
      if ((Math.abs(this.state.position) + 1) % childCount === 0) {
        this.setState(
          {
            juke: this.state.juke - this.props.children.length
          },
          () => {
            this.setState({ position: this.state.position + 1 });
          }
        );
      } else {
        this.setState({ position: this.state.position + 1 });
      }
      clearInterval(this.timer);
    }
  };
  goBack = () => {
    if (this.state.position > 0) {
      const childCount = React.Children.count(this.props.children);
      if (Math.abs(this.state.position) === Math.abs(this.state.juke)) {
        this.setState(
          {
            juke: this.state.juke + childCount
          },
          () => {
            this.setState({ position: this.state.position - 1 });
          }
        );
      } else {
        this.setState({ position: this.state.position - 1 });
      }
    }
    clearInterval(this.timer);
  };
  handleTestimonials = () => {
    if (this.props.getTestimonials) {
      this.props.getTestimonials(
        this.props &&
          this.props.stepsInfo &&
          this.props.stepsInfo[this.state.position].eventId
      );
    }
    this.setState({ showAboutTheWorkshop: false });
  };

  sliderClickHandler = stepNumber => {
    this.setState({ position: stepNumber });
    clearInterval(this.timer);
  };
  render() {
    const translationAmount = -(100 * this.state.position);
    const transform = `translateX(${translationAmount}%)`;
    const style = {
      transform: transform
    };
    const jukeTranslationAmount = -(100 * this.state.juke);
    const jukeTransform = `translateX(${jukeTranslationAmount}%)`;
    const jukeStyle = {
      transform: jukeTransform
    };
    return (
      <div className={styles.base}>
        <div>
          <div className={styles.rightArrow} onClick={() => this.goForward()} />
          <div className={styles.leftArrow} onClick={() => this.goBack()} />
        </div>
        <div className={styles.sliderWrapper}>
          <div className={styles.slider} style={jukeStyle}>
            <div style={style} className={styles.imageHolder}>
              {this.props.children.map((child, i) => {
                return (
                  <div className={styles.item} key={i}>
                    {child}
                  </div>
                );
              })}
              {this.props.children.map((child, i) => {
                return (
                  <div className={styles.item} key={i}>
                    {child}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.eventBottomWrapper}>
          <div className={styles.eventHeader}>
            {" "}
            {this.props &&
              this.props.stepsInfo &&
              this.props.stepsInfo[this.state.position].title}
          </div>
          <div className={styles.eventTimeLocationWrapper}>
            {this.props &&
              this.props.stepsInfo &&
              this.props.stepsInfo[this.state.position].eventSlots[0]
                .startTime &&
              this.props &&
              this.props.stepsInfo &&
              this.props.stepsInfo[this.state.position].eventSlots[0]
                .endTime && (
                <div className={styles.eventTime}>
                  {this.props &&
                    this.props.stepsInfo &&
                    this.props.stepsInfo[this.state.position].eventSlots[0]
                      .startTime}{" "}
                  -{" "}
                  {this.props &&
                    this.props.stepsInfo &&
                    this.props.stepsInfo[this.state.position].eventSlots[0]
                      .endTime}
                </div>
              )}
            <div className={styles.eventDate}>
              {" "}
              {this.props &&
                this.props.stepsInfo &&
                this.props.stepsInfo[this.state.position].eventSlots[0].date}
            </div>
            {this.props &&
              this.props.stepsInfo &&
              this.props.stepsInfo[this.state.position].locality &&
              this.props &&
              this.props.stepsInfo &&
              this.props.stepsInfo[this.state.position].city && (
                <div className={styles.eventLocation}>
                  {" "}
                  {this.props &&
                    this.props.stepsInfo &&
                    this.props.stepsInfo[this.state.position].locality}
                  ,{" "}
                  {this.props &&
                    this.props.stepsInfo &&
                    this.props.stepsInfo[this.state.position].city}
                </div>
              )}
          </div>

          <div className={styles.eventSlideBar}>
            <ul>
              {this.props.stepsInfo[this.state.position].eventDescription && (
                <li
                  className={
                    this.state.showAboutTheWorkshop
                      ? styles.eventSlideBar_Selected
                      : styles.eventSlideBar
                  }
                  onClick={() => {
                    this.setState({ showAboutTheWorkshop: true });
                  }}
                >
                  About the Workshop
                </li>
              )}
              {!this.props.getTestimonials && (
                <li
                  className={
                    this.state.showAboutTheWorkshop
                      ? styles.eventSlideBar
                      : styles.eventSlideBar_Selected
                  }
                  onClick={() => {
                    this.handleTestimonials();
                  }}
                >
                  Testimonials
                </li>
              )}
            </ul>
            <div className={styles.eventDetailsBottomWrapper}>
              {this.state.showAboutTheWorkshop ? (
                <div className={styles.aboutTheEvent}>
                  {this.props.stepsInfo[this.state.position].eventDescription}
                </div>
              ) : (
                <div className={styles.testimonials}>
                  {this.props &&
                    this.props.testimonials &&
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
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EventDetailSlider.propTypes = {
  interval: PropTypes.number
};
EventDetailSlider.defaultProps = {
  interval: 2
};
