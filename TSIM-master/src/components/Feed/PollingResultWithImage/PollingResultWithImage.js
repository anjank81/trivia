import React, { Component } from 'react'
import styles from './PollingResultWithImage.css'
import PollingResult from '../PollingResult'
import img1 from "../../Images/b.jpg";
import img2 from "../../Images/f.jpg";
import img3 from "../../Images/p.jpg";
import img4 from "../../Images/p.jpg";
export const pollingResult = [
    { img: img1, option: "A", percentage: 23, question: "What design system manager works best for large scale prototyping?" },
    { img: img2, option: "B", percentage: 17, question: "What design system manager works best for large scale prototyping?" },
    { img: img3, option: "C", percentage: 45, question: "What design system manager works best for large scale prototyping?" },
    { img: img4, option: "D", percentage: 15, question: "What design system manager works best for large scale prototyping?" }]
export default class PollingResultWithImage extends Component {
    render() {
        return (
            <div className={styles.baseWrapper}>
                {pollingResult.map((m) => {
                    return (
                        <div className={styles.baseCard}>

                            <div className={styles.imageWrapper}>
                                <img src={m.img}></img>
                                <div className={styles.overLay}>
                                    <div className={styles.pollPercentage}>{m.percentage}%</div>
                                </div>
                            </div>

                            <div className={styles.pollingResultWrapper}>
                                <div className={styles.pollingContainer}>
                                    <div className={styles.pollingTag}>
                                        <div className={styles.pollingLabel}>{m.option}</div>
                                    </div>
                                    <div className={styles.pollBar}>
                                        <div className={styles.pollQuestionContainer}>
                                            <div className={styles.pollQuestion} >
                                                Title {m.option}
                                            </div>

                                        </div>
                                        <div className={styles.pollLevel} style={{ width: m.percentage + "%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        )
    }
}
