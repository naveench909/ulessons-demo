import React, { useState, useContext, useEffect, useRef} from 'react';
import { questionList } from '../data/questionArray';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const[questions , setQuestions] = useState(questionList);
    const[curDisplayQues , setCurDisplayQues] = useState(questionList[0]);
    const[quesAndSelectedOption , setQuesAndSelectedOption] = useState([]);
    
    const getCurQuestionDetails = (ques_id) => {
        highlightSkippedQues();
        let element = document.getElementById(ques_id);
        let obj =  element.getBoundingClientRect();
        // console.log(obj.left);
        // console.log(Math.floor(window.outerWidth/2));
        
        if(obj.left > (Math.floor(window.outerWidth/2))){
            document.getElementById('ruler_cntr').scrollLeft += obj.left - (Math.floor(window.outerWidth/2));
        }else{
            document.getElementById('ruler_cntr').scrollLeft -= (Math.floor(window.outerWidth/2)) - obj.left ;
        }
        
        //removing style from prev id
        let prevElement = document.getElementById(`underline${curDisplayQues.qid}`);
        prevElement.style.display= "none";
        
        // adding style to current id
        let curElement = document.getElementById(`underline${ques_id}`);
        curElement.style.display= "block";
        
        // changing question 
        questions.map((ques)=>{
            if(ques.qid === ques_id){
                setCurDisplayQues(ques);
                return ;
            }
        })
    }

    const prevQuestion = () => { 
        let curQuesId = curDisplayQues.qid;
        if(curQuesId < 2){
            return;
        }
        // highlightSkippedQues();
        getCurQuestionDetails(curQuesId - 1);
    }

    const nextQuestion = ()=> {
        let curQuesId = curDisplayQues.qid;
        if(curQuesId > questions.length-1){
            return;
        }
        // highlightSkippedQues();
        getCurQuestionDetails(curQuesId + 1);
    }

    // highlights the unAnswered Question
    const highlightSkippedQues = () => {
        let curQues = quesAndSelectedOption.find(ques => ques.qid === curDisplayQues.qid);
        console.log(curQues);
        let element = document.getElementById(`num${curDisplayQues.qid}`);
        if(curQues.selectedOptionArr.length === 0){
            element.classList.add('highlight');
        }else if(curQues.selectedOptionArr.length !== 0){
            element.classList.remove('highlight');
        }
    }

    // runs on page load to add style on first question
    const setbar = () => {
        let id = curDisplayQues.qid;
        let element = document.getElementById(`underline${id}`);
        element.style.display= "block";
    }

    // console.log(quesAndSelectedOption);
    useEffect(() => {
        setbar();
        let array = [];
        questions.map((ques) => {
            let obj = {qid : ques.qid , selectedOptionArr: []};
            array.push(obj);
        })
        setQuesAndSelectedOption(array);
    },[])

    return(
        <AppContext.Provider 
            value={{
                questions,curDisplayQues,quesAndSelectedOption,
                getCurQuestionDetails,prevQuestion,nextQuestion
            }}>
            {children}
        </AppContext.Provider>
    )
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };