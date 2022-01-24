import React, {useState , useEffect} from 'react'
import styled from 'styled-components'

function ReminderTimer({date}) {

    const[timerDays, setTimerDays] = useState();
    const[timerHours, setTimerHours] = useState();
    const[timerMinutes, setTimerMinutes] = useState();
    const[timerSeconds, setTimerSeconds] = useState();

    const[showTimer, setShowTimer] = useState(true);

    let interval ;

    const startTime = () => {
        const countDown = new Date(date).getTime();
        // const countDown = new Date(date).getTime();


        interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDown - now;

            const days = Math.floor(distance / (24*60*60*1000));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if(distance < 0){
                //Stop Timer
                clearInterval(interval);
            }else{
                //Update Timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        })
    }

    useEffect(()=>{
        startTime();
    })

    return (
        <ReminderTimerStyles>
            <div className="time">
                {timerHours <= 0 && timerMinutes <= 0 && timerSeconds <= 0
                    ? null
                    :<div>{timerMinutes < 10 ? `0${timerMinutes}` : timerMinutes }:{timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}</div>
                }
            </div>
        </ReminderTimerStyles>
    )
}

const ReminderTimerStyles = styled.div`
    margin-left:8px;
    height:100%;

    .time{
        font-family: Mulish;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 115.46%;
        display: flex;
        align-items: center;
        justify-content: center;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #ffffff;
    }
`;

export default ReminderTimer
