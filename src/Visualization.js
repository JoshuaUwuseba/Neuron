import React, { useState } from 'react';
import Time from './Time';
import VisualizationBody from './VisualizationBody';
import VisualizationForm from './VisualizationForm';
import styled from 'styled-components';

const H1 = styled.h1`
    position: absolute;
    width: 619.15px;
    height: 113.42px;
    left: 24rem;
    top: 3rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 48.0375px;
    line-height: 56px;
    text-align: center;

    color: #000000;
`
const PositionedVisualizationForm = styled(VisualizationForm)`
    position: absolute;
    left: 19rem;
    top: 16rem;
`
const PositionedVisualizationBody = styled(VisualizationBody)`
    position: absolute;
    left: 8rem;
    top: 25rem;
`

function Visualization({className, dataList}) {
    const [data, setVisualizationData] = useState({})

    return (
        <div className={className}>
            <H1>{"Select a data point"}</H1>
            <PositionedVisualizationForm dataList={dataList} funcChangeVisualizationData={setVisualizationData}/>
            <Time/>
            <PositionedVisualizationBody visualizationData={data}/>
        </div>
    );
}

export default Visualization;