import React from 'react';
import ExamSummaryComponent from '../component/ExamSummaryComponent';
import ExamSummaryHeader from '../component/ExamSummaryHeader';
import styles from '../styles/ExamSummary.module.css';

function examSummary() {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <ExamSummaryHeader />
        </div>

        <div className={styles.body}>
            <ExamSummaryComponent />
        </div>
    </div>
  )
}

export default examSummary;
