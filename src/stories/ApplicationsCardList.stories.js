import React from "react"
import ApplicationsCardList from "../ApplicationsCardList"
import applicationListData from "../TestApplicationList"

//Component defaults
export default {
    component: ApplicationsCardList,
    title: "Neuron/ApplicationsCardList"
    
}

//Templatize component
const Template= (args) => <ApplicationsCardList {...args}/>

//Create 1 implementation of the component
export const ApplicationsCardListStory = Template.bind({})
ApplicationsCardListStory.args = {
    data: applicationListData
}