import React from 'react'
import styled from 'styled-components'
import Link from 'next/link';
import Router from 'next/router';

function MockExamHeaderComponent() {

    const redirectTo = () => {
        Router.push({
            pathname : '/'
        })
    }

    return (
        <MockExamHeaderStyles>
            <div className="title_cntr">
                <div className="icon" onClick={redirectTo}>
                    <svg width="65" height="59" viewBox="0 0 65 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.11 35.21L18 30.32L23.11 25" stroke="#313848" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
                        <path d="M38 30L18 30" stroke="#313848" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
                    </svg>
                </div>

                <div className="title">
                    My Exams
                </div>
            </div>

            <div className="btn_cntr">
                <Link href='/myExams/upcoming'><a><button className="upcoming_exam">Upcoming Exams</button></a></Link>
                <Link href='/myExams/past'><a><button className="past_exam">Past Exam</button></a></Link>
            </div>
        </MockExamHeaderStyles>
    )
}

const MockExamHeaderStyles = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 71px 0px 16px 85px;

    .title_cntr{
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    .icon{
        cursor: pointer;
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
        height: 50%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .upcoming_exam, .past_exam{
        height: 17px;
        text-align: center;
    }
    .upcoming_exam{
        width:158px;
    }

    .past_exam{
        width:123px;
    }

    button{
        border: transparent;
        width:inherit;
        background-color: transparent;
        height: inherit;
        font-family: Mulish;
        font-style: normal;
        font-weight: bold;
        font-size: 11px;
        line-height: 115.46%;
        text-align: center;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #313848;
        opacity: 0.4;
        cursor:pointer;
    }

    @media only screen and (max-width: 500px) {

        padding-left: 18px;
        .title_cntr {
            margin-left: 0px;
        }

        .btn_cntr{
            margin-left: -18px;
            justify-content:space-evenly;
        }
    }
`;

export default MockExamHeaderComponent
