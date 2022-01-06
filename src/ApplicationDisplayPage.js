import React, { useState } from 'react';
import ButtonManipulator from './ButtonManipulator';
import Footer from './Footer';
import NewAppButton from './NewAppButton';
import Search from './Search';
import Time from './Time';
import styled from 'styled-components';
import { searchFunction, filterFunction, sortFunction } from "./ManipulationFunctions"
import ApplicationsDisplayTable from './ApplicationsDisplayTable';

const StyledButtonManipulator1 = styled(ButtonManipulator)`
    position: fixed;
    width: 64.67px;
    height: 26.67px;
    left: 796.67px;
    top: 135.33px;
`
const StyledButtonManipulator2 = styled(ButtonManipulator)`
    position: fixed;
    width: 58px;
    height: 26.67px;
    left: 874.67px;
    top: 135.33px;
`

const Img1 = styled.img`
    position: fixed;
    width: 22px;
    height: 22px;
    left: 796.67px;
    top: 135.33px;
`
const Img2 = styled.img`
    position: fixed;
    width: 22px;
    height: 22px;
    left: 874.67px;
    top: 135.33px;
`

const text1 = styled.h1`
    position: fixed;
    width: 36.67px;
    height: 24.67px;
    left: 822px;
    top: 127px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: #DD1C1A;
`
const text2 = styled.h1`
    position: fixed;
    width: 36.67px;
    height: 24.67px;
    left: 890px;
    top: 127px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: #DD1C1A;
`
const H1 = styled.h1`
    position: absolute;
    width: 619.15px;
    height: 113.42px;
    left: 24rem;
    top: 3rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 48.0375px;
    line-height: 56px;
    text-align: center;

    color: #000000;
`


function ApplicationDisplayPage(props) {
    const [dataToBeRendered, setDataToBeRendered] = useState(props.data)

    return (
        <div>
            <H1>{props.header}</H1>
            <Search data={dataToBeRendered} dataAction={setDataToBeRendered} searchManipulator={searchFunction}/>
            <StyledButtonManipulator1 type="Filter" icon={process.env.PUBLIC_URL + "/assets/filter.svg"} iconStyle={Img1} textStyle={text1} data={dataToBeRendered} dataAction={setDataToBeRendered} dataManipulator={filterFunction}/>
            <StyledButtonManipulator2 type="Sort" icon={process.env.PUBLIC_URL + "/assets/sort.svg"} iconStyle={Img2} textStyle={text2} data={dataToBeRendered} dataAction={setDataToBeRendered} dataManipulator={sortFunction}/>
            <Time/>
            <NewAppButton/>
            {props.children}
            <Footer data={props.data}/>
        </div>
    );
}

export default ApplicationDisplayPage;