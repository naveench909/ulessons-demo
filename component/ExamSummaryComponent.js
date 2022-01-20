import React from 'react'
import styles from '../styles/ExamSummaryComponent.module.css'
import ExamSummaryExamCard from './ExamSummaryExamCard'

//Component
import ScoreCard from './ScoreCard'

import PerformanceCard from './PerformanceCard'


function ExamSummaryComponent({examObject}) {
    return (
        <div className={styles.container}>
            <div className={styles.first}>
                <div className={styles.score}>
                    <ExamSummaryExamCard examObj={examObject}/>
                </div>
                <div className={styles.perfomance}>
                    {/* <PerformanceCard /> */}
                    <ScoreCard />
                </div>
            </div>

            <div className={styles.second}>

            </div>
        </div>
    )
}

export default ExamSummaryComponent
