import React, { Component } from "react";
import BottomSlideModal from "./BottomSlideModal";
import styles from "./SelectEvent.css";
import Avatar from "./Avatar.js";
import CenterSlideModel from "./CenterSlideModel/CenterSlideModel";
import event from "../../../images/Intro_screen_Events.svg";
import blog from "../../../images/Intro_screen_Profile.svg";
import feed from "../../../images/Intro_screen_Feed.svg";
import profile from "../../../images/Intro_screen_Resources.svg";
import { EVENT, BLOG, FEED, PROFILE } from "../../../utils/constant";
import NonCloseCenterModal from "./CenterSlideModel/NonCloseCenterModal";
const eventType = [
  { name: "Explore Events", routeLink: EVENT, imageUrl: event },
  { name: "Access Resource", routeLink: BLOG, imageUrl: blog },
  { name: "View user feed", routeLink: "/", imageUrl: feed },
  { name: "Build your profile", routeLink: PROFILE, imageUrl: profile }
];
export default class SelectEventModule extends Component {
  state = { active: "" };
  handleClick = val => {
    this.setState({
      active: val.name
    });
    this.handleredirect(val.routeLink);
    if (val.routeLink != "/") {
      window.location.reload(true);
    }
  };
  handleredirect = val => {
    if (this.props.history) {
      this.props.history.push(`${val}`);
      if (val === FEED) {
        this.props.showTopicSelection();
      }
    }
  };
  render() {
    return (
      <NonCloseCenterModal>
        <div
          style={{
            width: "auto",
            background: "#fff",
            borderRadius: "5px",
            paddingBottom: " 40px"
          }}
        >
          <div className={styles.title}>SELECT ONE TO START</div>
          <div className={styles.avatcont}>
            {eventType.map(val => {
              return (
                <Avatar
                  onClick={() => this.handleClick(val)}
                  image={val.imageUrl}
                  selected={this.state.active === val.name ? true : false}
                >
                  {val.name}
                </Avatar>
              );
            })}
          </div>
          <div className={styles.header}>
            Explore
            <span style={{ color: "#AD5DA3" }}> The star in me</span>
          </div>
          <div className={styles.exdesc}>
            Create your best profile, connect with other professionals, access
            curated content, seek or share career guidance and start networking!
          </div>
        </div>
      </NonCloseCenterModal>
    );
  }
}
