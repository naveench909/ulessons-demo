import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {useGlobalContext} from './context';


function OptionComponent({ option_id, option}) {

    const {innerText, quesAndSelectedOption, curDisplayQues} = useGlobalContext();
    useEffect(() => {
        for(let i = 0 ; i < quesAndSelectedOption.length; i++){
            let curQuesResultObj;
            if(curDisplayQues.qid === quesAndSelectedOption[i].qid){
                curQuesResultObj = quesAndSelectedOption[i];
                let optionArr = curQuesResultObj.selectedOptionArr;

                for(let i = 0 ; i < optionArr.length ; i++) document.getElementById(optionArr[i].option_id).style.backgroundColor = "#f9ad6d"
            }
        }
    })

    return (
        <OptionComponentStyles id={option_id} >
            <div className="optn_cntr">
                <span className='.optn' onClick={(e) => innerText(e,option_id)}>{option}</span>
            </div>
        </OptionComponentStyles>
    )
}

const OptionComponentStyles = styled.div`
    height: 50px;
    background-color: #fff;
    border-radius: 8px;
    margin-bottom: 16px;
    font-family: Mulish;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;

    display: flex;
    align-items: center;

    color: #313848;
    padding: 16px;
    cursor: pointer;

    .optn_cntr{
        width: 100%;
        height: 100%
    }

    span{
        margin-left: 17px;
    }

    .highlight{
        background-color: #f9ad6d;
    }
`;


export default OptionComponent
