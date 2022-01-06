import React, { useContext } from 'react';
import { FuncChangeComponentToRenderContext } from "./Studio"
import styled from 'styled-components'; 

const Div = styled.div`
    position: relative;
    width: 130.77px;
    height: 130.77px;
    margin: 2.5rem;

    background: ${
        props => {
            switch(props.type){
                case "notification":
                    return "#003049;"
                case "report":
                    return "#F77F00;"
                case "derivedData":
                    return "#DD1C1A;"
                case "answer":
                    return "#FCBF49;"
            }
        }
    }
    border-radius: 20.0156px;
`

const H1 = styled.h1`
    position: absolute;
    width: 92.07px;
    height: 18.68px;
    left: 1rem;
    top: 2rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16.0125px;
    line-height: 19px;
    /* identical to box height */

    color: #FFFFFF;
    cursor: default;
`
const Img = styled.img`
    position: absolute;
    width: 15.35px;
    height: 15.35px;
    left: 13rem;
    top: 3.5rem;
`
const P = styled.p`
    position: absolute;
    width: 118.76px;
    height: 54.04px;
    left: 1rem;
    top: 7rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 8.00625px;
    line-height: 9px;
    letter-spacing: 0.02rem;

    color: #FFFFFF;
    cursor: default;
`

function getApplicationImageSrc(applicationType){
    switch(applicationType){
        case "notification":
            return "/assets/notification.svg"
        case "report":
            return "/assets/report.svg"
        case "derivedData":
            return "/assets/derived_data.svg"
        case "answer":
            return "/assets/question.svg"
    }
}

function getComponentToRender(clickedCard){
    switch(clickedCard){
        case "Notifications":
            return "Initial Studio"
        case "Reports":
            return "Report Studio"
        case "Derived Data":
            return "Derived Data Studio"
        case "Answers":
            return "Initial Studio"
    }
}


function StudioCard(props) {
    const setComponentRendered = useContext(FuncChangeComponentToRenderContext)

    const onClick = (e) => {
        let clickedCard = e.currentTarget.dataset.value
        setComponentRendered(getComponentToRender(clickedCard))
    }

    return (
        <Div onClick={onClick} data-value={props.name} type={props.type}>
            <H1>{props.name}</H1>
            <Img src={getApplicationImageSrc(props.type)}/>
            <P>{props.description}</P>
        </Div>
    );
}

export default StudioCard;