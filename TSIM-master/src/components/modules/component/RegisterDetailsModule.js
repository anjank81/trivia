import React, { Component } from "react";
import BottomSlideModal from "./BottomSlideModal";
import styles from "./RegisterDetailsModule.css";
import Back from "../../../images/Back.svg";
import Icon from "../../../core/Icon";
import VerticalStatus from "../../Feed/VerticalStatus";
import time from "../../../images/time.svg";
import calander from "../../../images/Date.svg";
import ticket from "../../../images/Ticketprice.svg";
import ticket_blue from "../../../images/Ticketprice_blue.svg";
import Button from "../../general/Button";
import Accordion from "../../general/Accordion";
import edit from "../../../images/Edit-profile.svg";
import location from "../../../images/Location-white.svg";
import date_blue from "../../../images/Date-blue.svg";
import time_blue from "../../../images/time_blue.svg";
import Counter from "../../general/Counter";
import AttendeeDetails from "./AttendeeDetails";
import HorizantalIconWithHeader from "../../../core/HorizantalIconWithHeader";
import { RAZOR_PAY_ID, USER_DETAILS } from "../../../utils/constant";
import SecondaryLoader from "../../general/SecondaryLoader";
import logo from "../../../images/razorPay.svg";
import ControlInput from "../../../core/ControlInput";
import * as Cookie from "../../../utils/Cookie";

