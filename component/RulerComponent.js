import React, {useEffect} from 'react'
import styled from 'styled-components';
import ReactTabIndicator from "react-tab-indicator";
import { useGlobalContext } from '../pages/context';

function RulerComponent() {

    const{ questions, getCurQuestionDetails } = useGlobalContext();
    
    // let itemArray = [];
    // questions.map((ques) => {
    //     itemArray.push(ques.qid);
    // })


    useEffect(() => {
        
    }, []);

    return (
        <RulerComponentStyles >
            <div className="ruler_cntr">
                {questions.map((ques) => {
                    const{qid} = ques;
                    return(
                        <div key={qid} className= "singleID" onClick={() => getCurQuestionDetails(qid)} id={`${qid}`}>
                            <div className='singleID_info'>
                                <span id={`num${qid}`}>{qid}</span>
                                <div id={`underline${qid}`}className='underline'></div>
                            </div>
                        </div>
                    )
                })}

                {/* <ReactTabIndicator className="ruler"
                    items={itemArray}
                    borderColor={"#7B7FDA"}
                    borderHeight={3}
                    tranfromSpeed={300}
                    onClick={handleOnClick}
                /> */}
            </div>
        </RulerComponentStyles>
    )
}

const RulerComponentStyles = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    /* padding-left: 90px; */

    .ruler_cntr{
        margin-bottom: 5px;
        margin-right : 90px;
        width: 608px;
        display: flex;
    }

    .singleID{
        /* padding-left: 36px; */
        padding-right: 36px;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .singleID_info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 23px;
    }

    .underline{
        display: none;
        margin-top: 9px;
        height: 3px;
        width: 32px;
        background-color: #7B7FDA;
    }

    .singleID:first-child{
        padding-left: 0px;
    }

    .singleID:last-child{
        padding-right: 416px;
    }

    span{
        width: 100%;
        height: 90%;
        display:flex;
        justify-content: center;
        /* align-items: center; */

    }

    .highlight{
        background: rgba(249, 173, 109, 0.25);
        border: 2px solid #F9AD6D;
        box-sizing: border-box;
        border-radius: 50%;
    }

    @media only screen and (max-width: 1000px) {
        .ruler_cntr {
            /* background-color: lightblue; */
            margin-right: 0px;
        }

        .singleID:first-child{
            padding-left: 0px;
        }

        .singleID:last-child{
            padding-right: 20px;
        }
    }

    @media only screen and (max-width: 600px){
        .ruler_cntr{
            width: 100%;
        }

        .singleID:first-child{
            padding-left: 20px;
        }


    }

`;

export default RulerComponent
