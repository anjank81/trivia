import React, { Component } from "react";
import styles from "./ConnectionsPage.css";
import PrimaryHeaderContainer from "../HomePage/container/PrimaryHeaderContainer";
import CenteredContent from "../../core/CenteredContent";
import image1 from "../../images/Alicia.png";
import image2 from "../../images/Alison-min.png";
import image3 from "../../images/Amanda-min.png";
import image4 from "../../images/Joe-min.png";
import ConnectionRequest from "../modules/component/ConnectionRequests";
import NavButton from "../modules/component/NavButton";
import NumberOfConnections from "../../core/NumberOfConnections";
import Button from "../../core/Button";
import MobileNavigatorHeader from "../modules/MobileNavigationalHeader";

const guideData = [
  {
    type: "mutual",
    guideList: [
      {
        image: { image1 },
        name: "Alicia",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image2 },
        name: "Alison",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image3 },
        name: "Amanda",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image4 },
        name: "Joe",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      }
    ]
  },
  {
    type: "xelpmoc",
    guideList: [
      {
        image: { image1 },
        name: "Alicia",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image2 },
        name: "Alison",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image3 },
        name: "Amanda",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image4 },
        name: "Joe",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      }
    ]
  },
  {
    type: "xaviers",
    guideList: [
      {
        image: { image1 },
        name: "Alicia",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image2 },
        name: "Alison",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image3 },
        name: "Amanda",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image4 },
        name: "Joe",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      }
    ]
  },
  {
    type: "thakur college",
    guideList: [
      {
        image: { image1 },
        name: "Alicia",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image2 },
        name: "Alison",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image3 },
        name: "Amanda",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image4 },
        name: "Joe",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      }
    ]
  }
];

const userDatassss = [
  {
    type: "mutual",
    userList: [
      {
        image: { image1 },
        name: "Alicia",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image2 },
        name: "Alison",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image3 },
        name: "Amanda",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image4 },
        name: "Joe",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      }
    ]
  },
  {
    type: "xelpmoc",
    userList: [
      {
        image: { image1 },
        name: "Alicia",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image2 },
        name: "Alison",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image3 },
        name: "Amanda",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image4 },
        name: "Joe",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      }
    ]
  },
  {
    type: "xaviers",
    userList: [
      {
        image: { image1 },
        name: "Alicia",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image2 },
        name: "Alison",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image3 },
        name: "Amanda",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image4 },
        name: "Joe",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      }
    ]
  },
  {
    type: "thakur college",
    userList: [
      {
        image: { image1 },
        name: "Alicia",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image2 },
        name: "Alison",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image3 },
        name: "Amanda",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      },
      {
        image: { image4 },
        name: "Joe",
        profession: "Trainer",
        location: "California",
        noOfMutualConnection: "3",
        tags: ["Fitness", "Trainer", "Yoga", "Exercise"]
      }
    ]
  }
];

