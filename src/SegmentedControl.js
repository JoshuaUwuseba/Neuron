import styled from "styled-components"

const Span1 = styled.span`
    position: fixed;
    width: 133.33px;
    height: 42px;
    left: 640px;
    top: 59.33px;

    border: 2px solid #DD1C1A;
    box-sizing: border-box;
    border-radius: 20px 0px 0px 20px;

    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 34px;
    cursor: default;
`
const Span2 = styled.span`
    position: fixed;
    width: 133.33px;
    height: 42px;
    left: 770.67px;
    top: 59.33px;

    border: 2px solid #DD1C1A;
    box-sizing: border-box;
    border-radius: 0px 20px 20px 0px;
    
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 34px;
    cursor: default;
`

export default function SegmentedControl(props) {
    //Will most likely be replaced with an existing component from https://bit.dev


    return props.clickedSegValue == "My applications" ? (
        <div>
            <Span1 style={{background: "#DD1C1A", color: "#FFFFFF"}} onClick={props.onClickHandlerSegControl} data-value="My applications">{"My applications"}</Span1>
            <Span2 style={{background: "#FFFFFF", color: "#DD1C1A"}} onClick={props.onClickHandlerSegControl} data-value="All applications">{"All applications"}</Span2>
        </div>
    ) : (
        <div>
            <Span1 style={{background: "#FFFFFF", color: "#DD1C1A"}} onClick={props.onClickHandlerSegControl} data-value="My applications">{"My applications"}</Span1>
            <Span2 style={{background: "#DD1C1A", color: "#FFFFFF"}} onClick={props.onClickHandlerSegControl} data-value="All applications">{"All applications"}</Span2>
        </div>
    )
}