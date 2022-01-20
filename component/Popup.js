import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import exam_image_popup from '../assets/exam_image_popup.png';
import submit_exam_image from '../public/submit_exam_image.png'
import {useGlobalContext} from '../component/context';



function Popup({show, onClose, examObject, isRegisterd}) {

  const{ registerForExam } = useGlobalContext();

  return (
    <PopupStyles>
      <div className="overlay" onClick={onClose} >
        <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="body">
                <div className="main">
                  <Image src={isRegisterd ? exam_image_popup : submit_exam_image} alt="" />
                  <div className="title">
                    {isRegisterd ? "Register for Exam" : "Submit Exam"}
                  </div>
                  <div className="description">
                    {isRegisterd ? "Are you sure you want to register for this exam"
                                  : "You have not unattempted questions. Are you sure you want to submit this exam?"}
                  </div>
                  <button className="register_btn" onClick={() => registerForExam(examObject._id, onClose)}>{isRegisterd ? "YES! REGISTER": "Submit"}</button>
                  <button className="cancel_btn" onClick={onClose}>{isRegisterd ? "CANCEL" : "REVISIT QUESTIONS"}</button>
                </div>
            </div>
        </div>
      </div>
    </PopupStyles>
  )
}

const PopupStyles = styled.div`
  /* width: 100vw;
    height: 100vh; */

  .overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(49, 56, 72, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal{
    background: #fff;
    min-width: 328px;
    max-width:420px;
    min-height: 322px;
    max-height:465px;
    border-radius: 12px;
  }

  .body{
    height: 100%;
    width: 100%;
    padding-top: 32px;
    padding-bottom: 28px;
  }

  .main{
    height:100%
    width: 100%;    
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    align-items:center;
  }

  .title{
    width: 224px;
    height: 24px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-family: Itim;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: 0.4px;
    color: #313848;
    margin-top: 21px;
  }

  .description{
    width: 247px;
    height: 34px;
    display:flex;
    justify-content:center;
    font-family: Mulish;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    text-align: center;
    letter-spacing: 0.4px;
    margin-top: 9px;
    color: #8B8F99;
  }

  button{
    text-transform: Uppercase;
  }

  .register_btn{
    width: 270px;
    height: 49px;
    background: #7B7FDA;
    margin-top: 20px;
    /* background: transparent; */
    border-radius:8px;
    border:transparent;
    color:#fff;
  }

  .cancel_btn{
    width: 59px;
    /* height: 13px; */
    background: transparent;
    border:transparent;
    color: black;
    margin-top: 20px;
  }

`;

export default Popup
