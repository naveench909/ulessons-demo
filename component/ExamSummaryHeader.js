import Router from 'next/router';
import React from 'react';
import styles from '../styles/ExamSummaryHeader.module.css'
function ExamSummaryHeader() {

  const redirectTo = (tabValue) => {
    if(tabValue === "LEADERBOARD"){
      Router.push('/leaderboard')
    }

    if(tabValue === "SUMMARY"){
      Router.push('/examSummary')
    }

    if(tabValue === "REPORT"){
      Router.push('/report')
    }
  }

  const redirectToPastExams = () => {
    Router.push({
      pathname:('/myExams/past')
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <div className={styles.backButton} onClick={redirectToPastExams}>
          <svg width="38" height="12" viewBox="0 0 38 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.11035 11.21L1.00035 6.32L6.11035 1" stroke="#313848" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
              <path d="M37.4697 6.1001H1.32973" stroke="#313848" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className={styles.title}>
          Exam Summary
        </div>
      </div>
      <div className={styles.second}>
        <div className={styles.tab} onClick={(e) => redirectTo(e.target.innerText)}>summary</div>
        <div className={styles.tab} onClick={(e) => redirectTo(e.target.innerText)}>leaderboard</div>
        <div className={styles.tab} onClick={(e) => redirectTo(e.target.innerText)}>report</div>
      </div>
    </div>
  )
}

export default ExamSummaryHeader;
