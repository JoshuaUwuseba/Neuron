import React, { useContext, useState } from 'react';
import { FuncChangeComponentToRenderContext } from "./Studio"
import styled from 'styled-components';
import GoButton from './GoButton';
import { useForm } from "react-hook-form"
import { DataListContext } from './Main';
import moment from 'moment';

const Label = styled.label`
    position: absolute;
    width: 40rem;
    height: 33.36px;
    left: 0rem;
    top: ${props => {
        switch(props.number){
            case 1:
                return "0rem;"
            case 2:
                return "12rem;"
            case 3:
                return "22rem;"
            case 4:
                return "32rem;"
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
                return "6.5rem;"
            case 3:
                return "20rem;"
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
        }
    }}
    top: ${props => {
        switch(props.number){
            case 1:
                return "4rem;"
            case 2:
                return "26rem;"
            case 3:
                return "36rem;"
        }
    }}

    font-size: 2rem;
    text-align: ${props => {
        switch(props.number){
            case 1:
                return "left;"
            case 2:
                return "center;"
            case 3:
                return "center;"
        }
    }}
    text-indent: ${props => {
        switch(props.number){
            case 1:
                return "2rem;"
            case 2:
                return ""
            case 3:
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
    width: ${props => {
        switch(props.number){
            case 1:
                return "18rem;"
            case 2:
                return "18rem;"
            case 3:
                return "7rem;"
            case 4:
                return "18rem;"
        }
    }}
    height: 37.36px;
    left: ${props => {
        switch(props.number){
            case 1:
                return "0rem;"
            case 2:
                return "0rem;"
            case 3:
                return "20rem;"
            case 4:
                return "29rem;"
        }
    }}
    top: ${props => {
        switch(props.number){
            case 1:
                return "16rem;"
            case 2:
                return "36rem;"
            case 3:
                return "36rem;"
            case 4:
                return "36rem;"
        }
    }}

    text-indent: 1rem;

    background: #FFFFFF;
    border: 2.00156px solid #DD1C1A;
    box-sizing: border-box;
    border-radius: 16.0125px;
`
const PositionedGoButton = styled(GoButton)`
    position: absolute;
    left: 60rem;
    top: ${props => {
        switch(props.number){
            case 1:
                return "28rem;"
            case 2:
                return "36rem;"
        }
    }}
`

function DerivedDataStudioForm({className, dataList, functionList}) {
    const setComponentRendered = useContext(FuncChangeComponentToRenderContext)
    const setDataList = useContext(DataListContext)
    const {register, handleSubmit} = useForm();
    const [selectedType, setSelectedType] = useState("Constant")

    const arrayOfData = dataList.map((element) => element["name"]) //Get every element of the dataList

    const submit = (data) => {
        console.log(data)
        //setComponentRendered
        setComponentRendered("Initial Studio")
        // update dataList, the backend POST is done in Main.js rather than here. The other way is to derive the updated data
        // send the POST request and upon response set a data watcher, that data watcher will be used in Main.js to request
        // the data just sent. The disadvantage here is it makes for two interactions with the backend + the backend will be 
        // affected by different components
        let updatedDataList = {
            name: data["Name of derived data"],
            type: data["Type of derived data"],
            number_of_points: data["Number of data points"] == undefined ? "nil" : data["Number of data points"],
            formula: data["Number of data points"] == undefined ? data["Value"] : `${data["First data"]}${data["First function"]}${data["Second data"]}`,
            author: "Joshua Uwuseba",
            date_created: moment().format("MMMM DD YYYY")
        }
        setDataList(prevData => Object.assign([], prevData, {[prevData.length]: updatedDataList}))
    }

    const onTypeSelectChange = (e) => {
        console.log(e)
        console.log(e.target.value)
        let selectedType = e.target.value
        setSelectedType(selectedType)
    }

    return selectedType == "Constant" ? (
        <div className={className}>
            <form onSubmit={handleSubmit(submit)}>
                <Label number={1}>{"Name"}</Label>
                <Input number={1} {...register("Name of derived data")}/>
                <Label number={2}>{"Type"}</Label>
                <Select number={1} {...register("Type of derived data")} onChange={onTypeSelectChange}>
                    <option>{"Constant"}</option>
                    <option>{"Derived Data"}</option>
                </Select>
                <Label number={3} style={{top: "24rem"}}>{"Enter Value"}</Label>
                <Input number={2} style={{width: "18rem", top: "28rem"}} {...register("Value")}/>
                <PositionedGoButton number={1}/>
            </form>
        </div>
    ) : (
        <div className={className}>
            <form onSubmit={handleSubmit(submit)}>
                <Label number={1}>{"Name"}</Label>
                <Input number={1} {...register("Name of derived data")}/>
                <Label number={2}>{"Type"}</Label>
                <Select number={1} {...register("Type of derived data")} onChange={onTypeSelectChange}> 
                    <option>{"Constant"}</option>
                    <option>{"Derived Data"}</option>
                </Select>
                <Label number={3}>{"Number of data points"}</Label>
                <Input number={2} {...register("Number of data points")}/>
                <Label number={4}>{"Enter formula"}</Label>
                <Select number={2} {...register("First data")}>
                    {arrayOfData.map((element, index) => (
                        <option key={index}>{element}</option>
                    ))}
                </Select>
                <Select number={3} {...register("First function")}>
                    {functionList.map((element, index) => (
                        <option key={index}>{element}</option>
                    ))}
                </Select>
                <Select number={4} {...register("Second data")}>
                    {arrayOfData.map((element, index) => (
                        <option key={index}>{element}</option>
                    ))}
                </Select>
                <PositionedGoButton number={2}/>
            </form>
        </div>
    )
}

export default DerivedDataStudioForm;