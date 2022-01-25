import React from 'react'
import styles from '../styles/ExamDetails.module.css'
import moment from 'moment';
import Popup from './Popup'
import Button from '../component/Button'
import Router from 'next/router';
import LiveVideos from './LiveVideos';
import LessonVideos from './LessonVideos';



function ExamDetails({examObject}) {
    console.log("Naveen",examObject);

    const [showModal, setShowModal] = React.useState(false);

    const openPopup = (exam_object) => {
        if(!exam_object.is_registerd)   setShowModal(true); 
    }

    const redirectTo = () => {
        Router.push("/")
    }

    return (
        <div className={styles.container}>
            <div className={styles.icon} onClick={redirectTo}>
                <svg width="inherit" height="12" viewBox="0 0 38 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.11035 11.21L1.00035 6.32L6.11035 1" stroke="#313848" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
                    <path d="M37.4697 6.1001H1.32973" stroke="#313848" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>                    
                </svg>
            </div>

            <div className={styles.examDetails}>
                <div className={styles.first}>
                    <div className={styles.examTitleAndImage}>
                        <div className={styles.titleImage}>
                            {examObject.title === "Mathematics" ? 
                                (<svg width="inherit" height="inherit" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.1939 8.63915C15.7977 3.19578 9.07574 -0.76239 3.9647 1.1325C0.048842 2.80168 -0.132413 9.11824 3.23002 12.5278C6.72059 16.048 14.7032 13.1368 15.1939 8.63915Z" fill="#EA7052"/>
                                    <g opacity="0.7">
                                        <path d="M11.5769 4.38379H8.93189L5.4562 10.4222L4.90918 7.94121" stroke="white" strokeWidth="0.651515" strokeMiterlimit="10" strokeLinejoin="round"/>
                                        <path d="M8.54297 6.58813L11.0529 10.6797" stroke="white" strokeWidth="0.651515" strokeMiterlimit="10" strokeLinejoin="round"/>
                                        <path d="M11.0529 6.58813L8.54297 10.6797" stroke="white" strokeWidth="0.651515" strokeMiterlimit="10" strokeLinejoin="round"/>
                                        <path d="M4.86621 4.15308L5.70812 5.52507" stroke="white" strokeWidth="0.651515" strokeMiterlimit="10" strokeLinejoin="round"/>
                                        <path d="M6.56804 4.15308L4.86621 6.92689" stroke="white" strokeWidth="0.651515" strokeMiterlimit="10" strokeLinejoin="round"/>
                                    </g>
                                </svg>) 
                                :
                                (
                                    <svg width="inherit" height="inherit" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.22 8.28746C14.7851 3.06562 8.49397 -0.731455 3.71052 1.08631C0.0456542 2.68757 -0.123983 8.74706 3.02293 12.0178C6.28977 15.3948 13.7608 12.6021 14.22 8.28746Z" fill="#7B7FDA"/>
                                        <g opacity="0.6">
                                            <path d="M8.39061 6.00524C8.39061 6.13229 8.28752 6.23554 8.16004 6.23554C8.03256 6.23554 7.92947 6.13229 7.92947 6.00524C7.92947 5.87818 8.03256 5.77493 8.16004 5.77493C8.28752 5.77493 8.39061 5.87818 8.39061 6.00524Z" stroke="#FCFBF9" strokeWidth="0.605038" strokeMiterlimit="10" strokeLinejoin="round"/>
                                            <path d="M7.27097 9.28323C8.87023 8.27048 9.65411 6.28908 9.12607 4.32153C7.15755 4.84806 5.83176 6.51833 5.75488 8.40904L7.27097 9.28323Z" stroke="#FCFBF9" strokeWidth="0.605038" strokeMiterlimit="10" strokeLinejoin="round"/>
                                            <path d="M7.27051 9.28317C7.54776 9.7316 7.62212 10.2934 7.49861 10.8149C8.25351 10.3035 8.68703 9.2605 8.33164 8.32837" stroke="#FCFBF9" strokeWidth="0.605038" strokeMiterlimit="10" strokeLinejoin="round"/>
                                            <path d="M5.764 8.41451C5.23721 8.3994 4.71294 8.61605 4.32227 8.98261C4.3878 8.07315 5.07464 7.17755 6.06016 7.01758" stroke="#FCFBF9" strokeWidth="0.605038" strokeMiterlimit="10" strokeLinejoin="round"/>
                                            <path d="M7.05257 9.15839C6.83707 9.79954 6.28508 10.3034 5.56799 10.4835C5.36509 9.77309 5.5264 9.04251 5.97379 8.53613" stroke="#FCFBF9" strokeWidth="0.605038" strokeMiterlimit="10" strokeLinejoin="round"/>
                                        </g>
                                    </svg>
                                )
                            }
                        </div>
                        <div className={styles.examTitleAndGrade}>
                            <div className={styles.examTitle}>
                                {examObject.title} Examination
                            </div>
                            <div className={styles.examGrade}>
                                {examObject.grade.grade_code}
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.button}>
                        <Button examObj={examObject} openPopup={openPopup}/>
                    </div>
                </div>

                {showModal ? <Popup examObject={examObject} show={showModal} onClose={() => setShowModal(!showModal)} isRegisterd={true}/> : null }

                <div className={styles.second}>
                    <p>{examObject.description}</p>
                </div>

                <div className={styles.third}>
                    <div className={styles.examDate}>
                        <div className={styles.examDateTitle}>
                            Examination Date
                        </div>
                        <div className={styles.examDateContent}>
                            {moment(examObject.start_time).format('Do MMMM')}
                            <div className={styles.dateIcon}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.1426 2.47591H13.8092C13.9861 2.47591 14.1556 2.54615 14.2806 2.67117C14.4057 2.7962 14.4759 2.96577 14.4759 3.14258V13.8092C14.4759 13.9861 14.4057 14.1556 14.2806 14.2806C14.1556 14.4057 13.9861 14.4759 13.8092 14.4759H1.80924C1.63243 14.4759 1.46286 14.4057 1.33784 14.2806C1.21282 14.1556 1.14258 13.9861 1.14258 13.8092V3.14258C1.14258 2.96577 1.21282 2.7962 1.33784 2.67117C1.46286 2.54615 1.63243 2.47591 1.80924 2.47591H4.47591V1.14258H5.80924V2.47591H9.80924V1.14258H11.1426V2.47591ZM9.80924 3.80924H5.80924V5.14258H4.47591V3.80924H2.47591V6.47591H13.1426V3.80924H11.1426V5.14258H9.80924V3.80924ZM13.1426 7.80924H2.47591V13.1426H13.1426V7.80924Z" fill="#56A7D0" stroke="#56A7D0"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className={styles.examTime}>
                        <div className={styles.examDateTitle}>
                            Examination Time
                        </div>
                        <div className={styles.examDateContent}>
                            {moment(examObject.start_time).format('h:mm A')}
                            <div className={styles.timeIcon}>
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.50033 15.5837C4.5882 15.5837 1.41699 12.4125 1.41699 8.50033C1.41699 4.5882 4.5882 1.41699 8.50033 1.41699C12.4125 1.41699 15.5837 4.5882 15.5837 8.50033C15.5837 12.4125 12.4125 15.5837 8.50033 15.5837ZM8.50033 14.167C10.0032 14.167 11.4446 13.57 12.5073 12.5073C13.57 11.4446 14.167 10.0032 14.167 8.50033C14.167 6.99743 13.57 5.55609 12.5073 4.49339C11.4446 3.43068 10.0032 2.83366 8.50033 2.83366C6.99743 2.83366 5.55609 3.43068 4.49339 4.49339C3.43068 5.55609 2.83366 6.99743 2.83366 8.50033C2.83366 10.0032 3.43068 11.4446 4.49339 12.5073C5.55609 13.57 6.99743 14.167 8.50033 14.167ZM9.20866 8.50033H12.042V9.91699H7.79199V4.95866H9.20866V8.50033Z" fill="#F9AD6D" stroke="#F9AD6D"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className={styles.examQuestion}>
                        <div className={styles.examDateTitle}>
                            Number of Questions
                        </div>
                        <div className={styles.examDateContent}>
                            {examObject.questions.length}
                            <div className={styles.questionIcon}>
                                <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.56974 2.37855C8.55693 1.48774 7.22001 1 5.80207 1C4.38413 1 3.04721 1.49113 2.0344 2.37855C0.981071 3.30323 0.400391 4.54629 0.400391 5.87742V6.13484C0.400391 6.28387 0.521928 6.40581 0.670475 6.40581H2.29098C2.43953 6.40581 2.56106 6.28387 2.56106 6.13484V5.87742C2.56106 4.38371 4.01614 3.16774 5.80207 3.16774C7.588 3.16774 9.04308 4.38371 9.04308 5.87742C9.04308 6.93081 8.30035 7.89613 7.14912 8.33984C6.43339 8.61419 5.8257 9.09516 5.39019 9.72516C4.94793 10.3687 4.71836 11.141 4.71836 11.9234V12.6516C4.71836 12.8006 4.8399 12.9226 4.98844 12.9226H6.60895C6.75749 12.9226 6.87903 12.8006 6.87903 12.6516V11.8827C6.88078 11.5539 6.98124 11.2333 7.16733 10.9626C7.35342 10.6919 7.61649 10.4838 7.92223 10.3653C9.9141 9.59645 11.2004 7.83516 11.2004 5.87742C11.2038 4.54629 10.6231 3.30323 9.56974 2.37855ZM4.45165 16.4452C4.45165 16.8045 4.59393 17.1491 4.84718 17.4032C5.10043 17.6573 5.44392 17.8 5.80207 17.8C6.16022 17.8 6.50371 17.6573 6.75696 17.4032C7.01022 17.1491 7.15249 16.8045 7.15249 16.4452C7.15249 16.0858 7.01022 15.7412 6.75696 15.4871C6.50371 15.2331 6.16022 15.0903 5.80207 15.0903C5.44392 15.0903 5.10043 15.2331 4.84718 15.4871C4.59393 15.7412 4.45165 16.0858 4.45165 16.4452Z" fill="#EA7052" stroke="#EA7052" strokeWidth="0.6"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className={styles.examStudents}>
                        <div className={styles.examDateTitle}>
                            Student taking exams
                        </div>
                        <div className={styles.examDateContent}>
                            {examObject.applicant_count}
                            <div className={styles.studentIcon}>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 16.5H13.5V15C13.5 14.4033 13.2629 13.831 12.841 13.409C12.419 12.9871 11.8467 12.75 11.25 12.75H6.75C6.15326 12.75 5.58097 12.9871 5.15901 13.409C4.73705 13.831 4.5 14.4033 4.5 15V16.5H3V15C3 14.0054 3.39509 13.0516 4.09835 12.3484C4.80161 11.6451 5.75544 11.25 6.75 11.25H11.25C12.2446 11.25 13.1984 11.6451 13.9017 12.3484C14.6049 13.0516 15 14.0054 15 15V16.5ZM9 9.75C8.40905 9.75 7.82389 9.63361 7.27793 9.40746C6.73196 9.18131 6.23588 8.84984 5.81802 8.43198C5.40016 8.01412 5.06869 7.51804 4.84254 6.97208C4.6164 6.42611 4.5 5.84095 4.5 5.25C4.5 4.65905 4.6164 4.07389 4.84254 3.52793C5.06869 2.98196 5.40016 2.48588 5.81802 2.06802C6.23588 1.65016 6.73196 1.31869 7.27793 1.09254C7.82389 0.866396 8.40905 0.75 9 0.75C10.1935 0.75 11.3381 1.22411 12.182 2.06802C13.0259 2.91193 13.5 4.05653 13.5 5.25C13.5 6.44348 13.0259 7.58807 12.182 8.43198C11.3381 9.2759 10.1935 9.75 9 9.75ZM9 8.25C9.79565 8.25 10.5587 7.93393 11.1213 7.37132C11.6839 6.80871 12 6.04565 12 5.25C12 4.45435 11.6839 3.69129 11.1213 3.12868C10.5587 2.56607 9.79565 2.25 9 2.25C8.20435 2.25 7.44129 2.56607 6.87868 3.12868C6.31607 3.69129 6 4.45435 6 5.25C6 6.04565 6.31607 6.80871 6.87868 7.37132C7.44129 7.93393 8.20435 8.25 9 8.25Z" fill="#6ABC68" stroke="#6ABC68"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.button1}>
                    <Button examObj={examObject} openPopup={openPopup}/>
                </div>

                <div className={styles.fourth}>
                    <div className={styles.fourthDivHeading}>Instructions</div>
                    <ul className={styles.instructionList}>
                        <li className={styles.instruction}>
                            <span className={styles.point}><svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.39819 5.16614C8.76141 1.91171 5.07951 -0.415895 2.25249 0.743593C0.0853374 1.76179 -0.0499471 5.53546 1.78378 7.55362C3.6875 9.63722 8.10258 7.8551 8.39819 5.16614Z" fill="#EA7052"/>
                            </svg></span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li className={styles.instruction}>
                            <span className={styles.point}><svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.39819 5.16614C8.76141 1.91171 5.07951 -0.415895 2.25249 0.743593C0.0853374 1.76179 -0.0499471 5.53546 1.78378 7.55362C3.6875 9.63722 8.10258 7.8551 8.39819 5.16614Z" fill="#EA7052"/>
                            </svg></span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li className={styles.instruction}>
                            <span className={styles.point}><svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.39819 5.16614C8.76141 1.91171 5.07951 -0.415895 2.25249 0.743593C0.0853374 1.76179 -0.0499471 5.53546 1.78378 7.55362C3.6875 9.63722 8.10258 7.8551 8.39819 5.16614Z" fill="#EA7052"/>
                            </svg></span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    </ul>
                </div>

                <div className={styles.fifth}>
                    <div className={styles.fifthHeading}>
                        Recommended Learning
                    </div>

                    <div className={styles.liveLessonVideosCntr}>
                        <div className={styles.lessonHeading}>
                            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* <mask id="mask0_137_2127" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="27" height="26">
                                <rect width="26.7722" height="25.2848" fill="#C4C4C4"/>
                                </mask> */}
                                <g mask="url(#mask0_137_2127)">
                                <path d="M23.7065 19.4451C27.9172 11.5074 23.3279 2.71284 15.3496 1.12115C7.3713 -0.47054 -1.59493 10.5215 2.0555 18.1182C5.85632 25.9749 20.2411 26.0093 23.7065 19.4451Z" fill="#F9AD6D"/>
                                <rect x="9.9043" y="9.63867" width="7.40357" height="6.46676" rx="0.784772" stroke="white" strokeWidth="0.519231"/>
                                <path d="M10.0649 11.417H16.9857" stroke="white" strokeWidth="0.519231"/>
                                <rect x="11.8354" y="8.54785" width="0.643789" height="1.94003" rx="0.321894" fill="white"/>
                                <rect x="14.7324" y="8.54785" width="0.643789" height="1.94003" rx="0.321894" fill="white"/>
                                <rect x="11.5137" y="12.2256" width="0.965683" height="0.970014" rx="0.130795" fill="white"/>
                                <rect x="11.5137" y="13.8428" width="0.965683" height="0.970014" rx="0.130795" fill="white"/>
                                <rect x="13.123" y="12.2256" width="0.965683" height="0.970014" rx="0.130795" fill="white"/>
                                <rect x="13.123" y="13.8428" width="0.965683" height="0.970014" rx="0.130795" fill="white"/>
                                <rect x="14.7324" y="12.2256" width="0.965683" height="0.970014" rx="0.130795" fill="white"/>
                                <rect x="14.7324" y="13.8428" width="0.965683" height="0.970014" rx="0.130795" fill="white"/>
                                </g>
                            </svg>
                            Live Lessons
                        </div>
                        <div className={styles.liveLessonVideos}>
                            <LiveVideos />
                        </div>
                    </div>

                    <div className={styles.lessonVideosCntr}>
                        <div className={styles.questHeading}>
                            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* <mask id="mask0_137_2118" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="27" height="26">
                                <rect width="26.7722" height="25.2848" fill="#C4C4C4"/>
                                </mask> */}
                                <g mask="url(#mask0_137_2118)">
                                <path d="M23.706 19.4451C27.9168 11.5074 23.3274 2.71284 15.3491 1.12115C7.37082 -0.47054 -1.59542 10.5215 2.05501 18.1182C5.85584 25.9749 20.2406 26.0093 23.706 19.4451Z" fill="#EA7052"/>
                                <path d="M11.9115 14.4211C11.9049 15.5943 13.1871 16.3206 14.1899 15.7117L16.4986 14.3099C17.4557 13.7288 17.4618 12.3419 16.5098 11.7524L14.2169 10.3325C13.2208 9.71567 11.9338 10.4278 11.9272 11.5994L11.9115 14.4211Z" fill="white"/>
                                </g>
                            </svg>
                            Video Library
                        </div>
                        <div className={styles.lessonVideos}>
                            <LessonVideos />
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )
}


export default ExamDetails
