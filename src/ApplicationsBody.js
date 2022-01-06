import React from 'react';
import styled from 'styled-components';
import ApplicationsCardList from './ApplicationsCardList';

const Div = styled.div`
    position: absolute;
    width: 689.33px;
    height: 151.33px;
    left: 426px;
    top: 312.67px;
`
const Div2 = styled.div`

`
const P1 = styled.p`
    position: fixed;
    width: 689.33px;
    height: 120px;
    left: 426px;
    top: 240px;

    font-family: Roboto;
    font-style: normal;
    font-weight: lighter;
    font-size: 40px;
    line-height: 56px;
    text-align: center;
    letter-spacing: 0.02em;

    color: #C4C4C4;
`
const P2 = styled.p`
    position: fixed;
    width: 387.33px;
    height: 34.67px;
    left: 576px;
    top: 380px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 100;
    font-size: 20px;
    line-height: 28px;
    text-align: center;

    color: #C4C4C4;
`

const StyledApplicationsCardList = styled(ApplicationsCardList)`
    position: absolute;
    width: 873px;
    //height: 488px; Not needed so the scroll bar does not appear   
    left: 72px;
    top: 173px;
`

function ApplicationsBody(props) {
    if(props.data.length == 0){
        if(props.clickedSegValue == "My applications"){
            return (
                <Div>
                    <P1>{"You currently do not have any applications"}</P1>
                    <P2>{"Go to All applications to choose one"}</P2>
                </Div>
            )
        }
        else{
            return (
                <Div>
                    <P1>{"There are currently no applications to choose from"}</P1>
                    <P2>{"Go to the Studio Tab to build one"}</P2>
                </Div>
            )
        }
    }
    else{
        return (

            <Div2>
                <StyledApplicationsCardList data={props.data}/> {/*props.data to be used*/}
            </Div2>
        )
    }
}

export default ApplicationsBody;