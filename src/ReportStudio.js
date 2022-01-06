import React, { useContext } from 'react';
import Time from './Time';
import ReportStudioForm from './ReportStudioForm';
import styled from 'styled-components';
import NonFormButton from './NonFormButton';
import { FuncChangeComponentToRenderContext } from './Studio';

const H1 = styled.h1`
    position: absolute;
    width: 619.15px;
    height: 113.42px;
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
const PositionedReportStudioForm = styled(ReportStudioForm)`
    position: absolute;
    left: 32rem;
    top: 28rem;

    background: #C4C4C4;
`
const PositionedTime = styled(Time)`

`
const StyledNonFormButton = styled(NonFormButton)`

`

function ReportStudio({funcSetReportDetails, className}) {
    const setComponentRendered = useContext(FuncChangeComponentToRenderContext)

    const onClick = (e) => {
        setComponentRendered("Initial Studio")
    }

    return (
        <div className={className}>
            <H1>{"Enter the details of your report below"}</H1>
            <PositionedReportStudioForm funcSetReportDetails={funcSetReportDetails}/>
            <PositionedTime/>
            <StyledNonFormButton onClick={onClick}/>
        </div>
    );
}

export default ReportStudio;