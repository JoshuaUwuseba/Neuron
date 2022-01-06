import React from "react"
import SegmentedControl from "../SegmentedControl"

export default {
    component: SegmentedControl,
    title: "Example/SegmentedControl",
    argTypes: {
        onClickHandlerSeg: {
            action: "I have been clicked"
        }
    }
}

//Console functions can be written to see how the component will respond to the console
//upon actions
function onClick(e){
    console.log()
}

//Templatize Component
const Template =  (args) => <SegmentedControl {...args}/>

//Create 1 implementation of the component -> A story
export const MyApplications = Template.bind({})
//State the start up values for the story, since a template is used, this can be changed using controls
//different data can be passed into the component to manifest different stories
MyApplications.args = {
    clickedSegValue: "All applications"
}