import React from 'react';
import styles from '../styles/QuestionComponent.module.css'
import {useGlobalContext} from './context';

function QuestionComponent() {
    const {questions, curDisplayQues , prevQuestion, nextQuestion, quesAndSelectedOption} = useGlobalContext();
    // console.log(curDisplayQues.qid);
    
    const innerText = (e,option_id) => {
        let text = e.target.innerText;
        console.log(text);
        // let cur_id = `${curDisplayQues.qid}${option_id}option` ;
        // console.log(cur_id);
        // let element = document.getElementById(`${cur_id}`);
        // console.log(element);
        // let classesArray = element.classList;
        // // const keys = Object.values(classesArray);
        // console.log(classesArray);

        // if(element.classList.contains(`${styles.highlight}`)){
        //     element.classList.remove(`${styles.highlight}`);
        // }else{
        //     element.classList.add(`${styles.highlight}`);

        //     // element.style.backgroundColor = "#f9ad6d"
        //     // element.style.backgroundColor = ""; 
        // }

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
    }
    
    function arrayRemove(arr, value) { 
        return arr.filter(function(ele){ 
            return ele != value; 
        });
    }

    return (
        <div className={styles.main_container}>
            <div className={styles.question_body}>

                <div className={styles.question_list_container}>
                    <div className={styles.ques_title}>
                        {/* <BlockMath>{curDisplayQues.questionTitle}</BlockMath> */}
                        {/* <BlockMath></BlockMath> */}
                        {curDisplayQues.questionTitle}
                        
                    </div>
                    <div className={styles.option_list}>
                        {curDisplayQues.optionArray.map((optn) => {
                            const {oid , option} = optn;
                            return(
                                <div className={styles.single_optn}  key={oid} id={`${curDisplayQues.qid}${oid}option`} >
                                    {String.fromCharCode(96+oid)}.<span className={styles.optn} onClick={(e) => innerText(e,oid)}>{option}</span>
                                    {/* {String.fromCharCode(96+oid)}.<span className={styles.optn} onClick={(e) => innerText(e,oid)}><BlockMath>{option}</BlockMath></span> */}
                                </div>
                            )
                        })}
                    </div>
                </div> 

                <div className={styles.btn_cntr}>
                    {curDisplayQues.qid !== 1 ? 
                        (<div className={styles.previous_btn} onClick={prevQuestion}>Previous</div>)
                        :
                        null
                    }
                    {curDisplayQues.qid == questions.length ?
                        (<div className={styles.next_btn} onClick={nextQuestion}>Finish</div>)
                        :
                        (<div className={styles.next_btn} onClick={nextQuestion}>Next</div>) 
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default QuestionComponent;
