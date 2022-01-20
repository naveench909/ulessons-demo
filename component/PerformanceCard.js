import React from 'react'
import styles from '../styles/PerformanceCard.module.css'

function PerformanceCard() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>Performance</div>
                <div className={styles.titleAnswer}>Good</div>
            </div>

            <div className={styles.description}>
                You have worked hard. With a little help you can do better. Start by watching recommended videos and live lessons.
            </div>

            <div>
                <button className={styles.solutionBtn}>VIEW report analysis</button>
            </div>
        </div>
    )
}

export default PerformanceCard
