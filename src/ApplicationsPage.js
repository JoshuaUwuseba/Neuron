import Search from "./Search"
import ButtonManipulator from "./ButtonManipulator"
import Time from "./Time"
import NewAppButton from "./NewAppButton"
import ApplicationsBody from "./ApplicationsBody"
import Footer from "./Footer"
import { useState } from "react"
import styled from "styled-components"
import { searchFunction, filterFunction, sortFunction } from "./ManipulationFunctions"

// This component receives an essential application list from Applications component based on the segmented control

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

export default function ApplicationsPage(props) {
    const [dataToBeRendered, setDataToBeRendered] = useState(props.data)

    return (
        <div>
            <Search data={dataToBeRendered} dataAction={setDataToBeRendered} searchManipulator={searchFunction}/>
            <StyledButtonManipulator1 type="Filter" icon={process.env.PUBLIC_URL + "/assets/filter.svg"} iconStyle={Img1} textStyle={text1} data={dataToBeRendered} dataAction={setDataToBeRendered} dataManipulator={filterFunction}/>
            <StyledButtonManipulator2 type="Sort" icon={process.env.PUBLIC_URL + "/assets/sort.svg"} iconStyle={Img2} textStyle={text2} data={dataToBeRendered} dataAction={setDataToBeRendered} dataManipulator={sortFunction}/>
            <Time/>
            <NewAppButton/>
            <ApplicationsBody data={props.data} clickedSegValue={props.clickedSegValue}/>
            <Footer data={props.data}/>
        </div>
    )

}