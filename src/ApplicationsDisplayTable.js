import React from 'react';
import styled from 'styled-components';

function convertFirstLetterToUpperCase(value){
    let text = value.toString()

    if(text.includes("_")){
        text = text.replace(/_/g, " ")
        return (text.charAt(0).toUpperCase() + text.slice(1))
    }
    else{
        return (text.charAt(0).toUpperCase() + text.slice(1))
    }
}

function removeUnderscore(text){
    text = text.replace(/_/g, " ")
    return text
}

const TH = styled.th`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 15.9875px;
    line-height: 19px;

    color: #DD1C1A;

    border-bottom: 1px solid black;
    padding: 1rem;

`

const TD = styled.td`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 1.5rem;
    line-height: 19px;
    text-align: center;
    color: #000000;

    border-bottom: 1px solid black;
    padding: 1rem;
`

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`

const Div = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 689.33px;
    height: 151.33px;
    left: 24rem;
    top: 35rem;
`
const Div2 = styled.div`

`
const P1 = styled.p`
    position: absolute;
    padding: 2.5rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: lighter;
    font-size: 40px;
    line-height: 56px;
    text-align: center;
    letter-spacing: 0.02em;

    color: #C4C4C4;
`
const P2 = styled.p`
    position: fixed;
    width: 60rem;
    height: 34.67px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 100;
    font-size: 20px;
    line-height: 28px;
    text-align: center;

    color: #C4C4C4;
`

function ApplicationsDisplayTable({className, data, tableHeaders, numberOfColumns, type}) {
    return tableHeaders != null && data.length > 0 ? (
        <div className={className}>
            <Table>
                <thead>
                   {
                       type == "derived_data" ? (
                        <tr>
                            {
                                [...Array(numberOfColumns).keys().toString()].slice(0, numberOfColumns).map((element, index) => (
                                    <TH>{convertFirstLetterToUpperCase(tableHeaders[index])}</TH>
                                    ))
                            }
                        </tr>
                       ) : (
                        <tr>
                            {[...Array(numberOfColumns).keys().toString()].slice(0, numberOfColumns).map((element, index) => (
                                <TH>{convertFirstLetterToUpperCase(tableHeaders[index])}</TH>
                                ))}
                        </tr>
                       )
                   }
                </thead>
                <tbody>
                    {
                        type == "derived_data" ? (
                            data.map((dataItem, index) => (
                                <tr key={index}>
                                    {Object.keys(dataItem).map((element, index) => (
                                        <TD key={index}>{convertFirstLetterToUpperCase(dataItem[element])}</TD>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            data.map((dataItem, index) => (
                                <tr key={index}>
                                    {Object.keys(dataItem.typeDetails).map((element, index) => (
                                        <TD key={index}>{convertFirstLetterToUpperCase(dataItem.typeDetails[element])}</TD>
                                    ))}
                                </tr>
                            ))
                        )
                    }
                </tbody>
            </Table>
        </div>
    ) : (
        <Div>
            <P1>{`You currently do not have any ${removeUnderscore(type)}`}</P1>
            <P2>{`Create a new ${removeUnderscore(type)} with the button above`}</P2>
        </Div>
    )
}

export default ApplicationsDisplayTable;