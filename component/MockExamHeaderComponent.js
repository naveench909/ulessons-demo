import React from 'react'
import styled from 'styled-components'
function MockExamHeaderComponent() {
    return (
        <MockExamHeaderStyles>
            <div className="title_cntr">
                <div className="icon">
                    <svg width="65" height="59" viewBox="0 0 65 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.11 35.21L18 30.32L23.11 25" stroke="#313848" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
                        <path d="M38 30L18 30" stroke="#313848" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
                    </svg>
                </div>

                <div className="title">
                    Mock Exams
                </div>
            </div>

            <div className="btn_cntr">
                <button className="all_exam">all exams</button>
                <button className="my_exam">my exams</button>
            </div>
        </MockExamHeaderStyles>
    )
}

const MockExamHeaderStyles = styled.div`
    width: 100vw;
    height: 112px;
    background-color: #fff;
    filter: drop-shadow(0px 0px 4px rgba(49, 56, 72, 0.25));

    .title_cntr{
        width: 100vw;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .icon{

    }

    .title{
        width: 127px;
        height: 59px;
        margin-bottom: 5px;
        display: flex;
        align-items: center;

        font-family: Mulish;
        font-style: normal;
        font-weight: bold;
        font-size: 23px;
        line-height: 26px;

        letter-spacing: -1px;

        color: #313848;
    }

    .btn_cntr{
        width: 100vw;
        height: 50%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .all_exam, .my_exam{
        width: 30%;
        height: inherit;
        text-align: center;
    }

    button{
        border: transparent;
        background-color: transparent;

        height: inherit;

        font-family: Mulish;
        font-style: normal;
        font-weight: bold;
        font-size: 11px;
        line-height: 115.46%;
        /* identical to box height, or 13px */

        text-align: center;
        letter-spacing: 1px;
        text-transform: uppercase;

        color: #313848;
        opacity: 0.4;

    }
`;

export default MockExamHeaderComponent
