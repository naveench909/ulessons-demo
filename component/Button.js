import React from 'react'
import styles from '../styles/Button.module.css'

function Button({examObj,openPopup}) {

    const getButtonStyles = () => {
        if(examObj.is_registerd){
            if(examObj.learner_ids_for_reminders.length > 0 ){
                return styles["reminderBtn"]
            }else{
                return styles["registeredBtn"]
            }
        }else{
            return styles["registerBtn"]
        }
    }

    return (
        <div className={styles.wrapper}>
            <button className={getButtonStyles()} onClick={() => openPopup(examObj)}>
                {examObj.is_registerd ? examObj.learner_ids_for_reminders.length > 0 ? "STARTING IN 2:43" : "REGISTERED" : "REGISTER FOR EXAM" }
            </button>
        </div>
    )
}

export default Button
