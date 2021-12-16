import React, {useState , useEffect} from 'react'
import styled from 'styled-components'

function TimerComponent() {

    const[timerDays, setTimerDays] = useState();
    const[timerHours, setTimerHours] = useState();
    const[timerMinutes, setTimerMinutes] = useState();
    const[timerSeconds, setTimerSeconds] = useState();

    const[showTimer, setShowTimer] = useState(false);

    let interval ;

    const startTime = () => {
        const countDown = new Date("Dec 18, 2021 18:00:00").getTime();

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
        <TimerComponentStyles>
            <div className="timer">
                <div className="pause_svg">
                    {/* <svg width="16" height="16" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9" cy="9" r="8" stroke="#7B7FDA" strokeWidth="1.69039" strokeMiterlimit="10" strokeLinejoin="round"/>
                        <line x1="7" y1="6" x2="7" y2="12" stroke="#7B7FDA" strokeWidth="2"/>
                        <line x1="11" y1="6" x2="11" y2="12" stroke="#7B7FDA" strokeWidth="2"/>
                    </svg> */}
                    <label className="switch">
                        <input type="checkbox" onClick={() => setShowTimer(!showTimer)}/>
                        <span className="slider round"></span>
                    </label>
                </div>

                {showTimer ? 
                    (<div className="time">
                        {timerHours === 0 && timerMinutes === 0 && timerSeconds === 0
                            ? "Test Over"
                            :<div>{timerHours < 10 ? `0${timerHours}` : timerHours}:{timerMinutes < 10 ? `0${timerMinutes}` : timerMinutes }:{timerSeconds < 10 ? `0${timerSeconds}` : timerSeconds}</div>
                        }
                    </div>)
                    :
                    null
                }
            </div>
        </TimerComponentStyles>
    )
}

const TimerComponentStyles = styled.div`
    .timer{
        width: 120px;
        height: 25px;
        margin: 43px 0px 0px 44px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .pause_svg{
        width: 38px;
        height: 22px;
    }

    .time{
        font-family: Mulish;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 140%;

        display: flex;
        align-items: center;
        letter-spacing: 1px;

        color: #313848;
    }


    /* The switch - the box around the slider */
    .switch {
        position: relative;
        display: inline-block;
        width: 38px;
        height: 22px;
    }

    /* Hide default HTML checkbox */
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* The slider */
    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        /* padding-left:2px; */
        display:flex;
        align-items: center;
        background-color: #DFE6EE;
        -webkit-transition: .3s;
        transition: .3s;
    }


    .slider:before {
        position: absolute;
        content: "";
        /* left:2px; */
        height: 18px;
        width: 18px;
        /* left: 4px;
        bottom: 4px; */
        background-color: white;
        -webkit-transition: .3s;
        transition: .3s;
    }

    input:checked + .slider {
        background-color: #7B7FDA;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px #7B7FDA;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(18px);
        -ms-transform: translateX(18px);
        transform: translateX(18px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 10px;
    }

    .slider.round:before {
        border-radius: 50%;
    }

    /* @media screen only and (max-width: 426px){
        .timer{
            margin: 43px 0px 0px 0px;
        }
    } */
`;

export default TimerComponent
