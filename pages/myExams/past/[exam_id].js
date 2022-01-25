import { useRouter } from 'next/router';
import React from 'react';
import ExamSummaryHeader from '../../../component/ExamSummaryHeader'
import styles from '../../../styles/ExamSummaryOfSelectedExam.module.css'
import { examObjs } from '../../../data/examObject';
import ExamSummaryComponent from '../../../component/ExamSummaryComponent';

function ExamSummaryOfSelectedExam() {

    const router = useRouter();
    const {exam_id} = router.query;

    let examObject;
    examObject = examObjs.find((exam) => exam._id === exam_id);
    
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <ExamSummaryHeader />
            </div>

            <div className={styles.body}>
                <ExamSummaryComponent examObject={examObject}/>
            </div>
        </div>

    )
}

export default ExamSummaryOfSelectedExam;
