import React from 'react';
import styles from '../styles/report.module.css'
import ExamSummaryHeader from '../component/ExamSummaryHeader'
import ReportComponent from '../component/ReportComponent'
function report() {
  return (
      <div className={styles.container}>
        <div className={styles.header}>
            <ExamSummaryHeader />
        </div>

        <div className={styles.body}>
            <ReportComponent />
        </div>
    </div>
  )
}

export default report;
