import React from 'react';
import StudioCard from './StudioCard';

const applicationType = ["notification", "answer", "report", "derivedData"]

function getStudioCardData(applicationType){
    switch(applicationType){
        case "notification":
            return {
                name: "Notifications",
                description: "This helps you build an application that notifies you when an event occurs. You can build notifications for simple events or prediected events.",
            }
        case "answer":
            return {
                name: "Answers",
                description: "This helps you build an application that give answers to your questions. You can build answers for complex questions that need a lot of processing.",
            }
        case "report":
            return {
                name: "Reports",
                description: "This helps you build an application that automatically generate reports at a defined time. You can generate both spreadsheet reports and text reports.",
            }
        case "derivedData":
            return {
                name: "Derived Data",
                description: "This helps you define new data points that are derived from existing data points.",
            }
    }
}

function StudioCardList(props) {
    return (
        <div className={props.className} style={{display: "flex", flexWrap: "wrap", width: "500px", }}>
          {applicationType.map((element, index) => (
              <StudioCard key={index} type={element} {...getStudioCardData(element)}/>
          ))}  
        </div>
    );
}

export default StudioCardList;