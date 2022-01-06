import React, { useContext } from 'react';
import { FuncChangeComponentToRenderContext } from "./Studio"
import DerivedDataStudioForm from './DerivedDataStudioForm';
import Time from './Time';
import styled from 'styled-components';
import NonFormButton from './NonFormButton';

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
const PositionedDerivedDataStudioForm = styled(DerivedDataStudioForm)`
    position: absolute;
    left: 32rem;
    top: 28rem;
`
const StyledNonFormButton = styled(NonFormButton)`

`

function DerivedDataStudio({className, dataList, functionList}) {
    const setComponentRendered = useContext(FuncChangeComponentToRenderContext);

    const onClick = (e) => {
        setComponentRendered("Initial Studio")
    }

    return (
        <div className={className}>
            <H1>{"Enter the details of your derived data below"}</H1>
            <PositionedDerivedDataStudioForm dataList={dataList} functionList={functionList}/>
            <Time/>
            <StyledNonFormButton onClick={onClick}/>
        </div>
    );
}

export default DerivedDataStudio;