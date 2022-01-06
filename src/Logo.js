import styled from "styled-components"

const H1 = styled.h1`
    position: fixed;
    width: 14rem;
    height: 5rem;
    left: 13rem;
    top: 4rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 4rem;
    letter-spacing: 0.02rem;
    color: #FFFFFF;
    margin: 0;
`

const Img = styled.img`
    position: fixed;
    width: 6rem;
    height: 6rem;
    left: 6rem;
    top: 3rem;
    color: #FFFFFF;
`

export default function Logo() {
    return(
       <div>
           <Img src={process.env.PUBLIC_URL + "/assets/logo.svg"}/>
           <H1>Bellum</H1>
       </div>
    )
}