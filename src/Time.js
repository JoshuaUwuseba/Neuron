import React, {useState, useEffect} from 'react';
import moment from 'moment'
import styled from "styled-components"

const Div = styled.div`
    position: fixed;
    width: 131.33px;
    height: 56.67px;
    left: 1090px;
    top: 62.67px;
`

const P1 = styled.p`
    position: fixed;
    width: 131.33px;
    height: 34.67px;
    left: 1090px;
    top: 40px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 32px;
    line-height: 37px;
    color: #003049;
`

const P2 = styled.p`
    position: fixed;
    width: 150px;
    height: 22px;
    left: 1095px;
    top: 100px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;

    color: #003049;
`

const Time = ({darkMode, className}) => {

    const [dateTime, setDateTime] = useState(moment())

    useEffect(() => {
        setTimeout(() => {
            setDateTime(moment())
        }, 1000);
    }, [dateTime])

    return (
        <Div className={className}>
            <P1>{dateTime.format('HH:mm:ss')}</P1>
            <P2>{`${dateTime.format('dddd')} ${dateTime.format('LL')}`}</P2>
        </Div>
    );


}
export default Time;
