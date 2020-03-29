import React, { Component } from "react";
import Media from "react-media";
import CenteredContent from "../../core/CenteredContent";
import styles from "./MobileNavigationalHeader.css";

class MobileNavigatorHeader extends Component {
  goToHome = () => {
    this.props.history.push("/");
  };

  goToPeople = () => {
    this.props.history.push("/connections");
  };

  goToResources = () => {
    this.props.history.push("/resourcedetails");
  };

  goToProfile = () => {
    this.props.history.push("/profile");
  };

  goToMore = () => {
    this.props.history.push("/more");
  };

  render() {
    let pathName = window && window.location && window.location.pathname;
    return (
      <Media query="(max-width:1023px)">
        <div className={styles.navigatorTitleHeader}>
          <CenteredContent contentWidth="1400px">
            <div className={styles.navigator}>
              <div className={styles.headerItem}>
                {" "}
                <div
                  className={
                    !(pathName === "/")
                      ? styles.navigationLinks
                      : styles.visited
                  }
                  onClick={this.goToHome}
                >
                  <div
                    className={
                      !(pathName === "/") ? styles.homeIcon : styles.homeVisited
                    }
                  ></div>
                  <div className={styles.IconWithText}>HOME</div>
                </div>
                {/* ---------> */}
                <div
                  className={
                    !(pathName === "/connections")
                      ? styles.disabled
                      : styles.disabled
                  }
                  onClick={this.goToPeople}
                >
                  <div
                    className={
                      !(pathName === "/connections")
                        ? styles.peopleIcon
                        : styles.peopleVisited
                    }
                  ></div>
                  <div className={styles.IconWithText}>PEOPLE</div>
                </div>
                {/* ---------> */}
                {/* <div
                  className={
                    !(pathName === "/resources")
                      ? styles.navigationLinks
                      : styles.visited
                  }
                  onClick={this.goToResources}
                >
                  <div
                    className={
                      !(pathName === "/resources")
                        ? styles.resourceIcon
                        : styles.resourceIcon
                    }
                  ></div>
                  <div className={styles.IconWithText}></div>
                </div> */}
                <div
                  className={
                    !(pathName === "/profile")
                      ? styles.navigationLinks
                      : styles.visited
                  }
                  onClick={this.goToProfile}
                >
                  <div
                    className={
                      !(pathName === "/profile")
                        ? styles.profileIcon
                        : styles.profileVisited
                    }
                  ></div>
                  <div className={styles.IconWithText}>PROFILE</div>
                </div>
                <div
                  className={
                    !(pathName === "/more")
                      ? styles.navigationLinks
                      : styles.visited
                  }
                  onClick={this.goToMore}
                >
                  <div
                    className={
                      !(pathName === "/more")
                        ? styles.moreIcon
                        : styles.moreVisited
                    }
                  ></div>
                  <div className={styles.IconWithText}>MORE</div>
                </div>
              </div>
            </div>
          </CenteredContent>
        </div>
      </Media>
    );
  }
}

export default MobileNavigatorHeader;
