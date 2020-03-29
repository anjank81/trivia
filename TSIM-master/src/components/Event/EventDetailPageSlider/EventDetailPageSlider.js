import React from "react";
import PropTypes from "prop-types";
import styles from "./EventDetailPageSlider.css";
export default class EventDetailPageSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            juke:
                this.props.children && this.props.children.length
                    ? this.props.children.length
                    : 0,
            position: 0
        };
    }

    autoRun = () => {
        if (!this.props.stopSlider) {
            this.timer = setTimeout(() => {
                this.goForward();
                this.autoRun();
            }, this.props.interval * 1000);
        }
    };
    componentDidMount() {
        if (this.props.interval && !this.props.stopSlider) {
            // this.autoRun();
        }
    }

    goForward = () => {
        const childCount = React.Children.count(this.props.children);
        if (this.state.position + 1 == childCount) {
            this.props.reachedEnd();
        }
        if (this.state.position < 7) {
            if ((Math.abs(this.state.position) + 1) % childCount === 0) {
                this.setState(
                    {
                        juke: this.state.juke - this.props.children.length
                    },
                    () => {
                        this.setState({ position: this.state.position + 1 });
                    }
                );
            } else {
                this.setState({ position: this.state.position + 1 });
            }
            clearInterval(this.timer);
        }
    };
    goBack = () => {
        if (this.state.position > 0) {
            const childCount = React.Children.count(this.props.children);
            if (Math.abs(this.state.position) === Math.abs(this.state.juke)) {
                this.setState(
                    {
                        juke: this.state.juke + childCount
                    },
                    () => {
                        this.setState({ position: this.state.position - 1 });
                    }
                );
            } else {
                this.setState({ position: this.state.position - 1 });
            }
        }
        clearInterval(this.timer);
    };

    sliderClickHandler = (stepNumber) => {
        this.setState({ position: stepNumber });
        clearInterval(this.timer);
    }
    render() {
        const translationAmount = -(100 * this.state.position);
        const transform = `translateX(${translationAmount}%)`;
        const style = {
            transform: transform
        };
        const jukeTranslationAmount = -(100 * this.state.juke);
        const jukeTransform = `translateX(${jukeTranslationAmount}%)`;
        const jukeStyle = {
            transform: jukeTransform
        };
        return (
            <div className={styles.base}>
                <div className={styles.rightArrow} onClick={() => this.goForward()} />
                <div className={styles.leftArrow} onClick={() => this.goBack()} />
                <div className={styles.sliderWrapper}>
                    <div className={styles.slider} style={jukeStyle}>
                        <div style={style} className={styles.imageHolder}>
                            {this.props.children.map((child, i) => {
                                return (
                                    <div className={styles.item} key={i}>
                                        {child}
                                    </div>
                                );
                            })}
                            {this.props.children.map((child, i) => {
                                return (
                                    <div className={styles.item} key={i}>
                                        {child}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>



            </div>
        );
    }
}

EventDetailPageSlider.propTypes = {
    interval: PropTypes.number
};
EventDetailPageSlider.defaultProps = {
    interval: 2
};
