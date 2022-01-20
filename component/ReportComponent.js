import React from 'react'
import styles from '../styles/ReportComponent.module.css'

function ReportComponent() {
    return (
        <div className={styles.container}>
            <div className={styles.first}>
                <div className={styles.performance}>
                    <span className={styles.performanceText}>Performance:</span>
                    <span className={styles.averageText}>Average</span>
                </div>
                <div className={styles.description}>
                    You have worked hard. With a little help you can do better. Start by watching recommended videos and live lessons.
                </div>
            </div>

            <div className={styles.second}>
                <div className={styles.testPerformance}>
                    <div className={styles.header}>Test Performance</div>
                    <div className={styles.testPerformanceBody}>
                
                    </div>
                </div>
                <div className={styles.percentile}></div>
            </div>
        </div>
    )
}

export default ReportComponent
