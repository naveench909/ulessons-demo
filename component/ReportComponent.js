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
                    <div className={styles.header}>
                        Test Performance
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.5">
                                <path d="M12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84286 14.1217 4 12 4C9.87827 4 7.84344 4.84286 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM11 11L11 17H13L13 11H11ZM11 7L13 7V9L11 9V7Z" fill="#313848"/>
                            </g>
                        </svg>
                    </div>
                    <div className={styles.testPerformanceBody}>
                        <div className={styles.circle}>

                        </div>
                        <div className={styles.perfomanceResultInNumbers}>
                            <div className={styles.rankAndTestAttempted}>
                                <div className={styles.examRankDiv}>
                                    <div className={styles.examRankTitle}>Exam Rank</div>
                                    <div className={styles.examRankContent}>
                                        <div >svg</div>
                                        <div>content</div>
                                    </div>
                                </div>
                                <div className={styles.testAttemptedDiv}>Test Attempted</div>
                            </div>
                            <div className={styles.questionAndAverageTime}>
                                <div className={styles.questionCorrectDiv}>Questions correct</div>
                                <div className={styles.averageTimeDiv}>Avg.Time/Question</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.percentile}></div>
            </div>
        </div>
    )
}

export default ReportComponent
