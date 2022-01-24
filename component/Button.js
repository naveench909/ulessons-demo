import React, { useState,useEffect }  from 'react'
import styles from '../styles/Button.module.css'
import moment from 'moment';
import Router from 'next/router';
import ReminderTimer from './ReminderTimer';

function Button({examObj,openPopup}) {
    const[reminder, setReminder] = useState(false);
    const[showStartButton, setStartButton] = useState(false);

    const getButtonStyles = () => {
        if(examObj.is_registerd){
            if(reminder){
                if(showStartButton){
                    return styles["startBtn"]
                }
                return styles["reminderBtn"]
            }else{
                return styles["registeredBtn"]
            }
        }else{
            return styles["registerBtn"]
        }
    }

    const redirectTo = () => {
        Router.push({
            // pathname:('/home')
            pathname:(`http://localhost:3000/Exam/${examObj._id}/ongoing`)
        })
    }

    useEffect(() => {
        setInterval(() => {
            let remainingTime = moment(examObj.start_time).diff(moment(new Date()) , 'm')
            if(remainingTime < 5){
                setReminder(true);
            }

            if(moment(examObj.start_time).diff(moment(new Date()) , 's') <= 0){
                // console.log("naveen")
                setStartButton(true);
            } 
        })
    },[])


    console.log(moment(examObj.start_time).diff(moment(new Date()) , 'm'));

    return (
        <div className={styles.wrapper}>
            <button className={getButtonStyles()} onClick={() => openPopup(examObj)}>
                {examObj.is_registerd ? 
                    reminder ? 
                            showStartButton ?
                                (
                                    <div onClick={redirectTo}>
                                        Start Test
                                    </div>
                                )
                                :
                                (
                                <div className={styles.reminderDiv}>
                                    STARTING IN <ReminderTimer date={examObj.start_time}/>
                                </div>
                        ) 
                        :
                        "REGISTERED"
                    : 
                    "REGISTER FOR EXAM" }
            </button>
        </div>
    )
}

export default Button
