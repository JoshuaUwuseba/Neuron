import React from "react";
import ApplicationsCard from "../ApplicationsCard";
import notificationImage from "./assets/notification.svg"
import authorImage from "./assets/Joshua.png"

//Component Defaults
export default{
    component: ApplicationsCard,
    title: "Neuron/ApplicationsCard",
    argTypes:{
       onChange:{
           action: "Switch toggled"
       } 
    }
}

//Templatize component
const Template = (args) => <ApplicationsCard {...args}/>

//Create 1 implementation of the component
export const ApplicationsCardStory = Template.bind({})
ApplicationsCardStory.args = {
    name: "TTXM Notifications",
    description: "This notifies you when the exhaust is above 499°C",
    type: "notifications",
    author: "Joshua Uwuseba",
    authorImage: authorImage,
    dateCreated: "June 21, 2020",
    iconSrc: notificationImage
}

