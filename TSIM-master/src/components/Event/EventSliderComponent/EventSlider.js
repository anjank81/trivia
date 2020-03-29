import React from "react";
import PropTypes from "prop-types";
import styles from "./EventSlider.css";
export default class EventSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      juke:
        this.props.children && this.props.children.length
          ? this.props.children.length
          : 0,
      position: 0
    };
  }

  autoRun = () => {
    if (!this.props.stopSlider) {
      this.timer = setTimeout(() => {
        this.goForward();
        this.autoRun();
      }, this.props.interval * 3000);
    }
  };
  componentDidMount() {
    if (this.props.interval && !this.props.stopSlider) {
      this.autoRun();
    }
  }

  goForward = () => {
    const childCount = React.Children.count(this.props.children);
    if (this.state.position + 1 == childCount) {
      this.props.reachedEnd();
      this.setState({ position: 0 });
    }
    if (this.state.position < 4) {
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
        <div className={styles.sliderWrapper}>
          <div className={styles.slider} style={jukeStyle}>
            <div style={style} className={styles.imageHolder}>
              {this.props.children.map((child, i) => {
                return (
                  child && (
                    <div className={styles.item} key={i}>
                      {child}
                    </div>
                  )
                );
              })}
              {this.props.children.map((child, i) => {
                return (
                  child && (
                    <div className={styles.item} key={i}>
                      {child}
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>

        <div className={styles.eventBottomWrapper}>
          <div className={styles.eventHeader}>
            {this.props &&
              this.props.stepsInfo &&
              this.props.stepsInfo[this.state.position].title}
          </div>
          <div className={styles.eventDesc}>
            {this.props &&
              this.props.stepsInfo &&
              this.props.stepsInfo[this.state.position].title}
          </div>
          <div className={styles.eventTimeLocationWrapper}>
            <div className={styles.eventTime}>
              {this.props &&
                this.props.stepsInfo &&
                this.props.stepsInfo[this.state.position].eventSlots[0]
                  .startTime}{" "}
              -{" "}
              {this.props &&
                this.props.stepsInfo &&
                this.props.stepsInfo[this.state.position].eventSlots[0].endTime}
            </div>
            <div className={styles.eventDate}>
              {this.props &&
                this.props.stepsInfo &&
                this.props.stepsInfo[this.state.position].eventSlots[0].date}
            </div>
            {this.props &&
            this.props.stepsInfo &&
            this.props.stepsInfo[this.state.position].locality &&
            this.props &&
            this.props.stepsInfo &&
            this.props.stepsInfo[this.state.position].city ? (
              <div className={styles.eventLocation}>
                {this.props &&
                  this.props.stepsInfo &&
                  this.props.stepsInfo[this.state.position].locality}
                ,{" "}
                {this.props &&
                  this.props.stepsInfo &&
                  this.props.stepsInfo[this.state.position].city}
              </div>
            ) : (
              "Online"
            )}
          </div>
        </div>
        <div className={styles.navHolder}>
          {this.props.stepsInfo &&
            this.props.stepsInfo
              .map(val => {
                return val.eventId;
              })
              .filter((value, i) => {
                return (
                  this.props.stepsInfo
                    .map(val => {
                      return val.eventId;
                    })
                    .indexOf(value) === i
                );
              })
              .map((val, i) => {
                const stepNumber =
                  this.props &&
                  this.props.stepsInfo &&
                  this.props.stepsInfo[this.state.position].eventId;
                const active = val === stepNumber;

                return (
                  <div
                    onClick={() => this.sliderClickHandler(i)}
                    className={active ? styles.navActive : styles.navButton}
                    key={i}
                  />
                );
              })}
        </div>
      </div>
    );
  }
}

EventSlider.propTypes = {
  interval: PropTypes.number
};
EventSlider.defaultProps = {
  interval: 2
};
