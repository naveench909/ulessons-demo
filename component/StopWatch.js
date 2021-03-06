import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


return (
    <div style={{textAlign: 'center'}}>
        <div style={{fontSize: '15px'}}>
            {
                days > 0 ?
                    <div>{days}:{hours}:{minutes}:{seconds}</div>
                    :
                    hours > 0 ?
                    <div>{hours}:{minutes}:{seconds}</div>
                    :
                    minutes > 0 ?
                    <div>{minutes > 9 ? minutes : `0${minutes}`}:{seconds > 9 ? seconds : `0${seconds}`}</div>
                    :
                    null
            }
        </div>
      {/* <p>{isRunning ? 'Running' : 'Not running'}</p> */}
    {/* <button onClick={start}>Start</button>
    <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button> */}
    {/* <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 300);
        restart(time)
      }}>Restart</button> */}
    </div>
);
}

export default MyTimer;