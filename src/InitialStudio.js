import React from 'react';
import dataListData from './TestDataList';
import Time from './Time';
import styled from 'styled-components';
import StudioCardList from "./StudioCardList";
import GoButton from './GoButton';
import NonFormButton from './NonFormButton';

const H1 = styled.h1`
    position: absolute;
    width: 619.15px;
    height: 128.1px;
    left: 20rem;
    top: 6rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 48.0375px;
    line-height: 56px;
    text-align: center;

    color: #000000;
`
const PositionedStudioCardList = styled(StudioCardList)`
    position: absolute;
    left: 37rem;
    top: 28rem;
`
const PositionedTime = styled(Time)`

`


function InitialStudio(props) {

    return (
        <div className={props.className}>
            <H1>{"What application do you want to build?"}</H1>
            <PositionedStudioCardList/>
            <PositionedTime/>
        </div>
    );
}

export default InitialStudio;