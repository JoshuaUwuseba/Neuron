import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    width: 36rem;
    height: 10rem;

    background: rgba(255, 255, 255, 0.5)

    filter: drop-shadow(0px 2.66458px 2.66458px rgba(0, 0, 0, 0.25));
    backdrop-filter: blur(13.3229px);
    border-radius: 40px;

    border: 0.5px solid #003049;

`
const H1 = styled.h1`
    position: absolute;
    width: 199.84px;
    height: 25.31px;
    left: 6rem;
    top: 0.5rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 23.9812px;
    line-height: 28px;

    color: #000000;
`
const P = styled.p`
    position: absolute;
    width: 213.17px;
    height: 13.99px;
    left: 6rem;
    top: 4.5rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 11.9906px;
    line-height: 14px;
    /* identical to box height */

    color: #DD1C1A;
`
const Img1 = styled.img`
    position: absolute;
    width: 29.31px;
    height: 29.31px;
    left: 1.5rem;
    top: 2.5rem;
`
const Img2 = styled.img`
    position: absolute;
    width: 2rem;
    height: 2rem;
    left: 32rem;
    top: 2rem;
`

function NotificationBanner({className, name, desc, type, funcShowNotification}) {
    const funcCloseNotification = (e) => {
        funcShowNotification(false)
    }

    return (
        <Div className={className}>
            <H1>{name}</H1>
            <P>{desc}</P>
            <Img1 src={"/assets/notification_black.svg"}/>
            <Img2 onClick={funcCloseNotification} src={"/assets/multiplication_sign.svg"}/>
        </Div>
    );
}

export default NotificationBanner;