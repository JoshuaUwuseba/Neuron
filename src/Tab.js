import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    position: fixed;
    width: 26rem;
    height: 6rem;
    left: 3.5rem;
    /*Top is a variable of props so done in the component*/
    background: #FCBF49;
    border-radius: 2.5rem;
`
const Div2 = styled.div`
    position: fixed;
    width: 26rem;
    height: 6rem;
    left: 3.5rem;
    /*Top is a variable of props so done in the component*/
    background: none;
    border-radius: 2.5rem;
`

const Img = styled.img` 
        position: fixed;
        width: 3rem;
        height: 3rem;
        left: 5.5rem;
        /*Top is a variable of props so done in the component*/
    `
const H1 = styled.h1`
        position: fixed;
        width: 13rem;
        height: 2.5rem;
        left: 10rem;
        /*Top is a variable of props so done in the component*/
        font-family: Roboto;
        font-style: normal;
        font-weight: 400;
        font-size: 2rem;
        line-height: 2.5rem;
        color: #FFFFFF;
        cursor: default;
    `

function Tab(props) {
    // The difference in the returned objects is the second is Div2 and the first just Div
    // This is a styling issue since the tab should not have a background if not clicked
    
    return props.name == props.clickedTabValue ? (
        <Div style={{top: `${String(props.top)}rem`}} onClick={props.onClickHandler} data-value={props.name}>
            <Img style={{top: `${String(props.top + 1.5)}rem`}} src={props.logo}/>
            <H1 style={{top: `${String(props.top + 0.5)}rem`}}>{props.name}</H1> 
        </Div>
    ) : (
        <Div2 style={{top: `${String(props.top)}rem`}} onClick={props.onClickHandler} data-value={props.name}>
            <Img style={{top: `${String(props.top + 1.5)}rem`}} src={props.logo}/>
            <H1 style={{top: `${String(props.top + 0.5)}rem`}}>{props.name}</H1> 
        </Div2>
    );
}

export default Tab;