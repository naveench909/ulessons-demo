import React, { useState, useContext, useLayoutEffect, useEffect} from 'react';
import { questionList } from '../data/questionArray';
import { examObjs } from '../data/examObject';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    
    const[allExams , setAllExams] = useState(examObjs);
    const[questions , setQuestions] = useState(questionList);
    const[curDisplayQues , setCurDisplayQues] = useState(questionList[0]);
    const[quesAndSelectedOption , setQuesAndSelectedOption] = useState([]);
    const [size, setSize] = useState([0, 0]);

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
        
        let curQues = quesAndSelectedOption.find(ques => ques.qid === curDisplayQues.qid)
        if(curDisplayQues.multipleSelect){            
            let beforeLength = curQues.selectedOptionArr.length;
            // remove option if exists
            for(let i = 0 ; i < curQues.selectedOptionArr.length ; i++){
                if(option_id === curQues.selectedOptionArr[i].option_id){
                    let copyArr = curQues.selectedOptionArr;
                    copyArr.splice(i,1);
                    curQues.selectedOptionArr = copyArr;
                }
            }
            // add option if not exists 
            if(beforeLength === curQues.selectedOptionArr.length)   curQues.selectedOptionArr.push({option_id,highlighted:true});
        }else{
            if(curQues.selectedOptionArr.length > 0){
                let prevSelectedOptionId = curQues.selectedOptionArr[0].option_id;
                if(prevSelectedOptionId !== "") document.getElementById(prevSelectedOptionId).style.backgroundColor = ""
            }

            let newSelectedOptionArr = [];
            newSelectedOptionArr.push({option_id,highlighted:true});
            curQues.selectedOptionArr = newSelectedOptionArr;
            document.getElementById(option_id).style.backgroundColor = "#f9ad6d"
        }

        highlightSkippedQues();
        console.log(curQues);
    }
    
    // gives details of current question
    const getCurQuestionDetails = (ques_id) => {
        highlightSkippedQues();
        let element = document.getElementById(ques_id);
        let obj =  element.getBoundingClientRect();
        
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

    // gives you details of previous question
    const prevQuestion = () => { 
        let curQuesId = curDisplayQues.qid;
        if(curQuesId < 2){
            return;
        }
        // highlightSkippedQues();
        getCurQuestionDetails(curQuesId - 1);
    }

    // gives you details of next question
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

        let element = document.getElementById(`num${curDisplayQues.qid}`);
        if(curQues.selectedOptionArr.length === 0){
            element.style.borderColor = "rgba(249, 173, 109, 1)"
            element.style.backgroundColor = "rgba(249, 173, 109, 0.50)"
        }else if(curQues.selectedOptionArr.length !== 0){
            element.style.borderColor = "rgba(249, 173, 109, 0)"
            element.style.backgroundColor = "rgba(249, 173, 109,0)"
        }
    }

    //updates size of current screen
    function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
    }

    // set Token in cookies
    const setToken = () => {
        let obj = {id: 2 , name: "Naveen Kumar"}

    }
    
    // Mock Exam Screen
    const registerForExam = (examUid , onClose) =>{
        console.log(examUid);

        let examObjectCopy = allExams.find( exam => exam._id === examUid);
        console.log("examObjectCopy",examObjectCopy);

        examObjectCopy.isRegistered = true;
        for(let i = 0; i < allExams.length; i++){
            if(allExams[i]._id === examUid){
                allExams[i] = examObjectCopy;
                break;
            }
        }
        onClose();
    }




    // console.log(quesAndSelectedOption);
    // console.log("all Exams",allExams);
    useEffect(() => {
        let array = [];
        questions.map((ques) => {
            let obj = {qid : ques.qid , selectedOptionArr: []};
            array.push(obj);
        })
        setQuesAndSelectedOption(array);

        // setExamObject(examObjs);

    },[])

    // useLayoutEffect(() => {
    //     window.addEventListener('resize', updateSize);
    //     updateSize();
    //     return () => window.removeEventListener('resize', updateSize);
    // }, []);
    
    return(
        <AppContext.Provider 
        value={{
            questions,curDisplayQues,quesAndSelectedOption,size,allExams,
            getCurQuestionDetails,prevQuestion,nextQuestion,innerText,setToken,registerForExam
            }}>
            {children}
        </AppContext.Provider>
    )
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
