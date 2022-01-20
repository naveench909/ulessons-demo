import React from 'react'
import styles from '../../styles/MyExams.module.css'
import MockExamHeaderComponent from '../../component/MockExamHeaderComponent'
import { useGlobalContext } from '../../component/context'
import ExamComponent from '../../component/ExamComponent';
import EmptyStatePopup from '../../component/EmptyStatePopup';
import Router from 'next/router';
export default function myExams() {

    // const { allExams } = useGlobalContext(); 
    let allExams
    const redirectToHome = () => {
        Router.push({
            pathname: '/'
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <MockExamHeaderComponent />
            </div>
            <div className={styles.body}>
                {allExams ?
                    <div className={styles.upComingExams}>
                        {allExams.map((exam) => {
                            return(
                                <div key={exam._id} className={styles.examDiv}>
                                    <ExamComponent examObj={exam}/>
                                </div>
                            )
                        })}
                    </div>
                    :
                    (
                        <div className={styles.emptyState}>
                            <EmptyStatePopup upcoming={true}/> 
                            <button className={styles.viewAllExamBtn} onClick={redirectToHome}>VIEW ALL EXAMS</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
