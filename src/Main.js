import Applications from "./Applications";
import Studio from "./Studio";
import ApplicationDisplayPage from "./ApplicationDisplayPage";
import Reports from "./Reports";
import Visualization from "./Visualization";
import DerivedData from "./DerivedData";
import styled from "styled-components";
import { useLayoutEffect, useMemo, useState } from "react";
import { createContext, useRef } from "react";
import applicationListData from "./TestApplicationList";
import dataListData from "./TestDataList";
import functionListData from "./TestFunctionList";
import ApplicationsDisplayTable from "./ApplicationsDisplayTable";

export const ApplicationListContext = createContext([]);
export const DataListContext = createContext([]);

function generateMyApplicationList(data){
    let filteredData = data.filter((element, index) => element.subscribed === true);
    // console.log(data)
    // console.log(filteredData)
    return filteredData
}

const H1 = styled.h1`
    position: absolute;
    width: 619.15px;
    height: 113.42px;
    left: 24rem;
    top: 24rem;

    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 48.0375px;
    line-height: 56px;
    text-align: center;

    color: #000000;
`
const PositionedStudio = styled(Studio)`
    position: absolute;
    left: 0px;
    top: 0px;
`
const PositionedApplications = styled(Applications)`
    position: absolute;
    left: 0px;
    top: 0px;
`
const PositionedVisualization = styled(Visualization)`
    position: absolute;
    left: 0px;
    top: 0px;
`
const PositionedApplicationsDisplayTable = styled(ApplicationsDisplayTable)`
    position: absolute;
    width: 110rem;
    top: 24rem;
    left: 10rem;
`

export default function Main(props) {
    const [allApplicationList, setAllApplicationList] = useState(applicationListData)
    const [applicationListChangeStatus, setApplicationListChangeStatus] = useState([]) //An array containing the date-time when the application list was updated and the component that update it

    const [dataList, setDataList] = useState(dataListData)
    const [dataListChangeStatus, setDataListChangeStatus] = useState([])

    const [functionList, setFunctionList] = useState(functionListData)

    // The next 3 constants are derived from the application list
    const myApplicationsList = useMemo(() => generateMyApplicationList(allApplicationList), [allApplicationList]) 
    // const allApplicationsList = useRef(applicationList) --> No need

    const myNotificationApplications = useMemo(() => allApplicationList.filter((element) => {
        return element.type == "notification" && element.subscribed == true //Getting the subscribed notifications
    }),[allApplicationList])

    const myReportApplications = useMemo(() => allApplicationList.filter((element) => {
        return element.type == "report" && element.subscribed == true
    }),[allApplicationList])

    useLayoutEffect(() => {
        //request application list data and set application list
    }, [applicationListChangeStatus]) 

    useLayoutEffect(() => {
        //POST updated application list to backend
    }, [allApplicationList])

    useLayoutEffect(() => {
        //request data list data and set data list
    }, [dataListChangeStatus])

    useLayoutEffect(() => {
        //POST updated data list to backend
    }, [dataList])

    useLayoutEffect(() => {
        //request function list data and set function list
    }, [])
    
    switch (props.clickedTabValue) {
        case "Applications":
            return (
                // The Provider only provides the function to change the data since that
                // functionality is needed just once
                <ApplicationListContext.Provider value={setAllApplicationList}> 
                    <PositionedApplications allApplicationsList={allApplicationList} myApplicationsList={myApplicationsList}/>
                </ApplicationListContext.Provider>
            )
        case "Studio":
            return (
                <ApplicationListContext.Provider value={setAllApplicationList}>
                    <DataListContext.Provider value={setDataList}>
                        <PositionedStudio dataList={dataList} functionList={functionList}/>
                    </DataListContext.Provider>
                </ApplicationListContext.Provider>
            )
        case "Notifications":
            return (
                <ApplicationDisplayPage data={myNotificationApplications} header={"My Notifications"} type={"notification"}>
                    <PositionedApplicationsDisplayTable data={myNotificationApplications} tableHeaders={myNotificationApplications.length == 0 ? null : Object.keys(myNotificationApplications[0].typeDetails)} numberOfColumns={4} type={"notification"}/>
                </ApplicationDisplayPage>
            )
        case "Reports":
            return (
                <ApplicationDisplayPage data={myReportApplications} header={"My Reports"} type={"report"}>
                    <PositionedApplicationsDisplayTable data={myReportApplications} tableHeaders={myReportApplications.length == 0 ? null : Object.keys(myReportApplications[0].typeDetails)} numberOfColumns={6} type={"report"}/>
                </ApplicationDisplayPage>
            )
        case "Visualization":
            return <PositionedVisualization dataList={dataList}/>
        case "Derived Data":
            return (
                <ApplicationDisplayPage data={dataList} header={"My Derived Data"} type={"derived_data"}>
                    <PositionedApplicationsDisplayTable data={dataList} tableHeaders={dataList.length == 0 ? null : Object.keys(dataList[0])} numberOfColumns={6} type={"derived_data"}/>
                </ApplicationDisplayPage>
            )
        default:
            return <H1>{`${props.clickedTabValue} is coming soon`}</H1>;
    }
}