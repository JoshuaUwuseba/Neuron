import SegmentedControl from "./SegmentedControl";
import { useState, useRef } from "react";
import ApplicationsPage from "./ApplicationsPage";
import styled from "styled-components";
import { ApplicationListContext } from "./Main"

/*
    This component receives the application list data from the Main component, it generates the My application
    list and then conditionally renders Application Page based on the Segment Control
*/

export default function Applications(props) {
    const [clickedSegControl, setClickedSegControl] = useState("My applications")

    //const[applicationListData, setApplicationListData] = useContext(ApplicationListContext)
    //Commented the above out because of the switch from Context to props in passing the data

    const onClickHandlerSegControl = (e) => {
        let nameOfSegment = e.currentTarget.dataset.value
        setClickedSegControl(nameOfSegment)
    }

    return clickedSegControl == "My applications" ? (
        <div className={props.className}>
            <SegmentedControl onClickHandlerSegControl={onClickHandlerSegControl} clickedSegValue={clickedSegControl}/>
            <ApplicationsPage data={props.myApplicationsList} clickedSegValue={clickedSegControl}/>
        </div>
    ) : (
        <div className={props.className}>
            <SegmentedControl onClickHandlerSegControl={onClickHandlerSegControl} clickedSegValue={clickedSegControl}/>
            <ApplicationsPage data={props.allApplicationsList} clickedSegValue={clickedSegControl}/>
        </div>
    )

}