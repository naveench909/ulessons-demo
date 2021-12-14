import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {useGlobalContext} from './context';
import styles from '../styles/OptionComponent.module.css'
import { v4 as uuidv4 } from 'uuid';


function OptionComponent({ option_id, option}) {
    const {curDisplayQues, quesAndSelectedOption} = useGlobalContext();
    const [uid , setUid] = useState();

    const innerText = (e) => {
        let text = e.target.innerText;

        let element = document.getElementById(uid);
        console.log(element);

        // finds current displaying question
        let curQues = quesAndSelectedOption.find(ques => ques.qid === curDisplayQues.qid)
        // console.log(curQues); 

        let beforeLength = curQues.selectedOptionArr.length;
        // remove option if exists
        for(let i = 0 ; i < curQues.selectedOptionArr.length ; i++){
            if(text === curQues.selectedOptionArr[i]){
                var result = arrayRemove(curQues.selectedOptionArr, text);
                // console.log("after removing" , result)
                curQues.selectedOptionArr = result;
            }
        }

        // add option if not exists 
        if(beforeLength === curQues.selectedOptionArr.length)   curQues.selectedOptionArr.push(text);

        // console.log(curQues); 
    }
    
    function arrayRemove(arr, value) { 
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

    useEffect(() => {
        setUid(uuidv4());
    },[])

    return (
        
        <OptionComponentStyles>
            
            <div id={uid}>
                <span className='.optn' onClick={(e) => innerText(e)}>{option}</span>
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

    span{
        margin-left: 17px;
    }

    .highlight{
        background-color: #f9ad6d;
    }
`;


export default OptionComponent
