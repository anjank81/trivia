import React, { Component } from "react";
import styles from "./HomePageBannerCarousel.css";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = { position: 0 };
  }

  handleNextEvent = () => {
    if (
      this.state.position + this.props.visibleChildrenDesktop <
      this.props.children.length
    ) {
      this.setState({
        position: this.state.position + 1
      });
    }
  };
  handleBackEvent = () => {
    if (this.state.position !== 0) {
      this.setState({
        position: this.state.position - 1
      });
    }
  };
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.base}>
          <div
            className={styles.slider}
            style={{
              transform: `translateX(${this.state.position *
                -(100 / this.props.visibleChildrenDesktop)}%)`
            }}
          >
            {this.props.children &&
              this.props.children.map((child, i) => {
                return (
                  <div key={i} className={styles.item}>
                    {child}
                  </div>
                );
              })}
          </div>
        </div>
        {this.props.children && this.props.children.length > 3 && (
          <React.Fragment>
            {this.state.position > 0 && (
              <div className={styles.back} onClick={this.handleBackEvent} />
            )}
            {this.state.position + this.props.visibleChildrenDesktop !==
              this.props.children.length && (
              <div className={styles.forward} onClick={this.handleNextEvent} />
            )}
          </React.Fragment>
        )}
      </div>
    );
  }
}

Carousel.defaultProps = {
  visibleChildrenDesktop: 3
};
