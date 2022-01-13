import React from 'react'
import styles from '../../styles/AllExams.module.css'

// Components
import MockExamHeaderComponent from '../../component/MockExamHeaderComponent';
import ExamComponent from '../../component/ExamComponent';

import {useGlobalContext} from '../../component/context';

function allExams() {
    const {allExams} = useGlobalContext();
    return (
        <div className={styles.mockExam_cntr}>
            <div className={styles.mockexam_header}>
                <MockExamHeaderComponent />
            </div>

            <div className={styles.mockexam_body_cntr}>
                <div className={styles.mockexam_body}>
                    <div className={styles.image_cntr}>
                        {/* <Image src={image} layout='responsive' height="144px"  /> */}
                    </div>
                    <div className={styles.exam_component_list}>
                        {allExams.map((exam) => {
                            return(
                                <div><ExamComponent examObj={exam} /></div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default allExams
