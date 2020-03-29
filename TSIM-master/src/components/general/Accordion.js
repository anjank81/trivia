import React, { Component } from "react";
import styles from "./Accordion.css";
import PropTypes from "prop-types";
import { Collapse } from "react-collapse";
import Icon from "../../core/Icon";
import HorizantalIconWithHeader from "../../core/HorizantalIconWithHeader";

export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  openMenu = index => {
    if (this.props.onOpen) {
      this.props.onOpen(index);
      this.setState(prevState => ({
        isOpen: !prevState.isOpen
      }));
    }
  };
  render() {
    let activeheader = "Accordion-textBox";
    let background = "";
    if (this.props.activeIndex === this.props.currentAccordian) {
      activeheader = "Accordion-textBoxActive";
      background = this.props.activeBackground;
    }
    return (
      <div
        className="Accordion"
        style={{
          padding: `${this.props.offset}px`,
          backgroundColor: `${background}`,
          border: this.props.border
        }}
      >
        <div
          className="Accordion-holder"
          style={{ cursor: "pointer" }}
          onClick={() => {
            this.openMenu(this.props.currentAccordian);
          }}
        >
          <div
            className={activeheader}
            style={{
              fontSize: this.props.headerFontSize,
              position: "relative"
            }}
          >
            {this.props.text && (
              <div
                className={
                  !(
                    this.props.activeIndex === this.props.currentAccordian &&
                    this.state.isOpen
                  )
                    ? styles.AccordionText
                    : styles.highlightedAccordianText
                }
              >
                <HorizantalIconWithHeader
                  icon={this.props.image}
                  size={this.props.size}
                  text={this.props.text}
                  fontSize={this.props.fontSize}
                  fontColor={this.props.fontColor}
                />
              </div>
            )}
            <div
              className={
                !(
                  this.props.activeIndex === this.props.currentAccordian &&
                  this.state.isOpen
                )
                  ? styles.AccordionIcon
                  : styles.activeAccordionIcon
              }
            />
          </div>
        </div>

        <Collapse
          isOpened={
            this.props.activeIndex === this.props.currentAccordian &&
            this.state.isOpen
          }
        >
          <div className={styles.collapse}> {this.props.children}</div>
        </Collapse>
      </div>
    );
  }
}
Accordion.propTypes = {
  text: PropTypes.string,
  key: PropTypes.number,
  iconImageURL: PropTypes.string,
  headerFontSize: PropTypes.number,
  offset: PropTypes.number,
  activeBackground: PropTypes.string,
  controlled: PropTypes.bool,
  onOpen: PropTypes.func,
  isOpen: PropTypes.bool,
  headerElement: PropTypes.bool
};
Accordion.defaultProps = {
  headerFontSize: 10,
  controlled: false,
  offset: 0,
  headerElement: false,
  border: 0,
  position: "relative"
};
