import React, { Component } from "react";
import styles from "./ConnectionRequests.css";
import Profile from "../../../images/Alicia.png";
import NumberOfConnections from "../../../core/NumberOfConnections";
import Button from "../../../core/Button";
import NavButton from "./NavButton";

const request = [
  {
    data: Profile,
    name: "Meghana Sharma",
    designation: "Interaction Designer"
  },
  {
    data: Profile,
    name: "Meghana Sharma",
    designation: "Interaction Designer"
  },
  {
    data: Profile,
    name: "Meghana Sharma",
    designation: "Interaction Designer"
  },
  {
    data: Profile,
    name: "Meghana Sharma",
    designation: "Interaction Designer"
  },
  {
    data: Profile,
    name: "Meghana Sharma",
    designation: "Interaction Designer"
  },
  {
    data: Profile,
    name: "Meghana Sharma",
    designation: "Interaction Designer"
  },
  {
    data: Profile,
    name: "Meghana Sharma",
    designation: "Interaction Designer"
  },
  { data: Profile, name: "Meghana Sharma", designation: "Interaction Designer" }
];

const sent = [
  {
    data: Profile,
    name: " Sharma",
    designation: " Designer"
  },
  {
    data: Profile,
    name: " Sharma",
    designation: " Designer"
  },
  {
    data: Profile,
    name: " Sharma",
    designation: " Designer"
  },
  {
    data: Profile,
    name: " Sharma",
    designation: " Designer"
  },
  {
    data: Profile,
    name: " Sharma",
    designation: " Designer"
  },
  {
    data: Profile,
    name: " Sharma",
    designation: " Designer"
  },
  {
    data: Profile,
    name: " Sharma",
    designation: " Designer"
  },
  { data: Profile, name: " Sharma", designation: " Designer" }
];

export default class Connection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedWeek: 1,
      limitForRequest: 4,
      limitForSent: 4
    };
  }

  scrollToWeek = index => {
    this.setState({ selectedWeek: index });
  };

  onRequestLoadMore = () => {
    this.setState({
      limitForRequest: this.state.limitForRequest + 4
    });
  };

  onSentLoadMore = () => {
    this.setState({
      limitForSent: this.state.limitForSent + 4
    });
  };
  // onLoadMore = () => {
  //   this.props.showAllConnectionModal();
  // };
  render() {
    return (
      <div className={styles.base}>
        <div className={styles.connrequests}>Connection Request</div>
        <div className={styles.requestSent}>
          <NavButton
            index={1}
            data={"REQUEST"}
            selected={1 === this.state.selectedWeek}
            onClick={() => {
              this.scrollToWeek(1);
            }}
          ></NavButton>
          <NavButton
            index={2}
            data={"SENT"}
            selected={2 === this.state.selectedWeek}
            onClick={() => {
              this.scrollToWeek(2);
            }}
          ></NavButton>
        </div>
        <div className={styles.container}>
          {this.state.selectedWeek === 1 && (
            <div>
              {this.state.selectedWeek === 1 &&
                request.slice(0, this.state.limitForRequest).map(value => {
                  return (
                    <React.Fragment>
                      {
                        <div className={styles.main}>
                          <div className={styles.maining}>
                            <img src={Profile} className={styles.picture} />
                          </div>
                          <div className={styles.bipart}>
                            <div className={styles.textBase}>
                              <div className={styles.textHighLight}>
                                {value.name}
                              </div>
                              <div className={styles.subTextHighLight}>
                                {value.designation}
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
                                  label="ACCEPT"
                                  borderRadius={3}
                                />
                              </div>
                              <div className={styles.button}>
                                {" "}
                                <Button
                                  type="primary"
                                  color={"#4F439A"}
                                  width={"80px"}
                                  backgroundColor={"#fff"}
                                  height={30}
                                  width={"100%"}
                                  label="IGNORE"
                                  borderRadius={3}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      }
                    </React.Fragment>
                  );
                })}
              {this.state.limitForRequest === request.length ? null : (
                <div className={styles.loadMore} onClick={this.onLoadMore}>
                  <div className={styles.loadMoreText}>SEE MORE</div>
                </div>
              )}
            </div>
          )}
          {this.state.selectedWeek === 2 && (
            <div>
              {this.state.selectedWeek === 2 &&
                request.slice(0, this.state.limitForSent).map(value => {
                  return (
                    <React.Fragment>
                      {
                        <div className={styles.main}>
                          <div className={styles.maining}>
                            <img src={Profile} className={styles.picture} />
                          </div>
                          <div className={styles.bipart}>
                            <div className={styles.textBase}>
                              <div className={styles.textHighLight}>
                                {value.name}
                              </div>
                              <div className={styles.subTextHighLight}>
                                {value.designation}
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
                                  label="ACCEPT"
                                  borderRadius={3}
                                />
                              </div>
                              <div className={styles.button}>
                                {" "}
                                <Button
                                  type="primary"
                                  color={"#4F439A"}
                                  width={"80px"}
                                  backgroundColor={"#fff"}
                                  height={30}
                                  width={"100%"}
                                  label="IGNORE"
                                  borderRadius={3}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      }
                    </React.Fragment>
                  );
                })}
              {this.state.limitForSent === sent.length ? null : (
                <div
                  className={styles.loadMore}
                  onClick={() => this.onLoadMore()}
                >
                  <div className={styles.loadMoreText}>SEE MORE</div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}
