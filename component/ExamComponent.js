import React from 'react'
import styled from 'styled-components';
import Popup from '../component/Popup';
import moment from 'moment';
import Button from './Button';
import Router from 'next/router';
import { useRouter } from 'next/router'

function ExamComponent({examObj}) {
    const [showModal, setShowModal] = React.useState(false);
    const router = useRouter();
    
    const openPopup = (exam_object) => {
        if(!exam_object.is_registerd)   setShowModal(true); 
    }

    const redirectToExamDetails = () => {
        console.log(typeof(router.asPath.split('/')[2]));
        if(router.asPath.split('/')[2] === 'past'){
            console.log("Naveen")
            Router.push(`/myExams/past/${examObj._id}`)
        }else{
            Router.push({
            pathname: `/Exam/${examObj._id}`
        })
        }
    }

    return (
        <ExamComponentStyles onClick={redirectToExamDetails}>
                <div className='first'>
                    <div className="first_child">
                        <div className='exam_image'>
                            {examObj.title === "Mathematics" ? 
                            (<svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                        <div className='exam_title'>{examObj.title}</div>
                    </div>
                    <div className='second_child'>
                        <div className="exam_class">{examObj.grade.grade_code}</div>
                        {
                            !examObj.isRegisterd ? 
                                moment(examObj.registration_close_time).diff(moment(new Date()) , 'h') <= examObj.registration_close_warning_duration && moment(examObj.registration_close_time).diff(moment(new Date()) , 'h') > 0? 
                                (<div className='registration_end_div'>
                                    Registration ends in {moment(examObj.registration_close_time).diff(moment(new Date()) , 'days')} days
                                </div>)
                                : 
                                null
                                :
                                null 
                        }
                    </div>
                </div>
                <div className='second' >
                    {examObj.description}
                </div>
                <div className='third'>
                    <div className='exam_date' >
                        <div className='calendar'>
                            <svg width="16" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.333 2.00008H13.9997C14.1765 2.00008 14.3461 2.07032 14.4711 2.19534C14.5961 2.32037 14.6663 2.48994 14.6663 2.66675V13.3334C14.6663 13.5102 14.5961 13.6798 14.4711 13.8048C14.3461 13.9298 14.1765 14.0001 13.9997 14.0001H1.99967C1.82286 14.0001 1.65329 13.9298 1.52827 13.8048C1.40325 13.6798 1.33301 13.5102 1.33301 13.3334V2.66675C1.33301 2.48994 1.40325 2.32037 1.52827 2.19534C1.65329 2.07032 1.82286 2.00008 1.99967 2.00008H4.66634V0.666748H5.99967V2.00008H9.99967V0.666748H11.333V2.00008ZM9.99967 3.33341H5.99967V4.66675H4.66634V3.33341H2.66634V6.00008H13.333V3.33341H11.333V4.66675H9.99967V3.33341ZM13.333 7.33342H2.66634V12.6667H13.333V7.33342Z" fill="#EA7052"/>
                            </svg>
                        </div>
                        <div className='calendar_date'>
                            {moment(examObj.start_time).format('Do MMMM')}
                        </div>
                    </div>
                    <div className='exam_totalQues'>
                        <div className="question_icon">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.99967 14.6666C4.31767 14.6666 1.33301 11.6819 1.33301 7.99992C1.33301 4.31792 4.31767 1.33325 7.99967 1.33325C11.6817 1.33325 14.6663 4.31792 14.6663 7.99992C14.6663 11.6819 11.6817 14.6666 7.99967 14.6666ZM7.99967 13.3333C9.41416 13.3333 10.7707 12.7713 11.7709 11.7712C12.7711 10.771 13.333 9.41441 13.333 7.99992C13.333 6.58543 12.7711 5.22888 11.7709 4.22868C10.7707 3.22849 9.41416 2.66659 7.99967 2.66659C6.58519 2.66659 5.22863 3.22849 4.22844 4.22868C3.22824 5.22888 2.66634 6.58543 2.66634 7.99992C2.66634 9.41441 3.22824 10.771 4.22844 11.7712C5.22863 12.7713 6.58519 13.3333 7.99967 13.3333ZM7.33301 9.99992H8.66634V11.3333H7.33301V9.99992ZM8.66634 8.90325V9.33325H7.33301V8.33325C7.33301 8.15644 7.40325 7.98687 7.52827 7.86185C7.65329 7.73682 7.82286 7.66659 7.99967 7.66659C8.18906 7.66657 8.37455 7.61278 8.53456 7.51147C8.69457 7.41016 8.82252 7.2655 8.90352 7.09431C8.98453 6.92312 9.01525 6.73245 8.99213 6.54448C8.969 6.35651 8.89298 6.17898 8.7729 6.03253C8.65282 5.88608 8.49362 5.77674 8.31382 5.71723C8.13403 5.65773 7.94103 5.6505 7.75729 5.69639C7.57355 5.74228 7.40662 5.83941 7.27592 5.97646C7.14522 6.11352 7.05613 6.28487 7.01901 6.47059L5.71101 6.20859C5.7921 5.80331 5.97935 5.42683 6.25362 5.11764C6.5279 4.80845 6.87935 4.57764 7.27207 4.4488C7.66478 4.31996 8.08467 4.29771 8.4888 4.38433C8.89293 4.47095 9.26681 4.66333 9.57222 4.9418C9.87763 5.22028 10.1036 5.57486 10.2271 5.96929C10.3505 6.36373 10.3671 6.78388 10.2749 7.18679C10.1828 7.5897 9.98531 7.96092 9.70269 8.26249C9.42007 8.56407 9.06243 8.78519 8.66634 8.90325Z" fill="#EA7052"/>
                            </svg>
                        </div>

                        <div className="question_content">
                            {examObj.questions.length} questions
                        </div>
                    </div>
                    <div className='exam_time' >
                        <div className="timer">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.99967 14.6666C4.31767 14.6666 1.33301 11.6819 1.33301 7.99992C1.33301 4.31792 4.31767 1.33325 7.99967 1.33325C11.6817 1.33325 14.6663 4.31792 14.6663 7.99992C14.6663 11.6819 11.6817 14.6666 7.99967 14.6666ZM7.99967 13.3333C9.41416 13.3333 10.7707 12.7713 11.7709 11.7712C12.7711 10.771 13.333 9.41441 13.333 7.99992C13.333 6.58543 12.7711 5.22888 11.7709 4.22868C10.7707 3.22849 9.41416 2.66659 7.99967 2.66659C6.58519 2.66659 5.22863 3.22849 4.22844 4.22868C3.22824 5.22888 2.66634 6.58543 2.66634 7.99992C2.66634 9.41441 3.22824 10.771 4.22844 11.7712C5.22863 12.7713 6.58519 13.3333 7.99967 13.3333ZM8.66634 7.99992H11.333V9.33325H7.33301V4.66659H8.66634V7.99992Z" fill="#EA7052"/>
                            </svg>
                        </div>
                        <div className="timer_content">
                            {moment(examObj.start_time).format('h:mm a')}
                        </div>
                    </div>
                    <div className='exam_totalStudents'>
                        <div className="students">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.3337 14.6667H12.0003V13.3334C12.0003 12.803 11.7896 12.2943 11.4145 11.9192C11.0395 11.5441 10.5308 11.3334 10.0003 11.3334H6.00033C5.46989 11.3334 4.96118 11.5441 4.58611 11.9192C4.21104 12.2943 4.00033 12.803 4.00033 13.3334V14.6667H2.66699V13.3334C2.66699 12.4494 3.01818 11.6015 3.6433 10.9764C4.26842 10.3513 5.11627 10.0001 6.00033 10.0001H10.0003C10.8844 10.0001 11.7322 10.3513 12.3573 10.9764C12.9825 11.6015 13.3337 12.4494 13.3337 13.3334V14.6667ZM8.00033 8.66675C7.47504 8.66675 6.95489 8.56328 6.46959 8.36227C5.98429 8.16125 5.54333 7.86661 5.1719 7.49518C4.80046 7.12374 4.50583 6.68278 4.30481 6.19748C4.10379 5.71218 4.00033 5.19204 4.00033 4.66675C4.00033 4.14146 4.10379 3.62132 4.30481 3.13601C4.50583 2.65071 4.80046 2.20976 5.1719 1.83832C5.54333 1.46689 5.98429 1.17225 6.46959 0.97123C6.95489 0.770211 7.47504 0.666748 8.00033 0.666748C9.06119 0.666748 10.0786 1.08818 10.8288 1.83832C11.5789 2.58847 12.0003 3.60588 12.0003 4.66675C12.0003 5.72761 11.5789 6.74503 10.8288 7.49518C10.0786 8.24532 9.06119 8.66675 8.00033 8.66675ZM8.00033 7.33342C8.70757 7.33342 9.38585 7.05246 9.88594 6.55237C10.386 6.05227 10.667 5.37399 10.667 4.66675C10.667 3.9595 10.386 3.28123 9.88594 2.78113C9.38585 2.28103 8.70757 2.00008 8.00033 2.00008C7.29308 2.00008 6.6148 2.28103 6.11471 2.78113C5.61461 3.28123 5.33366 3.9595 5.33366 4.66675C5.33366 5.37399 5.61461 6.05227 6.11471 6.55237C6.6148 7.05246 7.29308 7.33342 8.00033 7.33342Z" fill="#EA7052"/>
                            </svg>
                        </div>
                        <div className="students_content">{examObj.applicant_count} students</div>
                    </div>
                </div>
                {/* {moment(examObj.registration_close_time).diff(moment(new Date()) , 'h') <= examObj.registration_close_warning_duration && moment(examObj.registration_close_time).diff(moment(new Date()) , 'h') > 0 ?
                    <div className="fourth" onClick={e => e.stopPropagation()}>
                        <Button examObj={examObj} openPopup={openPopup}/>
                    </div>
                    :
                    null
                } */}
                <div className="fourth" onClick={e => e.stopPropagation()}>
                    <Button examObj={examObj} openPopup={openPopup}/>
                </div>

            {showModal ? <Popup examObject={examObj} show={showModal} onClose={() => setShowModal(!showModal)} isRegisterd={true} /> : null}
        </ExamComponentStyles>
    )
}

const ExamComponentStyles = styled.div`
    background-color: #fff;
    border-radius: 12px;
    padding: 20px;
    cursor:pointer;

    .first{
        width: 100%;
        height: 15px;
        margin-bottom: 17px;
        display:flex;
        align-items: center;
        justify-content:space-between;
    }

    .first_child{
        width: 122px;
        display:flex;
        align-items: center;
        justify-content:flex-start;
    }

    .exam_title{
        margin-left: 4.37px;
        height:11px;
        font-family: Mulish;
        font-style: normal;
        font-weight: 800;
        font-size: 11px;
        line-height: 100%;
        display: flex;
        align-items: center;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #313848;
        opacity: 0.9;
    }

    .second_child{
        width: 213px;
        display:flex;
        align-items: center;
        justify-content:flex-end;
        gap:7px;
    }

    .exam_class{
        max-height:12px;
        width:40px;
        font-family: Mulish;
        font-style: normal;
        font-weight: 800;
        font-size: 13px;
        line-height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        letter-spacing: 0.4px;
        text-transform: uppercase;
        color: #313848;
        opacity: 0.7;
    }

    .registration_end_div{
        width: 80%;
        height: 24px;
        font-family: Mulish;
        font-style: normal;
        font-weight: bold;
        font-size: 11px;
        line-height: 109.2%;
        display: flex;
        justify-content:center;
        align-items: center;
        letter-spacing: 0.4px;
        color: #DA0000;
        background: rgba(218, 0, 0, 0.1);
        border-radius: 5px;
    } 

    .second{
        width: 100%;
        height: 32px;
        margin-bottom: 16px;
        font-family: Mulish;
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 16px;
        letter-spacing: 0.4px;
        color: #8B8F99;
    }

    .third{
        width: 100%;
        height: 44px;
        margin-bottom: 22px;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .exam_date{
        height:16px;
        display:flex;
        align-items: center;
    }

    .calendar_date{
        margin-left: 5px;
        font-family: Mulish;
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        line-height: 115.46%;
        display: flex;
        align-items: center;
        letter-spacing: 0.3px;
        color: #313848;
    }
    .exam_totalQues{
        height:16px;
        display:flex;
        align-items: center;
    }

    .question_content{
        margin-left: 5px;
        font-family: Mulish;
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        line-height: 115.46%;
        display: flex;
        align-items: center;
        letter-spacing: 0.3px;
        color: #313848;
    }

    .exam_time{
        height:16px;
        display:flex;
        align-items: center;
    }

    .timer_content{
        margin-left: 5px;
        font-family: Mulish;
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        line-height: 115.46%;
        display: flex;
        align-items: center;
        letter-spacing: 0.3px;
        color: #313848;
    }

    .exam_totalStudents{
        height:16px;
        display:flex;
        align-items: center;
    }

    .students_content{
        margin-left:5px;
        font-family: Mulish;
        font-style: normal;
        font-weight: bold;
        font-size: 13px;
        line-height: 115.46%;
        display: flex;
        align-items: center;
        letter-spacing: 0.3px;
        color: #313848;
    }

    .fourth{
        width: 100%;
        height: 42px;
        /* background: #7B7FDA; */
        border-radius: 8px;
    }
    
    button{
        width: inherit;
        height: inherit;
        border-radius: 8px;
        background: inherit;
        border: inherit;
        font-family: Mulish;
        font-style: normal;
        text-transform: Uppercase;
        font-size: 14px;
        line-height: 109.2%;
        display: flex;
        justify-content: center;
        align-items: center;
        letter-spacing: 2px;
        color: #FFFFFF;
        cursor: pointer;
    }

    .registerdBtn{
        background: #DA0000;
    }

    @media only screen and (max-width: 401px){
        /* height: 249px; */
        width: calc(100vw - 40px);
    }

`;


export default ExamComponent
