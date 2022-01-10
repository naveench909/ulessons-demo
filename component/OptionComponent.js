import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {useGlobalContext} from './context';


function OptionComponent({ option_id, OSN, option, option_no}) {
    const {innerText, quesAndSelectedOption, curDisplayQues} = useGlobalContext();

    useEffect(() => {
        quesAndSelectedOption.map((quesResultObj) => {
            if(quesResultObj.qid === curDisplayQues.qid){
                quesResultObj.selectedOptionArr.map((option_arr) => {
                    document.getElementById(option_arr.option_id).style.backgroundColor = "#f9ad6d"
                })
            }
        })
    })

    return (
        <OptionComponentStyles id={option_id} onClick={(e) => innerText(e,option_id)}>
            <div className="optn_cntr">
                {String.fromCharCode(parseInt(OSN+96))}.<span className='.optn'>{option}</span>
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