import {
  isEmpty,
  lettersWithSpace,
  validateEmail,
  validatePhone,
  onlyLetters,
  nameValidation
} from "../../../utils/validation.js";
const user = Cookie.getCookie(USER_DETAILS)&&JSON.parse(Cookie.getCookie(USER_DETAILS));
export default class RegisterDetailsModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectTicket: "active",
      attendedetails: "inActive",
      review: "inActive",
      Proceed: 1,
      activeIndex: null,
      name: user && user.firstName ? user.firstName : "",
      email: user && user.email ? user.email : "",
      mobileno: "",
      name2: "",
      email2: "",
      mobileno2: "",
      counter: 1,
      ticketCounter: [],
      attende1Detials: null,
      attende2Detials: null,
      showInputError: false,
      eventPackages: null,
      registerdAddress: null,
      totalPrice: 0,
      eventId: null,
      mobilenoError: false,
      nameError: false,
      emailError: false,
      showPaymentModal: false,
      selectedDate:
        this.props.registerEventList && this.props.registerEventList[0],
      selectedTime:
        this.props.registerEventList && this.props.registerEventList[0],
      selectedTicket:
        this.props.registerEventList && this.props.registerEventList[0],
      showPrice:
        this.props.registerEventList && this.props.registerEventList.length > 1
          ? false
          : true,
      freeBooking: false
    };
  }
  componentDidMount = () => {
    this.props.getRegisterEvent(this.props.eventId);
  };
  handleClose = () => {
    if (this.props.handlePageLoad) {
      window.location.reload();
    } else {
      this.props.closeModal();
    }
  };
  componentWillReceiveProps = nextProps => {
    let totalPrice = this.state.totalPrice;
    if (nextProps.registerEventList) {
      this.setState({
        selectedTicket:
          nextProps.registerEventList && nextProps.registerEventList[0]
      });
    }
    if (
      nextProps &&
      nextProps.paymentDetails &&
      nextProps.paymentDetails.data &&
      nextProps.paymentDetails.data.eventRegistrationId &&
      nextProps.paymentDetails.data.orderId == null
    ) {
      this.setState({ showPaymentModal: true, freeBooking: true });
    } else if (nextProps && nextProps.paymentDetails) {
      let options = {
        key: RAZOR_PAY_ID,
        amount: JSON.stringify(totalPrice * 100),
        currency: "INR", // 2000 paise = INR 20, amount in paisa
        name: "TSIM",
        description: "Event Registration",
        image: logo,
        order_id:
          nextProps.paymentDetails &&
          nextProps.paymentDetails.data &&
          nextProps.paymentDetails.data.orderId,
        handler: function(response) {
          let details = {
            referenceId: response.razorpay_payment_id,
            signature: response.razorpay_signature,
            orderId: response.razorpay_order_id
          };
          nextProps.paymentStatus(2, details);
        },
        prefill: {
          name: this.state.name,
          email: this.state.email,
          contact: this.state.mobileno
        },
        notes: {
          address: this.state.registerdAddress
        },
        theme: {
          color: "#F37254"
        }
      };

      let rzp = new window.Razorpay(options);
      rzp.open();
    }
    if (nextProps && nextProps.paymentStatusDetails) {
      this.setState({ showPaymentModal: true });
    }
  };
  onKeyUp = val => {
    if (val.email) {
      if (validateEmail(val.email)) {
        this.setState({ emailError: true });
      }
    }
    if (val.name) {
      if (nameValidation(val.name)) {
        this.setState({ nameError: true });
      }
    }
  };
  handleButtonClick = () => {
    let eventPages =
      this.props.registerEventList &&
      this.props.registerEventList[0].eventPackages[0];
    let attende = [];
    if (this.state.Proceed == 1) {
      let dummyCounter = [];
      let addressField = {
        name: "",
        email: "",
        mobilNo: ""
      };
      for (let i = 1; i < this.state.counter; i++) {
        addressField.id = i;
        dummyCounter.push(addressField);
      }
    }
    attende.push({
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobileno,
      primary: true
    });
    if (this.state.Proceed == 3) {
      this.setState({
        registerdAddress: attende,
        totalPrice:
          this.state.counter * this.state.selectedTicket.eventPackages[0].price,
        eventId: this.state.selectedTicket.eventSlotId
      });
      let data = {
        userId: 3,
        slotId: this.state.selectedTicket.eventSlotId,
        seats: [
          {
            packageId: this.state.selectedTicket.eventPackages[0]
              .eventPackageId,
            noOfSeats: this.state.counter,
            price:
              this.state.counter *
              this.state.selectedTicket.eventPackages[0].price
          }
        ],
        attendees: [...attende]
      };
      let eventId = this.props.eventId;
      this.props.bookEvent(eventId, data);
    } else if (this.state.Proceed == 4) {
      this.props.closeModal();
      window.scrollTo(0, 0);
    } else {
      if (this.state.Proceed == 2) {
        if (!this.state.name) {
          this.setState({
            nameError: true
          });
        }
        if (!this.state.email) {
          this.setState({
            emailError: true
          });
        }
        if (!this.state.mobileno) {
          this.setState({
            mobilenoError: true
          });
        }
        if (
          !this.state.mobilenoError &&
          !this.state.nameError &&
          !this.state.emailError
        ) {
          if (this.state.name && this.state.email && this.state.mobileno) {
            this.setState({ Proceed: this.state.Proceed + 1 });
            window.scrollTo(0, 0);
          }
        }
      } else {
        this.setState({ Proceed: this.state.Proceed + 1 });
        window.scrollTo(0, 0);
      }
    }
  };
  goBack = () => {
    if (this.state.Proceed != 1) {
      this.setState({ Proceed: this.state.Proceed - 1 });
    }
    if (this.state.Proceed == 1) {
      this.props.closeModal();
    }
  };
  setTicketCounter = val => {
    this.setState({ counter: val });
  };
  setcounter = (val, name) => {
    let newData = [];
    let dataExist =
      this.state.ticketCounter &&
      this.state.ticketCounter.length > 0 &&
      this.state.ticketCounter.find((ticket, i) => {
        return ticket.name === name;
      });
    if (this.state.ticketCounter.length < 1) {
      newData.push({ name: name, counter: val });
      this.setState({ ticketCounter: newData });
    } else {
      if (dataExist) {
        var index = this.state.ticketCounter.findIndex(function(ticket) {
          return ticket.name == dataExist.name;
        });
        newData.push(...this.state.ticketCounter);
        newData[index].name = name;
        newData[index].counter = val;
      } else {
        newData.push(...this.state.ticketCounter);
        newData.push({ name: name, counter: val });
        this.setState({ ticketCounter: newData });
      }
    }
  };
  onOpenAccordian = activeIndex => {
    if (activeIndex === 3) {
      this.setState({ showPrice: true });
    }
    this.setState({
      activeIndex
    });
  };
  addAttende1Details = val => {
    this.setState({ attende1Detials: val, showInputError: false });
  };
  addAttende2Details = val => {
    this.setState({ attende2Detials: val, showInputError: false });
  };
  handleTimeSelection = details => {
    this.setState({
      selectedTime: details,
      selectTicket: details,
      showPrice: false
    });
  };
  handleDateSelection = details => {
    this.setState({
      selectedDate: details,
      selectTicket: details,
      showPrice: false
    });
  };
  handleTicketSelection = details => {
    this.setState({ selectedTicket: details, showPrice: true });
  };

  render() {
    let uniqEventDate =
      this.props.registerEventList &&
      this.props.registerEventList.filter(
        (v, i, a) => a.findIndex(t => t.date === v.date) === i
      );
    let uniqEventTime = this.state.selectedDate
      ? this.props.registerEventList &&
        this.props.registerEventList.filter(event => {
          return event.date === this.state.selectedDate.date;
        })
      : this.props.registerEventList &&
        this.props.registerEventList.filter(
          (v, i, a) =>
            a.findIndex(
              t => t.startTime === v.startTime && t.endTime === t.endTime
            ) === i
        );
    let uniqTicket = this.state.selectedTime
      ? this.props.registerEventList &&
        this.props.registerEventList.filter(event => {
          return (
            event.startTime === this.state.selectedTime.startTime &&
            event.endTime === this.state.selectedTime.endTime
          );
        })
      : this.props.registerEventList;
    return (
      <React.Fragment>
        <div
          className={styles.showCross}
          onClick={() => this.props.closeModal()}
        />
        {this.props.paymentLoader ? (
          <SecondaryLoader />
        ) : (
          <BottomSlideModal>
            <div className={styles.modalBase}>
              <div className={styles.registerHeader}>
                <div className={styles.icon} onClick={() => this.goBack()}>
                  {!this.state.showPaymentModal && (
                    <Icon image={Back} size={22} />
                  )}
                </div>
                <div className={styles.registerText}>Registration Details</div>
              </div>
              {!this.state.showPaymentModal && this.state.Proceed !== 6 && (
                <div className={styles.verticalScroller}>
                  <VerticalStatus
                    first={
                      this.state.Proceed == 1
                        ? "active"
                        : this.state.Proceed > 1 && "complete"
                    }
                    second={
                      this.state.Proceed == 2
                        ? "active"
                        : this.state.Proceed > 2 && "complete"
                    }
                    third={
                      !this.state.showPaymentModal
                        ? this.state.Proceed > 2
                          ? "active"
                          : this.state.Proceed > 3 && "complete"
                        : "complete"
                    }
                  />
                </div>
              )}

              <div className={styles.contentHolder}>
                <div className={styles.selectHeader}>
                  {!this.state.showPaymentModal
                    ? this.state.Proceed == 2
                      ? "Add attendee details"
                      : this.state.Proceed === 3
                      ? "Review Order"
                      : this.state.Proceed === 4
                      ? this.state.freeBooking
                        ? "Registration Confirmation"
                        : "Payment Confirmation"
                      : "Select number of tickets"
                    : "Payment Confirmation"}
                </div>
                {this.state.Proceed < 3 && (
                  <div className={styles.buildingBlocks}>
                    {this.props.eventDetails && this.props.eventDetails.title}
                  </div>
                )}
                {this.state.Proceed < 3 && (
                  <div className={styles.advanceText}>
                    {this.props.eventDetails &&
                      this.props.eventDetails.eventLevel}
                  </div>
                )}{" "}
                {this.state.Proceed === 1 && (
                  <div className={styles.registerStaticDetails}>
                    {this.props.registerEventList &&
                    this.props.registerEventList.length > 1 ? (
                      <Accordion
                        offset={"10px 0"}
                        key={1}
                        image={date_blue}
                        size={15}
                        fontColor={"#4F409C"}
                        fontSize={"14px"}
                        currentAccordian={1}
                        text={"Select Date"}
                        onOpen={index => this.onOpenAccordian(index)}
                        activeIndex={this.state.activeIndex}
                      >
                        {uniqEventDate &&
                          uniqEventDate.map(details => {
                            return (
                              <div
                                className={styles.dataHolder}
                                onClick={() =>
                                  this.handleDateSelection(details)
                                }
                              >
                                <div
                                  className={
                                    this.state.selectedDate &&
                                    this.state.selectedDate.eventSlotId ===
                                      details.eventSlotId
                                      ? styles.buttonHolder
                                      : styles.defaultButtonHolder
                                  }
                                >
                                  <div className={styles.buttonS}>
                                    {details.date}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      </Accordion>
                    ) : (
                      <div className={styles.iconWithText}>
                        <HorizantalIconWithHeader
                          icon={calander}
                          spacing={"7px"}
                          size={15}
                          text={
                            this.props.registerEventList &&
                            this.props.registerEventList[0].date
                          }
                        />
                      </div>
                    )}
                    {this.props.registerEventList &&
                    this.props.registerEventList.length > 1 ? (
                      <Accordion
                        offset={"10px 0"}
                        key={2}
                        image={time_blue}
                        size={15}
                        fontColor={"#4F409C"}
                        fontSize={"14px"}
                        currentAccordian={2}
                        text={"Select Time"}
                        onOpen={index => this.onOpenAccordian(index)}
                        activeIndex={this.state.activeIndex}
                      >
                        {uniqEventTime &&
                          uniqEventTime.map(details => {
                            return (
                              <div
                                className={styles.dataHolder}
                                onClick={() =>
                                  this.handleTimeSelection(details)
                                }
                              >
                                <div
                                  className={
                                    this.state.selectedTime &&
                                    this.state.selectedTime.eventSlotId ===
                                      details.eventSlotId
                                      ? styles.buttonHolder
                                      : styles.defaultButtonHolder
                                  }
                                >
                                  <div className={styles.buttonS}>
                                    {`${details.startTime}-${details.endTime}`}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      </Accordion>
                    ) : (
                      <div className={styles.iconWithText}>
                        <HorizantalIconWithHeader
                          spacing={"7px"}
                          icon={time}
                          size={15}
                          text={`${this.props.registerEventList &&
                            this.props.registerEventList[0].startTime}-
                        ${this.props.registerEventList &&
                          this.props.registerEventList[0].endTime}`}
                        />
                      </div>
                    )}
                    <div className={styles.ticketDetailsHolder}>
                      {this.props.registerEventList &&
                      this.props.registerEventList.length > 1 ? (
                        <Accordion
                          offset={"10px 0"}
                          key={3}
                          backgroundColor={"#ebeced"}
                          image={ticket_blue}
                          size={15}
                          fontColor={"#4F409C"}
                          fontSize={"14px"}
                          currentAccordian={3}
                          text={"Select Tickets"}
                          onOpen={index => this.onOpenAccordian(index)}
                          activeIndex={this.state.activeIndex}
                        >
                          {uniqTicket &&
                            uniqTicket.map(details => {
                              return (
                                <div className={styles.packgeHolder}>
                                  {details.eventPackages &&
                                  details.eventPackages[0] ? (
                                    <div className={styles.personHolder}>
                                      <div className={styles.textHolder}>
                                        <div className={styles.personText}>
                                          {
                                            details.eventPackages[0]
                                              .seatCategory
                                          }
                                        </div>
                                        <div className={styles.cost}>
                                          {details.eventPackages[0].price > 1
                                            ? ` INR ${details.eventPackages[0].price}`
                                            : "Free"}{" "}
                                          per person
                                        </div>
                                      </div>
                                      <div
                                        className={styles.counter}
                                        onClick={() =>
                                          this.handleTicketSelection(details)
                                        }
                                      >
                                        <Counter
                                          value={
                                            this.state.selectedTicket &&
                                            this.state.selectedTicket
                                              .eventPackageId ===
                                              details.eventPackageId
                                              ? this.state.counter
                                              : 1
                                          }
                                          setvalue={val =>
                                            this.setTicketCounter(val)
                                          }
                                          max={
                                            details.eventPackages[0]
                                              .maxBookingAllowed
                                          }
                                        ></Counter>
                                      </div>
                                    </div>
                                  ) : (
                                    <div className={styles.nodata}>
                                      No Events Available
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                        </Accordion>
                      ) : (
                        this.props.registerEventList &&
                        this.props.registerEventList[0].eventPackages &&
                        this.props.registerEventList[0].eventPackages.map(
                          val => {
                            return (
                              <div className={styles.personHolder}>
                                <div className={styles.textHolder}>
                                  <div className={styles.personText}>
                                    {val.seatCategory}
                                  </div>
                                  <div className={styles.cost}>
                                    {val.price > 1
                                      ? `INR ${val.price}`
                                      : "Free"}{" "}
                                    per person
                                  </div>
                                </div>
                                <div className={styles.counter}>
                                  <Counter
                                    value={this.state.counter}
                                    setvalue={val => this.setTicketCounter(val)}
                                    max={val.maxBookingAllowed}
                                  ></Counter>
                                </div>
                              </div>
                            );
                          }
                        )
                      )}
                    </div>
                  </div>
                )}
                {this.state.Proceed == 2 && (
                  <div className={styles.attenderHolder}>
                    <div className={styles.attendes}>
                      <div className={styles.attendes}>
                        <div className={styles.attendeHeader}>
                          {this.props.title}{" "}
                          {this.props.subTitle && (
                            <span>({this.props.subTitle})</span>
                          )}
                        </div>
                        <div className={styles.inputHolder}>
                          <ControlInput
                            value={this.state.name}
                            placeholder={"Name"}
                            height={40}
                            onChange={val => {
                              this.setState({ name: val, nameError: false });
                            }}
                            borderColor={
                              this.state.nameError ? "#d81818" : "#d2d2d2"
                            }
                            onBlur={val =>
                              this.onKeyUp({ name: val.target.value })
                            }
                          />
                        </div>
                        {this.state.nameError && (
                          <div className={styles.error}>
                            Please enter valid name
                          </div>
                        )}
                        <div className={styles.inputHolder}>
                          <ControlInput
                            value={this.state.email}
                            placeholder={"Email Address"}
                            height={40}
                            onChange={val => {
                              this.setState({ email: val, emailError: false });
                            }}
                            borderColor={
                              this.state.emailError ? "#d81818" : "#d2d2d2"
                            }
                            onBlur={val =>
                              this.onKeyUp({ email: val.target.value })
                            }
                          />
                        </div>
                        {this.state.emailError && (
                          <div className={styles.error}>
                            Please enter valid e-mail address
                          </div>
                        )}
                        <div className={styles.inputHolder}>
                          <ControlInput
                            value={this.state.mobileno}
                            placeholder={"Mobile No."}
                            height={40}
                            type={"number"}
                            onChange={val => {
                              this.setState({
                                mobileno: val,
                                mobilenoError: false
                              });
                            }}
                            borderColor={
                              this.state.mobilenoError ? "#d81818" : "#d2d2d2"
                            }
                            onBlur={val =>
                              this.onKeyUp({ mobileno: val.target.value })
                            }
                          />
                        </div>
                        {this.state.mobilenoError && (
                          <div className={styles.error}>
                            Please enter valid mobile no
                          </div>
                        )}
                      </div>
                      {/* <AttendeeDetails
                        title={""}
                        onChange={val => this.addAttende1Details(val)}
                        showInputError={this.state.showInputError}
                        name={
                          this.state.attende1Detials &&
                          this.state.attende1Detials.name
                        }
                        email={
                          this.state.attende1Detials &&
                          this.state.attende1Detials.email
                        }
                        mobileNo={
                          this.state.attende1Detials &&
                          this.state.attende1Detials.mobileno
                        }
                      /> */}
                    </div>
                    {this.state.counter > 1 && (
                      <div className={styles.Attendes}>
                        <div className={styles.remark}>
                          (Other attendee details will be collected via email)
                        </div>
                      </div>
                    )}
                  </div>
                )}
                {(this.state.Proceed == 3 || this.state.showPaymentModal) && (
                  <div className={styles.reviewHolder}>
                    <div className={styles.orderHeaderHolder}>
                      <div className={styles.orderHeader}>ORDER SUMMARY</div>
                      {!this.state.showPaymentModal && (
                        <div
                          className={styles.editIconHolder}
                          onClick={() => this.setState({ Proceed: 1 })}
                        >
                          <Icon image={edit} size={30} />
                        </div>
                      )}
                    </div>
                    <div className={styles.reviewDetailsHolder}>
                      <div className={styles.buildingBlocks}>
                        {this.props.eventDetails &&
                          this.props.eventDetails.title}
                      </div>
                      <div className={styles.advanceText}>
                        {" "}
                        {this.props.eventDetails &&
                          this.props.eventDetails.eventLevel}
                      </div>
                      <div className={styles.iconWithText}>
                        <HorizantalIconWithHeader
                          icon={time}
                          size={15}
                          text={`${this.state.selectedTicket &&
                            this.state.selectedTicket.startTime}-
                                ${this.state.selectedTicket &&
                                  this.state.selectedTicket.endTime}`}
                        />
                      </div>
                      <div className={styles.iconWithText}>
                        <HorizantalIconWithHeader
                          icon={calander}
                          size={15}
                          text={
                            this.state.selectedTicket &&
                            this.state.selectedTicket.date
                          }
                        />
                      </div>
                      <div className={styles.iconWithText}>
                        <HorizantalIconWithHeader
                          icon={location}
                          size={15}
                          text={
                            this.props.eventDetails &&
                            this.props.eventDetails.locality &&
                            this.props.eventDetails.city
                              ? `${this.props.eventDetails.locality},${this
                                  .props.eventDetails &&
                                  this.props.eventDetails.city}`
                              : this.props.eventDetails &&
                                this.props.eventDetails.locality
                              ? this.props.eventDetails.locality
                              : this.props.eventDetails.city
                              ? this.props.eventDetails.city
                              : "Online"
                          }
                        />
                      </div>
                      <div className={styles.iconWithText}>
                        <HorizantalIconWithHeader
                          icon={ticket}
                          size={15}
                          text={`${
                            this.state.selectedTicket &&
                            this.state.selectedTicket.eventPackages[0] &&
                            this.state.selectedTicket.eventPackages[0].price > 1
                              ? `${this.state.selectedTicket.eventPackages[0].price}x ${this.state.counter}`
                              : "Free"
                          }  Tickets`}
                        />
                      </div>

                      <div className={styles.attendeeText}>
                        Attendee: <div>{this.state.name}</div>
                      </div>
                      {this.state.showPaymentModal &&
                        this.props.paymentStatusDetails && (
                          <div className={styles.attendeeText}>
                            (PAYMENT DONE THROUGH{" "}
                            {this.props.paymentStatusDetails.data.method.toUpperCase()}
                            )
                            <div>
                              Confirmation mail is sent on {this.state.email}
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                )}
                <div
                  className={
                    this.state.Proceed == 2
                      ? styles.attendeStyle
                      : styles.amountHolder
                  }
                >
                  {this.state.Proceed != 2 &&
                    !this.state.showPaymentModal &&
                    this.state.selectedTicket && (
                      <div className={styles.textHolder}>
                        {this.state.selectedTicket.eventPackages &&
                          this.state.selectedTicket.eventPackages[0].price !=
                            0 && (
                            <div className={styles.total}>
                              {" "}
                              {this.state.showPrice && "Total"}
                            </div>
                          )}
                        {this.state.selectedTicket.eventPackages &&
                          this.state.selectedTicket.eventPackages[0].price !=
                            0 && (
                            <div className={styles.amount}>
                              {this.state.showPrice && "INR"}{" "}
                              {this.state.selectedTicket &&
                                this.state.showPrice &&
                                this.state.selectedTicket.eventPackages &&
                                this.state.selectedTicket.eventPackages[0]
                                  .price * this.state.counter}{" "}
                              {this.state.Proceed > 4 && (
                                <span className={styles.taxes}>
                                  (inclusive of all taxes)
                                </span>
                              )}
                            </div>
                          )}
                      </div>
                    )}

                  {!this.state.showPaymentModal ? (
                    <div
                      className={styles.button}
                      onClick={() => this.handleButtonClick()}
                    >
                      {" "}
                      <Button
                        type="primary"
                        backgroundColor={"#4F439A"}
                        fontColor={"#fff"}
                        height={50}
                        width={170}
                        label="Proceed"
                        borderRadius={5}
                      />
                    </div>
                  ) : (
                    <div
                      className={styles.button}
                      onClick={() => this.handleClose()}
                    >
                      <Button
                        type="primary"
                        backgroundColor={"#4F439A"}
                        fontColor={"#fff"}
                        height={50}
                        width={170}
                        label="BACK TO EVENTS"
                        borderRadius={5}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </BottomSlideModal>
        )}
      </React.Fragment>
    );
  }
}
