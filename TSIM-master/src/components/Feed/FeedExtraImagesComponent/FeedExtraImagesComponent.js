import React, { Component } from "react";
import styles from "./FeedExtraImagesComponent.css";
import CenteredContent from "../../../core/CenteredContent";
import profileImage from "../../Images/b.jpg";
import PrimaryHeaderContainer from "../../HomePage/container/PrimaryHeaderContainer";
import ProfileDetailsInFeed from "../ProfileDetailsInFeed";
import AddMoreIntrest from "../AddMoreIntrest";
import FeedCardForImages from "../../Feed/FeedExtraImagesComponent/FeedCardForImages/FeedCardForImages";

const data = [
  {
    data: profileImage
  },
  {
    data: profileImage
  },
  {
    data: profileImage
  },
  {
    data: profileImage
  }
];
export default class FeedExtraImagesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 0,
      guidePosition: 0
    };
  }
  goForward = val => {
    if (val !== "guide") {
      if (this.state.position < data.length - 1) {
        this.setState({ position: this.state.position + 1 });
      }
    } else {
      if (this.state.guidePosition < data.length - 1) {
        this.setState({ guidePosition: this.state.guidePosition + 1 });
      }
    }
  };
  goBack = val => {
    if (val !== "guide") {
      if (this.state.position > 0) {
        this.setState({ position: this.state.position - 1 });
      }
    } else {
      if (this.state.guidePosition > 0) {
        this.setState({ guidePosition: this.state.guidePosition - 1 });
      }
    }
  };
  render() {
    const translationAmount = -(100 * this.state.position);
    const transform = `translateX(${translationAmount}%)`;
    const translationAmount1 = -(100 * this.state.guidePosition);
    const guideTransform = `translateX(${translationAmount1}%)`;
    const style = {
      transform: transform
    };
    const guideStyle = {
      transform: guideTransform
    };
    return (
      <div className={styles.base}>
        <div className={styles.fixedHeader}>
          <PrimaryHeaderContainer history={this.props.history} />
        </div>
        <CenteredContent>
          <div className={styles.heading}>Top Picks</div>

          <div className={styles.dataHolderWrapper}>
            <div className={styles.leftSidePannel}>
              <div className={styles.myProfileSection}>
                <ProfileDetailsInFeed />
              </div>
              <div className={styles.addMoreIntrestContainer}>
                <AddMoreIntrest />
              </div>
            </div>

            <div className={styles.centerSection}>
              {this.props &&
                this.props.imageArr &&
                this.props.imageArr.map((data, i) => {
                  return (
                    <div className={styles.feedsContainer}>
                      <FeedCardForImages data={data} />
                    </div>
                  );
                })}
            </div>
          </div>
        </CenteredContent>
      </div>
    );
  }
}
