import Form from "./Form"
import styled from "styled-components"

const Img = styled.img`
    position: fixed;
    left: 75rem;
    top: 16rem;
    width: 69rem;
    height: 52rem;
    transform: matrix(-1, 0, 0, 1, 0, 0);
`
const H1 = styled.h1`
    position: fixed;
    left: 13rem;
    top: 2rem;
    width: 88rem;
    height: 32rem;
    font-size: 12rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    line-height: 14rem;
    color: #DD1C1A;
`
const Span = styled.span`
    width: 88rem;
    height: 32rem;
    font-size: 12rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    line-height: 14rem;
    color: transparent;
    -webkit-text-stroke: 2px #DD1C1A;
`

const H2 = styled.h2`
    position: fixed;
    left: 80rem;
    top: 70rem;
    width: 63rem;
    height: 3rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 2rem;
    line-height: 2rem;
    color: #000000;
`
const Span2 = styled.span`
    width: 63rem;
    height: 3rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    width: 2rem;
    height: 2rem;
    color: #DD1C1A;
`

export default function Login() {
    return(
        <div>
            <Img src={process.env.PUBLIC_URL + "/assets/computer-work-4.png"}/>
            <H1>Enter the future of <Span>work</Span></H1>
            <div style={{position: "fixed", left: "13rem", top: "40rem"}}>
                <Form/> 
            </div>
            <H2>By signing up you agree to the <Span2>terms of services</Span2> and the <Span2>privacy policy</Span2></H2>
        </div>
    )
}