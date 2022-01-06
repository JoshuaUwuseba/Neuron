import React from 'react';
import { useContext } from 'react';
import { FuncChangeComponentToRenderContext } from "./Studio"
import GoButton from './GoButton';
import { useForm } from "react-hook-form"
import styled from 'styled-components';

const Label = styled.label`
    position: absolute;
    width: 18rem;
    height: 33.36px;
    left: 0rem;
    top: ${props => {
        switch(props.number){
            case 1:
                return "0rem;"
            case 2:
                return "10rem;"
            case 3:
                return "20rem;"
            case 4:
                return "30rem;"
        }
    }}

    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 24.0188px;
    line-height: 28px;

    color: #000000;

`

const Input = styled.input`
    position: absolute;
    width: ${props => {
        switch(props.number){
            case 1:
                return "50rem;"
            case 2:
                return "50rem;"
            case 3:
                return "6.5rem;"
            case 4:
                return "6.5rem;"
        }
    }}
    height: 5rem;
    left: ${props => {
        switch(props.number){
            case 1:
                return "0rem;"
            case 2:
                return "0rem;"
            case 3:
                return "0rem;"
            case 4:
                return "10.5rem;"
        }
    }}
    top: ${props => {
        switch(props.number){
            case 1:
                return "4rem;"
            case 2:
                return "14rem;"
            case 3:
                return "24rem;"
            case 4:
                return "24rem;"
        }
    }}

    font-size: 2rem;
    text-align: ${props => {
        switch(props.number){
            case 1:
                return "left;"
            case 2:
                return "left;"
            case 3:
                return "center;"
            case 4:
                return "center;"
        }
    }}
    text-indent: ${props => {
        switch(props.number){
            case 1:
                return "2rem;"
            case 2:
                return "2rem;"
            case 3:
                return ""
            case 4:
                return ""
        }
    }}

    background: #FFFFFF;
    border: 2.00156px solid #DD1C1A;
    box-sizing: border-box;
    border-radius: 16.0125px;
`
const Select = styled.select`
    position: absolute;
    width: 186.15px;
    height: 37.36px;
    left: 0rem;
    top: 35rem;

    text-indent: 1rem;

    background: #FFFFFF;
    border: 2.00156px solid #DD1C1A;
    box-sizing: border-box;
    border-radius: 16.0125px;
`
const Img = styled.img`
    position: absolute;
    width: 22.02px;
    height: 22.02px;
    left: 7rem;
    top: 25rem;
`

const PositionedGoButton = styled(GoButton)`
    position: absolute;
    left: 60rem;
    top: 35rem;
`


function ReportStudioForm({funcSetReportDetails, className}) {
    const setComponentRendered = useContext(FuncChangeComponentToRenderContext)
    const {register, handleSubmit} = useForm();

    const submit = (data) => {
        //setReportDetail using data
        console.log(data)
        funcSetReportDetails(data)
        //setComponentRendered
        setComponentRendered("Report Table Studio")
    }

    return (
        <div className={className}>
            <form onSubmit={handleSubmit(submit)}>
                <Label number={1}>{"Name"}</Label>
                <Input number={1} {...register("nameOfReport")}/>
                <Label number={2}>{"Description"}</Label>
                <Input number={2} {...register("descOfReport")}/>
                <Label number={3}>{"Size of Table"}</Label>
                <Input number={3} {...register("rowSize")}/>
                <Img src={`${process.env.PUBLIC_URL}/assets/multiplication_sign.svg`}/>
                <Input number={4} {...register("columnSize")}/>
                <Label number={4}>{"Frequency"}</Label>
                <Select {...register("frequency")}>
                    <option>{"Daily"}</option>
                    <option>{"Weekly"}</option>
                    <option>{"Monthly"}</option>
                </Select>
                <PositionedGoButton/>
            </form>
        </div>
    );
}

export default ReportStudioForm;