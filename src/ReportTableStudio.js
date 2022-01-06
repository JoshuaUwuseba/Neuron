import React, { useContext } from 'react';
import { FuncChangeComponentToRenderContext } from "./Studio"
import ReportTable from './ReportTable';
import Time from './Time';
import styled from 'styled-components';

const H1 = styled.h1`
    position: absolute;
    width: 619.15px;
    height: 128.1px;
    left: 20rem;
    top: 6rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 48.0375px;
    line-height: 56px;
    text-align: center;

    color: #000000;
`
const PositionedReportTable = styled(ReportTable)`
    position: absolute;
    top: 23rem;
    left: 8rem;
`
// const Div = styled.div`
//     position: absolute;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `

function ReportTableStudio({className, dataList, reportDetails}) {
    const setComponentRendered = useContext(FuncChangeComponentToRenderContext)

    return (
        <div className={className}>
                <H1>{"Create your report below"}</H1>
                <PositionedReportTable dataList={dataList} reportDetails={reportDetails}/>
                <Time/>
        </div>
    );
}

export default ReportTableStudio;