import Logo from "./Logo"
import Settings from "./Settings"
import TabList from "./TabList"
import styled from "styled-components"

const Div = styled.div`
    position: fixed;
    width: 32rem;
    height: 90rem;
    left: 0rem;
    top: 0rem;
    background: #DD1C1A;
`

export default function SideBar(props) {
    return(
        <Div>
            <Logo/>
            <Settings/>
            <TabList onClickHandler={props.onClickHandler} clickedTabValue={props.clickedTabValue}/>
        </Div>
    )
}