import { useRouter } from 'next/router';
import React from 'react';
import ExamSummaryHeader from '../../../component/ExamSummaryHeader'
import ExamSummaryExamCard from '../../../component/ExamSummaryExamCard';
import styles from '../../../styles/ExamSummaryOfSelectedExam.module.css'
import { examObjs } from '../../../data/examObject';
import ExamSummaryComponent from '../../../component/ExamSummaryComponent';

function examSummaryOfSelectedExam() {

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
                {/* <ExamSummaryExamCard examObj={examObject}/> */}
                <ExamSummaryComponent examObject={examObject}/>
            </div>
        </div>

    )
}

export default examSummaryOfSelectedExam;
