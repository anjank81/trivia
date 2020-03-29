import React, { Component } from "react";
import RightSlideModal from "./RightSlideModal";
import styles from "./FilterModule.css";
import SelectBox from "../../../core/SelectBox";
import backArrow from "../../../images/Back-blue.svg";
import Icon from "../../../core/Icon";
import Button from "../../general/Button";
import Input2 from "../../../core/Input2";
import gps from "../../../images/GPS.svg";

export default class FilterModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered:
        this.props && this.props.filterList && this.props.filterList[0].name,
      hoverInType: null,
      selected: [],
      show: "upcoming",
      selectedLabel: [],
      location: "",
      id: 0,
      currentCategory:
        this.props && this.props.filterList && this.props.filterList[0]
    };
  }
  changeCategory = (data, val) => {
    this.setState({
      currentCategory: data,
      id: val,
      hovered: data.name,
      location: ""
    });
  };
  hoverIn = value => {
    this.setState({
      hovered: value
    });
  };
  hoverOut() {
    this.setState({
      hovered: null,
      hoverInType: null,
      selected: []
    });
  }
  componentDidMount = () => {
    this.props.getCityList();
    this.props.getFilterList();
  };
  handlecategoryClick = val => {
    let parentFilter =
      this.state.hovered === "Event Categories"
        ? "eventCategory"
        : "Location"
        ? "location"
        : "eventType";
    let filteredCatg = { ...val, categories: parentFilter };
    let data = [];
    let dataExist =
      this.state.selected &&
      this.state.selected.length > 0 &&
      this.state.selected.find((categories, i) => {
        return categories.name === filteredCatg.name;
      });
    if (dataExist) {
      var index = this.state.selected.findIndex(function(cat) {
        return cat.name == dataExist.name;
      });
      data.push(...this.state.selected);
      if (index == 0) {
        data.splice(index, 1);
        this.setState({ selected: data });
      } else {
        data.splice(index, index);
        this.setState({ selected: data });
      }
    } else {
      data.push(...this.state.selected);
      data.push(filteredCatg);
      this.setState({ selected: data });
    }
  };
  handleChange = () => {
    if (this.state.show == "past") {
      this.setState({ show: "upcoming" });
    } else {
      this.setState({ show: "past" });
    }
  };
  getAllEvents = () => {
    let filterDetails = {};
    this.state.selected &&
      this.state.selected.map(val => {
        let data = [];
        if (filterDetails[val.categories]) {
          data.push(...filterDetails[val.categories]);
        }
        return (filterDetails = {
          ...filterDetails,
          [val.categories]: [...data, val.id]
        });
      });
    filterDetails.show = this.state.show;
    filterDetails.label = this.state.selectedLabel
      ? this.state.selectedLabel
      : null;
    filterDetails.cityId = null;
    if (this.state.show == "past") {
      if (this.props.getAllPastEvents) {
        this.props.closeModal();
        this.props.getAllPastEvents(JSON.stringify(filterDetails), 1, []);
      }
    } else if (this.props.getAllEvents) {
      this.props.closeModal();
      this.props.getAllEvents(JSON.stringify(filterDetails), 1, []);
    }
  };
  onChange = val => {
    this.setState({ location: val });
    if (val.length > 2) {
      this.getCity();
    }
  };
  getCity = () => {
    this.props.getCityList(this.state.location);
  };
  render() {
    return (
      <RightSlideModal>
        <div className={styles.filterBase}>
          <div className={styles.headerHolder}>
            <div className={styles.logoWithText}>
              <div
                className={styles.logo}
                onClick={() => {
                  this.props.closeModal();
                }}
              >
                <Icon image={backArrow} size={18} />
              </div>
              <div className={styles.filter}>FILTER</div>
            </div>

            <div className={styles.toggleHolder}>
              <div className={styles.toggleText}>UPCOMING</div>
              <div className={styles.toggle}>
                <label className={styles.switch}>
                  <input type="checkbox" onChange={() => this.handleChange()} />
                  <div className={styles.slider} />
                </label>
              </div>
              <div className={styles.toggleText}>PAST</div>
            </div>
          </div>
          <div className={styles.categoriesHolder}>
            <div className={styles.categoryDetails}>
              {this.props.filterList &&
                this.props.filterList.map((categories, val) => {
                  return (
                    <React.Fragment>
                      <div
                        className={
                          this.state.hovered === categories.name
                            ? styles.categoryDetailsValueWithArrow
                            : styles.categoryDetailsValue
                        }
                        onClick={() => this.changeCategory(categories, val)}
                        // onMouseEnter={() => this.hoverIn(categories.name)}
                      >
                        {categories.name}
                        <div
                          className={
                            this.state.hovered === categories.name
                              ? styles.rightArrow
                              : ""
                          }
                        />
                      </div>
                    </React.Fragment>
                  );
                })}
            </div>
            <div className={styles.subCategoryDetailsHolder}>
              {this.state.currentCategory &&
                this.state.currentCategory.name == "Location" && (
                  <div className={styles.inputBase}>
                    <div className={styles.inputContainer}>
                      <div className={styles.inputWithButton}>
                        <div className={styles.inputHolder}>
                          <div className={styles.input}>
                            <Input2
                              placeholder="Search Location"
                              value={this.state.location}
                              onChange={val => this.onChange(val)}
                              textStyle={{ fontSize: 14 }}
                              height={50}
                              boxy={true}
                              border={"none"}
                              borderColor={"#fff"}
                              borderBottom={"#fff"}

                              // // onFocus={() => {
                              // //   this.handleOnFocusInput();
                              // }}
                            />
                          </div>
                          {this.state.showError && (
                            <div className={styles.error}>
                              Please enter valid email address
                            </div>
                          )}
                        </div>
                        {/* <div className={styles.SearchbuttonHolder}>
                          <div
                            className={styles.searchbutton}
                            onClick={() => this.getCity()}
                          >
                            <Icon image={gps} size={20} />
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                )}
              {this.props.filterList &&
                this.props.filterList[this.state.id] &&
                this.props.filterList[this.state.id].lists &&
                this.props.filterList[this.state.id].lists.map(
                  (subCategoriesHeader, val) => {
                    return (
                      <React.Fragment>
                        <div className={styles.blockHolder}>
                          <div
                            className={styles.buttonHolder}
                            onClick={() =>
                              this.handlecategoryClick(subCategoriesHeader)
                            }
                          >
                            <SelectBox
                              size={"20px"}
                              selected={
                                this.state.selected &&
                                this.state.selected.length > 0 &&
                                this.state.selected.find(categories => {
                                  return (
                                    categories.name === subCategoriesHeader.name
                                  );
                                })
                                  ? true
                                  : false
                              }
                            />
                          </div>
                          <div
                            className={styles.subCategoryDetailsHeader}
                            onClick={() =>
                              this.handlecategoryClick(subCategoriesHeader)
                            }
                          >
                            {subCategoriesHeader.name}
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  }
                )}
            </div>
          </div>

          <div className={styles.submit} onClick={() => this.getAllEvents()}>
            <Button
              type="primary"
              backgroundColor={"#4F439A"}
              fontColor={"#ffffff"}
              height={40}
              borderRadius="none"
              width={"100%"}
              label="SUBMIT"
            />
          </div>
        </div>
      </RightSlideModal>
    );
  }
}
