import React, { Component } from "react";
import styles from "./SecondaryHeader.css";
import Button from "../general/Button";
import search from "../../core/img/Search-white.svg";
import Icon from "../../core/Icon";
import { HOME } from "../../utils/constant";
import SearchInput from "../general/SearchInput";
import MobileOnly from "../general/MobileOnly";
import DesktopOnly from "../general/DesktopOnly";
export default class SecondaryHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearch: false
    };
  }
  handleredirect = () => {
    if (this.props.history) {
      this.props.history.push(HOME);
    }
  };
  showModal = () => {
    if (this.props.showLoginModule) {
      this.props.showLoginModule(this.props);
    }
  };
  showSignUpModal = () => {
    if (this.props.showSignUpModule) {
      this.props.showSignUpModule(this.props);
    }
  };
  render() {
    return (
      <div className={styles.headerBase}>
        <div className={styles.headerHolder}>
          <div
            className={styles.logoHolder}
            onClick={() => this.handleredirect()}
          ></div>
          <div className={styles.searchLoginHolder}>
            {/* {this.state.showSearch && (
              <div className={styles.search}>
                <SearchInput
                  uiType="hollow"
                  placeholder="Search for People, Resources & Events"
                  value={""}
                  labelText={"Check"}
                  iconImage={search}
                  borderBottom="none"
                  fontColor={"#fff"}
                  onBlur={() => this.setState({ showSearch: false })}
                />
              </div>
            )} */}

            <div
              className={styles.search}
              onClick={() => this.setState({ showSearch: true })}
            >
              <Icon image={search} size={"20px"}></Icon>
            </div>

            <DesktopOnly>
              <div className={styles.buttonHolder}>
                <div className={styles.login} onClick={() => this.showModal()}>
                  <Button
                    type="secondary"
                    height={40}
                    width={120}
                    fontColor={"#FFF"}
                    label="LOGIN"
                    borderColor="none"
                  />
                </div>
                <div
                  className={styles.signup}
                  onClick={() => this.showSignUpModal()}
                >
                  <Button
                    type="primary"
                    backgroundColor={"#fff"}
                    fontColor={"#4F439A"}
                    height={40}
                    width={120}
                    borderColor={"#ffffff"}
                    borderRadius={"5px"}
                    label="SIGN UP"
                  />
                </div>
              </div>
            </DesktopOnly>
            <MobileOnly>
              <div
                className={styles.buttonHolder}
                style={{
                  display: this.state.showSearch ? "none" : "inline-block"
                }}
              >
                <div className={styles.login} onClick={() => this.showModal()}>
                  <Button
                    type="secondary"
                    height={40}
                    width={120}
                    fontColor={"#FFF"}
                    label="LOGIN"
                    borderColor="none"
                  />
                </div>
                <div
                  className={styles.signup}
                  onClick={() => this.showSignUpModal()}
                >
                  <Button
                    type="primary"
                    backgroundColor={"#fff"}
                    fontColor={"#4F439A"}
                    height={40}
                    width={120}
                    borderColor={"#ffffff"}
                    borderRadius={"5px"}
                    label="SIGN UP"
                  />
                </div>
              </div>
            </MobileOnly>
          </div>
        </div>
      </div>
    );
  }
}
