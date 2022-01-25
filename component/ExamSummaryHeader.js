import Router from 'next/router';
import { useRouter } from 'next/router'

import React from 'react';
import styles from '../styles/ExamSummaryHeader.module.css'
function ExamSummaryHeader() {
  const router = useRouter();
  let highlight = router.asPath.split('/')[1];
  
  const redirectTo = (tabValue) => {
    if(tabValue === "LEADERBOARD")  Router.push('/leaderboard')
    if(tabValue === "EXAM SUMMARY") Router.push('/examSummary')
    if(tabValue === "REPORT") Router.push('/report')
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
          <svg width="inherit" height="inherit" viewBox="0 0 38 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.11035 11.21L1.00035 6.32L6.11035 1" stroke="#313848" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
              <path d="M37.4697 6.1001H1.32973" stroke="#313848" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className={styles.title}>
          Exam Summary
        </div>
      </div>
      
      <div className={styles.second}>
        <div className={styles.tab} onClick={(e) => redirectTo(e.target.innerText)}>
          <span className={styles.firstTab} style={highlight !== 'leaderboard' && highlight !== 'report' ? {opacity:"1"} : {opacity:"0.4"}}>exam summary</span>
          <div style={highlight !== 'leaderboard' && highlight !== 'report' ?  {opacity:"1"} : {opacity:"0"}}>
            <svg width="135" height="5" viewBox="0 0 192 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.00594764 2.84384C0.406772 -0.233271 63.9288 -0.222422 111.088 0.311981C141.844 0.660237 192.061 -1.31947 192 1.74263C191.916 5.93996 110.633 4.62259 73.4636 4.35377C32.3591 4.05621 -0.508062 6.78729 0.00594764 2.84384Z" fill="#7B7FDA"/>
            </svg>
          </div>
        </div>
        <div className={styles.tab}  onClick={(e) => redirectTo(e.target.innerText)}>
          <span style={highlight === 'leaderboard' ? {opacity:"1"} : {opacity:"0.4"}}>leaderboard</span>
          <div style={highlight === 'leaderboard' ? {opacity:"1"} : {opacity:"0"}}>
            <svg width="135" height="5" viewBox="0 0 192 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.00594764 2.84384C0.406772 -0.233271 63.9288 -0.222422 111.088 0.311981C141.844 0.660237 192.061 -1.31947 192 1.74263C191.916 5.93996 110.633 4.62259 73.4636 4.35377C32.3591 4.05621 -0.508062 6.78729 0.00594764 2.84384Z" fill="#7B7FDA"/>
            </svg>
          </div>
        </div>
        <div className={styles.tab} onClick={(e) => redirectTo(e.target.innerText)}>
          <span style={highlight === 'report' ? {opacity:"1"} : {opacity:"0.4"}}>report</span>
          <div style={highlight === 'report' ? {opacity:"1"} : {opacity:"0"}}>
            <svg width="135" height="5" viewBox="0 0 192 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.00594764 2.84384C0.406772 -0.233271 63.9288 -0.222422 111.088 0.311981C141.844 0.660237 192.061 -1.31947 192 1.74263C191.916 5.93996 110.633 4.62259 73.4636 4.35377C32.3591 4.05621 -0.508062 6.78729 0.00594764 2.84384Z" fill="#7B7FDA"/>
            </svg>
          </div>
        </div>
      </div>

      <div className={styles.secondMobile}>
        <div className={styles.tabM} onClick={(e) => redirectTo(e.target.innerText)}>
          <span style={highlight !== 'leaderboard' && highlight !== 'report' ? {opacity:"1"} : {opacity:"0.4"}}>summary</span>
          <div style={highlight !== 'leaderboard' && highlight !== 'report' ?  {opacity:"1"} : {opacity:"0"}}>
            <svg width="102.49" height="6" viewBox="0 0 192 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.00594764 2.84384C0.406772 -0.233271 63.9288 -0.222422 111.088 0.311981C141.844 0.660237 192.061 -1.31947 192 1.74263C191.916 5.93996 110.633 4.62259 73.4636 4.35377C32.3591 4.05621 -0.508062 6.78729 0.00594764 2.84384Z" fill="#7B7FDA"/>
            </svg>
          </div>
        </div>
        <div className={styles.tabM}  onClick={(e) => redirectTo(e.target.innerText)}>
          <span style={highlight === 'leaderboard' ? {opacity:"1"} : {opacity:"0.4"}}>leaderboard</span>
          <div style={highlight === 'leaderboard' ? {opacity:"1"} : {opacity:"0"}}>
            <svg width="102.49" height="6" viewBox="0 0 192 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.00594764 2.84384C0.406772 -0.233271 63.9288 -0.222422 111.088 0.311981C141.844 0.660237 192.061 -1.31947 192 1.74263C191.916 5.93996 110.633 4.62259 73.4636 4.35377C32.3591 4.05621 -0.508062 6.78729 0.00594764 2.84384Z" fill="#7B7FDA"/>
            </svg>
          </div>
        </div>
        <div className={styles.tabM} onClick={(e) => redirectTo(e.target.innerText)}>
          <span style={highlight === 'report' ? {opacity:"1"} : {opacity:"0.4"}}>report</span>
          <div style={highlight === 'report' ? {opacity:"1"} : {opacity:"0"}}>
            <svg width="102.49" height="6" viewBox="0 0 192 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.00594764 2.84384C0.406772 -0.233271 63.9288 -0.222422 111.088 0.311981C141.844 0.660237 192.061 -1.31947 192 1.74263C191.916 5.93996 110.633 4.62259 73.4636 4.35377C32.3591 4.05621 -0.508062 6.78729 0.00594764 2.84384Z" fill="#7B7FDA"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExamSummaryHeader;
