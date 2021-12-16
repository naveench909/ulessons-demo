import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useGlobalContext } from './context';

function RulerComponent() {
    const{ questions, getCurQuestionDetails, curDisplayQues } = useGlobalContext();
    useEffect(() => {
        let id = curDisplayQues.qid;
        let element = document.getElementById(`underline${id}`);
        element.style.display= "block";
    },[])

    return (
        <RulerComponentStyles >
            <div className="ruler_cntr">
                {questions.map((ques) => {
                    const{qid} = ques;
                    return(
                        <div key={qid} className= "singleID" onClick={() => getCurQuestionDetails(qid)} id={`${qid}`}>
                            <div className='singleID_info'>
                                <span id={`num${qid}`} className='highlight'>{qid}</span>
                                <div id={`underline${qid}`} className='underline'></div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </RulerComponentStyles>
    )
}

const RulerComponentStyles = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;

    .ruler_cntr{
        width: 608px;
        display: flex;
    }

    .singleID{
        padding-right: 36px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .singleID_info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 23px;

    }

    .underline{
        display: none;
        margin-top: 9px;
        height: 3px;
        width: 32px;
        background-color: #7B7FDA;
    }

    .singleID:first-child{
        padding-left: 0px;
    }

    .singleID:last-child{
        padding-right: 416px;
    }

    span{
        width: 100%;
        height: 23px;
        display:flex;
        justify-content: center;
        align-items: center;
        font-family: Mulish;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 100%;

        letter-spacing: 0.4px;

        color: #313848;
        opacity: 0.5;
    }

    .highlight{      
        border: 2px solid rgba(249, 173, 109, 0);
        background-color: rgba(249, 173, 109, 0); 
        border-radius: 50%;
    }

    @media only screen and (max-width: 1000px) {
        .ruler_cntr {
            margin-right: 0px;
        }

        .singleID:first-child{
            padding-left: 0px;
        }

        .singleID:last-child{
            padding-right: 20px;
        }
    }

    @media only screen and (max-width: 1025px){
        .singleID:last-child{
            padding-right: 208px;
        }
    }

    @media only screen and (max-width: 769px){
        .singleID:last-child{
            padding-right: 80px;
        }
    }

    @media only screen and (max-width: 426px){
        .ruler_cntr{
            width: 100%;
            padding : 0px 20px;
        }

        .singleID:last-child{
            padding-right: 25px;
        }
    }

    @media only screen and (max-width: 376px){

        .ruler_cntr{
            width: 100%;
            padding : 0px 20px;
        }

        .singleID:last-child{
            padding-right: 20px;
        }
    }

    @media only screen and (max-width: 321px){
        .ruler_cntr{
            width: 100%;
            padding : 0px 20px;
        }

        .singleID:last-child{
            padding-right: 20px;
        }
    }

`;

export default RulerComponent
