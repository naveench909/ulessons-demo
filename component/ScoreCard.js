import React from 'react'
import styles from '../styles/ScoreCard.module.css'

function ScoreCard() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}>Score and Solutions</div>
                <div className={styles.ratio}>72/100</div>
            </div>
            <div className={styles.answerSummary}>
                <div className={styles.correct}>
                    <div className={styles.SvgDiv}>
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="17" cy="17" r="15" stroke="#6ABC68" strokeWidth="3" strokeMiterlimit="10" strokeLinejoin="round"/>
                            <path d="M23 24.5H21.5V23C21.5 22.4033 21.2629 21.831 20.841 21.409C20.419 20.9871 19.8467 20.75 19.25 20.75H14.75C14.1533 20.75 13.581 20.9871 13.159 21.409C12.7371 21.831 12.5 22.4033 12.5 23V24.5H11V23C11 22.0054 11.3951 21.0516 12.0983 20.3484C12.8016 19.6451 13.7554 19.25 14.75 19.25H19.25C20.2446 19.25 21.1984 19.6451 21.9017 20.3484C22.6049 21.0516 23 22.0054 23 23V24.5ZM17 17.75C16.4091 17.75 15.8239 17.6336 15.2779 17.4075C14.732 17.1813 14.2359 16.8498 13.818 16.432C13.4002 16.0141 13.0687 15.518 12.8425 14.9721C12.6164 14.4261 12.5 13.8409 12.5 13.25C12.5 12.6591 12.6164 12.0739 12.8425 11.5279C13.0687 10.982 13.4002 10.4859 13.818 10.068C14.2359 9.65016 14.732 9.31869 15.2779 9.09254C15.8239 8.8664 16.4091 8.75 17 8.75C18.1935 8.75 19.3381 9.22411 20.182 10.068C21.0259 10.9119 21.5 12.0565 21.5 13.25C21.5 14.4435 21.0259 15.5881 20.182 16.432C19.3381 17.2759 18.1935 17.75 17 17.75ZM17 16.25C17.7957 16.25 18.5587 15.9339 19.1213 15.3713C19.6839 14.8087 20 14.0457 20 13.25C20 12.4544 19.6839 11.6913 19.1213 11.1287C18.5587 10.5661 17.7957 10.25 17 10.25C16.2044 10.25 15.4413 10.5661 14.8787 11.1287C14.3161 11.6913 14 12.4544 14 13.25C14 14.0457 14.3161 14.8087 14.8787 15.3713C15.4413 15.9339 16.2044 16.25 17 16.25Z" fill="#6ABC68" stroke="#6ABC68"/>
                        </svg>
                    </div>
                    <div className={styles.Content}>
                        <span className={styles.number}>20</span>
                        <span className={styles.text}>CORRECT</span>
                    </div>
                </div>
                <div className={styles.incorrect}>
                    <div className={styles.SvgDiv}>
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="17" cy="17" r="15" stroke="#DA0000" strokeWidth="3" strokeMiterlimit="10" strokeLinejoin="round"/>
                            <path d="M23 24.5H21.5V23C21.5 22.4033 21.2629 21.831 20.841 21.409C20.419 20.9871 19.8467 20.75 19.25 20.75H14.75C14.1533 20.75 13.581 20.9871 13.159 21.409C12.7371 21.831 12.5 22.4033 12.5 23V24.5H11V23C11 22.0054 11.3951 21.0516 12.0983 20.3484C12.8016 19.6451 13.7554 19.25 14.75 19.25H19.25C20.2446 19.25 21.1984 19.6451 21.9017 20.3484C22.6049 21.0516 23 22.0054 23 23V24.5ZM17 17.75C16.4091 17.75 15.8239 17.6336 15.2779 17.4075C14.732 17.1813 14.2359 16.8498 13.818 16.432C13.4002 16.0141 13.0687 15.518 12.8425 14.9721C12.6164 14.4261 12.5 13.8409 12.5 13.25C12.5 12.6591 12.6164 12.0739 12.8425 11.5279C13.0687 10.982 13.4002 10.4859 13.818 10.068C14.2359 9.65016 14.732 9.31869 15.2779 9.09254C15.8239 8.8664 16.4091 8.75 17 8.75C18.1935 8.75 19.3381 9.22411 20.182 10.068C21.0259 10.9119 21.5 12.0565 21.5 13.25C21.5 14.4435 21.0259 15.5881 20.182 16.432C19.3381 17.2759 18.1935 17.75 17 17.75ZM17 16.25C17.7957 16.25 18.5587 15.9339 19.1213 15.3713C19.6839 14.8087 20 14.0457 20 13.25C20 12.4544 19.6839 11.6913 19.1213 11.1287C18.5587 10.5661 17.7957 10.25 17 10.25C16.2044 10.25 15.4413 10.5661 14.8787 11.1287C14.3161 11.6913 14 12.4544 14 13.25C14 14.0457 14.3161 14.8087 14.8787 15.3713C15.4413 15.9339 16.2044 16.25 17 16.25Z" fill="#DA0000" stroke="#DA0000"/>
                        </svg>
                    </div>
                    <div className={styles.Content}>
                        <span className={styles.number}>20</span>
                        <span className={styles.text}>INCORRECT</span>
                    </div>
                </div>
                <div className={styles.unanswered}>
                    <div className={styles.SvgDiv}>
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="17" cy="17" r="15" stroke="#F9AD6D" strokeWidth="3" strokeMiterlimit="10" strokeLinejoin="round"/>
                            <path d="M23 24.5H21.5V23C21.5 22.4033 21.2629 21.831 20.841 21.409C20.419 20.9871 19.8467 20.75 19.25 20.75H14.75C14.1533 20.75 13.581 20.9871 13.159 21.409C12.7371 21.831 12.5 22.4033 12.5 23V24.5H11V23C11 22.0054 11.3951 21.0516 12.0983 20.3484C12.8016 19.6451 13.7554 19.25 14.75 19.25H19.25C20.2446 19.25 21.1984 19.6451 21.9017 20.3484C22.6049 21.0516 23 22.0054 23 23V24.5ZM17 17.75C16.4091 17.75 15.8239 17.6336 15.2779 17.4075C14.732 17.1813 14.2359 16.8498 13.818 16.432C13.4002 16.0141 13.0687 15.518 12.8425 14.9721C12.6164 14.4261 12.5 13.8409 12.5 13.25C12.5 12.6591 12.6164 12.0739 12.8425 11.5279C13.0687 10.982 13.4002 10.4859 13.818 10.068C14.2359 9.65016 14.732 9.31869 15.2779 9.09254C15.8239 8.8664 16.4091 8.75 17 8.75C18.1935 8.75 19.3381 9.22411 20.182 10.068C21.0259 10.9119 21.5 12.0565 21.5 13.25C21.5 14.4435 21.0259 15.5881 20.182 16.432C19.3381 17.2759 18.1935 17.75 17 17.75ZM17 16.25C17.7957 16.25 18.5587 15.9339 19.1213 15.3713C19.6839 14.8087 20 14.0457 20 13.25C20 12.4544 19.6839 11.6913 19.1213 11.1287C18.5587 10.5661 17.7957 10.25 17 10.25C16.2044 10.25 15.4413 10.5661 14.8787 11.1287C14.3161 11.6913 14 12.4544 14 13.25C14 14.0457 14.3161 14.8087 14.8787 15.3713C15.4413 15.9339 16.2044 16.25 17 16.25Z" fill="#F9AD6D" stroke="#F9AD6D"/>
                        </svg>
                    </div>
                    <div className={styles.Content}>
                        <span className={styles.number}>20</span>
                        <span className={styles.text}>UNANSWERED</span>
                    </div>
                </div>
            </div>
            <div >
                <button className={styles.solutionBtn}>VIEW SOLUTIONS</button>
            </div>
        </div>
    )
}

export default ScoreCard