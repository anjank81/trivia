import React, { Component } from "react";
import styles from "./MorePage.css";
import landingImage from "../../images/landing-page-Event.svg";
import Icon from "../../core/Icon";
import CenteredContent from "../../core/CenteredContent";
import PrimaryHeaderContainer from "./container/PrimaryHeaderContainer";
import DesktopOnly from "../general/DesktopOnly";
import MobileOnly from "../general/MobileOnly";
import { BLOG, EVENT, SEEK_GUIDE, SETTING } from "../../utils/constant";
import resources from "../../images/Resources_Header.svg";
import guide from "../../images/Guides_header.svg";
import event from "../../images/Events_header.svg";
import setting from "../../images/Location_fill.svg";
import coach from "../../images/Coaches.svg";
import bookmark from "../../images/Bookmark_off.svg";
import booking from "../../images/My_Bookings.svg";
import MobileNavigatorHeader from "../modules/MobileNavigationalHeader";
const more = [
  { name: "EVENTS", routingURL: EVENT, imageURL: event },
  { name: "RESOURCES", routingURL: BLOG, imageURL: resources },
  { name: "GUIDES", routingURL: null, imageURL: guide, disabled: true },
  { name: "COACHES", routingURL: null, imageURL: coach, disabled: true },
  { name: "MY BOOKING", routingURL: null, imageURL: booking, disabled: true },
  { name: "MY BOOKMARK", routingURL: null, imageURL: bookmark, disabled: true },
  { name: "MY SETTINGS", routingURL: null, imageURL: setting, disabled: true }
];
export default class MorePage extends Component {
  handleredirect = val => {
    if (this.props.history && val) {
      this.props.history.push(`${val}`);
    }
  };
  render() {
    return (
      <div className={styles.moreHolder}>
        <div className={styles.fixedHeader}>
          <PrimaryHeaderContainer history={this.props.history} />
        </div>{" "}
        <CenteredContent>
          <div className={styles.more}>
            <div className={styles.logoHolder}>
              {more.map(value => {
                return (
                  <div className={styles.border}>
                    <div
                      className={
                        value.disabled ? styles.disable : styles.linkText
                      }
                      onClick={() => this.handleredirect(value.routingURL)}
                    >
                      <DesktopOnly>
                        <Icon image={value.imageURL} size={50} />
                      </DesktopOnly>
                      <MobileOnly>
                        <Icon image={value.imageURL} size={30} />
                      </MobileOnly>
                    </div>
                    <div className={styles.label}>{value.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </CenteredContent>
        <MobileNavigatorHeader history={this.props.history} />
      </div>
    );
  }
}
