import React from 'react';
import styles from '../styles/QuestionComponent.module.css'
import {useGlobalContext} from './context';
import OptionComponent from './OptionComponent';


function QuestionComponent() {
    const {questions, curDisplayQues , prevQuestion, nextQuestion } = useGlobalContext();

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
                                // <div className={styles.single_optn}  key={oid} id={`${curDisplayQues.qid}${oid}option`} >
                                //     {String.fromCharCode(96+oid)}.<span className={styles.optn} onClick={(e) => innerText(e,curDisplayQues.qid,oid)}>{option}</span>
                                //     {/* {String.fromCharCode(96+oid)}.<span className={styles.optn} onClick={(e) => innerText(e,oid)}><BlockMath>{option}</BlockMath></span> */}
                                // </div>
                                
                                <OptionComponent key={oid} option={option} option_id={oid} />
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
