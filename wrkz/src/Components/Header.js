import React, { Component } from 'react';
import styles from "./Header.module.css"
import image from "../images/sample.jpg"
const links = [
    {
      text:"Virtual Office"
    },
    {
        text:"My Team"
    }
]
class Header extends Component {

    render() {
        return (
            <div className={styles.headerBase}>
                <div className={styles.container}>
                    <div className={styles.logoHolder}>WorkforceZ</div>
                    <div className={styles.linkHolder}>
                    {links && links.map(val=> {return(
                        <div className={styles.links}>
                            {val.text}
                        </div>
                    )})}
                    <div className={styles.profileHolder}>
                        <img src={image} height="40px" width="40px" style={{borderRadius:"100%"}}/>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;