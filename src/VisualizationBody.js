import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import LineChart from './LineChart';

const Div = styled.div`
    position: absolute;
    width: 689.33px;
    height: 151.33px;
    left: 426px;
    top: 312.67px;
`
const Div2 = styled.div`

`
const P1 = styled.p`
    position: fixed;
    width: 689.33px;
    height: 120px;
    left: 426px;
    top: 32rem;

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
    left: 500px;
    top: 42rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: 100;
    font-size: 20px;
    line-height: 28px;
    text-align: center;

    color: #C4C4C4;
`
const PositionedLineChart = styled(LineChart)`
    position: absolute;
    left: 0rem;
    top: 0rem;
`

function VisualizationBody({className, visualizationData}) {
    const [chartData, setChartData] = useState({})

    // const chartData = useRef({})

    useEffect(() => {
        setChartData({
            labels: ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh"],
            datasets: [
                {
                    label: visualizationData.dataPoint,
                    data: visualizationData.data,
                    backgroundColor: "#DD1C1A",
                    borderColor: "#DD1C1A",
                }
            ]
        })
    }, [visualizationData])

    return visualizationData.data == undefined || visualizationData.data.length == 0 ? (
        <Div className={className}>
            <P1>{"You have not selected any data point"}</P1>
            <P2>{"Select a data point above"}</P2>
        </Div>
    ) : (
        <div className={className}>
            <PositionedLineChart chartData={chartData}/>
        </div>
    )
}

export default VisualizationBody;