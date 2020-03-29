import React from "react";
import PropTypes from "prop-types";
import styles from "./TopicsPage.css";
import landingImage from "../../../images/top-picks.jpg";
import profile from "../../../images/Topic Selection.svg";
import Button from "../../general/Button.js";
import CenterSlideModel from "./CenterSlideModel/CenterSlideModel";
import NonCloseCenterModal from "./CenterSlideModel/NonCloseCenterModal";
export const SIZE_3 = 3;
const topics = [
  { name: "Design" },
  { name: "Business" },
  { name: "Self Development" },
  { name: "Literature" },
  { name: "Technology" },
  { name: "Politics" },
  { name: "Management" },
  { name: "Fitness" }
];
export default class TopicsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      topicList: this.props.userIntrestList
    };
  }
  componentDidMount = () => {
    this.props.getUserInterest();
  };
  componentWillReceiveProps = nextProps => {
    if (nextProps.userIntrestList) {
      this.setState({ topicList: nextProps.userIntrestList });
    }
  };
  handlecategoryClick = val => {
    let data = [];
    let dataExist =
      this.state.selected &&
      this.state.selected.length > 0 &&
      this.state.selected.find((categories, i) => {
        return categories.interestId === val.interestId;
      });
    if (dataExist) {
      var index = this.state.selected.findIndex(function(cat) {
        return cat.interestId == dataExist.interestId;
      });
      data.push(...this.state.selected);
      if (index == 0) {
        data.splice(index, 1);
        this.setState({ selected: data });
      } else {
        data.splice(index, index);
        this.setState({ selected: data });
      }
    } else {
      data.push(...this.state.selected);
      data.push(val);
      this.setState({ selected: data });
    }
  };
  handleClick = () => {
    let ids = [];
    this.state.selected &&
      this.state.selected.map(val => {
        ids.push(val.interestId);
      });
    if (!this.props.visablemodal) {
      if (this.state.selected.length >= 5) {
        this.props.addUserInterest({ interestIds: ids });
        window.location.replace("/");
      } else {
        this.props.showToast("Select atleast 5 interests");
      }
    } else {
      this.props.addUserInterest({ interestIds: ids });
      window.location.replace("/");
    }
  };
  render() {
    return (
      <React.Fragment>
        {this.props.visablemodal && (
          <div
            className={styles.showCross}
            onClick={() => this.props.closeModal()}
          />
        )}
        {!this.props.visablemodal ? (
          <NonCloseCenterModal>
            <div className={styles.base}>
              <div className={styles.container}>
                <div className={styles.heading}>
                  CHOOSE TOPICS THAT INTEREST YOU
                </div>
                <div className={styles.subHeading}>
                  Select at least 5 interest
                </div>

                <div className={styles.iconBase}>
                  {this.state.topicList && this.state.topicList.length > 0 ? (
                    this.state.topicList.map(value => {
                      return (
                        <div
                          className={styles.iconWithNameContainer}
                          onClick={() => this.handlecategoryClick(value)}
                        >
                          <div className={styles.iconWithName}>
                            {/* <img
                              src={
                                (this.state.selected &&
                                  this.state.selected.length > 0 &&
                                  this.state.selected.find(categories => {
                                    return (
                                      categories.interestId === value.interestId
                                    );
                                  })) ||
                                value.status
                                  ? profile
                                  : landingImage
                              }
                              className={styles.icon}
                              alt="Topics"
                            ></img> */}
                            {(this.state.selected &&
                              this.state.selected.length > 0 &&
                              this.state.selected.find(categories => {
                                return (
                                  categories.interestId === value.interestId
                                );
                              })) ||
                            value.status ? (
                              <img
                                src={profile}
                                className={styles.icon}
                                alt="Topics"
                              ></img>
                            ) : (
                              <div className={styles.topicIcon}>
                                {value.name.charAt(0)}
                              </div>
                            )}
                            <div
                              className={
                                (this.state.selected &&
                                  this.state.selected.length > 0 &&
                                  this.state.selected.find(categories => {
                                    return categories.name === value.name;
                                  })) ||
                                value.status
                                  ? styles.textColored
                                  : styles.topic || value.status
                              }
                            >
                              {value.name}
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className={styles.error}>No data available</div>
                  )}
                </div>
                {this.props &&
                  this.props.userIntrestList &&
                  this.props.userIntrestList.length > 0 && (
                    <div className={styles.rectangle}>
                      <div
                        className={styles.button}
                        onClick={() => this.handleClick()}
                      >
                        <Button
                          type="primary"
                          backgroundColor={"#4F439A"}
                          fontColor={"#fff"}
                          label="TAKE ME TO CURATED FEED"
                          height={50}
                          width={263}
                          borderRadius={5}
                        />
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </NonCloseCenterModal>
        ) : (
          <CenterSlideModel>
            <div className={styles.moreBase}>
              <div className={styles.container}>
                <div className={styles.heading}>
                  CHOOSE TOPICS THAT INTEREST YOU
                </div>
                <div className={styles.subHeading}>
                  Select at least 5 interest
                </div>

                <div className={styles.moreIconBase}>
                  {this.state.topicList && this.state.topicList.length > 0 ? (
                    this.state.topicList.map(value => {
                      return (
                        <div
                          className={styles.iconWithNameContainer}
                          onClick={() => this.handlecategoryClick(value)}
                        >
                          <div className={styles.iconWithName}>
                            {/* <img
                              src={
                                (this.state.selected &&
                                  this.state.selected.length > 0 &&
                                  this.state.selected.find(categories => {
                                    return (
                                      categories.interestId === value.interestId
                                    );
                                  })) ||
                                value.status
                                  ? profile
                                  : landingImage
                              }
                              className={styles.icon}
                              alt="Topics"
                            ></img> */}
                            {(this.state.selected &&
                              this.state.selected.length > 0 &&
                              this.state.selected.find(categories => {
                                return (
                                  categories.interestId === value.interestId
                                );
                              })) ||
                            value.status ? (
                              <img
                                src={profile}
                                className={styles.icon}
                                alt="Topics"
                              ></img>
                            ) : (
                              <div className={styles.topicIcon}>
                                {value.name.charAt(0)}
                              </div>
                            )}
                            <div
                              className={
                                this.state.selected &&
                                this.state.selected.length > 0 &&
                                this.state.selected.find(categories => {
                                  return categories.name === value.name;
                                })
                                  ? styles.textColored
                                  : styles.topic || value.status
                              }
                            >
                              {value.name}
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className={styles.error}>No data available</div>
                  )}
                </div>
                {this.props &&
                  this.props.userIntrestList &&
                  this.props.userIntrestList.length > 0 && (
                    <div className={styles.rectangle}>
                      <div
                        className={styles.button}
                        onClick={() => this.handleClick()}
                      >
                        <Button
                          type="primary"
                          backgroundColor={"#4F439A"}
                          fontColor={"#fff"}
                          label="TAKE ME TO CURATED FEED"
                          height={50}
                          width={263}
                          borderRadius={5}
                        />
                      </div>
                    </div>
                  )}
              </div>
            </div>
          </CenterSlideModel>
        )}
      </React.Fragment>
    );
  }
}
TopicsPage.propTypes = {
  initials: PropTypes.string.isRequired,
  image: PropTypes.string,
  size: PropTypes.oneOf([SIZE_3]),
  border: PropTypes.shape({
    color: PropTypes.string,
    radius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    width: PropTypes.number
  })
};
TopicsPage.defaultProps = {
  initials: "NA",
  size: 2,
  border: {
    color: "transparent",
    width: 0,
    radius: "50%"
  }
};
