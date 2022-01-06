import SideBar from "./SideBar";
import Main from "./Main";
import styled from "styled-components";
import { createContext, useEffect, useState } from "react";
import NotificationBanner from "./NotificationBanner";

export const ClickedTabContext = createContext([])

const PositionedNotificationBanner = styled(NotificationBanner)`
  position: absolute;
  left: 120rem;
  top: 10rem;
`

export default function App() {
  const [clickedTab, setClickedTab] = useState("Applications")
  const [showNotification, setShowNotification] = useState(false)
  const [notificationDetails, setNotificationDetails] = useState({})

  const onClickHandler = (e) => {
    let nameOfButton = e.currentTarget.dataset.value
    setClickedTab(nameOfButton)
  }

  const onClick = (e) => {
    setShowNotification(true)
    // Set notification details
    setNotificationDetails({
      name: "TTXM Notification",
      desc: "The value is above 499°C",
      type: "notification"
    })
  }

  return(
    <ClickedTabContext.Provider value={[clickedTab, setClickedTab]}>
        <div>
          <SideBar style={{flexBasis: "33rem"}} onClickHandler={onClickHandler} clickedTabValue={clickedTab}/>
          <div style={{position: "absolute", left: "32rem", top:"0rem"}}>
            <Main clickedTabValue={clickedTab}/>
            <h1 style={{color: "white"}} onClick={onClick}>{"Trigger Notification"}</h1>
          </div>
       </div>
       {showNotification && <PositionedNotificationBanner name={notificationDetails.name} type={notificationDetails.type} desc={notificationDetails.desc} funcShowNotification={setShowNotification}/>}
    </ClickedTabContext.Provider>
  )
}
