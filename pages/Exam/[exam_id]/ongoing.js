import React from 'react';
import styles from '../../../styles/OngoingExam.module.css'
import { useRouter } from 'next/router'

import { examObjs } from '../../../data/examObject';

import Header from '../../../component/Header';
import QuestionComponent from '../../../component/QuestionComponent';
const Ongoing = () => {
    const router = useRouter();
    const {exam_id} = router.query;

    let examObject = examObjs.find((exam) => exam._id === exam_id);

    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <Header date={examObject.start_time} duration={examObject.duration}/>
            </div>
            <div className={styles.mainBody}>
                <QuestionComponent />
            </div>
        </main>
    );
}

export default Ongoing;
