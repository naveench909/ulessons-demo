import React from 'react';
import styles from '../styles/Header.module.css';

// Components
import TimerComponent from './TimerComponent';
import RulerComponent from './RulerComponent';

function Header() {

    return (
        <div className={styles.container}>
            <div className={styles.up_cntr}>
                <div className={styles.icon}>
                    <svg width="65" height="59" viewBox="0 0 65 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.11 35.21L18 30.32L23.11 25" stroke="#313848" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
                        <path d="M38 30L18 30" stroke="#313848" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
                    </svg>
                </div>
                <TimerComponent/>
            </div>

            <div className={styles.down_cntr} id="ruler_cntr">
                <RulerComponent />
            </div>
        </div>
    )
}

export default Header
