import React from 'react';
import ExamSummaryHeader from '../component/ExamSummaryHeader';
import LeaderBoradComponent from '../component/LeaderBoradComponent'
import styles from '../styles/Leaderboard.module.css'
function leaderboard() {
  return (
      <div className={styles.container}>
        <div className={styles.header}>
            <ExamSummaryHeader />
        </div>

        <div className={styles.body}>
            <LeaderBoradComponent />
        </div>
    </div>
  )
}

export default leaderboard;