class Connections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedWeek: 1,
      guide: true,
      user: false,
      request: true,
      sent: false,
      limitForGuide: 4,
      limitForUser: 4
    };
  }

  scrollToWeek = index => {
    this.setState({ selectedWeek: index });
  };

  onLoadMore = () => {
    this.props.showAllConnectionModal();
  };

  // onRequestLoadMore = () => {
  //   this.setState({
  //     limitForGuide: this.state.limitForGuide + 4
  //   });
  // };

  // onSentLoadMore = () => {
  //   this.setState({
  //     limitForUser: this.state.limitForUser + 4
  //   });
  // };

  render() {
    return (
      <React.Fragment>
        {" "}
        <div className={styles.headerHolder}>
          <div className={styles.fixedHeader}>
            <PrimaryHeaderContainer />
          </div>
        </div>
        <div className={styles.base}>
          <div className={styles.userSection}>
            <div className={styles.header}>
              <NavButton
                index={1}
                data={"GUIDE"}
                selected={1 === this.state.selectedWeek}
                onClick={() => {
                  this.scrollToWeek(1);
                }}
              ></NavButton>
              <NavButton
                index={2}
                data={"USER"}
                selected={2 === this.state.selectedWeek}
                onClick={() => {
                  this.scrollToWeek(2);
                }}
              ></NavButton>
            </div>
            {this.state.selectedWeek === 1 &&
              guideData.map((val, i) => {
                return (
                  <React.Fragment>
                    <div key={i} className={styles.userData}>
                      <div className={styles.heading}>
                        <div className={styles.headingLogo} />
                        Users you may know based on your{" "}
                        <div className={styles.boldText}> {val.type} </div>
                        connections
                      </div>
                      <div className={styles.userData}>
                        {guideData[i].guideList.map(value => {
                          return (
                            <div className={styles.main}>
                              <div className={styles.maining}>
                                <img
                                  src={value.image}
                                  className={styles.picture}
                                />
                              </div>
                              <div className={styles.bipart}>
                                <div className={styles.textBase}>
                                  <div className={styles.textHighLight}>
                                    {value.name}
                                  </div>
                                  <div className={styles.subTextHighLight}>
                                    {value.profession} | {value.location}
                                  </div>

                                  <div className={styles.imagebase}>
                                    <NumberOfConnections
                                      numberOfConnections={"3"}
                                    />
                                  </div>
                                </div>
                                <div className={styles.buttonSection}>
                                  <div className={styles.button}>
                                    <Button
                                      type="primary"
                                      color={"#4F439A"}
                                      backgroundColor={"#E0DEED"}
                                      width={"80px"}
                                      height={30}
                                      width={"100%"}
                                      label="CONNECT"
                                      borderRadius={3}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className={styles.loadMoreContainer}>
                      {" "}
                      {this.state.limitForGuide === val.length ? null : (
                        <div
                          className={styles.loadMore}
                          onClick={() => this.onLoadMore()}
                        >
                          <div className={styles.loadMoreText}>SEE MORE</div>
                        </div>
                      )}
                    </div>
                  </React.Fragment>
                );
              })}
            {this.state.selectedWeek === 2 &&
              userDatassss.map((val, i) => {
                return (
                  <React.Fragment>
                    <div key={i} className={styles.userData}>
                      <div className={styles.heading}>
                        <div className={styles.headingLogo} />
                        Users you may know based on your{" "}
                        <div className={styles.boldText}> {val.type} </div>
                        connections
                      </div>
                      <div className={styles.userData}>
                        {userDatassss[i].userList.map(value => {
                          return (
                            <div className={styles.main}>
                              <div className={styles.maining}>
                                <img
                                  src={value.image}
                                  className={styles.picture}
                                />
                              </div>
                              <div className={styles.bipart}>
                                <div className={styles.textBase}>
                                  <div className={styles.textHighLight}>
                                    {value.name}
                                  </div>
                                  <div className={styles.subTextHighLight}>
                                    {value.profession} | {value.location}
                                  </div>

                                  <div className={styles.imagebase}>
                                    <NumberOfConnections
                                      numberOfConnections={"3"}
                                    />
                                  </div>
                                </div>
                                <div className={styles.buttonSection}>
                                  <div className={styles.button}>
                                    <Button
                                      type="primary"
                                      color={"#4F439A"}
                                      backgroundColor={"#E0DEED"}
                                      width={"80px"}
                                      height={30}
                                      width={"100%"}
                                      label="CONNECT"
                                      borderRadius={3}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div>
                      {" "}
                      {this.state.limitForGuide === val.length ? null : (
                        <div
                          className={styles.loadMore}
                          onClick={() => this.onLoadMore()}
                        >
                          <div className={styles.loadMoreText}>SEE MORE</div>
                        </div>
                      )}
                    </div>
                  </React.Fragment>
                );
              })}
          </div>
          <div className={styles.requestSection}>
            <ConnectionRequest />
          </div>
          <MobileNavigatorHeader history={this.props.history} />
        </div>
      </React.Fragment>
    );
  }
}

export default Connections;
