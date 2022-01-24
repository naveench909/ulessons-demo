import React from 'react'
import styled from 'styled-components'
import Header from '../component/Header';
import QuestionComponent from '../component/QuestionComponent';

function Home() {
    return (
        <HomeStyles>
            <main className='main'>
                <div className='header'>
                    <Header />
                </div>
                <div className='main_body'>
                    <QuestionComponent />
                </div>
            </main>
        </HomeStyles>
    )
}

const HomeStyles = styled.div`
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    .main {
        width: 100vw;
        min-height: 100vh;
        background-color: #E5E5E5;
    }

    /* .main::-webkit-scrollbar{
        display:none;
    } */

    .header {
        position: sticky;
        top: 0;
        width: 100vw;
        height: 192px;
    }

    .main_body {
        width: 100%;
        height:calc(100% - 192px);
        /* overflow-y: scroll; */

    }

    /* .main_body::-webkit-scrollbar{
        display:none;
    } */

`;


export default Home
