import React, { useState, useContext, useEffect, useRef} from 'react';
import { questionList } from '../data/questionArray';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const[questions , setQuestions] = useState(questionList);
    const[curDisplayQues , setCurDisplayQues] = useState(questionList[0]);
    const[quesAndSelectedOption , setQuesAndSelectedOption] = useState([]);

    const innerText = (e, option_id) => {

        let element = document.getElementById(`${option_id}`);
        // console.log(element);

        if(element.classList.contains("highlight")){
            element.classList.remove("highlight");
            element.style.backgroundColor = "";
        }else{
            element.classList.add("highlight");
            element.style.backgroundColor = "#f9ad6d";
        }

        // finds current displaying question
        let curQues = quesAndSelectedOption.find(ques => ques.qid === curDisplayQues.qid)
        // console.log(curQues); 

        let beforeLength = curQues.selectedOptionArr.length;
        // remove option if exists
        for(let i = 0 ; i < curQues.selectedOptionArr.length ; i++){
            if(option_id === curQues.selectedOptionArr[i].option_id){
                let copyArr = curQues.selectedOptionArr;
                copyArr.splice(i,1);
                // var result = arrayRemove(curQues.selectedOptionArr, option_id);

                // console.log("after removing" , result)
                curQues.selectedOptionArr = copyArr;

            }

        }

        // add option if not exists 
        if(beforeLength === curQues.selectedOptionArr.length)   curQues.selectedOptionArr.push({option_id,highlighted:true});

        console.log(curQues);
    }
    
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
        // console.log(curQues);

        let element = document.getElementById(`num${curDisplayQues.qid}`);
        if(curQues.selectedOptionArr.length === 0){
            element.classList.add('highlight');
        }else if(curQues.selectedOptionArr.length !== 0){
            element.classList.remove('highlight');
        }
    }

    // console.log(quesAndSelectedOption);
    useEffect(() => {
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
                getCurQuestionDetails,prevQuestion,nextQuestion,innerText
            }}>
            {children}
        </AppContext.Provider>
    )
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
