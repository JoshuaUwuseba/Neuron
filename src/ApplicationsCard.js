import React from 'react';
import Switch from "@material-ui/core/Switch"
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';


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

const CustomSwitch = withStyles({
    switchBase: {
      color: "white",
      '&$checked': {
        color: "#DD1C1A",
      },
      '&$checked + $track': {
        backgroundColor: "#000000",
      },
    },
    checked: {},
    track: {},
  })(Switch);


const Div = styled.div`
    position: relative;
    width: 196px;
    height: 196px;
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
    border-radius: 30px;
    margin: 20px;
`

const P1 = styled.p`
    position: absolute;
    width: 138px;
    height: 56px;
    left: 10px;
    top: 34px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    margin: 0;
`

const P2 = styled.p`
    position: absolute;
    width: 161px;
    height: 29px;
    left: 10px;
    top: 90px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
`

const P3 = styled.p`
    position: absolute;
    width: 65px;
    height: 11px;
    left: 36px;
    top: 152px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 8px;
    line-height: 9px;

    color: #FFFFFF;
`
const P4 = styled.p`
    position: absolute;
    width: 29px;
    height: 6px;
    left: 36px;
    top: 166px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 4px;
    line-height: 5px;

    color: #FFFFFF;
`
const StyledCustomSwitch = styled(CustomSwitch)`
    position: absolute;
    width: 33px;
    height: 19.56px;
    left: 128px;
    top: 148px;
`
const Img1 = styled.img`
    position: absolute;
    width: 23px;
    height: 23px;
    left: 149px;
    top: 34px;
`
const Img2 = styled.img`
    position: absolute;
    width: 24px;
    height: 24px;
    left: 10px;
    top: 156px;
    background: #FFFFFF;
    border-radius: 12px;
    border: none;
`

function ApplicationsCard(props) {
    return (
        <Div type={props.type} >
            <P1>{props.name}</P1>
            {/* The img src is to be replaced with `process.env.PUBLIC_URl${getApplicationImageSrc(props.type)}` */}
            <Img1 src={getApplicationImageSrc(props.type)}></Img1>
            <P2>{props.desc}</P2>
            <Img2 src={props.authorImage}></Img2>
            <P3>{props.author}</P3>
            <P4>{props.dateCreated}</P4>
            <StyledCustomSwitch checked={props.subscribed} onChange={props.onChange} inputProps={{["data-value"]: props.tag}}/>
        </Div>
    );
}

export default ApplicationsCard;