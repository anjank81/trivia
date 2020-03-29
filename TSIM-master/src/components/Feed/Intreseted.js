import React, { Component } from "react";
import DesktopOnly from "../general/DesktopOnly";
import MobileOnly from "../general/MobileOnly";
import * as Cookie from "../../utils/Cookie";
import { USER_DETAILS, EVENT_DETAILS_WITHOUT_ID } from "../../utils/constant";
import styles from "./Intreseted.css";
import check_blue from "../../images/check_blue.svg";
import HorizantalIconWithHeader from "../../core/HorizantalIconWithHeader";
import Button from "../general/Button";

export default class Intreseted extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        intrested: false
      };
    }
  }

  handleIntrestClick = () => {
    let user = Cookie.getCookie(USER_DETAILS);
    let parsedUser = user ? JSON.parse(user) : null;
    let userId = parsedUser ? parsedUser.userId : null;
    let details = {
      userId: userId,
      eventId: this.props.eventId,
      status: !this.state.intrested
    };
    this.props.addUserIntrest(details);
    this.setState({ intrested: !this.state.intrested });
  };
  render() {
    const eventDetails = this.props;
    return (
      <DesktopOnly>
        <div className={styles.eventButton} onClick={this.handleIntrestClick}>
          {eventDetails &&
          !this.state.intrested &&
          !eventDetails.userInterested ? (
            <Button
              type="primary"
              backgroundColor={"#fff"}
              fontColor={"#4F439A"}
              height={50}
              width={210}
              label={"I am interested"}
              borderRadius={10}
            />
          ) : (
            <HorizantalIconWithHeader
              icon={check_blue}
              size={25}
              fontSize={"18px"}
              fontColor={"#4f439a"}
              text={"Interested"}
            />
          )}
        </div>
      </DesktopOnly>
    );
  }
}
