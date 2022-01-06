import React, { useRef } from 'react';
import styled from 'styled-components';

function generateFooterData(dataToBeRendered){
    // Check the data, which is an array of applications and use length to get total count
    // then generate subarrays by filtering the array using type and get the length of the subarrays
    // to get the footer data

    let notificationsArray = dataToBeRendered.filter((element) => element.type == "notification")
    let reportsArray = dataToBeRendered.filter((element) => element.type == "report")
    let answersArray = dataToBeRendered.filter((element) => element.type == "answer")

    return {
        count: dataToBeRendered.length,
        notifications: notificationsArray.length,
        reports: reportsArray.length,
        questions: answersArray.length
    }

}

const Div = styled.div`
    display: flex;
    flex-direction: row;
    position: fixed;
    width: 800px;
    height: 36px;
    justify-content: space-evenly;
    align-items: center;
    left: 370px;
    top: 600px;

    background: white;
`
const P = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 28px;

    color: #DD1C1A;
`
// The function will take the dataToBeRendered and populate this internal component data
// which will then be used by the component. But then should the component save this in state.
// This will re-render the Footer twice. Rather one can use a useRef
let footerData = {
    count: 0,
    notifications: 0,
    reports: 0,
    questions: 0
}

let footerPoints = ["Count", "Notifications", "Reports", "Questions"]

function Footer(props) {
    const footerDataRef = useRef(footerData)
    footerDataRef.current = generateFooterData(props.data)
    

    return (
        <Div>
            {footerPoints.map((element, index) => (
                <P key={element}>{`${element}: ${footerDataRef.current[Object.keys(footerDataRef.current)[index]]}`}</P>
            ))}
        </Div>
    );
}

export default Footer;