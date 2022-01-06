import React, { useState } from 'react';
import { useContext } from 'react';
import { ApplicationListContext } from "./Main"
import ApplicationsCard from './ApplicationsCard';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`

function ApplicationsCardList({data, className}) {
    const setApplicationListData = useContext(ApplicationListContext); //This is the function that is used by the individual cards to update the data

    const onSwitchChange = (e) => {
        //This is the function passed into each Card for updating that particular element of the data array
        // from subscribed to not subscribed and vice-versa.
        let elementIndex = e.currentTarget.dataset.value
        let indexedData = data[elementIndex]
        let uniqueIDOfIndexedData = indexedData.uniqueID
        let updatedDataElement = Object.assign({}, indexedData, {subscribed: !indexedData["subscribed"]})
        setApplicationListData(prevData => prevData.map((element, index) => {
            if(element.uniqueID == uniqueIDOfIndexedData){
                return updatedDataElement
            }
            else{
                return element
            }
        }))
    
    }
    return (
        <Div className={className}>
            {data.map((element, index) =>
                <ApplicationsCard key={index} tag={index} name={element.name} desc={element.desc} author={element.author} authorImage={element.authorImage} type={element.type} dateCreated={element.dateCreated} subscribed={element.subscribed} onChange={onSwitchChange}/>
            )}
        </Div>
    );
}

export default ApplicationsCardList;