import React, { createContext, useState } from 'react';
import styled from 'styled-components';
import InitialStudio from './InitialStudio';
import ReportStudio from './ReportStudio';
import DerivedDataStudio from './DerivedDataStudio';
import ReportTableStudio from './ReportTableStudio';

export const FuncChangeComponentToRenderContext = createContext()

const PositionedInitialStudio = styled(InitialStudio)`
    position: absolute;
    left: 0px;
    top: 0px;
`
const PositionedReportStudio = styled(ReportStudio)`
    position: absolute;
    left: 0px;
    top: 0px;
`
const PositionedDerivedDataStudio = styled(DerivedDataStudio)`
    position: absolute;
    left: 0px;
    top: 0px;
`
const PositionedReportTableStudio = styled(ReportTableStudio)`
    position: absolute;
    left: 0px;
    top: 0px;
`

function Studio(props) {
    const [componentRendered, setComponentRendered] = useState("Initial Studio")
    const [reportDetails, setReportDetails] = useState({})

    //This is a conditional render because Studio is a flexible component.
    switch(componentRendered){
        case "Initial Studio":
            return (
                <div className={props.className}>
                    <FuncChangeComponentToRenderContext.Provider value={setComponentRendered}>
                        <PositionedInitialStudio/>
                    </FuncChangeComponentToRenderContext.Provider>
                </div>
            )
        case "Report Studio":
            return (
                <div className={props.className}>
                    <FuncChangeComponentToRenderContext.Provider value={setComponentRendered}>
                        <PositionedReportStudio funcSetReportDetails={setReportDetails}/>
                    </FuncChangeComponentToRenderContext.Provider>
                </div>
            )
        case "Derived Data Studio":
            return (
                <div className={props.className}>
                    <FuncChangeComponentToRenderContext.Provider value={setComponentRendered}>
                        <PositionedDerivedDataStudio dataList={props.dataList} functionList={props.functionList}/>
                    </FuncChangeComponentToRenderContext.Provider>
                </div>
            )
        case "Report Table Studio":
            return (
                <div className={props.className}>
                    <FuncChangeComponentToRenderContext.Provider value={setComponentRendered}>
                        <PositionedReportTableStudio dataList={props.dataList} reportDetails={reportDetails}/>
                    </FuncChangeComponentToRenderContext.Provider>
                </div>
            )
    }
}

export default Studio;