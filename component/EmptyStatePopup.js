import Image from 'next/image'
import React from 'react'
import styles from '../styles/EmptyStatePopup.module.css'
import upComingExamImage from '../public/upcomingExamImage.png'
function EmptyStatePopup({upcoming}) {
    return (
        // <div className={styles.overlay}>
            <div className={styles.modal}>
                <div className={styles.body}>
                    <div className={styles.main}>
                        <Image src={upComingExamImage} />
                        <div className={styles.title}>
                            {upcoming ? "No upcoming Exam" : "No Past Exams"}
                        </div>
                        <div className={styles.description}>
                            Register for an exam to get notifications and start learning
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    )
}

export default EmptyStatePopup
