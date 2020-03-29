import React, { Component } from 'react'
import styles from './CompleteCourseImages.css'
import { Link } from 'react-router-dom'
import img1 from "../../Images/b.jpg";
import img2 from "../../Images/f.jpg";
import img3 from "../../Images/p.jpg";
import img4 from "../../Images/p.jpg";
export const pollingResult = [
    { img: img1, option: "A", percentage: 23, question: "What design system manager works best for large scale prototyping?" },
    { img: img2, option: "B", percentage: 17, question: "What design system manager works best for large scale prototyping?" },
    { img: img3, option: "C", percentage: 45, question: "What design system manager works best for large scale prototyping?" },
    { img: img4, option: "D", percentage: 15, question: "What design system manager works best for large scale prototyping?" },
    { img: img4, option: "D", percentage: 15, question: "What design system manager works best for large scale prototyping?" },
    { img: img4, option: "D", percentage: 15, question: "What design system manager works best for large scale prototyping?" },
    { img: img4, option: "D", percentage: 15, question: "What design system manager works best for large scale prototyping?" },
    { img: img4, option: "D", percentage: 15, question: "What design system manager works best for large scale prototyping?" }]
export default class CompleteCourseImages extends Component {
    render() {
        const mainresults = pollingResult.slice(0, 4);
        const results = pollingResult.slice(4);
        const len = results.length + 1;
        return (
            <div className={styles.baseWrapper}>
                {mainresults.map((m, i) => {
                    return (
                        <div className={styles.baseCard}>

                            <div className={styles.imageWrapper}>
                                <img src={m.img}></img>
                                <div className={i === 3 && pollingResult.length > 4 ? styles.overLay : styles.nooverLay}>
                                    {i === 3 && pollingResult.length > 4 && <Link to="/feedImages" style={{ textDecoration: 'none' }}><div className={styles.pollPercentage} onClick={() => this.props && this.props.updateImages(pollingResult)}> {"+" + len + " more"}</div></Link>}
                                </div>

                            </div>

                            <div className={styles.pollingResultWrapper}>

                            </div>
                        </div>
                    )
                })}

            </div>
        )
    }
}
