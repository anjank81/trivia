import React, { Component } from "react";
import styles from "./MobileHeader.css";
import Image from "../../core/Image";
import Button from "../general/Button";
import ProfileImage from "../../core/ProfileImage";
import menu from "../../images/Menu_Line.svg";
import profile from "../../images/Profile_Line.svg";
import {
  MORE,
  HOME,
  ACCESS_TOKEN,
  USER_DETAILS,
  PROFILE
} from "../../utils/constant";
import search from "../../core/img/Search.svg";
import SearchInput from "../general/SearchInput";
import * as Cookie from "../../utils/Cookie";
export default class MobileHeader extends Component {
  state = {
    showSearch: false,
    showLogOut: false
  };
  handleredirect = val => {
    if (this.props.history) {
      this.props.history.push(`${val}`);
    }
  };
  showLogOut = () => {
    this.setState({ showLogOut: !this.state.showLogOut });
  };

  handleLogout = () => {
    Cookie.deleteCookie(ACCESS_TOKEN);
    Cookie.deleteCookie(USER_DETAILS);

    this.handleredirect("/");
    window.location.reload();
  };

  render() {
    let isUserLogedIn = Cookie.getCookie(ACCESS_TOKEN) ? true : false;
    let userDetails = Cookie.getCookie(USER_DETAILS);
    let parsedData = userDetails && JSON.parse(userDetails);
    return (
      <div className={styles.base}>
        <div className={styles.container}>
          <div
            className={styles.logoContainer}
            onClick={() => this.handleredirect(HOME)}
          >
            <div className={styles.logo}></div>
          </div>

          <div className={styles.menuHolder}>
            <div className={styles.searchLoginContainer}>
              {this.state.showSearch && (
                <SearchInput
                  uiType="hollow"
                  placeholder="Search for People, Resources & Events"
                  value={""}
                  labelText={"Check"}
                  iconImage={search}
                  borderBottom="none"
                  fontColor={"#fff"}
                  onBlur={() =>
                    this.setState({ showSearch: !this.state.showSearch })
                  }
                />
              )}
              {!this.state.showSearch && (
                <div className={styles.searchLoginHolder}>
                  <div
                    className={styles.searchIcon}
                    onClick={() =>
                      this.setState({ showSearch: !this.state.showSearch })
                    }
                  ></div>
                </div>
              )}

              {!isUserLogedIn && (
                <div
                  style={{
                    display: this.state.showSearch ? "none" : "inline-block"
                  }}
                  className={styles.login}
                  onClick={() => this.props.showLoginModal()}
                >
                  <Button
                    type="secondary"
                    height={30}
                    width={82}
                    fontColor={"#4F439A"}
                    label="LOGIN"
                    borderRadius="5px 0px 0px 5px"
                    borderColor="#4F439A"
                    fontSize={"12px"}
                  />
                </div>
              )}

              {!isUserLogedIn && (
                <div
                  style={{
                    display: this.state.showSearch ? "none" : "inline-block"
                  }}
                  className={styles.signup}
                  onClick={() => this.props.showSignUpModal()}
                >
                  <Button
                    type="primary"
                    backgroundColor={"#4F439A"}
                    fontColor={"#fff"}
                    height={30}
                    borderRadius="0px 5px 5px 0px"
                    width={92}
                    label="SIGN UP"
                    fontSize={"12px"}
                  />
                </div>
              )}
            </div>
            <div
              className={styles.menu}
              onClick={() => this.handleredirect(MORE)}
            ></div>
            {isUserLogedIn && (
              <div
                className={styles.logOutContainer}
                onClick={() => this.showLogOut()}
              >
                <ProfileImage
                  image={
                    this.props.userProfileInfo &&
                    this.props.userProfileInfo.user_profile_photo
                      ? this.props.userProfileInfo.user_profile_photo.photo_url
                      : profile
                  }
                  size={4}
                />
                {this.state.showLogOut && (
                  <div className={styles.logOut}>
                    <div
                      className={styles.logoutText}
                      onClick={() => this.handleredirect(PROFILE)}
                    >
                      PROFILE
                    </div>
                    <div
                      className={styles.logoutText}
                      onClick={() => this.handleLogout()}
                    >
                      LOGOUT
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
