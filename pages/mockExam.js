import React from 'react';
import styles from '../styles/MockExam.module.css'
import image from '../assets/image.png';
import Image from 'next/image';

// Components
import MockExamHeaderComponent from '../component/MockExamHeaderComponent';
import ExamComponent from '../component/ExamComponent';

import {useGlobalContext} from '../component/context';

function mockExam() {

    const {examObject} = useGlobalContext();

    // console.log(examObject);
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
                        {/* <ul className={styles.ExamComponents}>
                            
                            <li><ExamComponent examObj={examObject[0]}/></li>
                            <li><ExamComponent examObj={examObject[1]}/></li>
                            <li><ExamComponent examObj={examObject[2]}/></li>
                        </ul> */}

                        <div><ExamComponent examObj={examObject[0]}/></div>
                        <div><ExamComponent examObj={examObject[1]}/></div>
                        <div><ExamComponent examObj={examObject[2]}/></div>
                        <div><ExamComponent examObj={examObject[3]}/></div>
                        <div><ExamComponent examObj={examObject[4]}/></div>
                        <div><ExamComponent examObj={examObject[5]}/></div>
                        <div><ExamComponent examObj={examObject[6]}/></div>

                        
                    </div>
                </div>
            </div>
        </div>
    )
}


export default mockExam
