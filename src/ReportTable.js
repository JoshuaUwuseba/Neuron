import React, { useContext, useRef } from 'react';
import GoButton from './GoButton';
import styled from 'styled-components';
import moment from 'moment';
import {ApplicationListContext} from "./Main"
import { FuncChangeComponentToRenderContext } from './Studio';
import NonFormButton from './NonFormButton';

const Table = styled.table`
    margin: 1rem;
`
const TableBodyCell = styled.td`
    border: 1px solid black;
`
const TableHeaderCell = styled.th`
    border: 1px solid black;
`
const Input = styled.input`
    font-weight: 700;
`

const PositionedSubmitButton = styled(NonFormButton)`
    transform: rotate(180deg);
`
const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
function generateLetterFromNumber(number){
    let baseCharCode = 64;
    return String.fromCharCode(baseCharCode + Number(number)) //This only works for A-Z, that is 26 columns and will work for AA, AB 
}

function ReportTable({className, dataList, reportDetails}) {
    //Get every element of the dataList, this will be the dropdown for each table cell apart from the headers
    const arrayOfData = dataList.map((element) => element["name"]) 
    const {nameOfReport, descOfReport, rowSize, columnSize, frequency} = reportDetails

    const setAllApplicationList = useContext(ApplicationListContext);
    const setComponentRendered = useContext(FuncChangeComponentToRenderContext)

    let tableObject = useRef({})

    const onClick = (e) => {
        console.log(tableObject.current)
        //Send the object to the backend is not done here but done by setting applicationList which then triggers
        // a post of the new application data to the back end.

        //Create new application
        let updatedApplicationList = {
            name: nameOfReport,
            desc: descOfReport, // A description input can be added in ReportStudioForm
            author: "Joshua Uwuseba",
            authorImage: "/assets/Joshua.png",
            dateCreated: moment().format("MMMM D YYYY"),
            type: "report",
            subscribed: true,
            typeDetails: {
                name: nameOfReport,
                frequency: frequency,
                rowSize: rowSize,
                columnSize: columnSize,
                type: "data",
                numberOfTimes: 4
            }
        }
        //Update applicationList
        setAllApplicationList(prevData => Object.assign([], prevData, {[prevData.length]: updatedApplicationList}))
        // Move back to initial studio
        setComponentRendered("Initial Studio")
    }

    //Used to update the table object from Input elements for the column headers
    const onBlur = (e) => {
        let columnIndex = e.currentTarget.dataset.column
        let rowIndex = e.currentTarget.dataset.row
        tableObject.current = Object.assign({}, tableObject.current, {[generateLetterFromNumber(columnIndex) + rowIndex.toString()]: e.target.value})
    }

    //Used to update the table object from Select elements for the column body
    const onChange = (e) => {
        let columnIndex = e.currentTarget.dataset.column
        let rowIndex = e.currentTarget.dataset.row
        tableObject.current = Object.assign({}, tableObject.current, {[generateLetterFromNumber(columnIndex) + rowIndex.toString()]: e.target.value})
    }

    return (
        <Div className={className}>
            <Table>
                <thead>
                    <tr>
                        {[...Array(columnSize).keys().toString()].slice(0, columnSize).map((element, index) => {
                            console.log(element)
                            return (
                            <TableHeaderCell key={index}>
                                <Input type="text" data-row={1} data-column={index+1} onBlur={onBlur}/>
                            </TableHeaderCell>
                        )})}
                    </tr>
                </thead>
                <tbody>
                    {
                        [...Array(rowSize-1).keys().toString()].slice(1, rowSize).map((element, rowIndex) => (
                            <tr key={rowIndex}>
                                {[...Array(columnSize).keys().toString()].slice(0, columnSize).map((element, columnIndex) => (
                                    <TableBodyCell key={columnIndex}>
                                        <select data-row={rowIndex + 2} data-column={columnIndex + 1} onChange={onChange}>
                                            {arrayOfData.map((element, index) => (
                                                <option key={index}>{element}</option>
                                            ))}
                                        </select>
                                    </TableBodyCell>
                                ))}
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <PositionedSubmitButton onClick={onClick} />
        </Div>
    );
}

export default ReportTable;