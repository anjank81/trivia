import React from "react";
import styles from "./Accordion.css";
import PropTypes from "prop-types";
import { Collapse } from "react-collapse";

export default class Accordion extends React.Component {
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
              <h2
                className={
                  !(
                    this.props.activeIndex === this.props.currentAccordian &&
                    this.state.isOpen
                  )
                    ? styles.AccordionText
                    : styles.highlightedAccordianText
                }
              >
                {this.props.text}
              </h2>
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
          {this.props.children}
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
