import React from 'react'
import styled from 'styled-components'
import Link from 'next/link';
import Router from 'next/router';
import { useRouter } from 'next/router'

function MockExamHeaderComponent() {
    const router = useRouter();

    let highlight = router.asPath.split('/')[2];
    console.log(highlight);
    
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
                <Link href='/myExams/upcoming'>
                    <a>
                        <button className="upcoming_exam" style={highlight==='upcoming' ? {opacity:"1"}:{}}>Upcoming Exams</button>
                        {
                            highlight === 'upcoming' ? 
                            (
                                <svg width="150" height="5" viewBox="0 0 192 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.00594764 2.84384C0.406772 -0.233271 63.9288 -0.222422 111.088 0.311981C141.844 0.660237 192.061 -1.31947 192 1.74263C191.916 5.93996 110.633 4.62259 73.4636 4.35377C32.3591 4.05621 -0.508062 6.78729 0.00594764 2.84384Z" fill="#7B7FDA"/>
                                </svg>
                            )
                            :
                            null
                        }
                    </a>
                </Link>
                <Link href='/myExams/past'>
                    <a>
                        <button className="past_exam" style={highlight==='past' ? {opacity:"1"}:{}}>Past Exam</button>
                        {
                            highlight === 'past' ? 
                            (
                                <svg width="120" height="5" viewBox="0 0 192 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.00594764 2.84384C0.406772 -0.233271 63.9288 -0.222422 111.088 0.311981C141.844 0.660237 192.061 -1.31947 192 1.74263C191.916 5.93996 110.633 4.62259 73.4636 4.35377C32.3591 4.05621 -0.508062 6.78729 0.00594764 2.84384Z" fill="#7B7FDA"/>
                                </svg>
                            )
                            :
                            null
                        }
                    </a>
                </Link>
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

    .btn_cntr > a{
        height:28px;
        display: flex;
        flex-direction:column;
        justify-content:space-between;
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
        color: black;
        opacity: 0.4;
        cursor:pointer;
    }

    .pastExamWithHighlighter > button{
        color: black;
        opacity: 0;
    }


    @media only screen and (max-width: 500px) {

        padding-left: 18px;
        padding-top: 0px;
        padding-bottom:0px;
        
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
