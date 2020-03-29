import React, { Component, Fragment } from "react";
import styles from "./FilterSliderComponent.css";

export default class FilterSliderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterData: this.props.filterData,
      position: 0,
      newArr: this.props.selectedFilter ? this.props.selectedFilter : []
    };
  }
  goForward = () => {
    if (
      this.state.position <
      (this.props.filterData && this.props.filterData.length - 1)
    ) {
      this.setState({ position: this.state.position + 1 });
    }
  };
  goBack = () => {
    if (this.state.position > 0) {
      this.setState({ position: this.state.position - 1 });
    }
  };
  activeClickHandler = id => {
    let copyArr = [...this.state.filterData];
    copyArr.forEach((m, i) => {
      if (i === id) {
        copyArr[i].activeFlag = !copyArr[i].activeFlag;
      }
    });
    this.setState(
      {
        filterData: copyArr
      },
      () => {
        this.onFilterHandler();
      }
    );
  };

  onFilterHandler = () => {
    let newArr =
      this.state.filterData &&
      this.state.filterData.filter(m => m.activeFlag === true);
    this.setState({
      newArr: newArr
    });
    this.props.handleClick(newArr);
  };
  onClearAllHandler = () => {
    let newArr = [...this.state.newArr];
    let copyArr = [...this.state.filterData];
    copyArr.forEach((m, i) => {
      if (m.activeFlag === true) {
        copyArr[i].activeFlag = false;
      }
    });
    newArr.length = 0;
    this.setState({
      newArr: newArr,
      filterData: copyArr
    });
    this.props.handleClick(newArr);
  };

  crossClickHandler = id => {
    let copyArr = [...this.state.filterData];
    copyArr.forEach((m, i) => {
      if (m.id === id) {
        copyArr[i].activeFlag = false;
      }
    });
    let newArr = this.state.newArr.filter(m => m.id !== id);

    this.setState({
      newArr: newArr,
      filterData: copyArr
    });
    this.props.handleClick(newArr);
  };
  render() {
    const translationAmount = -(10 * this.state.position);
    const transform = `translateX(${translationAmount}%)`;
    const style = {
      transform: transform
    };
    return (
      <Fragment>
        <div className={styles.leftArrow} onClick={() => this.goBack()} />
        <div className={styles.tagContainerWrappper}>
          <div className={styles.tagContainer} style={style}>
            {this.state.filterData &&
              this.state.filterData.map((m, i) => {
                return (
                  <div
                    onClick={() => this.activeClickHandler(i)}
                    className={
                      m.activeFlag ? styles.tagButtonActive : styles.tagButton
                    }
                  >
                    {m.name}
                  </div>
                );
              })}
          </div>

          {this.state.newArr.length > 0 && (
            <div className={styles.filterOptionWrapper}>
              <div
                className={styles.clearAllButton}
                onClick={this.onClearAllHandler}
              >
                CLEAR ALL
              </div>
              <div className={styles.filterOptionBase}>
                {this.state.newArr.map(m => {
                  return (
                    <div className={styles.filterOption}>
                      {m.name}
                      <div
                        onClick={() => this.crossClickHandler(m.id)}
                        className={styles.filterOptionCross}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <div className={styles.rightArrow} onClick={() => this.goForward()} />
      </Fragment>
    );
  }
}
