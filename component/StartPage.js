import React from 'react'
import styled from 'styled-components'
function StartPage({show , setShow}) {
    return (
        <StartPageStyles>
            <button onClick={() => {setShow(!show)}}>Start Test</button>
        </StartPageStyles>
    )
}

const StartPageStyles = styled.div`
    background-color: #e5e5e5;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    button{
        border: transparent;
        border-radius: 8px;
        color: #000;
        background-color: darkcyan ;
        height: 40px;
        width: 150px;
        cursor: pointer;
    }
`;

export default StartPage
