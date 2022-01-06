import styled from "styled-components"

const Div = styled.div`
    position: absolute;
    width: 26rem;
    height: 7rem;
    left: 3rem;
    top: 10rem;
    background: rgba(255, 255, 255, 0.44);
    border-radius: 2.5rem;
`

const Img1 = styled.img`
    position: fixed;
    width: 5rem;
    height: 4.5rem;
    left: 5rem;
    top: 11rem;
`

const H1 = styled.h1`
    position: fixed;
    width: 12.5rem;
    height: 1.5rem;
    left: 10rem;
    top: 11.5rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.5rem;
    letter-spacing: 0.02em;

    color: #FFFFFF;
`

const H2 = styled.h2`
    position: fixed;
    width: 7rem;
    height: 1rem;
    left: 10rem;
    top: 14rem;
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1rem;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    margin: 0;
`

const Img2 = styled.img`
    position: fixed;
    width: 2rem;
    height: 1rem;
    left: 25rem;
    top: 13rem;
`

export default function Settings() {
    return(
        <Div>
            <Img1 src={process.env.PUBLIC_URL + "/assets/flash.svg"}/>
            <div>
                <H1>Joshua Uwuseba</H1>
                <H2>ABC Company</H2>
            </div>
            <Img2 src={process.env.PUBLIC_URL + "/assets/down_arrow.svg"}/>
        </Div>
    )
}