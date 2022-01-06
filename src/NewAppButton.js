import React, { useContext } from 'react';
import { ClickedTabContext } from "./App"
import styled from 'styled-components';

const Div = styled.div`
    position: fixed;
    width: 126px;
    height: 37.33px;
    left: 1091px;
    top: 132px;

    background: #DD1C1A;
    border-radius: 20px;
    text-align: center;
    cursor: default;

`
const P = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 6px;

    color: #FFFFFF;
`

function NewAppButton(props) {
    const [clickedTabValue, setClickedTab] = useContext(ClickedTabContext)

    const onClick = (e) => {
        setClickedTab("Studio")
    }

    return (
        <Div onClick={onClick}>
            <P>{"+ Create New"}</P>
        </Div>
    );
}

export default NewAppButton;