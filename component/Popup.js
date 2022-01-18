import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import exam_image_popup from '../assets/exam_image_popup.png';
import {useGlobalContext} from '../component/context';



function Popup({show, onClose, examObject}) {

  const{ registerForExam } = useGlobalContext();

  return (
    <PopupStyles>
      <div className="overlay" onClick={onClose} >
        <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="body">
                {
                <div className="main">
                  <Image src={exam_image_popup} alt="" />
                  <div className="title">
                    Register for Exam
                  </div>
                  <div className="description">
                    Are you sure you want to register for this exam
                  </div>
                  <button className="register_btn" onClick={() => registerForExam(examObject._id, onClose)}>yes! register</button>
                  <button className="cancel_btn" onClick={onClose}>cancel</button>
                </div>
                }
            </div>
        </div>
      </div>
    </PopupStyles>
  )
}

const PopupStyles = styled.div`

  .overlay{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(49, 56, 72, 0.75);
    /* background: #313848;
    opacity: 0.5; */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal{
    background: #fff;
    width: 328px;
    height: 322px;
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
  img{
    width: 80px;
    height: 72px;
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
    /* align-items:center; */

    font-family: Mulish;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    /* or 17px */

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

  }

  .cancel_btn{
    width: 59px;
    height: 13px;
    color: black;
    margin-top: 20px;
    
  }

`;

export default Popup
